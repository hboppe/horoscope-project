function clicar() {
    var month = document.getElementById('smonth') // variavel do mes input
    var parag = document.getElementById('para') // variavel para parag
    var day = document.getElementById('sday') // variavel do dia input
    // var div = document.getElementById('div1')

    let signExp = document.getElementById("exp");
    let link = document.getElementById("link");

    if (month.value == 'February' && Number(day.value) > 29 || (month.value == 'April' || month.value == 'June' || month.value == 'September' || month.value == 'November') && Number(day.value) > 30) {

    window.alert(`Invalide date. Please try again`)

    } else {
        // var img = document.createElement('img')
        // img.setAttribute('id', 'image')

        let img = document.getElementById("trocarImg")

        if (month.value == 'March' && Number(day.value) >= 21 || month.value == 'April' && Number(day.value) < 20){

            parag.innerHTML = 'Your Zodiac sign  is Aries'
            
            img.setAttribute('src', 'aries.jpg')
            signExp.innerHTML = "The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!"

            link.attri

        } else if (month.value == 'April' && Number(day.value) > 19 || month.value == 'May' && Number(day.value) <= 20) {

            parag.innerHTML = 'Your Zodiac sign is Taurus'
            img.setAttribute('src', 'taurus.jpg')
            signExp.innerHTML = 'What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.'

        } else if (month.value == 'May' && Number(day.value) >=21 || month.value == 'June' && Number(day.value) <= 20) {

            parag.innerHTML = 'Your Zodiac sign is Gemini'
            img.setAttribute('src', 'gemini.jpg')
            signExp.innerHTML = `Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. You know, NBD! `


        } else if (month.value == 'June' && Number(day.value) >= 21 || month.value == 'July' && Number(day.value) <= 22){
            parag.innerHTML = 'Your Zodiac sign is Cancer'
            img.setAttribute('src', 'cancer.jpg')
            signExp.innerHTML = `Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer\’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust!`


        } else if (month.value == 'July' && Number(day.value) >= 23 || month.value =='August' && Number(day.value) <= 22) {
            parag.innerHTML = 'Your Zodiac sign is Leo'
            img.setAttribute('src', 'leo.jpg')

            signExp.innerHTML = `Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.`


        } else if (month.value == 'August' && Number(day.value) >= 23 || month.value == 'September' && Number(day.value) <= 22){
            parag.innerHTML = 'Your Zodiac sign is Virgo'
            img.setAttribute('src', 'virgo.jpg')

            signExp.innerHTML = `You know the expression, "if you want something done, give it to a busy person?" Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.`


        } else if (month.value == 'September' && Number(day.value) >= 23 || month.value == 'October' && Number(day.value) <= 22){
            parag.innerHTML = 'Your Zodiac sign is Libra'
            img.setAttribute('src', 'libra.jpg')

            signExp.innerHTML = `Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.`


        } else if (month.value == 'October' && Number(day.value) >= 23 || month.value == 'November' && Number(day.value) <= 21) {
            parag.innerHTML = 'Your Zodiac sign is Scorpio'
            img.setAttribute('src', 'scorpio.jpg')

            signExp.innerHTML = `Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.`


        } else if (month.value == 'November' && Number(day.value) >= 21 || month.value == 'December' && Number(day.value) <= 21) {
            parag.innerHTML = 'Your Zodiac sign is Sagittarius'
            img.setAttribute('src', 'sagittarius.jpg')

            signExp.innerHTML = `Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.`


        } else if (month.value == 'December' && Number(day.value) >= 22 || month.value == 'January' && Number(day.value) <= 19){
            parag.innerHTML = 'Your Zodiac sign is Capricorn'
            img.setAttribute('src', 'capricorn.jpg')

            signExp.innerHTML = `What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms. `


        } else if (month.value == 'January' && Number(day.value) >= 20 || month.value == 'February' && Number(day.value) <= 18) {
            parag.innerHTML = 'Your Zodiac sign is Aquarius'
            img.setAttribute('src', 'aquarius.jpg')

            signExp.innerHTML = `Despite the "aqua" in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.`


        } else if (month.value == 'February' && Number(day.value) >= 19 || month.value == 'March' && Number(day.value) <= 20){
            parag.innerHTML = 'Your Zodiac sign is Pisces'
            img.setAttribute('src', 'pisces.jpg')

            signExp.innerHTML = `If you looked up the word "psychic" in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality.`


        }
        // div.appendChild(img)
        
        

        
        
    }
    
    
    
    
}
