import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`} className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <div className="book-card-content">
        <span className="type">{book.type}</span>
        <h4>{book.title}</h4>
        <p>{book.shortDesc}</p>
        <span className="view-btn">View Details →</span>
      </div>
    </Link>
  );
}
