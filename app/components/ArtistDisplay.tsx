"use client";

import { Artist, SpotifyAlbum, SpotifyArtist } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./ButtonComponent";
import Pagination from "../../utils/pagination";

interface ArtistDisplayProps {
  artist: Artist;
  spotifyInfo: SpotifyArtist | null;
  albums: {
    albums: SpotifyAlbum[];
    singles: SpotifyAlbum[];
    appearsOn: SpotifyAlbum[];
  };
}

const ITEMS_PER_PAGE = 6;

export default function ArtistDisplay({
  artist,
  spotifyInfo,
  albums,
}: ArtistDisplayProps) {
  const [currentAlbumsPage, setCurrentAlbumsPage] = useState(1);
  const [currentSinglesPage, setCurrentSinglesPage] = useState(1);
  const [currentAppearsPage, setCurrentAppearsPage] = useState(1);

  // Calculate pagination for each section
  const currentAlbums = albums.albums.slice(
    (currentAlbumsPage - 1) * ITEMS_PER_PAGE,
    currentAlbumsPage * ITEMS_PER_PAGE
  );

  const currentSingles = albums.singles.slice(
    (currentSinglesPage - 1) * ITEMS_PER_PAGE,
    currentSinglesPage * ITEMS_PER_PAGE
  );

  const currentAppearsOn = albums.appearsOn.slice(
    (currentAppearsPage - 1) * ITEMS_PER_PAGE,
    currentAppearsPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg mt-8">
      {/* Artist Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
          {artist.name}
        </h1>
        <p className="text-lg text-gray-700">{artist.bio}</p>
        {spotifyInfo && (
          <>
            <p className="text-sm text-gray-500 mt-2">
              {spotifyInfo.followers.total.toLocaleString()} Spotify Followers
            </p>
            <div className="mt-4">
              <Button
                href={spotifyInfo.external_urls.spotify}
                variant="spotify"
                className="text-sm px-4 py-1.5"
              >
                Listen on Spotify
              </Button>
            </div>
          </>
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
      {albums.albums.length > 0 && (
        <>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              Albums
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentAlbums.map((album) => (
                <div
                  key={album.id}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
                >
                  <Image
                    src={album.images[0]?.url || "/default-image.jpg"}
                    alt={album.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover mb-4 rounded-lg shadow-md"
                  />
                  <h3 className="font-semibold text-gray-800">{album.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Released:{" "}
                    {new Date(album.release_date).toLocaleDateString()}
                  </p>
                  <div className="mt-auto">
                    <Button
                      href={album.external_urls.spotify}
                      variant="spotify"
                      className="text-xs px-3 py-1"
                    >
                      Listen on Spotify
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            {albums.albums.length > ITEMS_PER_PAGE && (
              <div className="mt-12 mb-8">
                <Pagination
                  totalItems={albums.albums.length}
                  itemsPerPage={ITEMS_PER_PAGE}
                  currentPage={currentAlbumsPage}
                  onPageChange={setCurrentAlbumsPage}
                />
              </div>
            )}
          </div>
        </>
      )}

      {albums.singles.length > 0 && (
        <>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              Singles & EPs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentSingles.map((album) => (
                <div
                  key={album.id}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
                >
                  <Image
                    src={album.images[0]?.url || "/default-image.jpg"}
                    alt={album.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover mb-4 rounded-lg shadow-md"
                  />
                  <h3 className="font-semibold text-gray-800">{album.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Released:{" "}
                    {new Date(album.release_date).toLocaleDateString()}
                  </p>
                  <div className="mt-auto">
                    <Button
                      href={album.external_urls.spotify}
                      variant="spotify"
                      className="text-xs px-3 py-1"
                    >
                      Listen on Spotify
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            {albums.singles.length > ITEMS_PER_PAGE && (
              <div className="mt-12 mb-8">
                <Pagination
                  totalItems={albums.singles.length}
                  itemsPerPage={ITEMS_PER_PAGE}
                  currentPage={currentSinglesPage}
                  onPageChange={setCurrentSinglesPage}
                />
              </div>
            )}
          </div>
        </>
      )}

      {albums.appearsOn.length > 0 && (
        <>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              Appears On
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentAppearsOn.map((album) => (
                <div
                  key={album.id}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
                >
                  <Image
                    src={album.images[0]?.url || "/default-image.jpg"}
                    alt={album.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover mb-4 rounded-lg shadow-md"
                  />
                  <h3 className="font-semibold text-gray-800">{album.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Released:{" "}
                    {new Date(album.release_date).toLocaleDateString()}
                  </p>
                  <div className="mt-auto">
                    <Button
                      href={album.external_urls.spotify}
                      variant="spotify"
                      className="text-xs px-3 py-1"
                    >
                      Listen on Spotify
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            {albums.appearsOn.length > ITEMS_PER_PAGE && (
              <div className="mt-12 mb-8">
                <Pagination
                  totalItems={albums.appearsOn.length}
                  itemsPerPage={ITEMS_PER_PAGE}
                  currentPage={currentAppearsPage}
                  onPageChange={setCurrentAppearsPage}
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
