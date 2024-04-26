export function getMonth(month: number) {
    switch (month) {
        case 0:
            return "январь";
        case 1:
            return "февраль";
        case 2:
            return "март";
        case 3:
            return "апрель";
        case 4:
            return "май";
        case 5: 
            return "июнь";
        case 6:
            return "июль";
        case 7:
            return "август";
        case 8:
            return "сентябрь";
        case 9:
            return "октябрь";
        case 10:
            return "ноябрь";
        default:
            return "декабрь";
    }
}

export function getFromToDate(from: number, to: number) {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    return (
      fromDate.getDate() + " " + getMonth(fromDate.getMonth()) + ". " + fromDate.getFullYear() + "г. - "
      + toDate.getDate() + " " + getMonth(toDate.getMonth()) + ". " + toDate.getFullYear() + "г."
    ) 
  }