import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  Cusadd(){
    document.getElementById('CusList').style.display = 'none'
    document.getElementById('CusAdd').style.display = 'inline'
  }

  CusCancel(){
    this.router.navigate(['Customer'])
  }

}
