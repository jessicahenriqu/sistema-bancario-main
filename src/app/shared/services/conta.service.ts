import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Conta } from '../models/Conta';
import { SaqueDeposito } from '../models/SaqueDeposito';
import { Transferencia } from '../models/Tranferencia';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  inserir(formData: any) {
    throw new Error("Method not implemented.");
  }
  api = `${environment.api}/contas/`;

  constructor(private httpCliente: HttpClient) { }

  saque(id: number, saqueDeposito: SaqueDeposito): Observable<any> {
    return this.httpCliente.post(`${this.api}/${id}/saque`, { saqueDeposito });
  }

  deposito(id: number, deposito: SaqueDeposito): Observable<any> {
    return this.httpCliente.post(`${this.api}/${id}/deposito`, deposito);
  }

  transferencia(id: number, transferencia: Transferencia): Observable<any> {
    return this.httpCliente.post(`${this.api}/${id}/transferencia`, transferencia);
  }

  listarContas(): Observable<Conta[]> {
    return this.httpCliente.get<Conta[]>(this.api);
  }

  salvarConta(novaConta: Conta): Observable<Conta> {
    return this.httpCliente.post<Conta>(
      this.api, novaConta);
  }

  listar_paginado(page: number, pageSize: number): Observable<Conta[]> {
    return this.httpCliente
    .get<Conta[]>(`${this.api}?page=${page}&pageSize=${pageSize}`);
  }


  deletar(idConta: number): Observable<object> {
    return this.httpCliente.delete(`${this.api}${idConta}`);
  }


  pesquisarPorId(id: number): Observable<Conta> {
    return this.httpCliente.get<Conta>(`${this.api}/${id}`);
  }

  atualizar(conta: Conta): Observable<Conta> {
    return this.httpCliente.put<Conta>(`${this.api}${conta.id}`, conta);
  }
}