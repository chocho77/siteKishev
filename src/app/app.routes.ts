import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MakearequestComponent } from './makearequest/makearequest.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SwingsComponent } from './swings/swings.component';
import { Storknestswing125giantwoutnetComponent } from './storknestswing125giantwoutnet/storknestswing125giantwoutnet.component';
import { Storknestswing125giantwithnetComponent } from './storknestswing125giantwithnet/storknestswing125giantwithnet.component';
import { Storknestswing60cowoutnetComponent } from './storknestswing60cowoutnet/storknestswing60cowoutnet.component';
import { Storknestswing60cowithnetComponent } from './storknestswing60cowithnet/storknestswing60cowithnet.component';
import { Storknestswing90cowoutnetComponent} from './storknestswing90cowoutnet/storknestswing90cowoutnet.component';

export const routes: Routes = [
    {'path':'', component:HomeComponent},
    {'path': 'makearequest', component:MakearequestComponent},
    {'path': 'contacts', component:ContactsComponent},
    {'path': 'swings', component:SwingsComponent},
    {'path': 'storknestswing125giantwoutnet', component:Storknestswing125giantwoutnetComponent},
    {'path': 'storknestswing125giantwithnet', component:Storknestswing125giantwithnetComponent},
    {'path': 'storknestswing60cowoutnet', component:Storknestswing60cowoutnetComponent},
    {'path': 'storknestswing60cowithnet', component:Storknestswing60cowithnetComponent},
    {'path': 'storknestswing90cowoutnet', component:Storknestswing90cowoutnetComponent}
];
