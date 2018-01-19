using System.Web;
using System.Web.Mvc;

namespace using_angular_2_asp_net_mvc_5_visual_studio
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
