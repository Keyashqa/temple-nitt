import { defineType, defineField } from "sanity";

export const balalayam = defineType({
        name: "balalayam",
        title: "Balalayam Video",
        type: "document",
        fields: [
                defineField({
                        name: "title",
                        title: "Video Title",
                        type: "string",
                        initialValue: "Kumbabishekam Highlights",
                }),
                defineField({
                        name: "videoFile",
                        title: "Upload Video File",
                        type: "file",
                        options: {
                                accept: "video/mp4,video/x-m4v,video/*",
                        },
                        description: "Upload the MP4 video here.",
                }),
        ],
});