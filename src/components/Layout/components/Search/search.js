import { Wrapper as PopperWrapper } from "@/components/Popper";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import AccountItem from "../AccountItem/AccountItem";
import styles from "../Header/Header.module.scss";
import { ClearIcon, SearchIcon, SpinnerIcon } from "../Icons/icon";

const cx = classNames.bind(styles);
const SEARCH_API_URL = "https://jsonplaceholder.typicode.com/users";
const SEARCH_DEBOUNCE_MS = 250;

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTrigger, setSearchTrigger] = useState(0);
  const [showRes, setShowRes] = useState(true);

  const inputRef = useRef();
  const searchRef = useRef();
  const lastRequestedQuery = useRef("");

  useEffect(() => {
    const query = searchValue.trim();
    const normalizedQuery = query.toLowerCase();
    setIsLoading(false);

    if (!query) {
      setSearchResult([]);
      return undefined;
    }

    if (normalizedQuery === lastRequestedQuery.current) {
      return undefined;
    }

    setSearchResult([]);

    const controller = new AbortController();
    const debounceId = setTimeout(() => {
      setIsLoading(true);
      lastRequestedQuery.current = normalizedQuery;

      fetch(SEARCH_API_URL, {
        signal: controller.signal,
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Search request failed: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          const filteredResults = data.filter((user) =>
            [user.name, user.username, user.email].some((value) =>
              value.toLowerCase().includes(normalizedQuery),
            ),
          );

          setSearchResult(filteredResults);
        })
        .catch((error) => {
          if (error.name !== "AbortError") {
            lastRequestedQuery.current = "";
            setSearchResult([]);
          }
        })
        .finally(() => setIsLoading(false));
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      clearTimeout(debounceId);
      controller.abort();
    };
  }, [searchValue, searchTrigger]);

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const handleSearch = () => {
    if (searchValue.trim()) {
      setSearchTrigger((trigger) => trigger + 1);
    }
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
            <h4 className={cx("search-label")}>Results for "{searchValue}"</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
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
        {!!searchValue && !isLoading && (
          <button type="button" className={cx("clear")} onClick={handleClear}>
            <ClearIcon />
          </button>
        )}

        {isLoading && <SpinnerIcon className={cx("loading")} />}
        <button
          type="button"
          className={cx("search-btn")}
          onClick={handleSearch}
          aria-label="Search"
        >
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
