"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import FadeIn from "./FadeIn";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={index * 100}>
      <Link href={`/projeler/${project.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden bg-verde-light/20">
          {/* Placeholder */}
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundColor: project.color + "30" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-verde-green/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-verde-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
            <div>
              <span className="text-xs tracking-widest text-verde-accent uppercase">{project.category}</span>
              <h3 className="text-xl font-light text-white mt-1">{project.title}</h3>
              <p className="text-sm text-white/70 mt-2">{project.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-3 sm:mt-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-light text-verde-dark group-hover:text-verde-accent transition-colors duration-300 line-clamp-1">
              {project.title}
            </h3>
            <span className="text-xs text-verde-muted">{project.year}</span>
          </div>
          <p className="text-sm text-verde-muted mt-1">{project.description}</p>
        </div>
      </Link>
    </FadeIn>
  );
}
