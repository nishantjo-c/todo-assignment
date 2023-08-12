import navigationSCSS from "./styles/Navigation.module.scss";
import pollSvg from "../assets/pollSvg.svg";
import stockSvg from "../assets/stockSvg.svg";
import shareSvg from "../assets/shareSvg.svg";
import homeSvg from "../assets/homeSvg.svg";
import nameIcon from "../assets/nameIcon.svg";
import closingSvg from "../assets/closingSvg.svg";
import balanceSvg from "../assets/balanceSvg.svg";
import globeSvg from "../assets/globeSvg.svg";
import toggleSvg from "../assets/toggleSvg.svg";

function Navigation() {
  return (
    <>
      <div className={navigationSCSS.navitems}>
        <div className={navigationSCSS.navitems__header}>
          <div className={navigationSCSS.navitems__items}>
            <img
              src={nameIcon}
              alt=""
              className={navigationSCSS.navitems__items_icon}
            />
            <p className={navigationSCSS.navitems__items_name_title}>Name</p>
            <img
              src={closingSvg}
              alt=""
              className={navigationSCSS.navitems__items_icon}
            />
          </div>

          <div className={navigationSCSS.navitems__items}>
            <img
              src={homeSvg}
              alt=""
              className={navigationSCSS.navitems__items_icon}
            />
            <p className={navigationSCSS.navitems__items_name}>Section 1</p>
          </div>
          <div className={navigationSCSS.navitems__items}>
            <img
              src={pollSvg}
              alt=""
              className={navigationSCSS.navitems__items_icon}
            />
            <p className={navigationSCSS.navitems__items_name}>Section 2</p>
          </div>
          <div className={navigationSCSS.navitems__items}>
            <img
              src={stockSvg}
              alt=""
              className={navigationSCSS.navitems__items_icon}
            />
            <p className={navigationSCSS.navitems__items_name}>Section 3</p>
          </div>
          <div className={navigationSCSS.navitems__items}>
            <img
              src={shareSvg}
              alt=""
              className={navigationSCSS.navitems__items_icon}
            />
            <p className={navigationSCSS.navitems__items_name}>Section 4</p>
          </div>
        </div>

        <div className={navigationSCSS.navitems__footer}>
          <img
            src={balanceSvg}
            alt=""
            className={navigationSCSS.navitems__footer_icon}
          />
          <div className={navigationSCSS.navitems__footer_lower}>
            <img
              src={globeSvg}
              alt=""
              className={navigationSCSS.navitems__footer_icon_globe}
            />
            <img
              src={toggleSvg}
              alt=""
              className={navigationSCSS.navitems__footer_icon}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
