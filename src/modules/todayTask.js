import { createTask } from "./task";

function getTodaytasks(){
const classList = document.getElementsByClassName('date');
Array.from(classList).forEach(element=>{
    const date = new Date(element.innerHTML);
    const today = new Date();
    if(date.getFullYear == today.getFullYear){
        if(date.getMonth== today.getMonth){
            if(date.getDate == today.getDate){
                const parent = element.parentNode;
                createTask();
            }
        }
    }

})
}
export {getTodaytasks};