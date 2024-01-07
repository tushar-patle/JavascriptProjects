//function to generate a random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var randomInt = getRandomInt(1, 100); // Generates a random integer between 1 (inclusive) and 100 (exclusive)
  
  //Array of 100 jokes
  let jokes = ["There’s a fine line between a numerator and a denominator."
    , "What do dentists call their x-rays? Tooth pics!",
    "Did you hear about the first restaurant to open on the moon? It had great food, but no atmosphere.",
    "What did one ocean say to the other ocean? Nothing, it just waved.",
    "Do you want to hear a construction joke? Sorry, I’m still working on it.",
    "Did you hear about the fire at the circus? It was in tents!",
    "Why do ducks have feathers? To cover their butt quacks!",
    "What’s the difference between a hippo and a zippo? One is really heavy and the other’s a little lighter.",
    "What does a nosey pepper do? It gets jalapeño business.", "Why should you never trust stairs? They’re always up to something.",
    "When does a joke become a ‘dad’ joke? When it becomes apparent.",
    "Why did the bullet end up losing his job? He got fired.",
    "What kind of shorts do clouds wear? Thunderpants",
    "I entered ten puns in a contest to see which would win. No pun in ten did.",
    "How do you measure a snake? In inches—they don’t have feet.",
    "Where does a waitress with only one leg work? IHOP.",
    "What does a house wear? Address!",
    "Why are toilets always so good at poker? They always get a flush",
    "Why is Peter Pan always flying? Because he Neverlands.",
    "You heard the rumor going around about butter? Never mind, I shouldn’t spread it.",
    "Two windmills are standing on a wind farm. One asks, ‘What’s your favorite kind of music?’ The other replies, ‘I’m a big metal fan.’",
    "The first rule of the Alzheimer’s club is… Wait, where are we again?",
    "I took the shell off of my racing snail, thinking it would make him faster. But if anything, it made him more sluggish.",
    "What do you get from a pampered cow? Spoiled milk.",
    "How does NASA organize a party? They planet.",
    "What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.",
    "You know, it was so cold in D.C. the other day, I saw a politician with his hands in his own pockets.",
    "How many tickles does it take to get an octopus to laugh? Ten tickles",
    "Why does not Dracula have any friends? Well, honestly, he is a real pain in the neck.",
    "My teachers told me I’d never amount to much since I procrastinate so much. I told them, “Just you wait!”",
    "Why were they called the “dark ages?” Because there were a lot of knights.",
    "What gets wetter the more it dries? A towel.",
    "Why aren’t koalas considered bears? They don’t have the right koala-fications.",
    "You: What cartoon mouse walks on two feet? Them: Mickey Mouse You: What duck walks on two feet? Them: Donald Duck You: No, all ducks do!",
    "Want to hear a joke about a roof? The first one’s on the house.",
    "What’s a pirate’s favorite letter? You probably think it’s “R” but it be the “C”.",
    "How much teddy bears never want to eat anything? Because they’re always stuffed.",
    "Did you hear about the cheese factory that exploded in France? There was nothing left but de Brie.",
    "Where should you go in the room if you’re feeling cold? The corner—they’re usually 90 degrees.",
    "I can never take my dog to the park because the ducks keep trying to bite him. I guess that’s what I get for buying a pure bread dog.",
    "What’s the difference between a poorly dressed man on a unicycle and a well-dressed man on a bicycle? Attire.",
    "What did the Buddhist ask the hot dog vendor? “Make me one with everything.”",
    "You know why you never see elephants hiding up in trees? Because they’re really good at it.",
    "A horse walks into a bar. The bartender says, “Why the long face?”",
    "How did the hipster burn his mouth? He ate his pizza before it was cool.",
    "What do you get when you cross a dyslexic, an insomniac, and an agnostic? Someone who lays awake at night wondering if there’s a dog.",
    "As a scarecrow, people say I’m outstanding in my field. But hay, it’s in my jeans.",
    "Why don’t blind people skydive? Because it scares their dogs.",
    "What’s the difference between an oral thermometer and a rectal thermometer? The taste, mostly.",
    "I stayed up all night and tried to figure out where the sun was. Then it dawned on me.",
    "I told my friend ten jokes to make him laugh. Sadly, no pun in ten did.",
    "I couldn’t believe the highway department called my dad a thief. But when I got home, the signs were all there.",
    "Why did the cowboy get a wiener dog? He wanted to get a long little doggie.",
    "Can a kangaroo jump higher than the Empire State Building? Of course! The Empire State Building can’t jump.",
    "What did the duck say when it bought some lipstick? “Put it on my bill.”",
    "George Clooney, Leonardo DiCaprio, and Matthew McConaughey get together to make a movie. Clooney says, “I’ll direct.” DiCaprio says, “I’ll act.” McConaughey says, “I’ll write, I’ll write, I’ll write.”",
    "A horse walks into a bar. The bartender says, “Hey!” The horse replies, “Sure.”",
    "I googled “Rorshach test.” But for some reason, all that came up were pictures of my parents fighting.",
    "What do we want? Low-flying airplane noises! When do we want them? Nnnnneeeeeeeeeeoooooooooow!",
    "I tried to win a suntanning competition. But all I got was bronze.",
    "How much space will be freed in the EU after Brexit? Approximately 1 GB.",
    "Why don’t seagulls fly over the bay? Because then they’d be bagels.",
    "What do you call malware on a Kindle? A bookworm.",
    "Did you hear about the painter who was hospitalized? The doctors say it was due to too many strokes.",
    "Why are crabs so bad at sharing? Because they’re all shellfish.",
    "What did the tie say to the hat? You go on ahead. I’ll hang around.",
    "How do you make a tissue dance? Put a little boogie in it.",
    "What do you call a cow with a twitch? Beef jerky.",
    "I started a new job as a tailor last week. It’s been sew-sew.",
    "What concert only costs 45 cents? 50 Cent featuring Nickleback.",
    "What kind of shoes does a spy wear? Sneakers.",
    "I’ve been trying to make a sarcastic club, but it’s been really hard to tell if people are interested in joining or not.",
    "And the Lord said unto John, “Come forth and you will receive eternal life.” But John came fifth and won a toaster.",
    "What do you call a fake noodle? An impasta.",
    "My wife accused me the other day of being too immature. I told her there were no girls allowed in my fort.",
    "Someone stole my mood ring yesterday. I still don’t know how I feel about that.",
    "A Roman legionnaire walks into a bar, holds up two fingers and says, “Five beers, please.”",
    "I tried to catch fog yesterday. Mist",
    "Working in a mirror factory is something I can totally see myself doing.",
    "Someone stole my Microsoft Office and they’re gonna pay. You have my Word.",
    "What do you call a dog with no legs? It doesn’t matter, it’s not going to come anyway.",
    "You know what they say about cliffhangers…",
    "Why does a chicken coop only have two doors? Because if it had four doors, it would be a chicken sedan.",
    "A sandwich walks into a bar. The bartender says, “Sorry, we don’t serve food here.”",
    "I got a new job last week as the new top dog at Old MacDonald’s farm. I’m the new C-I-E-I-O.",
    "The sky was looking ominous so I asked Siri, “Surely, it’s not going to rain today?” And she replied, “Yes it is, and don’t call me Shirley.” That was when I realized I’d left my phone on Airplane mode.",
    "Why did the giraffe get such bad grades? He always had his head stuck in the clouds.",
    "Why are frogs always so happy? They eat whatever bugs them.",
    "Whenever you jump on a trampoline, did you know it changes the season? No matter what time of year, it always becomes spring time.",
    "Why didn’t the skeleton go to the dance? Because he had no body to go with.",
    "What do you call a musician with problems? A trebled man.",
    "Where do snowmen keep their savings? In the snowbank.",
    "What do you call a religious person who sleepwalks? A roamin’ Catholic.",
    "Did you hear about the carrot detective? He always got to the root of every case.",
    "What washes up on very small beaches? Micro-waves",
    "What did one elevator say to the other? I think I’m coming down with something.",
    "What happened when a faucet, a tomato, and some lettuce ran a race together? The lettuce was ahead, the faucet was running, and the tomato was trying to ketchup.",
    "What do you call a belt with a watch on it? A waist of time.",
    "Why did the tomato turn red? It saw the salad dressing.",
    "What did the grape do when it got stepped on?It let out a little wine."];
  
  
  // Function to get a random joke from the array
  function getRandomJoke() {
    let random = Math.floor(Math.random() * jokes.length - 1);
    return jokes[random];
  }
  
  // Function to display a random joke when the button is clicked
  function displayRandomJoke() {
    var joke = document.getElementById("joke");
    joke.textContent = getRandomJoke();
  }
  
  // Add event listener to the button
  let button = document.getElementById("btn");
  button.addEventListener("click", displayRandomJoke);
  
  // Adding some styling to the page
  document.body.style.backgroundColor = "cyan";
