import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  swingsImageUrl = "assets/images/bocianie-gniazda.png";
  consumableImageUrl = "assets/images/hamaki.png";

}
