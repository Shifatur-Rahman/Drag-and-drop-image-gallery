import React, { useState } from 'react'
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import { makeStyles } from "@material-ui/core";
import allProducts from "../../Data/Product.js"

const DisplayProduct = () => {

    const [items, setItems] = useState(allProducts);
    const [selectedCount, setSelectedCount] = useState(0);


    const onSortEnd = (oldIndex, newIndex) => {
        setItems((array) => arrayMove(array, oldIndex, newIndex));
    };

  let handleSelect = (id) => {
    console.log(id);
  }

  const handleChange = (e) =>{
    const id = e.target.id;
    const isChecked = e.target.checked;
  
    if (isChecked) {
      setSelectedCount((prevCount) => prevCount + 1);
    } else {
      setSelectedCount((prevCount) => prevCount - 1);
    }    
  }   

  return (
    <>
    <div style={{margin:"20px"}} className='header'>
    
    {
      selectedCount==0?<span className='title'>Gallery</span>:<span className='title'><input type="checkbox" checked />{selectedCount} Items Selected</span>
    }
    {
      selectedCount>0? <button style={{color:"red"}}>Delete</button>:""
    }
    </div>
    
    <hr />
    <SortableList
      onSortEnd={onSortEnd}
      className="sort-gallery"
    >
      {items.map(({ id, thumb },index) => (
        <SortableItem key={id}>
          <div className={`item ${index === 0 ? "firstItem" : ''}`}
          onClick={handleSelect(id)}
          >
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

// const gridStyle = makeStyles({
//   root: {
//     margin: "10px",
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
//     gap: "10px"
//   },
//   item: {
//     border: "1px solid #bdc3c7",
//     borderRadius: "10px",
//     position: "relative"
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     borderRadius: "10px",
//     "&:hover": {
//       opacity: 0.2,
//       backgroundColor: "rgba(0,0,0,0.3)"
//     }
//   },
//   firstItem: {
//     gridRowStart: 1,
//     gridRowEnd: 3,
//     gridColumnStart: 1,
//     gridColumnEnd: 3 
//   },
//   imageContainer:{
//   "&:hover":{
//     display: "block"

//   }
//   },
//   image_checkbox: {
//     position: "absolute",
//     top: "5px",
//     right: "5px",
//     visibility: "hidden"
//   }
  
// });


// import React, { useState } from "react";
// import SortableList, { SortableItem } from "react-easy-sort";
// import arrayMove from "array-move";
// import { makeStyles } from "@material-ui/core";
// import allProducts from "../../Data/Product.js";

// const DisplayProduct = () => {
//   const classes = gridStyle();
//   const [items, setItems] = useState(allProducts);
//   const [selectedItems, setSelectedItems] = useState([]);

//   const onSortEnd = (oldIndex, newIndex) => {
//     setItems((array) => arrayMove(array, oldIndex, newIndex));
//   };

//   const handleSelect = (id) => {
//     if (selectedItems.includes(id)) {
//       setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== id));
//     } else {
//       setSelectedItems([...selectedItems, id]);
//     }
// };

//   return (
//     <>
//       <p className="title">Gallery</p>
//       <hr />
//       <SortableList onSortEnd={onSortEnd} className={classes.root} draggedItemClassName={classes.dragged}>
//         {items.map(({ id, thumb }, index) => (
//           <SortableItem key={id}>
//             <div
//               className={`${classes.item} ${index === 0 ? classes.firstItem : ""} ${selectedItems.includes(id) ? classes.selected : ""}`}
//               onMouseEnter={() => handleSelect(id)} // Add checkbox on mouse enter
//               onMouseLeave={() => handleSelect(id)} // Remove checkbox on mouse leave
//             >
//               {selectedItems.includes(id) && (
//                   <input
//                   type="checkbox"
//                  // checked={selectedItems.includes(id)}
//                   onClick={() => handleSelect(id)}
//                   className={classes.imageCheckbox}
//                 />      
//               )}
//               <img className={classes.image} alt={id} src={thumb} />
//             </div>
//           </SortableItem>
//         ))}
//       </SortableList>
//     </>
//   );
// };

// export default DisplayProduct;

// const gridStyle = makeStyles({
//   root: {
//     margin: "10px",
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
//     gap: "10px",
//   },
//   item: {
//     border: "1px solid #bdc3c7",
//     borderRadius: "10px",
//     position: "relative",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     borderRadius: "10px",
//     "&:hover": {
//       opacity: 0.2,
//       backgroundColor: "rgba(0,0,0,0.3)",
//     },
//   },
//   firstItem: {
//     gridRowStart: 1,
//     gridRowEnd: 3,
//     gridColumnStart: 1,
//     gridColumnEnd: 3,
//   },
//   imageCheckbox: {
//     display: "block",
//     position: "absolute",
//     top: "5px",
//     left: "5px",
//   },
//   selected: {
//      border: "2px solid #007BFF",
//   },
// });

