import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <Grid [data]="data" [columnNum]="3"></Grid>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  list = [
    'check-circle',
    'check',
    'check-circle-o',
    'cross-circle',
    'cross',
    'cross-circle-o',
    'up',
    'down',
    'left',
    'right',
    'ellipsis',
    'loading'
  ];

  data = this.list.map(item => ({
    icon: item,
    text: item
  }));
}
