using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
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
            using (var client = new HttpClient())
            {
                var byteArray = Encoding.UTF8.GetBytes($"{options.Value.AccountSid}:{options.Value.AuthToken}");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

                var parameters = new FormUrlEncodedContent(new Dictionary<string, string> {
                    { "To", options.Value.To },
                    { "From", options.Value.From },
                    { "Url", options.Value.CallbackUrl }
                });

                var response = await client.PostAsync(options.Value.ApiUrl, parameters);
                response.EnsureSuccessStatusCode();
            }
        }
    }
}
