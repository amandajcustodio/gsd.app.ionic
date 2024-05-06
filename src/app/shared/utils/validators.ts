export namespace CustomValidators {
  export function isValidPassword(password: string): string | boolean {
    return password && password.trim().length >= 6;
  }

  export function isValidCPF(password: string): string | boolean {
    return password && password.trim().length >= 6;
  }
}
