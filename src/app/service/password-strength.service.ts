import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  isEasy(password: string): boolean {
    return /^[a-zA-Z]+$/.test(password) || /^[\d]+$/.test(password) || /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+$/.test(password);
  }

  isMedium(password: string): boolean {
    return (
      /([a-zA-Z].*[\d]|[\d].*[a-zA-Z])/.test(password) || 
      /([a-zA-Z].*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?].*[a-zA-Z])/.test(password) ||
      /([\d].*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?].*[\d])/.test(password)
    );
  }

  isStrong(password: string): boolean {
    return /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(password);
  }
}
