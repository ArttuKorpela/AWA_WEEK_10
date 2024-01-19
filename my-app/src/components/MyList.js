
function MyList({ header, items, updateItem}) {

  const listItems = items.map((item) => 
    <li key = {item.id.toString()}
        onClick={() => updateItem(item.id)}
        style={{textDecoration: item.check ? "line-through" : null}}
        >
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

export default MyList;
