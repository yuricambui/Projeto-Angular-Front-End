import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 nomeProduto: string = "Curso de Angular";
 anuncio: string = `O ${this.nomeProduto} está em promoção!`;
 idProduto: number = 3;
 precoProduto: number = 2.51;
 promocao: boolean = true;
 foto: string = "assets/img/crud.png";
 dataValidade: string = '2021-12-31';


  constructor() {
    // Variáveis de string concatenação
    // this.anuncio = 'o ' + this.nomeProduto + 'está em promoção!';

    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anúncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);


    /*var idade = 10;
    console.log('Minha idade é  :', idade);

    var idade = 20;
    console.log('Minha idade é  :', idade);

    function imprimeIdade() {
      var idade = 20;
      console.log('minha idade é: ', idade);
    }
    imprimeIdade();

    function imprimeIdade() {
      for (var idade = 30; idade <=40; idade++){
        console.log('Idade dentro do for: ', idade)
      }
         console.log('Idade fora do for: ', idade);
    }
     imprimeIdade();

    var a = 5;
    var b = 10;
    if(a = 5){
      let a = 4;
      var b = 1;
      console.log('Variável a dentro do if: ', a);
      console.log('Variável b dentro do if: ', b);
    }
    console.log('Variável a fora do if: ', a);
    console.log('Variável b fora do if: ', b); */
  }

  ngOnInit(): void {
  }

}
