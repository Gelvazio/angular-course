import { Component, OnInit } from '@angular/core';
import {Course} from './course';
import {CourseService} from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  courses: Course[] = [];

  filterBy: string;

  constructor(private courseService: CourseService) {}


  ngOnInit(): void {
    this.retriveAll();
  }

  retriveAll(): void {
    this.courseService.retriveAll().subscribe({
      next: courses => {
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error: err => console.log('Error', err)
    });
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retriveAll();
      },
      error: err => console.log('Error', err)
    });
  }

  set filter(value: string) {
    this.filterBy = value;
    // tslint:disable-next-line:max-line-length
    this.filteredCourses = this.courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1);
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this.filterBy;
  }
}
