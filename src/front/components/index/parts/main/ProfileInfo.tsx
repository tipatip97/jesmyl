import { useState } from 'react';
import styled, { css } from 'styled-components';
import { LocalSokiAuth } from '../../../../models';

export const IndexProfileInfo = ({ auth }: { auth: LocalSokiAuth }) => {
  const [isHideAva, setIsHideAva] = useState(false);

  return (
    <div className="flex center flex-gap">
      <Name className="ellipsis">{auth.fio}</Name>
      {isHideAva && // todo: remove this when tg avatar can be displayed
        auth.tgAva &&
        (isHideAva ? (
          <AvaAlt />
        ) : (
          <Ava
            src={auth.tgAva}
            onError={() => setIsHideAva(true)}
          />
        ))}
    </div>
  );
};

const size = '2em';

const styles = css`
  height: ${size};
  width: ${size};

  min-height: ${size};
  min-width: ${size};

  max-height: ${size};
  max-width: ${size};

  border-radius: 50%;
  border: 0;
  display: inline-block;
  vertical-align: middle;
`;

const AvaAlt = styled.div`
  ${styles}

  background-color: var(--color--2);
`;

const Ava = styled.img`
  ${styles}
`;

const Name = styled.div``;
