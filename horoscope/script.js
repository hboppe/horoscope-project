function clicar() {
    var month = document.getElementById('smonth') // variavel do mes input
    var parag = document.getElementById('para') // variavel para parag
    var day = document.getElementById('sday') // variavel do dia input
    var img = document.createElement(img)
    

    if (month.value == 'February' && Number(day.value) > 29 || (month.value == 'April' || month.value == 'June' || month.value == 'September' || month.value == 'November') && Number(day.value) > 30) {

    window.alert(`Invalide date. Please try again ${Number(day.value)}`)

    } else {
        if (month.value == 'March' && Number(day.value) >= 21 || month.value == 'April' && Number(day.value) < 20){

        parag.innerHTML = 'Your Zodiac sign  is Aries'

        } else if (month.value == 'April' && Number(day.value) > 19 || month.value == 'May' && Number(day.value) <= 20) {

        parag.innerHTML = 'Your Zodiac sign is Taurus'

        } else if (month.value == 'May' && Number(day.value) >=21 || month.value == 'June' && Number(day.value) <= 20) {

            parag.innerHTML = 'Your Zodiac sign is Gemini'

        } else if (month.value == 'June' && Number(day.value) >= 21 || month.value == 'July' && Number(day.value) <= 22){
            parag.innerHTML = 'Your Zodiac sign is Cancer'

        } else if (month.value == 'July' && Number(day.value) >= 23 || month.value =='August' && Number(day.value) <= 22) {
            parag.innerHTML = 'Your Zodiac sign is Leo'

        } else if (month.value == 'August' && Number(day.value) >= 23 || month.value == 'September' && Number(day.value) <= 22){
            parag.innerHTML = 'Your Zodiac sign is Virgo'

        } else if (month.value == 'September' && Number(day.value) >= 23 || month.value == 'October' && Number(day.value) <= 22){
            parag.innerHTML = 'Your Zodiac sign is Libra'

        } else if (month.value == 'October' && Number(day.value) >= 23 || month.value == 'November' && Number(day.value) <= 21) {
            parag.innerHTML = 'Your Zodiac sign is Scorpio'

        } else if (month.value == 'November' && Number(day.value) >= 21 || month.value == 'December' && Number(day.value) <= 21) {
            parag.innerHTML = 'Your Zodiac sign is Sagittarius'

        } else if (month.value == 'December' && Number(day.value) >= 22 || month.value == 'January' && Number(day.value) <= 19){
            parag.innerHTML = 'Your Zodiac sign is Capricorn'

        } else if (month.value == 'January' && Number(day.value) >= 20 || month.value == 'February' && Number(day.value) <= 18) {
            parag.innerHTML = 'Your Zodiac sign is Aquarius'

        } else if (month.value == 'February' && Number(day.value) <= 19 || month.value == 'March' && Number(day.value) <= 20){
            parag.innerHTML = 'Your Zodiac sign is Pisces'

        }
        parag.appendChild(img)

        
        
    }
    
    /*
    
    if (month.value == 'March' && Number(day.value) >= 1) {
        parag.innerHTML = `O mes escolhido eh janeiro`
    } else{
        parag.innerHTML = 'Outro mes'
    } 

    */
    
}
