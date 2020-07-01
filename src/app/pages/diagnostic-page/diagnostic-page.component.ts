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

  valueTwo: number = 1;
  optionTwo: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Ondulés'},
      {value: 1, legend: 'Bouclés'},
      {value: 2, legend: 'Crépus'}
    ]
  };
  valueThree: number = 1;
  optionThree: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Faible'},
      {value: 1, legend: 'Moyenne'},
      {value: 2, legend: 'Élevée'}
    ]
  };
  valueFour: number = 1;
  optionFour: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Faible'},
      {value: 1, legend: 'Moyenne'},
      {value: 2, legend: 'Élevée'}
    ]
  };
  valueFive: number = 1;
  optionFive: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Fin'},
      {value: 1, legend: 'Moyen'},
      {value: 2, legend: 'Épais'}
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
