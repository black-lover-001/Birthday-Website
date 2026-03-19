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
  { title: "From Friends to Forever ❤️", text: "We started as friends, but somewhere along the way, you became everything to me." },
  { title: "Endless Reasons 💖", text: "Five years of knowing you, and still every day I find a new reason to love you." },
  { title: "More Than Friendship 💞", text: "I didn’t lose a friend when I fell in love with you — I found something even more beautiful." },
  { title: "Always Special 🌸", text: "You were always special to me… I just didn’t realize how much until now." },
  { title: "Our Journey ✨", text: "From sharing laughs to sharing hearts — we came a long way." },
  { title: "Meant To Be 💫", text: "Loving you feels natural, like it was always meant to happen." },

  { title: "My Safe Place 🏡", text: "You were my comfort as a friend, now you are my whole world as my love." },
  { title: "Real Love Story 📖", text: "Our story didn’t start with love — and that’s why it’s so real." },
  { title: "Trust First 🤝", text: "I already trusted you as my friend… loving you was just the next step." },
  { title: "You Stayed ❤️", text: "You know my past, my flaws, my silence — and still chose to stay." },
  { title: "We Grew Into Love 🌱", text: "We didn’t rush into love… we grew into it." },
  { title: "Memories Matter 💭", text: "Every memory from our friendship now feels even more special." },

  { title: "Forever Choice 💍", text: "You were there before love… and that’s why I know you’ll stay forever." },
  { title: "Slow Realization 💡", text: "I didn’t fall for you suddenly — I slowly realized I can’t live without you." },
  { title: "Strong Foundation 🧱", text: "Our love is built on years of understanding, not just feelings." },
  { title: "Best Friend + Love 💖", text: "You are not just my girlfriend — you are my best friend forever." },
  { title: "Every Version of You 🎭", text: "I’ve seen you in every version, and I choose you in all of them." },
  { title: "Built To Last 🔒", text: "Some people fall in love fast, we built something that lasts." },

  { title: "My Favorite Journey ❤️", text: "From 'just friends' to 'my everything' — that’s my favorite journey ❤️" },
  { title: "Never Strangers 🌙", text: "We were never strangers, even before we became something more." },
  { title: "Already Yours 💘", text: "I didn’t fall for you in a moment — I slowly realized I already belonged to you." },
  { title: "You Chose Me 💞", text: "You knew me as a friend… and still chose to love me." },
  { title: "Real Me 🪞", text: "I’ve shared my real self with you long before love started." },
  { title: "Understanding First 🤍", text: "We didn’t start with promises, we started with understanding." },

  { title: "You Stayed Anyway 🌹", text: "You saw me at my normal… and still chose to stay." },
  { title: "Safe Love 🫶", text: "I trusted you before I loved you — and that’s why this feels safe." },
  { title: "My Person 💑", text: "You were always my person… love just gave it a name." },
  { title: "Real Connection 🔗", text: "We built love from connection, not attraction." },
  { title: "You Understand Me 🧠", text: "You already knew my silence… that’s why you understand me." },

  { title: "No Pretending 🎭", text: "I never had to pretend with you." },
  { title: "You Stayed Strong 💪", text: "You stayed through phases where others would’ve left." },
  { title: "Slow & Strong 🌱", text: "We didn’t rush — and that’s why we’re strong." },
  { title: "You Became Important 💗", text: "You became important before I realized it." },
  { title: "We Became Love ❤️", text: "We didn’t fall in love… we became it." },

  { title: "Always There 💫", text: "Loving you feels like it was always there." },
  { title: "Still My Person 💞", text: "I didn’t gain a girlfriend — I kept my person." },
  { title: "You Believe In Me 🌟", text: "You know my past, and still believe in my future." },
  { title: "Deep Trust 🤝", text: "I trust you more than I trust myself." },
  { title: "Something Real 🧡", text: "We grew into something real." },

  { title: "You Are My Reason 💖", text: "You are the reason my life makes sense." },
  { title: "Beautiful Silence 🌌", text: "With you, silence is never empty." },
  { title: "Our Timing ⏳", text: "We made our own timing." },
  { title: "We Found Each Other 🔥", text: "We didn’t chase — we found each other." },
  { title: "My Everything ❤️", text: "You were my comfort… now you’re my everything ❤️" }
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



