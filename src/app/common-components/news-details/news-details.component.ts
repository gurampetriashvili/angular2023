import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  receivedNews: any[] = [];
  myId: any = 0;
  displayNews: any;

  anyId = 1;

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
  ) {

  }

  ngOnInit(): void {
    this.receivedNews = this.dataService.getGeneralNewsData();
    this.route.queryParamMap.subscribe( (params) => {
      console.log('params', params);
      this.myId = params.get('id');
      console.log('-------------', params.get('id'))
      console.log('this.myId', this.myId);
      console.log('receivedNews', this.receivedNews);
      console.log(this.receivedNews.find((item) => item.id === this.myId));
      let tempArray = this.receivedNews.filter((myNew) => {
        console.log('id----------', this.myId);
        return myNew.id === this.myId
      });

      console.log('filtered', this.receivedNews.filter(x => x.id === Number(this.myId)));
      console.log('temp', tempArray);
      this.displayNews = this.receivedNews.find((myNews) => {
        return myNews.id === Number(this.myId)
      }
        );
      console.log('this.displayNews', this.displayNews);
    })
  }

}
