using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class User
    {
        public int Id { get; set; }
        [MaxLength(200)]
        [MinLength(3)]
        public string Name { get; set; } = string.Empty;
        [MaxLength(200)]
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        [MaxLength(200)]
        [MinLength(3)]
        public string UserName { get; set; } = string.Empty;
        public bool IsActive { get; set; }
        public int? DepartmentId { get; set; }
        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }

        public UserProfile Profile { get; set; }
        public ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
        public ICollection<TaskApp> Tasks { get; set; } = new List<TaskApp>();
        public ICollection<Project> Projects { get; set; } = new List<Project>();
    }
}
