import React from 'react'
import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  const author = useSelector(state => {
    return state.users.find((user) => user.id === userId)
  })

  const authorName = author ? author.name : 'Unknown Author'

  return (
    <span>
      by {authorName}
    </span>
  )
}