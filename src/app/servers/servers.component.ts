import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService, 
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  onReloadPage() {
    //this.router.navigate(['servers']); //Não faz nada nem provoca erro ao contrário do routerLink porque não sabe qual é a rota ativa
    //Para se usar caminhas relativos, recorre-se ao ActivatedRoute
    this.router.navigate(['servers'], {relativeTo: this.route}); //Assim surge um erro porque estamos a tentar ir para servers/servers
    //only to demo purpose!
  }

}
