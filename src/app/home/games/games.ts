import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class Games implements OnInit, OnDestroy {

  trust = 100;
  passion = 100;
  care = 100;

  timeLeft = 60;
  gameState: 'playing' | 'win' | 'lose' = 'playing';

  private drainInterval: any;
  private timerInterval: any;

  ngOnInit() {
    this.startGame();
  }

  ngOnDestroy() {
    clearInterval(this.drainInterval);
    clearInterval(this.timerInterval);
  }

  startGame() {
    this.trust = 100;
    this.passion = 100;
    this.care = 100;
    this.timeLeft = 60;
    this.gameState = 'playing';

    clearInterval(this.drainInterval);
    clearInterval(this.timerInterval);

    this.drainInterval = setInterval(() => this.drain(), 2000);
    this.timerInterval = setInterval(() => this.timer(), 1000);
  }

  drain() {
    if (this.gameState !== 'playing') return;

    this.trust -= 3;
    this.passion -= 4;
    this.care -= 2;

    if (this.trust <= 0 || this.passion <= 0 || this.care <= 0) {
      this.endGame('lose');
    }
  }

  timer() {
    if (this.gameState !== 'playing') return;

    this.timeLeft--;
    if (this.timeLeft <= 0) {
      this.endGame('win');
    }
  }

  endGame(state: 'win' | 'lose') {
    this.gameState = state;
    clearInterval(this.drainInterval);
    clearInterval(this.timerInterval);
  }

  listen() {
    this.trust += 8;
    this.care += 5;
  }

  surprise() {
    this.passion += 10;
    this.trust -= 3;
  }

  support() {
    this.care += 10;
  }

  giveSpace() {
    this.trust += 6;
    this.passion -= 4;
  }

  communicate() {
    this.trust += 5;
    this.passion += 5;
  }
}