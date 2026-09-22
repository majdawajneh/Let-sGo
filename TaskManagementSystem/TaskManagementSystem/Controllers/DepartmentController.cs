using Application.DTO_s.Department;
using Application.Services;
using Application.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TaskManagementSystem.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;
        public DepartmentController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }

        [HttpPost("CreateDepartment")]
        public async Task<IActionResult> CreateDepartment([FromBody] CreateDepartmentDto input)
        {
            await _departmentService.CreateDepartment(input);
            return Ok();
        }

        [HttpPost("CreateDepartment/{id}")]
        public async Task<IActionResult> UpdateDepartment(int id, [FromBody] CreateDepartmentDto input)
        {
            await _departmentService.UpdateDepartment(id, input);
            return Ok();
        }

        [HttpDelete("DeleteDepartment/{id}")]
        public async Task<IActionResult> DeleteDepartment(int id)
        {
            await _departmentService.DeleteDepartment(id);
            return Ok();
        }

        [HttpGet("GetDepartmentById/{id}")]
        public async Task<IActionResult> GetDepartmentById(int id)
        {
            var departments = await _departmentService.GetDepartmentById(id);
            return Ok(departments);
        }
        [Authorize(Roles = "Manager,Admin")]
        [HttpGet("GetDepartmentsList")]
        public async Task<IActionResult> GetDepartmentsList()
        {
            var departments = await _departmentService.GetDepartmentsList();
            return Ok(departments);
        }
    }
}
