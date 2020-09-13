using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class RezervacijaModel
    {
        [Key]
        public int Id { get; set; }

        public string IdKorisnika { get; set; }

        public int IdLetova { get; set; }

        public string BrojevisSedista { get; set; }

        public List<SedistaTabela> SpisakSedista { get; set; }
        public RezervacijaModel()
        {
                
        }
    }
}
