// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {LanguageFilterItemData, UpdatingLanguageIdState, isActive} = props
  const {id, language} = LanguageFilterItemData
  const ActiveButtonClassName = isActive
    ? 'Active-language-button'
    : 'language-button'
  const onClickLanguageButton = () => {
    UpdatingLanguageIdState(id)
  }

  return (
    <li>
      <button
        type="button"
        className={ActiveButtonClassName}
        onClick={onClickLanguageButton}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
