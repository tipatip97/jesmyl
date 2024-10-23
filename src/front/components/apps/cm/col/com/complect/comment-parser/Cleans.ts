import { css } from 'styled-components';
import { CmComWid } from '../../../../../../../../back/apps/cm/Cm.enums';
import { makeRegExp } from '../../../../../../../../back/complect/makeRegExp';
import { Order } from '../../order/Order';

export class ComBlockCommentMakerCleans {
  private static numberAssociationLine = 'iwvthjkfsz';

  static spaceFreeText = (text: string) => text.replace(makeRegExp('/\\s+/g'), '');

  static commentsParseReg = makeRegExp(
    `/(^|\\n)( *)(#{1,2})(\\d*)(_?([${this.numberAssociationLine}]*)(!?))? *(\\[(.+?)\\])?( *)([\\w\\W]+?)(?=\\n *#|$)/g`,
  );
  // [$all, $before, $beforeSpaces, $hashes, $blockHashPosition, $associations, $secretWidStr, $modificators, $info, $blockHeader, $beforeCommentSpaces, $comment]

  static withHeaderTextOrderFilter = (ord: Order) => ord.isVisible && !ord.me.isInherit;

  static makeSecretToWid = (infoWidStr: string) =>
    infoWidStr
      ? (+('' + infoWidStr || '').replace(
          makeRegExp(`/[${this.numberAssociationLine}]/g`),
          all => '' + this.numberAssociationLine.indexOf(all),
        ) as CmComWid)
      : null;

  static makeWidToSecret = (wid: CmComWid) =>
    ('' + wid).replace(makeRegExp('/./g'), all => this.numberAssociationLine[+all]);

  static makePseudoComment = (text: string) =>
    text.trim().replace(makeRegExp('/\\n/g'), '\\A ').replace(makeRegExp("/'/g"), "\\'");

  static makePseudoCommentContentCss = (text: string) => css`
    content: '${this.makePseudoComment(text)}';
    opacity: var(--comment-opacity-accent);
    display: block;
    white-space: pre;

    ${text.includes('!!')
      ? css`
          color: var(--color--ko);
        `
      : text.includes('!')
        ? css`
            color: var(--color--7);
          `
        : css`
            opacity: var(--comment-opacity);
            color: var(--color-far);
          `}
  `;

  static makeStartCommentCss = (comComment: string | nil) => {
    const startComment = comComment?.match(makeRegExp('/^([^#]*?)(?=\\n *#)+/'))?.[0];

    return (
      startComment &&
      css`
        &:before {
          ${ComBlockCommentMakerCleans.makePseudoCommentContentCss(startComment)}
          margin-bottom: 40px;
        }
      `
    );
  };
}
