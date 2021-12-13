import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuarios/usuario.service';
import { Usuario } from 'src/app/service/usuarios/usuario';
@Component({
  selector: 'app-Clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  users: Usuario[] = [];
  item: Usuario | undefined;


  constructor(
    public usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {


    this.usuarioService.getAll().subscribe((datau: Usuario[]) => {
      this.users = datau;
    })


  }

  mostrarFormEditar(userID) {

    let formAdd = document.querySelector(".form-add");
    let formEdit = document.querySelector(".form-edit");

    this.item = this.users.find(
      (item) => item.id === userID
    );

    (<HTMLInputElement>document.getElementById('ide')).value = this.item.id.toString();
    (<HTMLInputElement>document.getElementById('nom')).value = this.item.nom.toString();
    // (<HTMLInputElement>document.getElementById('email')).value = this.item.email;
    (<HTMLInputElement>document.getElementById('ced')).value = this.item.ced.toString();
    (<HTMLInputElement>document.getElementById('num')).value = this.item.num;
    (<HTMLInputElement>document.getElementById('dir')).value = this.item.dir.toString();
    // (<HTMLInputElement>document.getElementById('pass')).value = this.item.password;


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
