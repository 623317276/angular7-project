import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div [ngStyle]="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
      <nz-calendar nzCard (nzValueChange)="onValueChange($event)" (nzModeChange)="onModeChange($event)"></nz-calendar>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }

  onModeChange(mode: 'month'|'year'): void {
    console.log(`Current mode: ${mode}`);
  }
}
