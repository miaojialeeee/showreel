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
  { id: "03", title: "RERERELAB「边走边看」", english: "RERERELAB — Walk & See", year: "2025", image: "/projects/08-rererelab.jpg", size: "wide", focus: "center", category: "fashion" },
  { id: "04", title: "珀莱雅 × Pingu", english: "PROYA × Pingu", year: "2026", image: "/projects/07-proya-pingu.jpg", size: "secondary", focus: "center", category: "beauty" },
  { id: "05", title: "珀莱雅 × EVAN", english: "PROYA × EVAN", year: "2026", image: "/projects/03-proya-evan.jpg", size: "medium", focus: "center", category: "beauty" },
  { id: "06", title: "珀莱雅 × 李小冉", english: "PROYA × Li Xiaoran", year: "2026", image: "/projects/05-proya-xiaoran.jpg", size: "small", focus: "center", category: "beauty" },
  { id: "07", title: "速写 26SS 大片", english: "CROQUIS SS26 Campaign", year: "2025", image: "/projects/06-croquis.jpg", size: "small", focus: "center", category: "fashion" },
  { id: "08", title: "LESS 26SS 品牌册", english: "LESS SS26 Brand Book", year: "2026", image: "/projects/01-less.jpg", size: "small less", focus: "center", category: "fashion" },
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
  { src: "/projects/garment-workshop/still-08.jpg", alt: "衣物养护包装与服务卡" },
  { src: "/projects/garment-workshop/still-09.jpg", alt: "完成养护后悬挂的服装" },
  { src: "/projects/garment-workshop/still-10.jpg", alt: "针织衫修补过程" },
  { src: "/projects/garment-workshop/still-11.jpg", alt: "专业整烫设备与西装" },
];

const garmentWorkshopServiceKVs = [
  { src: "/projects/garment-workshop/service-kv-01.jpg", alt: "精致洗护服务视觉" },
  { src: "/projects/garment-workshop/service-kv-02.jpg", alt: "十年维修服务视觉" },
  { src: "/projects/garment-workshop/service-kv-04.jpg", alt: "甄选养护服务视觉" },
];

const outOfServicePeople = [
  { src: "/projects/out-of-service/person-jnby.jpg", alt: "JNBY 人物平面视觉" },
  { src: "/projects/out-of-service/person-less.jpg", alt: "LESS 人物平面视觉" },
  { src: "/projects/out-of-service/person-croquis.jpg", alt: "速写 CROQUIS 人物平面视觉" },
];

const outOfServiceFilms = [
  { label: "JNBY", src: "/projects/out-of-service/film-jnby.mp4", poster: "/projects/out-of-service/person-jnby.jpg" },
  { label: "LESS", src: "/projects/out-of-service/film-less.mp4", poster: "/projects/out-of-service/person-less.jpg" },
  { label: "CROQUIS", src: "/projects/out-of-service/film-croquis.mp4", poster: "/projects/out-of-service/person-croquis.jpg" },
];

const outOfServiceLookbook = [
  { src: "/projects/out-of-service/lookbook-jnby-01.jpg", alt: "JNBY Lookbook 01" },
  { src: "/projects/out-of-service/lookbook-jnby-02.jpg", alt: "JNBY Lookbook 02" },
  { src: "/projects/out-of-service/lookbook-less-01.jpg", alt: "LESS Lookbook 01" },
  { src: "/projects/out-of-service/lookbook-less-02.jpg", alt: "LESS Lookbook 02" },
  { src: "/projects/out-of-service/lookbook-croquis-01.jpg", alt: "速写 CROQUIS Lookbook 01" },
  { src: "/projects/out-of-service/lookbook-croquis-02.jpg", alt: "速写 CROQUIS Lookbook 02" },
];

const outOfServiceWechat = [
  { label: "JNBY", src: "/projects/out-of-service/wechat-jnby.jpg" },
  { label: "LESS", src: "/projects/out-of-service/wechat-less.jpg" },
  { label: "CROQUIS", src: "/projects/out-of-service/wechat-croquis.jpg" },
];

