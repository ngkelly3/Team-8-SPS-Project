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

//TODO: THIS! 
 var pastSelection = null;  //will be case only for default menu selection (CA)
 ; //just 

 //e is the name of the option selection and name is the same as the id. 
function changeData(e){ // function that the .html file will call: takes in the element the user selects from drop down menu and prints to console what was selected(passed into this function). The console can be viewed on the actual web page created: right click and then > select. 
    console.log(e);
        if(pastSelection != null){ //if the menu not set for first time to CA, then 
        pastSelection.classList.add("hide"); //add hide class. We know that the past selection is what was previously selected and should remain hidden now
        }        
        //bottom line: telling comp to get the value of the state passed in from firstitemloaded function below and convert it to an element
        var element = document.getElementById(e); //(an element is like a java object that can do methods)
        pastSelection = element //reset the pastSelection to be the element now selected on menu for next round of calling this function each time an option from menu is selected
        element.classList.remove("hide"); // show the text for the current selection by removing its hide class

}
function firstItemLoaded(){
   const firstItem = document.getElementById("states"); // states is the id and its changed to an element (like an obj we can work with)
   const selectedbydefault = firstItem.options[firstItem.selectedIndex].value // this is the value (found on html page) of the first item of menu selected by default
   changeData(selectedbydefault);
}
