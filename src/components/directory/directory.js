import React from 'react'
import Categoryitem from '../category-item/Category-item';
import './directory.scss'

const Directory =({categories}) => {
  return (
    <div className="directory-container ">
      {categories.map((x) => {
        return (
          <Categoryitem key={x.id} values={x}/>
       
        );
      })}
    </div>
  )
}

export default Directory