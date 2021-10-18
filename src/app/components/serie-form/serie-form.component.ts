import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {SerieService} from "../../services/serie/serie.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent implements OnInit {

  @Input() name: string;
  @Input() submitLabel: string;
  @Input() serieToEdit: Serie;

  @Output() formSubmitted: EventEmitter<Serie>;

  serieForm: FormGroup;
  serie: Serie;
  routerEventSub: Subscription;


  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Serie>();

  }


  ngOnInit(): void {
    this.initForm();
    if (this.serieToEdit) {
      this.serie = this.serieToEdit;
    } else {
      this.serie = new Serie('', new Date(), 2, '', '', [], '')
    }


  }

  onSubmitSerieForm() {
    if (this.serieForm.valid) {
      this.formSubmitted.emit(this.serie);
    }
  }

  private initForm() {

    this.serieForm = this.fb.group({
      name: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
        ]),
      description: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(400)
        ]),
      picture: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2000)
        ]),
      releaseDate: new FormControl(null,
        [
          Validators.required,
        ]),
      nbSeason: new FormControl(null,
        [
          Validators.required,
        ]),
    });

  }
}
