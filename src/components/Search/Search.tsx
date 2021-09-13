import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

import Button from '@/components/Button';
import { getCurrentDate } from '@/utils/dates';

const propTypes = {
  onSearch: PropTypes.func.isRequired
};

type SearchProps = PropTypes.InferProps<typeof propTypes>;

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [date, setDate] = useState(getCurrentDate());

  const handleSearch = () => onSearch(date);

  return (
    <Card>
      <Heading>Search by Date</Heading>
      <DateInput
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button block onClick={handleSearch}>
        Search
      </Button>
    </Card>
  );
};

Search.propTypes = propTypes;

// Styled components below
const Card = styled.div`
  ${tw`bg-white px-3 py-4 space-y-3 border-t border-b post:border post:rounded-lg border-spacestagram-gray`}
`;

const Heading = styled.h3`
  ${tw`font-medium text-lg text-black`}
`;

const DateInput = styled.input`
  ${tw`px-4 py-2 text-sm w-full rounded-lg border focus:outline-none focus:ring focus:border-spacestagram-secondary`}
`;

export default Search;
