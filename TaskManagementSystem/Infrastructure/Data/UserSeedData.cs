using Domain.Entities;
using Infrastructure.Context;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public static class UserSeedData
    {
        public static async Task InitializeAsync(TMS_DBContext context)
        {
            // =========================
            // 1. Seed Roles
            // =========================

            string[] roleNames =
            {
                "Admin",
                "Manager",
                "Employee"
            };

            foreach (var roleName in roleNames)
            {
                var roleExists = await context.Roles
                    .AnyAsync(r => r.Name == roleName);

                if (!roleExists)
                {
                    context.Roles.Add(new Role
                    {
                        Name = roleName
                    });
                }
            }

            await context.SaveChangesAsync();


            // =========================
            // 2. Find Admin
            // =========================

            var admin = await context.Users
                .FirstOrDefaultAsync(u => u.Email == "admin@tms.com");

            var passwordHasher = new PasswordHasher<User>();


            // =========================
            // 3. Create Admin if missing
            // =========================

            if (admin == null)
            {
                admin = new User
                {
                    Name = "System Admin",
                    Email = "admin@tms.com",
                    UserName = "admin",
                    IsActive = true
                };

                admin.Password = passwordHasher.HashPassword(
                    admin,
                    "Admin1972@@M"
                );

                context.Users.Add(admin);

                await context.SaveChangesAsync();
            }
            else
            {
                // TEMPORARY:
                // فقط حتى نصلح الباسورد الموجود حاليا في قاعدة البيانات

                admin.Password = passwordHasher.HashPassword(
                    admin,
                    "Admin1972@@M"
                );

                await context.SaveChangesAsync();
            }


            // =========================
            // 4. Add Admin Role
            // =========================

            var adminRole = await context.Roles
                .FirstAsync(r => r.Name == "Admin");

            var hasAdminRole = await context.UserRoles
                .AnyAsync(ur =>
                    ur.UserId == admin.Id &&
                    ur.RoleId == adminRole.Id);

            if (!hasAdminRole)
            {
                context.UserRoles.Add(new UserRole
                {
                    UserId = admin.Id,
                    RoleId = adminRole.Id
                });

                await context.SaveChangesAsync();
            }
        }
    }
}