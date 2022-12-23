import {Component} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  public switchDarkTheme() {
    document.body.classList.toggle('dark-theme');
  }
}
