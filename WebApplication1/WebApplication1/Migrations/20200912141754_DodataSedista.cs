using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class DodataSedista : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SlobodnaMesta",
                table: "Letovi");

            migrationBuilder.AddColumn<int>(
                name: "SlobodnaMestaId",
                table: "Letovi",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Sedista",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BrojSedista = table.Column<int>(nullable: false),
                    Zauzeto = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sedista", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Letovi_SlobodnaMestaId",
                table: "Letovi",
                column: "SlobodnaMestaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_Sedista_SlobodnaMestaId",
                table: "Letovi",
                column: "SlobodnaMestaId",
                principalTable: "Sedista",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_Sedista_SlobodnaMestaId",
                table: "Letovi");

            migrationBuilder.DropTable(
                name: "Sedista");

            migrationBuilder.DropIndex(
                name: "IX_Letovi_SlobodnaMestaId",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "SlobodnaMestaId",
                table: "Letovi");

            migrationBuilder.AddColumn<int>(
                name: "SlobodnaMesta",
                table: "Letovi",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
