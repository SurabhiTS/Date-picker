import { monthToNum } from "./constants";

function useWeeksOfTheMonth(month,year){
    let allDates =[];
    let weeks=[];
    const lastDayOfMonth = new Date(year, monthToNum[month]+1,0);
    for(let i=1; i<= lastDayOfMonth.getDate();i++){
      allDates.push(new Date(year,monthToNum[month],i));
    } // get all the dates of selected month
    let i=0;
    while(allDates.length != 0 && i < allDates.length){
        
        if(allDates[i].toString().includes("Sat") ){
            weeks.push(allDates.slice(0,i+1)) // slice all the days till Sat
            allDates = allDates.slice(i+1,allDates.length); // assign new array of dates after a week is sliced
            i=0;
        }
       
        i++;
    
    }
    weeks.push(allDates); // weeks[] contain all the dates divided into weeks
   
   
    /*first and last few dates of a month usually don't cover the entire week, 
    below logic adds '' values so that weeks[i] has 7 items
    eg:[
        ['','','1','2','3','4','5'],
        ['6',7','8','9','10','11','12']
        .
        .
        till last week of the month is reached
    ]
    this way, it's easier to map each week to <Week/> component
    */
    if(weeks[0].length < 7 || weeks[weeks.length-1].length < 7) {
        let firstWeekCount = weeks[0].length < 7 ? (7-weeks[0].length):0;
        let lastWeekCount = weeks[weeks.length-1].length < 7 ? (7-weeks[weeks.length-1].length):0;

        if(firstWeekCount != 0){
            for(let i=0 ; i < firstWeekCount ; i++){
                weeks[0].unshift("")
            }
        }

        if(lastWeekCount != 0){
            for(let i=0 ; i < lastWeekCount ; i++){
                weeks[weeks.length-1].push("")
            }
          
        }
        
    }   
    return weeks;
}

export default useWeeksOfTheMonth;