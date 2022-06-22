import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  public value: any = '';
  pageNumber: number = 1;
  constructor(private _posts: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(): void{
    this._posts.getPosts().subscribe(
      (res: any) => {
        this.posts = res;
        console.log(this.posts);
        
      }, (err: any) => {
        console.log(err);
        
    }
  )
}
}
