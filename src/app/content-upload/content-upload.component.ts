import { Component, OnInit } from '@angular/core';
import { ContentUploadService } from './content-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './content-upload.component.html',
  styleUrls: ['./content-upload.component.css']
})
export class ContentUploadComponent implements OnInit {
  fileToUpload: File = null;
  constructor(private contentUploadService: ContentUploadService ) {}

  ngOnInit() {
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  } 
  uploadFileToActivity() {
    this.contentUploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }
}
