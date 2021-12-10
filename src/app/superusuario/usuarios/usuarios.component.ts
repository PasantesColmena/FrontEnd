import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuarios/usuario.service';
import { Usuario } from 'src/app/service/usuarios/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: Usuario[] = []

  constructor(
    public usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {

    this.usuarioService.getAll().subscribe((datau: Usuario[]) => {
      this.users = datau;
    })

  }

}
