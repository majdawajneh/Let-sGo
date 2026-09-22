using Application.DTO_s;
using Application.DTOs.Auth;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Services.Interfaces
{
    public interface IUserService
    {
        Task CreateUser(CreateUserDTO user);
        Task UpdateUser(int id, UpdateUserDTO user);
        Task<FilterUsersDTO> GetUserById(int userId);
        Task<List<UserListResponseDTO>> GetAllUsers(FilterUsersDTO filter);
        Task DeleteUser(int id);
        Task ChangePassword(int userId, ChangePasswordDto changePasswordDTO);

    }
}
