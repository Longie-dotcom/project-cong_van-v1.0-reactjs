
namespace TheodoreServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddSignalR();
            builder.Services.AddCors();
            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            var app = builder.Build();
            app.UseCors(builder => builder
                .WithOrigins("https://project-cong-van-v1-0-reactjs.vercel.app/") // https://project-cong-van-v1-0-reactjs.vercel.app/
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();
            app.MapHub<GameHub>("/gameHub");
            app.Run();
        }
    }
}
