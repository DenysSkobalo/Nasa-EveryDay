import {Component} from '@angular/core';
import {NasaData} from "../../models/nasaData";
import {ModalService} from "../../services/modal.service";
import {NasaService} from "../../services/nasa.service";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html'
})
export class ApplicationComponent {
  public title: string = 'Choose Date';
  public nasaData: NasaData;

  constructor(
    public modalService: ModalService,
    private nasaDataService: NasaService
  ) {
  }

  ngOnInit(): void {
    this.nasaDataService.getNasaData().subscribe((res) => {
      console.log(res);
      this.nasaData = res;
    });
  }
}
