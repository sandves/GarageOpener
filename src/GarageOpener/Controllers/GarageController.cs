using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GarageOpener.Services;

namespace GarageOpener.Controllers
{
    [Route("api/[controller]")]
    public class GarageController : Controller
    {
        private readonly IGarageService service;

        public GarageController(IGarageService service)
        {
            this.service = service;
        }

        // POST api/garage/open
        [HttpPost]
        [Route(nameof(Open))]
        public async Task<IActionResult> Open()
        {
            await service.OpenAsync();
            return Ok("Test");
        }
    }
}
