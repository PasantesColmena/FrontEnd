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

  sendUser(user) {

  }


  mostrarFormEditar() {

    let formAdd = document.querySelector(".form-add");
    let formEdit = document.querySelector(".form-edit");


    formEdit.classList.add('d-block');
    formAdd.classList.add('d-none');

    formAdd.classList.remove('d-block');
    formEdit.classList.remove('d-none');
  }

  mostrarFormAdd() {
    let formAdd = document.querySelector(".form-add");
    let formEdit = document.querySelector(".form-edit");


    formEdit.classList.add('d-none');
    formAdd.classList.add('d-block');

    formEdit.classList.remove('d-block');
    formAdd.classList.remove('d-none');
  }

}
