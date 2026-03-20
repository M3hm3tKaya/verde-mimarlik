"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import { projects, categories } from "@/data/projects";
import clsx from "clsx";

export default function ProjelerPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredProjects =
    activeCategory === "Tümü" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          label="Portföy"
          title="Projelerimiz"
          description="Sürdürülebilir mimarlık ilkelerimizle tasarlanan tüm projelerimize göz atın."
        />
      </section>

      {/* Filter */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-8 overflow-hidden">
        <FadeIn>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "px-4 sm:px-5 py-2.5 text-sm tracking-wide transition-all duration-300 min-h-[44px]",
                  activeCategory === cat
                    ? "bg-verde-dark text-white"
                    : "bg-verde-light/20 text-verde-dark hover:bg-verde-light/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 sm:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <FadeIn>
            <div className="text-center py-16">
              <p className="text-verde-muted text-lg">Bu kategoride henüz proje bulunmamaktadır.</p>
            </div>
          </FadeIn>
        )}
      </section>
    </>
  );
}
