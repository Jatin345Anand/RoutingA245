import {Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
export const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}

];