import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <div>
    <nz-avatar nzSize="large" nzIcon="anticon anticon-user"></nz-avatar>
    <nz-avatar nzIcon="anticon anticon-user"></nz-avatar>
    <nz-avatar nzSize="small" nzIcon="anticon anticon-user"></nz-avatar>
  </div>
  <div>
    <nz-avatar [nzShape]="'square'" [nzSize]="'large'" [nzIcon]="'anticon anticon-user'"></nz-avatar>
    <nz-avatar [nzShape]="'square'" [nzIcon]="'anticon anticon-user'"></nz-avatar>
    <nz-avatar [nzShape]="'square'" [nzSize]="'small'" [nzIcon]="'anticon anticon-user'"></nz-avatar>
  </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    :host ::ng-deep .ant-avatar {
      margin-top: 16px;
      margin-right: 16px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component { }
