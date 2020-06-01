const unirest = require('unirest');

async function getBestPodcasts (){
  console.log("here")
  const response = await unirest.get('https://listen-api.listennotes.com/api/v2/best_podcasts?region=us&safe_mode=0')
  .header('X-ListenAPI-Key', '6fe8ac4573584c2f874c2603e57fdef3')
response.toJSON();
console.log(response);
};

async function getCuratedPodcasts (){

};

async function getEpisode (){

};

export {getBestPodcasts, getCuratedPodcasts, getEpisode}