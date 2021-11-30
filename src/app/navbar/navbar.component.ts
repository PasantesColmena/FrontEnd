import { Component, HostListener } from '@angular/core';
import { CartService } from '../producto/service/cart/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent{

  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
  ) {}


  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element1 = document.querySelector('nav');
    let element2 = document.getElementById('icon-cant');
    let element3 = document.getElementById('icon');

      if (window.pageYOffset > 1) {
        element1.classList.add('bg-primary-g');
        element2.classList.add('btn-color-cant');
        element3.classList.add('btn-color-icon');
      } else {
        element1.classList.remove('bg-primary-g');
        element2.classList.remove('btn-color-cant');
        element3.classList.remove('btn-color-icon');
      }
    }

}
