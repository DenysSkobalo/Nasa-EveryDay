import {Component, Input} from '@angular/core';
import {NasaData} from "../../models/nasaData";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent {
  @Input() nasaData: NasaData;
}
