import images from "@/assets/images/images.js";
import Button from "@/components/Button/button";
import Menu from "@/components/Popper/Menu/menu";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import "tippy.js/dist/tippy.css";
import {
  CoinsIcon,
  EarthIcon,
  HelpIcon,
  KeyboardIcon,
  LoginIcon,
  LogoutIcon,
  MessageIcon,
  MoreIcon,
  SettingsIcon,
  TikTokLogo,
  UploadIcon,
  UserIcon,
} from "../Icons/icon";
import Search from "../Search/search";
import styles from "./Header.module.scss";

import Image from "@/components/Images/image";

const cx = classNames.bind(styles);

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
  //Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;
      default:
    }
  };

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
        {/* ô search */}
        <Search />
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
