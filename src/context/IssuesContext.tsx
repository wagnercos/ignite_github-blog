import { ReactNode, useCallback, useEffect, useState } from 'react'
import { To } from 'react-router-dom'
import { createContext } from 'use-context-selector'

import { api } from '../services/api'

interface IssuesProviderProps {
  children: ReactNode
}

interface ProfileProps {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: To
}

export interface IssueProps {
  html_url: To
  title: string
  login: string
  number: number
  comments: number
  body: string
  user: { login: string }
  created_at: string
}

interface IssuesContextProps {
  profile: ProfileProps
  issues: IssueProps[]
  fetchIssues: (query: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextProps)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [profile, setProfile] = useState<ProfileProps>()
  const [issues, setIssues] = useState<IssueProps[]>([])

  async function loadProfile() {
    const response = await api.get('users/diego3g', {})
    if (response.data) {
      setProfile(response.data)
      // console.log(response.data)
    }
  }

  const fetchIssues = useCallback(
    async (query: string) => {
      const response = await api.get('/search/issues', {
        params: {
          q: `${query}repo:${profile?.login}/rsxp-2023`,
        },
      })
      const issues = response.data.items
      setIssues(issues)
    },
    [profile?.login],
  )

  useEffect(() => {
    loadProfile()
  }, [])

  // evitando que o profile retorne undefined
  if (profile) {
    return (
      <IssuesContext.Provider
        value={{
          profile,
          issues,
          fetchIssues,
        }}
      >
        {children}
      </IssuesContext.Provider>
    )
  }
}
