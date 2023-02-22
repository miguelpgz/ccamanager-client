import { Component, OnInit } from '@angular/core';
import { Education } from '../models/Education';
// import {ApplicationService} from "../../services/application.service";
// import { ApplicationNewComponent } from "../application-new/application-new.component";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { SnackbarService } from "../../../core/services/snackbar.service";
// import { ApplicationEditComponent } from "../application-edit/application-edit.component";
// import { RoleClass } from '../../models/RoleClass';
// import {ApplicationDeployComponent} from "../application-deploy/application-deploy.component";
import { EducationService } from '../services/education.service';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss'],
  providers: [DialogService, DynamicDialogRef, DynamicDialogConfig]
})
export class EducationListComponent implements OnInit {

  listoOfData: Education[];
  isLoading: boolean = false;
  item: Education;

  constructor(
    private educationService: EducationService,
    private ref: DynamicDialogRef,
    private dialogService: DialogService,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.isLoading = true;
    this.educationService.findAll().subscribe({
       next: (results) => {
         this.listoOfData = results;
       },
       error: ()=>{},
       complete: () => { this.isLoading = false; }
     });
  }

  newItem(){
    // this.ref = this.dialogService.open(ApplicationNewComponent, {
    //   header: 'Nuevo elemento',
    //   width: '40%',
    //   data:{},
    //   closable: false
    // });

    this.onClose();
  }

  onClose(): void{
    // this.ref.onClose.subscribe(
    //   (results:any) => {
    //     this.findAll();
    //   }
    // )
  }
}
  // // editItem(item: Application){
  //   // this.ref = this.dialogService.open(ApplicationEditComponent, {
  //   //   header:'Editar ' + item.name,
  //   //   width: '40%',
  //   //   data: {
  //   //     applicationData:item
  //   //   },
  //   //   closable: false
  //   // });

  //   this.onClose();
  // }

  // deployItem(item: Application){
    // this.ref = this.dialogService.open(ApplicationDeployComponent, {
    //   header:'Deploy ' + item.name,
    //   width: '40%',
    //   data: {
    //     applicationData:item
    //   },
    //   closable: false
    // });

    // this.onClose();
  // }

  // getRoleNameComposed(role?: RoleClass) : String {
  //   if (role == null) return "";
  //   return role.code + " - "+role.name;
  // }
