import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationListComponent } from './education/education-list/education-list.component';
import { EducationEditComponent } from './education/education-edit/education-edit.component';
import { EducationCenterEditComponent } from './education-center/education-center-edit/education-center-edit.component';
import { EducationCenterListComponent } from './education-center/education-center-list/education-center-list.component';
import { TechnologyListComponent } from './technology/technology-list/technology-list.component';
import { TechnologyEditComponent } from './technology/technology-edit/technology-edit.component';
import { EnglishLevelEditComponent } from './english-level/english-level-edit/english-level-edit.component';
import { EnglishLevelListComponent } from './english-level/english-level-list/english-level-list.component';



@NgModule({
  declarations: [
    EducationListComponent,
    EducationEditComponent,
    EducationCenterEditComponent,
    EducationCenterListComponent,
    TechnologyListComponent,
    TechnologyEditComponent,
    EnglishLevelEditComponent,
    EnglishLevelListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MaintenanceModule { }
