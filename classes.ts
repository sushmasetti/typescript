
    import Op from './interface';
    export default class Person 
    {
    name:string;
    age:number;
    gender:string;
    constructor(name:string,age:number,gender:string)
    {
    this.name=name;
    this.age=age;
    this.gender=gender;
    }
    public checkOverride():void{
    console.log("parent");
    }
    }
    export class Employee extends Person implements Op
    {
    id:number;
    designation:string;
    salary:number;
    constructor(name:string,age:number,gender:string,id:number,job:string,sal:number)
    {
    super(name,age,gender);
    this.id=id;
    this.designation=job;
    this.salary=sal;
    
    }
    showDetails():void
    {
    console.log("Employee Details");
    console.log("Name="+this.name);
    console.log("Age="+this.age);
    console.log("Gender="+this.gender);
    console.log("EmpId="+this.id);
    console.log("Designation="+this.designation);
    console.log("Salary="+this.salary);
    
    }
    public checkOverride():void
    {
    console.log("child");
    }
    }
    var obj=new Employee("Ramya",21,"Female",491767,"TA",493084);
    obj.showDetails();
    obj.checkOverride();