import React, { Component } from 'react';
import {movies} from './getMovies';
import axios from 'axios';

export default class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie:'' 
        }
    }
    async componentDidMount (){
        let res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=1");
        let data = res.data
        this.setState({
            movie:data.results[0]
        }) 
    }
    render() {
        console.log(this.props)
        return (
            <>
            {
                this.state.movie == '' ?
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Banner...</span>
                </div>:
                <div className="card banner-card" >
                    <img className="banner-img" src={`https://image.tmdb.org/t/p/original${this.state.movie.poster_path}`}   alt={this.state.movie.title}/>
                    {/* <div class="card-body" style={{background:"#282c3400",marginTop:'-10rem',color:"white"}}> */}
                        <h1 className="card-title banner-title" >{this.state.movie.original_title}</h1>
                        <p className="card-text banner-text" >{this.state.movie.overview}</p>
                    {/* </div> */}
                </div>
            }
            </>
        );
    }
}