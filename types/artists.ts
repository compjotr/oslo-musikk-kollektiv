import { Artist } from "@/types";

export const artists: Artist[] = [
  {
    name: "Junger",
    slug: "junger",
    bio: "Details about Junger.",
    imageUrl: "/junger.jpg",
    spotifyId: "45cJ57HdG3nN36kRmudbHq",
  },
  {
    name: "Timmy",
    slug: "timmy",
    bio: "Details about Timmy.",
    imageUrl: "/timmy.jpg",
    spotifyId: "",
  },
  {
    name: "Anakin",
    slug: "anakin",
    bio: "Details about Anakin.",
    imageUrl: "/anakin.jpeg",
    spotifyId: "5eg8Q9stSfP38jgkxAKacv",
  },
  {
    name: "MC Magnus",
    slug: "mc-magnus",
    bio: "Details about MC Magnus.",
    imageUrl: "/mc-magnus.jpeg",
    spotifyId: "4NhIYKwONSmZPB0ddZGrh9",
  },
  {
    name: "Third Attempt",
    slug: "third-attempt",
    bio: "Details about Third Attempt.",
    imageUrl: "/third-attempt.jpg",
    spotifyId: "1tsNLehJWv67iMipy0WwQR",
  },
];

export const artistDetails: Record<string, Artist> = artists.reduce(
  (acc, artist) => ({
    ...acc,
    [artist.slug]: artist,
  }),
  {}
);
