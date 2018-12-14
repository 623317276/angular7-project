import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-select [nzMaxMultipleCount]="3" style="width: 100%" nzMode="multiple" nzPlaceHolder="Please select" [(ngModel)]="listOfSelectedValue">
      <nz-option *ngFor="let option of listOfOption" [nzLabel]="option.label" [nzValue]="option.value"></nz-option>
    </nz-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  listOfOption = [];
  listOfSelectedValue = [ 'a10', 'c12' ];

  ngOnInit(): void {
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}
