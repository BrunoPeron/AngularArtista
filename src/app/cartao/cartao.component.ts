import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartaoService } from '../services/cartao.service';


@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {
  public cartao;
  constructor(private cartaoService: CartaoService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.cartao = {};
  }

  getToken(){
    return this.cartaoService.getToken();
  }

  CartaoF(){
    var data = {'nrcartao':this.cartao.nrcartao,
                'tipo': this.cartao.tipo,
                'nome': this.cartao.nome,
                'codpessoa': '0',
                'sobrenome': this.cartao.sobrenome,
                'validade': this.cartao.validade,
                'cpf': this.cartao.cpf,
                'descadd': this.cartao.descadd
                };
    this.cartaoService.postCartao(data);
  }

  evento(event: any){
    // console.log(event.target.value);
  }
}
