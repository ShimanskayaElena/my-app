import { Injectable } from '@angular/core';
import { Http,  Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { News } from '../home/news.model';

@Injectable()
export class NewsService {
    private newsUrl = 'app/news'; // URL to web API
    private headers = new Headers({'Content-Type': 'application/json'});
    private selectedNews: News = {
      id: 0,
      heading: '',
      body: '',
      src: ''
    };

    constructor(private http: Http) {}

    getAllNews(): Observable<News[]> {
        return this.http
            .get(this.newsUrl)
            .map(response => response.json().data)
            .catch(this.handleError);
    }

   /* getAllNews(): Promise<News[]> {
      return this.http.get(this.newsUrl)
        .toPromise()
        .then(response => response.json().data)
        .catch(this.handleError);
    }*/

    getNews(id: number): Observable<News> {
        const url = `${this.newsUrl}/${id}`;
        return this.http
            .get(url)
            .map(response => response.json().data)
            .catch(this.handleError);
    }

    /* getNews(id: number): Promise<News> {
      const url = `${this.newsUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data)
        .catch(this.handleError);
    }*/

    create(heading: string, body: string, src: string): Observable<News> {
        return this.http
            .post( this.newsUrl, JSON.stringify({ heading: heading, body: body, src: src}), {headers: this.headers})
            .map( response => response.json().data)
            .catch(this.handleError);
    }

    /* create(heading: string, body: string, src: string): Promise<News> {
      return this.http
        .post( this.newsUrl, JSON.stringify({ heading: heading, body: body, src: src}), {headers: this.headers})
        .toPromise()
        .then( response => response.json().data)
        .catch(this.handleError);
    }*/


    update(news: News): Observable<News> {
        const url = `${this.newsUrl}/${news.id}`;
        return this.http
            .put( url, JSON.stringify(news), {headers: this.headers})
            .map(() => news )
            .catch(this.handleError);
    }

    /* update(news: News): Promise<News> {
      const url = `${this.newsUrl}/${news.id}`;
      return this.http
        .put( url, JSON.stringify(news), {headers: this.headers})
        .toPromise()
        .then(() => news )
        .catch(this.handleError);
    }*/

    delete(id: number): Observable<void> {
        const url = `${this.newsUrl}/${id}`;
        return this.http
            .delete( url, {headers: this.headers})
            .map( () => null)
            .catch(this.handleError);
    }

    /* delete(id: number): Promise<void> {
      const url = `${this.newsUrl}/${id}`;
      return this.http.delete( url, {headers: this.headers})
      .toPromise()
      .then( () => null)
      .catch(this.handleError);
    }*/

    private handleError (error: Response | any) {

        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    /* private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }*/

  setSelectedNews(news: News) {
      this.selectedNews = news;
  }

  getSelectedNews(): News {
      return this.selectedNews;
  }
}
