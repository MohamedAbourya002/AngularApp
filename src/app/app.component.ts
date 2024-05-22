import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

onNotify(message: string) {
console.log(message);
}
  title = 'Angular-app';

  parentData = { name: 'John', age: 30 };

}
