using System;
using System.Collections.Generic;
using System.Text;

namespace Application.DTO_s
{
    public class UserListResponseDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string? Email { get; set; }
    }
}
