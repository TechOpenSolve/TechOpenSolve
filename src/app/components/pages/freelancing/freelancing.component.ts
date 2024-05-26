import { Component, inject, OnInit } from '@angular/core';
import { GithubApiService } from '../../../services/github-api.service';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-freelancing',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './freelancing.component.html',
  styleUrl: './freelancing.component.scss'
})
export class FreelancingComponent implements OnInit {
  repoDisplayName: string = 'Freelancing';
  repoName: string = 'freelancing';
  issues: any[] = [];
  githubAPI = inject(GithubApiService);

  ngOnInit() {
    this.githubAPI.getIssuesByRepo(this.repoName).subscribe((data: any[]) => {
      this.issues = data;
    });
  }
}
