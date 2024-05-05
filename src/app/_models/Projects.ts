import { Tag } from "./Tag";



export interface Project{
  id : number;
  projectName : string;
  projectDesc: string;
  projectSummary:string;
  projectLink:string;
  pictures : string[];
  tags: Tag[];
}

