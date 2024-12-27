import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const BookInfo = styled.div`
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  .author {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 4px;
  }

  .details {
    font-size: 0.9em;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 2px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.small};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const Input = styled.input`
  padding: 8px;
  margin: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: ${(props) => props.width || 'auto'};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Labels = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.large};
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