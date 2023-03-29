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
            (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTask)(); 
            document.getElementById('add_btn').style.display = "block";
            })

            prj_del.addEventListener('click',()=>{
                prj_div.remove();
                mainRight_div.remove();
                document.getElementById('add_btn').style.display = "none";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBVTtBQUN0QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7O1VDdEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDakQsK0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kZWZhdWx0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCl7XHJcbiAgICBjb25zdCBwcmpfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9wcmonKTtcclxuXHJcbiAgICBwcmpfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBwcmpfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByal9uYW1lID0gcHJvbXB0KCdQcm9qZWN0IG5hbWUnKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmpfZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHByal9kZWwuaW5uZXJUZXh0ID0gJ0RlbCc7XHJcbiAgICAgICAgICAgIHByb2plY3QuaW5uZXJUZXh0ID0gYCR7cHJqX25hbWV9YDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5SaWdodF9kaXYgPSBwcmpfZGl2LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmFwcGVuZChtYWluUmlnaHRfZGl2KTtcclxuICAgICAgICAgICAgcHJqX2Rpdi5hcHBlbmQocHJvamVjdCk7XHJcbiAgICAgICAgICAgIHByal9kaXYuYXBwZW5kKHByal9kZWwpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLmFwcGVuZChwcmpfZGl2KTtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGRlYWN0aXZlID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWFpblJpZ2h0X2Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBpZihkZWFjdGl2ZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGRlYWN0aXZlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJcIik7XHJcbiAgICAgICAgICAgICAgICBkZWFjdGl2ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluUmlnaHRfZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgY3JlYXRlVGFzaygpOyBcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9idG4nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcHJqX2RlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgICAgIHByal9kaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBtYWluUmlnaHRfZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9idG4nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0fTsiLCJjbGFzcyBUYXNre1xyXG4gICAgY29uc3RydWN0b3IobmFtZSxkdWVkYXRlLGRlc2NyaXB0aW9uLHByaW9yaXR5KXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROYW1lKG5hbWUpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBnZXROYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxufVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcclxuICAgICAgICBjb25zdCB0ZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfYnRuXCIpO1xyXG4gICAgICAgIGlmICh0ZXN0ID09IG51bGwpe1xyXG4gICAgICAgICAgICBjb25zdCBtYWluX2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcclxuICAgICAgICAgICAgY29uc3QgYWRkX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBhZGRfYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkX2J0bicpO1xyXG4gICAgICAgICAgICBhZGRfYnRuLmlubmVyVGV4dCA9ICdBZGQrJztcclxuICAgICAgICAgICAgbWFpbl9kaXYuYXBwZW5kKGFkZF9idG4pO1xyXG4gICAgICAgICAgICBhZGRfYnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGFkZF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoJ0VudGVyIFRoZSBuYW1lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBwcm9tcHQoJ0VudGVyIFRoZSBkdWVkYXRlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvbXB0KCdFbnRlciBUaGUgZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcm9tcHQoJ0VudGVyIFRoZSBwcmlvcml0eScpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmoxID0gbmV3IFRhc2sobmFtZSwgZHVlZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqMWRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBvYmoxZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0YXNrJylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG9iam5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICAgICBvYmpuYW1lLmlubmVyVGV4dCA9IG9iajEubmFtZTtcclxuICAgICAgICAgICAgb2JqMWRpdi5hcHBlbmQob2JqbmFtZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG9iamR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG9iamR1ZWRhdGUuaW5uZXJUZXh0ID0gb2JqMS5kdWVkYXRlO1xyXG4gICAgICAgICAgICBvYmoxZGl2LmFwcGVuZChvYmpkdWVkYXRlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgb2JqZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG9iamRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IG9iajEuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIG9iajFkaXYuYXBwZW5kKG9iamRlc2NyaXB0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgb2JqcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG9ianByaW9yaXR5LmlubmVyVGV4dCA9IG9iajEucHJpb3JpdHk7XHJcbiAgICAgICAgICAgIG9iajFkaXYuYXBwZW5kKG9ianByaW9yaXR5KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZGVsX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBkZWxfYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdkZWxfYnRuJyk7XHJcbiAgICAgICAgICAgIGRlbF9idG4uaW5uZXJUZXh0ID0gJ0RlbGV0ZSc7XHJcbiAgICAgICAgICAgIG9iajFkaXYuYXBwZW5kKGRlbF9idG4pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlJykuYXBwZW5kKG9iajFkaXYpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBkZWxfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgb2JqMWRpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlVGFza307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0fSBmcm9tIFwiLi9tb2R1bGVzL2RlZmF1bHRcIjtcclxuY3JlYXRlUHJvamVjdCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=