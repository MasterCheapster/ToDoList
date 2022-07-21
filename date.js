    //jshint esversion:6
//     module.exports.getDate = getDate;
//     function getDate(){
//     var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     var today = new Date();
//     var options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };
//     var currentDay = weekday[today.getDay()];
//     day = currentDay;
//     return day ;
// }
module.exports.getDate = function() {
    let today= new Date() ;
    let options ={ 
        weekday:"long",
        day:"numeric",
        month:"long"
    } ; 
    return today.toLocaleDateString("en-US", options) ;
}  ;
exports.getDay = function (){
    let today= new Date() ;
    let options ={ 
        weekday:"long",
    } ; 
    return today.toLocaleDateString("en-US", options) ;
} ;