import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2) !important;
  padding: 2rem;
  margin-top: -5rem;
  margin-bottom: 4.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  & img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
export const Bio = styled.div`
  margin-bottom: 1.5rem;

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0.5rem;

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

      & svg {
        margin-top: -0.25rem;
      }

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
