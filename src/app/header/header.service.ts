import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private dialogRef = new BehaviorSubject<string>('');
  public asDialogRef = this.dialogRef.asObservable();

  constructor() {}

  public sendDialog(dialog: string) {
    return this.dialogRef.next(dialog);
  }
}
