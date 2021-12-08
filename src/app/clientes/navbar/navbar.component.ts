import { Component, HostListener } from '@angular/core';
import { CartService } from '../service/cart/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent{

  /* Recibe los items del carrito en un array */
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
  ) {}

    /* Declara el evento scroll del HostListener */
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    /* NavBar */
    let element1 = document.querySelector('nav');
    /* Icon Carrito */
    let element3 = document.getElementById('icon');

    /* Condiciones para el cambio de color segun la altura del scroll */
      if (window.pageYOffset > 1) {
        element1.classList.add('bg-primary-g');

        element3.classList.add('btn-color-icon');
      } else {
        element1.classList.remove('bg-primary-g');
        element3.classList.remove('btn-color-icon');
      }
    }

}
