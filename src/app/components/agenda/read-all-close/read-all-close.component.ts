import { Component, OnInit } from '@angular/core';
import { Agenda } from 'src/app/models/agenda';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-read-all-close',
  templateUrl: './read-all-close.component.html',
  styleUrls: ['./read-all-close.component.scss']
})
export class ReadAllCloseComponent implements OnInit {

  list: Agenda[] = []
  count = 0;
  constructor(
    private service: AgendaService
  ) { }

  ngOnInit(): void {
    this.findAllClose();
  }

  findAllClose() {
    this.service.findAllClose().subscribe(res => {
      this.list = res;
      this.countTasks();
    });
  }

  countTasks(): void{
    for(let agenda of this.list){
      if(agenda.finalizado){
        this.count++;
      }
    }
  }



}
