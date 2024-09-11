import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { isIPhone } from '../../../../../../../complect/device-differences';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { Com } from '../../Com';
import { FreeComFace } from '../ComFace';
import { FreeComFaceProps } from '../ComFace.model';
import { IComFaceList } from './model';
import { CmComWid } from '../../../../../../../../back/apps/cm/Cm.enums';

interface Props extends IComFaceList, FreeComFaceProps {
  list: Com[];
  titles?: Record<number, string>;
  className?: string;
}

export const ComFaceListComList = ({ list, isNeedRenderingDelay, titles, className, ...comProps }: Props) => {
  const [isPartialRender, setIsPartialRender] = useState(isNeedRenderingDelay);

  const ccomWid = comProps.ccomw;
  const ccomi = isPartialRender ? list.findIndex(({ wid }) => wid === ccomWid) : 0;

  useEffect(() => {
    const node = document.getElementById(`com_face_wid_${comProps.ccomw}`);

    if (comProps.ccomw === undefined || node === null) {
      return hookEffectLine()
        .setTimeout(setIsPartialRender, isIPhone ? 2 : 600, false)
        .effect();
    }

    return hookEffectLine()
      .setTimeout(setIsPartialRender, isIPhone ? 2 : 600, false)
      .setTimeout(() => {
        const parent = (function get(node: HTMLElement | null): HTMLElement | null {
          return node && (node.scrollHeight > node.clientHeight ? node : get(node.parentElement));
        })(node);

        if (parent == null) {
          node.scrollIntoView({ block: 'center' });
          return;
        }

        mylib.scrollToView(node, 'top', {
          parent,
          top: 36,
        });
      })
      .effect();
  }, [ccomi, comProps.ccomw, isNeedRenderingDelay]);

  return (
    <StyledContainer
      $ccomw={comProps.ccomw}
      className={className}
    >
      {list.map((com, comi) => {
        if (isPartialRender && (ccomi - 15 > comi || ccomi + 17 < comi)) return null;

        return (
          <React.Fragment key={com.wid}>
            {titles?.[comi] !== undefined && <div className="flex center margin-gap-v color--7">{titles[comi]}</div>}
            <FreeComFace
              com={com}
              comi={comi}
              {...comProps}
            />
          </React.Fragment>
        );
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $ccomw: CmComWid | NaN | nil }>`
  ${props =>
    props.$ccomw &&
    css`
      #com_face_wid_${props.$ccomw}, .com_face_wid_${props.$ccomw} {
        font-weight: bold;
      }
    `}
`;
