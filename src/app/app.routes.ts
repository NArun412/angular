import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: "Home",
        component: AppComponent
    },
    {
        path : 'DataBinding',
        component : DatabindingComponent
    },
];
