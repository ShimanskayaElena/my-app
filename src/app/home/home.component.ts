import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'underscore';

import { News } from './news.model';

import { NewsService } from '../core/news.service';
import { PagerService } from '../core/pager.service';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    allNews: News[]; // массив всех новостей
    lengthNews: number; // длина массива новостей
    selectedNews: News; // новость, которую выбрали для чтения
    pager: any = {}; // объект, отвечающий за реализацию пагинации
    pagedItems: any[]; // массив заголовков новостей, которые будут выводиться на страницу при навигации по массиву номеров страниц
    errorMessage: string;
    color = '#eac1e4'; // цвет для выделения заголовка блока

    constructor(
        private router: Router,
        private newsService:  NewsService,
        private pagerService: PagerService
    ) {}

    ngOnInit(): void {
        // получаем массив всех новостей с сервера
        this.newsService.getAllNews().subscribe(
            news => {
                this.allNews = news.reverse();
                this.setPage(1); // инициализация вывода на страницу массива из 10 последних заголовков новостей
            },
            error =>  this.errorMessage = <any>error);

        this.selectedNews = this.newsService.getSelectedNews();
    }

    /* ngOnInit(): void {
      // получаем массив всех новостей с сервера
      this.newsService
      .getAllNews()
      .then(news => {
        this.allNews = news.reverse();
        this.setPage(1); // инициализация вывода на страницу массива из 10 последних заголовков новостей
      });
      this.selectedNews = this.newsService.getSelectedNews();
    }*/

    // инициализация списка новостей на странице
    setPage(page: number): void {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // настраиваем объект, отвечающий за реализацию пагинации с помощью сервиса PagerService
        const length = this.allNews.length;

        this.pager = this.pagerService.getPager( length, page);
        // получаем массив заголовков новостей, который будет на странице при её инициализации
        this.pagedItems = this.allNews.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    onSelect(news: News): void  {
        this.selectedNews = news;
        this.newsService.setSelectedNews(news);
        this.router.navigate(['/about', news.id]);
    }
}
