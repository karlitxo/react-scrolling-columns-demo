export const CHIMGURL = 'cdn.hd-plus.de/senderlogos/bright-cropped';

export type Shows = {
  show: Show;
}
export type Item = {
  channelImage: string;
  shows: Show[];
}
export type Items = {
  item: Item
}
export type Show = {
    _id?: string,
    showID: number,
    channelID: number,
    title:string,
    subtitle: string,
    serie?: {
      info: string
    },
    archiv?: {
      id: number,
      episode: number,
      type: string
    },
    genre: string,
    subGenre: string,
    genreID: string,
    length: number,
    start: number,
    stop: number,
    startTime: number,
    traits?: {
      main: boolean
    },
    reviewsAllowed: string[],
    emotionIDs: number[]
  }
  

var getData = (index : Number) => {

  var results = [];

  var data = require(`../data/${index}.json`);
  
  var channelIDs = Array.from(new Set(data.result.map((item: Show) => item.channelID)
                                            .filter((value:Number, index:Number, self:any) => self.indexOf(value) === index)));
                                            
  var channelImage = (channelID) => { return `https://${CHIMGURL}/${channelID}.png` };
                                            
  channelIDs.forEach( function(channelID) {
    
    var shows = Array.from(new Set(data.result
                                  .filter( (x:Show) => x.channelID === channelID )));
    
    results.push({ channelImage: channelImage(channelID) , shows: shows})
  });

  return results;
}

export default getData;