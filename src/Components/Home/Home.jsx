import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
const api_key = "0fbb7189f9a0fe7950a3f36e70615029"
const base_url = "https://api.themoviedb.org/3/movie"
const upcoming = "upcoming"
const nowPlayingMovie = "now_playing"
const popularMovie = "popular"
const topRatedMovie = "top_rated"
const image_base_url = "https://image.tmdb.org/t/p/original"
import { IoIosAdd } from "react-icons/io";
import { IoIosPlay } from "react-icons/io";


const Card = ({ image }) => {
  return (
    <div >
      <img className="card" src={image} alt="cover"></img>
    </div>
  )
}



const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>

      <div>
        {
          arr.map((item, index) => {
            return (
              <Card key={index} image={`${image_base_url}/${item.poster_path}`} />
            )
          })
        }

      </div>

    </div>
  )
}


export const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [popularPlaying, setpopularPlaying] = useState([])
  const [topRated, settopRated] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchUpcoming = async () => {
      const { data: { results } } = await axios.get(`${base_url}/${upcoming}?api_key=${api_key}`)
      setUpcomingMovies(results)
    }

    const fetchNowplaying = async () => {
      const { data: { results } } = await axios.get(`${base_url}/${nowPlayingMovie}?api_key=${api_key}`)
      setNowPlaying(results)
    }


    const fetchPopularplaying = async () => {
      const { data: { results } } = await axios.get(`${base_url}/${popularMovie}?api_key=${api_key}`)
      setpopularPlaying(results)
    }


    const fetchTopRatedplaying = async () => {
      const { data: { results } } = await axios.get(`${base_url}/${topRatedMovie}?api_key=${api_key}`)
      settopRated(results)
    }

    const getAllGenre = async () => {
      const { data: { genres } } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      setGenres(genres)
      console.log(genres)
    }


    fetchUpcoming()
    fetchNowplaying()
    fetchPopularplaying()
    fetchTopRatedplaying()
    getAllGenre()
  }, [])

  return (
    <section className="home">
      <div className="banners" style={{backgroundImage: popularPlaying[0] && popularPlaying[0].poster_path? `url(${image_base_url}/${popularPlaying[0].poster_path})`
            : "none"
        }}
      >
        
          {popularPlaying[0] && <h1>{popularPlaying[0].original_title}</h1>}
          {popularPlaying[0] && <p>{popularPlaying[0].overview}</p>}

          <div>
            <button className="butt"><IoIosPlay/>Play</button>
            <button className="butt">My List<IoIosAdd/></button>
          </div>
        
      </div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlaying} />
      <Row title={"Popular"} arr={popularPlaying} />
      <Row title={"Top Rated Movies"} arr={topRated} />

      <div className="genreBox">
        {genres.map((item) => {
          return (
            <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
          )
        })}
      </div>
    </section>



  )
}

