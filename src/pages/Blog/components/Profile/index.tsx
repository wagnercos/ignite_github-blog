import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../../../context/IssuesContext'

import { Bio, Content, Info, ProfileContainer } from './styles'

export function Profile() {
  const profile = useContextSelector(IssuesContext, (context) => {
    return context.profile
  })

  return (
    <ProfileContainer>
      <img src={profile?.avatar_url} alt="" />
      <Content>
        <Bio>
          <div>
            <h1>{profile?.name}</h1>
            <Link
              to={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <ArrowSquareOut size={16} />
            </Link>
          </div>
          <p>{profile?.bio}</p>
        </Bio>
        <Info>
          <div>
            <GithubLogo weight="fill" size={20} />
            <span>{profile?.login}</span>
          </div>
          <div>
            <Buildings weight="fill" size={20} />
            <span>{profile?.company}</span>
          </div>
          <div>
            <Users weight="fill" size={20} />
            <span>{profile?.followers} seguidores</span>
          </div>
        </Info>
      </Content>
    </ProfileContainer>
  )
}
