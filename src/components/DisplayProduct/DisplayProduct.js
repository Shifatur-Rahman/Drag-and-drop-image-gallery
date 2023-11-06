import React, { useState } from 'react'
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import allProducts from "../../Data/Product.js"

const DisplayProduct = () => {

    const [items, setItems] = useState(allProducts);
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);


  const onSortEnd = (oldIndex, newIndex) => {
    setItems((array) => arrayMove(array, oldIndex, newIndex));
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedCount((prevCount) => prevCount + 1);
      setSelectedItems((prevItems) => [...prevItems, id]);
    } else {
      setSelectedCount((prevCount) => prevCount - 1);
      setSelectedItems((prevItems) => prevItems.filter((itemId) => itemId !== id));
    }
  };

  const handleDeleteSelected = () => {
    const updatedItems = items.filter((item) => !selectedItems.includes(item.id));
    setItems(updatedItems);
    setSelectedItems([]);
    setSelectedCount(0);
  };

  return (
    <>
      <div style={{ margin: "20px" }} className='header'>
              {/* Count Function */}
        {
          selectedCount === 0 ? <span className='title'>Gallery</span> : <span className='title'><input type="checkbox" checked />{selectedCount} Items Selected</span>
        }
              {/* Delete Function */}
        {
          selectedCount > 0 ? <button onClick={handleDeleteSelected} style={{ color: "red" }}>Delete</button> : ""
        }
      </div>

      <hr />

              {/* Image sorting */}
      
      <SortableList
        onSortEnd={onSortEnd}
        className="sort-gallery">

        {/* All Product Image mapping */}

        {items.map(({ id, thumb }, index) => (
          <SortableItem key={id}>
            <div className={`item ${index === 0 ? "firstItem" : ''}`}>
              <img
                className="image"
                alt={id}
                src={thumb}
              />
              <input
                type="checkbox"
                className="image_checkbox"
                id={id}
                onChange={handleChange}
              />
            </div>
          </SortableItem>
        ))}

      </SortableList>

    </>
  )
}

export default DisplayProduct
