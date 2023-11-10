import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header-component/header.component';
import { NewsComponent } from './news/news.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedService } from '../services/shared.service';
import { InfoFormComponent } from './info-form/info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { PowerPipe } from '../pipes/power.pipe';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NewsComponent,
        InfoFormComponent,
        NewsDetailsComponent,
        HighlightDirective,
        PowerPipe
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, MatSlideToggleModule ],
    providers: [SharedService],
    exports: [
        HeaderComponent,
        FooterComponent,
        NewsComponent,
        InfoFormComponent,
        NewsDetailsComponent,
        HighlightDirective,
        PowerPipe
    ]
})

export class CommonComponentsModule {

}