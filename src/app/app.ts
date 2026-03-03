import { Component, signal } from '@angular/core';
import { UserBioComponent } from './components/user-bio/user-bio.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { UserProfile } from './models/user-profile';

@Component({
  selector: 'app-root',
  imports: [UserCardComponent, UserStatusComponent, UserBioComponent],
  templateUrl: './app.html'
})
export class App {
  // Keeping user data in one place makes updates easier to follow.
  protected readonly user = signal<UserProfile>({
    name: 'Richard Begin',
    age: 30,
    profilePicture: '/memoji.png',
    bio: 'Frontend developer who likes clean UI, good coffee, and weekend hikes.',
    isOnline: true
  });

  // Toggle user online if true
  protected toggleStatus(): void {
    this.user.update((currentUser) => ({
      ...currentUser,
      isOnline: !currentUser.isOnline
    }));
  }

  // Updates users bio
  protected updateBio(updatedBio: string): void {
    this.user.update((currentUser) => ({
      ...currentUser,
      bio: updatedBio
    }));
  }
}
