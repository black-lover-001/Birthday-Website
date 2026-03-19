import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class Games implements OnInit {
  brokenIndexes: number[] = [];
  targetScore = 7;
  hearts = Array(6).fill(0);
  correctIndex = 0;

  message = '';
  score = 0;
  gameWon = false;

  positions: { top: number; left: number }[] = [];

  shake = false;

  ngOnInit() {
    this.generatePositions();
    this.randomize();
  }

  randomize() {
    this.correctIndex = Math.floor(Math.random() * this.hearts.length);
    this.generatePositions();
  }

  generatePositions() {
    this.positions = this.hearts.map(() => ({
      top: Math.random() * 60,
      left: Math.random() * 60
    }));
  }

  clickHeart(index: number) {
    if (this.gameWon) return;

    if (index === this.correctIndex) {
      this.score++;
      // 💥 RESET ALL BROKEN HEARTS
  this.brokenIndexes = [];

      if (this.score >= this.targetScore) {
        this.gameWon = true;
        this.message = "No matter how many choices… you always chose me ❤️";
      } else {
        this.message = "You found me 😍";
        this.randomize();
      }

    } else {
      this.triggerShake();
      
      const msgs = [
        "Missed me 😅",
        "Still searching? 😏",
        "Wrong one baby 😜",
        "I'm not that easy ❤️"
      ];
      if (!this.brokenIndexes.includes(index)) {
        this.brokenIndexes.push(index);
      }
  
      this.message = msgs[Math.floor(Math.random() * msgs.length)];
    }
  }

  triggerShake() {
    this.shake = true;
    setTimeout(() => this.shake = false, 300);
  }

  restart() {
    this.score = 0;
    this.gameWon = false;
    this.message = '';
    this.randomize();
  }
}








