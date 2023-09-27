import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";



@Component({
  selector: 'app-cadastrar-conta',
  templateUrl: './cadastrar-conta.component.html',
  styleUrls: ['./cadastrar-conta.component.scss'],


 
  
})
export class CadastrarContaComponent  {

  numeroConta = new FormControl('', [Validators.required]);
  agencia = new FormControl('', [Validators.required]);
  valor = new FormControl('', [Validators.required]);
  cliente = new FormControl('', [Validators.required]);
  router: any;

  getErrorMessage(control: FormControl): string {
    if (control.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    return '';
  }

  submitForm() {
    if (this.numeroConta.valid && this.agencia.valid && this.valor.valid && this.cliente.valid) {

      console.log('Dados do formulário válidos:', {
        numeroConta: this.numeroConta.value,
        agencia: this.agencia.value,
        valor: this.valor.value,
        cliente: this.cliente.value
      });
    } else {

      console.log('Formulário inválido');
    }
  }

  cadastrar(): void {
    
    
        this.router.navigate(['/cliente']);
    

}
}

