import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id?: number, name?: string, status?: string}={};

  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.server = <{id: number, name: string, status: string}>this.serversService.getServer(1);
  }

}
