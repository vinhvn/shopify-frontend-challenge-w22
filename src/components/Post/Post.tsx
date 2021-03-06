/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

import IconButton from '@/components/IconButton';
import Image from '@/components/Post/Image';
import Details from '@/components/Post/Details';
import { isLiked, likePost, unlikePost } from '@/utils/posts';
import { PostData } from '@/utils/types';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    media_type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    hdurl: PropTypes.string,
    thumbnail_url: PropTypes.string,
    explanation: PropTypes.string.isRequired
  }).isRequired
};

type PostProps = PropTypes.InferProps<typeof propTypes>;

const Post: React.FC<PostProps> = ({ data }) => {
  const { title, date, media_type, url, hdurl, thumbnail_url, explanation } =
    data;
  const [liked, setLiked] = useState(isLiked(date));

  const getUrl = () => {
    if (media_type === 'image') {
      return url;
    }
    return thumbnail_url !== null && thumbnail_url ? thumbnail_url : '';
  };

  const handleLike = () => {
    setLiked(true);
    likePost(data as PostData);
  };

  const handleUnlike = () => {
    setLiked(false);
    unlikePost(data as PostData);
  };

  return (
    <Card data-testid="post_container">
      <Header>
        <Title data-testid="post_title">{title}</Title>
        <Date data-testid="post_date">{date}</Date>
      </Header>
      <Image
        src={getUrl()}
        alt={title}
        liked={liked}
        onDoubleClick={liked ? handleUnlike : handleLike}
      />
      <Buttons>
        {liked ? (
          <IconButton
            icon="heart"
            ariaLabel="Like photo"
            onClick={handleUnlike}
          />
        ) : (
          <IconButton
            icon="heartOutline"
            ariaLabel="Unlike photo"
            onClick={handleLike}
          />
        )}
        <IconButton
          icon="link"
          ariaLabel="Link to photo's page"
          href={`/search?date=${date}`}
        />
        <IconButton
          icon="export"
          ariaLabel="Link to high definition photo"
          href={hdurl}
        />
      </Buttons>
      {explanation && <Details text={explanation} />}
    </Card>
  );
};

Post.propTypes = propTypes;

// Styled components below
const Card = styled.article`
  ${tw`bg-white pb-4 border-t border-b post:border post:rounded-lg border-spacestagram-gray transition-transform transform-gpu animate-post`}
`;

const Header = styled.div`
  ${tw`p-4`}
`;

const Title = styled.h3`
  ${tw`font-medium text-lg text-black`}
`;

const Date = styled.time`
  ${tw`font-normal text-xs text-spacestagram-primary`}
`;

const Buttons = styled.div`
  ${tw`flex px-4 py-3 space-x-3`}
`;

export default Post;
