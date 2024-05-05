import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';
import { ProjectService } from '../_services/projects.service';
import { Init } from 'v8';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projects ={} as Project[];

  isCollapsed : boolean = true;
  ts : boolean = false;
  java : boolean = false;
  spring : boolean = false;
  filterActivated : boolean = false;
  constructor(private titleService:Title, private projectService : ProjectService) {
    this.titleService.setTitle("Portfolio");

  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    //throw new Error('Method not implemented.');
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.ts){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.spring){
      filterTags.push(Tag.SPRING);
    }

    if(this.ts || this.java || this.spring){
      this.filterActivated = true;
    }else{
      this.filterActivated=false;
    }
    this.projects = this.projectService.GetProjectByFilter(filterTags);

  }
  ResetFilter(){
    this.ts = false;
    this.java = false;
    this.spring = false;
    this.filterActivated=false;

    this.projects = this.projectService.getProjects();
  }

}
