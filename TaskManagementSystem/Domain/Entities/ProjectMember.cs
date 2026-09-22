using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class ProjectMember
    {
        public int ProjectId { get; set; }
        [ForeignKey("ProjectId")]
        public Project? Project { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public User? User { get; set; }
        public DateTime JoinedDate { get; set; }
    }
}
