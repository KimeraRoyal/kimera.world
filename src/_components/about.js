const genres = ["emo", "nu-metal", "hyperpop", "post-hardcore", "pop-punk", "experimental rock", "prog rock", "industrial rock", "ska", "digicore", "scenecore", "hip hop", "punk rock", "experimental", "EDM", "indie", "rock", "rap", "psychedelic", "techno", "jungle", "vaporwave", "plunderphonics", "screamo", "midwest emo", "chiptune", "chiprock", "trip hop", "Shinjuku kei", "visual kei"];
const bands = ["Linkin Park", "Bring Me The Horizon", "Pierce the Veil", "Set to Stun", "The Aquabats!", "Grandmas House", "100 gecs", "Laura Les", "Dylan Brady", "PUP", "Black Dresses", "Ada Rook", "underscores", "Random Hand", "DethTech", "Birds Fear Death", "Angel Electronics", "heylog", "Blood Command", "WARGASM (UK)", "Crisis Sigil", "foxtails", "Ennaria", "Thousand Foot Krutch", "N0THANKYOU", "dynastic", "webcage", "torr", "Jane Remover", "Milkfish", "saoirse dream", "Deijuvhs", "GOM", "six impala", "Operation Sodasteal", "Cheekface", "Rizzle Kicks", "Yucky Duster", "Friend", "Hey, Ily", "The Beths", "The Dollyrots", "julie", "RAT BOY", "Will Wood", "old pride", "i hope so", "Wonk Unit", "That Handsome Devil", "godforbid", "öOoOoOoOoOo", "Sleeping With Sirens", "Error37", "Gupi", "Fraxiom", "food house", "of Montreal", "Indiana Joe", "Yufi", "Math The Band", "Amy Can Flyy", "Pulses", "tv room", "Mailto", "SEBii", "Call Me Malcolm", "Dogleg", "Origami Angel", "Hot Mulligan", "Peach Rings", "Roman Candle", "Iglooghost", "lizzy's personal army", "Kero Kero Bonito", "Newgrounds Death Rugby", "S3RL", "Fleshwater", "Nine Inch Nails", "Nonpoint", "STOMACH BOOK", "Yabadum", "slaney(in)famous", "Oneohtrix Point Never", "Harley Poe", "Pavement", "Basement", "Macroblank", "Nice Inch Nails", "Dr. Manhattan", "advantage Lucy", "Sheena Ringo", "Cibo Matto", "Days 'n Daze", "Chumbawamba", "muzak efron", "Indiana Joe", "she died in pallet town", "twinkle park", "smiling broadly", "Sophiaaaahjkl;8901", "The Charlatans", "The Sleepwalk", "Vantana Row", "Watashime Slug"]

function randomizeElement(id, values)
{
    let element = document.getElementById(id);
    if(element == null) { return; }

    const index = Math.floor(Math.random() * values.length);
    element.innerHTML = values[index];
}

(function randomizeMusicNames() {
    randomizeElement('genre', genres);
    randomizeElement('band', bands);
})();