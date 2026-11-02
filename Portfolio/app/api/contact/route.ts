import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  project?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const project = body.project?.trim();

    if (!name || !email || !project) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all fields.",
        },
        {
          status: 400,
        }
      );
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    const webhookUrl =
      process.env.CONTACT_WEBHOOK_URL;

    /*
     * Development / demo mode.
     * If no external email webhook is configured,
     * we still allow the form to work locally.
     */
    if (!webhookUrl) {
      console.log("Contact form submission:", {
        name,
        email,
        project,
      });

      return NextResponse.json(
        {
          success: true,
          message:
            "Message received successfully.",
        },
        {
          status: 200,
        }
      );
    }

    /*
     * Production webhook
     */
    const response = await fetch(webhookUrl, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        project,
      }),
    });

    if (!response.ok) {
      console.error(
        "Contact webhook failed:",
        response.status,
        await response.text()
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to send the message.",
        },
        {
          status: 502,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Message sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}