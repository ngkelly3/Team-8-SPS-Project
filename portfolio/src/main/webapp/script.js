// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

//TODO: THIS! 
 var pastSelection = null;
 ; //just 

 //e is the name of the option selection and name is the same as the id. 
function changeData(e){ // function that the .html file will call: takes in the element the user selects from drop down menu and prints to console what was selected(passed into this function). The console can be viewed on the actual web page created: right click and then > select. 
    console.log(e);
        if(pastSelection != null){
        pastSelection.classList.add("hide"); //add hide class 
        }        
        //send California info to the .html file 
        var element = document.getElementById(e);
        pastSelection = element
        element.classList.remove("hide"); // show the current selection by removing its hide class

}
function firstItemLoaded(){
   const firstItem = document.getElementById("states");
   const selectedbydefault = firstItem.options[firstItem.selectedIndex].value // this is the value of the first item of menu selected by default
   changeData(selectedbydefault);
}
