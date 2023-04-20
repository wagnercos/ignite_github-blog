import { Profile } from './components/Profile'
import { Results } from './components/Results'
import { Search } from './components/Search'

import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <Search />
      <Results />
    </BlogContainer>
  )
}
