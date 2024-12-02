import React from 'react';
import Image from 'next/image';
import { getArtistAlbums, getArtistInfo } from '../../../utils/spotify';
import { SpotifyAlbum } from '../../../types/spotify';
import { artistDetails } from '../../constants/artists';

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function ArtistPage({ params }: PageProps) {
  const { slug } = params;
  const artist = artistDetails[slug];

  if (!artist) {
    return <p className="text-red-500">Artist not found.</p>;
  }

  let albums: SpotifyAlbum[] = [];
  let spotifyInfo = null;
  
  if (artist.spotifyId) {
    [albums, spotifyInfo] = await Promise.all([
      getArtistAlbums(artist.spotifyId),
      getArtistInfo(artist.spotifyId)
    ]);
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg mt-8">
      {/* Artist Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">{artist.name}</h1>
        <p className="text-lg text-gray-700">{artist.bio}</p>
        {spotifyInfo && (
          <p className="text-sm text-gray-500 mt-2">
            {spotifyInfo.followers.total.toLocaleString()} Spotify Followers
          </p>
        )}
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mb-8">
        <Image
          src={artist.imageUrl || "/default-image.jpg"}
          alt={`${artist.name} profile`}
          width={300}
          height={300}
          className="w-64 h-64 object-cover rounded-full shadow-xl border-4 border-gray-300"
        />
      </div>

      {/* Upcoming Concerts */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Upcoming Concerts</h2>
        <ul className="space-y-4">
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-md">
            <div>
              <span className="font-medium text-gray-700">Date & Time:</span> March 10, 2024, 7:00 PM
            </div>
            <div>
              <span className="font-medium text-gray-700">Venue:</span>{' '}
              <a href="https://maps.google.com" className="text-blue-500 underline">
                The Grand Arena
              </a>
            </div>
            <div>
              <span className="font-medium text-gray-700">Tickets:</span>{' '}
              <a href="https://tickets.com" className="text-blue-500 underline">
                Available here
              </a>
            </div>
          </li>
          {/* Add more concerts as needed */}
        </ul>
      </div>

      {/* Discography */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Discography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <div key={album.id} className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={album.images[0]?.url || "/default-image.jpg"}
                alt={album.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover mb-4 rounded-lg shadow-md"
              />
              <h3 className="font-semibold text-gray-800">{album.name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                Released: {new Date(album.release_date).getFullYear()}
              </p>
              <a
                href={album.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Listen on Spotify
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Articles/News */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Articles & News</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md">
            <a href="https://news.com" className="text-blue-500 underline">
              Recent Achievement
            </a>
            <span className="text-gray-500">- A brief description of the news.</span>
          </li>
          {/* Add more articles as needed */}
        </ul>
      </div>
    </div>
  );
}
