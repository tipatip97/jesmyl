import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { isIPhone } from '../../../../../../../complect/device-differences';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { Com } from '../../Com';
import { FreeComFace } from '../ComFace';
import { FreeComFaceProps } from '../ComFace.model';
import { IComFaceList } from './model';

interface Props extends IComFaceList, FreeComFaceProps {
  list: Com[];
}

export const ComFaceListComList = ({ list, isNeedRenderingDelay, ...comProps }: Props) => {
  const [isPartialRender, setIsPartialRender] = useState(isNeedRenderingDelay);

  const ccomWid = comProps.ccom?.wid;
  const ccomi = isPartialRender ? list.findIndex(({ wid }) => wid === ccomWid) : 0;

  useEffect(() => {
    if (comProps.ccom === undefined) return;

    const node = document.getElementById(`com_face_wid_${comProps.ccom.wid}`);
    if (node == null) return;

    if (!isNeedRenderingDelay) return;

    const parent = node.parentElement?.parentElement?.parentElement;
    if (parent == null) return;

    let scrollTimeout: TimeOut;
    let isNeedScroll = true;

    const onScroll = () => {
      isNeedScroll = false;
      parent.removeEventListener('scroll', onScroll);
    };
    parent.addEventListener('scroll', onScroll);

    const renderTimeout = setTimeout(
      () => {
        setIsPartialRender(false);

        if (!isNeedScroll) return;

        scrollTimeout = setTimeout(() => {
          mylib.scrollToView(node, 'top', {
            parent,
            top: 36,
          });
        });
      },
      isIPhone ? 2 : 600,
    );

    return () => {
      clearTimeout(renderTimeout);
      clearTimeout(scrollTimeout);
      parent.removeEventListener('scroll', onScroll);
    };
  }, [ccomi, comProps.ccom, isNeedRenderingDelay]);

  return (
    <StyledContainer $ccomw={comProps.ccom?.wid}>
      {list.map((com, comi) => {
        if (isPartialRender && (ccomi - 15 > comi || ccomi + 17 < comi)) return null;

        return (
          <FreeComFace
            key={com.wid}
            com={com}
            comi={comi}
            {...comProps}
          />
        );
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $ccomw: number | nil }>`
  ${props =>
    props.$ccomw &&
    css`
      #com_face_wid_${props.$ccomw}, .com_face_wid_${props.$ccomw} {
        font-weight: bold;
      }
    `}
`;
