import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  emailOrMobile = '';
  password = '';

  alertMessage = '';
  alertType: 'success' | 'error' | '' = '';
  showPassword = false;
  isLoading = false;



  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  togglePassword() {
  this.showPassword = !this.showPassword;
}

  private getUserMessage(apiMessage: string): string {
    switch (apiMessage) {
      case 'User does not exist':
        return 'No account found with this email or mobile number.';
      case 'Incorrect password':
        return 'The password you entered is incorrect.';
      default:
        return 'Login failed. Please try again.';
    }
  }

  onLogin() {
    if (!this.emailOrMobile || !this.password) {
      this.alertType = 'error';
      this.alertMessage = 'Please enter both email/mobile and password.';
      return;
    }

    this.authService.login(this.emailOrMobile, this.password).subscribe({
      next: (res: any) => {
        console.log("this is resp", res)
        if (res.status === 'success') {
          this.alertType = 'success';
          this.alertMessage = 'Login successful. Redirecting…';

          localStorage.setItem('user_id', res.user_id.toString());
          this.isLoading = true;

          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000);
        } else {
          console.log("resp error", res)
          this.alertType = 'error';
          this.alertMessage = this.getUserMessage(res.message);
        }
      },
      error: () => {
        console.log("error")
        this.alertType = 'error';
        this.alertMessage =
          'We are unable to connect right now. Please try again later.';
      },
    });
  }
}

