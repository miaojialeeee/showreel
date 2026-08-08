"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  english: string;
  year: string;
  image: string;
  size: string;
  focus?: string;
};

const projects: Project[] = [
  { id: "02", title: "江南布衣 ×「衣护工坊」", english: "JNBY × Garment Workshop", year: "2026", image: "/projects/02-garment-workshop.jpg", size: "project", focus: "center" },
  { id: "01", title: "LESS 26SS 大片", english: "LESS SS26 Campaign", year: "2025", image: "/projects/01-less.jpg", size: "small less", focus: "center" },
  { id: "07", title: "珀莱雅 × Pingu", english: "PROYA × Pingu", year: "2026", image: "/projects/07-proya-pingu.jpg", size: "secondary", focus: "center" },
  { id: "04", title: "江南布衣 ×「不在服务区」", english: "JNBY × Out of Service", year: "2025", image: "/projects/04-jnby.jpg", size: "project", focus: "center" },
  { id: "03", title: "珀莱雅 × EVAN", english: "PROYA × EVAN", year: "2026", image: "/projects/03-proya-evan.jpg", size: "medium", focus: "center" },
  { id: "06", title: "速写 26SS 大片", english: "CROQUIS SS26 Campaign", year: "2025", image: "/projects/06-croquis.jpg", size: "small", focus: "center" },
  { id: "05", title: "珀莱雅 × 李小冉", english: "PROYA × Li Xiaoran", year: "2026", image: "/projects/05-proya-xiaoran.jpg", size: "small", focus: "center" },
  { id: "08", title: "RERERELAB 26SS 大片", english: "RERERELAB SS26 Campaign", year: "2025", image: "/projects/08-rererelab.jpg", size: "wide", focus: "center" },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeProject]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <main>
      <header className="masthead">
        <a className="identity" href="#top" aria-label="Samuel 缪嘉乐首页">
          <span>Samuel</span>
          <span>缪嘉乐</span>
        </a>
        <div className="role">
          <span>Brand Visual Designer</span>
          <span>品牌视觉设计师</span>
        </div>
        <div className="edition">Selected Works<br />2025—2026</div>
        <a className="about-link" href="#about">About ↘</a>
      </header>

      <section className="project-grid" id="top" aria-label="精选项目">
        {projects.map((project) => (
          <button
            className={`project-card ${project.size}`}
            key={project.id}
            onClick={() => setActiveProject(project)}
            aria-label={`查看项目：${project.title}`}
          >
            <img src={project.image} alt="" style={{ objectPosition: project.focus }} />
            <span className="shade" />
            <span className="project-number">({project.id})</span>
            <span className="project-meta">
              <span className="project-cn">{project.title}</span>
              <span>{project.english}</span>
            </span>
            <span className="project-year">{project.year}</span>
            <span className="project-arrow">↗</span>
          </button>
        ))}

        <section className="about-card" id="about">
          <p>Samuel 缪嘉乐是一位专注于时装、美妆与文化内容的品牌视觉设计师。</p>
          <p>Samuel Miao is a brand visual designer working across fashion, beauty and culture.</p>
          <span>Shanghai · China</span>
        </section>
      </section>

      <footer>
        <span>Samuel 缪嘉乐</span>
        <span>Brand Visual Designer · 品牌视觉设计师</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      {activeProject && (
        <div className="project-view" role="dialog" aria-modal="true" aria-label={activeProject.title}>
          <button className="close-view" onClick={() => setActiveProject(null)}>Close ×</button>
          <div className="view-heading">
            <span>Project {activeProject.id}</span>
            <h1>{activeProject.title}</h1>
            <p>{activeProject.english}</p>
            <span>{activeProject.year}</span>
          </div>
          <img src={activeProject.image} alt={`${activeProject.title} 项目封面`} />
          <div className="case-placeholder">
            <span>Case study</span>
            <p>项目详情页已预留。后续可加入背景、创意策略、视觉系统、执行过程与最终成果。</p>
            <p>The full case study can expand here with context, creative direction, visual system, process and outcomes.</p>
          </div>
        </div>
      )}
    </main>
  );
}
