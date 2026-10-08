import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchBooks } from '../data';
import BookCard from '../components/BookCard';

export default function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (query) {
      setResults(searchBooks(query));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <main style={{backgroundColor: 'var(--paper)', minHeight: '80vh', padding: '40px 0'}}>
      <div className="wrap">
        <h1 style={{fontFamily: '"Baloo 2", cursive', fontSize: '38px', color: 'var(--ink)', margin: '0 0 20px'}}>Search Results for "{query}"</h1>
        
        {results.length > 0 ? (
          <div className="book-grid">
            {results.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div style={{background: '#fff', padding: '40px', borderRadius: '16px', textAlign: 'center', color: '#607a9e', fontSize: '18px', boxShadow: '0 10px 40px #173a6f0d'}}>
            No books found matching your search. Please try a different term.
          </div>
        )}
      </div>
    </main>
  );
}
