import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  return (
    <div className="item-container">
      <div className="bg-container">
        <p className="item-topic">{topic}</p>

        <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
      </div>
    </div>
  )
}

export default BlogItem
