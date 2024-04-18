import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MakearequestComponent } from './makearequest/makearequest.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SwingsComponent } from './swings/swings.component';
import { Storknestswing125giantwoutnetComponent } from './storknestswing125giantwoutnet/storknestswing125giantwoutnet.component';

export const routes: Routes = [
    {'path':'', component:HomeComponent},
    {'path': 'makearequest', component:MakearequestComponent},
    {'path': 'contacts', component:ContactsComponent},
    {'path': 'swings', component:SwingsComponent},
    {'path': 'storknestswing125giantwoutnet', component:Storknestswing125giantwoutnetComponent}
];
