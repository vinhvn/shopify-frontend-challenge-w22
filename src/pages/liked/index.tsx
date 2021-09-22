import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import tw, { styled } from 'twin.macro';

import { getPosts } from '@/utils/posts';
import type { PostData } from '@/utils/types';

import Layout from '@/components/Layout';
import Paragraph from '@/components/Paragraph';
import Post from '@/components/Post';

const LikedPage: NextPage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <Layout
      title="Spacestagram | Liked"
      column={
        <>
          <Paragraph title="Liked 💖">
            Browse through your saved photos!
          </Paragraph>
        </>
      }
    >
      <Paragraph title="Posts">
        {posts.length === 0 ? 'No posts saved yet!' : undefined}
      </Paragraph>
      <PostsContainer>
        {posts.length > 0 &&
          posts.map((post) => <Post key={post.date} data={post} />)}
      </PostsContainer>
    </Layout>
  );
};

const PostsContainer = styled.div`
  ${tw`flex flex-col space-y-4`}
`;

export default LikedPage;
