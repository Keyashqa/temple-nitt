import { defineType, defineField } from "sanity";

export const calendarRow = defineType({
        name: "calendarRow",
        title: "Special Pooja Calendar",
        type: "document",
        fields: [
                defineField({
                        name: "eventName",
                        title: "Vratham / Pooja Name",
                        type: "string",
                        placeholder: "e.g., EKADASI or PRADOSHAM",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "order",
                        title: "Display Order",
                        type: "number",
                        description: "Use 1, 2, 3... to sort the rows",
                }),
                // Auto-generating fields for Jan-Dec
                ...["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"].map((month) =>
                        defineField({
                                name: month,
                                title: month.charAt(0).toUpperCase() + month.slice(1),
                                type: "string",
                                description: "Enter dates separated by commas (e.g., 1, 4 or 23, 25)",
                                placeholder: "1, 4",
                        })
                ),
        ],
});