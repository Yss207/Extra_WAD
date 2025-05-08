import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})

export class ProfileComponent implements OnInit {
  
  lgUser: any = null;

  ngOnInit(): void {
    const user = localStorage.getItem('loggedInUser');

    if (user) {
      this.lgUser = JSON.parse(user);
    }
  }

  constructor(private router: Router) {}

  onLogout() {
    localStorage.removeItem('loggedInUser');
    alert('Logged Out');
    this.router.navigate(['/login']);
  }
}
