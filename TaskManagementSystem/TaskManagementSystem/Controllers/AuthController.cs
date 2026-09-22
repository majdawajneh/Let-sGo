using Application.DTOs.Auth;
using Application.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace TaskManagementSystem.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO input)
        {
            var response = await _authService.LoginAsync(input);
            if (response == null)
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }
            return Ok(response);
        }

        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDTO input)
        {
            await _authService.ResetPassword(input);
            return Ok(new { message = "Password reset successfully." });
        }
    }
}
