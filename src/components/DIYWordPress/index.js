import React from 'react'
import { useWordPressPosts } from '../../hooks/useWordPressPosts'

import BlogPostCard from './BlogPostCard'

export default function DIYWordPressContent() {
  const data = useWordPressPosts()

  const posts = data.allWordPressPost.edges
    .map(post => post.node)
    .filter((post, i) => i !== 2)

  return (
    <section className="p-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
