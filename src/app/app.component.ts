import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuotationHeaderComponent } from './components/quotation-header/quotation-header.component';
import { MatIconModule } from '@angular/material/icon';
import { SocialsComponent } from './components/socials/socials.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { InsItemComponent } from './components/ins-item/ins-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    MatIconModule,
    NavbarComponent,
    QuotationHeaderComponent,
    SocialsComponent,
    SidebarComponent,
    TopbarComponent,
    InsItemComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
}
