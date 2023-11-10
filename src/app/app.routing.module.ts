import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./first-component/first-component.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NewsComponent } from "./common-components/news/news.component";
import { InfoFormComponent } from "./common-components/info-form/info-form.component";
import { NewsDetailsComponent } from "./common-components/news-details/news-details.component";


const routes: Routes = [
    {
        path: 'first',
        component: FirstComponentComponent,
        children: [
            { path: 'news', component: NewsComponent },
            { path: 'info', component: InfoFormComponent },
            { path: 'details', component: NewsDetailsComponent },
            { path: '', redirectTo: 'info', pathMatch: 'full' },
        ]
    },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/first', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }