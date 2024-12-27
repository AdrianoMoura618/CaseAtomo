import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
`;

export const BookList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  margin: ${({ theme }) => theme.spacing.medium} 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Titulo = styled.h1`
    padding-bottom: 5px;
    color: ${({ theme }) => theme.colors.secondary};
`;