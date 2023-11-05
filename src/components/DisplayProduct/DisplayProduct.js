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
      {items.map(({ id, thumb },index) => (
        <SortableItem key={id}>
          <div className={`${classes.item} ${index === 0 ? classes.firstItem : ''}`}
          // className={classes.item}
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
  firstItem: {
    gridTemplateColumns: "2fr",
    gridTemplateRows: "2fr"
  },
  root: {
    margin: "10px",
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
    borderRadius: "10px"
  }
});
