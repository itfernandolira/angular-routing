import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id?: number, name?: string, status?: string}={};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    //Snapshot tem o mesmo problema do próprio componente
    const id=+this.route.snapshot.params['id'];
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    //Resolução através dos Observables
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }
      );
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = <{id: number, name: string, status: string}>this.serversService.getServer(+params['id']);
        }
      ) 
    this.route.fragment.subscribe();
    //this.server = <{id: number, name: string, status: string}>this.serversService.getServer(id);
    this.serverName = <string>this.server.name;
    this.serverStatus = <string>this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(<number>this.server.id, {name: this.serverName, status: this.serverStatus});
  }


}
