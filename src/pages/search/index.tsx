import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';

import { getCurrentDate, formatFullDate } from '@/utils/dates';
import type { PostData } from '@/utils/types';

import Layout from '@/components/Layout';
import Paragraph from '@/components/Paragraph';
import Post from '@/components/Post';
import Loading from '@/components/Loading';
import Search from '@/components/Search';

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { date: queryDate } = router.query;
  const [date, setDate] = useState((queryDate as string) || getCurrentDate());
  const [post, setPost] = useState<PostData | undefined>(undefined);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    queryPost();
  }, []);

  const queryPost = async (newDate?: string) => {
    setProcessing(true);
    const response = await fetch(`/api/photo?date=${newDate || date}`).then(
      (res) => res.json()
    );
    setPost(response.photo);
    setProcessing(false);
  };

  const handleSearch = (newDate: string) => {
    setDate(newDate);
    queryPost(newDate);
  };

  const getHeading = () => {
    if (processing) {
      return 'Searching';
    }
    return post ? formatFullDate(date) : 'No Results';
  };

  return (
    <Layout
      title="Spacestagram | Search"
      column={
        <>
          <Paragraph title="Search 🔍">
            Search for a specific photo of the day here!
          </Paragraph>
          <Search onSearch={handleSearch} />
        </>
      }
    >
      <Paragraph title={getHeading()} />
      {processing && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      {post && <Post key={post.date} data={post} />}
    </Layout>
  );
};

const LoadingContainer = styled.div`
  ${tw`flex justify-center py-8`}
`;

export default SearchPage;
