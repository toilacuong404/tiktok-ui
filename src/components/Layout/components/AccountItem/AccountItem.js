import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import React from "react";
import { CheckCircleIcon } from "../Icons/icon";
import Image from "@/components/Images/image";
import images from "@/assets/images/images";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src={images.defaultImage}
        alt="Nguyen Van A"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <CheckCircleIcon className={cx("check")} />
        </h4>
        <span className={cx("username")}>vana2026</span>
      </div>
    </div>
  );
}

export default AccountItem;
