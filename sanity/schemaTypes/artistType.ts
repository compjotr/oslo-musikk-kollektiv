import { defineField, defineType } from "sanity";

export const artistType = defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Biography",
    }),
    defineField({
      name: "profileImage",
      type: "image",
      title: "Profile Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "concerts",
      type: "array",
      title: "Upcoming Concerts",
      of: [
        {
          type: "object",
          fields: [
            { name: "date", type: "datetime", title: "Date & Time" },
            { name: "venue", type: "string", title: "Venue" },
            { name: "venueLink", type: "url", title: "Venue Link" },
            { name: "ticketLink", type: "url", title: "Ticket Link" },
          ],
        },
      ],
    }),
    defineField({
      name: "albums",
      type: "array",
      title: "Albums",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Album Title" },
            { name: "description", type: "text", title: "Description" },
            { name: "coverImage", type: "image", title: "Cover Image" },
            { name: "spotifyLink", type: "url", title: "Spotify Link" },
          ],
        },
      ],
    }),
  ],
});
