import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AttackDetails } from './attack-details.model';

@Component({
  selector: 'app-attack-details',
  templateUrl: './attack-details.component.html',
  styleUrls: ['./attack-details.component.scss']
})
export class AttackDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AttackDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AttackDetails
  ) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
