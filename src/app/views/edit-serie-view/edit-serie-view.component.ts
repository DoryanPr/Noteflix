import { Component, OnInit } from '@angular/core';
import {Serie} from "../../models/serie.model";
import {ActivatedRoute, Router} from "@angular/router";
import {SerieService} from "../../services/serie/serie.service";

@Component({
  selector: 'app-edit-serie-view',
  templateUrl: './edit-serie-view.component.html',
  styleUrls: ['./edit-serie-view.component.css']
})
export class EditSerieViewComponent implements OnInit {

  serie: Serie;

  constructor(private router: Router, private serieService: SerieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  const id = this.route.snapshot.params.id;
  this.serieService.getSerieById(+id).then((serieFound: Serie) => this.serie = serieFound)
  }

  /**
   * Send editedSerie to editSerie and return on /home
   * @param editedSerie
   */
  askToEditSerie(editedSerie: Serie) {
  this.serieService.editSerie(editedSerie).then(()=> {
    this.router.navigate(['/home'])
  })
  }
}
