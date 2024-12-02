import { Artist, SpotifyAlbum, SpotifyArtist } from "@/types";
import Image from "next/image";
import React from "react";
interface ArtistDisplayProps {
  artist: Artist;
  spotifyInfo: SpotifyArtist | null;
  albums: SpotifyAlbum[];
}

export default function ArtistDisplay({
  artist,
  spotifyInfo,
  albums,
}: ArtistDisplayProps) {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg mt-8">
      {/* Artist Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
          {artist.name}
        </h1>
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

      {/* Discography */}
      {albums.length > 0 && (
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Discography
          </h2>
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
                  Released: {new Date(album.release_date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
