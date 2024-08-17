import { Component, Input, OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() slides: { src: string }[] = [];
  currentSlide = 0;
  autoSlideInterval: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.autoSlideInterval = setInterval(() => {
      this.onNextClick();
    }, 3000);
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

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  onPreviousClick() {
    this.resetAutoSlide();
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    this.resetAutoSlide();
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  resetAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.autoSlideInterval = setInterval(() => {
      this.onNextClick();
    }, 3000);
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
