// All editable text on the home page lives here.
// Edit a string, save, push to main, deploy. No need to touch any React code.

export const home = {
  // Portrait at the top of the page. Set `src` to "" to hide it.
  // `objectPosition` controls which part of the photo is shown inside
  // the square crop — "X% Y%" where 0% 0% is top-left, 50% 50% is center.
  photo: {
    src: "/photos/feature.webp",
    alt: "David Goh",
    objectPosition: "55% 25%",
  },

  // Name displayed next to the portrait.
  name: "David Goh",

  // One line under the name. Affiliation + role.
  role: "MScAC, Applied Mathematics · University of Toronto",

  // A single short bio paragraph. Keep it tight — two or three sentences.
  bio:
    "I'm trying to become both an able mathematician and an able, purposeful builder. " +
    "Long run, I want to help shape education through public leadership, institution-building, and careful thought. " +
    "I'm a Singapore Public Service Commission (Teaching Service) Scholar.",

  // Inline contacts beside the bio. Add/remove freely.
  contacts: [
    { label: "Email", href: "mailto:davidcagoh@gmail.com" },
    { label: "GitHub", href: "https://github.com/davidcagoh" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/davidcagoh?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  ],

  // Heading above the four-thread bullet lists.
  selectedWorkHeading: "Selected work",

  // Link near the bottom that opens the long-form /about page.
  aboutLinkLabel: "More about me, in my own voice →",

  // Bottom-of-page line.
  footerText:
    "Mathematics, the institutions that decide what gets built, and the craft of building things that clarify difficult questions in education.",
};
