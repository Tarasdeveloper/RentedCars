import { Dna } from 'react-loader-spinner';
import { SpinnerContainer } from './Spinner.styled';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      ;
    </SpinnerContainer>
  );
};

export default Spinner;
