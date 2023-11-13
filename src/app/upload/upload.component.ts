import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  constructor(
    public dialogRef: MatDialogRef<UploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  @Output() fileSelected = new EventEmitter<File>();

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileSelected.emit(file);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
