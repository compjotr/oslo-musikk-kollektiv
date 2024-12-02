import { getArtistAlbums, getArtistInfo } from '../../../utils/spotify';
import { notFound } from 'next/navigation';
import ArtistDisplay from '../../components/ArtistDisplay';
import { artists } from '../../../types/artists';
import { SpotifyAlbum } from '@/types';
import React from 'react';

interface AlbumData {
  albums: SpotifyAlbum[];
  singles: SpotifyAlbum[];
  appearsOn: SpotifyAlbum[];
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);

  if (!artist) {
    notFound();
  }

  let albumData: AlbumData = {
    albums: [],
    singles: [],
    appearsOn: []
  };

  let spotifyInfo = null;

  if (artist.spotifyId) {
    [albumData, spotifyInfo] = await Promise.all([
      getArtistAlbums(artist.spotifyId),
      getArtistInfo(artist.spotifyId),
    ]);
  }

  return (
    <ArtistDisplay
      artist={artist}
      spotifyInfo={spotifyInfo}
      albums={albumData}
    />
  );
}
