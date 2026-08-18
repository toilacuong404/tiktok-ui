import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src="" alt="" />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Manh Hung</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>manhhung2506</span>
      </div>
    </div>
  );
}

export default AccountItem;