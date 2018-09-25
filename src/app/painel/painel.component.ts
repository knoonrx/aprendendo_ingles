import { Frase } from './../shared/frase.model';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {


  public frases: Frase[] = FRASES;
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  ngOnDestroy(): void {
  }

  public verificarResposta(): void {
    if (this.resposta.toLocaleLowerCase() === this.rodadaFrase.frasePtBr.toLocaleLowerCase()) {
      this.progresso += (100 / this.frases.length);

      if (this.rodada === 3)
        this.encerrarJogo.emit('vitoria');

      this.atualizaRodada();
    } else {
      this.tentativas--;

      if (this.tentativas < 0)
        this.encerrarJogo.emit('derrota');
    }
  }

  public atualizaRodada(): void {
    if (this.rodada < (this.frases.length - 1)) {
      this.rodadaFrase = this.frases[++this.rodada];
      this.resposta = '';
    }
  }
}