const outOfServiceBts = Array.from({ length: 8 }, (_, index) => ({
  src: `/projects/out-of-service/bts-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `不在服务区现场花絮 ${index + 1}`,
}));

const rereKeyVisuals = [
  { src: "/projects/rererelab-walk-see/kv-spring.jpg", alt: "RERERELAB 边走边看春季主视觉" },
  { src: "/projects/rererelab-walk-see/kv-summer.jpg", alt: "RERERELAB 边走边看夏季主视觉" },
  { src: "/projects/rererelab-walk-see/kv-still.jpg", alt: "RERERELAB 边走边看静物主视觉" },
];

const rereSpringImages = Array.from({ length: 6 }, (_, index) => ({
  src: `/projects/rererelab-walk-see/spring-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `RERERELAB 边走边看春季平面 ${index + 1}`,
}));

const rereSummerImages = Array.from({ length: 6 }, (_, index) => ({
  src: `/projects/rererelab-walk-see/summer-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `RERERELAB 边走边看夏季平面 ${index + 1}`,
}));

const lessBookPages = Array.from({ length: 50 }, (_, index) => ({
  src: `/projects/less-brandbook/pages/page-${String(index + 1).padStart(2, "0")}.jpg`,
  page: index + 1,
}));

const lessSelectedPageNumbers = [3, 9, 12, 13, 15, 17, 26, 34, 38, 41, 46, 47];
const lessSelectedPages = lessSelectedPageNumbers.map((page) => lessBookPages[page - 1]);

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
        <div className={`project-view ${activeProject.id === "01" ? "garment-view" : ""} ${activeProject.id === "02" ? "out-service-view" : ""} ${activeProject.id === "03" ? "rere-view" : ""} ${activeProject.id === "08" ? "less-book-view" : ""}`} role="dialog" aria-modal="true" aria-label={activeProject.title}>
          <button className="close-view" onClick={() => setActiveProject(null)}>Close ×</button>
          <div className="view-heading">
            <span>Project {activeProject.id}</span>
            <h1>{activeProject.title}</h1>
            <p>{activeProject.english}</p>
            <span>{activeProject.year}</span>
          </div>
          <img
            src={activeProject.id === "01"
              ? "/projects/garment-workshop/detail-cover.jpg"
              : activeProject.id === "02"
                ? "/projects/out-of-service/detail-cover.jpg"
                : activeProject.id === "03"
                  ? "/projects/rererelab-walk-see/cover.jpg"
                  : activeProject.id === "08"
                    ? "/projects/less-brandbook/cover.jpg"
                : activeProject.image}
            alt={`${activeProject.title} 项目封面`}
          />
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
                  <div className="film-copy">
                    <p>从细密针脚到蒸汽熨烫，以工坊纪录片式的镜头语言呈现衣物护理中的时间价值与手工温度。</p>
                    <span className="film-cta">点击观看衣护工坊视频 ↓︎</span>
                  </div>
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
                      <figcaption>{String(index + 1).padStart(2, "0")} / 03</figcaption>
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
                      <figcaption>{String(index + 1).padStart(2, "0")} / 11</figcaption>
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
          ) : activeProject.id === "02" ? (
            <article className="case-study out-service-case">
              <section className="case-intro out-service-intro">
                <span className="case-index">Campaign / Overview</span>
                <div>
                  <h2>不在服务区，<br />进入自己的频道</h2>
                  <p>在快节奏城市生活中，人们长期处于信息连接与工作压力之中。江南布衣以「不在服务区」为概念，邀请消费者暂时离开日常轨道，在喧嚣之外重新找回与自己的连接。</p>
                </div>
                <div className="case-en">
                  <h2>Out of service.<br />Into your own frequency.</h2>
                  <p>A winter campaign that disconnects from the noise of everyday life, moving between an office routine and an imagined snowbound world.</p>
                </div>
              </section>

              <section className="out-kv-section">
                <div className="case-section-heading">
                  <span>01 / Group Key Visual</span>
                  <p>将办公桌、文件与电话代表的日常秩序，与雪山、冰原和漂浮物构成的自由世界并置，建立现实与想象之间的超现实场域。</p>
                </div>
                <div className="out-kv-single">
                  <img src="/projects/out-of-service/kv-group-vertical.jpg" alt="不在服务区竖版合照主视觉" loading="lazy" />
                </div>
              </section>

              <section className="out-people-section">
                <div className="case-section-heading">
                  <span>02 / Character Visuals</span>
                  <p>为 JNBY、LESS 与速写 CROQUIS 建立统一的空间叙事，同时保留各品牌人物状态与服装语言的差异。</p>
                </div>
                <div className="out-people-gallery" aria-label="不在服务区人物平面，横向滑动浏览" tabIndex={0}>
                  {outOfServicePeople.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>{String(index + 1).padStart(2, "0")} / 03</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="out-lookbook-section">
                <div className="case-section-heading">
                  <span>03 / Lookbook</span>
                  <p>以更贴近人物状态的镜头补充 Campaign 叙事，呈现三条品牌线在同一场景中的不同着装语言。</p>
                </div>
                <div className="out-lookbook-gallery" aria-label="不在服务区 Lookbook，横向滑动浏览" tabIndex={0}>
                  {outOfServiceLookbook.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>{String(index + 1).padStart(2, "0")} / 06</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="out-films-section">
                <div className="case-section-heading">
                  <span>04 / Brand Films</span>
                  <p>三支竖屏短片延续“断开连接”的核心动作，以人物、办公物件与雪域空间之间的转换呈现不同品牌频道。</p>
                </div>
                <div className="out-film-grid">
                  {outOfServiceFilms.map((film) => (
                    <figure key={film.src}>
                      <figcaption>{film.label} <span>点击观看 ↓︎</span></figcaption>
                      <video controls playsInline preload="none" poster={film.poster}>
                        <source src={film.src} type="video/mp4" />
                      </video>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="out-wechat-section">
                <div className="case-section-heading">
                  <span>05 / WeChat Editorial</span>
                  <p>三条品牌线的公众号长图延展。每个窗口均可单独向下滚动，查看完整传播内容。</p>
                </div>
                <div className="out-wechat-grid" aria-label="公众号长图，左右滑动并在窗口内向下浏览">
                  {outOfServiceWechat.map((item) => (
                    <figure key={item.src}>
                      <figcaption>{item.label} <span>Scroll ↓︎</span></figcaption>
                      <div className="wechat-scroll" tabIndex={0}>
                        <img src={item.src} alt={`${item.label} 公众号长图`} loading="lazy" />
                      </div>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="out-bts-section">
                <div className="case-section-heading">
                  <span>06 / Behind the Scenes</span>
                  <p>从道具装置、现场陈列到观众动线，记录「不在服务区」从影像概念延伸至线下空间的过程。</p>
                </div>
                <div className="out-bts-gallery" aria-label="不在服务区现场花絮，横向滑动浏览" tabIndex={0}>
                  {outOfServiceBts.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>{String(index + 1).padStart(2, "0")} / 08</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="out-event-film">
                <div className="case-section-heading">
                  <span>07 / On-site Film</span>
                  <div className="film-copy">
                    <p>现场视频完整呈现空间、装置与人群的互动关系。</p>
                    <span className="film-cta">点击观看现场视频 ↓︎</span>
                  </div>
                </div>
                <video controls playsInline preload="none" poster="/projects/out-of-service/bts-04.jpg">
                  <source src="/projects/out-of-service/event-film.mp4" type="video/mp4" />
                </video>
              </section>

              <section className="case-role out-service-role">
                <span>08 / Role</span>
                <h2>Campaign Visual Direction<br />Key Visual & Film Planning</h2>
                <div>
                  <p>负责羽绒系列 Campaign 的整体视觉创意与设计执行：参与主题概念提炼与视觉方向探索；建立「不在服务区」的超现实视觉语言；完成 KV 画面创意、构图与视觉呈现；参与短片视觉策划，并统筹 JNBY、LESS 与速写 CROQUIS 三条品牌线的统一与差异化表达。</p>
                  <p className="case-en">Campaign visual direction, key visual concept and design, film planning, and a unified visual system across JNBY, LESS and CROQUIS.</p>
                </div>
              </section>
            </article>
          ) : activeProject.id === "03" ? (
            <article className="case-study rere-case">
              <section className="case-intro rere-intro">
                <span className="case-index">Campaign / Overview</span>
                <div>
                  <h2>边走边看，<br />保持移动，也保持感知</h2>
                  <p>以“行走中的发现”为核心概念，将镜头聚焦于旅途中未经刻意安排的瞬间。人物在海边、街道与日常场景中自由行动，让服装成为陪伴探索过程中的自然存在。</p>
                </div>
                <div className="case-en">
                  <h2>Keep moving.<br />Keep noticing.</h2>
                  <p>A campaign about discovery in motion—observing the changing relationship between people, clothing and their surroundings.</p>
                </div>
              </section>

              <section className="rere-kv-section">
                <div className="case-section-heading">
                  <span>01 / Key Visuals</span>
                  <p>春与夏的主视觉从海风、阳光与身体动作出发，以更开放、松弛的影像语言建立系列基调。</p>
                </div>
                <div className="rere-kv-gallery">
                  {rereKeyVisuals.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>{String(index + 1).padStart(2, "0")} / 03</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="rere-series-section">
                <div className="case-section-heading">
                  <span>02 / Spring</span>
                  <p>在帆船、海岸与街角之间，让风与衣摆共同完成画面；人物不是被摆放的主体，而是持续经过风景的人。</p>
                </div>
                <div className="rere-editorial">
                  {rereSpringImages.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Spring · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="rere-series-section rere-summer-section">
                <div className="case-section-heading">
                  <span>03 / Summer</span>
                  <p>更直接的光线、更轻快的动作与更饱满的色彩，让“边走边看”从观察转向身体参与。</p>
                </div>
                <div className="rere-editorial">
                  {rereSummerImages.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Summer · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="case-role rere-role">
                <span>04 / Role</span>
                <h2>Brand Visual Design<br />Campaign Planning</h2>
                <div>
                  <p>负责 RERERELAB C5 系列大片的视觉创意与设计执行：参与「边走边看」概念梳理与视觉方向制定；建立符合品牌年轻化定位的影像语言；参与 KV 构思、构图规划与视觉呈现，并统筹系列视觉资产输出。</p>
                  <p className="case-en">Campaign concept development, visual direction, key visual composition and a consistent image system across the series.</p>
                </div>
              </section>
            </article>
          ) : activeProject.id === "08" ? (
            <article className="case-study less-book-case">
              <section className="case-intro less-book-intro">
                <span className="case-index">Brand Book / Overview</span>
                <div>
                  <h2>The Power of Less<br />少，即是更多</h2>
                  <p>LESS 2026 春夏品牌册以品牌核心理念 “LESS IS MORE” 为出发点，通过服装、空间与人物之间的关系建立，将“本质、秩序与永恒”转化为视觉语言。</p>
                </div>
                <div className="case-en">
                  <h2>Less form.<br />More presence.</h2>
                  <p>Modernist architecture, natural light and material detail create a quiet but tensile world of independence, confidence and inner abundance.</p>
                </div>
              </section>

              <section className="less-highlights-section">
                <div className="case-section-heading">
                  <span>01 / Selected Pages</span>
                  <p>先以精选页面呈现品牌理念、影像语气与产品章节。保留足够的节奏与留白，不让五十页内容一次性压满纵向页面。</p>
                </div>
                <div className="less-highlight-grid">
                  {lessSelectedPages.map((item) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={`LESS 26SS 品牌册第 ${item.page} 页`} loading="lazy" />
                      <figcaption>{String(item.page).padStart(2, "0")} / 50</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="less-full-book-section">
                <div className="case-section-heading">
                  <span>02 / Complete Book</span>
                  <p>完整 50 页保留在横向翻阅区。向右滑动即可连续阅读，手机端也可以直接手势浏览。</p>
                </div>
                <div className="less-book-gallery" aria-label="LESS 26SS 完整品牌册，横向滑动浏览" tabIndex={0}>
                  {lessBookPages.map((item) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={`LESS 26SS 品牌册第 ${item.page} 页`} loading="lazy" />
                      <figcaption>{String(item.page).padStart(2, "0")} / 50</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="case-role less-book-role">
                <span>03 / Role</span>
                <h2>Brand Visual Direction<br />Editorial Design</h2>
                <div>
                  <p>围绕 “LESS IS MORE” 梳理品牌理念、影像资产与产品信息，以现代建筑美学为灵感，建立克制、清晰且具有秩序感的品牌册叙事。</p>
                  <p className="case-en">Brand book visual direction, editorial structure, image sequencing and layout design.</p>
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
