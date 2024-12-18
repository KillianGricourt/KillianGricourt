import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Experience} from '../experience/experience.model';


@Injectable({
  providedIn: 'root', // Fournit le service au niveau global
})
export class ExperienceService {
  private apiUrl = 'https://killiangricourt-github-io.onrender.com/experiences'; // URL de l'API

  constructor(private http: HttpClient) {}

  // Récupérer toutes les expériences
  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl).pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }

  // Gérer les erreurs API
  private handleError(error: any): Observable<never> {
    console.error('Une erreur s\'est produite :', error);
    return throwError(() => new Error('Impossible de récupérer les données.'));
  }
}