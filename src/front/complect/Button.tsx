import { HTMLAttributes } from "react";
import styled from "styled-components";
import modalService from "./modal/Modal.service";

export default function TheButton({ disabled, confirm, onClick, ...props }: HTMLAttributes<HTMLDivElement> & { disabled?: boolean, confirm?: boolean | string }) {
  return <Button
    {...props}
    className={`the-button ${props.className || ""}${disabled ? ' disabled' : ''}`}
    onClick={!confirm ? onClick : (event) => {
      if (onClick)
        modalService
          .confirm(confirm === true ? props.children : confirm, 'Подтверди')
          .then((is) => is && onClick(event));
    }}
  />;
}

const Button = styled.div`
  position: relative;
  display: inline-block;
  border: var(--color--2) 4px solid;
  padding: 0.5em 2em;
  border-radius: 2em;
  cursor: pointer;

  .eva-icon {
    position: absolute;
    margin-left: 2px;
  }
`;