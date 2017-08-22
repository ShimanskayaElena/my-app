import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm} from '@angular/forms';

import 'rxjs/add/operator/switchMap';

import { News } from '../../home/news.model';
import { NewsService } from '../../core/news.service';
import { AlertService } from '../../core/alert.service';

@Component({
  moduleId: module.id,
  selector: 'news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css']
})
export class NewsComponent implements OnInit {
    news: News;
    errorMessage: string;

    // newsImage обеспечивает доступ к элементу inpur with type="file"
    @ViewChild('newsImage')
    newsImage: ElementRef;

    constructor(
        private newsService: NewsService,
        private alertService: AlertService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    )  {}

    ngOnInit(): void {
        // извлекаем id товости, которую выбрали для редактирования
        const id = this.route.snapshot.params.id;

        if (id !== '0') {
            this.route.params
            .switchMap((params: Params) => this.newsService.getNews(+params['id']))
            .subscribe(
                news => { this.news = news; },
                error => { this.errorMessage = <any>error; });
        } else {
            this.news = new News(0, '', '', '');
        }
    }

    // получить имя выбраного файла с изображением
    getImageName (): string {
        // получаем массив файлов, загруженных с помощью input with type="file"
        const fileList = this.newsImage.nativeElement.files;

        // если изображение было загружено
        if ( fileList.length ) {
            const imgSize = fileList[0].size;
            if (imgSize <= 100000) {
                // извлекаем название файла с загруженным изображением
                this.news.src = fileList[0].name;
            } else {
                window.alert('The size of the uploaded file is more than the allowed value. Please upload another photo.');
            }
        } else {
            // если админ решит не загружать изображение
            this.news.src = '';
        }
        return this.news.src;
    }

     deleteImage(): void {
         this.news.src = '';
    }

    // сохранить отредактированные данные
    save( form: NgForm) {
        if (this.news.id !== 0 ) {
            this.newsService.update(this.news).subscribe(
                news => { this.news = news; },
                error => { this.errorMessage = <any>error; }
            );
            this.alertService.success('Data edited successfully', true);
        } else {
            this.newsService.create(this.news.heading, this.news.body, this.news.src).subscribe(
                news => { this.news = news; },
                error => { this.errorMessage = <any>error; }
            );
            this.alertService.success('Data was successfully saved in the database', true);
        }
        // вернуться к списку новостей
        this.router.navigate(['../admin/']);
    }

    // вернуться назад к списку новостей без редактирования новости
    goBack(): void {
        this.location.back();
    }
}
