import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages {

  allMessages = [
  "We started as friends, but somewhere along the way, you became everything to me.",
  "Five years of knowing you, and still every day I find a new reason to love you.",
  "I didn’t lose a friend when I fell in love with you — I found something even more beautiful.",
  "You were always special to me… I just didn’t realize how much until now.",
  "From sharing laughs to sharing hearts — we came a long way.",
  "Loving you feels natural, like it was always meant to happen.",
  "You were my comfort as a friend, now you are my whole world as my love.",
  "Our story didn’t start with love — and that’s why it’s so real.",
  "I already trusted you as my friend… loving you was just the next step.",
  "You know my past, my flaws, my silence — and still chose to stay.",
  "We didn’t rush into love… we grew into it.",
  "Every memory from our friendship now feels even more special.",
  "You were there before love… and that’s why I know you’ll stay forever.",
  "I didn’t fall for you suddenly — I slowly realized I can’t live without you.",
  "Our love is built on years of understanding, not just feelings.",
  "You are not just my girlfriend — you are my best friend forever.",
  "I’ve seen you in every version, and I choose you in all of them.",
  "We already knew each other deeply… love just made it stronger.",
  "Some people fall in love fast, we built something that lasts.",
  "From “just friends” to “my everything” — that’s my favorite journey ❤️",
    "We were never strangers, even before we became something more.",
    "I didn’t fall for you in a moment — I slowly realized I already belonged to you.",
    "You knew me as a friend… and still chose to love me.",
    "I’ve shared my real self with you long before love started.",
    "We didn’t start with promises, we started with understanding.",

    "You saw me at my normal… and still chose to stay.",
    "I trusted you before I loved you — and that’s why this feels safe.",
    "You were always my person… love just gave it a name.",
    "We built love from connection, not attraction.",
    "You already knew my silence… that’s why you understand me.",

    "I never had to pretend with you.",
    "You stayed through phases where others would’ve left.",
    "We didn’t rush — and that’s why we’re strong.",
    "You became important before I realized it.",
    "We didn’t fall in love… we became it.",

    "Loving you feels like it was always there.",
    "I didn’t gain a girlfriend — I kept my person.",
    "You know my past, and still believe in my future.",
    "I trust you more than I trust myself.",
    "We grew into something real.",

    "You are the reason my life makes sense.",
    "With you, silence is never empty.",
    "We made our own timing.",
    "We didn’t chase — we found each other.",
    "You were my comfort… now you’re my everything ❤️"
  ];

  currentIndex = 0;
  pageSize = 6;

  get visibleMessages() {
    return this.allMessages.slice(
      this.currentIndex,
      this.currentIndex + this.pageSize
    );
  }

  next() {
    if (this.currentIndex + this.pageSize < this.allMessages.length) {
      this.currentIndex += this.pageSize;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.pageSize;
    }
  }

}