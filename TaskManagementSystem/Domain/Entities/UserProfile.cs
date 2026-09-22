using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class UserProfile
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public User? User { get; set; }
        public int? DepartmentId { get; set; }
        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }
        public string PhoneNumber { get; set; }
        public string ProfilePictureUrl { get; set; }
        public string Bio { get; set; }
    }
}
