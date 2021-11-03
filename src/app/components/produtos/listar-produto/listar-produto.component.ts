import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Yuri',
    idade: 18,
    altura: 1.85,
    graduado: false
  };

  listaProdutos: any = [
    {nome: 'Curso de Angular', precoProduto: 35.56, validade: '2021-12-31', id: 1},
    {nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31', id: 2, promocao: true},
    {nome: 'Curso de Ionic Avançado', precoProduto: 80, validade: '2021-12-28', id: 3},
    {nome: 'Curso de Python', precoProduto: 75, validade: '2021-12-25', id: 4},
    {nome: 'Curso de JavaScript', precoProduto: 50, validade: '2021-12-31', id: 5}
  ];

  constructor() {

    for (let item of this.listaProdutos) {
      console.log(item);
  }

  for (let item of this.listaStrings) {
      console.log(item);
  }

  for (const item of this.listaNumeros) {
    console.log(item);
}

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);

  }

  ngOnInit(): void {
  }

}
