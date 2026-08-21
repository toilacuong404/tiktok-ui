import { Wrapper as PopperWrapper } from "@/components/Popper";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import AccountItem from "../AccountItem/AccountItem";
import styles from "../Header/Header.module.scss";
import { ClearIcon, SearchIcon, SpinnerIcon } from "../Icons/icon";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([1, 2, 3, 4]);
  const [showRes, setShowRes] = useState(true);

  const inputRef = useRef();
  const searchRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 1, 1, 1]);
    }, 0);
  }, []);

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const handleHideRes = (_instance, event) => {
    if (!searchRef.current?.contains(event.target)) {
      setShowRes(false);
    }
  };

  return (
    <HeadlessTippy
      interactive
      visible={showRes && searchResult.length > 0}
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
      onClickOutside={handleHideRes}
    >
      <div
        ref={searchRef}
        className={cx("search")}
        onFocusCapture={() => setShowRes(true)}
      >
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {!!searchValue && (
          <button type="button" className={cx("clear")} onClick={handleClear}>
            <ClearIcon />
          </button>
        )}

        <SpinnerIcon className={cx("loading")} />
        <button type="button" className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
