import dayjs from "dayjs"

import {} from "../../utils/opening-hours.js"

export function hoursLoad({date}){
    const opening = openingHours.map((hour) => {
        // recupera somente a hora
        const [scheduleHour] = hour.split(" :")

        // Adiciona a hora na data e verifica se esta no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        return{
            hour: scheduleHour,
            
        }
    })
}