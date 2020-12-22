import { HeaderService } from './../header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  dialog!: string;

  constructor(private service: HeaderService) { }

  ngOnInit(): void {
    this.service.asDialogRef.subscribe(dialog=> this.dialog = dialog)
  }

}
