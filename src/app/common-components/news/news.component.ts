import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  @Output() chosenNews: any = new EventEmitter;
  receivedNews: any[] = [];

  myColor = '#0000ff';
  myText = 'directive';
  myMoney = 2503212514;
  nubmerToPow = 3;

  constructor(
    public myService: SharedService,
    public dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.subscriptionFunc();
  }

  makeItpurple() {
    this.myColor = 'purple';
  }

  subscriptionFunc(): void {
    this.myService.newToUpdate.subscribe((value: string) => {
      console.log('value', value);
      if (value === '1') {
        this.receivedNews = [];
        setTimeout(() => {
          if (value) {
            this.fetchNew();
          }
        }, 1000);
      } else {
        this.receivedNews = [];
      }

    });

  }

  


  fetchNew(): void {
    this.receivedNews = this.dataService.getGeneralNewsData();
  }

  newsClicked(news: any) {
    // this.myService.startingText = 'edited from news';
    // this.myService.logger(true);
    // this.chosenNews.emit(news);
    this.router
  }

  navigateTo(newsId: number) {
    this.router.navigate(['../details'], { relativeTo: this.route, queryParams: {id: newsId} })
  }

}
