import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoadServer(id:number) {
    //for some complex calculationsm for instance and then navigate to another route
    this.router.navigate(['/servers',id,'edit'], {queryParams: {allowEdit: '1'}, fragment: "loading"}); //lets keep absolute path for now
  }

}
