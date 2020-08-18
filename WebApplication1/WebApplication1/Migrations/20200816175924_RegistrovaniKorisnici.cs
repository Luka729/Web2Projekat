using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class RegistrovaniKorisnici : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RegistrovaniKorisnici",
                columns: table => new
                {
                    eadresaProvera = table.Column<string>(nullable: false),
                    imeProvera = table.Column<string>(nullable: true),
                    prezimeProvera = table.Column<string>(nullable: true),
                    gradProvera = table.Column<string>(nullable: true),
                    telefonProvera = table.Column<long>(nullable: false),
                    lozinkaProvera = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegistrovaniKorisnici", x => x.eadresaProvera);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RegistrovaniKorisnici");
        }
    }
}
