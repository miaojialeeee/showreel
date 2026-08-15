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
  { id: "07", title: "速写 26SS 大片", english: "CROQUIS SS26 Campaign", year: "2025", image: "/projects/croquis-ss26/cover.jpg", size: "small", focus: "center", category: "fashion" },
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

const pinguSocialFilms = [
  { label: "PREVIEW", src: "/projects/proya-pingu/social-01.m4v", poster: "/projects/proya-pingu/social-posters/poster-01.jpg" },
  { label: "EPISODE 01", src: "/projects/proya-pingu/social-02.m4v", poster: "/projects/proya-pingu/social-posters/poster-02.jpg" },
  { label: "EPISODE 02", src: "/projects/proya-pingu/social-03.m4v", poster: "/projects/proya-pingu/social-posters/poster-03.jpg" },
];

const pinguSceneImages = Array.from({ length: 5 }, (_, index) => ({
  src: `/projects/proya-pingu/scenes/scene-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `珀莱雅 Pingu 七夕礼盒场景图 ${index + 1}`,
}));

const pinguSocialContent = [
  { label: "快闪官宣 01", src: "/projects/proya-pingu/social-content/flash-01.jpg" },
  { label: "快闪官宣 02", src: "/projects/proya-pingu/social-content/flash-02.jpg" },
  { label: "快闪官宣 03", src: "/projects/proya-pingu/social-content/flash-03.jpg" },
  { label: "一日店长", src: "/projects/proya-pingu/social-content/manager.jpg" },
  { label: "UGC 征集", src: "/projects/proya-pingu/social-content/ugc.jpg" },
];

const evanKeyVisuals = Array.from({ length: 5 }, (_, index) => ({
  src: `/projects/proya-evan/kv/kv-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `珀莱雅 EVAN 520 艺人主视觉 ${index + 1}`,
}));

const evanSingleFilms = [
  { label: "GIFT", src: "/projects/proya-evan/tvc-01.m4v" },
  { label: "CUSHION", src: "/projects/proya-evan/tvc-02.m4v" },
  { label: "SUNSCREEN", src: "/projects/proya-evan/tvc-03.m4v" },
];

const evanPrintImages = Array.from({ length: 8 }, (_, index) => ({
  src: `/projects/proya-evan/print/print-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `珀莱雅 EVAN 520 平面摄影 ${index + 1}`,
}));

const evanProductCombos = Array.from({ length: 3 }, (_, index) => ({
  src: `/projects/proya-evan/products/combo-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `珀莱雅 EVAN 520 产品组合图 ${index + 1}`,
}));

const evanProductDetails = Array.from({ length: 6 }, (_, index) => ({
  src: `/projects/proya-evan/products/product-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `珀莱雅 EVAN 520 产品细节 ${index + 1}`,
}));

const xiaoranKeyVisuals = Array.from({ length: 3 }, (_, index) => ({
  src: `/projects/proya-xiaoran/kv/kv-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `珀莱雅李小冉红宝石系列主视觉 ${index + 1}`,
}));

const xiaoranPrintImages = Array.from({ length: 4 }, (_, index) => ({
  src: `/projects/proya-xiaoran/print/print-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `珀莱雅李小冉红宝石系列平面摄影 ${index + 1}`,
}));

const reuseQucuImages = Array.from({ length: 10 }, (_, index) => ({
  src: `/projects/jnby-reuse/qucu/qucu-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `布尽其用曲措篇影像 ${index + 1}`,
}));

