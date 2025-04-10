let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-IN"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Abbas")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Abbas")
    } else {
        speak("Good Night Abbas")
    }
}
window.addEventListener('load', () => {
    wishMe()
})
let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"

})
function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello") || message.includes("hey") || message.includes("hi") || message.includes("suno zoya") || message.includes("suno") || message.includes("hello zoya")) {
        speak("hello Dear,How Can I Help You")
    }
    else if (message.includes("assalam walekum")) {
        speak("वालेकुम अस्सालाम")
    }else if (message.includes("abbas ki kitni bahan hai")) {
        speak("Abbas ki 2 behan hai saba aur naba")
    }
    else if (message.includes("allah kitne hai")) {
        speak("Allah Sirf ek hai")
    } else if (message.includes("who is abbas")|| message.includes("abbas kaun hai")) {
        speak("Abbas Is Web developer who developed me with the help of html css and javascript and he is persuing bca and live in Azamgarh")
    } else if (message.includes("what's my age ") || message.includes("meri umra kitni hai") || message.includes("what is my age")) {
        speak("your age is 21")
    } else if (message.includes("abbas ka dost kaun hai")) {
        speak("ayaan dost hai")
    } else if (message.includes("who developed you") || message.includes("tumhen kisne banaya") || message.includes("who's created you")) {
        speak("abbas developed me")
    }else if (message.includes("ahmad kaun hai")) {
        speak("ahmad ek number ka हरामी aur भड़वा ladka hai")
    }else if (message.includes("who are you") || message.includes("zoya who are you") || message.includes("kaun ho tum")) {
        speak("I am Zoya and your virtual assistant, developed By Abbas ")
    } else if (message.includes("tell me abbas contact details")){
        speak("here is the contact number 9 1 7 0 1 3 3 0 5 5 ")
    } else if (message.includes("open youtube")) {
        speak("Opening Youtube")
        window.open("https://www.youtube.com/")
    }else if (message.includes("open google")) {
        speak("Opening Google")
        window.open("https://www.google.co.in/")
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram....")
        window.open("https://www.instagram.com/")
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook")
        window.open("https://www.facebook.com/")
    }
    else if (message.includes("open whatsapp")) {
        speak("Opening whatsapp")
        window.open("https://web.whatsapp.com/")
    } else if (message.includes("open calculator")) {
        speak("Opening calculator..")
        window.open("calculator://")
    } else if (message.includes("open clock") || (message.includes("zoya time kya ho raha hai"))) {
        speak("Opening Clock in your browser")
        window.open("https://dayspedia.com/time/online/")
    } else if (message.includes("open setting")) {
        speak("Opening setting")
        window.open("setting://")
    }
    else if (message.includes("open file explorer")) {
        speak("Opening file explorer")
        window.open("File Explorer://")
    } else if (message.includes("open whatsapp")) {
        speak("Opening whatsapp")
        window.open("whatsapp://")
    }else if(message.includes("abbas ke kitne bhai hai")){
        speak("abbas ke do bhai hai aur dono tabahai hai taqi aur zaki")
    }else if(message.includes("time")){
       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{weekday:"short",day:"numeric",month:"short",year:"numeric"})
         speak(date)
     }

    else {
        speak("This Is What I found in internet regarding")
        window.open(`https://www.google.com/search?q=${encodeURIComponent(message)}`)

    }
}



