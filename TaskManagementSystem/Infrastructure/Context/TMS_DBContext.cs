using Microsoft.EntityFrameworkCore;
using Domain.Entities;
using TaskStatus = Domain.Entities.TaskStatus;

namespace Infrastructure.Context
{
    public class TMS_DBContext : DbContext
    {
        public TMS_DBContext(DbContextOptions options) : base(options)
        {
        }
   

        public DbSet<User> Users { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<TaskApp> Tasks { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<TaskStatus> TaskStatuses { get; set; }
        public DbSet<ProjectType> ProjectTypes { get; set; }
        public DbSet<ProjectMember> ProjectMembers { get; set; }
        public DbSet<ActivityLog> ActivityLogs { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // 1. المفاتيح المركبة (Composite Keys)
            modelBuilder.Entity<ProjectMember>()
                .HasKey(pm => new { pm.ProjectId, pm.UserId });

            modelBuilder.Entity<UserRole>()
                .HasKey(ur => new { ur.UserId, ur.RoleId });

            // 2. منع تعارض الحذف المتعاقب لجدول ProjectMember
            modelBuilder.Entity<ProjectMember>()
                .HasOne(pm => pm.User)
                .WithMany()
                .HasForeignKey(pm => pm.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ProjectMember>()
                .HasOne(pm => pm.Project)
                .WithMany(p => p.TeamMembers)
                .HasForeignKey(pm => pm.ProjectId)
                .OnDelete(DeleteBehavior.Cascade);

            // 3. منع تعارض الحذف المتعاقب لجدول TaskApp
            modelBuilder.Entity<TaskApp>()
                .HasOne(t => t.CreatedBy)
                .WithMany()
                .HasForeignKey(t => t.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<TaskApp>()
                .HasOne(t => t.AssignedTo)
                .WithMany(u => u.Tasks)
                .HasForeignKey(t => t.AssignedToId)
                .OnDelete(DeleteBehavior.Restrict);

            // 4. منع تعارض الحذف المتعاقب لجدول ActivityLog
            modelBuilder.Entity<ActivityLog>()
                .HasOne(a => a.OldStatus)
                .WithMany()
                .HasForeignKey(a => a.OldStatusId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ActivityLog>()
                .HasOne(a => a.NewStatus)
                .WithMany()
                .HasForeignKey(a => a.NewStatusId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ActivityLog>()
                .HasOne(a => a.User)
                .WithMany()
                .HasForeignKey(a => a.UserId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
