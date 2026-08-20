import logo from "@/assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faCoins,
  faEarth,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faSignIn,
  faSignOut,
  faSpinner,
  faUserAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export function Icon({ icon, style, ...props }) {
  return (
    <FontAwesomeIcon
      icon={icon}
      {...props}
      style={{
        fill: "#ffffff",
        stroke: "#161823",
        strokeWidth: 1.2,
        paintOrder: "stroke fill",
        ...style,
      }}
    />
  );
}

export const TikTokLogo = () => <img src={logo} alt="TikTok" />;
export const UploadIcon = (props) => (
  <Icon
    icon={faCloudUpload}
    {...props}
    style={{
      color: "#161823",
      fill: "#fff",
      stroke: "#161823",
      ...props.style,
    }}
  />
);
export const MessageIcon = (props) => (
  <Icon
    icon={faMessage}
    {...props}
    style={{
      color: "#161823",
      fill: "#fff",
      stroke: "#161823",
      ...props.style,
    }}
  />
);
export const LoginIcon = (props) => <Icon icon={faSignIn} {...props} />;
export const MoreIcon = (props) => (
  <Icon icon={faEllipsisVertical} {...props} />
);
export const ClearIcon = (props) => <Icon icon={faCircleXmark} {...props} />;
export const SearchIcon = (props) => (
  <Icon icon={faMagnifyingGlass} {...props} />
);
export const SpinnerIcon = (props) => <Icon icon={faSpinner} {...props} />;
export const EarthIcon = (props) => <Icon icon={faEarth} {...props} />;
export const HelpIcon = (props) => <Icon icon={faCircleQuestion} {...props} />;
export const KeyboardIcon = (props) => <Icon icon={faKeyboard} {...props} />;
export const UserIcon = (props) => <Icon icon={faUserAlt} {...props} />;
export const CoinsIcon = (props) => <Icon icon={faCoins} {...props} />;
export const SettingsIcon = (props) => <Icon icon={faGear} {...props} />;
export const LogoutIcon = (props) => <Icon icon={faSignOut} {...props} />;
export const ChevronLeftIcon = (props) => (
  <Icon icon={faChevronLeft} {...props} />
);
export const CheckCircleIcon = (props) => (
  <Icon icon={faCheckCircle} {...props} />
);
