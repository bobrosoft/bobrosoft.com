export class Utils {
  /**
   * Returns TRUE if current browser is Chromium-based
   */
  static isChromium(): boolean {
    return !!(window as any)['chrome'];
  }
}
