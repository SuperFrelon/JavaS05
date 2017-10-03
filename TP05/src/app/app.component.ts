import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { CHAMBRES } from './_static/chambres';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private chambres: Chambre[];
  private searchChambre: FormGroup;

  public submitted: boolean;

  reserverChambre(value: string) {
    console.log('Chambre avec l\'id de reservation: ' + value);
  }

  ngOnInit() {
    this.searchChambre = new FormGroup({
      checkin: new FormControl(''),
      checkout: new FormControl('')
    });
    this.chambres = CHAMBRES;
  }

  onSubmit({value, valid}: {value: SearchChambre, valid: boolean}) {
    console.log(value);
  }
}

export interface SearchChambre {
  checkin: string;
  checkout: string;
}

export interface Chambre {
  id: string;
  numeroChambre: string;
  prix: string;
  liens: string;
}
