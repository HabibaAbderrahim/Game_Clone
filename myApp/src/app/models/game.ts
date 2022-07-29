export interface IGame {

  background_image:string;
  gameName: string;
  releaseDate: string;
  metacritic_url:string;
  website:string;
  metacritic:string;
  genres:Array<IGenre>;
  parent_platforms:Array<IParentPlatform>;
  publishers:Array<IPublisher>;
  rating:Array<IRating>;
  screenshots: Array<IScreenshots>;
  trailers:Array<ITrailer>;
}
interface IGenre {
  name:string;

}

interface IParentPlatform {
  platform:{
    name:string;
  }
}

interface IPublisher {
  name:string
}

interface IRating {
  id:number;
  count:number;
  title:string;
}

interface IScreenshots {
  image_screen:string
}

interface ITrailer {

  data:{
    max:string;
  }
}


