import React, { useRef, useState, useLayoutEffect } from 'react';
import '../css/MovieRow_translate.css';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import MovieItem from './MovieItem_translate';

function MovieRow({ title, items }) {
  const listRef = useRef();
  const btnRef = useRef();
  const [startX, setstartX] = useState(0);

  useLayoutEffect(() => {
    const getCoordinate = () => {
      const listLeft = listRef.current.getBoundingClientRect().left;

      setstartX(listLeft);
    };
    getCoordinate();
  }, []);

  const handleClick = (direction) => {
    let currenX = listRef.current.getBoundingClientRect().x;
    let btnLeft = btnRef.current.getBoundingClientRect().left;
    let listWidth = listRef.current.getBoundingClientRect().width;
    let listRef_NodeWidth = items.length > 0 ? listRef.current.childNodes[0].getBoundingClientRect().width : 0;
    const slideDistance = listRef_NodeWidth * 4;

    let calculate_distance = 0;
    if (direction === 'left') {
      calculate_distance = currenX + slideDistance;
      if (startX < calculate_distance) {
        calculate_distance = 0;
      }
    } else if (direction === 'right') {
      calculate_distance = currenX - slideDistance;
      if (btnLeft - startX - listWidth > calculate_distance) {
        calculate_distance = btnLeft - startX - listWidth;
      }
    }
    listRef.current.style.transform = `translateX(${calculate_distance}px)`;
  };
  console.log(items)
  return (
    <div className="movie-row">
      <h2 className="movie-row__title">{title}</h2>
      <div className="movie-row__carousel">
        <div className="movie-row__button movie-row__button--left" onClick={() => handleClick('left')}>
          <FaLessThan style={{ fontSize: 30}} />
        </div>
        <div className="movie-row__button movie-row__button--right" onClick={() => handleClick('right')} ref={btnRef}>
          <FaGreaterThan style={{ fontSize: 30 }} />
        </div>
        <div className="movie-row__list" ref={listRef}>
          {items.length > 0 && items.map((item, index) => <MovieItem key={index} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;