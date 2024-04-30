import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  http = inject(HttpClient);

  constructor() { }

  getRepos(): Observable<any[]> {
    return this.http.get<any[]>('https://api.github.com/orgs/TechOpenSolve/repos');
  }

  getIssuesByRepo(repo: string): Observable<any[]> {
    return this.http.get<any[]>(`https://api.github.com/repos/TechOpenSolve/${repo}/issues`);
  }
}
