import styles from "./menu.module.scss";
import classNames from "classnames/bind";
import { ChevronLeftIcon } from "@/components/Layout/components/Icons/icon";

const cx = classNames.bind(styles);

function Header({ title, onBack, showBack }) {
  return (
    <header className={cx("header")}>
      {showBack && (
        <button className={cx("back-btn")} onClick={onBack}>
          <ChevronLeftIcon />
        </button>
      )}
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  );
}

export default Header;
