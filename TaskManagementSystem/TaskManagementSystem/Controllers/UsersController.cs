using Application.DTO_s;
using Application.DTOs.Auth;
using Application.Services.Interfaces;
using Domain.Entities;
using Infrastructure.Context;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
namespace TaskManagementSystem.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("CreateUser")]
        public async Task<IActionResult> CreateUser([FromBody] CreateUserDTO user)
        {
            await _userService.CreateUser(user);
            return Ok();
        }

        [HttpPut("UpdateUser")]
        public async Task<IActionResult> UpdateUser(int userId, [FromBody] UpdateUserDTO user)
        {
            await _userService.UpdateUser(userId, user);
            return Ok();
        }

        [HttpPost("GetUserById")]
        public async Task<IActionResult> GetUserById(int userId)
        {
            var user = await _userService.GetUserById(userId);
            return Ok(user);
        }

        [HttpPost("GetAllUsers")]
        public async Task<IActionResult> GetAllUsers([FromBody] FilterUsersDTO filter)
        {
            var responseList = await _userService.GetAllUsers(filter);
            return Ok(responseList);
        }

        [HttpDelete("DeleteUser/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            await _userService.DeleteUser(id);
            return Ok(new { message = "تم حذف المستخدم بنجاح" });
        }

        [HttpPost("ChangePassword")]
        public async Task<IActionResult> ChangePassword(int userId, [FromBody] ChangePasswordDto changePasswordDTO)
        {
            await _userService.ChangePassword(userId, changePasswordDTO);
            return Ok(new { message = "تم تغيير كلمة المرور بنجاح" });
        }
    }
}
            
        
    

