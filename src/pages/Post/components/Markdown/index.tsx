import ReactMarkdown from 'react-markdown'
import { MarkdownContainer } from './styles'

interface MarkdownProps {
  body: string
}

export function Markdown({ body }: MarkdownProps) {
  return (
    <MarkdownContainer>
      <ReactMarkdown className="markdown">{body}</ReactMarkdown>
    </MarkdownContainer>
  )
}
