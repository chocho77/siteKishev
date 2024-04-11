import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MakearequestComponent } from './makearequest/makearequest.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SwingsComponent } from './swings/swings.component';

export const routes: Routes = [
    {'path':'', component:HomeComponent},
    {'path': 'makearequest', component:MakearequestComponent},
    {'path': 'contacts', component:ContactsComponent},
    {'path': 'swings', component:SwingsComponent},
];
