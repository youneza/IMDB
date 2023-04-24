import axios from "axios";
import React, { useEffect, useState }  from "react";

function Moviecard () {
  const [post, setPost] = useState();
  

  useEffect(() => {
    
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9925fbc4c3cd81632953ab5a5f0f57f5")
    .then((response) => {setPost(response.data.results)})
  }, []);
console.log(post);
if(post){
  
  return (
   
    <div  className="container ml-5 pb-5 grid grid-cols-1  pt-5 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {post.map((game) => (
      <a  href={'#-'} className="group">
        <div Layout className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          
          <img
           src={'https://image.tmdb.org/t/p/w500'+game.backdrop_path}
            alt={game.imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h1 className="mt-4  text-gray-700">{game.title}</h1>
        <h2 className="mt-1 text-lg font-medium text-gray-900">{game.release_date}</h2> <br/>  
<a href={game.game_url} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Play Now</a>

      </a>
    ))}
  </div>

  )
}
 }
export default Moviecard;

