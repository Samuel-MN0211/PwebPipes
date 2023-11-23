import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleService extends IMensagem {

  override info(mensagem: string): void {
    console.log(`Mensagem: ${mensagem}`);
  }
  override sucesso(mensagem: string): void {
    console.log(`Mensagem: ${mensagem}`);
  }
  override erro(mensagem: string): void {
    console.log(`Mensagem: ${mensagem}`);
  }

}