const reuseSuitianmeiImages = Array.from({ length: 9 }, (_, index) => ({
  src: `/projects/jnby-reuse/suitianmei/suitianmei-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `布尽其用粟田梅篇影像 ${index + 1}`,
}));

const giftBoxSeries = [
  { title: "七夕礼盒", english: "Qixi Gift Set", prefix: "qixi", count: 4 },
  { title: "能量礼盒", english: "Energy Gift Set", prefix: "energy", count: 2 },
  { title: "蕴白礼盒", english: "Brightening Gift Set", prefix: "white", count: 3 },
  { title: "韩男礼袋", english: "Men's Gift Bag", prefix: "men", count: 2 },
  { title: "京东节日礼盒", english: "JD Festival Gift Set", prefix: "jd", count: 3 },
].map((series) => ({
  ...series,
  images: Array.from({ length: series.count }, (_, index) => ({
    src: `/projects/giftbox-collection/${series.prefix}-${String(index + 1).padStart(2, "0")}.jpg`,
    alt: `${series.title} ${index + 1}`,
  })),
}));

const lessBookPages = Array.from({ length: 50 }, (_, index) => ({
  src: `/projects/less-brandbook/pages/page-${String(index + 1).padStart(2, "0")}.jpg`,
  page: index + 1,
}));

const lessSelectedPageNumbers = [3, 9, 12, 13, 15, 17, 26, 34, 38, 41, 46, 47];
const lessSelectedPages = lessSelectedPageNumbers.map((page) => lessBookPages[page - 1]);

const croquisKeyVisuals = Array.from({ length: 3 }, (_, index) => ({
  src: `/projects/croquis-ss26/kv-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `速写 26SS 主视觉 ${index + 1}`,
}));

const croquisMainImages = Array.from({ length: 6 }, (_, index) => ({
  src: `/projects/croquis-ss26/main-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `速写 26SS 主线大片 ${index + 1}`,
}));

const croquisBlackImages = Array.from({ length: 6 }, (_, index) => ({
  src: `/projects/croquis-ss26/black-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `速写 26SS 黑支线大片 ${index + 1}`,
}));

const fishResearchImages = Array.from({ length: 6 }, (_, index) => ({
  src: `/projects/about-fish/research-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `观鱼田野调研与内容梳理 ${index + 1}`,
}));

const fishMainVisuals = Array.from({ length: 4 }, (_, index) => ({
  src: `/projects/about-fish/main-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `观鱼主视觉 ${index + 1}`,
}));

