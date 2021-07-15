import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navLinks = [
    {path: 'list', label:'Tarefas'},
    {path: 'nova', label:'Nova Tarefa'},
    {path: 'close', label:'Tarefas Finalizados'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
