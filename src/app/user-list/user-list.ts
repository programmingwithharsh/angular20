import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService, User } from '../user-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf, NgClass, JsonPipe } from '@angular/common';
import Modal from 'bootstrap/js/dist/modal';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, ReactiveFormsModule, JsonPipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit, AfterViewInit {
  users: User[] = [];
  userForm!: FormGroup;
  isEditMode = false;
  editUserId: string | null = null;

  // Delete Modal
  @ViewChild('deleteModal') deleteModalRef!: ElementRef;
  private deleteModal!: Modal;
  userToDeleteId: string | null = null;

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadUsers();

    // Reactive form setup
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngAfterViewInit(): void {
    this.deleteModal = new Modal(this.deleteModalRef.nativeElement);
  }

  // Load users
  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.error('Error loading users:', err),
    });
  }

  // Add / Update User
  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const userData: User = this.userForm.value;

    if (this.isEditMode && this.editUserId) {
      this.userService.updateUser(this.editUserId, userData).subscribe({
        next: () => {
          this.resetForm();
          this.loadUsers();
          console.log('User updated successfully');
        },
        error: (err) => console.error('Error updating user:', err),
      });
    } else {
      this.userService.createUser(userData).subscribe({
        next: () => {
          this.resetForm();
          this.loadUsers();
          console.log('User added successfully');
        },
        error: (err) => console.error('Error adding user:', err),
      });
    }
  }

  // Edit user
  onEdit(user: User) {
    this.isEditMode = true;
    this.editUserId = user._id || null;
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Open Delete Modal
  openDeleteModal(id?: string) {
    if (!id) return;
    this.userToDeleteId = id;
    this.deleteModal.show(); // show modal
  }

  // Confirm Delete
  confirmDelete() {
    if (!this.userToDeleteId) return;
    this.userService.deleteUser(this.userToDeleteId).subscribe({
      next: () => {
        this.loadUsers();
        this.deleteModal.hide(); // hide modal
        console.log('User deleted successfully');
      },
      error: (err) => console.error('Error deleting user:', err),
    });
  }

  // Reset Form
  resetForm() {
    this.userForm.reset();
    this.isEditMode = false;
    this.editUserId = null;
  }
}