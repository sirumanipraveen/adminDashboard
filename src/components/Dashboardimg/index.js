import './index.css'

const Dashboardimg = props => {
  const {tabDetails} = props
  const {caption, url} = tabDetails

  return (
    <div className="divContainer">
      <div>
        <img src={url} className="imgStyling" />
        <h1>{caption}</h1>
      </div>
    </div>
  )
}
export default Dashboardimg
