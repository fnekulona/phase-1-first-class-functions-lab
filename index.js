// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(fare){
    return function(x){
        return fare * x;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
}