import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

import Button from '@/components/Button';
import { checkValidDate, getCurrentDate } from '@/utils/dates';

const propTypes = {
  onSearch: PropTypes.func.isRequired
};

type SearchProps = PropTypes.InferProps<typeof propTypes>;

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [date, setDate] = useState(getCurrentDate());
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (checkValidDate(date)) {
      onSearch(date);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Card>
      <Heading>Search by Date</Heading>
      <Warning error={error}>
        Please pick a date that is between{' '}
        <span tw="text-spacestagram-primary">1995-06-16</span> and today&apos;s
        date: <span tw="text-spacestagram-primary">{getCurrentDate()}</span>
      </Warning>
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

interface WarningProps {
  error: boolean;
}

const Warning = styled.p(({ error }: WarningProps) => [
  tw`font-normal text-base transition-colors duration-200`,
  error ? tw`text-red-600` : tw`text-spacestagram-darkgray`
]);

const DateInput = styled.input`
  ${tw`px-4 py-2 text-sm w-full rounded-lg border focus:outline-none focus:ring focus:border-spacestagram-secondary`}
`;

export default Search;
