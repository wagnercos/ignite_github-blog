import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2) !important;
  padding: 2rem;
  margin-top: -5rem;
  //margin-bottom: 4.5rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  & a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1.6;
    border-bottom: 1px solid transparent;
    transition: all 0.15s ease-in;

    &:last-child > svg {
      margin-top: -0.25rem;
    }

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
