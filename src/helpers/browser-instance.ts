export function getBrowserInstance(): typeof chrome {
    // Extension API Chrome or Firefox
    return window.chrome || (window as any)['browser'];
}