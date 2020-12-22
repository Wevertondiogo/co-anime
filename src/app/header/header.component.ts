import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private service: HeaderService) { }

  public openDialog(event: any): void {
    this.dialog.open(DialogComponent);

    this.service.sendDialog(event.name);
  }

  ngOnInit(): void {
  }

}
