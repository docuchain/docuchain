import React from "react";

/**
 * 버튼
 * @param {type} 타입
 * @param {className} 클래스명
 * @param {width} 넓이
 * @param {height} 높이
 * @param {margin} 마진
 * @param {padding} 패딩
 * @param {onClick} 클릭 이벤트
 * @param {children} 버튼 내용
 */
const Button = ({
  type = "button",
  className,
  width,
  height,
  margin,
  padding,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      style={{ width, height, padding, margin }}
    >
      {children}
    </button>
  );
};

export default Button;
