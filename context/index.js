import React, {useState, createContext} from 'react'

const unirest = require('unirest');
const BestPodcastContext = createContext();
const BestPodCastConsumer = BestPodcastContext.Consumer;

const BestPodCastProvider = (props) => {
  const [bestPodcastData, updateBestPodcastData] = useState({})
  
  async function getBestPodcasts (){
    const response = await unirest.get('https://listen-api.listennotes.com/api/v2/best_podcasts?region=us&safe_mode=0')
    .header('X-ListenAPI-Key', '6fe8ac4573584c2f874c2603e57fdef3')
    response.toJSON();
    updateBestPodcastData(response.body)
  };

    return(
        <BestPodcastContext.Provider value = 
        {{
          bestPodcastData,
            getBestPodcasts
          }}
        >
          {props.children}
        </BestPodcastContext.Provider>
    )
}

export {BestPodcastContext, BestPodCastProvider, BestPodCastConsumer}