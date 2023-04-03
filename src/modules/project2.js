class Project{
    constructor(name){
    this.name = name;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

};

function createProject(name){
    const add_prj = document.getElementById("add_prj");
    const add_project = document.getElementById('add-project');
    const project_name = document.getElementById('project-name');
    add_prj.addEventListener("click",()=>{
           document.getElementById('pop-project').style.display = 'block';
           document.getElementById('add_prj').style.display = 'none';
           add_prj.style.display = 'none';
           if(add_project != null){
            add_project.addEventListener('click',()=>{
                document.getElementById('add_prj').style.display = 'block';
                document.getElementById('pop-project').style.display = 'none';
                console.log("heeloo")
                 const prj_del = document.createElement('button');
                 prj_del.innerText = 'Del';
                 const new_project = new Project(project_name.value);
                 const display_name = document.createElement('p');
                 display_name.innerText = `${new_project.getName()}`;
                 document.querySelector('.project-list').append(display_name);
                 project_name.value = "";


                document.getElementById('cancel-project').addEventListener('click',()=>{
                    document.getElementById('pop-project').style.display = 'none';
                    document.getElementById('add_prj').style.display = 'block';
                    project_name.value = "";
                 })
            })};

            // const mainRight_div = prj_div.cloneNode(true);
})
}

export {createProject};