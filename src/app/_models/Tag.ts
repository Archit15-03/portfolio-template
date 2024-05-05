export class Tag{

  static readonly JAVA = new Tag('Java','Green');
  static readonly SPRING = new Tag('Spring Boot','Blue');
  static readonly SQL = new Tag('Pl Sql','Red');
  static readonly ANGULAR = new Tag('Angular','Brown');
  static readonly SPRING_JPA = new Tag('Spring JPA','darkcyan');
  static readonly TYPESCRIPT = new Tag('TypeScript','Yellow');
  constructor(public readonly key:string,public readonly color:string){

  }

  toString(){
    return this.key;
  }
}
