import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
  params: {
    term:string
  }
}

function SearchPage({params: {term}}:Props) {
  if(!term) notFound();
  
  const serachedTerm = decodeURI(term)
  return (
    <div>The term which you are searched for: {serachedTerm}</div>
  )
}

export default SearchPage;