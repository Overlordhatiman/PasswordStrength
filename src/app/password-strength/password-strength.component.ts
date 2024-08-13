import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  strengthClass: string[] = ['gray', 'gray', 'gray'];

  onPasswordInput(event: any): void {
    const inputValue = event.target.value;
    this.password = inputValue;
    this.calculateStrength(inputValue);
  }

  private calculateStrength(password: string): void {
    this.strengthClass = ['gray', 'gray', 'gray'];
    if (this.isStrong(password)) {
      this.strengthClass = ['green', 'green', 'green'];
    } 
    else if (this.isMedium(password)) {
      this.strengthClass = ['yellow', 'yellow', 'gray'];
    }
    else if(this.isEasy(password)) {
      this.strengthClass = ['red', 'gray', 'gray'];
    }
    else if (password.length < 8) {
      this.strengthClass = ['red', 'gray', 'gray'];
    }
  }

  private isEasy(password: string): boolean {
    return (
      /^[a-zA-Z]+$/.test(password) || // Only letters
      /^[\d]+$/.test(password) || // Only digits
      /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+$/.test(password) // Only symbols
    );
  }

  private isMedium(password: string): boolean {
    return (
      /([a-zA-Z].*[\d]|[\d].*[a-zA-Z])/.test(password) || // Letters and digits
      /([a-zA-Z].*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?].*[a-zA-Z])/.test(password) || // Letters and symbols
      /([\d].*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?].*[\d])/.test(password) // Digits and symbols
    );
  }
  
  private isStrong(password: string): boolean {
    return /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(password);
  }
  
  
}
