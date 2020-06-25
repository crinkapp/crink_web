import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-diagnostic-page',
  templateUrl: './diagnostic-page.component.html',
  styleUrls: ['./diagnostic-page.component.scss']
})
export class DiagnosticPageComponent implements OnInit {
  startDiag: boolean = false;
  hasLocks: boolean = false;
  locks: boolean = false;
  hairType: boolean = false;
  porosity: boolean = false;
  density: boolean = false;
  thickness: boolean = false;
  valueOne: number = 0;
  optionOne: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Oui'},
      {value: 1, legend: 'Non'}
    ]
  };
  valueTwo: number = 5;
  optionTwo: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Ondulés'},
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5, legend: 'Bouclés'},
      {value: 6},
      {value: 7},
      {value: 8},
      {value: 9},
      {value: 10, legend: 'Crépus'}
    ]
  };
  valueThree: number = 5;
  optionThree: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Faible'},
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5, legend: 'Moyenne'},
      {value: 6},
      {value: 7},
      {value: 8},
      {value: 9},
      {value: 10, legend: 'Élevée'}
    ]
  };
  valueFour: number = 5;
  optionFour: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Faible'},
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5, legend: 'Moyenne'},
      {value: 6},
      {value: 7},
      {value: 8},
      {value: 9},
      {value: 10, legend: 'Élevée'}
    ]
  };
  valueFive: number = 5;
  optionFive: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Fin'},
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5, legend: 'Moyen'},
      {value: 6},
      {value: 7},
      {value: 8},
      {value: 9},
      {value: 10, legend: 'Épais'}
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
