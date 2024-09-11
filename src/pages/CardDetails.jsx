import React from 'react'
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  const {namE}=useParams()
  return (
    <div>CardDetails</div>
  )
}

export default CardDetails;