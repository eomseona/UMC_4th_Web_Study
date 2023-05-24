
import React, { useRef, useState, useLayoutEffect } from 'react';
import '../css/MovieRow_translate.css';
function MovieItem({key,item}){
  console.log(item)
  return(
    <div className = "slider-item">
      <img src={item.img} className = "slider-item-img"/>
      </div>
  )

}export default MovieItem;