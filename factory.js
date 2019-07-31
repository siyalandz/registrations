function regFactory() {
    var regList = [];

    // define a function that will take a array of registrations
        // It must take one parameter maybe call it regNumbers
        // Use a map or array
        // difine a array that will restrict reg codes only for cape Town 
            // let regCodes = ["CA", "CL","CJ", "CY"];
        // inside the Map 
            // check if the reg is not there, add reg
            // 
// function regCheck(regNumbers){
//     let regCode = ["CA", "CL","CJ",];
//     return regCode;
// }if(regCode){}

    function addReg(reg) {
console.log(addReg)
       regList.push(reg);
    }

    function getList(){
        return regList
    }
    
function Filter(location){
    for (var i=0; i< regList.length; i++){
        if(regList[i].startsWith(location)){
        getList.push(reg[i]);
        } 
}}
    //create a filter function
    //loop through your reglist
    //get all towns in the respective towns
    function display(){
        return reg;
    }

    return {
        addReg,
        getList,
        Filter,
        display
    }


}











