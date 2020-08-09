using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<User> _userManager;
        private SignInManager<User> _signInManager;
        private readonly ApplicationSettings _appSettings;

        public ApplicationUserController(UserManager<User> userManager,
            SignInManager<User> signInManager, IOptions<ApplicationSettings> appSettings)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
        }

        [HttpPost]
        [Route("Register")]
        //POST : /api/ApplicationUser/Register
        public async Task<Object> PostApplicationUser(User model)
        {
            var applicationUser = new User()
            {
                imeProvera = model.imeProvera,
                prezimeProvera = model.prezimeProvera,
                gradProvera = model.gradProvera,
                telefonProvera = model.telefonProvera,
                lozinkaProvera = model.lozinkaProvera,
                eadresaProvera = model.eadresaProvera,
            };

            try
            {
                var result = await _userManager.CreateAsync(applicationUser, model.lozinkaProvera);
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}