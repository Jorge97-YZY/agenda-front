import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agenda } from 'src/app/models/agenda';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  formTarefa!: FormGroup;
  agenda: Agenda = {
    id: '',
    titulo: '',
    descricao: '',
    dataParaFinalizar: '',
    finalizado: false
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private agendaService: AgendaService
  ) { }

  ngOnInit() {
    this.findById();
    this.createForm();
  }

  findById(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.agendaService.findById(id).subscribe((resposta) => {
      this.updateForm(resposta);
    });
  }
  createForm() {
    this.formTarefa = this.fb.group({
      id: [''],
      titulo: ['', [Validators.required]],
      descricao: [''],
      dataParaFinalizar: [''],
      finalizado: [false]
    })
  }

  formataData(): void{
    let data = new Date(this.formTarefa.value.dataParaFinalizar)
    this.formTarefa.value.dataParaFinalizar = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }

  updateForm(agenda: Agenda) {
    this.formTarefa.patchValue({
      id: agenda.id,
      titulo: agenda.titulo,
      descricao: agenda.descricao,
      dataParaFinalizar: agenda.dataParaFinalizar,
      finalizado: agenda.finalizado

    })
  }

  onSubmit(): void{
    this.agendaService.update(this.formTarefa.value).subscribe(resposta => {
      this.router.navigate(['list']);
      this.agendaService.message('Tarefa Editada com Sucesso!');
    }, err =>{
      this.agendaService.message('Erro ao Editar Tarefa! Tente mais Tarde.')
    });
  }

  onCancel(): void{
    this.router.navigate(['list']);
  }
}
