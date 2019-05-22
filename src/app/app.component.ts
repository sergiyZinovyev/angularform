import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visLogReg: string = "log";
  btnLog: string = 'active';
  btnReg: string = '';

  myToggle(name: string):void{
    this.visLogReg = name;
    if (name == "log"){
      this.btnLog = 'active';
      this.btnReg = ''
    }
    else{
      this.btnLog = '';
      this.btnReg = 'active'
    }
  }

}
