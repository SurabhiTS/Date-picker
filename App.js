import React,{useState,useMemo} from "react";
import ReactDOM from "react-dom/client";
import numToMonth,{monthToNum, numToWeekDay} from "./src/utils/constants"
import Calendar from "./src/components/Calendar";



const App = () => {
   const [dateSelected,setDateSelected] = useState(new Date().getDate());
   const [monthSelected, setMonthSelected] = useState(numToMonth[new Date().getMonth()]);
   const [yearSelected,setYearSelecetd] = useState(new Date().getFullYear());
   console.log("month selected-----",monthSelected);
   console.log("year selected------",yearSelected);

   function updatePrevMonth(){
    if(monthSelected == 'Jan'){
        setMonthSelected('Dec');
        setYearSelecetd(yearSelected-1);
    }
    else{
        setMonthSelected(numToMonth[monthToNum[monthSelected]-1])
    }

   }

   function updateNextMonth(){
    if(monthSelected == 'Dec'){
        setMonthSelected('Jan');
        setYearSelecetd(yearSelected+1);
    }
    else{
        setMonthSelected(numToMonth[monthToNum[monthSelected]+1])
    }

   }

   
    return (
        <div className="overflow-hidden">
            <div className="flex w-[400px] justify-around m-auto my-10 border border-gray p-2">
                <button className="border border-gray-500 px-2  text-gray-500" onClick={() => setYearSelecetd(yearSelected-1)}>{"<<"}</button>
                <button className="border border-gray-500 px-2 text-gray-500" onClick={updatePrevMonth}>{"<"}</button>
                <p>{dateSelected}</p>
                <p>{monthSelected}</p>
                <p>{yearSelected}</p>
                <button className="border border-gray-500 px-2  text-gray-500" onClick={updateNextMonth}>{">"}</button>
                <button className="border border-gray-500 px-2  text-gray-500" onClick={() => setYearSelecetd(yearSelected +1)}>{">>"}</button>
            </div>
            <Calendar setDate={setDateSelected} date={dateSelected} month={monthSelected} year={yearSelected}/>
        </div>
    )
}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
