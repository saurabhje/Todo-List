/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/project2.js":
/*!*********************************!*\
  !*** ./src/modules/project2.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
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



/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
class Task {
	constructor(name, duedate, description, priority) {
		this.name = name;
		this.duedate = duedate;
		this.description = description;
		this.priority = priority;
	}

	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}

	setDescription(description) {
		this.description = description;
	}
	getDescription() {
		return this.description;
	}
}

function createTask(name, duedate, description, priority) {
	const obj1 = new Task(name, duedate, description, priority);

	const obj1div = document.createElement('div');
	obj1div.setAttribute('class', 'task')

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
	del_btn.setAttribute('id', 'del_btn');
	del_btn.innerText = 'Delete';
	obj1div.append(del_btn);

	document.getElementById('active').append(obj1div);

	del_btn.addEventListener('click', () => {
		obj1div.remove();
	});
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_project2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project2 */ "./src/modules/project2.js");



(0,_modules_project2__WEBPACK_IMPORTED_MODULE_1__.createProject)();
// const add_prj = document.getElementById("add_prj");
//     add_prj.addEventListener("click",()=>{
//            document.getElementById('pop-project').style.display = 'block';
//             const prj_div = document.createElement('div');
//             const project_name = document.getElementById('project-name');
//             const add_project = document.getElementById('add-project')
//             add_project.addEventListener('click',()=>{

//             })
//             const project = document.createElement('button');
//             const prj_del = document.createElement('button');
//             prj_del.innerText = 'Del';
//             project_name.innerText = `${project_name.value}`;

//             const mainRight_div = prj_div.cloneNode(true);
// })
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzQkFBc0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNPO0FBQ25EO0FBQ0EsZ0VBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQkFBbUI7QUFDOUQ7QUFDQTtBQUNBLElBQUksQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3R7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBzZXROYW1lKG5hbWUpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBnZXROYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpe1xyXG4gICAgY29uc3QgYWRkX3ByaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3ByalwiKTtcclxuICAgIGNvbnN0IGFkZF9wcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0Jyk7XHJcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XHJcbiAgICBhZGRfcHJqLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC1wcm9qZWN0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9wcmonKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgIGFkZF9wcmouc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICBpZihhZGRfcHJvamVjdCAhPSBudWxsKXtcclxuICAgICAgICAgICAgYWRkX3Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX3ByaicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC1wcm9qZWN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVlbG9vXCIpXHJcbiAgICAgICAgICAgICAgICAgY29uc3QgcHJqX2RlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgIHByal9kZWwuaW5uZXJUZXh0ID0gJ0RlbCc7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgbmV3X3Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0X25hbWUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWUuaW5uZXJUZXh0ID0gYCR7bmV3X3Byb2plY3QuZ2V0TmFtZSgpfWA7XHJcbiAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpLmFwcGVuZChkaXNwbGF5X25hbWUpO1xyXG4gICAgICAgICAgICAgICAgIHByb2plY3RfbmFtZS52YWx1ZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtcHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9wcmonKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0X25hbWUudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pfTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IG1haW5SaWdodF9kaXYgPSBwcmpfZGl2LmNsb25lTm9kZSh0cnVlKTtcclxufSlcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0fTsiLCJjbGFzcyBUYXNrIHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHRnZXROYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcblx0fVxyXG5cdGdldERlc2NyaXB0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xyXG5cdGNvbnN0IG9iajEgPSBuZXcgVGFzayhuYW1lLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xyXG5cclxuXHRjb25zdCBvYmoxZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0b2JqMWRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2snKVxyXG5cclxuXHRjb25zdCBvYmpuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuXHRvYmpuYW1lLmlubmVyVGV4dCA9IG9iajEubmFtZTtcclxuXHRvYmoxZGl2LmFwcGVuZChvYmpuYW1lKTtcclxuXHJcblx0Y29uc3Qgb2JqZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRvYmpkdWVkYXRlLmlubmVyVGV4dCA9IG9iajEuZHVlZGF0ZTtcclxuXHRvYmoxZGl2LmFwcGVuZChvYmpkdWVkYXRlKTtcclxuXHJcblx0Y29uc3Qgb2JqZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0b2JqZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gb2JqMS5kZXNjcmlwdGlvbjtcclxuXHRvYmoxZGl2LmFwcGVuZChvYmpkZXNjcmlwdGlvbik7XHJcblxyXG5cdGNvbnN0IG9ianByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdG9ianByaW9yaXR5LmlubmVyVGV4dCA9IG9iajEucHJpb3JpdHk7XHJcblx0b2JqMWRpdi5hcHBlbmQob2JqcHJpb3JpdHkpO1xyXG5cclxuXHJcblx0Y29uc3QgZGVsX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdGRlbF9idG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxfYnRuJyk7XHJcblx0ZGVsX2J0bi5pbm5lclRleHQgPSAnRGVsZXRlJztcclxuXHRvYmoxZGl2LmFwcGVuZChkZWxfYnRuKTtcclxuXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZScpLmFwcGVuZChvYmoxZGl2KTtcclxuXHJcblx0ZGVsX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdG9iajFkaXYucmVtb3ZlKCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlVGFza307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vbW9kdWxlcy90YXNrXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3QyXCI7XHJcblxyXG5jcmVhdGVQcm9qZWN0KCk7XHJcbi8vIGNvbnN0IGFkZF9wcmogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9wcmpcIik7XHJcbi8vICAgICBhZGRfcHJqLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbi8vICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC1wcm9qZWN0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IHByal9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgICAgICAgY29uc3QgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBhZGRfcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdCcpXHJcbi8vICAgICAgICAgICAgIGFkZF9wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG5cclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBwcmpfZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbi8vICAgICAgICAgICAgIHByal9kZWwuaW5uZXJUZXh0ID0gJ0RlbCc7XHJcbi8vICAgICAgICAgICAgIHByb2plY3RfbmFtZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0X25hbWUudmFsdWV9YDtcclxuXHJcbi8vICAgICAgICAgICAgIGNvbnN0IG1haW5SaWdodF9kaXYgPSBwcmpfZGl2LmNsb25lTm9kZSh0cnVlKTtcclxuLy8gfSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=