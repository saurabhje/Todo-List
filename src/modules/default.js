import { createTask } from "./task";

function createProject(){
    const prj_btn = document.getElementById('add_prj');

    prj_btn.addEventListener('click',()=>{
            const prj_div = document.createElement('div');
            const prj_name = prompt('Project name');
            const project = document.createElement('button');
            const prj_del = document.createElement('button');
            prj_del.innerText = 'Del';
            project.innerText = `${prj_name}`;
            
            const mainRight_div = prj_div.cloneNode(true);
            

            document.getElementById('main').append(mainRight_div);
            prj_div.append(project);
            prj_div.append(prj_del);
            document.getElementById('project').append(prj_div);

            project.addEventListener('click',()=>{
            const deactive =  document.getElementById('active');
            mainRight_div.style.display = "block";
            if(deactive != null){
                deactive.setAttribute("id","");
                deactive.style.display = "none";
           }
            mainRight_div.setAttribute('id','active');
            createTask(); 
            document.getElementById('add_btn').style.display = "block";
            })

            prj_del.addEventListener('click',()=>{
                prj_div.remove();
                mainRight_div.remove();
                document.getElementById('add_btn').style.display = "none";
            })
        })
    }
export {createProject};