using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class DodatiPrijatelji : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PrijateljiTabela",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdPosiljaoca = table.Column<string>(nullable: true),
                    IdPrimaoca = table.Column<string>(nullable: true),
                    PrihvatioZahtev = table.Column<bool>(nullable: false),
                    RegistrovaniKorisniciModelId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrijateljiTabela", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PrijateljiTabela_AspNetUsers_RegistrovaniKorisniciModelId",
                        column: x => x.RegistrovaniKorisniciModelId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PrijateljiTabela_RegistrovaniKorisniciModelId",
                table: "PrijateljiTabela",
                column: "RegistrovaniKorisniciModelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PrijateljiTabela");
        }
    }
}
