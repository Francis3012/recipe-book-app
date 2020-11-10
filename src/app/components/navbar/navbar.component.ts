import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MediaChange } from '@angular/flex-layout';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  myControl = new FormControl();
  search = new FormControl('', Validators.required);
  routerLinks: any[] = [
    {
      label: 'Recipes',
      link: 'recipes',
    },
    {
      label: 'Shopping',
      link: 'shopping-list',
    },
  ];
  activeLink = this.routerLinks[0];
  background: ThemePalette = 'primary';

  getErrorMessage(): string {
    if (this.search.hasError('required')) {
      return 'You must enter a value';
    }
  }
}
