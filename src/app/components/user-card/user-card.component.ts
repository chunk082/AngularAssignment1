import { Component, input } from '@angular/core';
import { UserProfile } from '../../models/user-profile';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html'
})
export class UserCardComponent {
  // This component only displays profile data, so input is all it needs.
  readonly user = input.required<UserProfile>();
}
