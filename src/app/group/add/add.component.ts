import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupService} from '../../services/group.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  constructor(private fb: FormBuilder,
              private groupService: GroupService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
  addSubmit(){
    const group = this.addForm.value;
    this.groupService.addGroup(group).subscribe(data => {
      this.router.navigate(['groups']);
    });
  }
  list(){
    this.router.navigate(['groups']);
  }

  get name(){
    return this.addForm.get('name');
  }
}
