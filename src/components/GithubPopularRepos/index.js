import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    activeLanguageId: languageFiltersData[0].id,
    reposLangaugeData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getPopularRepos()
  }

  getPopularRepos = async () => {
    const {activeLanguageId} = this.state
    const Url = `https://apis.ccbp.in/popular-repos?language=${activeLanguageId}`
    const response = await fetch(Url)
    const data = await response.json()
    console.log(data)
    const UpdatedData = data.popular_repos.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      issuesCount: eachItem.issues_count,
      forksCount: eachItem.forks_count,
      starsCount: eachItem.stars_count,
      avatarUrl: eachItem.avatar_url,
    }))
    this.setState({reposLangaugeData: UpdatedData, isLoading: false})
  }

  UpdatingLanguageIdState = id => {
    this.setState({activeLanguageId: id}, this.getPopularRepos)
  }

  render() {
    const {activeLanguageId, reposLangaugeData, isLoading} = this.state
    console.log(activeLanguageId)
    console.log('reposLangaugeData is', reposLangaugeData)
    return (
      <div className="main-container">
        <div className="heading-container">
          <h1 className="heading">popular</h1>
        </div>
        <ul className="language-buttons-container">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              LanguageFilterItemData={eachItem}
              key={eachItem.id}
              UpdatingLanguageIdState={this.UpdatingLanguageIdState}
              isActive={activeLanguageId === eachItem.id}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="container1">
            {reposLangaugeData.map(eachItem => (
              <RepositoryItem RepositoryItemData={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
