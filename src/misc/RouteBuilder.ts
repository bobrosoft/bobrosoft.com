export class RouteBuilder {
  protected static build(parts: string[]): string {
    return '/' + parts.join('/');
  }

  static cv(): string {
    return 'https://www.dropbox.com/scl/fi/eoiryns36tuonaidsre7w/cv.pdf?rlkey=b2mk69ytfvyx6h8zdr1mur4yc&raw=1';
  }

  static linkedin(): string {
    return 'https://linkedin.com/in/bobrosoft';
  }

  static github(): string {
    return 'https://github.com/bobrosoft';
  }

  static articles(): string {
    return 'https://medium.com/@vladimirtolstikov/latest';
  }
}
