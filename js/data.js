const discover = [
  {
    id: 1,
    title: "Write a Letter to Your Future Self",
    content: "Take a moment to write down your current feelings, hopes, and dreams. Seal it and open it in exactly one year.",
    time: "15 Mins",
    image: "../images/note.png",
    hashtags: ["#selflove", "#Reflection", "#Quick"],
    blub: ["selflove", "self", "reflection", "quick"],
    mood: "quiet"
  },
  {
    id: 2,
    title: "Digital Detox Evening",
    content: "Turn off all screens an hour before bed. Use this time to read, meditate, or simply be present with your thoughts.",
    time: "60 Mins",
    image: "../images/tea.png",
    hashtags: ["#selflove", "#DeepConnection"],
    blub: ["selflove", 'self', 'deep', 'connection', 'deep connection'],
    mood: "quiet"
  },
  {
    id: 3,
    title: "Create a Vision Board",
    content: "Gather magazines, scissors, and a board. Cut out images and words that resonate with your goals and arrange them.",
    time: "45 Mins",
    image: "../images/journal.png",
    hashtags: ["#selflove", "#Creative"],
    blub: ['selflove', 'self', 'creative'],
    mood: "creative"
  },
  {
    id: 4,
    title: "Leave a Hidden Sticky Note",
    content: "Write a sweet, encouraging message on a sticky note and hide it in your partner's wallet or laptop where they will find it later.",
    time: "5 Mins",
    image: "../images/sticky-note.jpg",
    hashtags: ["#partner", "#Quick"],
    blub: ['partner', 'partner love', 'quick'],
    mood: "romantic"
  },
  {
    id: 5,
    title: "Cook a Meal Together",
    content: "Pick a new recipe, gather the ingredients, and cook dinner together while playing your favorite background music.",
    time: "60 Mins",
    image: "../images/veggie.png",
    hashtags: ["#partner", "#DeepConnection"],
    blub: ['partner', 'partner love', 'deep', 'deep connection'],
    mood: "energetic"
  },
  {
    id: 6,
    title: "Buy Coffee for a Stranger",
    content: "Next time you are at a cafe, pay for the order of the person behind you in line to brighten their day.",
    time: "5 Mins",
    image: "../images/mug.png",
    hashtags: ["#community", "#Quick"],
    blub: ['community', 'quick'],
    mood: "energetic"
  },
  {
    id: 7,
    title: "Neighborhood Cleanup",
    content: "Take a trash bag and gloves on your next walk. Pick up any litter you see in your local park or street.",
    time: "30 Mins",
    image: "../images/cleanup.jpg",
    hashtags: ["#community", "#Creative"],
    blub: ['community', 'creative'],
    mood: "energetic"
  },
  {
    id: 8,
    title: "Plan a Surprise Indoor Picnic",
    content: "Clear the living room floor, lay down a blanket, and serve simple finger foods and wine for a cozy date night.",
    time: "40 Mins",
    image: "../images/picnic.jpg",
    hashtags: ["#partner", "#Creative"],
    blub: ['partner', 'creative', 'partner love'],
    mood: "romantic"
  },
  {
    id: 9,
    title: "Mindful Breathing Exercise",
    content: "Sit quietly and practice the 4-7-8 breathing technique to center your mind and reduce stress.",
    time: "10 Mins",
    image: "../images/yoga.png",
    hashtags: ["#selflove", "#Quick"],
    blub: ['selflove', 'self', 'quick'],
    mood: "quiet"
  },
  {
    id: 10,
    title: "Volunteer at an Animal Shelter",
    content: "Spend a couple of hours walking dogs or petting cats at your local animal rescue center.",
    time: "120 Mins",
    image: "../images/shelter.jpg",
    hashtags: ["#community", "#DeepConnection"],
    blub: ['community', 'deep connection'],
    mood: "energetic"
  },
  {
    id: 11,
    title: "Try a New Recipe for Yourself",
    content: "Treat yourself like a guest. Cook a meal you've never tried before, plate it beautifully, and enjoy.",
    time: "45 Mins",
    image: "../images/dining.jpg",
    hashtags: ["#selflove", "#Creative"],
    blub: ['self', 'selflove', 'creative'],
    mood: "creative"
  },
  {
    id: 12,
    title: "Send a Mid-Day Appreciation Text",
    content: "Text your partner out of the blue to tell them one specific thing you love and appreciate about them.",
    time: "2 Mins",
    image: "../images/text.jpg",
    hashtags: ["#partner", "#Quick"],
    blub: ['partner', 'quick'],
    mood: "romantic"
  },
  {
    id: 13,
    title: "Leave a Glowing Review",
    content: "Think of a local small business you love and leave them a 5-star review detailing what makes them great.",
    time: "10 Mins",
    image: "../images/review.jpg",
    hashtags: ["#community", "#Quick"],
    blub: ['community', 'quick'],
    mood: "energetic"
  },
  {
    id: 14,
    title: "Stargazing and Conversing",
    content: "Go outside on a clear night, lay out a blanket, and take turns asking deep, open-ended questions.",
    time: "60 Mins",
    image: "../images/stars.jpg",
    hashtags: ["#partner", "#DeepConnection"],
    blub: ['partner', 'partner love', 'deep connection'],
    mood: "romantic"
  },
  {
    id: 15,
    title: "Solo Nature Walk",
    content: "Go for a walk in a local park or forest without your phone or music. Just listen to the sounds of nature.",
    time: "30 Mins",
    image: "../images/forest.png",
    hashtags: ["#selflove", "#DeepConnection"],
    blub: ['selflove', 'self', 'deep'],
    mood: "quiet"
  },
  {
    id: 16,
    title: "Donate Unused Books",
    content: "Gather books you've already read and drop them off at a local Little Free Library for others to enjoy.",
    time: "20 Mins",
    image: "../images/books.jpg",
    hashtags: ["#community", "#Creative"],
    blub: ['community', 'creative'],
    mood: "creative"
  },
  {
    id: 17,
    title: "Create a Shared Playlist",
    content: "Compile a music playlist of songs that remind you of your favorite memories with your partner.",
    time: "20 Mins",
    image: "../images/playlist.png",
    hashtags: ["#partner", "#Creative"],
    blub: ['partner', 'love', `editor's pick`,'creative'],
    mood: "romantic"
  },
  {
    id: 18,
    title: "Check on an Elderly Neighbor",
    content: "Knock on the door of an older neighbor just to say hello and see if they need any errands run.",
    time: "15 Mins",
    image: "../images/neighbour.jpg",
    hashtags: ["#community", "#DeepConnection"],
    blub: ['community', 'deep', 'deep connection'],
    mood: "energetic"
  },
  {
    id: 19,
    title: "Mirror Affirmations",
    content: "Stand in front of the mirror, look yourself in the eyes, and say three positive affirmations out loud.",
    time: "5 Mins",
    image: "../images/journal.png",
    hashtags: ["#selflove", "#Quick"],
    blub: ['self', 'selflove', 'quick'],
    mood: "quiet"
  },
  {
    id: 20,
    title: "Give a 15-Minute Massage",
    content: "Help your partner unwind after a long day by offering a relaxing shoulder or foot massage.",
    time: "15 Mins",
    image: "../images/massage.png",
    hashtags: ["#partner", "#DeepConnection"],
    blub: ['partner', 'partner love', 'deep connection'],
    mood: "romantic"
  },
  {
    id: 21,
    title: "Morning Gratitude Journaling",
    content: "Start your day by writing down three specific things you are grateful for. Focus on small joys.",
    time: "10 Mins",
    image: "../images/note.png",
    hashtags: ["#selflove", "#Reflection", "#Quick"],
    blub: ["selflove", "self", "reflection", "quick"],
    mood: "quiet"
  },
  {
    id: 22,
    title: "Unplugged Evening Walk",
    content: "Walk around your block with your partner. Leave your phones at home and focus entirely on the conversation.",
    time: "20 Mins",
    image: "../images/forest.png",
    hashtags: ["#partner", "#DeepConnection", "#Quick"],
    blub: ["partner", "partner love", "deep connection", "quick"],
    mood: "romantic"
  },
  {
    id: 23,
    title: "Bake for the Neighborhood",
    content: "Spend the afternoon baking cookies and distribute them to people in your immediate community.",
    time: "90 Mins",
    image: "../images/veggie.png",
    hashtags: ["#community", "#Creative"],
    blub: ["community", "creative", "bake"],
    mood: "creative"
  },
  {
    id: 24,
    title: "Handwritten Thank You Note",
    content: "Write a physical thank-you card to someone who has made a difference in your life recently.",
    time: "15 Mins",
    image: "../images/note.png",
    hashtags: ["#community", "#Quick", "#Reflection"],
    blub: ["community", "quick", "reflection", "note"],
    mood: "quiet"
  },
  {
    id: 25,
    title: "Guided Meditation Session",
    content: "Find a quiet space and follow a guided meditation focused on self-compassion and inner peace.",
    time: "15 Mins",
    image: "../images/yoga.png",
    hashtags: ["#selflove", "#Quick"],
    blub: ["self", "selflove", "quick", "meditation"],
    mood: "quiet"
  },
  {
    id: 26,
    title: "Plan a Future Adventure",
    content: "Sit down with a map and plan out a 'someday' trip. Dream big about the places you'll see together.",
    time: "30 Mins",
    image: "../images/journal.png",
    hashtags: ["#partner", "#Creative"],
    blub: ["partner", "partner love", "creative", "travel"],
    mood: "energetic"
  },
  {
    id: 27,
    title: "Tea Ceremony for One",
    content: "Brew a pot of high-quality tea. Focus on the aroma and heat of the mug without any distractions.",
    time: "15 Mins",
    image: "../images/tea.png",
    hashtags: ["#selflove", "#Quick"],
    blub: ["self", "selflove", "quick", "tea"],
    mood: "quiet"
  },
  {
    id: 28,
    title: "Pay for the Person Behind You",
    content: "While at a drive-thru, pay for the person behind you to create a simple ripple of kindness.",
    time: "2 Mins",
    image: "../images/mug.png",
    hashtags: ["#community", "#Quick"],
    blub: ["community", "quick", "kindness"],
    mood: "energetic"
  },
  {
    id: 29,
    title: "Deep Listening Session",
    content: "Ask your partner to talk for 10 minutes. Your only job is to listen without interrupting.",
    time: "15 Mins",
    image: "../images/tea.png",
    hashtags: ["#partner", "#DeepConnection"],
    blub: ["partner", "partner love", "deep connection", "listening"],
    mood: "quiet"
  },
  {
    id: 30,
    title: "Sketch Your Surroundings",
    content: "Grab a pencil and paper. Spend time sketching a simple object in your room or a view from your window.",
    time: "30 Mins",
    image: "../images/journal.png",
    hashtags: ["#selflove", "#Creative"],
    blub: ["self", "selflove", "creative", "sketch"],
    mood: "creative"
  },
  {
    id: 31,
    title: "Nature Photography Walk",
    content: "Head to a local park and try to capture 5 high-quality photos of local flora or fauna with your phone.",
    time: "45 Mins",
    image: "../images/forest.png",
    hashtags: ["#selflove", "#Creative"],
    blub: ["self", "selflove", "creative", "photography"],
    mood: "creative"
  },
  {
    id: 32,
    title: "Memory Jar Creation",
    content: "Find an empty jar. Write down your favorite memory with your partner on a scrap of paper and start a collection.",
    time: "10 Mins",
    image: "../images/journal.png",
    hashtags: ["#partner", "#Quick", "#Reflection"],
    blub: ["partner", "partner love", "quick", "memory"],
    mood: "romantic"
  },
  {
    id: 33,
    title: "Support a Local Artist",
    content: "Visit a local gallery or browse a local creator's online shop. Share their work on your social media.",
    time: "20 Mins",
    image: "../images/review.jpg",
    hashtags: ["#community", "#Creative"],
    blub: ["community", "creative", "support"],
    mood: "energetic"
  },
  {
    id: 34,
    title: "DIY Face Mask",
    content: "Mix honey and oats for a natural, soothing face mask. Relax for 15 minutes while it works its magic.",
    time: "20 Mins",
    image: "../images/tea.png",
    hashtags: ["#selflove", "#Quick"],
    blub: ["self", "selflove", "quick", "spa"],
    mood: "quiet"
  },
  {
    id: 35,
    title: "Couples' Yoga Flow",
    content: "Follow a beginner-friendly partner yoga video to improve your physical and emotional connection.",
    time: "30 Mins",
    image: "../images/yoga.png",
    hashtags: ["#partner", "#DeepConnection"],
    blub: ["partner", "partner love", "yoga", "connection"],
    mood: "energetic"
  },
  {
    id: 36,
    title: "Plant a Tree or Flower",
    content: "Contribute to your local ecosystem by planting something native in your garden or a community-approved spot.",
    time: "60 Mins",
    image: "../images/cleanup.jpg",
    hashtags: ["#community", "#DeepConnection"],
    blub: ["community", "nature", "planting"],
    mood: "creative"
  },
  {
    id: 37,
    title: "Write a Poem for Yourself",
    content: "Don't worry about rhyming. Just write a few lines celebrating your own resilience and growth.",
    time: "15 Mins",
    image: "../images/note.png",
    hashtags: ["#selflove", "#Reflection", "#Creative"],
    blub: ["self", "selflove", "writing", "creative"],
    mood: "creative"
  },
  {
    id: 38,
    title: "Karaoke Night for Two",
    content: "Turn up the volume and sing your favorite duets together in the living room. No judgment allowed.",
    time: "30 Mins",
    image: "../images/playlist.png",
    hashtags: ["#partner", "#Quick"],
    blub: ["partner", "partner love", "music", "quick"],
    mood: "energetic"
  },
  {
    id: 39,
    title: "Donate to a Food Bank",
    content: "Check your pantry for unexpired staples and drop them off at your nearest community food collection point.",
    time: "30 Mins",
    image: "../images/veggie.png",
    hashtags: ["#community", "#Quick"],
    blub: ["community", "quick", "donation"],
    mood: "energetic"
  },
  {
    id: 40,
    title: "Evening Meditation by Candlelight",
    content: "Light a candle and focus on the flame for 10 minutes, letting go of all the day's stressors.",
    time: "10 Mins",
    image: "../images/stars.jpg",
    hashtags: ["#selflove", "#Quick"],
    blub: ["self", "selflove", "meditation", "quiet"],
    mood: "quiet"
  },
  {
    id: 41,
    title: "Recreate Your First Date",
    content: "Whether it’s the same restaurant or the same activity, spend the evening reminiscing about how you met.",
    time: "120 Mins",
    image: "../images/dining.jpg",
    hashtags: ["#partner", "#DeepConnection"],
    blub: ["partner", "partner love", "romance", "deep"],
    mood: "romantic"
  },
  {
    id: 42,
    title: "Seed Bombing",
    content: "Create 'seed bombs' with wildflower seeds and clay, then toss them into barren local patches to encourage growth.",
    time: "40 Mins",
    image: "../images/cleanup.jpg",
    hashtags: ["#community", "#Creative"],
    blub: ["community", "creative", "nature"],
    mood: "creative"
  },
  {
    id: 43,
    title: "Dance Like No One is Watching",
    content: "Put on your favorite upbeat song and move your body however feels good for five minutes.",
    time: "5 Mins",
    image: "../images/playlist.png",
    hashtags: ["#selflove", "#Quick"],
    blub: ["self", "selflove", "energy", "quick"],
    mood: "energetic"
  },
  {
    id: 44,
    title: "Handwritten Love Letter",
    content: "Go beyond a text. Write a full page detailing the impact your partner has had on your life.",
    time: "20 Mins",
    image: "../images/note.png",
    hashtags: ["#partner", "#Reflection"],
    blub: ["partner", "partner love", "writing", "reflection"],
    mood: "romantic"
  },
  {
    id: 45,
    title: "Volunteer at a Library",
    content: "Offer to help shelve books or assist with a community reading event at your local public library.",
    time: "90 Mins",
    image: "../images/books.jpg",
    hashtags: ["#community", "#DeepConnection"],
    blub: ["community", "volunteer", "books"],
    mood: "quiet"
  },
  {
    id: 46,
    title: "Take a Bubble Bath",
    content: "Set the mood with music and essential oils. Let the warm water soak away any physical tension.",
    time: "30 Mins",
    image: "../images/tea.png",
    hashtags: ["#selflove", "#DeepConnection"],
    blub: ["self", "selflove", "spa", "deep"],
    mood: "quiet"
  },
  {
    id: 47,
    title: "Blind Taste Test",
    content: "Take turns blindfolding each other and guessing different snacks or ingredients. A fun way to engage the senses.",
    time: "20 Mins",
    image: "../images/veggie.png",
    hashtags: ["#partner", "#Quick"],
    blub: ["partner", "partner love", "fun", "quick"],
    mood: "energetic"
  },
  {
    id: 48,
    title: "Write a Letter to Your Local Rep",
    content: "Express your appreciation or concern for a local issue to your city council or representative.",
    time: "30 Mins",
    image: "../images/review.jpg",
    hashtags: ["#community", "#Reflection"],
    blub: ["community", "action", "writing"],
    mood: "energetic"
  },
  {
    id: 49,
    title: "Learn 5 Phrases in a New Language",
    content: "Choose a language you've always been curious about and learn how to say 'love', 'peace', and 'thank you'.",
    time: "15 Mins",
    image: "../images/journal.png",
    hashtags: ["#selflove", "#Creative"],
    blub: ["self", "selflove", "learning", "quick"],
    mood: "creative"
  },
  {
    id: 50,
    title: "Watch the Sunset Together",
    content: "Find a high vantage point and sit in silence as the sun goes down. A perfect end to any day.",
    time: "20 Mins",
    image: "../images/stars.jpg",
    hashtags: ["#partner", "#Quick", "#Reflection"],
    blub: ["partner", "partner love", "nature", "quick"],
    mood: "romantic"
  }
];

export default discover;