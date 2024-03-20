import React from 'react';

type Props = {
  params: {
    id:string;
  };
  searchParams:{
    genre:string
  }
}

function GenrePage({params: {id}, searchParams: {genre}}: Props) {
  // console.log(props)
  return (
    <div>GenrePage: the id is {id} and the genre is: {genre}</div>
  )
}

export default GenrePage