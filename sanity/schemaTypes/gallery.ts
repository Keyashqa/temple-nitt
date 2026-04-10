import { defineType, defineField } from "sanity";

export const gallery = defineType({
        name: "gallery",
        title: "Gallery",
        type: "document",
        fields: [
                defineField({
                        name: "title",
                        title: "Image Title",
                        type: "string",
                        description: "English and Tamil title (e.g. Navagraham நவக்கிரகம்)",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "category",
                        title: "Category",
                        type: "reference",
                        to: [{ type: "category" }], // Points to the schema we created above
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "tag",
                        title: "Short Tag (e.g. Sacred Fire)",
                        type: "string",
                }),
                defineField({
                        name: "media",
                        title: "Media (Image or Video)",
                        type: "array",
                        of: [
                                { type: "image", options: { hotspot: true } },
                                {
                                        name: "video",
                                        type: "file",
                                        title: "Video File",
                                        options: { accept: "video/*" }
                                }
                        ],
                        validation: (Rule) => Rule.max(1).required(), // Keeps it as a single choice
                }),
        ],
});