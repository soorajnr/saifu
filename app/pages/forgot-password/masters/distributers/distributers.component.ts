import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distributers',
  templateUrl: './distributers.component.html',
  styleUrls: ['./distributers.component.scss']
})
export class DistributersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Distadd(){
    document.getElementById('distadder').style.display = 'Inline';
    document.getElementById('distList').style.display = 'none';
    
  }

  DistCancel(){
      this.router.navigate(['Distributers'])
  }
}
