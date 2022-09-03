export class RouteBuilder {
  protected static build(parts: string[]): string {
    return '/' + parts.join('/');
  }

  static cv(): string {
    return 'https://my.visualcv.com/vladimir-tolstikov/';
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
