import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostResolver } from './resolvers/post-resolver';
import { PostComponent } from './components/post/post.component';
import { PostListResolver } from './resolvers/post-list-resolver';

export const routes: Routes = [
    { 
        path: 'post-list', 
        component: PostListComponent,
        resolve: { postList: PostListResolver }
    },
    { 
        path: 'post-list/:id', 
        component: PostComponent,
        resolve: { post: PostResolver }
    },
    { 
        path: '**', 
        redirectTo: 'post-list' 
    },
];
