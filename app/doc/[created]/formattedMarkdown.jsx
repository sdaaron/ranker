export default function formattedMarkdown({ data }) {
  return `---
    title: ${data.title}
    summary: ${data.summary}
    created_at: ${data.created_at}
    category: ${data.category}
    display: ${data.display}
    ---
    `;
}
