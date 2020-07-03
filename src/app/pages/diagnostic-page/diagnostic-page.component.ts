import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Diagnostic } from '../../models/diagnostic';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-diagnostic-page',
  templateUrl: './diagnostic-page.component.html',
  styleUrls: ['./diagnostic-page.component.scss']
})
export class DiagnosticPageComponent implements OnInit {
  startDiag: boolean = false;
  hasLocks: boolean = false;

  // Tooltip variables
  locks: boolean = false;
  hairType: boolean = false;
  porosity: boolean = false;
  density: boolean = false;
  thickness: boolean = false;
  curlPattern: boolean = false;

  hairTypeValue: number = 1;
  hairTypeOption: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Ondulés'},
      {value: 1, legend: 'Bouclés'},
      {value: 2, legend: 'Crépus'}
    ]
  };
  porosityValue: number = 1;
  porosityOption: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Faible'},
      {value: 1, legend: 'Moyenne'},
      {value: 2, legend: 'Élevée'}
    ]
  };
  densityValue: number = 1;
  densityOption: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Faible'},
      {value: 1, legend: 'Moyenne'},
      {value: 2, legend: 'Élevée'}
    ]
  };
  thicknessValue: number = 1;
  thicknessOption: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Fin'},
      {value: 1, legend: 'Moyen'},
      {value: 2, legend: 'Épais'}
    ]
  };
  curlPatternValue: number = 1;
  curlPatternOption: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: '|'},
      {value: 1, legend: 'S'},
      {value: 2, legend: 'Z'},
      {value: 3, legend: 'O'}
    ]
  };
  distanceBetweenCurlsValue: number = 1;
  distanceBetweenCurlsOption: Options = {
    showTicksValues: true,
    showTicks: false,
    stepsArray: [
      {value: 0, legend: 'Peu rapprochés'},
      {value: 1},
      {value: 2},
      {value: 3, legend: 'Très rapprochés'}
    ]
  };

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  getHairType(value: number) {
    switch(value) {
      case 0:
        return 'wavy';
      case 1:
        return 'curly';
      case 2:
        return 'kinky'
    }
  }

  getLevel(value: number) {
    switch(value) {
      case 0:
        return 'low';
      case 1:
        return 'normal';
      case 2:
        return 'high'
    }
  }

  getThickness(value: number) {
    switch(value) {
      case 0:
        return 'light';
      case 1:
        return 'medium';
      case 2:
        return 'heavy'
    }
  }

  getCurlPattern(value: number) {
    switch(value) {
      case 0:
        return 'l';
      case 1:
        return 's';
      case 2:
        return 'z'
      case 3:
        return 'o'
    }
  }

  getDistanceBetweenCurls(value: number) {
    switch(value) {
      case 0:
        return 'loose';
      case 1:
        return 'medium';
      case 2:
        return 'tight'
      case 3:
        return 'very_tight'
    }
  }

  onSubmit() {
    let next: Diagnostic;
    if(!this.hasLocks) {
      next = {
        locks_diagnostic: this.hasLocks,
        hair_texture_diagnostic: this.getHairType(this.hairTypeValue),
        porosity_diagnostic: this.getLevel(this.porosityValue),
        density_diagnostic: this.getLevel(this.densityValue),
        thickness_diagnostic: this.getThickness(this.thicknessValue),
        curl_pattern_diagnostic: this.getCurlPattern(this.curlPatternValue),
        distance_between_curls_diagnostic: this.getDistanceBetweenCurls(this.distanceBetweenCurlsValue)
      }
    } else {
      next = { locks_diagnostic: this.hasLocks };
    }
    this.user.addDiagnostic(next)
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }

}
