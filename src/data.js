export const seriesData = {
  beginner: {
    id: "beginner",
    title: "Beginner Series",
    description: "First letters, sounds, numbers and wonderful everyday discoveries.",
    paragraph: "A playful introduction to the world of learning, helping children recognise their first letters and sounds, understand numbers, and explore familiar things around them.",
    age: "PRE-KG",
    icon: "A B C",
    theme: "blue",
    books: {
      reader: [
        { id: "b-kannada-reader", title: "Kali Nali (Kannada)", subject: "Kannada", type: "Reader & Practice Book", shortDesc: "Learn and play with Kannada alphabets.", coverImage: "/beginner-6.jpg", gallery: ["/beginner-6.jpg", "/beginner-1.jpg", "/beginner-2.jpg", "/beginner-3.jpg", "/beginner-4.jpg", "/beginner-5.jpg"], pdfPreview: "/beginner-kannada-sample.pdf" },
        { id: "b-english-reader", title: "Literacy & Phonics Book", subject: "English", type: "Reader Book", shortDesc: "Learn A-Z and phonics.", coverImage: "/english-1.jpg", gallery: ["/english-1.jpg", "/english-2.jpg", "/english-3.jpg", "/english-4.jpg", "/english-6.jpg", "/english-5.jpg"], pdfPreview: "/beginner-english-sample.pdf" },
        { id: "b-maths-reader", title: "Maths Reader Book", subject: "Maths", type: "Reader Book", shortDesc: "Numbers and basic concepts.", coverImage: "/holykids-poster.png" },
        { id: "b-evs-reader", title: "EVS Reader Book", subject: "EVS", type: "Reader Book", shortDesc: "Discover the world around us.", coverImage: "/holykids-poster.png" }
      ],
      practice: [
        { id: "b-kannada-practice", title: "Kannada Practice Book", subject: "Kannada", type: "Practice Book", shortDesc: "Practice Kannada letters.", coverImage: "/holykids-poster.png" },
        { id: "b-english-practice", title: "English Practice Book", subject: "English", type: "Practice Book", shortDesc: "Tracing and writing A-Z.", coverImage: "/holykids-poster.png" },
        { id: "b-maths-practice", title: "Maths Practice Book", subject: "Maths", type: "Practice Book", shortDesc: "Writing numbers 1-20.", coverImage: "/holykids-poster.png" },
        { id: "b-evs-practice", title: "EVS Practice Book", subject: "EVS", type: "Practice Book", shortDesc: "Coloring and matching.", coverImage: "/holykids-poster.png" }
      ]
    }
  },
  junior: {
    id: "junior",
    title: "Junior Series",
    description: "Build confidence with language, creative practice and joyful activities.",
    paragraph: "A step forward into language development, creative expression and hands-on practice, helping children become more confident learners through engaging and enjoyable activities.",
    age: "LKG",
    icon: "1 2 3",
    theme: "green",
    books: {
      reader: [
        { id: "j-kannada-reader", title: "Kannada Reader Book", subject: "Kannada", type: "Reader Book", shortDesc: "Advanced Kannada alphabets.", coverImage: "/holykids-poster.png" },
        { id: "j-english-reader", title: "English Reader Book", subject: "English", type: "Reader Book", shortDesc: "Short words and sentences.", coverImage: "/holykids-poster.png" },
        { id: "j-maths-reader", title: "Maths Reader Book", subject: "Maths", type: "Reader Book", shortDesc: "Addition and subtraction.", coverImage: "/holykids-poster.png" },
        { id: "j-evs-reader", title: "EVS Reader Book", subject: "EVS", type: "Reader Book", shortDesc: "Plants, animals, and environment.", coverImage: "/holykids-poster.png" }
      ],
      practice: [
        { id: "j-kannada-practice", title: "Kannada Practice Book", subject: "Kannada", type: "Practice Book", shortDesc: "Writing simple words.", coverImage: "/holykids-poster.png" },
        { id: "j-english-practice", title: "English Practice Book", subject: "English", type: "Practice Book", shortDesc: "Writing sentences.", coverImage: "/holykids-poster.png" },
        { id: "j-maths-practice", title: "Maths Practice Book", subject: "Maths", type: "Practice Book", shortDesc: "Solving math problems.", coverImage: "/holykids-poster.png" },
        { id: "j-evs-practice", title: "EVS Practice Book", subject: "EVS", type: "Practice Book", shortDesc: "Activity sheets for EVS.", coverImage: "/holykids-poster.png" }
      ]
    }
  },
  senior: {
    id: "senior",
    title: "Senior Series",
    description: "Get ready for school with stronger skills and curious thinking.",
    paragraph: "A focused learning journey that strengthens foundational skills, encourages independent thinking and prepares children with the confidence and curiosity they need for formal schooling.",
    age: "UKG",
    icon: "✦",
    theme: "purple",
    books: {
      reader: [
        { id: "s-kannada-reader", title: "Kannada Reader Book", subject: "Kannada", type: "Reader Book", shortDesc: "Reading short stories.", coverImage: "/holykids-poster.png" },
        { id: "s-english-reader", title: "English Reader Book", subject: "English", type: "Reader Book", shortDesc: "Grammar and reading.", coverImage: "/holykids-poster.png" },
        { id: "s-maths-reader", title: "Maths Reader Book", subject: "Maths", type: "Reader Book", shortDesc: "Advanced concepts.", coverImage: "/holykids-poster.png" },
        { id: "s-evs-reader", title: "EVS Reader Book", subject: "EVS", type: "Reader Book", shortDesc: "Science and society.", coverImage: "/holykids-poster.png" }
      ],
      practice: [
        { id: "s-kannada-practice", title: "Kannada Practice Book", subject: "Kannada", type: "Practice Book", shortDesc: "Writing essays and answers.", coverImage: "/holykids-poster.png" },
        { id: "s-english-practice", title: "English Practice Book", subject: "English", type: "Practice Book", shortDesc: "Grammar exercises.", coverImage: "/holykids-poster.png" },
        { id: "s-maths-practice", title: "Maths Practice Book", subject: "Maths", type: "Practice Book", shortDesc: "Math worksheets.", coverImage: "/holykids-poster.png" },
        { id: "s-evs-practice", title: "EVS Practice Book", subject: "EVS", type: "Practice Book", shortDesc: "Science worksheets.", coverImage: "/holykids-poster.png" }
      ]
    }
  }
};

export const getBookById = (id) => {
  for (const seriesKey in seriesData) {
    const series = seriesData[seriesKey];
    for (const book of series.books.reader) {
      if (book.id === id) return { ...book, seriesId: seriesKey, seriesName: series.title };
    }
    for (const book of series.books.practice) {
      if (book.id === id) return { ...book, seriesId: seriesKey, seriesName: series.title };
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
    const allBooks = [...series.books.reader, ...series.books.practice];
    for (const book of allBooks) {
      const searchText = [
        book.title, 
        book.shortDesc, 
        book.subject, 
        book.type,
        series.title,
        series.age
      ].join(' ').toLowerCase();
      
      if (searchText.includes(q)) {
        results.push({ ...book, seriesId: seriesKey, seriesName: series.title });
      }
    }
  }
  
  // Sort results alphabetically from A to Z
  results.sort((a, b) => a.title.localeCompare(b.title));
  
  return results;
};
