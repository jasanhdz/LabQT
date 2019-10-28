export function obtenerFecha (timeStamp) {    
    const d = new Date(timeStamp)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    let year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [day, month, year].join('/')
    // return new Date(timeStamp)
}

export function obtenerHora(timeStamp) {
    const d = new Date(timeStamp);
    let hours = d.getHours();
    let minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    let amOrPm = d.getHours() > 12 ? 'p. m.' : 'a. m.' 
    return `${hours % 12}:${minutes} ${amOrPm}`;
}

const fecha = new Date();
export const DATE_NOW = `${fecha.getDate()}:${fecha.getMonth()+1}:${fecha.getFullYear()}:${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`

    

