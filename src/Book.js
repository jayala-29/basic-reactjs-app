import React from 'react'

// child component coming from Library
export const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages} pages</p>
        <p>Free Bookmark Today: {freeBookmark ? 'yes' : 'no'}</p>
      </section>
    )
  }