import React, { useState } from 'react'
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import { makeStyles } from "@material-ui/core";
import allProducts from "../../Data/Product.js"

const DisplayProduct = () => {

    const classes = gridStyle();
    const [items, setItems] = useState(allProducts);

    const onSortEnd = (oldIndex, newIndex) => {
        setItems((array) => arrayMove(array, oldIndex, newIndex));
    };

    // product cont
  let handleSelect = (id) => {
    console.log(id);
  }
  


  return (
    <>
    <p className='title'>Gallery</p>
    <hr />
    <SortableList
      onSortEnd={onSortEnd}
      className={classes.root}
      draggedItemClassName={classes.dragged}
    >
      {items.map(({ id, thumb },index) => (
        <SortableItem key={id}>
          <div className={`${classes.item} ${index === 0 ? classes.firstItem : ''}`}
          onClick={handleSelect(id)}
          >
            <img
              className={classes.image}
              alt={id}
              src={thumb}
            />
            </div>
        </SortableItem>
      ))}
            
    </SortableList>

    </>
  )
}

export default DisplayProduct

const gridStyle = makeStyles({
  root: {
    margin: "10px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gap: "10px"
  },
  item: {
    border: "1px solid #bdc3c7",
    borderRadius: "10px",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    "&:hover": {
      opacity: 0.2,
      backgroundColor: "rgba(0,0,0,0.3)"
    }
  },
  firstItem: {
    gridRowStart: 1,
    gridRowEnd: 3,
    gridColumnStart: 1,
    gridColumnEnd: 3 
  },
  imageCheckbox: {
    display: "none",
    position: "absolute",
    top: "5px",
    left: "5px"
  },
  imageContainer:{
  "&:hover":{
    display: "block"

  }
  } 
  
});

