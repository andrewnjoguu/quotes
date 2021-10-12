import { Component } from '@angular/core';
import { Form } from './form.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: Form[]

  constructor() {
    this.form =  [
      new Form('Andrew', 'nothing comes easy', 3),
      new Form('Morio wa South', 'being nice costs you nothing', 2),
      new Form('Amy ', 'love is not a one way street', 1),
    ]
  }

  
  add_quote(name: HTMLInputElement, quote: HTMLInputElement){
   this.form.push(new Form(name.value, quote.value))
   name.value = ''
   quote.value = ''
  }
}
