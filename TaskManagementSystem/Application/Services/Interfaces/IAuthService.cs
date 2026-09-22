using Application.DTOs.Auth;
using Domain.Entities;

namespace Application.Services.Interfaces
{
    public interface IAuthService
    {
        Task<LoginResponseDTO> LoginAsync(LoginRequestDTO input);
        string GenerateAccessToken(User user);
        string GenerateRefreshToken();
        Task ResetPassword(ResetPasswordDTO input);
        Task<string> RefreshToken(string refreshToken);
    }
}