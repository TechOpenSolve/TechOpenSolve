import { Component, inject, OnInit } from '@angular/core';
import { GithubApiService } from '../../../services/github-api.service';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-career-growth',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './career-growth.component.html',
  styleUrl: './career-growth.component.scss'
})
export class CareerGrowthComponent implements OnInit {
  repoDisplayName: string = 'Career Growth';
  repoName: string = 'career-growth';
  issues: any[] = [];
  githubAPI = inject(GithubApiService);

  ngOnInit() {
    this.githubAPI.getIssuesByRepo(this.repoName).subscribe((data: any[]) => {
      this.issues = data;
    });
  }
}
