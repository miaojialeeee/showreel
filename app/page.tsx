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
  category: "fashion" | "beauty" | "personal";
};

const projects: Project[] = [
  { id: "01", title: "江南布衣 ×「衣护工坊」", english: "JNBY × Garment Workshop", year: "2026", image: "/projects/02-garment-workshop.jpg", size: "project", focus: "center", category: "fashion" },
  { id: "02", title: "江南布衣 ×「不在服务区」", english: "JNBY × Out of Service", year: "2025", image: "/projects/04-jnby.jpg", size: "project", focus: "center", category: "fashion" },
  { id: "03", title: "RERERELAB 26SS 大片", english: "RERERELAB SS26 Campaign", year: "2025", image: "/projects/08-rererelab.jpg", size: "wide", focus: "center", category: "fashion" },
  { id: "04", title: "珀莱雅 × Pingu", english: "PROYA × Pingu", year: "2026", image: "/projects/07-proya-pingu.jpg", size: "secondary", focus: "center", category: "beauty" },
  { id: "05", title: "珀莱雅 × EVAN", english: "PROYA × EVAN", year: "2026", image: "/projects/03-proya-evan.jpg", size: "medium", focus: "center", category: "beauty" },
  { id: "06", title: "珀莱雅 × 李小冉", english: "PROYA × Li Xiaoran", year: "2026", image: "/projects/05-proya-xiaoran.jpg", size: "small", focus: "center", category: "beauty" },
  { id: "07", title: "速写 26SS 大片", english: "CROQUIS SS26 Campaign", year: "2025", image: "/projects/06-croquis.jpg", size: "small", focus: "center", category: "fashion" },
  { id: "08", title: "LESS 26SS 大片", english: "LESS SS26 Campaign", year: "2025", image: "/projects/01-less.jpg", size: "small less", focus: "center", category: "fashion" },
  { id: "09", title: "PROYA ×「孟子义」", english: "PROYA × Meng Ziyi", year: "2026", image: "/projects/09-proya-mengziyi.jpg", size: "project", focus: "center", category: "beauty" },
  { id: "10", title: "江南布衣 ×「布尽其用」", english: "JNBY × Reuse", year: "2025", image: "/projects/10-jnby-reuse.jpg", size: "project", focus: "center", category: "fashion" },
  { id: "11", title: "礼盒合集", english: "Gift Box Collection", year: "2026", image: "/projects/11-giftbox.jpg", size: "project", focus: "center", category: "beauty" },
  { id: "12", title: "观鱼「About Fish」", english: "About Fish", year: "—", image: "/projects/12-about-fish.jpg", size: "project", focus: "center", category: "personal" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "fashion", label: "Fashion" },
  { id: "beauty", label: "Beauty" },
  { id: "personal", label: "Personal" },
] as const;

const garmentWorkshopStills = [
  { src: "/projects/garment-workshop/still-01.jpg", alt: "针线与修补工具" },
  { src: "/projects/garment-workshop/still-02.jpg", alt: "针织衫纽扣修复细节" },
  { src: "/projects/garment-workshop/still-03.jpg", alt: "完成养护的服装" },
  { src: "/projects/garment-workshop/still-04.jpg", alt: "面料去绒养护细节" },
  { src: "/projects/garment-workshop/still-05.jpg", alt: "精洗过程与面料" },
  { src: "/projects/garment-workshop/still-06.jpg", alt: "洗护设备与衣物" },
  { src: "/projects/garment-workshop/still-07.jpg", alt: "熨烫工艺细节" },
];

