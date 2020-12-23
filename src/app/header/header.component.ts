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
    const navLinks = document.querySelectorAll('.nav-link');
    const tab = document.querySelector('.tab');
    const convertTab = tab as HTMLElement;

    const navLink = navLinks[0] as HTMLElement;
    this.initialPositionTab(navLink, convertTab);

    navLinks.forEach(navLink => navLink.addEventListener('click', (event) => {
      const navLink = event.target as HTMLElement;
      this.moveTab(navLink, convertTab);
    }))
  }
  
  initialPositionTab(navLink: HTMLElement, tab: HTMLElement): void {
    let width = navLink.offsetWidth.toString() + 'px';
   const calcLeft = navLink.offsetLeft - 5.5
    let left = calcLeft.toString() + 'px' ;
    tab.style.width =  width;
    tab.style.left = left;
  }

  moveTab(navLink: HTMLElement, tab: HTMLElement): void {
    let width = navLink.offsetWidth.toString() + 'px';
    let left = navLink.offsetLeft.toString() + 'px';
    tab.style.width =  width;
    tab.style.left = left;
  }

}
