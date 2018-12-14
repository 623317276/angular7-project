import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-spin [nzSize]="'small'"></nz-spin>
    <nz-spin></nz-spin>
    <nz-spin [nzSize]="'large'"></nz-spin>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-spin {
        display: inline-block;
        margin-right: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
