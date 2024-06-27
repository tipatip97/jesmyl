import { StyledModalHeader } from '../styled';

interface Props {
  children: React.ReactNode;
}

export function ModalHeader({ children }: Props) {
  return <StyledModalHeader>{children}</StyledModalHeader>;
}
