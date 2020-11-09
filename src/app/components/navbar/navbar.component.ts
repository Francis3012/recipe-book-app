import { map, startWith } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
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

  ngOnInit(): void {}

  getErrorMessage(): string {
    if (this.search.hasError('required')) {
      return 'You must enter a value';
    }
  }
}
