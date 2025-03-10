
// const { Client } = require("@notionhq/client")

// const notion = new Client({
//   auth: process.env.NOTION_TOKEN,
// })

// export const getAllPublished = async () => {
//   const posts = await notion.databases.query({
//     database_id: process.env.DATABASE_ID,
//     filter: {
//       property: "Published",
//       checkbox: {
//         equals: true,
//       },
//     },
//     sorts: [
//       {
//         property: "Date",
//         direction: "descending",
//       },
//     ],
//   });



//   const allPosts = posts.results;

//   return allPosts.map((post) => {
//     return getPageMetaData(post);
//   });
// };

//   // console.log(allPosts);

// const getPageMetaData = (post) => {
//   const getTags = (tags) => {
//     const allTags = tags.map((tag) => {
//       return tag.name;
//     });

//     return allTags;
//   };

//   return {
//     id: post.id,
//     title: post.properties.Name.title[0].plain_text,
//     // tags: getTags(post.properties.Tags.plain_text),
//     description: post.properties.Description.rich_text[0].plain_text,
//     date: getToday(post.properties.Date.last_edited_time),
//     slug: post.properties.Slug.rich_text[0].plain_text,
//   };
// };


// function getToday (datestring) {
//   const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//   let date = new Date();

//   if (datestring) {
//     date = new Date(datestring);
//   }

//   const day = date.getDate();
//   const month = months[date.getMonth()];
//   const year = date.getFullYear();
//   let today = `${month} ${day}, ${year}`;

//   return today;
// };


// export const getSinglePost = async (slug) => {
//   const response = await notion.databases.query({
//     database_id: process.env.DATABASE_ID,
//     filter: {
//       property: "Slug",
//       formula: {
//         string: {
//           equals: slug,
//         },
//       },
//     },
//   });
//   const page = response.results[0];
//   const metadata = getPageMetaData(page);
//   const mdblocks = await n2m.pageToMarkdown(page.id);
//   const mdString = n2m.toMarkdownString(mdblocks);

//   return {
//     // metadata,
//     markdown: mdString,
//   };
// }

// import { Client } from "@notionhq/client";
// import { NotionToMarkdown } from "notion-to-md";

// const notion = new Client({
//   auth: process.env.NOTION_TOKEN,
// });

// const n2m = new NotionToMarkdown({ notionClient: notion });

// export const getAllPublished = async () => {
//   const posts = await notion.databases.query({
//     database_id: process.env.DATABASE_ID as string,
//     filter: {
//       property: "Published",
//       checkbox: {
//         equals: true,
//       },
//     },
//     sorts: [
//       {
//         property: "Date",
//         direction: "descending",
//       },
//     ],
//   });

//   const allPosts = posts.results;

//   return allPosts.map((post) => {
//     if ('properties' in post) {
//       return getPageMetaData(post as unknown as Post);
//     }
//     throw new Error('Invalid post type');
//   });
// };

// interface Post {
//   id: string;
//   properties: {
//     Name: {
//       title: Array<{ plain_text: string }>;
//     };
//     Description: {
//       rich_text: Array<{ plain_text: string }>;
//     };
//     Date: {
//       last_edited_time: string;
//     };
//     Slug: {
//       rich_text: Array<{ plain_text: string }>;
//     };
//     Tags?: {
//       multi_select: Array<{ name: string }>;
//     };
//   };
// }

// const getPageMetaData = (post: Post) => {
//   const getTags = (tags: Array<{ name: string }>) => {
//     return tags.map((tag) => tag.name);
//   };

//   return {
//     id: post.id,
//     title: post.properties.Name.title[0].plain_text,
//     // tags: getTags(post.properties.Tags?.multi_select || []),
//     description: post.properties.Description.rich_text[0].plain_text,
//     date: getToday(post.properties.Date.last_edited_time),
//     slug: post.properties.Slug.rich_text[0].plain_text,
//   };
// };

// function getToday(datestring?: string): string {
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   let date = new Date();

//   if (datestring) {
//     date = new Date(datestring);
//   }

//   const day = date.getDate();
//   const month = months[date.getMonth()];
//   const year = date.getFullYear();
//   const today = `${month} ${day}, ${year}`;

//   return today;
// }

// export const getSinglePost = async (slug: string) => {
//   const response = await notion.databases.query({
//     database_id: process.env.DATABASE_ID as string,
//     filter: {
//       property: "Slug",
//       formula: {
//         string: {
//           equals: slug,
//         },
//       },
//     },
//   });
//   const page = response.results[0];
//   if ('properties' in page) {
//     const metadata = getPageMetaData(page as unknown as Post);
//   }
//   const mdblocks = await n2m.pageToMarkdown(page.id);
//   const mdString = n2m.toMarkdownString(mdblocks);

//   return {
//     // metadata,
//     markdown: mdString,
//   };
// };

