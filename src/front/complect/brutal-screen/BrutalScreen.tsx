import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

export default function BrutalScreen(
  props: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>
) {
  return (
    <Screen className="flex column custom-align-items" {...props}>
      {props.children}
    </Screen>
  );
}

const Screen = styled.div`
  --brutal-screen-gap-v: 20px;

  height: 100%;
  min-height: 120px;
  margin: var(--brutal-screen-gap-v) 0;
  border-radius: 10px;
  background-color: var(--color--2);
  width: 100%;
  padding-bottom: 10px;
  overflow: auto;

  &::-webkit-scrollbar {
      display: none;
  }

  >.title {
      margin: var(--main-big-gap);
  }

  >.item {
      height: 30px;
      width: 100%;
      margin-top: 10px;
      cursor: pointer;
  }
`;
