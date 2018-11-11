import React from 'react';
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

function Turn({author, books}) {
  return (
    <div className="row turn" style={{backgroundColor: "white"}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} alt="" className="authorImage" alt="author"/>
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} /> )}
      </div>
    </div>
  );
}

function Continue() {
  return (
    <div className="row">
    </div>
  );
}

function Book({title}) {
  return (
    <div className="answer">
    <h4>{title}</h4>
    </div>
  );
}

function AuthorQuiz({turnData}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
    </div>
  );
}

export default AuthorQuiz;
