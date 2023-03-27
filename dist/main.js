/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/default.js":
/*!********************************!*\
  !*** ./src/modules/default.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");

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
            (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTask)(); 
            })

            prj_del.addEventListener('click',()=>{
                prj_div.remove(document.getElementById('project'));
                getElementById('obj1div').remove();
            })
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
        const main_div = document.getElementById('main')
        const add_btn = document.createElement('button');
        add_btn.setAttribute('id', 'add_btn');
        add_btn.innerText = 'Add+';
        main_div.append(add_btn);
        
        add_btn.addEventListener('click', () => {
        const name = prompt('Enter The name');
        const duedate = prompt('Enter The duedate');
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
    
        main_div.append(obj1div);
    
        del_btn.addEventListener('click',()=>{
            obj1div.remove();
        })
        })  
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
/* harmony import */ var _modules_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/default */ "./src/modules/default.js");

(0,_modules_default__WEBPACK_IMPORTED_MODULE_0__.createProject)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBVTtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7VUNuRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05pRDtBQUNqRCwrREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpe1xyXG4gICAgY29uc3QgcHJqX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfcHJqJyk7XHJcblxyXG4gICAgcHJqX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgY29uc3QgcHJqX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmpfbmFtZSA9IHByb21wdCgnUHJvamVjdCBuYW1lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY29uc3QgcHJqX2RlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBwcmpfZGVsLmlubmVyVGV4dCA9ICdEZWwnO1xyXG4gICAgICAgICAgICBwcm9qZWN0LmlubmVyVGV4dCA9IGAke3Byal9uYW1lfWA7XHJcblxyXG4gICAgICAgICAgICBwcmpfZGl2LmFwcGVuZChwcm9qZWN0KTtcclxuICAgICAgICAgICAgcHJqX2Rpdi5hcHBlbmQocHJqX2RlbCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykuYXBwZW5kKHByal9kaXYpO1xyXG5cclxuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgY3JlYXRlVGFzaygpOyBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHByal9kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgICAgICBwcmpfZGl2LnJlbW92ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpKTtcclxuICAgICAgICAgICAgICAgIGdldEVsZW1lbnRCeUlkKCdvYmoxZGl2JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0fTsiLCJjbGFzcyBUYXNre1xyXG4gICAgY29uc3RydWN0b3IobmFtZSxkdWVkYXRlLGRlc2NyaXB0aW9uLHByaW9yaXR5KXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROYW1lKG5hbWUpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBnZXROYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxufVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcclxuICAgICAgICBjb25zdCBtYWluX2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcclxuICAgICAgICBjb25zdCBhZGRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYWRkX2J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZF9idG4nKTtcclxuICAgICAgICBhZGRfYnRuLmlubmVyVGV4dCA9ICdBZGQrJztcclxuICAgICAgICBtYWluX2Rpdi5hcHBlbmQoYWRkX2J0bik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRkX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lID0gcHJvbXB0KCdFbnRlciBUaGUgbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBwcm9tcHQoJ0VudGVyIFRoZSBkdWVkYXRlJyk7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9tcHQoJ0VudGVyIFRoZSBkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJvbXB0KCdFbnRlciBUaGUgcHJpb3JpdHknKTtcclxuICAgICAgICBjb25zdCBvYmoxID0gbmV3IFRhc2sobmFtZSwgZHVlZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcclxuICAgICAgICBjb25zdCBvYmoxZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgb2JqMWRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndGFzaycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgb2JqbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgb2JqbmFtZS5pbm5lclRleHQgPSBvYmoxLm5hbWU7XHJcbiAgICAgICAgb2JqMWRpdi5hcHBlbmQob2JqbmFtZSk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvYmpkdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIG9iamR1ZWRhdGUuaW5uZXJUZXh0ID0gb2JqMS5kdWVkYXRlO1xyXG4gICAgICAgIG9iajFkaXYuYXBwZW5kKG9iamR1ZWRhdGUpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3Qgb2JqZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgb2JqZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gb2JqMS5kZXNjcmlwdGlvbjtcclxuICAgICAgICBvYmoxZGl2LmFwcGVuZChvYmpkZXNjcmlwdGlvbik7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBvYmpwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBvYmpwcmlvcml0eS5pbm5lclRleHQgPSBvYmoxLnByaW9yaXR5O1xyXG4gICAgICAgIG9iajFkaXYuYXBwZW5kKG9ianByaW9yaXR5KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZGVsX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRlbF9idG4uc2V0QXR0cmlidXRlKCdpZCcsJ2RlbF9idG4nKTtcclxuICAgICAgICBkZWxfYnRuLmlubmVyVGV4dCA9ICdEZWxldGUnO1xyXG4gICAgICAgIG9iajFkaXYuYXBwZW5kKGRlbF9idG4pO1xyXG4gICAgXHJcbiAgICAgICAgbWFpbl9kaXYuYXBwZW5kKG9iajFkaXYpO1xyXG4gICAgXHJcbiAgICAgICAgZGVsX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgb2JqMWRpdi5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIH0pICBcclxuICAgIH1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlVGFza307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0fSBmcm9tIFwiLi9tb2R1bGVzL2RlZmF1bHRcIjtcclxuY3JlYXRlUHJvamVjdCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=