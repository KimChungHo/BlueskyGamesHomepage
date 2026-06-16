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
    title: '던전 테마',
    text: '석조 던전과 보물 상자의 분위기를 중심으로 게임의 첫인상을 만들고 있습니다.',
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

        <section className="section team-section" id="team" aria-labelledby="team-title">
          <div>
            <p className="eyebrow">Team</p>
            <h2 id="team-title">블루스카이 게임즈</h2>
          </div>
          <div className="team-copy">
            <p>
              블루스카이 게임즈는 김청호가 운영하는 1인 개발팀입니다. 작은 팀의 속도로
              직접 만들고, 확인하고, 고쳐 나가며 게임을 완성해 가고 있습니다.
            </p>
            <dl className="profile-list">
              <div>
                <dt>팀원</dt>
                <dd>김청호</dd>
              </div>
              <div>
                <dt>역할</dt>
                <dd>기획 및 개발</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Updates</p>
          <h2 id="contact-title">소식은 이곳에 정리됩니다</h2>
          <p>
            잭팟 던전의 새 스크린샷, 공개 일정, 테스트 안내가 준비되면 이 홈페이지에
            순차적으로 추가할 예정입니다.
          </p>
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
