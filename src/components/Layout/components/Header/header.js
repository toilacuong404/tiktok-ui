import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import images from "@/assets/images/images.js";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import AccountItem from "../AccountItem/AccountItem";
import Button from "@/components/Button/button";
import Menu from "@/components/Popper/Menu/menu";
import {
  ClearIcon,
  CoinsIcon,
  EarthIcon,
  HelpIcon,
  KeyboardIcon,
  LoginIcon,
  LogoutIcon,
  MessageIcon,
  MoreIcon,
  SearchIcon,
  SettingsIcon,
  SpinnerIcon,
  TikTokLogo,
  UploadIcon,
  UserIcon,
} from "../Icons/icon";

import Image from "@/components/Images/image";

const cx = classNames.bind(styles);

const img = "C:\Users\toilacuong\OneDrive\Pictures\Screenshots";

const currentUser = true;
const MENU_ITEMS = [
  {
    icon: <EarthIcon />,
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
    icon: <HelpIcon />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <KeyboardIcon />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([1, 2, 3, 4]);
  //Handle logic
  const handleMenuChange = (menuItem) => {};

  const userMenu = [
    {
      icon: <UserIcon />,
      title: "View profile",
      to: "/@manh",
    },
    {
      icon: <CoinsIcon />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <SettingsIcon />,
      title: "Settings",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon />,
      title: "Log out",
      to: "/log out",
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <TikTokLogo />
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
              <ClearIcon />
            </button>
            <SpinnerIcon className={cx("loading")} />
            <button className={cx("search-btn")}>
              <SearchIcon />
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Send message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary rightIcon={<LoginIcon />}>
                Log in
              </Button>
              <Button rounded className={cx("custom-login")}>
                Get app
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src={images.userAvatar}
                className={cx("user-avatar")}
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx("more-btn")}>
                <MoreIcon />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
