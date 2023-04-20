import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/DefaultLayout'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:issueNumber" element={<Post />} />
      </Route>
    </Routes>
  )
}
