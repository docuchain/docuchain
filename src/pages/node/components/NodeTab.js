import React from "react";

import styled from "styled-components";
// import CustomText from "../../components/common/Text/CustomText";
import { colors } from "../../../lib/colors";
import { getScaledHeightPixel, getScaledWidthPixel } from "../../../lib/scale";

const S = {
  FlexContainer: styled.div`
    display: flex;
    width: 90%;
    margin: ${getScaledHeightPixel(50)} ${getScaledWidthPixel(50)};
  `,
  // TableColumn: styled(CustomText)`
  //   display: flex;
  //   flex: ${(props) => props.flex};
  //   justify-content: center;
  //   align-items: center;
  //   padding: ${getScaledHeightPixel(15)} 0;
  //   border-bottom: ${(props) =>
  //     props.selected && `2px solid ${colors.blue}`};
  //   background-color: ${colors.white};
  // `,
};

const NodeTap = ({ selectedTap, setSelectedTap }) => {
  return (
    <S.FlexContainer>
      <S.TableColumn
        onClick={() => {
          setSelectedTap("NODE_LIST");
        }}
        selected={selectedTap === "NODE_LIST"}
        flex={1}
        color={selectedTap === "NODE_LIST" ? colors.primary : colors.gray800}
      >
        노드목록
      </S.TableColumn>
      <S.TableColumn
        onClick={() => {
          setSelectedTap("ALL_NODE_STATE");
        }}
        selected={selectedTap === "ALL_NODE_STATE"}
        flex={1}
        color={
          selectedTap === "ALL_NODE_STATE" ? colors.primary : colors.gray800
        }
      >
        전체 노드 지원 현황
      </S.TableColumn>
    </S.FlexContainer>
  );
};

export default NodeTap;
