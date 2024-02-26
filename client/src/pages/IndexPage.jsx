import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

export default function IndexPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/post').then((response) =>
      response.json().then((posts) => setPosts(posts))
    )
  }, [])

  return <>{posts.length > 0 && posts.map((post) => <PostCard {...post} />)}</>
}
