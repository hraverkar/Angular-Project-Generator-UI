import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { ApiRoutes } from './models/api-routes';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from './models/app-config.model';
import { Observable } from 'rxjs';
import { GenRestClientService } from './services/gen-rest-client.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private httpClient: HttpClient,
    private genRestClient: GenRestClientService
  ) {}

  generateApp(config: AppConfiguration) {
    console.log(JSON.stringify(config));
    const url = environment.baseUrl + ApiRoutes.StackBlitzApp;
    return this.httpClient.post(url, config);
  }

  public downloadApp(config: AppConfiguration) {
    console.log(JSON.stringify(config));
    const url = environment.baseUrl + ApiRoutes.DownloadApp;
    return this.httpClient.post(url, config);
  }

  public downloadFile(fileName: string): Observable<Blob> {
    return this.httpClient.get<Blob>(
      environment.baseUrl + `/blob-donwload-app/${fileName}`,
      { responseType: 'blob' as 'json' }
    );
  }
}