const fishModels = Array.from({ length: 4 }, (_, index) => ({
  src: `/projects/about-fish/model-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `观鱼数字鱼灯模型 ${index + 1}`,
}));

const fishEditorialImages = Array.from({ length: 5 }, (_, index) => ({
  src: `/projects/about-fish/editorial-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `观鱼书籍设计 ${index + 1}`,
}));

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
        <div className={`project-view ${activeProject.id === "01" ? "garment-view" : ""} ${activeProject.id === "02" ? "out-service-view" : ""} ${activeProject.id === "03" ? "rere-view" : ""} ${activeProject.id === "04" ? "pingu-view" : ""} ${activeProject.id === "05" ? "evan-view" : ""} ${activeProject.id === "06" ? "xiaoran-view" : ""} ${activeProject.id === "07" ? "croquis-view" : ""} ${activeProject.id === "08" ? "less-book-view" : ""} ${activeProject.id === "10" ? "reuse-view" : ""} ${activeProject.id === "11" ? "giftbox-view" : ""} ${activeProject.id === "12" ? "fish-view" : ""}`} role="dialog" aria-modal="true" aria-label={activeProject.title}>
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
                  : activeProject.id === "04"
                    ? "/projects/proya-pingu/detail-cover.jpg"
                  : activeProject.id === "05"
                    ? "/projects/proya-evan/kv-main.jpg"
                  : activeProject.id === "06"
                    ? "/projects/05-proya-xiaoran.jpg"
                  : activeProject.id === "07"
                    ? "/projects/croquis-ss26/cover.jpg"
                  : activeProject.id === "08"
                    ? "/projects/less-brandbook/cover.jpg"
                  : activeProject.id === "10"
                    ? "/projects/10-jnby-reuse.jpg"
                  : activeProject.id === "11"
                    ? "/projects/11-giftbox.jpg"
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

              <section className="dark-film-section rere-film-section">
                <div className="case-section-heading">
                  <span>01 / Campaign Film</span>
                  <div className="film-copy">
                    <p>从海边、街道与日常场景出发，以持续行走的身体状态串联系列影像，让“边走边看”从一句概念成为真实发生的观看方式。</p>
                    <span className="film-cta">点击观看《边走边看》成片 ↓︎</span>
                  </div>
                </div>
                <video controls playsInline preload="none" poster="/projects/rererelab-walk-see/cover.jpg">
                  <source src="/projects/rererelab-walk-see/film.mp4" type="video/mp4" />
                </video>
              </section>

              <section className="rere-kv-section">
                <div className="case-section-heading">
                  <span>02 / Key Visuals</span>
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
                  <span>03 / Spring</span>
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
                  <span>04 / Summer</span>
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
                <span>05 / Role</span>
                <h2>Brand Visual Design<br />Campaign Planning</h2>
                <div>
                  <p>负责 RERERELAB C5 系列大片的视觉创意与设计执行：参与「边走边看」概念梳理与视觉方向制定；建立符合品牌年轻化定位的影像语言；参与 KV 构思、构图规划与视觉呈现，并统筹系列视觉资产输出。</p>
                  <p className="case-en">Campaign concept development, visual direction, key visual composition and a consistent image system across the series.</p>
                </div>
              </section>
            </article>
          ) : activeProject.id === "04" ? (
            <article className="case-study pingu-case">
              <section className="case-intro pingu-intro">
                <span className="case-index">Qixi Campaign / Overview</span>
                <div>
                  <h2>爱在朝夕，<br />心动同 Pin</h2>
                  <p>珀莱雅携手 Pingu，以七夕限定礼盒为核心，将角色的幽默、亲密关系与礼赠仪式感转化为一套轻快的视觉叙事。</p>
                </div>
                <div className="case-en">
                  <h2>A little closer.<br />A little more in sync.</h2>
                  <p>A playful Qixi collaboration where Pingu turns gifting, companionship and everyday affection into a bright, character-led visual story.</p>
                </div>
              </section>

              <section className="pingu-kv-section">
                <div className="case-section-heading">
                  <span>01 / Key Visual</span>
                  <p>以浅蓝场景、红粉礼盒与 Pingu 角色动作建立清晰的七夕识别，让产品、角色与节日信息在同一画面中轻快相遇。</p>
                </div>
                <img className="pingu-main-kv" src="/projects/proya-pingu/detail-cover.jpg" alt="珀莱雅 Pingu 七夕联名主视觉" loading="lazy" />
              </section>

              <section className="pingu-social-film-section">
                <div className="case-section-heading">
                  <span>02 / Social Video</span>
                  <div className="film-copy">
                    <p>从预告到两支正片，以 Pingu 的日常动作与关系互动延展礼盒故事，形成适合社交传播的轻量内容节奏。</p>
                    <span className="film-cta">点击观看 Social Video ↓︎</span>
                  </div>
                </div>
                <div className="pingu-social-films">
                  {pinguSocialFilms.map((film, index) => (
                    <figure key={film.src}>
                      <figcaption>{String(index + 1).padStart(2, "0")} / {film.label} <span>点击观看 ↓︎</span></figcaption>
                      <video controls playsInline preload="none" poster={film.poster}>
                        <source src={film.src} type="video/mp4" />
                      </video>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="pingu-scenes-section">
                <div className="case-section-heading">
                  <span>03 / Product Scenes</span>
                  <p>围绕礼盒、礼袋与联名配件搭建蓝色微缩场景，以柔和材质和角色化细节补充开箱前后的想象。</p>
                </div>
                <div className="pingu-scene-grid">
                  {pinguSceneImages.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Scene · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="pingu-unbox-section">
                <div className="case-section-heading">
                  <span>04 / Unboxing Film</span>
                  <div className="film-copy">
                    <p>以横屏开箱内容完整呈现礼盒结构、联名细节与产品组合，让包装体验成为七夕礼赠叙事的收束。</p>
                    <span className="film-cta">点击观看开箱视频 ↓︎</span>
                  </div>
                </div>
                <video controls playsInline preload="none" poster="/projects/proya-pingu/unboxing-poster.jpg">
                  <source src="/projects/proya-pingu/unboxing.m4v" type="video/mp4" />
                </video>
              </section>

              <section className="pingu-social-content-section">
                <div className="case-section-heading">
                  <span>05 / Social Content</span>
                  <p>精选快闪官宣、一日店长与 UGC 征集三类内容，以较轻的横向浏览呈现完整传播触点。</p>
                </div>
                <div className="pingu-social-content" aria-label="珀莱雅 Pingu 自媒体内容，横向滑动浏览" tabIndex={0}>
                  {pinguSocialContent.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={`珀莱雅 Pingu ${item.label}`} loading="lazy" />
                      <figcaption>{String(index + 1).padStart(2, "0")} / {item.label}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="case-role pingu-role">
                <span>06 / Role</span>
                <h2>Campaign Visual Design<br />KV & Social Content</h2>
                <div>
                  <p>围绕联名礼盒梳理七夕视觉方向，参与主视觉、社交视频、产品场景与自媒体内容的设计延展，并保持角色调性、产品信息与多触点传播的一致性。</p>
                  <p className="case-en">Campaign visual design, key visual, social films, product scenes and a consistent character-led system across social touchpoints.</p>
                </div>
              </section>
            </article>
          ) : activeProject.id === "05" ? (
            <article className="case-study evan-case">
              <section className="case-intro evan-intro">
                <span className="case-index">520 Campaign / Overview</span>
                <div>
                  <h2>破晓成「羲」，<br />逐光而行</h2>
                  <p>520 作为表达爱意的重要节点，消费者对节日礼赠的需求正从产品购买转向情感价值与仪式感体验。珀莱雅携手 EVAN 李羲承，以「光感、陪伴、心意传递」为视觉核心，让护肤礼赠成为记录美好瞬间的情感载体。</p>
                </div>
                <div className="case-en">
                  <h2>Follow the light.<br />Embrace the moment.</h2>
                  <p>A romantic 520 campaign where luminous texture, soft colour and a sense of companionship turn skincare gifting into a gesture of warmth and connection.</p>
                </div>
              </section>

              <section className="evan-kv-section">
                <div className="case-section-heading">
                  <span>01 / Artist Key Visuals</span>
                  <p>以柔和粉色渐变、清透光感和轻盈材质建立节日氛围，并在礼袋、气垫与防晒系列之间保持统一的艺人视觉语言。</p>
                </div>
                <div className="evan-kv-grid">
                  {evanKeyVisuals.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Key Visual · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="evan-tvc-section">
                <div className="case-section-heading">
                  <span>02 / 520 TVC</span>
                  <div className="film-copy">
                    <p>以光线和礼物作为叙事线索，从完整成片延展至礼袋、气垫与防晒三条产品短片。</p>
                    <span className="film-cta">点击观看 520 TVC ↓︎</span>
                  </div>
                </div>
                <video className="evan-main-film" controls playsInline preload="none" poster="/projects/proya-evan/kv-main.jpg">
                  <source src="/projects/proya-evan/tvc-main.m4v" type="video/mp4" />
                </video>
                <div className="evan-single-films">
                  {evanSingleFilms.map((film, index) => (
                    <figure key={film.src}>
                      <figcaption>{String(index + 1).padStart(2, "0")} / {film.label} <span>点击观看 ↓︎</span></figcaption>
                      <video controls playsInline preload="none" poster={evanPrintImages[index].src}>
                        <source src={film.src} type="video/mp4" />
                      </video>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="evan-print-section">
                <div className="case-section-heading">
                  <span>03 / Print</span>
                  <p>围绕人物、礼物与产品细节展开平面摄影，在清透肤感、柔软织物与粉色光晕之间保留足够呼吸感。</p>
                </div>
                <div className="evan-print-grid">
                  {evanPrintImages.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Print · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="evan-product-section">
                <div className="case-section-heading">
                  <span>04 / Product Combinations</span>
                  <p>重点呈现三组礼盒组合，以包装、配件与产品之间的比例关系建立完整的 520 礼赠体验。</p>
                </div>
                <div className="evan-combo-grid">
                  {evanProductCombos.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Combination · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
                <div className="evan-product-scroll" aria-label="珀莱雅 EVAN 产品细节，横向滑动浏览" tabIndex={0}>
                  {evanProductDetails.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Detail · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="evan-unboxing-section">
                <div className="case-section-heading">
                  <span>05 / Unboxing Film</span>
                  <div className="film-copy">
                    <p>以开箱过程收束项目，完整呈现礼盒层次、产品组合与节日仪式感。</p>
                    <span className="film-cta">点击观看开箱视频 ↓︎</span>
                  </div>
                </div>
                <video controls playsInline preload="none" poster="/projects/proya-evan/products/combo-01.jpg">
                  <source src="/projects/proya-evan/unboxing.m4v" type="video/mp4" />
                </video>
              </section>

              <section className="case-role evan-role">
                <span>06 / Role</span>
                <h2>Campaign Visual Design<br />KV & Content Planning</h2>
                <div>
                  <p>参与 520 礼赠项目的视觉方向梳理与设计执行；围绕艺人 KV、TVC、平面摄影与产品组合建立统一的粉色光感系统，并统筹多触点传播内容的视觉一致性。</p>
                  <p className="case-en">Campaign visual design, artist key visuals, film and content planning, image direction and a consistent visual system across gifting touchpoints.</p>
                </div>
              </section>
            </article>
          ) : activeProject.id === "06" ? (
            <article className="case-study xiaoran-case">
              <section className="case-intro xiaoran-intro">
                <span className="case-index">Ruby Campaign / Overview</span>
                <div>
                  <h2>红宝石时光，<br />撑起肌肤韧性</h2>
                  <p>围绕珀莱雅红宝石系列与品牌时光大使李小冉，以 guideline 中的深红至亮红渐变为唯一背景系统，让红宝石光泽、银色产品质感与人物状态在影像中保持统一。</p>
                </div>
                <div className="case-en">
                  <h2>Ruby resilience,<br />captured in light.</h2>
                  <p>A refined campaign where a ruby-red gradient, metallic product details and luminous skin create one cohesive image system across film and photography.</p>
                </div>
              </section>

              <section className="xiaoran-kv-section">
                <div className="case-section-heading">
                  <span>01 / Artist Key Visuals</span>
                  <p>以深红至亮红的渐变承托人物肤感，用银色产品与红宝石光泽形成视觉锚点，统一代言人、产品与品牌信息。</p>
                </div>
                <div className="xiaoran-kv-grid">
                  {xiaoranKeyVisuals.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Key Visual · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="xiaoran-film-section">
                <div className="case-section-heading">
                  <span>02 / Campaign Film</span>
                  <div className="film-copy">
                    <p>以人物状态与产品质感交替推进，在轻盈节奏中呈现红宝石系列的紧致、韧性与光泽感。</p>
                    <span className="film-cta">点击观看珀莱雅 × 李小冉 TVC ↓︎</span>
                  </div>
                </div>
                <video controls playsInline preload="none" poster="/projects/proya-xiaoran/kv/kv-03.jpg">
                  <source src="/projects/proya-xiaoran/film.m4v" type="video/mp4" />
                </video>
              </section>

              <section className="xiaoran-print-section">
                <div className="case-section-heading">
                  <span>03 / Print</span>
                  <p>从人物近景、手持产品到系列合影，保留清透肤感与克制构图，让产品红色成为画面中的持续线索。</p>
                </div>
                <div className="xiaoran-print-grid">
                  {xiaoranPrintImages.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Print · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="case-role xiaoran-role">
                <span>04 / Role</span>
                <h2>Campaign Visual Design<br />KV & Content Planning</h2>
                <div>
                  <p>围绕红宝石系列梳理整体视觉方向，参与艺人主视觉、TVC 与平面摄影的内容规划与设计延展，在不同媒介中保持色彩、光感与产品质感的统一。</p>
                  <p className="case-en">Campaign visual design, artist key visuals, film and image planning, with a consistent ruby-led palette across every touchpoint.</p>
                </div>
              </section>
            </article>
          ) : activeProject.id === "07" ? (
            <article className="case-study croquis-case">
              <section className="case-intro dark-case-intro">
                <span className="case-index">Campaign / Overview</span>
                <div>
                  <h2>这世界没有真相，<br />只有视角</h2>
                  <p>速写 26SS 以“阶梯”为视觉线索，把向上行走、短暂停留与再次出发转化为影像节奏。在品牌二十周年的节点上，人物不断改变位置，也不断重新观看自己与周围的世界。</p>
                </div>
                <div className="case-en">
                  <h2>A shift in position.<br />A shift in perspective.</h2>
                  <p>Stairs become a metaphor for movement and reflection, shaping a campaign that moves between ascent, pause and a renewed point of view.</p>
                </div>
              </section>

              <section className="dark-film-section">
                <div className="case-section-heading">
                  <span>01 / Campaign Film</span>
                  <div className="film-copy">
                    <p>以行走、停顿与空间转换建立节奏，让人物关系在现实道路与象征性的“阶梯”之间逐渐展开。</p>
                    <span className="film-cta">点击观看速写 26SS 成片 ↓︎</span>
                  </div>
                </div>
                <video controls playsInline preload="none" poster="/projects/croquis-ss26/cover.jpg">
                  <source src="/projects/croquis-ss26/film.mp4" type="video/mp4" />
                </video>
              </section>

              <section className="dark-kv-section">
                <div className="case-section-heading">
                  <span>02 / Key Visuals</span>
                  <p>以公路、旷野与停车场构成开放场域，通过人物距离、动作和道具建立带有叙事感的系列主视觉。</p>
                </div>
                <div className="dark-kv-gallery" aria-label="速写 26SS 主视觉，横向滑动浏览" tabIndex={0}>
                  {croquisKeyVisuals.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>{String(index + 1).padStart(2, "0")} / 03</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="dark-editorial-section">
                <div className="case-section-heading">
                  <span>03 / Main Story</span>
                  <p>主线影像在运动与静止之间切换，以更松弛的页面节奏保留人物、服装和环境之间的呼吸感。</p>
                </div>
                <div className="dark-editorial-grid">
                  {croquisMainImages.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Main Story · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="dark-editorial-section dark-branch-section">
                <div className="case-section-heading">
                  <span>04 / Black Line</span>
                  <p>黑支线以更强的明暗关系、舞台感与双重人物状态，回应“改变视角”所带来的内在张力。</p>
                </div>
                <div className="dark-editorial-grid dark-branch-grid">
                  {croquisBlackImages.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Black Line · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="case-role dark-case-role">
                <span>05 / Role</span>
                <h2>Campaign Visual Direction<br />Key Visual Planning</h2>
                <div>
                  <p>围绕“阶梯”与“视角变化”梳理整季视觉概念，参与 Campaign 视觉方向、KV 构图与平面延展，并统筹主线与黑支线的影像语气。</p>
                  <p className="case-en">Campaign concept development, visual direction, key visual planning and a coherent image language across the main story and black line.</p>
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
                  <p>以克制的版式、留白与影像节奏，呈现 LESS 26SS 的品牌气质与春夏叙事。</p>
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
                  <p>从品牌理念、视觉语言到产品表达，完整展开 LESS 26SS 品牌手册的系统构建。</p>
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
          ) : activeProject.id === "10" ? (
            <article className="case-study reuse-case">
              <section className="case-intro dark-case-intro reuse-intro">
                <span className="case-index">Documentary / Overview</span>
                <div>
                  <h2>布尽其用，<br />让手艺继续生长</h2>
                  <p>项目从织物与人的真实关系出发，分别走近曲措与粟田梅。两段地域、技艺与生活经验不同的故事，共同回应材料如何被珍惜、延续，并在当下获得新的生命。</p>
                </div>
                <div className="case-en">
                  <h2>Cloth in use.<br />Craft in motion.</h2>
                  <p>Two documentary chapters trace how cloth, place and lived knowledge continue through the hands of Qucu and Su Tianmei.</p>
                </div>
              </section>

              <section className="reuse-chapter reuse-qucu-section">
                <div className="reuse-chapter-title">
                  <span>01 / 曲措</span>
                  <h2>曲措<br /><em>Qucu</em></h2>
                  <p>在高原环境与日常劳作之间，织物承载着时间、经验和人与土地的关系。影像以克制的观察记录纤维从双手出发，再回到生活。</p>
                </div>
                <div className="reuse-film-wrap">
                  <span className="film-cta">点击观看曲措篇 ↓︎</span>
                  <video controls playsInline preload="none" poster="/projects/jnby-reuse/qucu/qucu-01.jpg">
                    <source src="/projects/jnby-reuse/qucu-film.m4v" type="video/mp4" />
                  </video>
                </div>
                <div className="reuse-editorial-grid">
                  {reuseQucuImages.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>曲措 · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="reuse-chapter reuse-suitianmei-section">
                <div className="reuse-chapter-title">
                  <span>02 / 粟田梅</span>
                  <h2>粟田梅<br /><em>Su Tianmei</em></h2>
                  <p>从蓝染、织造到共同劳作，材料不只是物件，也连接着女性经验与社区记忆。深蓝的线与明亮的日常共同构成这一章的影像语气。</p>
                </div>
                <div className="reuse-film-wrap">
                  <span className="film-cta">点击观看粟田梅篇 ↓︎</span>
                  <video controls playsInline preload="none" poster="/projects/jnby-reuse/suitianmei/suitianmei-01.jpg">
                    <source src="/projects/jnby-reuse/suitianmei-film.m4v" type="video/mp4" />
                  </video>
                </div>
                <div className="reuse-editorial-grid reuse-suitianmei-grid">
                  {reuseSuitianmeiImages.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>粟田梅 · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="case-role dark-case-role reuse-role">
                <span>03 / Role</span>
                <h2>Documentary Visual Direction<br />Content & Image Planning</h2>
                <div>
                  <p>围绕两位人物建立双章节叙事，参与内容梳理、影像方向与平面素材编排，让技艺、材料与真实生活在同一视觉系统中彼此照见。</p>
                  <p className="case-en">Documentary visual direction, two-part narrative structure, image planning and editorial sequencing.</p>
                </div>
              </section>
            </article>
          ) : activeProject.id === "11" ? (
            <article className="case-study giftbox-case">
              <section className="case-intro dark-case-intro giftbox-intro">
                <span className="case-index">Packaging / Overview</span>
                <div>
                  <h2>礼赠，不止于包装</h2>
                  <p>围绕不同节日、产品线与使用场景，完成从概念、视觉、结构到材料与工艺落地的礼盒设计。每组作品保留独立气质，同时以清晰的产品秩序与开箱体验形成统一方法。</p>
                </div>
                <div className="case-en">
                  <h2>Designed to give.<br />Made to be remembered.</h2>
                  <p>A collection of gifting systems developed across concept, structure, material, print craft and production.</p>
                </div>
              </section>

              {giftBoxSeries.map((series, seriesIndex) => (
                <section className="giftbox-series" key={series.prefix}>
                  <div className="giftbox-series-heading">
                    <span>{String(seriesIndex + 1).padStart(2, "0")} / {series.title}</span>
                    <h2>{series.title}</h2>
                    <p>{series.english}</p>
                  </div>
                  <div className={`giftbox-grid giftbox-${series.prefix}`}>
                    {series.images.map((item, imageIndex) => (
                      <figure key={item.src}>
                        <img src={item.src} alt={item.alt} loading="lazy" />
                        <figcaption>{String(imageIndex + 1).padStart(2, "0")} / {String(series.images.length).padStart(2, "0")}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              ))}

              <section className="case-role dark-case-role giftbox-role">
                <span>06 / Role</span>
                <h2>Packaging Design<br />Material & Production</h2>
                <div>
                  <p>负责品牌礼盒、包装与线下物料的创意设计及落地执行，涵盖概念提案、结构规划、材料选型、工艺组合、打样校色与生产文件整理。</p>
                  <p className="case-en">Packaging concept, structural planning, material and print-craft selection, prototyping and production-ready artwork.</p>
                </div>
              </section>
            </article>
          ) : activeProject.id === "12" ? (
            <article className="case-study fish-case">
              <section className="case-intro dark-case-intro fish-intro">
                <span className="case-index">Cultural Research / Overview</span>
                <div>
                  <h2>看见一盏鱼灯，<br />也看见它背后的生活</h2>
                  <p>「观鱼」以浙江青田鱼灯为研究对象，从田野影像、口述资料与传统工艺出发，梳理鱼灯的造型、色彩、动作与集体记忆，并将其转化为一套当代视觉叙事。</p>
                </div>
                <div className="case-en">
                  <h2>To see the fish<br />is to see its living memory.</h2>
                  <p>A visual research project that traces the craft, movement and communal memory of Qingtian fish lanterns, translating them into a contemporary visual language.</p>
                </div>
              </section>

              <section className="fish-scroll-section">
                <div className="case-section-heading">
                  <span>01 / Field Research</span>
                  <p>从地方环境、节庆现场与传承人口述出发，建立项目的文化语境，并提炼鱼灯制作、表演与传播中的关键信息。</p>
                </div>
                <div className="fish-scroll-gallery" aria-label="观鱼田野调研，横向滑动浏览" tabIndex={0}>
                  {fishResearchImages.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>{String(index + 1).padStart(2, "0")} / 06</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="fish-visual-section">
                <div className="case-section-heading">
                  <span>02 / Visual System</span>
                  <p>保留鱼灯表演中强烈的夜色、火光与动态残影，让民俗现场与当代图形语言在同一画面中相遇。</p>
                </div>
                <div className="fish-main-grid">
                  {fishMainVisuals.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Key Visual · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="fish-model-section">
                <div className="case-section-heading">
                  <span>03 / Digital Fish Lanterns</span>
                  <p>提取鱼灯的骨架、鳞片、色彩与游动姿态，构建四组数字鱼灯模型，使传统造型获得新的观看方式。</p>
                </div>
                <div className="fish-model-grid">
                  {fishModels.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>Fish · {String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
                <figure className="fish-process">
                  <img src="/projects/about-fish/process.jpg" alt="观鱼视觉推演过程" loading="lazy" />
                  <figcaption>Form & Motion Study</figcaption>
                </figure>
              </section>

              <section className="dark-film-section fish-film-section">
                <div className="case-section-heading">
                  <span>04 / Film</span>
                  <div className="film-copy">
                    <p>以现场影像、声音与数字鱼灯的动态关系，呈现传统民俗在当代媒介中的另一种生命力。</p>
                    <span className="film-cta">点击观看《观鱼》成片 ↓︎</span>
                  </div>
                </div>
                <video controls playsInline preload="none" poster="/projects/12-about-fish.jpg">
                  <source src="/projects/about-fish/film.mp4" type="video/mp4" />
                </video>
              </section>

              <section className="fish-scroll-section fish-editorial-section">
                <div className="case-section-heading">
                  <span>05 / Editorial</span>
                  <p>以书籍串联调研、图像分析、视觉系统与最终呈现，让信息密度与阅读节奏保持平衡。</p>
                </div>
                <div className="fish-scroll-gallery" aria-label="观鱼书籍设计，横向滑动浏览" tabIndex={0}>
                  {fishEditorialImages.map((item, index) => (
                    <figure key={item.src}>
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption>{String(index + 1).padStart(2, "0")} / 05</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="case-role dark-case-role fish-role">
                <span>06 / Role</span>
                <h2>Research & Visual Direction<br />Editorial & Motion Design</h2>
                <div>
                  <p>从田野调研、内容梳理到视觉系统与动态影像，完成项目整体视觉设计；提炼鱼灯造型、色彩与动作特征，建立主视觉、数字鱼灯与书籍叙事。</p>
                  <p className="case-en">Field research, visual direction, key visual system, digital fish-lantern development, editorial design and motion storytelling.</p>
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
