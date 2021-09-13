import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import tw from 'twin.macro';

import { getCurrentDate } from '@/utils/dates';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import IconButton from '@/components/Button/IconButton';

const IndexPage: NextPage = () => {
  const [date, setDate] = useState(getCurrentDate());
  const [processing, setProcessing] = useState(false);

  const queryPosts = async () => {
    setProcessing(true);
    const response = await fetch(`/api/photos?date=${date}`).then((res) =>
      res.json()
    );
    setDate(response.new_date);
    setProcessing(false);
  };

  return (
    <Layout title="Spacestagram">
      <Navbar />
      <div tw="flex space-x-4 p-4">
        <Button onClick={() => {}}>Search</Button>
        <Button outline onClick={() => {}}>
          Change
        </Button>
        <IconButton icon="search" fill onClick={() => {}} />
        <IconButton icon="heart" onClick={() => {}} />
      </div>
      <div tw="flex p-4">
        <Button block onClick={queryPosts}>
          {processing ? 'Loading...' : 'Load More Posts'}
        </Button>
      </div>
    </Layout>
  );
};

export default IndexPage;
