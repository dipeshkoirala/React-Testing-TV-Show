// import {useEffect} from 'react'
import axios from 'axios'

// export const fetchShowFn=(props)=>{
//  useEffect(() => {
    export const fetchShow = () => {
      return axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
        //   setShow(res.data);
          console.log(res);
          return res;
        //   setSeasons(formatSeasons(res.data._embedded.episodes));
        })
        .catch(err=>{
            console.error("error fetching", err.message)
            return err;
        })
    };
    fetchShow();
//   }, []);

// }