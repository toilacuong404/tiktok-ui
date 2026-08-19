import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./menu.module.scss";
import classNames from "classnames/bind";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header({ title, onBack, showBack }) {
  return (
    <header className={cx("header")}>
      {showBack && (
        <button className={cx("back-btn")} onClick={onBack}>
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </button>
      )}
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  );
}

export default Header;
