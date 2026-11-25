export const facilitiesData = [
  {
    id: 'flash-cards',
    title: 'Flash Cards',
    icon: '🃏',
    shortDesc: 'Vibrant, durable visual flash cards for alphabets, phonics, numbers, animals, and interactive classroom drills.',
    topic: 'Facility Enquiry - Flash Cards'
  },
  {
    id: 'charts',
    title: 'Charts',
    icon: '🗺️',
    shortDesc: 'Colorful educational wall charts covering alphabets, numbers, shapes, fruits, animals, and good habits.',
    topic: 'Facility Enquiry - Educational Charts'
  },
  {
    id: 'notebooks',
    title: 'Notebooks',
    icon: '📓',
    shortDesc: 'Child-friendly four-line, square-grid, two-line, and drawing notebooks crafted for early learners.',
    topic: 'Facility Enquiry - Student Notebooks'
  },
  {
    id: 'school-diaries',
    title: 'School Diaries',
    icon: '📔',
    shortDesc: 'Custom-designed school diaries for daily homework tracking, attendance, circulars, and parent-teacher notes.',
    topic: 'Facility Enquiry - School Diaries'
  }
];

function createAavishkaraBooks(levelKey, levelLabel) {
  const reader = [
    {
      id: `aav-${levelKey}-english-reader`,
      title: `Aavishkara ${levelLabel} English Reader`,
      subject: 'English',
      type: 'Reader Book',
      shortDesc: `${levelLabel} literacy, phonics, vocabulary & joyful reading.`,
      coverImage: `/covers/aav-${levelKey}-english-r.svg`
    },
    {
      id: `aav-${levelKey}-maths-reader`,
      title: `Aavishkara ${levelLabel} Maths Reader`,
      subject: 'Maths',
      type: 'Reader Book',
      shortDesc: `${levelLabel} number concepts, counting & logical reasoning.`,
      coverImage: `/covers/aav-${levelKey}-maths-r.svg`
    },
    {
      id: `aav-${levelKey}-evs-reader`,
      title: `Aavishkara ${levelLabel} EVS Reader`,
      subject: 'EVS',
      type: 'Reader Book',
      shortDesc: `${levelLabel} environmental awareness, nature & everyday life.`,
      coverImage: `/covers/aav-${levelKey}-evs-r.svg`
    },
    {
      id: `aav-${levelKey}-kannada-reader`,
      title: `Aavishkara ${levelLabel} Kannada Reader (Optional)`,
      subject: 'Kannada',
      type: 'Reader Book (Optional)',
      shortDesc: `Optional Kannada language reader for ${levelLabel} learners.`,
      coverImage: `/covers/aav-${levelKey}-kannada-r.svg`
    },
    {
      id: `aav-${levelKey}-hindi-reader`,
      title: `Aavishkara ${levelLabel} Hindi Reader (Optional)`,
      subject: 'Hindi',
      type: 'Reader Book (Optional)',
      shortDesc: `Optional Hindi language reader for ${levelLabel} learners.`,
      coverImage: `/covers/aav-${levelKey}-hindi-r.svg`
    }
  ];

  const practice = [
    {
      id: `aav-${levelKey}-english-practice`,
      title: `Aavishkara ${levelLabel} English Practice`,
      subject: 'English',
      type: 'Practice Book',
      shortDesc: `Guided English writing, tracing & phonics exercises.`,
      coverImage: `/covers/aav-${levelKey}-english-p.svg`
    },
    {
      id: `aav-${levelKey}-maths-practice`,
      title: `Aavishkara ${levelLabel} Maths Practice`,
      subject: 'Maths',
      type: 'Practice Book',
      shortDesc: `Hands-on number writing, counting & activity sheets.`,
      coverImage: `/covers/aav-${levelKey}-maths-p.svg`
    },
    {
      id: `aav-${levelKey}-evs-practice`,
      title: `Aavishkara ${levelLabel} EVS Practice`,
      subject: 'EVS',
      type: 'Practice Book',
      shortDesc: `Engaging EVS colouring, matching & picture activities.`,
      coverImage: `/covers/aav-${levelKey}-evs-p.svg`
    },
    {
      id: `aav-${levelKey}-kannada-practice`,
      title: `Aavishkara ${levelLabel} Kannada Practice (Optional)`,
      subject: 'Kannada',
      type: 'Practice Book (Optional)',
      shortDesc: `Optional Kannada akshara tracing and word practice.`,
      coverImage: `/covers/aav-${levelKey}-kannada-p.svg`
    },
    {
      id: `aav-${levelKey}-hindi-practice`,
      title: `Aavishkara ${levelLabel} Hindi Practice (Optional)`,
      subject: 'Hindi',
      type: 'Practice Book (Optional)',
      shortDesc: `Optional Hindi varnamala tracing and writing workbook.`,
      coverImage: `/covers/aav-${levelKey}-hindi-p.svg`
    }
  ];

  return { reader, practice };
}

