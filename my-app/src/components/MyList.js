
export function MyList({ header, items}) {

  const listItems = items.map((item) => 
    <li key = {item.id.toString()}>
      {item.text}
    </li>
  )
  


  return (<div> 
    <h1>{header}</h1>
    <ol>
      {listItems}
    </ol>
  </div>);

}
