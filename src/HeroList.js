import React,{useContext} from 'react';
import HeroContextProvider, {HeroContext} from './HeroContext';

function HeroList(){
 const {heros} = useContext(HeroContext);
  return heros.length ?(<div>
   <h2 className="text-white p-2">Below are the SuperHeros List</h2>

  {heros.map((hero)=>(
      <div>
        <h4>SuperHero: {hero.name}</h4>
        <hr/>
        <h4>Comicl: {hero.comic}</h4>
        <hr/>
      </div>
  ))}

  </div>) : (
    <div>No superHeros we got here</div>
  )
}

export default HeroList;