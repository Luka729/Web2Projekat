using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class dodataKolekcija : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PrijateljiTabela_AspNetUsers_RegistrovaniKorisniciModelId",
                table: "PrijateljiTabela");

            migrationBuilder.DropIndex(
                name: "IX_PrijateljiTabela_RegistrovaniKorisniciModelId",
                table: "PrijateljiTabela");

            migrationBuilder.DropColumn(
                name: "RegistrovaniKorisniciModelId",
                table: "PrijateljiTabela");

            migrationBuilder.AddColumn<string>(
                name: "RegistrovaniKorisniciModelId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_RegistrovaniKorisniciModelId",
                table: "AspNetUsers",
                column: "RegistrovaniKorisniciModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_AspNetUsers_RegistrovaniKorisniciModelId",
                table: "AspNetUsers",
                column: "RegistrovaniKorisniciModelId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_AspNetUsers_RegistrovaniKorisniciModelId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_RegistrovaniKorisniciModelId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RegistrovaniKorisniciModelId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "RegistrovaniKorisniciModelId",
                table: "PrijateljiTabela",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PrijateljiTabela_RegistrovaniKorisniciModelId",
                table: "PrijateljiTabela",
                column: "RegistrovaniKorisniciModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_PrijateljiTabela_AspNetUsers_RegistrovaniKorisniciModelId",
                table: "PrijateljiTabela",
                column: "RegistrovaniKorisniciModelId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
