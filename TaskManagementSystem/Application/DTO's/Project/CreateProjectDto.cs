using Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Application.DTO_s.Project
{
    public class CreateProjectDto
    {

        public string Name { get; set; }
        public string Description { get; set; }
        public int TypeId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
