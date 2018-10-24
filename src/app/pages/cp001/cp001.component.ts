import { Component, OnInit, Input } from '@angular/core';
import { HEROES } from '../../controller/data/data.component';
import { Hero } from '../../controller/data-interface/data.component';

import { FormGroup, FormControl, Validators, FormControlName, FormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-cp001',
  templateUrl: './cp001.component.html',
  styleUrls: ['./cp001.component.scss']
})
export class Cp001Component implements OnInit {
  title = 'MasterPerapathKanthong';

  heroes = HEROES;

  @Input() hero: Hero;


  form = new FormGroup({

  })
  // hero: Hero = {
  //   id: 1,
  //   name: 'MasterPerapath',
  // }

  constructor(){

  }
  ngOnInit(){

  }
}
