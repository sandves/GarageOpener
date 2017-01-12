import { Component } from '@angular/core';
import { GarageService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GarageService]
})
export class AppComponent {
  constructor (private garageService: GarageService) {}

  open() : void {
    this.garageService.openDoor();
  }
}
