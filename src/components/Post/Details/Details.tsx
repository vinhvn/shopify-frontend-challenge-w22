import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import { DownOutlined } from '@ant-design/icons';

const propTypes = {
  text: PropTypes.string.isRequired
};

type DetailsProps = PropTypes.InferProps<typeof propTypes>;

const Details: React.FC<DetailsProps> = ({ text }) => {
  const [expanded, setExpanded] = useState(text.length < 240);

  return (
    <Container data-testid="details_container">
      <TextContainer aria-expanded={expanded !== null ? expanded : 'false'}>
        <Body $expanded={!!expanded} data-testid="details_body">
          {text}
        </Body>
        <Gradient $expanded={!!expanded} />
      </TextContainer>
      <ExpandButton
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-label={expanded ? 'Collapse details' : 'Expand details'}
        data-testid="details_expand-button"
      >
        <ExpandIcon $expanded={!!expanded} data-testid="details_expand-icon" />
      </ExpandButton>
    </Container>
  );
};

Details.propTypes = propTypes;

// Styled components below
const Container = styled.div`
  ${tw`px-4`}
`;

const TextContainer = styled.div`
  ${tw`relative`}
`;

interface ExpandProps {
  $expanded: boolean;
}

const Body = styled.p(({ $expanded }: ExpandProps) => [
  tw`text-sm text-spacestagram-darkgray overflow-hidden transition-max-height duration-300`,
  $expanded ? tw`max-h-96` : tw`max-h-16`
]);

const Gradient = styled.div(({ $expanded }: ExpandProps) => [
  tw`absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none transition-opacity duration-300`,
  $expanded ? tw`opacity-0` : tw`opacity-100`
]);

const ExpandButton = styled.button`
  ${tw`flex w-full mt-1 justify-center text-spacestagram-darkgray transition-colors ease-in-out duration-200 hover:text-black focus:outline-none focus:ring focus:border-spacestagram-secondary`}
`;

const ExpandIcon = styled(DownOutlined)(({ $expanded }: ExpandProps) => [
  tw`transition-transform transform duration-300`,
  $expanded && tw`rotate-180`
]);

export default Details;
