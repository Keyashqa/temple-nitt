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
                                        { title: "6 April - Evening", value: "6_april_evening" },
                                ],
                        },
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "youtubeLink",
                        title: "Web cast link",
                        type: "text",
                        placeholder: "https://link1.com, https://link2.com",
                        validation: (Rule) => Rule.required(),
                }),
        ],
});