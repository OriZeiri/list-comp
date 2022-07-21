import React,{useState} from "react";

import { List, Header , Item , TextField, Button} from "./style";
import { items as Data } from "./Data";


const InteractiveList = () =>{
    //const [items,setItems] = useState([]);
    const [items,setItems] = useState(Data);
    const [Text, SetText] = useState("");
    const [showBtnHoverItem, SetShowBtnHoverItem] = useState(false);
    const [hoverdItem, setHoverdItem] = useState();

    const HandleChangeText = (event) =>
    {
        SetText((prev) => (event.target.value));
    }; 

    const handleAddingBtn = () => 
    {
        if(Text !== "")
        {

                setItems((prevItems) => [...prevItems,Text])
        }
        SetText("");
    };
    const handleAddingEnter = (event) => 
    {
        if(Text !== "" && event.key === 'Enter')
        {
            setItems((prevItems) => [...prevItems,Text])
        }
        SetText("");
    };

    const HandleMouseHovering = (event) =>
    {
        setHoverdItem(event.target.textContent)
        SetShowBtnHoverItem(true);
    };

    const handleMouseLeaving = (event) =>
    {
        setHoverdItem();
        SetShowBtnHoverItem(false);
    };

    const deleteFromList = (event) =>
    {
        setItems((prev) => {
            prev.filter((value)=> {
                return value !== hoverdItem;
            })
        })
    }

    return(
        <div className="">
            <List>
                <Header>Interactive List</Header>
                <TextField 
                onChange={(event)=> HandleChangeText(event)}
                onKeyDown={handleAddingEnter} value={Text}></TextField>
                <Button 
                onClick={handleAddingBtn}
                >+</Button>
                {
                    items.length > 0 ?  
                    items.map((item,index) => 
                    (
                        <div className="item">
                        <Item key={index}
                        onMouseOver={(event) => (HandleMouseHovering(event))}
                        onMouseLeave={handleMouseLeaving}>{item}</Item>
                        </div>
                    )) : <p>add items to the list</p>}  
                
                        <div>
                            <Button 
                            key={"edit"}>edit</Button>
                            <Button 
                            key={"delete"} 
                            onClick={deleteFromList}>delete</Button>
                        </div>
            </List>
        </div>
    );
};

export default InteractiveList;