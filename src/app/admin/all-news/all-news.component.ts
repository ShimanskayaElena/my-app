import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';

import { News } from '../../home/news.model';

import { PagerService } from '../../core/pager.service';
import { NewsService } from '../../core/news.service';
import { AlertService } from '../../core/alert.service';

@Component({
  moduleId: module.id,
  selector: 'all-news',
  templateUrl: 'all-news.component.html',
  styleUrls: ['all-news.component.css']
})
export class AllNewsComponent implements OnInit {
    allNews: News[]; // массив всех новостей
    lengthNews: number; // длина массива новостей
    pager: any = {}; // объект, отвечающий за реализацию пагинации
    pagedItems: any[]; // массив заголовков новостей, которые будут выводиться на страницу при навигации по массиву номеров страниц
    errorMessage: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private newsService:  NewsService,
        private pagerService: PagerService,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        // получаем массив всех новостей с сервера
        this.newsService.getAllNews().subscribe(
            news => {
                this.allNews = news.reverse();
                this.setPage(1); // инициализация вывода на страницу массива из 10 последних заголовков новостей
            },
            error =>  this.errorMessage = <any>error);
    }

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

    editNews(news: News): void {
        this.router.navigate(['/admin/news', news.id], { relativeTo: this.route });
    }

    deleteNews(news: News): void {

        const removalNews = window.confirm('Are you sure you want to remove the news?');

        if ( removalNews ) {

            this.newsService.delete(news.id)
                .subscribe(
                    () => {
                        this.allNews = this.allNews.filter(n => n !== news);
                        this.pagedItems = this.pagedItems.filter(n => n !== news);
                        const currentPage: number = this.pager.currentPage;
                        this.setPage(currentPage);

                        this.alertService.success('Data was successfully deleted from the database!', true);
                    },
                    error =>  this.errorMessage = <any>error
                );
        }
    }

    addNews(): void {
        this.router.navigate(['/admin/news', '0'], { relativeTo: this.route });
    }
}
