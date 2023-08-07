import { Component, OnInit } from '@angular/core';
import { RmserviceService } from 'src/app/rmservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  characters: any;
  name: string = '';
  req = false;
  constructor(private servico: RmserviceService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    return this.servico.listarCarac().subscribe((dados) => {
      this.characters = dados;
    });
  }

  pesquisar(nome: string) {
    return this.servico.pesquisarCarac(nome).subscribe((dados) => {
      this.characters = dados;
    });
  }
}
