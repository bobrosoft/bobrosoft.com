export class Utils {
  /**
   * Returns TRUE if current browser is Chromium-based
   */
  static isChromium(): boolean {
    return !!(window as any)['chrome'];
  }

  /**
   * Return TRUE if current user is bot/crawler
   */
  static isBot(): boolean {
    return !!navigator.userAgent.match(/bot|crawler|spider|crawling/i);
  }

  /**
   * Returns TRUE if color is a light color
   */
  static isLightColor(hexColor: string): boolean {
    const hex = hexColor.replace('#', '');
    const c_r = parseInt(hex.substring(0, 2), 16);
    const c_g = parseInt(hex.substring(2, 2 + 2), 16);
    const c_b = parseInt(hex.substring(4, 4 + 2), 16);
    const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;

    return brightness > 155;
  }
}
