import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function BlogPostCard({ post }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <StaticImage
          className="h-48 w-full object-cover"
          src="../../images/stock/genesis-snapshot.jpg"
          alt="Generic Genesis Photo"
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link to={`/${post.slug}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900 hover:text-purple-800">
              {post.yoast_head_json.title}
            </p>
          </Link>
          <p
            className="mt-3 text-base text-gray-500"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only">{post.author}</span>
            <StaticImage
              className="h-10 w-10 rounded-full"
              src="../../images/stock/avatar-placeholder.png"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              Author: {post.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
