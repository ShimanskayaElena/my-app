import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { NewsService } from '../core/news.service';

import { News} from '../home/news.model';

@Component({
  moduleId: module.id,
  selector: 'new-news',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {

  news: News; // новость, выбранная пользователем для просмотра
  errorMessage: string;

  constructor(
      private newsService: NewsService,
      private router: Router,
      private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

      this.route.params
          .switchMap((params: Params) => this.newsService.getNews(+params['id']))
          .subscribe(
              news => { this.news = news; },
              error => { this.errorMessage = <any>error; }
          );
  }

  back(): void {
      this.router.navigate(['/home']);
  }
}
