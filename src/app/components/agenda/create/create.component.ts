import { AgendaService } from 'src/app/services/agenda.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  formTarefa!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private agendaService: AgendaService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formTarefa = this.fb.group({
      titulo: ['', [Validators.required]],
      descricao: [''],
      dataParaFinalizar: ['', [Validators.required]],
      finalizado: [false]
    })
  }

  onSubmit(){
    this.formataData();
    this.agendaService.create(this.formTarefa.value).subscribe(res=>{
      this.agendaService.message('Tarefa agendada com sucesso!');
      this.router.navigate(['list']);
    }, err =>{
      this.agendaService.message('Falha ao agendar tarefa!');
      this.router.navigate(['list']);
    });
  }

  formataData(): void{
    let data = new Date(this.formTarefa.value.dataParaFinalizar)
    this.formTarefa.value.dataParaFinalizar = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }

}
