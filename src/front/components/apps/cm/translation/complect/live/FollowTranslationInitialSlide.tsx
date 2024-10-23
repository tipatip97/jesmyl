import styled from 'styled-components';
import environment from '../../../../../../../back/environments/environment';
import QRCode from '../../../../../../complect/qr-code/QRCode';
import { IScheduleWidgetWid } from '../../../../../../models';

export const FollowTranslationInitialSlide = ({ schw }: { schw: IScheduleWidgetWid }) => {
  return (
    <StyledSlide className="full-size flex center column">
      <StyledQRCode text={`${environment.host}/cm/!other/schs/${schw}?follow`} />
      <h2>Следите за текущей трансляцией у себя в телефоне</h2>
    </StyledSlide>
  );
};

const StyledSlide = styled.div`
  color: white;
`;

const StyledQRCode = styled(QRCode)`
  width: min(50vmin, 50%);

  &.qr-code {
    filter: contrast(10) invert(1);
  }
`;
