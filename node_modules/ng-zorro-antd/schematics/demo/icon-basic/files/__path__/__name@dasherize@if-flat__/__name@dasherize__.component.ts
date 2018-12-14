import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div class="icons-list">
      <i nz-icon [type]="'home'"></i>
      <i nz-icon [type]="'setting'" [theme]="'fill'"></i>
      <i nz-icon [type]="'smile'" [theme]="'outline'"></i>
      <i nz-icon [type]="'sync'" [spin]="true"></i>
      <!-- Loading with new API would spin automatically! -->
      <i nz-icon [type]="'loading'"></i>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    [nz-icon] {
      margin-right: 6px;
      font-size: 24px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
