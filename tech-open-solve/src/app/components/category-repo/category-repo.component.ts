import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';

import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-category-repo',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './category-repo.component.html',
  styleUrl: './category-repo.component.scss'
})
export class CategoryRepoComponent implements OnInit, OnChanges {
  @Input() repo!: string;

  repoDisplayName: string = '';
  issues: any[] = [];
  githubAPI = inject(GithubApiService);

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.githubAPI.getIssuesByRepo(this.repo).subscribe((data) => {
      this.issues = data;
    });
    this.repoDisplayName = this.repo.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}
