import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-transfer
      [nzDataSource]="list"
      nzShowSearch
      [nzFilterOption]="filterOption"
      (nzSearchChange)="search($event)"
      (nzSelectChange)="select($event)"
      (nzChange)="change($event)">
    </nz-transfer>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  // tslint:disable-next-line:no-any
  list: any[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key        : i.toString(),
        title      : `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction  : Math.random() * 2 > 1 ? 'right' : ''
      });
    }
  }

  // tslint:disable-next-line:no-any
  filterOption(inputValue: string, item: any): boolean {
    return item.description.indexOf(inputValue) > -1;
  }

  search(ret: {}): void {
    console.log('nzSearchChange', ret);
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
