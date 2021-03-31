import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ImageService {
    PAGE = '1';

    constructor(private http: HttpClient) { }

    getImages() {
        const baseURL = 'https://picsum.photos/v2/list';
        const params = new HttpParams()
            .set('page', this.PAGE);
        const url = `${baseURL}?${params.toString()}`;
        return this.http.get(url);
    }
}