import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing, appRoutingProviders }  from './app.routing';
import { HttpModule }    from '@angular/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DraftComponent } from './draft/draft.component';
import { ManagerListComponent } from './managers/managerList.component'
import { DataGridModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ManagerService } from './managers/manager.service';

@NgModule({
	imports: [BrowserModule, routing, DataGridModule, HttpModule, PanelModule],
	declarations: [AppComponent, DashboardComponent, DraftComponent, ManagerListComponent],
	providers: [appRoutingProviders, ManagerService],
	bootstrap: [AppComponent]
})

export class AppModule { }
