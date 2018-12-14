import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-badge [nzCount]="99"><a class="head-example"></a></nz-badge>
    <nz-badge [nzCount]="200"><a class="head-example"></a></nz-badge>
    <nz-badge [nzCount]="200" [nzOverflowCount]="10"><a class="head-example"></a></nz-badge>
    <nz-badge [nzCount]="10000" [nzOverflowCount]="999"><a class="head-example"></a></nz-badge>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}
