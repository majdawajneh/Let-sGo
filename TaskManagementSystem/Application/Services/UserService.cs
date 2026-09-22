using Application.DTO_s;
using Application.DTOs.Auth;
using Application.Repositories.Interfaces;
using Application.Services.Interfaces;
using BCrypt.Net;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Services
{
    public class UserService : IUserService
    {
        private readonly IGenericRepository<User> _userRepository;
        private readonly IGenericRepository<UserProfile> _userProfileRepo;
        private readonly IGenericRepository<UserRole> _userRoleRepo;
        public UserService(IGenericRepository<User> userRepo, IGenericRepository<UserRole> userRoleRepo, IGenericRepository<UserProfile> userProfileRepo)
        {
            _userRepository = userRepo;
            _userRoleRepo = userRoleRepo;
            _userProfileRepo = userProfileRepo;
        }
        public async Task CreateUser(CreateUserDTO user)
        {
            // تحقق أولاً أن كلمة المرور موجودة وليست فارغة
            if (string.IsNullOrEmpty(user.Password))
            {
                throw new ArgumentException("كلمة المرور مطلوبة.");
            }
            var newUser = new User
            {
                Name = user.Name,
                Email = user.Email,            
                UserName = user.UserName
            };
            var userRoles = new List<UserRole>();
            foreach (var roleId in user.RoleIds)
            {
                userRoles.Add(new UserRole
                    { 
                        RoleId = roleId,
                        UserId = newUser.Id
                    }
                );
            }
            var passordHash = new PasswordHasher<User>();
            newUser.Password = passordHash.HashPassword(newUser, newUser.Password);

            await _userRepository.Insert(newUser);
            await _userRepository.SaveChanges();
        }

        public async Task UpdateUser(int id, UpdateUserDTO user)
        {
            var FindUser = await _userRepository.GetById(id);
            if (FindUser == null)
            {
                throw new ArgumentException("المستخدم غير موجود.");
            }
            FindUser.UserName = user.UserName;
            FindUser.Name = user.Name;
            FindUser.Email = user.Email;            
            if (!string.IsNullOrEmpty(user.Password))
            {
                FindUser.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            }
            await _userRepository.Update(FindUser);

            var userRoles = new List<UserRole>();
            foreach (var roleId in user.RoleIds)
            {
                userRoles.Add(new UserRole
                {
                    RoleId = roleId,
                    UserId = FindUser.Id
                });
            }
            await _userRoleRepo.InsertRange(userRoles);
            await _userRoleRepo.DeleteRange(FindUser.UserRoles.ToList());
            await _userRepository.SaveChanges();
        }
        public async Task<FilterUsersDTO> GetUserById(int userId)
        {
            var user = await _userRepository.GetAll().Include(x => x.UserRoles).FirstOrDefaultAsync(x => x.Id == userId);
            if (user == null)
            {
                throw new ArgumentException("User not found");
            }
            return new FilterUsersDTO
            { 
                Name = user.Name,
                Email = user.Email,
                UserName = user.UserName,
                IsActive = user.IsActive,
                RoleIds = user.UserRoles.Select(ur => ur.RoleId).ToList()
            };       
        }
        public async Task<List<UserListResponseDTO>> GetAllUsers(FilterUsersDTO filter)
        {
            var users = _userRepository.GetAll(); // أو حسب طريقة جلب البيانات عندك

            if (!string.IsNullOrEmpty(filter.Name))
            {
                users = users.Where(u => u.Name.ToLower().Contains(filter.Name.Trim().ToLower()));
            }

            if (!string.IsNullOrEmpty(filter.Email))
            {
                users = users.Where(u => u.Email.ToLower().Contains(filter.Email.Trim().ToLower()));
            }

            var responseList = users.Select(x => new UserListResponseDTO
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                UserName = x.UserName
            }).ToList();

            return responseList; // إضافة الإرجاع هنا
        }
        public async Task DeleteUser(int id)
        {
            var user = await _userRepository.GetById(id);
            if (user == null)
            {
                throw new ArgumentException("User not found");
            }

            await _userRepository.Delete(user);
            await _userRepository.SaveChanges();
        }
        public async Task ChangePassword(int userId, ChangePasswordDto changePasswordDTO)
        {
            var user = await _userRepository.GetById(userId);
            if (user == null)
            {
                throw new ArgumentException("User not found");
            }        

            // Verify new password matches confirmation before hashing
            if (changePasswordDTO.NewPassword != changePasswordDTO.ConfirmNewPassword)
            {
                throw new ArgumentException("كلمة المرور الجديدة وتأكيدها غير متطابقين.");
            }

            // Update password
            user.Password = BCrypt.Net.BCrypt.HashPassword(changePasswordDTO.NewPassword);

            await _userRepository.Update(user);
            await _userRepository.SaveChanges();
        }

    }
}
