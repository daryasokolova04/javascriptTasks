function getTimeUntilDate(date) {
    let diff = date - new Date(),
        obj = {};
    let newDate = new Date(diff);
    
    obj['days'] = Math.floor(newDate.getHours()/ 24);
    obj['hours'] = newDate.getHours();
    obj['minutes'] = newDate.getMinutes();
    obj['seconds'] = newDate.getSeconds();

    return obj;
}



const targetDate = new Date('2023-08-13T00:00:00');
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }
