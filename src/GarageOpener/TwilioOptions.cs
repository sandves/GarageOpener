using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarageOpener
{
    public class TwilioOptions
    {
        public string AccountSid { get; set; }
        public string AuthToken { get; set; }
        public string To { get; set; }
        public string From { get; set; }
        public string CallbackUrl { get; set; }
        public string ApiUrl { get; set; }
    }
}
