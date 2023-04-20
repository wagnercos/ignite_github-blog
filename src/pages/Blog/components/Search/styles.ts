import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 3rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  & input {
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
