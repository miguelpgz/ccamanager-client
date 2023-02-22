import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SlideMenuModule } from 'primeng/slidemenu';
import {MenuModule} from 'primeng/menu';
import { MessageService } from 'primeng/api';

import { LayoutComponent } from './views/layout/layout.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { NavComponent } from './views/layout/nav/nav.component';
import { RefreshTokenResolverService } from './services/refresh-token-resolver.service';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DynamicDialogModule,
    SidebarModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    MenuModule,
    SlideMenuModule
  ],
  providers: [
    HttpClientModule,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    DialogService,
    MessageService,
    RefreshTokenResolverService
  ],
})
export class CoreModule { }
