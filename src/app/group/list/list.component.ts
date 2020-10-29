import { Component, OnInit } from '@angular/core';
import {IGroup} from '../i-group';
import {GroupService} from '../../services/group.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listGroup: IGroup[] = [];

  constructor(private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.getListGroup();
  }

  getListGroup() {
    this.groupService.getAllGroup().subscribe(response => {
      this.listGroup = response.data;
    });
  }

  deleteGroup(index){
    const group = this.listGroup[index];
    if (confirm('Are you sure')){
      this.groupService.deleteGroup(group.id).subscribe(() => {
        this.getListGroup();
      });
    }
  }
}
