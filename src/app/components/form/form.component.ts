import {Component} from '@angular/core';
import {NasaService} from './../../services/nasa.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  form = new FormGroup({
    date: new FormControl<string>(''),
  });

  constructor(private nasaService: NasaService) {
  }

  public submitDate(dateInput: HTMLInputElement) {
    let date: any = this.form.value?.date;
    this.nasaService.setNewDate(date);
  }
}
