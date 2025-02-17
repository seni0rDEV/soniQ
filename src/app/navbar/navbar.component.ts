import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  // isMenuOpen = true;

  //   toggleMenu() {
  //     this.isMenuOpen = !this.isMenuOpen;
  //   }

  isMenuOpen = false; // Initially hidden

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
