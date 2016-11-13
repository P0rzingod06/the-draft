import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { routing, appRoutingProviders }  from './app.routing';
import { HttpModule }    from '@angular/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DraftComponent } from './draft/draft.component';
import { ManagerListComponent } from './managers/managerList.component';
import { ManagerCreateComponent } from './managers/managerCreate.component';
import { DataGridModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ManagerService } from './managers/manager.service';

@NgModule({
	imports: [BrowserModule, routing, DataGridModule, HttpModule, PanelModule, FormsModule],
	declarations: [AppComponent, DashboardComponent, DraftComponent, ManagerListComponent, ManagerCreateComponent],
	providers: [appRoutingProviders, ManagerService],
	bootstrap: [AppComponent]
})

export class AppModule { }
