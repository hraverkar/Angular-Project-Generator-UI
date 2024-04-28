import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { ApiRoutes } from './models/api-routes';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from './models/app-config.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  generateApp(config: AppConfiguration) {
    console.log(JSON.stringify(config));

    const url = environment.baseUrl + ApiRoutes.StackBlitzApp;
    // return this.httpClient.post(url, config, {
    //     responseType: 'blob'
    // });
    return this.httpClient.post(url, config);
  }

  downloadApp(config: AppConfiguration) {
    const url = environment.baseUrl + ApiRoutes.DownloadApp;
    return this.httpClient.post(url, config, {
      responseType: 'blob',
    });
    // return this.httpClient.post(url, config);
  }
}
