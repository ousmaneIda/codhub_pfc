import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.page.html',
  styleUrls: ['./modules.page.scss'],
})
export class ModulesPage implements OnInit {

  constructor() { }
data:any;
  ngOnInit() {
    fetch('./assets/docs/file.json')
      .then(res =>res.json())
      .then(json=>{
        this.data = json;
      })
  }
}
