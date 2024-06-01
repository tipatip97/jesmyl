import { useEffect, useState } from 'react';
import styled from 'styled-components';
import IconButton from '../../../../../../complect/the-icon/IconButton';
import { IconToggleOffStrokeRounded } from '../../../../../../complect/the-icon/icons/toggle-off';
import { IconToggleOnStrokeRounded } from '../../../../../../complect/the-icon/icons/toggle-on';

const passwLength = 6;

export default function PasswordTyping({
  setIsOpen,
  setTitle,
}: {
  setIsOpen: (is: boolean) => void;
  setTitle: (title: string) => void;
}) {
  const [isShow, setIsShow] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    setTitle(
      isTyping
        ? `Введи пароль: ${'●'.repeat(password.length > passwLength ? passwLength : password.length)}`
        : 'Посмотреть локацию',
    );
  }, [isTyping, password.length, setTitle]);

  useEffect(() => {
    if (!isTyping) return;

    if (password.length >= passwLength) {
      return setTimeoutEffect(() => {
        setIsShow(true);

        setTimeout(() => {
          setPassword('');
          setIsShow(false);
          setIsTyping(false);
        }, 3000);
      }, 1500);
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPassword('');
        return;
      }

      if (event.key.length === 1) setPassword(password + event.key);
    };

    window.addEventListener('keydown', onKeyDown);
    const noTyping = setTimeout(setIsTyping, 5000, false);

    return () => {
      clearTimeout(noTyping);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isTyping, password]);

  useEffect(() => {
    setIsOpen(isShow && isTyping);
  }, [isShow, isTyping, setIsOpen]);

  return (
    <Button
      className="relative pointer"
      Icon={isTyping ? IconToggleOnStrokeRounded : IconToggleOffStrokeRounded}
      onClick={() => {
        setIsTyping(is => !is);
        setPassword('');
        setIsShow(false);
      }}
    />
  );
}

const Button = styled(IconButton)`
  transform: scale(2);
  margin: 15px 0;
`;
