import { Component, inject, OnInit } from '@angular/core';
import { GithubApiService } from '../../../services/github-api.service';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-work-env',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './work-env.component.html',
  styleUrl: './work-env.component.scss'
})
export class WorkEnvComponent implements OnInit {
  repoDisplayName: string = 'Work Environment';
  repoName: string = 'work-environment';
  issues: any[] = [];
  githubAPI = inject(GithubApiService);

  ngOnInit() {
    this.githubAPI.getIssuesByRepo(this.repoName).subscribe((data: any[]) => {
      this.issues = data;
    });
  }
}
