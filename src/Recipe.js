import React from 'react'
import  style from "./Recipe.module.css"


///use className={style.(classname)}
const Recipe = ({title,calories,image,ingred}) =>
{
    return(
        <div className={style.recipe}>
            <h2>
                {title}
            </h2>
            <ol className={style.ing}>
                {ingred.map(ing=>
                    <li>{ing.text}</li>)}
            </ol>
            <p><b>Calories:</b>{calories}</p>
            <img src={image} alt={title}></img>
        </div>
    )
}

export default Recipe
