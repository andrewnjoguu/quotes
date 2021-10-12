import { Component, Input, OnInit } from '@angular/core';
import { Form } from '../form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() form!: Form

  vote_up(){
    this.form.voteUp()
  }

  vote_down(){
    this.form.voteDown()
  }

  ngOnInit(): void {
  }

}
