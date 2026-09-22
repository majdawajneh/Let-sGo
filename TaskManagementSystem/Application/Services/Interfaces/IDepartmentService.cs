using Application.DTO_s.Department;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Services.Interfaces
{
    public interface IDepartmentService
    {
        Task CreateDepartment(CreateDepartmentDto input);
        Task UpdateDepartment(int id, CreateDepartmentDto input);
        Task DeleteDepartment(int id);
        Task<DepartmentDetailsDto> GetDepartmentById(int id);
        Task<List<DepartmentDetailsDto>> GetDepartmentsList();
    }
}
