using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class FilijaleTabela
    {
        [Key]
        public int Id { get; set; }

        
        public string AdresaFilijale { get; set; }


        public string GradFilijale { get; set; }


        public string DrzavaFilijale { get; set; }

        public string Admin { get; set; }

        public RentACarModel RentACar { get; set; }
    }
}
