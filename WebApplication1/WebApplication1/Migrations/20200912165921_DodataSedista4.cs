using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class DodataSedista4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_Sedista_SlobodnaMestaModelId",
                table: "Letovi");

            migrationBuilder.DropIndex(
                name: "IX_Letovi_SlobodnaMestaModelId",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "SlobodnaMestaModelId",
                table: "Letovi");

            migrationBuilder.AddColumn<int>(
                name: "LetoviModelId",
                table: "Sedista",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sedista_LetoviModelId",
                table: "Sedista",
                column: "LetoviModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sedista_Letovi_LetoviModelId",
                table: "Sedista",
                column: "LetoviModelId",
                principalTable: "Letovi",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sedista_Letovi_LetoviModelId",
                table: "Sedista");

            migrationBuilder.DropIndex(
                name: "IX_Sedista_LetoviModelId",
                table: "Sedista");

            migrationBuilder.DropColumn(
                name: "LetoviModelId",
                table: "Sedista");

            migrationBuilder.AddColumn<int>(
                name: "SlobodnaMestaModelId",
                table: "Letovi",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Letovi_SlobodnaMestaModelId",
                table: "Letovi",
                column: "SlobodnaMestaModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_Sedista_SlobodnaMestaModelId",
                table: "Letovi",
                column: "SlobodnaMestaModelId",
                principalTable: "Sedista",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
