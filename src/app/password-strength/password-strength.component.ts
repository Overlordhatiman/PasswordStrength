import { Component, Input, OnChanges } from '@angular/core';
import { PasswordStrengthService } from '../service/password-strength.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() password: string = '';
  strengthClass: string[] = ['gray', 'gray', 'gray'];

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnChanges(): void {
    this.updateStrength();
  }

  private updateStrength(): void {
    if (this.password.length === 0) {
      this.strengthClass = ['gray', 'gray', 'gray'];
    } else if (this.password.length < 8) {
      this.strengthClass = ['red', 'red', 'red'];
    } else if (this.passwordStrengthService.isStrong(this.password)) {
      this.strengthClass = ['green', 'green', 'green'];
    } else if (this.passwordStrengthService.isMedium(this.password)) {
      this.strengthClass = ['yellow', 'yellow', 'gray'];
    } else if (this.passwordStrengthService.isEasy(this.password)) {
      this.strengthClass = ['red', 'gray', 'gray'];
    }
  }
}
