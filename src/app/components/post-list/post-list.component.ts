import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Post } from '../../models/post.model';
import { SlicePipe } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [ SlicePipe, RouterModule, MatCardModule, MatButtonModule ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  postList?: Post[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.pipe(take(1)).subscribe(({postList}) => {
      this.postList = postList;
    })
  }
}
