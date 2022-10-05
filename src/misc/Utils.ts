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

  /**
   * Returns shuffled array
   * @link https://stackoverflow.com/a/46545530/5086732
   */
  static shuffleArray<T>(arr: Array<T>): Array<T> {
    return arr
      .map(value => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value);
  }

  /**
   * Preloads image
   */
  static preloadImage(url: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = (err: any) => {
        reject(err);
      };
    });
  }
}
