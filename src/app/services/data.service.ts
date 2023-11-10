import { Injectable } from '@angular/core';
import { GeneralNews } from '../info/news';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    constructor(private sharedService: SharedService) {
    }

    getGeneralNewsData(): any[] {
        this.sharedService.logger(true, 'data has been fetched');
        return GeneralNews;
    }
}
