import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};


// nother sort: src/utils/index.js

// export const sortBlogs = (blogs) => {
//   return blogs.slice().sort((a, b) => {
//     const dateA = new Date(a.publishedAt);
//     const dateB = new Date(b.publishedAt);
//     return dateB - dateA; // For descending order (most recent first)
//   });
// };
