import Week from "./Week";
import useWeeksOfTheMonth from "../utils/useWeeksOfTheMonth";
import { useState } from "react";

const Calendar = (props) =>{
    const {setDate,date,month , year} = props;
    //const [dateSelected, setDateSelected] = useState(date);
    const weeks = useWeeksOfTheMonth(month,year);


    return (
        <table className="m-auto w-[90%] md:w-[400px] flex flex-col border border-gray-400 ">
             <tr className="flex justify-around">
                   {
                    ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((day) => <td className="font-bold w-[50px] leading-[50px] text-center text-gray-700 h-[50px]">{day}</td>)
                   }
             </tr>
            
            <tbody onClick={(e) => setDate(e.target.innerText)}>
               
                 {
                  weeks.map((week) => <Week days={week} selectedDate={date}/>)
                 }
            </tbody>
        </table>
    )
}

export default Calendar;