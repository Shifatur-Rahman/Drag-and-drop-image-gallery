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
    
  return (
    <>
    

    <SortableList
      onSortEnd={onSortEnd}
      className={classes.root}
      draggedItemClassName={classes.dragged}
    >
      {items.map(({ id, thumb }) => (
        <SortableItem key={id}>
          <div 
          className={classes.item}
          // className='single_product'
          >
            <img
              className={classes.image}
              alt={id}
              src={thumb}
              imgProps={{ draggable: false }}
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
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
      gap: "10px"
    },
    item: {
      border: "1px solid #bdc3c7",
      borderRadius: "10px"
    },
    image: {
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      borderRadius: "10px"
    },
    button: {
      position: "absolute",
      bottom: 0,
      right: 0
    },
    dragged: {
      boxShadow:
        "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
      "& button": {
        opacity: 0
      }
    }
  });