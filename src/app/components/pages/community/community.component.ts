import { Component, inject, OnInit } from '@angular/core';
import { GithubApiService } from '../../../services/github-api.service';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent implements OnInit {
  repoDisplayName: string = 'Community';
  repoName: string = 'community';
  issues: any[] = [];
  githubAPI = inject(GithubApiService);

  ngOnInit() {
    this.githubAPI.getIssuesByRepo(this.repoName).subscribe((data: any[]) => {
      this.issues = data;
    });
  }
}
