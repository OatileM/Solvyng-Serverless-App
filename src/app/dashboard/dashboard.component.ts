import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(UploadComponent, {
      width: '250px',
      height: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log('Selected File:', result);
    });
  }
}
