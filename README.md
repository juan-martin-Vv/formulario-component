# JsonToFrom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Modulo de angular "formulario"

Basado en reactive form, mi pequeño modulo que dibuja formularios apartir de un objeto. Tanto el html como el formGroup, se puede recuperar los valores con un simple .getRawValues().
El Css esta basado en bootstrap. Estoy tratando de realizarlo completamente con CSS puro, pero es facilmente 
adaptable con solo editar el control.component.css y el .ts.
Esto me ayudo a no tener que realizar los molestos form y solo ocuparme con elaborar el DTO y sus restriciciones para una correcta validacion.

## Construccion del objeto

Por ejemplo

class miDTO {<br>
&nbsp; &nbsp;inText!:String;<br>
&nbsp; &nbsp;password!:String;<br>
&nbsp; &nbsp;image!:String;<br>
&nbsp; &nbsp;constructor(inText?:String,password?:String,image?:String){<br>
&nbsp; &nbsp;this.inText=inText||'';<br>
&nbsp; &nbsp;this.password=password||'';<br<>
&nbsp; &nbsp;this.image=image||'';<br>
&nbsp;}<br>
}

Objeto

const TemplateForm =[<br>
&nbsp; &nbsp;new EntradaTexto({<br>
&nbsp; &nbsp;key:'inText',<br>
&nbsp; &nbsp;label:'Tu entrada de texto',<br>
&nbsp; &nbsp;required:true,<br>
&nbsp; &nbsp;restricciones:[<br>
&nbsp; &nbsp;{restriccion:restriccion.minlength,valor:'2',errores:'debes introducir mas de 2 chart'},<br>
&nbsp; &nbsp;{restriccion:restriccion.maxlength,valor:'5',errores:'no mas de 5 chart'}<br>
    ],<br>
&nbsp; &nbsp;order:2<br>
  }),<br>
  new EntradaTexto({<br>
&nbsp; &nbsp;key:'password',<br>
&nbsp; &nbsp;label:'Tu password',<br>
&nbsp; &nbsp;type:'password',<br>
&nbsp; &nbsp;required:true,<br>
&nbsp; &nbsp;order:3<br>
  }),<br>
  new ImagenForm({<br>
&nbsp; &nbsp;key:'image',<br>
&nbsp; &nbsp;label:'Tu imagen',<br>
&nbsp; &nbsp;order:1<br>
&nbsp;})<br>
]<br>

