namespace Domain.Entities
{
    public class TaskStatus
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Code { get; set; }
        public ICollection<TaskApp> Tasks { get; set; } = new List<TaskApp>();
    }
}
