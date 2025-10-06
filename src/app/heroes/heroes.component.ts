import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../models';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageServices: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(selectedHero: Hero) {
    this.selectedHero = selectedHero;
    this.messageServices.add(
      `HeroesComponent: Selected hero id=${selectedHero.id}`
    );
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
