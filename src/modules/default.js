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

            prj_div.append(project);
            prj_div.append(prj_del);
            document.getElementById('project').append(prj_div);

            project.addEventListener('click',()=>{
            createTask(); 
            })

            prj_del.addEventListener('click',()=>{
                prj_div.remove(document.getElementById('project'));
                getElementById('obj1div').remove();
            })
        })
    }
export {createProject};