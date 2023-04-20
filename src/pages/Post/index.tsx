import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'

import { IssueProps, IssuesContext } from '../../context/IssuesContext'
import { api } from '../../services/api'
import { Markdown } from './components/Markdown'
import { PostInfo } from './components/PostInfo'

import { PostContainer } from './styles'

export function Post() {
  const [issue, setIssue] = useState<IssueProps>()

  const profile = useContextSelector(IssuesContext, (context) => {
    return context.profile
  })

  const { issueNumber } = useParams()

  const loadIssue = useCallback(async () => {
    try {
      const response = await api.get(
        `repos/${profile.login}/rsxp-2023/issues/${issueNumber}`,
      )
      if (response.data) {
        // console.log(response.data)
        setIssue(response.data)
      }
    } catch (error) {
      console.error(error)
    }
  }, [issueNumber, profile])

  useEffect(() => {
    loadIssue()
  }, [loadIssue])

  if (issue) {
    return (
      <PostContainer>
        <PostInfo
          title={issue.title}
          user={issue.user}
          comments={issue.comments}
          created_at={issue.created_at}
          html_url={issue.html_url}
        />
        <Markdown body={issue.body} />
      </PostContainer>
    )
  }
}
