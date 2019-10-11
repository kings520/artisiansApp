import {Injectable} from '@angular/core';
import {Tasks} from './tasks.module';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  _tasks: Tasks[] = [
      new Tasks('t1', 'Broken Pipe', 'Broken kitchen pipe', 'https://bit.ly/30SwtvO', 'Ikeja, Lagos'),
      new Tasks('t2', 'Broken Pipe2', 'Broken kitchen pipe', 'https://bit.ly/30SwtvO', 'Ikeja, Lagos'),
      new Tasks('t3', 'Broken Pipe3', 'Broken kitchen pipe', 'https://bit.ly/30SwtvO', 'Ikeja, Lagos')
  ];
  constructor() { }

  get tasks() {
    return [...this._tasks];
  }

  getTask(id: string) {
    return {...this._tasks.find(t => t.id === id)};
  }
}
