import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div class="icons-list">
      <i nz-icon [type]="'smile'" [theme]="'twotone'"></i>
      <i nz-icon [type]="'heart'" [theme]="'twotone'" [twoToneColor]="'#eb2f96'"></i>
      <i nz-icon [type]="'check-circle'" [theme]="'twotone'" [twoToneColor]="'#52c41a'"></i>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .icons-list > .anticon {
      margin-right: 6px;
      font-size: 24px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
