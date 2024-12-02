import React from 'react';
import ArtistCard from './components/ArtistCard';
import { artists } from './constants';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted-color py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-accent-color mb-4 text-center">
          Welcome to the Music Collective
        </h1>
        <p className="text-xl text-secondary-color mb-12 text-center max-w-2xl mx-auto">
          Explore artists, concerts, and more in our vibrant music community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <ArtistCard 
              key={artist.slug} 
              name={artist.name} 
              slug={artist.slug} 
              imageUrl={artist.imageUrl} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
