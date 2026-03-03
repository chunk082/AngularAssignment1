import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  imports: [FormsModule],
  templateUrl: './user-bio.component.html'
})
export class UserBioComponent {
  readonly bio = input.required<string>();
  readonly bioSaved = output<string>();

  protected draftBio = '';
  protected isEditing = false;

  protected startEditing(): void {
    // Start with the current bio so the user can tweak instead of rewriting.
    this.draftBio = this.bio();
    this.isEditing = true;
  }

  protected saveBio(): void {
    const cleanedBio = this.draftBio.trim();

    // If nothing new was entered, keep the old bio so we don't blank it out.
    this.bioSaved.emit(cleanedBio || this.bio());
    this.isEditing = false;
  }

  protected cancelEditing(): void {
    // Exit edit mode without pushing any changes to the parent.
    this.isEditing = false;
  }
}
