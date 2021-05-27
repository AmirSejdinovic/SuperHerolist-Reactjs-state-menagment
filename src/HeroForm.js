import React,{useContext, useState} from 'react';
import HeroContextProvider, {HeroContext} from './HeroContext';


function HeroFrom(){
  const [hero, setHero ] = useState('');
  const [comic,setComic] = useState('');
  const{addHero} = useContext(HeroContext);
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    addHero(hero,comic);
    setHero('');
    setComic('');
  }
  return(
    <div className="d-flex justify-content-center p-3" style={{background:"teal"}}>
     <form className="col-md-4" onSubmit={handleSubmit}>
       <div className="form-group">
        <h5>Super Hero</h5>
        <input className="form-control" type="text" placeholder="Enter SuperHero" value={hero} onChange={(e)=>setHero(e.target.value)} required/>
       </div>

       <div className="form-group">
        <h5>Comic</h5>
        <input className="form-control" type="text" value={comic} onChange={(e)=>setComic(e.target.value)} placeholder="Enter Comic" required/>
       </div>

       <button className="btn btn-primary" type="submit">Submit</button>
     </form>
    </div>
  )
}

export default HeroFrom;