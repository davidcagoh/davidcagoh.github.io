// All editable text on the home page lives here.
// Edit a string, save, push to main, deploy. No need to touch any React code.

export const home = {
  // Portrait at the top of the sidebar. Set `src` to "" to hide it.
  // `objectPosition` controls which part of the photo is shown inside
  // the square crop — "X% Y%" where 0% 0% is top-left, 50% 50% is center.
  // For client/public/photos/feature.jpg the face sits upper-right, so
  // we pull the crop toward (55%, 25%).
  photo: {
    src: "/photos/feature.jpg",
    alt: "David Goh speaking on stage",
    objectPosition: "55% 25%",
  },

  // Top-left of the sidebar (small uppercase label).
  nameKicker: "David Goh",

  // Big display headline. Three lines, the middle one is colour-accented.
  hero: {
    line1: "Principled",
    line2: "mathematician,",
    line3: "purposeful builder.",
  },

  // Bio paragraphs in the sidebar. Add or remove paragraphs freely.
  bio: [
    "I want to be a force that shapes education. To that end, I will lead, build, and write.",
    "I am a Master of Science in Applied Computing (Applied Mathematics) student at the University of Toronto and a Singapore Public Service Commission (Teaching Service) Scholar on a public-sector leadership grooming path that begins after my studies.",
    "In the meantime, I am trying to become both an able mathematician and an able and purposeful builder.",
  ],

  // Three small chips in the sidebar (each gets its own icon, in order:
  // book, building, notebook). Add/remove items if you want to change them.
  tags: [
    "Applied Mathematics",
    "Education & public service",
    "Writing in progress",
  ],

  // Sidebar bottom paragraph.
  sidebarFooter:
    "This site is a compact record of direction and work: a place to locate the institutions, commitments, and projects shaping what I am trying to build.",

  // The Orientation card (top of the right column).
  orientation: {
    kicker: "Orientation",
    paragraphs: [
      "My long-run interest is in helping shape education through public leadership, institution-building, and careful thought. In the meantime, I write a lot to clarify my ideas and find little ways to test them.",
      "I tend to wander sideways from whatever I'm assigned. You'll see below that 80% of my brainpower is spent on sidequests spun off from something I read, overheard, or was trying to build so I could do less work. I'm sorry it isn't any neater; I guess that's me.",
    ],
    currentStudyLabel: "Current study",
    currentStudyLines: [
      "MScAC, Applied Mathematics",
      "University of Toronto",
    ],
    publicCommitmentLabel: "Public commitment",
    publicCommitmentText:
      "Singapore Public Service Commission (Teaching Service) Scholar",
  },

  // The Elsewhere card (external links).
  elsewhere: {
    kicker: "Elsewhere",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/davidcagoh?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        description:
          "Professional profile, experience, and writing-adjacent public record.",
      },
      {
        label: "GitHub",
        href: "https://github.com/davidcagoh",
        description: "Code, notebooks, and public technical work.",
      },
    ],
  },

  // The Threads section header (the four-thread gateway grid below it
  // pulls its content from content/threads.ts).
  threadsIntro: {
    kicker: "Threads",
    heading: "Four lines of work",
    blurb:
      "Each card opens a side page that walks through the projects on that thread, what produced them, and where they stand.",
  },

  // Bottom of the page.
  footer: {
    text: "Mathematics, the institutions that decide what gets built, and the craft of building things that clarify difficult questions in education.",
    ctaLabel: "Continue on LinkedIn",
    ctaHref:
      "https://www.linkedin.com/in/davidcagoh?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
};
