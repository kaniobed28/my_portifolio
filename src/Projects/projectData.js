/**
 * `featured` projects render as full-width editorial rows at the top of the
 * section; everything else falls through to the compact archive grid below.
 */
const projects = [
  {
    title: 'Dropping',
    subtitle: 'Ride-hailing & delivery platform',
    year: '2026',
    featured: true,
    description:
      'A call-based ride-hailing and courier platform for Ghana. Riders hail a ride, nearby drivers claim it through an expanding-ring dispatch, and the fare is agreed on an in-app voice call — no phone numbers exchanged. Rider and driver ship as both Flutter apps and Next.js web apps over one shared fare engine, backed by an authoritative NestJS core with PostGIS matching and Redis, plus a Partner API that lets businesses push their own deliveries into the driver network.',
    tags: ['Flutter', 'Next.js', 'NestJS', 'PostGIS', 'Redis', 'WebRTC', 'Firebase'],
    image: '/images/dropping.png',
    liveLink: 'https://dropping-client.vercel.app/',
  },
  {
    title: 'Campus Sell',
    subtitle: 'Multi-vendor commerce platform',
    year: '2026',
    featured: true,
    description:
      'A marketplace where students and sellers run real storefronts. Personalized feed rails, Paystack checkout, order management, an integrated delivery system, buyer-to-seller voice calls, and an agentic shopping assistant that can search the catalogue, fill a basket and take you to checkout. Ships as a buyer client, a seller console and a native Flutter app over one headless Laravel commerce API.',
    tags: ['Next.js', 'Laravel', 'Flutter', 'Supabase', 'Redis', 'Paystack', 'Gemini'],
    image: '/images/campus-sell-logo-transparent.png',
    liveLink: 'https://campus-sell-client.vercel.app/',
  },
  {
    title: 'TapPay',
    subtitle: 'Contactless P2P payments',
    year: '2026',
    featured: true,
    description:
      'Two phones tap over NFC or scan a QR code to open a cryptographically signed payment session, and the money settles through Paystack — no card credentials ever pass between devices. NestJS and Prisma over Postgres, with the payment provider kept swappable behind an interface.',
    tags: ['Flutter', 'NestJS', 'Prisma', 'PostgreSQL', 'NFC', 'Paystack'],
    image: '/images/tappay.png',
    liveLink: 'https://tappay-nine.vercel.app/',
  },
  {
    title: 'Ghana Room Finder',
    subtitle: 'Rental marketplace',
    year: '2025',
    featured: true,
    description:
      'A marketplace for rooms and apartments in Ghana. Tenants search and filter listings by location and budget, landlords post and manage properties with photo uploads, and admins moderate what goes live — built on Firestore, Firebase Auth and Storage, with a NestJS backend in progress.',
    tags: ['React', 'Firebase', 'Firestore', 'NestJS'],
    image: '/images/ghana-room-finder.svg',
  },

  /* Archive */
  {
    title: 'Lille City Church',
    subtitle: 'Church platform',
    description:
      'A platform for the Lille assembly — event management, service resources and announcements.',
    tags: ['React'],
    image: '/images/logo-cop (1).gif',
    githubLink: 'https://github.com/kaniobed28/cop-lille',
    liveLink: 'https://lille-city-church.vercel.app/',
  },
  {
    title: 'Verbo',
    subtitle: 'Language learning',
    description:
      'An interactive language-learning app with daily challenges, pronunciation exercises, voice transcription and multilingual options.',
    tags: ['Flutter', 'Firebase'],
    image: '/images/verbo.jpg',
    githubLink: 'https://github.com/kaniobed28/verbo/',
    liveLink: 'https://verbo-obed.netlify.app/',
  },
  {
    title: 'Birthing Lovers Network',
    subtitle: 'Community site',
    description:
      'A site for the BLN Ghanaian community, with announcements, resources and event schedules for the SOM25 project.',
    tags: ['Flutter'],
    image: '/images/blnlogo.jpg',
    githubLink: 'https://github.com/kaniobed28/bln-official-site',
    liveLink: 'https://birthingloversnetwork.netlify.app/',
  },
  {
    title: 'SPEC-GEN',
    subtitle: 'Developer tooling',
    description:
      'A specification generator that helps developers draft specs quickly through a guided interface.',
    tags: ['React'],
    image: '/images/marketx.png',
    githubLink: 'https://github.com/kaniobed28/spec_generator',
    liveLink: 'https://spec-generator.netlify.app/',
  },
  {
    title: 'Quizz Mast',
    subtitle: 'Assessment tool',
    description:
      'An interactive quiz platform for teachers and educators to test their students’ knowledge.',
    tags: ['React'],
    image: '/images/quiz-app.png',
    githubLink: 'https://github.com/kaniobed28/quiz-app',
    liveLink: 'https://quizz-mast.netlify.app/',
  },
  {
    title: 'Class Room',
    subtitle: 'Learning platform',
    description:
      'An online classroom built with Alliance Française in mind, easing communication and material sharing between students and teachers.',
    tags: ['React'],
    image: '/images/quiz.png',
    liveLink: 'https://blt-classroom.netlify.app/',
  },
  {
    title: 'Memory FlashCard',
    subtitle: 'Study tool',
    description:
      'A tool for storing and reviewing words, their definitions and examples for better retention.',
    tags: ['React'],
    image: '/images/flashcard.jpg',
    liveLink: 'https://memory-flashcard.netlify.app/',
  },
  {
    title: 'Smart Box',
    subtitle: 'Browser game',
    description:
      'A reflex game that challenges players to click a randomly placed box against the clock.',
    tags: ['React'],
    image: '/images/smart-box.ico',
    liveLink: 'https://the-smart-box.netlify.app/',
  },
  {
    title: 'Power of PicoW',
    subtitle: 'Embedded / IoT',
    description:
      'A team project exploring the Pico W’s WiFi capabilities — streaming sensor data to the cloud over MQTT and plotting it live with Matplotlib.',
    tags: ['Python', 'MQTT', 'IoT'],
    image: '/images/picow.jpg',
    githubLink: 'https://github.com/kaniobed28/pico_w_project_work',
  },
  {
    title: 'Read It',
    subtitle: 'Desktop app',
    description:
      'A text-to-speech desktop app with control over playback speed and repetition, supporting English and French.',
    tags: ['Python'],
    image: '/images/readit.png',
    githubLink: 'https://github.com/kaniobed28/read_it_desktop_version',
  },
];

export default projects;
