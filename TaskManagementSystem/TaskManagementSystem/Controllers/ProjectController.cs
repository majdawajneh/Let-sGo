using Application.DTO_s.Project;
using Application.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TaskManagementSystem.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectService _projectService;
        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpPost("CreateProject")]
        public async Task<IActionResult> CreateProject([FromBody] CreateProjectDto input)
        {
            await _projectService.CreateProject(input);
            return Ok();
        }

        [HttpGet("GetProjectById/{id}")]
        public async Task<IActionResult> GetProjectById(int id)
        {
            var project = await _projectService.GetProjectById(id);
            return Ok(project);
        }

        [HttpPost("UpdateProject/{id}")]
        public async Task<IActionResult> UpdateProject(int id, CreateProjectDto input)
        {
            await _projectService.UpdateProject(id, input);
            return Ok();
        }

        [HttpDelete("DeleteProject/{id}")]
        public async Task<IActionResult> DeleteProject(int id)
        {
            await _projectService.DeleteProject(id);
            return Ok();
        }
        
        [HttpGet("GetProjectsList")]
        public async Task<IActionResult> GetProjectsList()
        {           
            await _projectService.GetProjectsList();
            return Ok();
        }

        [HttpPost("AssignProject")]
        public async Task<IActionResult> AssignProject([FromBody]AssignProjectDto input)
        {
            await _projectService.AssignProject(input);
            return Ok();
        }

        [Authorize(Roles = "Manager")]
        [HttpGet("GetMyProjects")]
        public async Task<IActionResult> GetMyProjects()
        {
            await _projectService.GetMyProjects();
            return Ok();
        }
    }
}
