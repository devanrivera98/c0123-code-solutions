// original layout

//   < body >
//   <div class="row">
//     <div class="holder">
//       <i class="arrows fa-solid fa-less-than"></i>
//       <img altclass="one " src="images/025.png" />
//       <img class="two hidden" src="images/001.png" />
//       <img class="three hidden" src="images/004.png" />
//       <img class="four hidden" src="images/007.png" />
//       <i class="arrows fa-solid fa-greater-than"></i>
//     </div>
//     <div class="selector">
//       <i class="one circle fa-sharp fa-solid fa-circle"></i>
//       <i class="two circle fa-sharp fa-regular fa-circle"></i>
//       <i class="three circle fa-sharp fa-regular fa-circle"></i>
//       <i class="four circle fa-sharp fa-regular fa-circle"></i>
//     </div>
//   </div>
//     </body >

// React Layout

// function Layout() {
//   return (
//     <>
//     <div className="row">
//       <div className="holder">
//         <FaLessThan className="arrows fa-solid fa-less-than" />
//           <img src={pikachu} alt="Pikachu" />
//         <FaGreaterThan className="arrows fa-solid fa-greater-than" />
//       </div>
//       <div className="selector">
//         <FaCircle className="one circle fa-sharp fa-solid fa-circle" />
//         <FaCircle className="two circle fa-sharp fa-solid fa-circle" />
//         <FaCircle className="three circle fa-sharp fa-solid fa-circle" />
//         <FaCircle className="four circle fa-sharp fa-solid fa-circle" />
//       </div>
//     </div>
//     </>
//    )
// }
//REACT LAYOUT ENDS HERE


// // STEPS TO TAKE
// 1. Seperate components by functionality
// 2. buttons should be rendered seperately
// 3. arrows should be rendered seperately
// 4. image should be a prop that changes when a button is clicked
// 5. html skeleton should be created before functionality
// 6. figure out how to use setTimeout to create a default carousel based on the array of the characterList
// 7. Likely need to useEffect to change the state to show the image clicked on the buttons so only the image re renders again
// 8. buttons will likely need an onClick listener similar to the sharing state exercise
