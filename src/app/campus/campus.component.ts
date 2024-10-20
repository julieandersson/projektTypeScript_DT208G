import { Component } from '@angular/core';

@Component({
  selector: 'app-campus',
  standalone: true,
  imports: [],
  templateUrl: './campus.component.html',
  styleUrl: './campus.component.scss'
})
export class CampusComponent {

  campusImage1: string = "assets/images/campus1.jpg";
  campusImage2: string = "assets/images/campus2.jpg"
}
