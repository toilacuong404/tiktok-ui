import images from "@/assets/images/images";
import Image from "@/components/Images/image";
import classNames from "classnames/bind";
import { CheckCircleIcon } from "../Icons/icon";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const name = data?.name || "Unknown account";
  const username = data?.username || "unknown";
  const profileUrl = `/@${username.toLowerCase()}`;

  return (
    <a className={cx("wrapper")} href={profileUrl}>
      <Image className={cx("avatar")} src={images.defaultImage} alt={name} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{name}</span>
          <CheckCircleIcon className={cx("check")} />
        </h4>
        <span className={cx("username")}>@{username.toLowerCase()}</span>
      </div>
    </a>
  );
}

export default AccountItem;
