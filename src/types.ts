import type { ProjectLink } from "./data/projects"
import type { Skills } from "./data/skills";

export interface SkillModalContent {
    type: 'skill';
    title: string;
    description: string;
    skills: Skills[];
}

export interface ProjectModalContent {
    type: 'project';
    title: string;
    description: string;
    image: string;
    stack: string[];
    links?: ProjectLink;
    rncpSkills: string[];
}

export type ModalContent = SkillModalContent | ProjectModalContent

export interface CareerBlock {
    title: string
    position: string
    date: string
    description?: string
    mainSkills: string[]
} 