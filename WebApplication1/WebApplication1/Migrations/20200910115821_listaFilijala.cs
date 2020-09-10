using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class listaFilijala : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Filijale",
                table: "RentACar");

            migrationBuilder.CreateTable(
                name: "FilijaleTabela",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdresaFilijale = table.Column<string>(nullable: true),
                    GradFilijale = table.Column<string>(nullable: true),
                    DrzavaFilijale = table.Column<string>(nullable: true),
                    RentACarId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FilijaleTabela", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FilijaleTabela_RentACar_RentACarId",
                        column: x => x.RentACarId,
                        principalTable: "RentACar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FilijaleTabela_RentACarId",
                table: "FilijaleTabela",
                column: "RentACarId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FilijaleTabela");

            migrationBuilder.AddColumn<string>(
                name: "Filijale",
                table: "RentACar",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
