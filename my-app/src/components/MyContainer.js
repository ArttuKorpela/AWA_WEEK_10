import { useState } from "react"
import { MyList } from './MyList'

export function MyContainer() {

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const value = formData.get("input");
        const new_id = parseInt(items[items.length - 1].id,10) + 1;
        setItems([...items, { id: new_id.toString(), text: value }]);
    }


    const [items, setItems] = useState([
        {id: "1", text:"First Item"},
        {id: "2", text:"Second  Item",}
    ])


    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <textarea name="input"/>
                <hr/>
                <button type="submit"> Submit</button>
            </form>
            <MyList header = "test" items = {items}/>
        </div>);
}

