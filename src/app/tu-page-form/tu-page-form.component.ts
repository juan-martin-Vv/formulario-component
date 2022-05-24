import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlModel, EntradaTexto, ImagenForm, restriccion } from '../formulario/control-model';
import { ControlService } from '../formulario/control.service';

@Component({
  selector: 'app-tu-page-form',
  templateUrl: './tu-page-form.component.html',
  styleUrls: ['./tu-page-form.component.css']
})
export class TuPageFormComponent implements OnInit {

  constructor(private formService:ControlService) { }
  ///formulario vacio
  toForm!:FormGroup;
  ///aqui inyectamos el obj con nuestro formulario
  labels:ControlModel<String>[]=TemplateForm ;
  ngOnInit(): void {
    this.toForm=this.formService.toFromGroup(this.labels)
  }

}
///
const TemplateForm =[
  new EntradaTexto({
    key:'inText',
    label:'Tu entrada de texto',
    required:true,
    restricciones:[
      {restriccion:restriccion.minlength,valor:'2',errores:'debes introducir mas de 2 chart'},
      {restriccion:restriccion.maxlength,valor:'5',errores:'no mas de 5 chart'}
    ],
    order:2
  }),
  new EntradaTexto({
    key:'password',
    label:'Tu password',
    type:'password',
    required:true,
    order:3
  }),
  new ImagenForm({
    key:'image',
    label:'Tu imagen',
    order:1
  })
]
