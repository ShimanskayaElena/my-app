import { Injectable } from '@angular/core';

import * as _ from 'underscore';

@Injectable()
export class PagerService {

    // Pagination Example with logic like Google
    // currentPage: number = 1
    getPager(totalItems: number, currentPage: number, pageSize: number = 10) {
        // Рассчитать общее количество страниц
        const totalPages = Math.ceil(totalItems / pageSize);

        // определяем номер первой и последней страницы в зависимости от общего количества страниц
        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            // если общее количество страниц меньше 10
            startPage = 1;
            endPage = totalPages;
        } else {
            // в случае, если всего страниц оказалось больше 10
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // вычислить начальный и конечный индексы элементов в списке
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // создать массив номеров страниц для их отображения на странице
        const pages = _.range(startPage, endPage + 1);

        // возвращаемый объект содержить все свойства  PagerService, необходимые для настройки и работы
        return {
            totalItems: totalItems, // общее количество новостей в списке
            currentPage: currentPage, // номер текущей отображаемой страницы
            pageSize: pageSize, // количество выводимых элементов на странице
            totalPages: totalPages, // общее количество страниц
            startPage: startPage, // начальная страница
            endPage: endPage, // конечная страница
            startIndex: startIndex, // номер элемента в общем списке, который будет отображаться первым на странице
            endIndex: endIndex, // номер элемента в общем списке, который будет отображаться последним на странице
            pages: pages // массив номеров страниц
        };
    }
}
