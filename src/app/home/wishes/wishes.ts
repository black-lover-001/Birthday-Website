import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishes.html',
  styleUrl: './wishes.scss',
})
export class Wishes {

  wishes = [
  { text: "Happy birthday to the one who made my ordinary life feel special.", icon: "bi-heart-fill" },
  { text: "You’re not just my girlfriend, you’re my peace.", icon: "bi-heart" },
  { text: "Every moment with you feels like a blessing I never expected.", icon: "bi-stars" },
  { text: "I didn’t believe in perfect people until I met you.", icon: "bi-emoji-smile-fill" },
  { text: "Your smile alone can fix my worst days.", icon: "bi-emoji-laughing-fill" },
  { text: "I’m lucky, and I know it — because I have you.", icon: "bi-gem" },
  { text: "You are the best part of my life, no doubt.", icon: "bi-award-fill" },
  { text: "Loving you is the easiest thing I’ve ever done.", icon: "bi-heart-pulse-fill" },
  { text: "You deserve more than just a birthday — you deserve everything.", icon: "bi-gift-fill" },
  { text: "Being with you feels like home.", icon: "bi-house-heart-fill" },

  { text: "I still can’t believe someone like you chose me.", icon: "bi-person-heart" },
  { text: "You make my life lighter, brighter, and meaningful.", icon: "bi-brightness-high-fill" },
  { text: "Even silence feels beautiful when I’m with you.", icon: "bi-moon-stars-fill" },
  { text: "I don’t need a perfect life, I just need you in it.", icon: "bi-infinity" },
  { text: "Your presence itself is my happiness.", icon: "bi-emoji-heart-eyes-fill" },
  { text: "You’re the reason behind my calm mind and strong heart.", icon: "bi-shield-fill-check" },
  { text: "Life got better the day you walked in.", icon: "bi-door-open-fill" },
  { text: "I see my future clearly — and you’re in it.", icon: "bi-eye-fill" },
  { text: "I didn’t find love, I found you.", icon: "bi-search-heart" },
  { text: "And that’s enough for me.", icon: "bi-check-circle-fill" },

  { text: "You are my favorite notification in life.", icon: "bi-bell-fill" },
  { text: "Talking to you is my daily therapy.", icon: "bi-chat-heart-fill" },
  { text: "You make even simple moments unforgettable.", icon: "bi-clock-history" },
  { text: "I don’t say it always, but you mean everything to me.", icon: "bi-chat-dots-fill" },
  { text: "You’re not just special — you’re irreplaceable.", icon: "bi-star-fill" },
  { text: "Your happiness matters to me more than mine.", icon: "bi-emoji-smile-fill" },
  { text: "I want to grow with you, not just love you.", icon: "bi-graph-up-heart" },
  { text: "I choose you, again and again.", icon: "bi-arrow-repeat" },
  { text: "Even on bad days, you are my good part.", icon: "bi-cloud-sun-fill" },
  { text: "You complete the parts of me I didn’t understand.", icon: "bi-puzzle-fill" },

  { text: "I love how you make everything feel easy.", icon: "bi-lightning-fill" },
  { text: "You are my calm in chaos.", icon: "bi-wind" },
  { text: "I didn’t expect love, but you changed everything.", icon: "bi-arrow-through-heart-fill" },
  { text: "You are the best decision I never planned.", icon: "bi-check2-circle" },
  { text: "You are my today and all my tomorrows.", icon: "bi-calendar-heart-fill" },
  { text: "I don’t need anything else when I have you.", icon: "bi-box-heart-fill" },
  { text: "You are not perfect — but perfect for me.", icon: "bi-heart-half" },
  { text: "I love the way you understand me without words.", icon: "bi-chat-left-heart-fill" },
  { text: "Your presence makes everything feel right.", icon: "bi-check2" },
  { text: "You’re not just part of my life — you are my life.", icon: "bi-life-preserver" },

  { text: "You make me want to become a better person.", icon: "bi-person-up" },
  { text: "You’re the reason I believe in love now.", icon: "bi-heartbreak-fill" },
  { text: "You make even my worst days feel manageable.", icon: "bi-thermometer-half" },
  { text: "Your voice alone can calm my mind.", icon: "bi-mic-fill" },
  { text: "You are my safest place.", icon: "bi-lock-fill" },
  { text: "I don’t know what I did to deserve you — but I’m grateful.", icon: "bi-hand-thumbs-up-fill" },
  { text: "I’ll always stand by you, no matter what.", icon: "bi-people-fill" },
  { text: "You’re not just loved — you’re deeply valued.", icon: "bi-award" },
  { text: "I promise to choose you, every single day.", icon: "bi-patch-check-fill" },
  { text: "Happy birthday to the one who owns my heart ❤️", icon: "bi-heart-fill" }
];

}