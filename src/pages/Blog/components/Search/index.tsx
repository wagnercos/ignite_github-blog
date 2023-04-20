import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { IssuesContext } from '../../../../context/IssuesContext'

import { SearchContainer } from './styles'

const searchIssue = z.object({
  query: z.string(),
})

type SearchFormIssues = z.infer<typeof searchIssue>

export function Search() {
  const { fetchIssues, issues } = useContextSelector(
    IssuesContext,
    (context) => {
      return {
        fetchIssues: context.fetchIssues,
        issues: context.issues,
      }
    },
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormIssues>({
    resolver: zodResolver(searchIssue),
  })

  async function handleSearchIssues(data: SearchFormIssues) {
    await fetchIssues(data.query)
    reset()
  }

  return (
    <SearchContainer>
      <div>
        <h3>Publicações</h3>
        <span>
          {issues.length === 0 ? '0' : issues.length}{' '}
          {issues.length === 1 ? 'publicação' : 'publicações'}
        </span>
      </div>
      <form onSubmit={handleSubmit(handleSearchIssues)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </SearchContainer>
  )
}
