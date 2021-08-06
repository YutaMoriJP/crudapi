import Wrapper from "../../styled/Box";
import Text from "../../styled/Text";

const Box = ({ children }) => {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Box;
