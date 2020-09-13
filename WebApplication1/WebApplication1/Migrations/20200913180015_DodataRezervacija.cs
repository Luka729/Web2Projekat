using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class DodataRezervacija : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RezervacijaModelId",
                table: "Sedista",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "RezervacijaTabela",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdKorisnika = table.Column<int>(nullable: false),
                    IdLetova = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RezervacijaTabela", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Sedista_RezervacijaModelId",
                table: "Sedista",
                column: "RezervacijaModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sedista_RezervacijaTabela_RezervacijaModelId",
                table: "Sedista",
                column: "RezervacijaModelId",
                principalTable: "RezervacijaTabela",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sedista_RezervacijaTabela_RezervacijaModelId",
                table: "Sedista");

            migrationBuilder.DropTable(
                name: "RezervacijaTabela");

            migrationBuilder.DropIndex(
                name: "IX_Sedista_RezervacijaModelId",
                table: "Sedista");

            migrationBuilder.DropColumn(
                name: "RezervacijaModelId",
                table: "Sedista");
        }
    }
}
