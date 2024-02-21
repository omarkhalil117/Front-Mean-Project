import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'GoodReads';
  Name:string = 'omar';
  result:number = 0;
  input1 : string = '';
  input2 : string = '';
  add() : void
  {
      this.result = parseInt(this.input1) + parseInt(this.input2)  ;
      console.log(this.result);
  }
}
