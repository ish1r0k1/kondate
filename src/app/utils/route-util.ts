import { RouterUtil } from './router-util';

export class RouteUtil {
  static getWeekRouteUrl(weekId: string) {
    return `/${RouterUtil.Configuration.Weeks}/${weekId}`;
  }
}
