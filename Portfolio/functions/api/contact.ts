interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
}

type ContactPayload = {
  name?: string;
  email?: string;
  project?: string;
};

type FunctionContext = {
  request: Request;
  env: Env;
};

function jsonResponse(
  body: Record<string, unknown>,
  status = 200
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function onRequestPost(
  context: FunctionContext
): Promise<Response> {
  try {
    const { request, env } = context;

    if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
      console.error("Missing contact email environment variables.");

      return jsonResponse(
        {
          success: false,
          message: "Contact service is not configured.",
        },
        500
      );
    }

    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const project = body.project?.trim() ?? "";

    if (!name || !email || !project) {
      return jsonResponse(
        {
          success: false,
          message: "Please complete all fields.",
        },
        400
      );
    }

    if (
      name.length > 100 ||
      email.length > 200 ||
      project.length > 5000
    ) {
      return jsonResponse(
        {
          success: false,
          message: "Submitted data is too long.",
        },
        400
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return jsonResponse(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        400
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeProject = escapeHtml(project).replaceAll("\n", "<br />");

    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [env.CONTACT_TO_EMAIL],
          reply_to: email,
          subject: `Portfolio inquiry from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2>New Portfolio Inquiry</h2>

              <p>
                <strong>Name:</strong><br />
                ${safeName}
              </p>

              <p>
                <strong>Email:</strong><br />
                ${safeEmail}
              </p>

              <p>
                <strong>Project / Message:</strong><br />
                ${safeProject}
              </p>
            </div>
          `,
        }),
      }
    );

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend error:", resendData);

      return jsonResponse(
        {
          success: false,
          message: "Unable to send your message.",
        },
        500
      );
    }

    return jsonResponse({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact function error:", error);

    return jsonResponse(
      {
        success: false,
        message: "Something went wrong.",
      },
      500
    );
  }
}