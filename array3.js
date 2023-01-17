const employees = [
    {name:"Sahil",salary:5000,bonus:500,tax:1000},
    {name:"Rounabh",salary:8000,bonus:1500,tax:1000},
    {name:"Suraj",salary:2000,bonus:5000,tax:2000},
    {name:"umang",salary:5000,bonus:500,tax:2000}
]

const new_emp =(obj)=>{
    newObj ={};
    newObj.name=obj.name;
    newObj.newtEarning=obj.salary + obj.bonus-obj.tax;
    return newObj;
}

let newarr=employees.map(new_emp);
console.log(newarr);

//employee.forEach((x)=>newarr.push({name:x.name,netEarning:(x.salary+x.bonus-x.tax)}))
