import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesUrl: string = 'http://localhost:3100/api/courses';

  constructor(private httpClient: HttpClient) {}

  retriveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesUrl);
  }

  retriveById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if(course.id){
      return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
    } else{
      return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
    }
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
  }

}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular: CLI',
    imageUrl: '/assets/images/cli.png',
    price: 12.99,
    code: 'XLF-1212',
    duration: 120,
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
  },
  {
    id: 2,
    name: 'Angular: Forms',
    imageUrl: '/assets/images/forms.png',
    price: 24.99,
    code: 'DWQ-3412',
    duration: 80,
    rating: 3.5,
    releaseDate: 'November 4, 2019',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
  },
  {
    id: 3,
    name: 'Angular: HTTP',
    imageUrl: '/assets/images/http.png',
    price: 36.99,
    code: 'QPL-0913',
    duration: 80,
    rating: 4.0,
    releaseDate: 'November 8, 2019',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
  },
  {
    id: 4,
    name: 'Angular: Router',
    imageUrl: '/assets/images/router.png',
    price: 46.99,
    code: 'OHP-1095',
    duration: 80,
    rating: 4.5,
    releaseDate: 'November 16, 2019',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
  },
  {
    id: 5,
    name: 'Angular: Animations',
    imageUrl: '/assets/images/animations.png',
    price: 56.99,
    code: 'PWY-9381',
    duration: 80,
    rating: 5,
    releaseDate: 'November 25, 2019',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
  }
];
