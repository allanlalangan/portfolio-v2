import { useSanityClient, groq, createImageBuilder } from "astro-sanity";

const imageBuilder = createImageBuilder(useSanityClient());

export async function getProjects() {
  const query = groq`*[_type == "project"]`;
  const projects = await useSanityClient().fetch(query);
  return projects;
}

export async function getAbout() {
  const query = groq`*[_type == "about"]`;
  const about = await useSanityClient().fetch(query);
  return about;
}

export function urlForImage(source) {
  return imageBuilder.image(source);
}

{
}
