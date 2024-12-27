import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid #ddd;
  border-radius: 4px;
  width: ${(props) => props.width || 'auto'};
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 38px;
  margin-top: ${({ theme }) => theme.spacing.medium};

  &:hover {
    opacity: 0.9;
  }
`;

export const Labels = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.large};
    padding-bottom: ${({ theme }) => theme.spacing.small};
`;

export const Label = styled.p`
    font-weight: 500;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.secondary};
    width: ${(props) => props.width || 'auto'};
`;

export const Inputs = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.medium};
    padding-right: 10px;
`;