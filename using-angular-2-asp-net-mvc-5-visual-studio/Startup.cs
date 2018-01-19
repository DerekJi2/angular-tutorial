using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(using_angular_2_asp_net_mvc_5_visual_studio.Startup))]
namespace using_angular_2_asp_net_mvc_5_visual_studio
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
