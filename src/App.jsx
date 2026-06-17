const screenshotUrl = `${import.meta.env.BASE_URL}images/jackpot-dungeon-main.jpg`

const facts = [
  { label: '팀', value: '블루스카이 게임즈' },
  { label: '개발자', value: '김청호' },
  { label: '프로젝트', value: '잭팟 던전' },
]

const notes = [
  {
    title: '1인 개발',
    text: '기획, 구현, 테스트를 한 사람이 직접 다루며 작은 범위부터 완성도를 쌓고 있습니다.',
  },
  {
    title: '개발 중',
    text: '공개 가능한 정보와 빌드가 준비되는 대로 이 페이지를 통해 업데이트할 예정입니다.',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="주요 내비게이션">
        <a className="brand" href="#top" aria-label="블루스카이 게임즈 홈">
          <span className="brand-mark" aria-hidden="true" />
          <span>블루스카이 게임즈</span>
        </a>
        <nav className="nav-links">
          <a href="#game">게임</a>
          <a href="#team">팀</a>
          <a href="#contact">소식</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={screenshotUrl} alt="잭팟 던전 메인 화면" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">1인 개발팀의 첫 프로젝트</p>
            <h1 id="hero-title">잭팟 던전</h1>
            <p className="hero-copy">
              블루스카이 게임즈가 개발 중인 던전 분위기의 게임입니다. 보물 상자와
              석조 유적의 이미지를 중심으로, 짧고 선명한 첫인상을 준비하고 있습니다.
            </p>
            <div className="hero-actions" aria-label="바로가기">
              <a className="primary-link" href="#game">프로젝트 보기</a>
              <a className="secondary-link" href="#team">팀 소개</a>
            </div>
          </div>
        </section>

        <section className="fact-band" aria-label="기본 정보">
          {facts.map((fact) => (
            <div className="fact-item" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </section>

        <section className="section two-column" id="game" aria-labelledby="game-title">
          <div className="section-copy">
            <p className="eyebrow">Game</p>
            <h2 id="game-title">개발 중인 게임, 잭팟 던전</h2>
            <p>
              잭팟 던전은 현재 제작 중인 프로젝트입니다. 공개된 메인 화면처럼 던전,
              보물, 탐험의 이미지를 중심으로 게임의 방향을 다듬고 있습니다.
            </p>
          </div>
          <div className="screenshot-frame">
            <img src={screenshotUrl} alt="보물 상자와 잭팟 던전 타이틀이 보이는 메인 화면" />
          </div>
        </section>

        <section className="section note-section" aria-label="프로젝트 노트">
          {notes.map((note) => (
            <article className="note-card" key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </section>

      </main>

      <footer className="site-footer">
        <span>© 2026 블루스카이 게임즈</span>
        <span>Jackpot Dungeon</span>
      </footer>
    </div>
  )
}

export default App
