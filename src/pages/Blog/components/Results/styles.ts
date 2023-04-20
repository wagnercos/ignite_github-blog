import styled from 'styled-components'

export const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: fit-content(50%) fit-content(50%);
  grid-gap: 2rem;

  & a {
    height: 13.25rem;
    min-width: 0; // prevents block overflow the grid content
    padding: 2rem;
    border-radius: 10px;
    text-decoration: none;
    background-color: ${(props) => props.theme['base-post']};
    border: 2px solid transparent;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    &:hover {
      border: 2px solid ${(props) => props.theme['base-label']};
    }
  }

  & p {
    text-align: left;
    color: ${(props) => props.theme['base-text']};
    display: -webkit-box;
    -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: '...';
  }
`
export const ResultsHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  & h2 {
    flex: 2;
    color: ${(props) => props.theme['base-title']};
  }

  & span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
