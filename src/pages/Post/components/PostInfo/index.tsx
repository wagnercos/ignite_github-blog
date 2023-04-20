import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo
} from '@phosphor-icons/react'
import { Link, To } from 'react-router-dom'

import { dateFormatter } from '../../../../utils/formatter'

import { Header, Info, PostInfoContainer } from './styles'

interface PostInfoProps {
  title: string
  user: { login: string }
  comments: number
  created_at: string
  html_url: To
}

export function PostInfo({
  title,
  user,
  comments,
  created_at,
  html_url,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <Header>
        <Link to="/">
          <CaretLeft size={16} />
          Voltar
        </Link>
        <Link to={html_url}>
          Ver no Github
          <ArrowSquareOut size={16} />
        </Link>
      </Header>

      <h1>{title}</h1>

      <Info>
        <div>
          <GithubLogo weight="fill" size={20} />
          <span>{user.login}</span>
        </div>
        <div>
          <CalendarBlank weight="fill" size={20} />
          <span>{dateFormatter.format(new Date(created_at!))}</span>
        </div>
        <div>
          <ChatCircle weight="fill" size={20} />
          <span>
            {comments} {comments === 1 ? 'comentário' : 'comentários'}
          </span>
        </div>
      </Info>
    </PostInfoContainer>
  )
}
