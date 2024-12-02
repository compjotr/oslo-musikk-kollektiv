export interface Artist {
  name: string;
  slug: string;
  bio: string;
  imageUrl: string;
  spotifyId?: string;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  images: SpotifyImage[];
  release_date: string;
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyArtist {
  id: string;
  followers: {
    total: number;
  };
  images: SpotifyImage[];
  external_urls: {
    spotify: string;
  };
}
