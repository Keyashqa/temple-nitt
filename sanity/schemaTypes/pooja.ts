import { defineType, defineField } from "sanity";

export const pooja = defineType({
        name: "pooja",
        title: "Pooja Service",
        type: "document",
        fields: [
                defineField({
                        name: "priority",
                        title: "Display Priority",
                        type: "number",
                        description: "Lower numbers appear first (e.g., 1 appears before 10)",
                        initialValue: 100,
                }),
                defineField({
                        name: "type",
                        title: "Pooja Category",
                        type: "string",
                        options: {
                                list: [
                                        { title: "Daily Pooja", value: "daily" },
                                        { title: "Special Pooja", value: "special" },
                                        { title: "Annual Subscription - Students", value: "student_subscription" },
                                        { title: "Annual Subscription - Staff & Alumni", value: "alumni_subscription" },
                                        { title: "Maintenance Contribution", value: "maintenance" },
                                ],
                                layout: "dropdown",
                        },
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "description",
                        title: "Service",
                        description: "e.g., Archanai, Abishegam & Prasadam",
                        type: "text",
                        rows: 2,
                }),
                defineField({
                        name: "timing",
                        title: "Schedule",
                        type: "string",
                        placeholder: "e.g., Every Day or On Auspicious Days",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "charges",
                        title: "Charges",
                        type: "string",
                        placeholder: "e.g., Rs.200",
                        validation: (Rule) => Rule.required(),
                }),
        ],
});