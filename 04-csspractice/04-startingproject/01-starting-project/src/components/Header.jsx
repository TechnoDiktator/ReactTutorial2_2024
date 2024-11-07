import logo from '../assets/logo.png';
import classes from './Header.module.css'
import {styled} from 'styled-components'

//styled components are basically react components for 
//which we have baked in the styles on our own 
//inside them insted of using 
//a css file
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  
  
  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }
  
  
  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: 'Pacifico', cursive;
    margin: 0;
  }

  
  & p {
    text-align: center;
    color: black;
    margin: 0;
  }
  
  @media (min-width: 768px) {
    & {
      margin-bottom: 4rem;
    }
  
    & h1 {
      font-size: 2.25rem;
    }
  }

`


export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>

      {
      /*
      WHEN you eant to apply styles in REACT component 
      in an inline way 
      you have to basically create an object of the style
      
      EG below

      inline styling is not preferred normally 
      because it makes the react code a bit more verbose

      but there is an advantage that you only affect a specific componenet
      */
      }
      {
      /* <p style={{color:"red" , 
        textAlign : 'right'
      }} >A community of artists and art-lovers.</p>
      */
      }
    {/* <p className={classes.paragraph}>A community of artists and art-lovers.</p> */}
    {/* as we are using the styled components 
    we have also defined the styles for the components /tags present within */}
    <p>A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}



