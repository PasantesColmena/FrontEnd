import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuarios/usuario.service';
import { Usuario } from 'src/app/service/usuarios/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: Usuario[] = [];
  item: Usuario | undefined;
  form: FormGroup;
  err = null;


  constructor(
    public usuarioService: UsuarioService,
    private router: Router,
  ) { }


  ngOnInit(): void {

    this.usuarioService.getAll().subscribe((datau: Usuario[]) => {
      this.users = datau;
      for (let index = 0; index < this.users.length; index++) {
        this.usuarioService.getPermiso(this.users[index].id).subscribe((datac: any) => {
          console.log(datac);
          this.users[index].category = datac;
        })
      }
    })
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      email: new FormControl('', [Validators.required]),
      ced: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      num: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      dir: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      password: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    this.usuarioService.createUsuario(this.form.value).subscribe(res =>
      {
        Swal.fire(
          'Usuario Creado Correctamente!'
        )
      window.location.reload();
    },
    error => {
      console.log(error);
      this.err = error.error;
    }
    )

  }

  eliminarUsuario(userID) {
    Swal.fire({
      title: 'Esta seguro de eliminar el usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#178CA4',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.usuarioService
          .delete(userID)
          .subscribe(
            response => {
              Swal.fire(
                'Usuario Eliminado!'
              )
              window.location.reload();
            },
            error => {
              console.log(error);
            }
          );


      }
    })


  }

  mostrarFormEditar(userID) {

    let formAdd = document.querySelector(".form-add");
    let formEdit = document.querySelector(".form-edit");

    this.item = this.users.find(
      (item) => item.id === userID
    );


    // (<HTMLInputElement>document.getElementById('ide')).value = this.item.id.toString();
    (<HTMLInputElement>document.getElementById('nom_1')).value = this.item.nom.toString();
    (<HTMLInputElement>document.getElementById('email_1')).value = this.item.email;
    (<HTMLInputElement>document.getElementById('ced_1')).value = this.item.ced.toString();
    (<HTMLInputElement>document.getElementById('num_1')).value = this.item.num;
    (<HTMLInputElement>document.getElementById('dir_1')).value = this.item.dir.toString();
    (<HTMLInputElement>document.getElementById('pass_1')).value = this.item.password;
    (<HTMLInputElement>document.getElementById('category_1')).value = this.item.category;



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
