import {Component, Input, OnInit} from '@angular/core';
import {SerieService} from "../../services/serie/serie.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id : string;
  @Input() name : string;
  @Input() picture : string;


  constructor() { }

  ngOnInit(): void {

  }

}
