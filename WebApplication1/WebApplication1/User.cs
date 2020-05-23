using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class User
    {

        //[Key, DatabaseGenerated(DatabaseGeneratedOption.None)]

        [Key]
        public string Email { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string City { get; set; }

        public long Phone { get; set; }

        public string Pass { get; set; }

        
    }
    
}
