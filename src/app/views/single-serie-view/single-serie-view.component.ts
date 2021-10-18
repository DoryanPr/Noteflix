import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {ActivatedRoute, Router} from "@angular/router";
import {SerieService} from "../../services/serie/serie.service";

@Component({
  selector: 'app-single-serie-view',
  templateUrl: './single-serie-view.component.html',
  styleUrls: ['./single-serie-view.component.css']
})
export class SingleSerieViewComponent implements OnInit {

  @Output() formSubmitted: EventEmitter<Serie>;

  serie: Serie;


  constructor(private route: ActivatedRoute, private serieService: SerieService, private router: Router) {
    this.formSubmitted = new EventEmitter<Serie>();
  }


  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.serieService.getSerieById(+id).then((serieFound: Serie) => {
      this.serie = serieFound;
    })
  }

  /**
   *
   * @param commentaryToAdd
   * @param serie
   */
  askToAddCommentary(commentaryToAdd: any, serie: any) {
    const serieId = serie.id;
    this.serieService.addCommentary(commentaryToAdd, serieId).then(() => {
      this.router.navigateByUrl('home');
    })
  }
}
