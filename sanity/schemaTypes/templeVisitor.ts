import { defineType } from "sanity";

export const templeVisitor = defineType({
  name: "templeVisitor",
  title: "Temple Visitor",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title / Prefix",
      type: "string",
      description: 'e.g. "Shri", "Poojya Shri", "Poojya Shri Swami"',
    },
    {
      name: "location",
      title: "Location / Mutt",
      type: "string",
      description: "City or Mutt they are associated with (optional)",
    },
    {
      name: "date",
      title: "Visit Date",
      type: "string",
      description: 'Date of visit — e.g. "13-09-1970" or just "1972" if exact date is unknown',
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "note",
      title: "Visit Note",
      type: "text",
      description: "Optional short note about the visit or the personality",
      rows: 3,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower number appears first",
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "photo",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
