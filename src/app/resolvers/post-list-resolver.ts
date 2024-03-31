import { ResolveFn } from "@angular/router";
import { Post } from "../models/post.model";
import { PostService } from "../services/post.service";
import { inject } from "@angular/core";

export const PostListResolver: ResolveFn<Post> = () => {
    return inject(PostService).getPosts();
}
