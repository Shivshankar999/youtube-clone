const GOOGLE_API_KEY = "AIzaSyCFs6oYtp4ZtouzUop2trJ0LmJyiVuF9w0";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SUGGUSSTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
