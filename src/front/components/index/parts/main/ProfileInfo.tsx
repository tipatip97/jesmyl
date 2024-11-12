import { useState } from 'react';
import { LocalSokiAuth } from 'shared/api';
import styled from 'styled-components';

export const IndexProfileInfo = ({ auth, onClick }: { auth: LocalSokiAuth; onClick: (event: unknown) => void }) => {
  const [isShowAva, setIsShowAva] = useState(true);

  return (
    <div
      className="flex center flex-gap"
      onClick={onClick}
    >
      <Name className="ellipsis">{auth.fio}</Name>
      {isShowAva && auth.tgAva && (
        <Ava
          src={auth.tgAva}
          onError={() => setIsShowAva(false)}
        />
      )}
    </div>
  );
};

const size = '2em';

const Ava = styled.img`
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

const Name = styled.div``;
