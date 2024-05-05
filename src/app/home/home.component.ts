import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../_services/projects.service';
import { Project } from '../_models/Projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  featuredProject = {} as Project;

  constructor(private titleService:Title,private projectService:ProjectService) {
    this.titleService.setTitle("Home");
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(2);
    //throw new Error('Method not implemented.');
  }
  discription = "Please find my discription here";
}
