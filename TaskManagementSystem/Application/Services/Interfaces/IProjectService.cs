using Application.DTO_s.Project;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Services.Interfaces
{
    public interface IProjectService
    {
        Task CreateProject(CreateProjectDto input);
        Task UpdateProject(int id, CreateProjectDto input);
        Task DeleteProject(int id);
        Task<DetailsProjectDto> GetProjectById(int id);
        Task<List<DetailsProjectDto>> GetProjectsList();
        Task AssignProject(AssignProjectDto input);
        Task<List<DetailsProjectDto>> GetMyProjects();
    }
}
