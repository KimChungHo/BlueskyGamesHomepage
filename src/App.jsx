const baseUrl = import.meta.env.BASE_URL

const screenshotUrl = `${baseUrl}images/jackpot-dungeon-main.jpg`
const cardFrontUrl = `${baseUrl}images/business-card-front.png`
const cardBackUrl = `${baseUrl}images/business-card-back.png`

const facts = [
  { label: 'Studio', value: 'Bluesky Games' },
  { label: 'Developer', value: '김청호 (Leone)' },
  { label: 'Project', value: 'Jackpot Dungeon' },
]

const notes = [
  {
    title: '1인 개발',
    text: '기획, 구현, 테스트까지 한 사람이 직접 다루며 작은 범위부터 완성도를 쌓고 있습니다.',
  },
  {
    title: '개발 중',
    text: '공개 가능한 빌드와 추가 정보가 준비되는 대로 홈페이지를 통해 업데이트할 예정입니다.',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="주요 내비게이션">
        <a className="brand" href="#top" aria-label="Bluesky Games 홈">
          <span className="brand-mark" aria-hidden="true" />
          <span>Bluesky Games</span>
        </a>
        <nav className="nav-links">
          <a href="#game">게임</a>
          <a href="#team">팀</a>
          <a href="#contact">연락처</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={screenshotUrl} alt="Jackpot Dungeon 메인 화면" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">Bluesky Games First Project</p>
            <h1 id="hero-title">Jackpot Dungeon</h1>
            <p className="hero-copy">
              던전, 보물상자, 탐험의 이미지를 중심으로 개발 중인 블루스카이 게임즈의 첫 번째 게임입니다.
              작은 팀이지만 명확한 콘셉트와 손맛 있는 플레이를 목표로 다듬고 있습니다.
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
            <h2 id="game-title">개발 중인 게임, Jackpot Dungeon</h2>
            <p>
              현재 제작 중인 프로젝트로, 던전의 분위기와 보상 중심의 진행감을 살리는 방향으로
              게임성을 잡아가고 있습니다. 공개 가능한 화면과 기능은 이 페이지에서 계속 정리됩니다.
            </p>
          </div>
          <div className="screenshot-frame">
            <img src={screenshotUrl} alt="보물 상자가 보이는 Jackpot Dungeon 메인 화면" />
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

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">프로젝트 문의와 협업 제안</h2>
            <p>
              Bluesky Games와 Jackpot Dungeon에 관한 프로젝트 문의와 협업 제안을 받고 있습니다.
              필요한 내용은 이메일이나 GitHub를 통해 편하게 남겨주세요.
            </p>
            <div className="contact-actions" aria-label="연락 링크">
              <a className="primary-link" href="mailto:oksk0302@naver.com">E-Mail</a>
              <a className="outline-link" href="https://github.com/KimChungHo">GitHub</a>
            </div>
          </div>
          <figure className="business-card-frame contact-card-frame">
            <img src={cardBackUrl} alt="김청호 연락처가 적힌 Bluesky Games 명함 뒷면" />
          </figure>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Bluesky Games</span>
        <span>Jackpot Dungeon</span>
      </footer>
    </div>
  )
}

export default App
