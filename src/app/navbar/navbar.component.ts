import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { ColumnsService } from '../columns.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private closeResult: string;
  private isRegistered;
  private loginFormData: object = {
    login: '',
    password: ''
  };
  private registrationFormData: object = {
    login: '',
    password: ''
  };

 

  constructor(private auth: AuthorizationService, private modalService: NgbModal, private columnsService: ColumnsService) { }

  ngOnInit() {
    this.isRegistered = this.auth.isRegistered;
  }

  private open(content) {
    console.log(this.isRegistered);
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private logIn() {
    console.log(this.loginFormData);
  }

  private register() {
    console.log(this.registrationFormData);
    this.auth.registerUser(this.registrationFormData);
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
