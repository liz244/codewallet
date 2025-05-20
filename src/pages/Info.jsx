import Header from '../components/Header';
import '../styles/info.css';

function Info() {
  return (
    <>
      <Header />
      <main className="info-container">
        <h2>About Code Wallet</h2>

        <section>
          <h3>📌 Features</h3>
          <ul>
            <li>Save and organize code snippets</li>
            <li>Tag system</li>
            <li>Syntax highlighting</li>
            <li>Clipboard copy</li>
            <li>Dark mode (optional)</li>
          </ul>
        </section>

        <section>
          <h3>👤 Developer</h3>
          <p>Liz Bouka – 2nd year Bachelor Dev</p>
        </section>

        <section>
          <h3>📜 Legal Information</h3>
          <p>
            This application stores all data locally on your computer.
            No cloud sync or personal tracking is performed. Code Wallet is compliant
            with GDPR principles, since no personal data is collected or sent externally.
          </p>
        </section>
      </main>
    </>
  );
}

export default Info;
