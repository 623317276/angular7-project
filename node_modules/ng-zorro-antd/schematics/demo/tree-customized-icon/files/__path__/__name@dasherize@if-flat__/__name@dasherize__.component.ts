import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-tree
      [nzData]="nodes"
      nzShowIcon="true">
    </nz-tree>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component implements OnInit {
  nodes = [
    {
      title   : 'parent 1',
      key     : '100',
      expanded: true,
      icon    : 'anticon anticon-smile-o',
      children: [
        { title: 'leaf', key: '1001', icon: 'anticon anticon-meh-o', isLeaf: true },
        { title: 'leaf', key: '1002', icon: 'anticon anticon-frown-o', isLeaf: true }
      ]
    }
  ];

  ngOnInit(): void {
  }
}
