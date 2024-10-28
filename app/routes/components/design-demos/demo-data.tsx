export const demoCourses = [
  {
    courseNumber: "01",
    courseName: "Embrace the Soft",
    courseDescription:
      "A Guide to Self-Compassion, this is a gentle course that guides you through the steps to nurture self-compassion, blending meditative techniques.",
  },
  {
    courseNumber: "02",
    courseName: "Playfulness as Power",
    courseDescription:
      "In Playfullness as Power, Pip helps you explore the wisdom of staying light-hearted and embracing curiosity as a path to deeper fulfillment.",
  },
];

export type EpisodeType = {
  episodeNumber: string;
  episodeTitle: string;
  episodeLength: string;
  episodeDescription: string;
};

export const episodes = [
  {
    episodeNumber: "ep 23",
    episodeTitle: "The Power of Play",
    episodeLength: "30 min",
    episodeDescription:
      "Pip explores how light-heartedness and curiosity reveal deeper fulfillment in life’s simplest moments.",
  },
  {
    episodeNumber: "ep 33",
    episodeTitle: "The Wisdom of Stillness",
    episodeLength: "30 min",
    episodeDescription:
      "In this episode, Pip delves into the quiet power of stillness, guiding listeners toward inner calm and clarity.",
  },
  {
    episodeNumber: "ep 44",
    episodeTitle: "The Art of Listening",
    episodeLength: "30 min",
    episodeDescription:
      "Pip unpacks the beauty of mindful listening as a way to connect deeply with ourselves and others.",
  },
  {
    episodeNumber: "ep 53",
    episodeTitle: "The Magic of Small Moments",
    episodeLength: "30 min",
    episodeDescription:
      "A gentle exploration of finding wonder in life’s small, often overlooked moments with Pip’s soft wisdom.",
  },
];

export const testimonials = [
  {
    name: "Lily",
    testimonial:
      "Pip’s podcast has been a source of light and comfort for me. His gentle wisdom and soothing voice always leave me feeling uplifted.",
  },
  {
    name: "Sam",
    testimonial:
      "I love listening to Pip’s podcast on my morning walks. His stories and reflections help me start my day with a sense of calm and joy.",
  },
  {
    name: "Alex",
    testimonial:
      "Pip’s podcast is like a warm hug for the soul. His words are a reminder to slow down and savor the beauty of everyday life.",
  },
  {
    name: "Jess",
    testimonial:
      "Listening to Pip’s podcast is like taking a deep breath of fresh air. His gentle reminders to be kind to ourselves are a balm for the heart.",
  },
  {
    name: "Ella",
    testimonial:
      "Pip’s podcast has become a cherished part of my self-care routine. His stories and reflections always leave me feeling inspired and uplifted.",
  },
];

export type UpcomingEvent = {
  title: string;
  date: string;
  description: string;
};

export const upcomingEvents = [
  {
    title: "Fluff 'n' Focus: A Mindfulness Meet-Up",
    date: "November 1, 2024",
    description:
      "Learn techniques to stay grounded and focused through playful exercises and guided meditations led by Pip.",
  },
  {
    title: "Furry Fest: A Celebration of Your Inner Softness",
    date: "November 15, 2024",
    description:
      "This workshop helps participants embrace self-kindness and discover their 'inner fluff' through unique exercises designed by Pip.",
  },
  {
    title: "Whimsical Wander: Finding Joy in Small Moments",
    date: "December 5, 2024",
    description:
      "Join Pip in a cozy journey to uncover the magic in everyday life through small, mindful practices.",
  },
  {
    title: "Gentle Connections: Mindful Communication Workshop",
    date: "December 20, 2024",
    description:
      "A workshop focused on cultivating warmth and openness in communication, fostering kindness and empathy.",
  },
  {
    title: "Fluffy Reflections: A Year-End Gathering",
    date: "December 29, 2024",
    description:
      "Reflect on the past year with Pip, using gentle exercises to celebrate growth and set soft intentions for the new year.",
  },
];
