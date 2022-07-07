import projects from './index.json';
export type ProjectType = typeof projects[0] & {links: ProjectLinkType[]};
export type ProjectLinkType = typeof projects[0]['links'][0];