export const seriesData = {
  playgroup: {
    id: 'playgroup',
    route: '/play-group',
    title: 'Play Group Series',
    description: 'Gentle first steps into colours, rhymes, strokes and joyful discovery.',
    paragraph: 'Designed for toddlers taking their very first classroom steps, building early sensory recognition, listening skills, pre-writing strokes, and playful curiosity.',
    age: 'PLAY GROUP',
    icon: '🎨',
    theme: 'orange',
    brands: {
      holykids: {
        brandId: 'holykids',
        brandName: 'Holy Kids',
        logo: '/holykids-logo.png',
        tagline: 'Gift your children - secure future with quality education.',
        books: {
          reader: [
            { id: 'pg-english-reader', title: 'My First ABC & Phonics', subject: 'English', type: 'Reader Book', shortDesc: 'Playful introduction to A–Z letters, picture association & sounds.', coverImage: '/covers/hk-pg-english-r.svg' },
            { id: 'pg-maths-reader', title: 'Numbers & Shapes Fun', subject: 'Maths', type: 'Reader Book', shortDesc: 'Recognising numbers 1–10, shapes, big & small concepts.', coverImage: '/covers/hk-pg-maths-r.svg' },
            { id: 'pg-rhymes-reader', title: 'Rhymes & Picture Book', subject: 'Rhymes & Stories', type: 'Reader Book', shortDesc: 'Cheerful nursery rhymes and colourful everyday pictures.', coverImage: '/covers/hk-pg-rhymes-r.svg' },
            { id: 'pg-kannada-reader', title: 'Kannada Akshara Parichaya (Optional)', subject: 'Kannada', type: 'Reader Book (Optional)', shortDesc: 'Optional introductory Kannada picture alphabet book.', coverImage: '/covers/hk-pg-kannada-r.svg' },
            { id: 'pg-hindi-reader', title: 'Hindi Varnamala Fun (Optional)', subject: 'Hindi', type: 'Reader Book (Optional)', shortDesc: 'Optional introductory Hindi swar picture reader.', coverImage: '/covers/hk-pg-hindi-r.svg' }
          ],
          practice: [
            { id: 'pg-patterns-practice', title: 'Strokes & Pattern Tracing', subject: 'English', type: 'Practice Book', shortDesc: 'Standing, sleeping & slanting lines for pencil control.', coverImage: '/covers/hk-pg-patterns-p.svg' },
            { id: 'pg-numbers-practice', title: 'Number Tracing 1–10', subject: 'Maths', type: 'Practice Book', shortDesc: 'Guided dot-to-dot number tracing and counting activities.', coverImage: '/covers/hk-pg-numbers-p.svg' },
            { id: 'pg-colouring-practice', title: 'Fun Colouring & Activity', subject: 'Art & Motor Skills', type: 'Practice Book', shortDesc: 'Crayon scribbling, matching and fine-motor development.', coverImage: '/covers/hk-pg-colouring-p.svg' }
          ]
        }
      },
      aavishkara: {
        brandId: 'aavishkara',
        brandName: 'Aavishkara Global Education',
        logo: '/aavishkara-logo.png',
        tagline: 'A joyful start to learning',
        books: createAavishkaraBooks('pg', 'Play Group')
      }
    }
  },
  beginner: {
    id: 'beginner',
    route: '/beginner',
    title: 'Beginner Series',
    description: 'First letters, sounds, numbers and wonderful everyday discoveries.',
    paragraph: 'A playful introduction to the world of learning, helping children recognise their first letters and sounds, understand numbers, and explore familiar things around them.',
    age: 'PRE-KG',
    icon: 'A B C',
    theme: 'blue',
    brands: {
      holykids: {
        brandId: 'holykids',
        brandName: 'Holy Kids',
        logo: '/holykids-logo.png',
        tagline: 'Gift your children - secure future with quality education.',
        books: {
          reader: [
            { id: 'b-english-reader', title: 'Literacy & Phonics Book', subject: 'English', type: 'Reader Book', shortDesc: 'Learn A-Z and phonics.', coverImage: '/english-1.jpg', gallery: ['/english-1.jpg', '/english-2.jpg', '/english-3.jpg', '/english-4.jpg', '/english-6.jpg', '/english-5.jpg'], pdfPreview: '/beginner-english-sample.pdf' },
            { id: 'b-maths-reader', title: 'Maths Reader Book', subject: 'Maths', type: 'Reader Book', shortDesc: 'Numbers and basic concepts.', coverImage: '/holykids-poster.png' },
            { id: 'b-evs-reader', title: 'EVS Reader Book', subject: 'EVS', type: 'Reader Book', shortDesc: 'Discover the world around us.', coverImage: '/holykids-poster.png' },
            { id: 'b-kannada-reader', title: 'Kali Nali (Kannada - Optional)', subject: 'Kannada', type: 'Reader & Practice Book', shortDesc: 'Learn and play with Kannada alphabets.', coverImage: '/beginner-6.jpg', gallery: ['/beginner-6.jpg', '/beginner-1.jpg', '/beginner-2.jpg', '/beginner-3.jpg', '/beginner-4.jpg', '/beginner-5.jpg'], pdfPreview: '/beginner-kannada-sample.pdf' },
            { id: 'b-hindi-reader', title: 'Hindi Akshar Reader (Optional)', subject: 'Hindi', type: 'Reader Book (Optional)', shortDesc: 'Optional beginner Hindi alphabet and picture reader.', coverImage: '/covers/hk-b-hindi-r.svg' }
          ],
          practice: [
            { id: 'b-english-practice', title: 'English Practice Book', subject: 'English', type: 'Practice Book', shortDesc: 'Tracing and writing A-Z.', coverImage: '/holykids-poster.png' },
            { id: 'b-maths-practice', title: 'Maths Practice Book', subject: 'Maths', type: 'Practice Book', shortDesc: 'Writing numbers 1-20.', coverImage: '/holykids-poster.png' },
            { id: 'b-evs-practice', title: 'EVS Practice Book', subject: 'EVS', type: 'Practice Book', shortDesc: 'Coloring and matching.', coverImage: '/holykids-poster.png' },
            { id: 'b-kannada-practice', title: 'Kannada Practice Book (Optional)', subject: 'Kannada', type: 'Practice Book', shortDesc: 'Practice Kannada letters.', coverImage: '/holykids-poster.png' },
            { id: 'b-hindi-practice', title: 'Hindi Akshar Practice (Optional)', subject: 'Hindi', type: 'Practice Book (Optional)', shortDesc: 'Optional Hindi tracing and writing practice.', coverImage: '/covers/hk-b-hindi-p.svg' }
          ]
        }
      },
      aavishkara: {
        brandId: 'aavishkara',
        brandName: 'Aavishkara Global Education',
        logo: '/aavishkara-logo.png',
        tagline: 'A joyful start to learning',
        books: createAavishkaraBooks('b', 'Beginner')
      }
    }
  },
  junior: {
    id: 'junior',
    route: '/junior',
    title: 'Junior Series',
    description: 'Build confidence with language, creative practice and joyful activities.',
    paragraph: 'A step forward into language development, creative expression and hands-on practice, helping children become more confident learners through engaging and enjoyable activities.',
    age: 'LKG',
    icon: '1 2 3',
    theme: 'green',
    brands: {
      holykids: {
        brandId: 'holykids',
        brandName: 'Holy Kids',
        logo: '/holykids-logo.png',
        tagline: 'Gift your children - secure future with quality education.',
        books: {
          reader: [
            { id: 'j-english-reader', title: 'English Reader Book', subject: 'English', type: 'Reader Book', shortDesc: 'Short words and sentences.', coverImage: '/holykids-poster.png' },
            { id: 'j-maths-reader', title: 'Maths Reader Book', subject: 'Maths', type: 'Reader Book', shortDesc: 'Addition and subtraction.', coverImage: '/holykids-poster.png' },
            { id: 'j-evs-reader', title: 'EVS Reader Book', subject: 'EVS', type: 'Reader Book', shortDesc: 'Plants, animals, and environment.', coverImage: '/holykids-poster.png' },
            { id: 'j-kannada-reader', title: 'Kannada Reader Book (Optional)', subject: 'Kannada', type: 'Reader Book', shortDesc: 'Advanced Kannada alphabets.', coverImage: '/holykids-poster.png' },
            { id: 'j-hindi-reader', title: 'Hindi Shabd Reader (Optional)', subject: 'Hindi', type: 'Reader Book (Optional)', shortDesc: 'Optional Junior Hindi words and phonics reader.', coverImage: '/covers/hk-j-hindi-r.svg' }
          ],
          practice: [
            { id: 'j-english-practice', title: 'English Practice Book', subject: 'English', type: 'Practice Book', shortDesc: 'Writing sentences.', coverImage: '/holykids-poster.png' },
            { id: 'j-maths-practice', title: 'Maths Practice Book', subject: 'Maths', type: 'Practice Book', shortDesc: 'Solving math problems.', coverImage: '/holykids-poster.png' },
            { id: 'j-evs-practice', title: 'EVS Practice Book', subject: 'EVS', type: 'Practice Book', shortDesc: 'Activity sheets for EVS.', coverImage: '/holykids-poster.png' },
            { id: 'j-kannada-practice', title: 'Kannada Practice Book (Optional)', subject: 'Kannada', type: 'Practice Book', shortDesc: 'Writing simple words.', coverImage: '/holykids-poster.png' },
            { id: 'j-hindi-practice', title: 'Hindi Shabd Practice (Optional)', subject: 'Hindi', type: 'Practice Book (Optional)', shortDesc: 'Optional Junior Hindi word writing practice.', coverImage: '/covers/hk-j-hindi-p.svg' }
          ]
        }
      },
      aavishkara: {
        brandId: 'aavishkara',
        brandName: 'Aavishkara Global Education',
        logo: '/aavishkara-logo.png',
        tagline: 'A joyful start to learning',
        books: createAavishkaraBooks('j', 'Junior')
      }
    }
  },
  senior: {
    id: 'senior',
    route: '/senior',
    title: 'Senior Series',
    description: 'Get ready for school with stronger skills and curious thinking.',
    paragraph: 'A focused learning journey that strengthens foundational skills, encourages independent thinking and prepares children with the confidence and curiosity they need for formal schooling.',
    age: 'UKG',
    icon: '✦',
    theme: 'purple',
    brands: {
      holykids: {
        brandId: 'holykids',
        brandName: 'Holy Kids',
        logo: '/holykids-logo.png',
        tagline: 'Gift your children - secure future with quality education.',
        books: {
          reader: [
            { id: 's-english-reader', title: 'English Reader Book', subject: 'English', type: 'Reader Book', shortDesc: 'Grammar and reading.', coverImage: '/holykids-poster.png' },
            { id: 's-maths-reader', title: 'Maths Reader Book', subject: 'Maths', type: 'Reader Book', shortDesc: 'Advanced concepts.', coverImage: '/holykids-poster.png' },
            { id: 's-evs-reader', title: 'EVS Reader Book', subject: 'EVS', type: 'Reader Book', shortDesc: 'Science and society.', coverImage: '/holykids-poster.png' },
            { id: 's-kannada-reader', title: 'Kannada Reader Book (Optional)', subject: 'Kannada', type: 'Reader Book', shortDesc: 'Reading short stories.', coverImage: '/holykids-poster.png' },
            { id: 's-hindi-reader', title: 'Hindi Pathmala Reader (Optional)', subject: 'Hindi', type: 'Reader Book (Optional)', shortDesc: 'Optional Senior Hindi reading and matra stories.', coverImage: '/covers/hk-s-hindi-r.svg' }
          ],
          practice: [
            { id: 's-english-practice', title: 'English Practice Book', subject: 'English', type: 'Practice Book', shortDesc: 'Grammar exercises.', coverImage: '/holykids-poster.png' },
            { id: 's-maths-practice', title: 'Maths Practice Book', subject: 'Maths', type: 'Practice Book', shortDesc: 'Math worksheets.', coverImage: '/holykids-poster.png' },
            { id: 's-evs-practice', title: 'EVS Practice Book', subject: 'EVS', type: 'Practice Book', shortDesc: 'Science worksheets.', coverImage: '/holykids-poster.png' },
            { id: 's-kannada-practice', title: 'Kannada Practice Book (Optional)', subject: 'Kannada', type: 'Practice Book', shortDesc: 'Writing essays and answers.', coverImage: '/holykids-poster.png' },
            { id: 's-hindi-practice', title: 'Hindi Lekhan Practice (Optional)', subject: 'Hindi', type: 'Practice Book (Optional)', shortDesc: 'Optional Senior Hindi sentence writing practice.', coverImage: '/covers/hk-s-hindi-p.svg' }
          ]
        }
      },
      aavishkara: {
        brandId: 'aavishkara',
        brandName: 'Aavishkara Global Education',
        logo: '/aavishkara-logo.png',
        tagline: 'A joyful start to learning',
        books: createAavishkaraBooks('s', 'Senior')
      }
    }
  }
};

