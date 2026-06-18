import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const categoryItems = document.querySelectorAll<HTMLElement>('.category_item');
      const allProducts = document.querySelectorAll<HTMLElement>('.product-item');
      const allBtn = document.querySelector<HTMLElement>('.category_item[category="all"]');

      // activar "Todo" al inicio
      allBtn?.classList.add('ct_item-active');

      categoryItems.forEach(item => {
        item.onclick = () => {
          const catProduct = item.getAttribute('category');
          console.log('Categoría seleccionada:', catProduct);

          // quitar clase activa de todos y poner al actual
          categoryItems.forEach(i => i.classList.remove('ct_item-active'));
          item.classList.add('ct_item-active');

          // ocultar todos con animación
          allProducts.forEach(prod => {
            prod.style.transform = 'scale(0)';
          });

          setTimeout(() => {
            allProducts.forEach(prod => prod.style.display = 'none');
          }, 400);

          setTimeout(() => {
            if (catProduct === 'all') {
              allProducts.forEach(prod => {
                prod.style.display = 'block';
                prod.style.transform = 'scale(1)';
              });
            } else {
              allProducts.forEach(prod => {
                if (prod.getAttribute('category') === catProduct) {
                  prod.style.display = 'block';
                  prod.style.transform = 'scale(1)';
                }
              });
            }
          }, 400);
        };
      });
    }
  }
}