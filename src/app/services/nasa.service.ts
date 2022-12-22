import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, switchMap,} from 'rxjs';

import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private selectedDate = new BehaviorSubject(0);
  private selectedDateObservable = this.selectedDate.asObservable();
  private apiKey = environment.NASA_KEY;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getNasaData();
  }

  setNewDate(newDate: any) {
    this.selectedDate.next(newDate);
  }

  getNasaData(): Observable<any> {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    return this.selectedDateObservable.pipe(
      switchMap(() => {
        if (this.selectedDate.value) {
          return this.http.get(
            `https://api.nasa.gov/planetary/apod?date=${this.selectedDate.value}&api_key=${this.apiKey}`
          );
        }
        return this.http.get(
          // `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${this.apiKey}`
            `https://api.nasa.gov/planetary/apod?date=2004-12-29&api_key=${this.apiKey}`
        );
      })
    );
  }
}
