import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import images from "@/assets/images/images.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faSignIn,
  faEllipsisVertical,
  faEarth,
  faKeyboard,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import AccountItem from "../AccountItem/AccountItem";
import Button from "@/components/Button/button";
import Menu from "@/components/Popper/Menu/menu";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarth} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([1, 2, 3, 4]);
  //Handle logic
  const handleMenuChange = (menuItem) => {};
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-label")}>Accountants</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button text>Upload</Button>
          <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Log in
          </Button>
          <Button rounded className={cx("custom-login")}>
            Get app
          </Button>
          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
