import rhymeHero from "../assets/RhymeHero_SS.PNG";
import soundWrite from "../assets/SoundWrite_SS.PNG";
import numberBonds from "../assets/NumberBonds_SS.PNG";
import phraseFind from "../assets/PhraseFind_SS.PNG";

import fruitMerge from "../assets/FruitMerge_Image.png";
import lightspeed from "../assets/Lightspeed_Image.png";
import flyingBats from "../assets/FlyingBats_Image.png";
import apocalypseWars from "../assets/ApocalypseWars_Image.png";


// Add/keep your games here and set category: "app" or "other"
const games = [
    // App games
    {
      id: "rhyme-hero",
      title: "RhymeHero",
      image: rhymeHero,
      summary:
        "A fast and fun word game! You’ll see a word on the screen and four choices below it. Your mission: pick the word that rhymes. Earn points for quick, correct answers and become the ultimate Rhyme Hero. Builds phonological awareness and strengthens reading skills by helping players recognize sound patterns and rhymes in words.",
      point: "Word Recognition • Phonics",
      category: "app",
    //   links: [{ label: "Info", href: "/games/focus-pop" }],
    },
    {
      id: "sound-write",
      title: "SoundWrite",
      image: soundWrite,
      summary: "Listen closely! A word is spoken aloud, and four written options appear on screen. Choose the option that matches the sound you heard to test your ears and sharpen your word skills. Strengthens auditory processing and reading by connecting spoken language to written words.",
      point: "Spelling • Listening",
      category: "app",
    },
    {
        id: "number-bonds",
        title: "NumberBonds",
        image: numberBonds,
        summary: "Fill in the blank! Each equation is missing a number, and it’s your job to figure out the right one. Solve quickly to strengthen your math fluency and accuracy. Improves number sense and problem-solving by practicing how numbers combine to form bonds in equations.",
        point: "Math Fluency • Problem Solving",
        category: "app",
    },
    {
        id: "phrase-find",
        title: "PhraseFind",
        image: phraseFind,
        summary: "Listen to a short, story-style recording and answer the question that follows. Pay attention to details in the audio to pick the correct answer and test your comprehension. Strengthens listening comprehension and attention to detail by connecting spoken language to meaning.",
        point: "Attention • Comprehension",
        category: "app",
    },
  
    // Other (not part of the app)
    {
      id: "fruit-merge",
      title: "Fruit Merge",
      image: fruitMerge,
      summary: "Drop fruits of different sizes into the bin and watch matching fruits merge into bigger ones—just like the classic Suika game. Plan your drops to create combos and keep the stack from overflowing. Builds spatial reasoning and planning by predicting trajectories, managing space, and timing merges.",
      point: "Spatial Reasoning • Planning",
      category: "other",
    //   links: [{ label: "Demo", href: "https://example.com/brick-bounce" }],
    },
    {
      id: "lightspeed",
      title: "Lightspeed",
      image: lightspeed,
      summary: "Blast off into the galaxy! Travel through the cosmos, battle enemies, and collect vital resources as you fight to survive as long as you can. Each run is a test of reflexes, strategy, and endurance. Builds strategic thinking, resource management, and quick decision-making under pressure.",
      point: "Strategy • Reflexes",
      category: "other",
    },
    {
        id: "flying-bats",
        title: "Flying Bats",
        image: flyingBats,
        summary: "Take aim, launch your bats, and topple tricky duck defenses! Each level brings new obstacles and challenges—line up the perfect shot and watch the chaos unfold. Sharpens aim, planning, and creative problem-solving through physics-based gameplay.",
        point: "Precision • Strategy",
        category: "other",
    },
    {
        id: "apocalypse-wars",
        title: "Apocalypse Wars",
        image: apocalypseWars,
        summary: "The world is ruled by fungi… until the zombies arrive. Tap, upgrade, and unleash your defenses to hold back endless hordes in this frantic battle for survival. How long can your fungal empire last? Encourages quick reflexes and resource management in a fast-paced setting.",
        point: "Resource Management • Focus",
        category: "other",
    },
  ];
  
  export default games;
  