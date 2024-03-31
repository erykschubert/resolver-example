import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Post } from "../models/post.model";
import { PostService } from "../services/post.service";
import { inject } from "@angular/core";

export const PostResolver: ResolveFn<Post> = (
    route: ActivatedRouteSnapshot,
) => {
    return inject(PostService).getPost(route.paramMap.get('id')!);
}
