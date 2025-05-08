import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})

export class RegisterComponent implements OnInit {
  users: any[] = [];

  newUser = {
    name: '',
    email: '',
    password: '',
  };

  // It ensures that your component has the most recent list of users every time it starts.

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  onRegister() {
    this.users.push({ ...this.newUser });

    localStorage.setItem('users', JSON.stringify(this.users));

    alert('User registered successfully!');
  }
}

/* 
You're essentially creating a new object that contains all the same properties as newUser. This is important because:

Without the spread operator, you would be adding a reference to the original newUser object. If you change newUser later, it would also affect the already added user in users (since they both refer to the same object).

With the spread operator, you're copying the values of newUser into a new object. This way, if you modify newUser later, the users array won't be affected by those changes.

*/

/* 
Imagine your Angular component is a box (a class) that contains some variables (like users, loginUser) and some tools (functions like onLogin()).

Now, if you're inside the box and want to use your own stuff, you say:

“Hey, I want my own loginUser — not some other random thing!”

That’s where this comes in.


*/