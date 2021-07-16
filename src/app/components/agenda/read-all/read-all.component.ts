import { AgendaService } from '../../../services/agenda.service';
import { Component, OnInit } from '@angular/core';
import { Agenda } from 'src/app/models/agenda';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.scss']
})
export class ReadAllComponent implements OnInit {

  list: Agenda[] = [];
  listFinished: Agenda[] = [];
  closed = 0;
  constructor(
    private service: AgendaService,

  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(res => {
      res.forEach(agenda =>{
        if(agenda.finalizado){
          this.listFinished.push(agenda)
        }else{
          this.list.push(agenda)
        }
      })
      this.closed = this.listFinished.length
    });
  }

  finalizar(item: Agenda): void{
    item.finalizado = true
    this.service.update(item).subscribe((res)=>{
      this.service.message('Tarefa finalizada com sucesso!')
      this.list = this.list.filter(agenda => agenda.id !== item.id);
      this.closed++;
    });

  }

  delete(id: any): void{
    this.service.delete(id).subscribe((res)=>{
      if(res === null){
        this.service.message('Tarefa apagada com sucesso!')
        this.list = this.list.filter(agenda => agenda.id !== id);
      }
    })
  }

}
