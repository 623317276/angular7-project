import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <textarea nz-input placeholder="Autosize height based on content lines" nzAutosize></textarea>
      <div style="margin:24px 0;"></div>
      <textarea nz-input placeholder="Autosize height with minimum and maximum number of lines" [nzAutosize]="{ minRows: 2, maxRows: 6 }"></textarea>
    </div>

  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,

  styles: []
})
export class <%= classify(name) %>Component {
}
