import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Projects() {
  const { data, error } = useSWR(
    'https://api.github.com/users/engr-razib/repos?sort=updated',
    fetcher
  )

  if (error) return <div>Failed to load projects.</div>
  if (!data) return <div>Loading projects...</div>

  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        {data.slice(0, 6).map((repo: any) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <strong>{repo.name}</strong>
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
      <a href="https://github.com/engr-razib?tab=repositories" target="_blank" rel="noopener noreferrer">
        See All on GitHub
      </a>
    </section>
  )
}