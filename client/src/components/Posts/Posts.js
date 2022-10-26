import React from 'react'
import useStyles from './styles'

import Post from './Post/Post'

function Posts() {
  const classes = useStyles()
  return (
      <>
          <Post />
          <Post />
      </>
  )
}

export default Posts