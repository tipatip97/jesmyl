import styled, { css } from 'styled-components';
import { CmComWid } from '../../../../../../../../back/apps/cm/Cm.enums';
import { makeRegExp } from '../../../../../../../../back/complect/makeRegExp';
import { MyLib } from '../../../../../../../complect/my-lib/MyLib';
import { currentComwIdPrefix } from './_ComList';

export const StyledComList = styled.div<{
  $ccomw: CmComWid | NaN | nil;
  $accentComw: number | nil;
  $selectedComws: CmComWid[];
  $isPutCcomFaceOff: boolean | nil;
  $comTitles: Record<number, string> | und;
}>`
  * {
    transition: opacity 0.4s;
  }

  ${props => {
    if (props.$comTitles == null) return;

    return MyLib.entries(props.$comTitles).map(([index, title]) => {
      return css`
        .face-item:nth-child(${+index + 1}) {
          margin-top: 2em;

          &:before {
            content: '${title.replace(makeRegExp("/'/g"), "\\'")}';
            position: absolute;
            display: block;
            top: -1.5em;
            width: 100%;
            text-align: center;
            color: var(--color--7);
          }
        }
      `;
    });
  }}

  ${props =>
    !props.$isPutCcomFaceOff &&
    css`
      #${currentComwIdPrefix}${props.$ccomw} {
        font-weight: bold;
      }
    `}
  
    ${props => {
    return css`
      ${props.$accentComw
        ? css`
            > :not(#${currentComwIdPrefix}${props.$accentComw}) {
              opacity: 0.4;
            }
          `
        : ''}

      ${props.$selectedComws.map(selectedComwMapper).join(' ')}
    `;
  }}
`;

const selectedComwMapper = (comw: CmComWid, comwi: number) => {
  return Array.from(css`
    #${currentComwIdPrefix}${comw} .face-logo {
      border-color: var(--color--3);

      &::after {
        content: '${comwi + 1}';
      }
    }
  `).join('');
};
