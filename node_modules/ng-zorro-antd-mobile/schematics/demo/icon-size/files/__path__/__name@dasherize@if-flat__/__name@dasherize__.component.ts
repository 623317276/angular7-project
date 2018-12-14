import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <Grid [data]="data" [columnNum]="5" [activeStyle]="false"></Grid>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  size = ['xxs', 'xs', 'sm', 'md', 'lg'];

  data = this.size.map(item => ({
    icon: 'search',
    text: item,
    size: item
  }));
}
