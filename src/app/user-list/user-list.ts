import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user-service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-user-list',
  imports: [NgFor],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { // Injecting service using contructor

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.log('Error: ', err)
    })
  }
}
