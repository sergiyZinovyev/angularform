import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visLogReg: string = "log";
  btnLog: string = 'btn-info';
  btnReg: string = 'btn-outline-info';

  myToggle(name: string):void{
    this.visLogReg = name;
    if (name == "log"){
      this.btnLog = 'btn-info';
      this.btnReg = 'btn-outline-info'
    }
    else{
      this.btnLog = 'btn-outline-info';
      this.btnReg = 'btn-info'
    }
  }

}
