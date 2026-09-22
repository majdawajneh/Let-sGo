using Application.DTO_s.Department;
using Application.Repositories.Interfaces;
using Application.Services.Interfaces;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Services
{
    public class DepartmentService : IDepartmentService
    {
        private readonly IGenericRepository<Department> _departmentRepo;
        public DepartmentService(IGenericRepository<Department> departmentRepo)
        {
            _departmentRepo = departmentRepo;
        }
        public async Task CreateDepartment(CreateDepartmentDto input)
        {
            var isNameExist = await _departmentRepo.GetAll().AnyAsync(N => N.Name.ToLower().Trim() == input.Name.ToLower().Trim());
            if (isNameExist)
            {
                throw new Exception("This Department is already exist..");
            }
            var department = new Department
            {
                Name = input.Name,
                Description = input.Description,
                LimitedEmployees = input.LimitedEmployees
            };

            await _departmentRepo.Insert(department);
            await _departmentRepo.SaveChanges();
        }

        public async Task DeleteDepartment(int id)
        {
            var department = await _departmentRepo.GetAll()
                .Include(x => x.UserProfiles)
                .FirstOrDefaultAsync(x => x.Id == id);
            if (department != null)
            {
                if (!department.UserProfiles.Any())
                {
                    await _departmentRepo.Delete(department);
                    await _departmentRepo.SaveChanges();
                }
                else
                {
                    throw new Exception("Cannot Delete department with assigned employees !");
                }
            }
            else
            {
                throw new Exception("Department not found");
            }
        }

        public async Task<DepartmentDetailsDto> GetDepartmentById(int id)
        {
            var department = await _departmentRepo.GetById(id);
            if (department == null)
            {
                throw new Exception("Department not found !");
            }

            var DepartmentDetails = new DepartmentDetailsDto
            {
                Id = department.Id,
                Name = department.Name,
                Description = department.Description,
                LimitedEmployees = department.LimitedEmployees
            };
            return DepartmentDetails;
        }

        public async Task<List<DepartmentDetailsDto>> GetDepartmentsList()
        {
            var departments = await _departmentRepo.GetAll()
                .Select(d => new DepartmentDetailsDto
            {
                Id = d.Id,
                Name = d.Name,
                Description = d.Description,
                LimitedEmployees = d.LimitedEmployees
            }).ToListAsync();

            return departments;
        }

        public async Task UpdateDepartment(int id, CreateDepartmentDto input)
        {
            var department = await _departmentRepo.GetById(id);
            if (department == null)
            {
                throw new Exception("Department not found !");
            }
            department.Name = input.Name;
            department.Description = input.Description;
            department.LimitedEmployees = input.LimitedEmployees;

            _departmentRepo.Update(department);
            await _departmentRepo.SaveChanges();
        }
    }
}
