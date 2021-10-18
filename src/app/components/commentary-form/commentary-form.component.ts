import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SerieService} from "../../services/serie/serie.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-commentary-form',
  templateUrl: './commentary-form.component.html',
  styleUrls: ['./commentary-form.component.css']
})
export class CommentaryFormComponent implements OnInit {


  @Input() title: string;
  @Input() submitLabel: string;
  @Input() commentaryToAdd: string;
  // @Input() serie: Serie;

  @Output() formSubmitted: EventEmitter<Serie>;

  commentary: any;


  commentaryForm: FormGroup;

  constructor(private fb: FormBuilder, private serieService: SerieService) {
    this.formSubmitted = new EventEmitter<Serie>();
    this.commentary = {
      author: '',
      content: '',
      releaseCommentary: new Date(),
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitCommentaryForm() {
    if (this.commentaryForm.valid) {
      this.formSubmitted.emit(this.commentary)
    }
  }

  private initForm() {
    this.commentaryForm = this.fb.group({
      author: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]),
      commentary: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150)
        ])
    })
  }
}
