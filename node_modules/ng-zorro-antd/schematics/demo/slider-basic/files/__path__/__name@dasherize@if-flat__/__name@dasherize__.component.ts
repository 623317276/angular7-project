import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-slider [nzDefaultValue]="30" [nzDisabled]="disabled"></nz-slider>
    <nz-slider nzRange [nzDefaultValue]="[20, 50]" [nzDisabled]="disabled"></nz-slider>
    Disabled: <nz-switch nzSize="small" [(ngModel)]="disabled"></nz-switch>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {

  disabled = false;

}
