import { SpotifyAlbum } from "@/types";
const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

async function getSpotifyAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token;
}

export async function getArtistAlbums(spotifyId: string) {
  const token = await getSpotifyAccessToken();
  
  const response = await fetch(
    `${SPOTIFY_API_BASE}/artists/${spotifyId}/albums?include_groups=album,single`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data.items as SpotifyAlbum[];
}

export async function getArtistInfo(spotifyId: string) {
  const token = await getSpotifyAccessToken();
  
  const response = await fetch(`${SPOTIFY_API_BASE}/artists/${spotifyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
} 