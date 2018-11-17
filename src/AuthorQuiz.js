import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import './AuthorQuiz.css';
import './bootstrap.min.css';

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

function Turn({ author, books, highlight, onAnswerSelected}) {

  function highlightToBackgroundColor(highlight){
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };

    return mapping[highlight];
  }

  return (
    <div className="row turn" style={{backgroundColor: highlightToBackgroundColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} alt="" className="authorImage" alt="highlightToBackgroundColor(highlight)"/>
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} /> )}
      </div>
    </div>
  );
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};


function Continue() {
  return (
    <div className="row">
    </div>
  );
}

function Footer() {
  return (
    <div className="row">
    </div>
  );
}

function Book({title, onClick}) {
  return (
    <div className="answer" onClick={() => {onClick(title)}}>
    <h4>{title}</h4>
    </div>
  );
}

  function AuthorQuiz({ turnData, highlight, onAnswerSelected}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue />
      <p><Link to="/add">Add Author</Link></p>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
