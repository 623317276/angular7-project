import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-slider
      [nzDefaultValue]="30"
      [(ngModel)]="singleValue" (ngModelChange)="onChange($event)"
      (nzOnAfterChange)="onAfterChange($event)"
    ></nz-slider>
    <nz-slider
      nzRange
      [nzStep]="10"
      [nzDefaultValue]="[20, 50]"
      [(ngModel)]="rangeValue" (ngModelChange)="onChange($event)"
      (nzOnAfterChange)="onAfterChange($event)"
    ></nz-slider>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {

  singleValue;
  rangeValue;

  onChange(value) {
    console.log(`onChange: ${value}`);
  }

  onAfterChange(value) {
    console.log(`onAfterChange: ${value}`);
  }

}
