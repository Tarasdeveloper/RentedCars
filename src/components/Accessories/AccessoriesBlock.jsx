import PropTypes from 'prop-types';

import Separator from '../Separator/Separator';

import AccessoriesItem from './AccessoriesItem';
import { AccessesBlock, AccessesTitle } from './AccessoriesBlock.styled';

const AccessoriesBlock = ({ accessories, functionalities, title }) => {
  return (
    <AccessesBlock>
      <AccessesTitle>{title}:</AccessesTitle>
      <AccessoriesItem items={accessories} separator={<Separator />} />
      <AccessoriesItem items={functionalities} separator={<Separator />} />
    </AccessesBlock>
  );
};

AccessoriesBlock.propTypes = {
  accessories: PropTypes.array.isRequired,
  functionalities: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default AccessoriesBlock;
