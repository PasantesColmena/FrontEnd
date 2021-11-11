import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  usuarios: Usuario[] = [];
  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe((data: Usuario[])=>{
      this.usuarios = data;
      console.log(this.usuarios);
    })
  }
  deleteUsuario(ced){
    this.usuarioService.delete(ced).subscribe(res => {
         this.usuarios = this.usuarios.filter(item => item.ced !== ced);
         console.log('Person deleted successfully!');
    })
  }

}
