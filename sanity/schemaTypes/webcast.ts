import { defineType, defineField } from "sanity";

export const webcast = defineType({
        name: "webcast",
        title: "Webcast Links",
        type: "document",
        fields: [
                defineField({
                        name: "sessionSlot",
                        title: "Select Day & Session",
                        type: "string",
                        options: {
                                list: [
                                        { title: "3 April - Morning", value: "3_april_morning" },
                                        { title: "3 April - Evening", value: "3_april_evening" },
                                        { title: "4 April - Morning", value: "4_april_morning" },
                                        { title: "4 April - Evening", value: "4_april_evening" },
                                        { title: "5 April - Morning", value: "5_april_morning" },
                                        { title: "5 April - Evening", value: "5_april_evening" },
                                        { title: "6 April - Morning", value: "6_april_morning" },
                                ],
                        },
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "youtubeLink",
                        title: "Web cast link",
                        type: "url",
                        placeholder: "https://youtube.com/live/...",
                        validation: (Rule) => Rule.required(),
                }),
        ],
});