import { Injectable } from '@angular/core';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects : Project[] =[
    {id:0,projectName: 'Sample Project 1',projectDesc: 'Sample Description 1',projectSummary: 'Sample project summary',projectLink: 'https://github.com/',pictures: ["../../assets/sample2.jpg","../../assets/sample2.jpg","../../assets/sample2.jpg"], tags: [Tag.JAVA,Tag.SPRING]},
    {id:1,projectName: 'Sample Project 2',projectDesc: 'Sample Description 2',projectSummary: 'Sample project summary',projectLink: 'https://github.com/',pictures: ["../../assets/sample2.jpg","../../assets/sample2.jpg","../../assets/sample2.jpg"], tags: [Tag.SQL,Tag.SPRING]},
    {id:2,projectName: 'Sample Project 3',projectDesc: 'Sample Description 3',projectSummary: 'Sample project summary',projectLink: 'https://github.com/',pictures: ["../../assets/sample2.jpg","../../assets/sample2.jpg","../../assets/sample2.jpg"], tags: [Tag.ANGULAR,Tag.SPRING_JPA,Tag.TYPESCRIPT]},
    {id:3,projectName: 'Sample Project 4',projectDesc: 'Sample Description 4',projectSummary: 'Sample project summary',projectLink: 'https://github.com/',pictures: ["../../assets/sample2.jpg","../../assets/sample2.jpg","../../assets/sample2.jpg"], tags: [Tag.JAVA,Tag.ANGULAR,Tag.SPRING]}
  ]
  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProjectById(id: number) : Project{
      let project = this.projects.find(project => project.id === id);

      if(project === undefined){
        throw new TypeError('No such ID');
      }

      return project;
  }

  GetProjectByFilter(filterTags: Tag[]){
    let filteredProjects: Project[]= [];

    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });
      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
