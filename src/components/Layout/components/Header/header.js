import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import React,{ useEffect, useState } from "react";
import images from "@/assets/images/images.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark,faMagnifyingGlass, faSpinner, faSignIn } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import {Wrapper as PopperWrapper} from "@/components/Popper"
import AccountItem from "../AccountItem/AccountItem";
import Button from "@/components/Button/button";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult]= useState([1,2,3,4]);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy
          interactive
          visible ={searchResult.length>0}
          render={attrs=>(
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-label")}>Accoutants</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem /> 
              </PopperWrapper>
            </div>
          )}
        >
        <div className={cx("search")}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>          
          <Button text>Upload</Button>
          <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>Log in</Button>
          <Button rounded className={cx('custom-login')}>Get app</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
