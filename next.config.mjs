import nextra from 'nextra'

const withNextra = nextra({
  // Mermaid code blocks (```mermaid) are rendered as diagrams.
  defaultShowCopyCode: true,
  search: {
    codeblocks: false,
  },
})

export default withNextra({
  reactStrictMode: true,
})
