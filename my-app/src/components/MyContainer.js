import { useState } from "react"
import MyList from './MyList'

function MyContainer() {

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const value = formData.get("input");
        const new_id = value ? 1 : parseInt(items[items.length - 1].id,10) + 1;
        setItems([...items, { id: new_id.toString(), text: value }]);
    }


    const [items, setItems] = useState([
        {id: "1", text:"First Item", check: false},
        //{id: "2", text:"Second  Item", check: false}
    ])

    function updateItem(id) {
        const updatedItems = items.map(item => {
            if (item.id === id  && !item.check) {
                item.check = true;
                return item;
            } else {
                return item;
            }
        })
        setItems(updatedItems);
    };


    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <textarea name="input"/>
                <hr/>
                <button type="submit"> Submit</button>
            </form>
            <MyList header = "test" items = {items} updateItem={updateItem}/>
        </div>);
}

export default MyContainer
