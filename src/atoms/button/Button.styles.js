import styled from "styled-components";

const Button = styled.button`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  padding: ${(props) => props.theme.size.nano}
    ${(props) => props.theme.size.small};
  margin: ${(props) => props.theme.size.nano};
  color: ${(props) => props.theme.colors.white};
  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
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
