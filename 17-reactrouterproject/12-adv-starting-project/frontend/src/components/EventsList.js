import classes from './EventsList.module.css';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

//we can use the loader functions result in any of the children of the 
//vcomponent where we directly passed the loader
//but remember it will return the data to the closest loader function

//we domt neeed to do this
function EventsList({events}) {


  //function EventsList() {
  //const events = useLoaderData()


  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            
            {/* relative path */}
            <Link to={event.id}>

              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
