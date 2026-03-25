import { defineType, defineField } from "sanity";

export const pooja = defineType({
        name: "pooja",
        title: "Pooja Service",
        type: "document",
        fields: [
                defineField({
                        name: "name",
                        title: "Name of the Pooja",
                        type: "string",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "type",
                        title: "Pooja Type",
                        type: "string",
                        options: {
                                list: [
                                        { title: "Daily", value: "daily" },
                                        { title: "Special", value: "special" },
                                ],
                                layout: "dropdown",
                        },
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "description",
                        title: "Brief Description",
                        type: "text",
                        rows: 3,
                }),
                defineField({
                        name: "timing",
                        title: "Timing",
                        type: "string",
                        placeholder: "e.g., Every Evening or 6:00 AM",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "charges",
                        title: "Charges",
                        type: "string",
                        placeholder: "e.g., Rs. 500 or Rs. —",
                        validation: (Rule) => Rule.required(),
                }),
        ],
});