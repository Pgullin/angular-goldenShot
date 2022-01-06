import { Component, OnInit } from '@angular/core';
import {GoldenShot} from '../../goldenShot';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-golden-shot',
  templateUrl: './golden-shot.component.html',
  styleUrls: ['./golden-shot.component.css']
})
export class GoldenShotComponent implements OnInit {
  goldenShots: GoldenShot[] = [];

  constructor(private httpService: HttpService) {
  }


  ngOnInit(): void {
    this.getGoldenShots();

  }
/* Working!!
  getGoldenShots(): void {
    this.httpService.getGoldenShots()
      .subscribe(goldenShots => this.goldenShots = goldenShots);
    console.log(this.goldenShots);

  }*/

  getGoldenShots(): void {
    this.httpService.getGoldenShots()
      .subscribe(goldenShots => this.goldenShots = goldenShots);
    console.log(this.goldenShots);

  }
  OnDestroy(): void{

  }
}
