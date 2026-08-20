import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import React from "react";
import { CheckCircleIcon } from "../Icons/icon";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src="" alt="" />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Manh Hung</span>
          <CheckCircleIcon className={cx("check")} />
        </h4>
        <span className={cx("username")}>manhhung2506</span>
      </div>
    </div>
  );
}

export default AccountItem;
