import React from "react";
import Image from "next/image";
import Button from "./ButtonComponent";

interface ArtistCardProps {
  name: string;
  slug: string;
  imageUrl?: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ name, slug, imageUrl }) => {
  return (
    <div className="bg-white border-2 border-accent-color rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]">
      <Image
        src={imageUrl || "/default-image.jpg"}
        alt={`${name}'s image`}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 border-t-2 border-accent-color bg-gradient-to-b from-white to-muted-color text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">{name}</h2>
        <Button href={`/artists/${slug}`} className="text-white">
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default ArtistCard;
