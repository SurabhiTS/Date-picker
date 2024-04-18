const Week = (props) => {
    const {days, selectedDate} = props; 
    const buttonClass = "w-[50px] h-[50px]";

    return (
        <tr className="flex  justify-around">
           {
            days.map((day) => (
                    <td className="w-[50px] text-center h-[50px]" >
                        <button className={ (day == '' || day.getDate() != selectedDate)? buttonClass: buttonClass+" bg-blue-700 text-white"}>{day != ''? day.getDate():''}</button>
                    </td>))
           }
        </tr>
    )

}

export default Week;