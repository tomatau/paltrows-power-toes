import React from 'react'
import './Content.css'

export default function Content({ className, ...props }) {
  return (
    <div className={['Content', className].join(' ')} {...props} />
  );
}
