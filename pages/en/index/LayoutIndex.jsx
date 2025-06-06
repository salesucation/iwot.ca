import "../../../layouts/LayoutDefault.scss";
import Maintenance from "./Maintenance.mdx";
import Operations from "./Operations.mdx";
import NoCodeHMI from "./NoCodeHMI.mdx";
import Egress from "./Egress.mdx";
import AutonomousComponents from "./AutonomousComponents.mdx";
export default function ({ children }) {
  return <>
    <header className="container">
      <nav role="menu">
        <label data-role="burger"><input type="checkbox" /></label>
        <ul role="menubar">
          <li><strong>Inter-Web of Things</strong></li>
        </ul>
        <ul role="menuitem">
          <li>
            <form role="search" method="get" action="https://wpico.mwm/">
              <input name="s" type="search" placeholder="Search" />
              <input type="submit" value="Search" />
            </form>

          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main className="container">
      <div className="hero">
        {children}
      </div>
      <h2>The web is the human machine interface.</h2>
      <div className="grid">
        <article>
          <Operations />
        </article>
        <article>
          <Maintenance />
        </article>
      </div>
      <h2>Human Machine Interface Design</h2>
      <div className="grid">
        <article>
          <AutonomousComponents />
        </article>
        <article>
          <NoCodeHMI />
        </article>
        <article>
          <Egress />
        </article>
      </div>
      <h2>Articles</h2>
      <figure></figure>
      <h2>Featured Components</h2>
      <figure></figure>
    </main>
    <footer className="container">
      &copy; Salesucation.com Inc. 2012-{new Date().getFullYear()}
    </footer>
  </>

}