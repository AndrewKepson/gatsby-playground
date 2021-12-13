import React from 'react'
import { Link } from 'gatsby'
import { useWordPressPosts } from '../../hooks/useWordPressPosts'

export default function DIYWordPressContent() {
  const data = useWordPressPosts()

  const posts = data.allWordPressPost.edges.map(post => post.node)

  return (
    <section className="p-6 md:px-12">
      <ul>
        {posts.map(post => (
          <li className="text-lg text-gray-800 hover:text-purple-800">
            <Link to={`/${post.slug}`}>{post.yoast_head_json.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
