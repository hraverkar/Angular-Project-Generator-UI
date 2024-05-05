import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { ApiRoutes } from './models/api-routes';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from './models/app-config.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public constructor(private httpClient: HttpClient) {}

  public generateApp(config: AppConfiguration) {
    const url = environment.baseUrl + ApiRoutes.StackBlitzApp;
    return this.httpClient.post(url, config);
  }

  public downloadApp(config: AppConfiguration): Observable<any> {
    const url = environment.baseUrl + ApiRoutes.DownloadApp;
    return this.httpClient.post<ArrayBuffer>(url, config, {
      responseType: 'blob' as 'json',
    });
  }
}
