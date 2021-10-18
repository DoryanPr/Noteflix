import {Component, OnDestroy, OnInit} from '@angular/core';
import {SerieService} from "../../services/serie/serie.service";
import {Serie} from "../../models/serie.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-series-view',
  templateUrl: './series-view.component.html',
  styleUrls: ['./series-view.component.css']
})
export class SeriesViewComponent implements OnInit, OnDestroy {

  series: Array<Serie>
  seriesSub: Subscription;

  constructor(private serieService: SerieService) {

  }

  ngOnInit(): void {
    this.seriesSub = this.serieService.series.subscribe((series: Array<Serie>) => {
      this.series = series
    });
  }


  ngOnDestroy() {
    this.seriesSub.unsubscribe();
  }

}
