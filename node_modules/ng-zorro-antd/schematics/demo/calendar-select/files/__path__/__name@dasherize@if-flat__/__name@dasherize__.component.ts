import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-alert nzMessage="Your selected date: {{ selectedValue | date:'yyyy-MM-dd' }}"></nz-alert>
    <nz-calendar [(ngModel)]="selectedValue"></nz-calendar>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  selectedValue = new Date('2017-01-25');
}
