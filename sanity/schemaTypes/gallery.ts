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
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "category",
                        title: "Category",
                        type: "string",
                        options: {
                                list: [
                                        { title: "Temple", value: "Temple" },
                                        { title: "Kumbabishekam", value: "Kumbabishekam" }, 
                                ],
                        },
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "tag",
                        title: "Short Tag (e.g. Sacred Fire)",
                        type: "string",
                }),
                defineField({
                        name: "image",
                        title: "Upload Image",
                        type: "image",
                        options: { hotspot: true },
                        validation: (Rule) => Rule.required(),
                }),
        ],
});