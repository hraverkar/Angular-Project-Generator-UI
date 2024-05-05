import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NodeConfiguration } from '../../models/node-config.model';
import { NodeType } from '../../models/node-type.model';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrl: './new-dialog.component.scss',
})
export class NewDialogComponent implements OnInit {
  selected = NodeType.moduleWithRoute;
  selectedNode: NodeConfiguration = new NodeConfiguration();

  constructor(
    public dialogRef: MatDialogRef<NewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public ngOnInit() {
    // console.log(this.modalData);
    if (this.modalData.action === 'update') {
      this.selectedNode = this.modalData.data;
      this.selected = this.modalData.data.type;
    }
  }

  onChange() {
    this.modalData.type = this.selected;
    this.selectedNode.type = this.selected;
    console.log(this.modalData);

    if (this.selected !== NodeType.moduleWithRoute) {
      this.modalData.route = '';
    }
  }
}
