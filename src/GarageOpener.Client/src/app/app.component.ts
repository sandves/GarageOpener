import { Component } from '@angular/core';
import { GarageService } from './garage.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GarageService]
})
export class AppComponent {
  opening: boolean;
  openingTime: number = 6000;
  buttonText: string = "Open";
  buttonClass: string = "default";

  constructor(private garageService: GarageService) {  }

  open(): void {
    this.opening = true;
    this.buttonText = "Opening...";
    this.garageService.openDoor().subscribe(
      data => {
        this.buttonClass = "success";
        this.buttonText = "Drive!"
        setTimeout(() => {
          this.buttonText = "Open";
          this.opening = false;
        }, this.openingTime);
      },
      (err: HttpErrorResponse) => {
        console.error(`API returned code ${err.status}, body was: ${err.error}`);
        this.buttonText = "Error";
        this.opening = false;
        this.buttonClass = "error";
        setTimeout(() => {
           this.buttonClass = "default";
           this.buttonText = "Open";
        }, this.openingTime);
      }
    );
  }
}