const garmentWorkshopServiceKVs = [
  { src: "/projects/garment-workshop/service-kv-01.jpg", alt: "精致洗护服务视觉" },
  { src: "/projects/garment-workshop/service-kv-02.jpg", alt: "十年维修服务视觉" },
  { src: "/projects/garment-workshop/service-kv-03.jpg", alt: "衣护工坊三项服务组合视觉" },
  { src: "/projects/garment-workshop/service-kv-04.jpg", alt: "甄选养护服务视觉" },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]["id"]>("all");
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const visibleProjects = activeCategory === "all"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

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
        <a className="about-link" href="#about">About ↘︎</a>
      </header>

      <nav className="filters" aria-label="项目分类">
        {categories.map((category) => {
          const count = category.id === "all"
            ? projects.length
            : projects.filter((project) => project.category === category.id).length;
          return (
            <button
              key={category.id}
              className={activeCategory === category.id ? "active" : ""}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              {category.label} <sup>{count}</sup>
            </button>
          );
        })}
      </nav>

      <section className="project-grid" id="top" aria-label="精选项目">
        {visibleProjects.map((project) => (
          <button
            className={`project-card ${project.size}`}
            key={project.id}
            onClick={() => setActiveProject(project)}
            onMouseEnter={(event) => setCursor({ x: event.clientX, y: event.clientY, visible: true })}
            onMouseMove={(event) => setCursor({ x: event.clientX, y: event.clientY, visible: true })}
            onMouseLeave={() => setCursor((current) => ({ ...current, visible: false }))}
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
            <span className="project-arrow">↗︎</span>
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
        <a href="#top">Back to top ↑︎</a>
      </footer>

      {activeProject && (
        <div className={`project-view ${activeProject.id === "01" ? "garment-view" : ""}`} role="dialog" aria-modal="true" aria-label={activeProject.title}>
          <button className="close-view" onClick={() => setActiveProject(null)}>Close ×</button>
          <div className="view-heading">
            <span>Project {activeProject.id}</span>
            <h1>{activeProject.title}</h1>
            <p>{activeProject.english}</p>
            <span>{activeProject.year}</span>
          </div>
          <img src={activeProject.image} alt={`${activeProject.title} 项目封面`} />
          {activeProject.id === "01" ? (
            <article className="case-study garment-case">
              <section className="case-intro">
                <span className="case-index">01 / Overview</span>
                <div>
                  <h2>让衣物，超越时间</h2>
                  <p>随着消费者对服装品质与长期使用价值的关注提升，江南布衣通过会员服务体系「衣护工坊」，为衣物提供维修、精洗、养护与整理等一站式护理服务。</p>
                </div>
                <div className="case-en">
                  <h2>Beyond time,<br />through care.</h2>
                  <p>Garment Workshop extends the life and value of clothing through an integrated service spanning repair, specialist cleaning, care and finishing.</p>
                </div>
              </section>

              <section className="case-film">
                <div className="case-section-heading">
                  <span>02 / Brand Film</span>
                  <p>从细密针脚到蒸汽熨烫，以工坊纪录片式的镜头语言呈现衣物护理中的时间价值与手工温度。</p>
                </div>
                <video controls playsInline preload="none" poster="/projects/garment-workshop/key-visual.jpg">
                  <source src="/projects/garment-workshop/film.mp4" type="video/mp4" />
                </video>
              </section>

              <section className="case-key-visual">
                <div className="case-section-heading">
                  <span>03 / Key Visual</span>
                  <p>克制、质朴的影像语气，以维修、养护与精洗三个服务场景建立核心视觉符号。</p>
                </div>
                <img src="/projects/garment-workshop/key-visual.jpg" alt="衣护工坊主视觉：让衣物，超越时间" />
              </section>

              <section className="service-kv-section">
                <div className="case-section-heading">
                  <span>04 / Service Visuals</span>
                  <p>围绕维修、洗护与养护三项核心服务，将视觉语言延展为可直接触达消费者的系列传播画面。</p>
                </div>
                <div className="service-kv-gallery" aria-label="衣护工坊服务视觉，横向滑动浏览" tabIndex={0}>
                  {garmentWorkshopServiceKVs.map((kv, index) => (
                    <figure key={kv.src}>
                      <img src={kv.src} alt={kv.alt} loading="lazy" />
                      <figcaption>{String(index + 1).padStart(2, "0")} / 04</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="case-gallery-section">
                <div className="case-section-heading">
                  <span>05 / Visual Language</span>
                  <p>近距离观察面料、器具与工艺痕迹。左右滑动浏览完整摄影系列。</p>
                </div>
                <div className="case-gallery" aria-label="衣护工坊视觉摄影，横向滑动浏览" tabIndex={0}>
                  {garmentWorkshopStills.map((still, index) => (
                    <figure key={still.src}>
                      <img src={still.src} alt={still.alt} loading="lazy" />
                      <figcaption>{String(index + 1).padStart(2, "0")} / 07</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="case-role">
                <span>06 / Role</span>
                <h2>KV Visual Creative<br />Video Visual Planning</h2>
                <div>
                  <p>负责项目整体视觉方向制定，梳理品牌服务定位与视觉表达体系；提炼维修、精洗、养护三大服务场景的核心视觉符号；完成 KV 画面创意策划与视觉设计，并参与短片内容策划与摄影风格统筹。</p>
                  <p className="case-en">Visual direction, key visual concept and design, brand film planning, photographic direction and visual consistency across the campaign.</p>
                </div>
              </section>
            </article>
          ) : (
            <div className="case-placeholder">
              <span>Case study</span>
              <p>项目详情页已预留。后续可加入背景、创意策略、视觉系统、执行过程与最终成果。</p>
              <p>The full case study can expand here with context, creative direction, visual system, process and outcomes.</p>
            </div>
          )}
        </div>
      )}

      <div
        className={`project-cursor ${cursor.visible ? "is-visible" : ""}`}
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
        aria-hidden="true"
      >
        View ↗︎
      </div>
    </main>
  );
}
