import { createTask } from "./task";

function getWeek(date){
    date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (date - yearStart) / 86400000) + 1)/7);
    return weekNo;
}

function getTaskbyWeeek(){
    const classList = document.getElementsByClassName("date");
    Array.from(classList).forEach(Element =>{
        const date = new Date(Element.innerHTML);
        const week = new Date();
        if(date.getFullYear() == week.getFullYear()){
            if(getWeek(date)==getWeek(week)){
                const parent = Element.parentNode;
            }
        }
    })
}

export {getTaskbyWeeek};