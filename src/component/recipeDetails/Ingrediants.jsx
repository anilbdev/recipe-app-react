import React from 'react';

const Ingrediants = ({ingrediantsData}) => {
  return <div className='ingrediantWrapper'>
{
    ingrediantsData.map(_ingrediant=>(
        // <p>{_ingrediants.name}</p>
        <Ingrediant ingrediant={_ingrediant}  />
    ))
}
  </div>;
};
export default Ingrediants;



function Ingrediant({ingrediant}) {
  return <div className='ingrediant' >
    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingrediant.image}`} alt="image" />
    <span>{ingrediant.name}</span>
  </div>;
}

