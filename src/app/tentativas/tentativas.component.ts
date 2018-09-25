import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number;

  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  constructor() {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.coracoes.length !== this.tentativas ) {
      this.coracoes[(this.coracoes.length - this.tentativas)-1].cheio = false;
    }
  }

}
