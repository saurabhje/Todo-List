
class Task{
    constructor(name,duedate,description,priority){
        this.name = name;
        this.duedate = duedate;
        this.description = description;
        this.priority = priority;
    }

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

    setDescription(description){
        this.description = description;
    }
    getDescription(){
        return this.description;
    }
}
    function createTask() {
        const test = document.getElementById("add_btn");
        if (test == null){
            const main_div = document.getElementById('main')
            const add_btn = document.createElement('button');
            add_btn.setAttribute('id', 'add_btn');
            add_btn.innerText = 'Add+';
            main_div.append(add_btn);
            add_btn.style.display = "none";
            
            add_btn.addEventListener('click', () => {
            const name = prompt('Enter The name');
            const duedate = prompt('Enter The duedate');
            duedate.setAttribute('class','date');
            const description = prompt('Enter The description');
            const priority = prompt('Enter The priority');
            const obj1 = new Task(name, duedate, description, priority);
            const obj1div = document.createElement('div');
            obj1div.setAttribute('class','task')
            
            const objname = document.createElement('h2');
            objname.innerText = obj1.name;
            obj1div.append(objname);
        
            const objduedate = document.createElement('p');
            objduedate.innerText = obj1.duedate;
            obj1div.append(objduedate);
        
            const objdescription = document.createElement('p');
            objdescription.innerText = obj1.description;
            obj1div.append(objdescription);
        
            const objpriority = document.createElement('p');
            objpriority.innerText = obj1.priority;
            obj1div.append(objpriority);
        
        
            const del_btn = document.createElement('button');
            del_btn.setAttribute('id','del_btn');
            del_btn.innerText = 'Delete';
            obj1div.append(del_btn);
            document.getElementById('active').append(obj1div);
        
            del_btn.addEventListener('click',()=>{
                obj1div.remove();
            })
            }) 
        } 
    }

export {createTask};