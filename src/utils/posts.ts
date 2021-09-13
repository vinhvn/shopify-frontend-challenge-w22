import type { PostData } from './types';

const savePosts = (posts: Record<string, PostData>) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};

const loadPosts = (): Record<string, PostData> => {
  const stored = localStorage.getItem('posts');
  return stored ? JSON.parse(stored) : {};
};

const getDatesSet = (): Set<string> => {
  const posts = loadPosts();
  return new Set(posts ? Object.keys(posts) : []);
};

export const getPosts = (): PostData[] => {
  return Object.values(loadPosts());
};

export const isLiked = (date: string) => {
  const set = getDatesSet();
  return set.has(date);
};

export const likePost = (toAdd: PostData) => {
  const posts = loadPosts();
  if (toAdd.date in posts) {
    return;
  }
  savePosts({ ...posts, [toAdd.date]: toAdd });
};

export const unlikePost = (toRemove: PostData) => {
  const posts = loadPosts();
  if (toRemove.date in posts) {
    delete posts[toRemove.date];
  }
  savePosts({ ...posts });
};
