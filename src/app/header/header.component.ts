import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hasClick: string = 'no click';
  navLinkName: string = '';
  constructor(public dialog: MatDialog, private service: HeaderService) {}

  public openDialog(event: any): void {
    const typeDialog = event.innerText;
    this.dialog.open(DialogComponent);
    this.service.sendDialog(typeDialog);
  }

  ngOnInit(): void {
    // const navLinks = document.querySelectorAll('.nav-link');
    // const tab = document.querySelector('.tab');
    // const convertTab = tab as HTMLElement;
    // const navLink = navLinks[0] as HTMLElement;
    // const localHasClick = localStorage.getItem('hasClick');
    // if (localHasClick === 'no click' || localHasClick === null) {
    //   setTimeout(() => this.moveTab(navLink, convertTab), 0);
    // } else {
    //   setTimeout(() => this.handleClick(navLinks, convertTab), 0);
    // }
    // navLinks.forEach((navLink) =>
    //   navLink.addEventListener('click', (event) =>
    //     this.onClick(event, convertTab)
    //   )
    // );
    // }
    // private onClick(event: Event, convertTab: HTMLElement) {
    //   const eventTarget = event.target as HTMLElement;
    //   this.hasClick = 'hasClick';
    //   localStorage.setItem('hasClick', this.hasClick);
    //   const navLink = eventTarget;
    //   console.log('setId', localStorage.setItem('id', eventTarget.id));
    //   this.moveTab(navLink, convertTab);
    // }
    // private moveTab(navLink: HTMLElement, tab: HTMLElement): void {
    //   const width = navLink.offsetWidth.toString() + 'px';
    //   const left = navLink.offsetLeft.toString() + 'px';
    //   tab.style.width = width;
    //   tab.style.left = left;
    // }
    // private handleClick(navLinks: NodeListOf<Element>, convertTab: HTMLElement) {
    //   const id = localStorage.getItem('id');
    //   navLinks.forEach((navLink) => {
    //     const convertNavLink = navLink as HTMLElement;
    //     if (id === navLink.id) {
    //       this.moveTab(convertNavLink, convertTab);
    //     }
    //   });
  }
}
