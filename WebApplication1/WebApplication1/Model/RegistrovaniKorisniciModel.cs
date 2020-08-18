using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    [Table("RegistrovaniKorisnici")]

    public class RegistrovaniKorisniciModel : IdentityUser
    {
        [Required]
        [MinLength(5)]
        [MaxLength(30)]
        public string Ime { get; set; }

        [Required]
        [MinLength(5)]
        [MaxLength(30)]
        public string Prezime { get; set; }

        [Required]
        [MinLength(5)]
        [MaxLength(30)]
        public string Grad { get; set; }


    }
}