export const getBooksByBrand = (brandId) => {
  const levels = [];
  for (const seriesKey in seriesData) {
    const series = seriesData[seriesKey];
    const brandSection = series.brands[brandId];
    if (!brandSection) continue;
    const reader = brandSection.books.reader.map((book) => ({
      ...book,
      seriesId: seriesKey,
      seriesName: series.title,
      seriesRoute: series.route,
      brandId: brandSection.brandId,
      brandName: brandSection.brandName
    }));
    const practice = brandSection.books.practice.map((book) => ({
      ...book,
      seriesId: seriesKey,
      seriesName: series.title,
      seriesRoute: series.route,
      brandId: brandSection.brandId,
      brandName: brandSection.brandName
    }));
    levels.push({
      id: series.id,
      route: series.route,
      title: series.title,
      age: series.age,
      books: [...reader, ...practice],
      reader,
      practice
    });
  }
  return levels;
};

export const getBookById = (id) => {
  for (const seriesKey in seriesData) {
    const series = seriesData[seriesKey];
    for (const brandKey in series.brands) {
      const brandSection = series.brands[brandKey];
      const allBooks = [...brandSection.books.reader, ...brandSection.books.practice];
      for (const book of allBooks) {
        if (book.id === id) {
          return {
            ...book,
            seriesId: seriesKey,
            seriesName: series.title,
            seriesRoute: series.route,
            brandId: brandSection.brandId,
            brandName: brandSection.brandName
          };
        }
      }
    }
  }
  return null;
};

export const searchBooks = (query) => {
  const q = (query || '').toLowerCase().trim();
  const results = [];
  if (!q) return results;

  for (const seriesKey in seriesData) {
    const series = seriesData[seriesKey];
    for (const brandKey in series.brands) {
      const brandSection = series.brands[brandKey];
      const allBooks = [...brandSection.books.reader, ...brandSection.books.practice];
      for (const book of allBooks) {
        const searchText = [
          book.title,
          book.shortDesc,
          book.subject,
          book.type,
          series.title,
          series.age,
          brandSection.brandName
        ].join(' ').toLowerCase();

        if (searchText.includes(q)) {
          results.push({
            ...book,
            seriesId: seriesKey,
            seriesName: series.title,
            seriesRoute: series.route,
            brandId: brandSection.brandId,
            brandName: brandSection.brandName
          });
        }
      }
    }
  }

  results.sort((a, b) => a.title.localeCompare(b.title));
  return results;
};
