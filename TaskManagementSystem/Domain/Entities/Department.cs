using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class Department
    {
        public int Id { get; set; }
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;
        [MaxLength(200)]
        public string Description { get; set; } = string.Empty;
        public int LimitedEmployees { get; set; }
        public ICollection<UserProfile> UserProfiles { get; set; } 
    }
}
