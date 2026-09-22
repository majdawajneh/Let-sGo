using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class TaskApp
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public int StatusId { get; set; }
        [ForeignKey("StatusId")]
        public TaskStatus? Status { get; set; }
        public int? AssignedToId { get; set; }
        [ForeignKey("AssignedToId")]
        public User? AssignedTo { get; set; }
        public int CreatedById { get; set; }
        [ForeignKey("CreatedById")]
        public User? CreatedBy { get; set; }
        public int ProjectId { get; set; }
        [ForeignKey("ProjectId")]
        public Project Project { get; set; }
    }
}
