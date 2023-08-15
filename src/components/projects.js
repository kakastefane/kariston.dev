import { HiOutlineExternalLink } from "react-icons/hi";
import Tag from "./tag";

export default function Projects({ projects }) {
  return (
    <ul className="flex flex-col gap-10">
      {projects
        .sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
        .map((project) => (
          <li className="pb-10 border-b border-b-neutral-800" key={project.id}>
            <h3 className="text-2xl mb-4 font-bold">{project?.title}</h3>
            <p className="text-lg mb-6">{project?.description}</p>
            <div className="flex items-center justify-between">
              <span className="flex gap-4">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </span>
              <a
                className="flex items-center gap-2 hover:text-white"
                href={project?.link}
                target="_blank"
                rel="nofollow"
              >
                Go to Project
                <HiOutlineExternalLink className="w-5 h-5" />
              </a>
            </div>
          </li>
        ))}
    </ul>
  );
}
