// propsで渡されるResultの型props.result.の形で渡される
type ResultProps = {
  result: {
    country : string
    cityName : string
    localtime : string
    temperature : string
    conditionText : string
    icon : string
  }
}

const Result = (props : ResultProps) => {
  return (
    <h1><div>
      {props.result.country && 
        <div>
          <div className="results-country">{props.result.country}</div>
          <div className="results-city">{props.result.cityName}</div>
          <div >{props.result.localtime}</div>
          <div className="results-temp">{props.result.temperature}℃</div>
          <div className="results-condition">
            <div>{props.result.conditionText}</div>
            <img src={props.result.icon} alt="icon"/>
          </div>
        </div>
      }
    </div></h1>
  )
}

export default Result