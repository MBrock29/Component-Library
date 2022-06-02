import styled from "styled-components";

const Button = styled.button`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  padding: ${(props) => props.theme.size.OneX}
    ${(props) => props.theme.size.TwoX};
  margin: ${(props) => props.theme.size.OneX};
  color: ${(props) => props.theme.colors.white};
`;

export const Primary = styled(Button)`
  background: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
  &:hover {
    background: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Secondary = styled(Button)`
  background: ${(props) => props.theme.colors.secondary};
  border: 2px solid ${(props) => props.theme.colors.secondary};
  &:hover {
    background: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
  }
`;
