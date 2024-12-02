export interface SpotifyAlbum {
  id: string;
  name: string;
  images: { url: string; height: number; width: number }[];
  release_date: string;
  external_urls: {
    spotify: string;
  };
}
