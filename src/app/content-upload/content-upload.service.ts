import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class ContentUploadService {
  handleError(arg0: any): any {
    return false;
  }
  constructor(private http: Http) { }

  ngOnInit() {
  }
  postFile(fileToUpload: File): Observable<any> {
    let headers = new Headers({
      'Content-Type':
      'application/json; charset=utf-8'
    });
    let options = new RequestOptions({ headers: headers });
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData, options).map(() => { return true; }).catch((e) => this.handleError(e));
}


}
