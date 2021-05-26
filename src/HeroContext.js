import React, {createContext} from 'react';

export const HeroContext = createContext();

function HeroContextProvider(props){
  return(
    <HeroContextProvider>
        {props.children}
    </HeroContextProvider>
  )
}

export default HeroContextProvider;