export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text In Tweet",
      type: "string",
    },
    {
      name: "blocktweet",
      title: "Block Tweet",
      description: "ADMIN Controls Toggle if Tweet is deemed inappropiate",
      type: "boolean",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImg",
      title: "Profile Image",
      type: "string",
    },
    {
      name: "image",
      title: "Tweet Image",
      type: "string",
    },
  ],
};
