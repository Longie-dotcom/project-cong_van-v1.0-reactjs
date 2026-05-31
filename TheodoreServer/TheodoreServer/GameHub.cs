using Microsoft.AspNetCore.SignalR;

namespace TheodoreServer
{
    public class GameHub : Hub
    {
        // Phương thức để người chơi gửi điểm lên
        public async Task UpdatePlayerState(object playerState)
        {
            await Clients.Group("AdminGroup").SendAsync("ReceivePlayerUpdate", playerState);
        }

        // Phương thức để Admin đăng ký làm dashboard
        public async Task JoinAdminGroup()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "AdminGroup");
        }
    }
}
