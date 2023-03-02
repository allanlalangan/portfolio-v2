type Service = {
	name: string;
	description: string;
};

type DemoCredentials = {
	email: string;
	password: string;
};

type ProjectImage = {
	src: string;
	alt: string;
};

type Project = {
	title: string;
	description: string;
	tech: string[];
	image: ProjectImage;
	repo: string;
	url: string;
	complete: boolean;
	demo?: DemoCredentials;
};

import nomad from '../../public/assets/nomad-travel.png';
import projectMe from '../../public/assets/project-me.png';
import mma from '../public/assets/mma.png';
import stars from '../public/assets/stars.png';

export const services: Service[] = [
	{
		name: 'UI/UX Design',
		description:
			"We'll work together to create a design system that fits your brand.",
	},
	{
		name: 'Full-stack Web Development',
		description:
			'Whether you need a simple landing page, or a full-stack application, we can improve your product through intuitive user experiences',
	},
	{
		name: 'SEO',
		description:
			'Search Engine Optimization is a necessity for thriving businesses. Rank higher in Google searches to maximize your reach.',
	},
	{
		name: 'Technical Writing',
		description:
			'Search Engine Optimization is a necessity for thriving businesses. Rank higher in Google searches to maximize your reach.',
	},
];

export const projects: Project[] = [
	{
		title: 'Stars Astro',
		description:
			'A niche social platform. Generate and post astrology charts. Share cosmic wisdom and/or nonsense. Full stack app with a CRUD REST API and user authentication.',
		tech: [
			'express',
			'mongodb',
			'react',
			'react router',
			'tailwind css',
			'redux',
			'web tokens',
			'rest api',
		],
		image: { src: stars, alt: 'Stars Astrology dashboard page' },
		repo: 'https://github.com/allanlalangan/stars',
		url: 'https://stars-astro.netlify.app/',
		complete: true,
		demo: { email: 'demo@demo', password: 'Demo1234!' },
	},
	{
		title: 'Nomad Travel',
		description:
			'Locate and filter popular restaurants, hotels, and attractions anywhere in the world.',
		tech: ['react', 'material ui', 'google apis', 'rest api'],
		image: { src: nomad, alt: 'Nomad Travel map with marker' },
		repo: 'https://github.com/allanlalangan/nomad-travel',
		url: 'https://nononomad.netlify.app/',
		complete: true,
	},
	// {
	// 	title: "Martial Arts Academy",
	// 	description:
	// 		"A responsive landing page design for a local martial arts gym.",
	// 	tech: ["next", "tailwind css"],
	// 	image: { src: mma, alt: "Martial Arts gym landing page" },
	// 	repo: "https://github.com/allanlalangan/martial-masters-academy",
	// 	url: "https://mm-acdmy.netlify.app/",
	// 	complete: true,
	// },
	{
		title: 'project.Me',
		description: 'A fullstack to-do list app. Registered users can save goals.',
		tech: [
			'express',
			'mongodb',
			'react',
			'react router',
			'sass',
			'redux',
			'web tokens',
			'rest api',
		],
		image: { src: projectMe, alt: 'Project.me user goals page' },
		repo: 'https://github.com/allanlalangan/dashboard',
		url: 'https://ladev-projectme.netlify.app',
		complete: true,
		demo: { email: 'demo@demo', password: 'demo' },
	},
];

export {};
