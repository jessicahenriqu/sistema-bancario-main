import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent {
  idConta!: number;
  digSenha!: number;

  constructor(private router: Router) {}

  btContinuar(): void {
    if (this.idConta == 123 && this.digSenha == 123) {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Bem vindo!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.router.navigate(['/cliente']);
      });
    } else {
      console.error(Error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao cadastrar cliente!',
      });
    }
  }
  lkcrirconta(): void {
    this.router.navigate(['/cliente']);
  }
}