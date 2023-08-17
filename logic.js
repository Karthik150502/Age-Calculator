const bday = document.getElementById('bday')
const telement = document.getElementById('text')


const change = () => {


    let curr = new Date()
    let birthdate = new Date(bday.value)
    let new_date = new Date(curr - birthdate)

    
    let years = new_date.getFullYear() - 1970
    let months = new_date.getMonth()
    let days = new_date.getDate() - 1

    telement.innerHTML = `You are ${years} years, ${months} months and ${days} days old!`


}