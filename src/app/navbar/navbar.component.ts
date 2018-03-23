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

  private wantsToRegister = false;
  private wantsToLogin = false;
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
  }

  private openLogin(content) {
    this.wantsToLogin = true;
    this.wantsToRegister = false;
    this.isRegistered = this.auth.isRegistered;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private openRegister(content) {
    this.wantsToRegister = true;
    this.wantsToLogin = false;
    this.isRegistered = this.auth.isRegistered;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private logIn() {
    this.auth.logIn(this.loginFormData);
  }

  private register() {
    this.auth.registerUser(this.loginFormData);
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
