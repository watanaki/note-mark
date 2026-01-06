export interface Context {
  locale: string;
}

declare global {
  interface Window {
    context: Context;
  }
}

export {};
