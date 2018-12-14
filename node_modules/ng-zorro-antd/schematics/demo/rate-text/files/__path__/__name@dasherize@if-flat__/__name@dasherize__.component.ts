import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-rate [(ngModel)]="value" nzAllowHalf></nz-rate>
    <span *ngIf="value" class="ant-rate-text">{{ value }} stars</span>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  value = 3;
}
