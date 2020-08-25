using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class RentACarTabela : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RentACar",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NazivServisa = table.Column<string>(maxLength: 30, nullable: false),
                    AdresaServisa = table.Column<string>(maxLength: 30, nullable: false),
                    PromoOpis = table.Column<string>(maxLength: 30, nullable: false),
                    CenovnikUsluga = table.Column<double>(maxLength: 30, nullable: false),
                    Filijale = table.Column<string>(maxLength: 30, nullable: false),
                    Ocena = table.Column<double>(maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentACar", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Automobili",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Brend = table.Column<string>(nullable: false),
                    Model = table.Column<string>(nullable: false),
                    Godina = table.Column<int>(nullable: false),
                    CenaPoDanu = table.Column<double>(nullable: false),
                    RentACarModelId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Automobili", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Automobili_RentACar_RentACarModelId",
                        column: x => x.RentACarModelId,
                        principalTable: "RentACar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Automobili_RentACarModelId",
                table: "Automobili",
                column: "RentACarModelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Automobili");

            migrationBuilder.DropTable(
                name: "RentACar");
        }
    }
}
