import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import tw, { styled } from 'twin.macro';

import { getPosts } from '@/utils/posts';
import type { PostData } from '@/utils/types';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Paragraph from '@/components/Paragraph';
import Post from '@/components/Post';

const IndexPage: NextPage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <Layout title="Spacestagram | Liked">
      <Navbar />
      <Content>
        <Paragraph title="Liked 💖">
          Browse through your saved photos!
        </Paragraph>
        <Paragraph title="Posts">
          {posts.length === 0 ? 'No posts saved yet!' : undefined}
        </Paragraph>
        <PostsContainer>
          {posts.length > 0 &&
            posts.map((post) => <Post key={post.date} data={post} />)}
        </PostsContainer>
      </Content>
    </Layout>
  );
};

const Content = styled.main`
  ${tw`flex flex-col mt-4 mb-8`}
`;

const PostsContainer = styled.div`
  ${tw`flex flex-col space-y-4`}
`;

export default IndexPage;
