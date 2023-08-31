import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  user: User | null = null;
  constructor(private usersService: UsersService) {}

  async ngOnInit() {
    this.usersService.getUser().subscribe({
      next: (user) => {
        console.log('getUser', user);
        this.user = user as User;
      },
      error: () => {
        window.location.href = '/login';
      },
    });
  }

  isActive(...urls: string[]): boolean {
    return urls.includes(window.location.pathname);
  }
}
