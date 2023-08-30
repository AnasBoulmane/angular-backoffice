import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/users/types/user';

@Component({
  selector: 'app-user-avatar-nav',
  templateUrl: './user-avatar-nav.component.html',
})
export class UserAvatarNavComponent {
  @Input() user: User | null = null;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        window.location.href = '/login';
      },
      error: (error) => {
        console.log('Error', error);
      },
    });
  }
}
