using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO_s
{
    public class FilterUsersDTO
    {
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string UserName { get; set; }
        public bool? IsActive { get; set; }
        public List<int>? RoleIds { get; set; }
    }
}
