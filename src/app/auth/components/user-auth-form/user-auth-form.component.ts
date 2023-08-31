import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-auth-form',
  templateUrl: './user-auth-form.component.html',
})
export class UserAuthFormComponent implements OnInit {
  error: string | null = null;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.usersService.getUser().subscribe({
      next: () => (this.isLoading = true),
    });

    this.usersService
      .getUser()
      .pipe(delay(3000))
      .subscribe({
        next: () => {
          this.redirectToHome();
        },
      });
  }

  onSubmit(username: string, password: string) {
    this.authService.login(username, password).subscribe({
      next: () => this.redirectToHome(),
      error: (error) => {
        console.log('Error', error.error);
        this.error =
          error.error.statusCode === 401
            ? 'Invalid credentials'
            : 'Unknown error';
      },
    });
    return false;
  }

  redirectToHome(): void {
    window.location.href = '/';
  }
}
