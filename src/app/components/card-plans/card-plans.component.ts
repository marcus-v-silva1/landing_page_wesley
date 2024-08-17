import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-card-plans',
  templateUrl: './card-plans.component.html',
  styleUrls: ['./card-plans.component.scss']
})
export class CardPlansComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startAnimations();
            observer.unobserve(entry.target); // Parar de observar uma vez que a animação comece
          }
        });
      },
      { threshold: 0.3 } // A animação vai começar quando 10% do elemento estiver visível
    );

    observer.observe(this.el.nativeElement);
  }
  startAnimations() {
    // Adicionar a classe de animação aos elementos de texto e carrossel
    const textElements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
    textElements.forEach((el: HTMLElement) => {
      el.classList.add('animate__animated', 'animate__fadeInUp');
    });

    const carouselElement = this.el.nativeElement.querySelector('.carousel-container');
    carouselElement.classList.add('animate__animated', 'animate__fadeInDown');
  }

}
