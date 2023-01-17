import React from "react";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";
import "../style/footer.scss";

const Footer = () => {
  const isDark = useRecoilValue(getTheme);
  return (
    <div className={isDark ? "FooterBlack" : "Footer"}>
      <h4 className="footerLogoImg"></h4>
      <h6>서울시 마포구 성암로330, 521(상암동, DMC첨단산업센터 5층)(03920)</h6>
      <h6>TEL 1644-2378｜ FAX 02-3151-0942</h6>
      <h6>Copyright ⓒ 2014 DIGITALZONE. All Rights Reserved.</h6>
      <div className="footerSubImgBox">
        <h4 className="footerSubImg footerSub1"></h4>
        <h4 className="footerSubImg footerSub2"></h4>
        <h4 className="footerSubImg footerSub3"></h4>
      </div>
    </div>
  );
};

export default Footer;
