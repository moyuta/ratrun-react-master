import Link from "next/link";
import Image from "next/image";
import "./AppHeader.scss";

interface Page {
  title: string;
  to: string;
}

interface AppHeaderProps {
  pageList: Page[];
}

export const AppHeader: React.FC<AppHeaderProps> = ({ pageList }) => {
  return (
    <header>
      <div className="logo-area">
        <Image src={require("@/assets/img/rocket.png")} alt="rocket" />
      </div>
      <nav className="nav-area">
        <ul className="nav-area-list">
          {pageList.map((page) => (
            <li key={page.to}>
              <Link href={page.to}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
