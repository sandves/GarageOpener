using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarageOpener.Services
{
    public class GarageService : IGarageService
    {
        private readonly ILogger logger;
        private readonly IOptions<TwilioOptions> options;

        public GarageService(ILoggerFactory loggerFactory, IOptions<TwilioOptions> options)
        {
            logger = loggerFactory.CreateLogger<GarageService>();
            this.options = options;
        }

        public async Task OpenAsync()
        {

        }
    }
}
