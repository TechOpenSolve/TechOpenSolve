import { Component, inject, OnInit } from '@angular/core';
import { GithubApiService } from '../../../services/github-api.service';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-employment',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './employment.component.html',
  styleUrl: './employment.component.scss'
})
export class EmploymentComponent implements OnInit {
  repoDisplayName: string = 'Employment';
  repoName: string = 'employment';
  issues: any[] = [];
  githubAPI = inject(GithubApiService);

  ngOnInit() {
    this.githubAPI.getIssuesByRepo(this.repoName).subscribe((data: any[]) => {
      this.issues = data;
    });
  }
}
