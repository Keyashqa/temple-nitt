import { defineType, defineField } from "sanity";

export const event = defineType({
        name: "event",
        title: "Event",
        type: "document",
        fields: [
                defineField({
                        name: "title",
                        title: "Event Title",
                        type: "string",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "timing",
                        title: "Timing",
                        type: "string",
                        placeholder: "e.g., Every Evening or 6:00 AM",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "description",
                        title: "Description",
                        type: "text",
                }),
        ],
});