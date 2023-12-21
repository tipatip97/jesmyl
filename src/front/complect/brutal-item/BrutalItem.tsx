import { HtmlHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import EvaIcon, { EvaIconName } from '../eva-icon/EvaIcon';

export default function BrutalItem({
  onClick,
  icon,
  title,
  box,
  description,
}: {
  icon: EvaIconName;
  title: string;
  box?: ReactNode;
  description?: ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <Item className="flex between relative" onClick={onClick}>
      <div className="nowrap over-hidden">
        <EvaIcon name={icon} className="margin-big-gap vertical-middle" />
        <div className="ellipsis inline-block vertical-middle">{title}</div>
      </div>
      {box && <div className="margin-big-gap flex">{box}</div>}
      {description && (
        <div className="item-description">
          <div className="item-description-inner">
            <span className="item-description-title">
              <span className="item-description-title-inner">{description}</span>
            </span>
          </div>
        </div>
      )}
    </Item>
  );
}

const Item = styled.div`
  --brutal-item-height: 60px;
  --brutal-item-gap-v: 7px;

  border-radius: 10px;
  background-color: var(--color--2);
  width: 100%;
  height: var(--brutal-item-height);
  cursor: pointer;
  margin-top: var(--brutal-item-gap-v);

  > .item-description {
    position: absolute;
    display: flex;
    bottom: 0;
    justify-content: center;
    width: 100%;
    opacity: 0.5;
    pointer-events: none;

    > .item-description-inner {
      position: relative;
      pointer-events: all;
      white-space: nowrap;
      width: 80%;
      overflow: hidden;
      text-align: center;

      > .item-description-title {
        display: inline-block;
        text-align: right;
        overflow: hidden;
        vertical-align: middle;
        max-width: 100%;

        &:after {
          content: '';
          position: absolute;
          left: -1.3em;
          bottom: 0;
          height: 1em;
          width: 2.5em;
          background: linear-gradient(to left, transparent, var(--color--2) 50%);
        }

        > .item-description-title-inner {
          white-space: nowrap;
          float: right;
        }
      }
    }
  }
`;
