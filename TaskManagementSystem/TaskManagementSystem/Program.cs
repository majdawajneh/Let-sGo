using Application.Repositories.Interfaces;
using Application.Services;
using Application.Services.Interfaces;
using Infrastructure.Context;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi;
using System.Text;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<TMS_DBContext>(options =>
    options.UseSqlServer(
        "Server=Majd;Database=Task_Management_System;User Id=sa;Password=Majd12345?;Encrypt=True;TrustServerCertificate=True;"
    )
);

var JwtSection = builder.Configuration.GetSection("JWT");

// تحويل الـ Key من String إلى Bytes
var JwtKey = Encoding.UTF8.GetBytes(JwtSection["Key"]);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters =
            new Microsoft.IdentityModel.Tokens.TokenValidationParameters
            {
                ValidIssuer = JwtSection["Issuer"],
                ValidAudience = JwtSection["Audience"],
                IssuerSigningKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(JwtKey),
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
            };
    });

builder.Services.AddScoped(typeof(IGenericRepository<>),typeof(GenericRepository<>));
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<IDepartmentService, DepartmentService>();
builder.Services.AddScoped<IProjectService, ProjectService>();
// Swagger لازم يكون قبل Build
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Task Management System API",
        Version = "v1"
    });

    var securityScheme = new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter your valid JWT token"
    };

    c.AddSecurityDefinition("Bearer", securityScheme);

    c.AddSecurityRequirement(document => new OpenApiSecurityRequirement
    {
        [new OpenApiSecuritySchemeReference("Bearer", document)] = []
    });
});


// هنا فقط نعمل Build
var app = builder.Build();

// Seed the database with initial data
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<TMS_DBContext>();
    await UserSeedData.InitializeAsync(context);
}


// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthentication(); // مهم جدًا للـ JWT

app.UseAuthorization();

app.MapControllers();

app.Run();