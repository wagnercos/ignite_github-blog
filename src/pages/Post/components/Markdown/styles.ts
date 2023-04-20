import styled from 'styled-components'

export const MarkdownContainer = styled.div`
  width: 100%;
  padding: 2.5rem 2rem;
  margin: 0 auto;

  & .markdown {
    a {
      color: ${(props) => props.theme.blue};
    }

    p {
      margin: 0.75rem 0;
    }
  }
`
