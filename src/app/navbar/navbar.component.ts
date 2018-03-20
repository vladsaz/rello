import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
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
    name: ''
  };

  constructor(private auth: AuthorizationService, private modalService: NgbModal) { }

  ngOnInit() {
    this.isRegistered = this.auth.isRegistered;
  }

  open(content) {
    console.log(this.isRegistered);
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onSubmit() {
    console.log(this.loginFormData);
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
