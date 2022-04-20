import { GraphQLClient } from 'graphql-request'
import { gql } from 'graphql-request'

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT)

export async function getCMS() {
  return graphcms
}

// Queries

const projectsQuery = gql`
{
projects {
	desc
	id
	language
	license
	link
	name
	type
	favourite
	}
}
`

export async function getProjects() {
  const { projects } = await graphcms.request(projectsQuery)
  return projects
}