import './index.css'

const HistoryItems = props => {
  const {historyItems, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItems

  const deleteItems = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="list-container">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button onClick={deleteItems} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItems
