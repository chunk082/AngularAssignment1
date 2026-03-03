import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-status',
  imports: [],
  templateUrl: './user-status.component.html'
})
export class UserStatusComponent {
  readonly isOnline = input.required<boolean>();
  readonly statusToggled = output<void>();

  protected onToggleClick(): void {
    // Parent owns the state, so this component just asks for the change.
    this.statusToggled.emit();
  }
}
