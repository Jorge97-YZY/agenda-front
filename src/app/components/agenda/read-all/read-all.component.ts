import { AgendaService } from '../../../services/agenda.service';
import { Component, OnInit } from '@angular/core';
import { Agenda } from 'src/app/models/agenda';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.scss']
})
export class ReadAllComponent implements OnInit {

  list: Agenda[] = []
  closed = 0;
  constructor(
    private service: AgendaService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(res => {
      this.list = res;
      this.countClosed();
    });
  }

  countClosed(): void{
    for(let agenda of this.list){
      if(agenda.finalizado){
        this.closed++;
      }
    }
  }
}
