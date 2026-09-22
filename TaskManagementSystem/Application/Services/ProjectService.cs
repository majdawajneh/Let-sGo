using Application.DTO_s.Project;
using Application.Repositories.Interfaces;
using Application.Services.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace Application.Services
{
    public class ProjectService : IProjectService
    {
        private readonly IGenericRepository<Project> _projectRepo;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public ProjectService(IGenericRepository<Project> projectRepo, IHttpContextAccessor httpContextAccessor)
        {
            _projectRepo = projectRepo;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task CreateProject(CreateProjectDto input)
        {
            var IsProjectExist = await _projectRepo.GetAll().AnyAsync(p => p.Name.ToLower().Trim() == input.Name.ToLower().Trim());

            if (IsProjectExist)
            {
                throw new Exception("Project Name already Exist");
            }

            var project = new Project
            {
                Name = input.Name,
                Description = input.Description,
                TypeId = input.TypeId,
                StartDate = input.StartDate,
                EndDate = input.EndDate
            };
            await _projectRepo.Insert(project);
            await _projectRepo.SaveChanges();
        }

        public async Task DeleteProject(int id)
        {
            var project = await _projectRepo.GetAll().Include(p => p.Tasks).FirstOrDefaultAsync(x => x.Id == id);
            if (project != null)
            {
                if (!project.Tasks.Any())
                {
                    await _projectRepo.Delete(project);
                    await _projectRepo.SaveChanges();
                }
                else
                {
                    throw new Exception("Cannot Delete Project with tasks assigned ");
                }
            }
            else
            {
                throw new Exception("Project not found ");
            }
        }

        public async Task<DetailsProjectDto> GetProjectById(int id)
        {
            var project = await _projectRepo.GetById(id);
            if (project == null)
            {
                throw new Exception("Project not found");
            }

            var projectDetails = new DetailsProjectDto
            {
                Id = project.Id,
                Name = project.Name,
                Description = project.Description,
                TypeId = project.TypeId,
                StartDate = project.StartDate,
                EndDate = project.EndDate
            };
            return projectDetails;
        }

        public async Task<List<DetailsProjectDto>> GetProjectsList()
        {
            var project = await _projectRepo.GetAll().Select(project => new DetailsProjectDto
            {
                Id = project.Id,
                Name = project.Name,
                Description = project.Description,
                TypeId = project.TypeId,
                StartDate = project.StartDate,
                EndDate = project.EndDate

            }).ToListAsync();

            return project;
        }

        public async Task UpdateProject(int id, CreateProjectDto input)
        {
            var project = await _projectRepo.GetById(id);
            if (project == null)
            {
                throw new Exception("Project not found");
            }
      
                project.Name = input.Name;
                project.Description = input.Description;
                project.TypeId = input.TypeId;
                project.StartDate = input.StartDate;
                project.EndDate = input.EndDate;
            _projectRepo.Update(project);
            await _projectRepo.SaveChanges();
        }
        public async Task AssignProject(AssignProjectDto input)
        {
            var project = await _projectRepo.GetById(input.ProjectId);
            if (project == null)
            {
                throw new Exception("Project not found");
            }

            project.ProjectManagerId = input.ManagerId;

            _projectRepo.Update(project);
            await _projectRepo.SaveChanges();
        }


        public async Task<List<DetailsProjectDto>> GetMyProjects()
        {
            var userIdClaim = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
            var userId = Convert.ToInt32(userIdClaim);
            var project = await _projectRepo.GetAll()
                .Where(x => x.ProjectManagerId == userId)
                .Select(project => new DetailsProjectDto
            {
                Id = project.Id,
                Name = project.Name,
                Description = project.Description,
                TypeId = project.TypeId,
                StartDate = project.StartDate,
                EndDate = project.EndDate

            }).ToListAsync();

            return project;
        }
    }
}
