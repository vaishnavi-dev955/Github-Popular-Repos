// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {RepositoryItemData} = props
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = RepositoryItemData
  return (
    <li className="list-item">
      <img src={avatarUrl} alt={name} className="image-style" />
      <h1 className="title">{name}</h1>
      <p className="description ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt=" stars"
          className="logo-style"
        />
        {starsCount} stars
      </p>
      <p className="description ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="logo-style"
        />
        {forksCount} forks
      </p>
      <p className="description ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="logo-style"
        />
        {issuesCount} open issues
      </p>
    </li>
  )
}

export default RepositoryItem
