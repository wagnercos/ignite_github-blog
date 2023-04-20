import { Link } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'

import { IssuesContext } from '../../../../context/IssuesContext'
import { dateFormatter } from '../../../../utils/formatter'

import { ResultsContainer, ResultsHeader } from './styles'

export function Results() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  return (
    <ResultsContainer>
      {issues.map(({ number, title, created_at, body }) => {
        return (
          <Link to={`/post/${number}`} key={number}>
            <ResultsHeader>
              <h2>{title}</h2>
              <span>{dateFormatter.format(new Date(created_at))}</span>
            </ResultsHeader>
            <p>{body}</p>
          </Link>
        )
      })}
    </ResultsContainer>
  )
}
