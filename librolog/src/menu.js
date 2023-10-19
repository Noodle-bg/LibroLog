// // import React,{useRef} from  "react"
// // import map from "lodash/map";
// // import range from "lodash/range";
// // import Container from "./Container"
// // const Menu=()=>{
// //     const divRef = useRef(null);
// //     const handleScrollRight = () =>{
// //         if(divRef.current){
// //             divRef.current.scrollLeft +=100;
// //         }
// //     }
// //     const handleScrollLeft = () =>{
// //         if(divRef.current){
// //             divRef.current.scrollLeft -=100;
// //         }
// //     }
    
// //     return(
// //     //     <div>
// //     //         <div className="Browse" >

// //     //             <button  className="Scroll-left" onClick={handleScrollLeft}>LEFT</button>
// //     //             {/* <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
                
// //     //     {map(range(8), _ => (
// //     //       <Container />
// //     //     ))}
// //     //   </div> */}
// //     //         <div classname="scrollable-div" ref={divRef}>
// //     //             {map(range(8),_=>(
// //     //                 <Container/>
// //     //             ))}
// //     //         </div>
// //     //         <button className="Scroll-right" onClick={handleScrollRight} >RIGHT</button>
// //     //                 </div>
// //     //         <div className="Search">Search</div>
// //     //     </div>
// //     <div>
// //     <div className="scrollable-div" ref={divRef}>
// //       <div className="content">
// //         <p>Content that can be scrolled horizontally.</p>
// //         {/* Add more content as needed */}
// //       </div>
// //     </div>
// //     <button onClick={handleScrollRight}>Scroll Right</button>
// //     <button onClick={handleScrollLeft}>Scroll Left</button>
// //   </div>

// //     );
// // };
// // export default Menu;
// import React from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import 'react-horizontal-scrolling-menu/dist/styles.css';
// import { Arrow } from 'react-horizontal-scrolling-menu';

// const getItems = () =>
//   Array(20)
//     .fill(0)
//     .map((_, ind) => ({ id: `element-${ind}` }));

// function Menu() {
//   const [items, setItems] = React.useState(getItems);
//   const [selected, setSelected] = React.useState([]);
//   const [position, setPosition] = React.useState(0);

//   const isItemSelected = (id) => !!selected.find((el) => el === id);

//   const handleClick =
//     (id) =>
//     ({ getItemById, scrollToItem }) => {
//       const itemSelected = isItemSelected(id);

//       setSelected((currentSelected) =>
//         itemSelected
//           ? currentSelected.filter((el) => el !== id)
//           : currentSelected.concat(id)
//       );
//     };

//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       {items.map(({ id }) => (
//         <Card
//           itemId={id} // NOTE: itemId is required for track items
//           title={id}
//           key={id}
//           onClick={handleClick(id)}
//           selected={isItemSelected(id)}
//         />
//       ))}
//     </ScrollMenu>
//   );
// }

// function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev } =
//     React.useContext(VisibilityContext);

//   return (
//     <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//       Left
//     </Arrow>
//   );
// }

// function RightArrow() {
//   const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

//   return (
//     <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
//       Right
//     </Arrow>
//   );
// }

// function Card({ onClick, selected, title, itemId }) {
//   const visibility = React.useContext(VisibilityContext);

//   return (
//     <div
//       onClick={() => onClick(visibility)}
//       style={{
//         width: '160px',
//       }}
//       tabIndex={0}
//     >
//       <div className="card">
//         <div>{title}</div>
//         <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
//         <div>selected: {JSON.stringify(!!selected)}</div>
//       </div>
//       <div
//         style={{
//           height: '200px',
//         }}
//       />
//     </div>
//   );
// }

// export default Menu;