import { defineType, defineField } from "sanity";

export const staff = defineType({
        name: "staff",
        title: "Temple Committee",
        type: "document",
        fields: [
                defineField({
                        name: "name",
                        title: "Full Name",
                        type: "string",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "role",
                        title: "Role / Designation",
                        type: "string",
                        description: "e.g., President, Secretary, Member",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "desc",
                        title: "Description",
                        type: "text",
                        description: "A brief bio or description of their contribution.",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "image",
                        title: "Profile Image",
                        type: "image",
                        options: {
                                hotspot: true, // Allows you to crop the face properly in the CMS
                        },
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "priority",
                        title: "Display Priority",
                        type: "number",
                        description: "Lower numbers appear first (e.g., 1 for President, 2 for Vice President).",
                }),
        ],
});