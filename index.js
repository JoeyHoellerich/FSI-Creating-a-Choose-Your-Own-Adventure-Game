// Your Code Here+
docText = document.querySelector("h1");

let trueFirst = confirm("Do you head to the left or to the right?\n(OK = Left, Cancel = Right")
if (trueFirst){
    let firstAnswer  = confirm('You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?\n(OK = Follow, Cancel = Continue)')
    if (firstAnswer) {
        let secondAnswer = confirm("You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.\n (OK = Alert, Cancel = Stay with Cats)")
        if (secondAnswer) {
            docText.innerText = "After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless."

        } else {
            docText.innerText = "You live happily amongst the cats for the rest of your days."
        }
    }
} else {
    let secondAnswer = confirm("You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?\n(OK = Go Past Dragon, Cancel = Go Away from Dragon)")
    if (secondAnswer){
        let thirdAnswer = confirm("The dragon wakes up and sits upright. You only have a moment to respond, to stay or run\n(OK = Stay, Cancel = Run)")
        if (thirdAnswer){
            docText.innerText = "You and the dragon have an uplifting conversation about local politics and become lifelong friends."
        } else {
            docText.innerText = "Quickly, you run back to the cave's entrance. Sheepish, you return home."
        }
    } else {
        let thirdAnswer = "After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?\n(OK = Draw it, Cancel = Pick it)"
        if (thirdAnswer){
            docText.innerText = "You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch."
        } else {
            docText.innerText = "You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust."
        }
    }
}


