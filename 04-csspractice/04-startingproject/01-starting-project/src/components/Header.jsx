import logo from '../assets/logo.png';
import './Header.css'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>

      {/*
      WHEN you eant to apply styles in REACT component 
      in an inline way 
      you have to basically create an object of the style
      
      EG below

      inline styling is not preferred normally 
      because it makes the react code a bit more verbose

      but there is an advantage that you only affect a specific componenet
      */}
      <p style={{color:"red" , 
        textAlign : 'right'
      }} >A community of artists and art-lovers.</p>
    </header>
  );
}



