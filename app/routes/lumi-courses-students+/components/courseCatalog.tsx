import {
  FlexFull,
  HStackFull,
  VStackFull,
  WrapFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import MainPageContentContainer from "~/routes/building/mainPageContainer";
import CourseCatalogueCard from "./courseCatalogCard";
import { NavLink } from "@remix-run/react";
import CourseCatalogWrap from "./courseCatalogWrap";

export interface CourseForCarousel {
  id: string;
  type: "course";
  title: string;
  description: string;
  subject: string;
  minGrade: number;
  maxGrade: number;
  imageLink: string;
  courseLink: string;
  code: string;
  overview?: string;
}

export const currentCourses: CourseForCarousel[] = [
  // Vocabulary Builder Level One
  {
    id: "1",
    code: "vocab-micro-0103",
    type: "course",
    title: "Vocabulary Builder Level One",
    description:
      "A dynamic 3-lesson course introducing 30 carefully selected words through interactive stories and activities. Students explore each word's meaning and context through creative exercises that connect vocabulary to everyday experiences. The course uses engaging activities and guided practice to foster curiosity and build foundational language skills.",
    subject: "Language Arts",
    minGrade: 1,
    maxGrade: 3,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/vocab-micro-level-1.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // Vocabulary Builder Level Two
  {
    id: "2",
    code: "vocab-micro-0405",
    type: "course",
    title: "Vocabulary Builder Level Two",
    description:
      "A comprehensive course exploring 30 advanced, curriculum-aligned words through informational texts and interactive stories. Students investigate each word's meaning and applications across different contexts through guided discussions with Lumi. The course bridges language arts with science while developing critical thinking and communication skills.",
    subject: "Language Arts",
    minGrade: 4,
    maxGrade: 5,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/vocab-micro-level-2.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // Vocabulary Builder Level Three
  {
    id: "3",
    code: "vocab-micro-0608",
    type: "course",
    title: "Vocabulary Builder Level Three",
    description:
      "An intensive course mastering 30 curriculum-aligned words through analytical exercises and problem-solving scenarios. Students explore academic thinking vocabulary, descriptive language, and scientific terminology. The course integrates cognitive skills with language acquisition, preparing students for advanced coursework through cross-disciplinary applications.",
    subject: "Language Arts",
    minGrade: 6,
    maxGrade: 8,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/vocab-micro-level-3.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // Vocabulary Builder Level Four
  {
    id: "4",
    code: "vocab-micro-0910",
    type: "course",
    title: "Vocabulary Builder Level Four",
    description:
      "An advanced course focusing on 30 high-impact words essential for academic discourse and technological literacy. Through engagement with complex texts and technical documentation, students master terminology for analytical thinking, persuasive writing, and emerging technologies, preparing for advanced placement courses and college-level work.",
    subject: "Language Arts",
    minGrade: 9,
    maxGrade: 10,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/vocab-micro-level-4.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // Vocabulary Builder Level Five
  {
    id: "5",
    code: "vocab-micro-1112",
    type: "course",
    title: "Vocabulary Builder Level Five",
    description:
      "An advanced course exploring 30 specialized terms essential for philosophical inquiry, literary analysis, and research methodologies. Students engage with theoretical frameworks, analyze complex texts, and master scholarly discourse conventions, preparing for undergraduate-level academic research and advanced theoretical thinking.",
    subject: "Language Arts",
    minGrade: 11,
    maxGrade: 12,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/vocab-micro-level-5.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // Crash Course Study Skills
  {
    id: "6",
    code: "cc-skills-0712",
    type: "course",
    title: "Crash Course Study Skills",
    description:
      "An engaging course built around the Crash Course series exploring proven study techniques. Students discover effective time management, strategic note-taking, memory enhancement, and methods for reducing test anxiety. Each module combines video lessons with practical activities to develop lifelong learning habits and academic success strategies.",
    subject: "Study Skills",
    minGrade: 7,
    maxGrade: 12,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/cc-study-skills.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // The Legacy of Martin Luther King Jr.
  {
    id: "7",
    code: "mlk-jr-0105",
    type: "course",
    title: "The Legacy of Martin Luther King Jr.",
    description:
      "An exploration of Dr. King's journey from his early life through his leadership in the Civil Rights Movement. Students learn about his philosophy of nonviolent resistance, study pivotal moments like the Montgomery Bus Boycott and March on Washington, and understand his enduring impact on social justice.",
    subject: "Social Studies",
    minGrade: 6,
    maxGrade: 12,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/mlk-mini-course.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // The Legacy of Martin Luther King Jr. Level Two
  {
    id: "8",
    code: "mlk-jr-0612",
    type: "course",
    title: "The Legacy of Martin Luther King Jr.",
    description:
      "An exploration of Dr. King's journey from his early life through his leadership in the Civil Rights Movement. Students learn about his philosophy of nonviolent resistance, study pivotal moments like the Montgomery Bus Boycott and March on Washington, and understand his enduring impact on social justice.",
    subject: "Social Studies",
    minGrade: 1,
    maxGrade: 5,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/mlk-mini-course.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // The Life and Teachings of the Buddha
  {
    id: "9",
    code: "buddha-life-0105",
    type: "course",
    title: "The Life and Teachings of the Buddha",
    description:
      "Students discover Siddhartha Gautama's journey from prince to spiritual teacher. The course explores fundamental Buddhist concepts like the Four Noble Truths and Noble Eightfold Path using relatable metaphors. Through interactive lessons, students learn how the Buddha's messages of kindness and mindfulness continue inspiring people worldwide.",
    subject: "Social Studies",
    minGrade: 6,
    maxGrade: 12,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/buddha-mini-course.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // The Life and Teachings of the Buddha Level Two
  {
    id: "10",
    code: "buddha-life-0612",
    type: "course",
    title: "The Life and Teachings of the Buddha",
    description:
      "Students discover Siddhartha Gautama's journey from prince to spiritual teacher. The course explores fundamental Buddhist concepts like the Four Noble Truths and Noble Eightfold Path using relatable metaphors. Through interactive lessons, students learn how the Buddha's messages of kindness and mindfulness continue inspiring people worldwide.",
    subject: "Social Studies",
    minGrade: 1,
    maxGrade: 5,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/buddha-mini-course.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // Mastering Dependent and Independent Clauses
  {
    id: "11",
    code: "clauses-1112",
    type: "course",
    title: "Mastering Dependent and Independent Clauses",
    description:
      "An advanced lesson exploring how skilled writers build powerful sentences by combining different types of clauses. Through practical examples and guided practice, students learn to express complex ideas clearly and effectively, developing sophisticated writing techniques essential for college-level composition.",
    subject: "Language Arts",
    minGrade: 11,
    maxGrade: 12,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/bookstack.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // Understanding Linking Verbs
  {
    id: "12",
    code: "linking-verbs-0608",
    type: "course",
    title: "Understanding Linking Verbs",
    description:
      "Students discover how special verbs bridge subjects with their descriptions and states of being. The course distinguishes between action and linking verbs, exploring their various roles in sentences. Through examples and exercises, students master using linking verbs for clear, precise communication.",
    subject: "Language Arts",
    minGrade: 6,
    maxGrade: 8,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/bookstack.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // Lumi's Swirling and Glowing Night
  {
    id: "13",
    code: "lumi-art-0912",
    type: "course",
    title: "Lumi's Swirling and Glowing Night",
    description:
      "Join Lumi's creative journey exploring Vincent van Gogh's 'The Starry Night.' Students discover how art mirrors inner emotions and enables self-expression. Through guided discussions, learners explore personal perspective and artistic appreciation while developing emotional intelligence.",
    subject: "Emotional Intelligence",
    minGrade: 9,
    maxGrade: 12,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/lumi-starry-night.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // Element Adventures
  {
    id: "14",
    code: "elements-0105",
    type: "course",
    title: "Element Adventures",
    description:
      "A whimsical journey through chemistry where elements become unique characters with distinct personalities. Students meet Hydrogen the explorer, Helium the philosopher, Lithium the counselor, and Beryllium the artist, learning how their personalities connect to real chemical properties through engaging stories.",
    subject: "Science",
    minGrade: 2,
    maxGrade: 5,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/kids-chemistry.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // Be a Prompt Engineering Master
  {
    id: "15",
    code: "prompt-0712",
    type: "course",
    title: "Be a Prompt Engineering Master",
    description:
      "Students learn to harness AI through effective prompt engineering techniques. The course covers zero-shot, few-shot, and chain-of-thought prompting, teaching students to craft precise, contextually rich prompts. They develop critical thinking and communication skills essential for future technology interaction.",
    subject: "Computer Science",
    minGrade: 7,
    maxGrade: 12,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/prompt-engineering.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
  // Python for Beginners
  {
    id: "16",
    code: "python-0612",
    type: "course",
    title: "Python for Beginners",
    description:
      "Start your coding journey with Python, one of the most beginner-friendly programming languages! Learn essential programming concepts while writing and testing code in your own interactive Google Colab notebook. Perfect for students new to programming who want to build a strong foundation in computer science.",
    subject: "Computer Science",
    minGrade: 6,
    maxGrade: 12,
    courseLink: "",
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/learnWithLumi/course-thumbnails/micro-courses/python-beginners.webp?quality=50",
    overview: `
    <h2>Overview</h2>
      <p>
        This is the overview for the course.
      </p>
    `,
  },
];

export default function CourseCatalogue() {
  const isAdmin = false;
  const topPosition = `${
    isAdmin ? "top-[8svh] md:top-[8.5svh]" : "top-[7svh] md:top-[9svh]"
  }`;
  const containerHeight = `${
    isAdmin ? "h-92svh md:h-91.5svh" : "h-93svh md:h-91svh"
  }`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <MainPageContentContainer
      noDots
      childPadding=""
      topPosition={topPosition}
      scrollContainerHeight={containerHeight}
      maxWidth="max-w-100vw"
      scrollProgressColor="bg-col-200"
    >
      <VStackFull className={`${!isAdmin && "pb-10vh"} relative`}>
        <HStackFull className="text-col-700 text-xs justify-between px-1vh sticky top-0 z-20 bg-white">
          <button
            onClick={() => scrollToSection("beta")}
            className="hover:text-col-900"
          >
            free beta
          </button>
          <button
            onClick={() => scrollToSection("elementary")}
            className="hover:text-col-900"
          >
            elementary
          </button>
          <button
            onClick={() => scrollToSection("middle")}
            className="hover:text-col-900"
          >
            middle school
          </button>
          <button
            onClick={() => scrollToSection("high")}
            className="hover:text-col-900"
          >
            high school
          </button>
        </HStackFull>
        <CourseCatalogWrap id="beta" title="free beta">
          {currentCourses.map((course) => (
            <CourseCatalogueCard key={course.id} {...course} />
          ))}
        </CourseCatalogWrap>
        <CourseCatalogWrap id="elementary" title="elementary">
          {currentCourses.map((course) => (
            <CourseCatalogueCard key={course.id} {...course} />
          ))}
        </CourseCatalogWrap>
        <CourseCatalogWrap id="middle" title="middle school">
          {currentCourses.map((course) => (
            <CourseCatalogueCard key={course.id} {...course} />
          ))}
        </CourseCatalogWrap>
        <CourseCatalogWrap id="high" title="high school">
          {currentCourses.map((course) => (
            <CourseCatalogueCard key={course.id} {...course} />
          ))}
        </CourseCatalogWrap>
      </VStackFull>
    </MainPageContentContainer>
  );
}
