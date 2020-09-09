import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
  import { from } from 'rxjs';
import { Event } from 'src/app/Model/event';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
events: Event[] = [];
  constructor(private eventService: EventService) {
  }
  // deleteId(e:Event){
  //  alert(e);
  //  const id = this.events.indexOf(e);
  //  this.events.splice(id,1);
  // }
  // addEvent(eventName: string, desc: string, speaker: string) {
  //   this.eventService.addEvent(eventName, desc, speaker);
  // }
  addEvent(eventName: string, desc: string, speaker: string) {
    this.eventService.addEvent(eventName, desc, speaker);
  }

  deleteEvent(e:Event){
    this.eventService.deleteEvent(e);
  }


  ngOnInit(): void {
   this.events= this.eventService.getEvents();

  }

}
