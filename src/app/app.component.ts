import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderService } from './services/loader.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatToolbarModule, RouterModule, MatProgressBarModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showLoader$: Observable<boolean>;
  title = 'Posts Resolver Application';

  constructor(private loaderService: LoaderService) {
    this.showLoader$ = this.loaderService.isLoading();  
  }  
}
