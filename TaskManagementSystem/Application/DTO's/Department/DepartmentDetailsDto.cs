using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO_s.Department
{
    public class DepartmentDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int LimitedEmployees { get; set; }

    }
}
