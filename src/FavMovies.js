import React, { Component } from 'react';
import PropTypes from 'prop-types';


class FavMovies extends Component{
  	
	render(){
      
      const numMovies = [1,2,3,4,5];
      const tableMov = [];
      
      return(
    	<ul>
        {numMovies.map((numMovie)=>{
      		const idMov = this.props.movies[numMovie].id;
            tableMov.push(idMov);
      	})}
        {numMovies.map((ma)=>{
          	const movieFan =[];
          	this.props.profiles.map((profile)=>{
              	const idNumber = Number(profile.favoriteMovieID)
                if(idNumber===ma){
                  movieFan.push(this.props.users[profile.userID].name)
                  console.log(movieFan);
               	}
        	})
			return(
              <li>
				<h3>{this.props.movies[ma].name}</h3>
				<ul><h4>Liked By:</h4>
				{movieFan.map((movieF)=>{
                  return(
                  
                  	<li>{movieF}</li>
                  )
                })}
				</ul>
	
              </li>
            )
      	})}
 	
  		
        </ul>
      );
    }
}

export default FavMovies;