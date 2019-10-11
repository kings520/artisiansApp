import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Tasks} from '../tasks.module';

@Component({
  selector: 'app-customer-task',
  templateUrl: './customer-task.page.html',
  styleUrls: ['./customer-task.page.scss'],
})
export class CustomerTaskPage implements OnInit {
  task: Tasks[];
  constructor(private customerServer: CustomerService) { }

  ngOnInit() {
    this.task = this.customerServer.tasks;
  }

}
