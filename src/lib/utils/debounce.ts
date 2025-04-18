// Utilitaire debounce générique
export function debounce<T extends (...args: any[]) => void>(fn: T, delay = 200): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
