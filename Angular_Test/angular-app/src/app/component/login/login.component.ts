import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  users: any[] = [];

  loginUser = {
    email: '',
    password: ''
  }

  // medium tricky
  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  // tricky
  constructor(private router: Router) {}

  onLogin(){
    const foundUser = this.users.find(
      user => user.email === this.loginUser.email && user.password === this.loginUser.password
    );

    if(foundUser){
      alert('Login successful');

      localStorage.setItem('loggedInUser', JSON.stringify(foundUser))

      // tricky
      this.router.navigate(['/profile'])
    }
    else{
      alert('Invalid creds!')
    }
  }
}

/*
1. constructor(...)
This is a TypeScript/JavaScript constructor.

It runs before the component is fully loaded.

Think of it as the setup room where dependencies are injected.

2. private router: Router
This part is Angular-specific and very important.

a. private
This means router will become a private class property.

You can access it only inside this component class.

b. router: Router
This tells Angular: "Inject the Router object here."

The Router class is Angular's built-in service for navigation between routes.

⛳ Example:
You’re telling Angular:

“Hey Angular, I need access to your routing system in this component. Give me an instance of your Router class, and I’ll store it privately as router.”
*/