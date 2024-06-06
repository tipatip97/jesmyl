import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 6C19.3001 6.1287 20.1752 6.41956 20.8284 7.07691C22 8.25596 22 10.1536 22 13.9489C22 17.7442 22 19.6419 20.8284 20.8209C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8209C2 19.6419 2 17.7442 2 13.9489C2 10.1536 2 8.25596 3.17157 7.07691C3.82475 6.41956 4.69989 6.1287 6 6',
  d2: 'M9.5 5.5C9.99153 6.0057 11.2998 8 12 8M14.5 5.5C14.0085 6.0057 12.7002 8 12 8M12 8V2',
  d3: 'M18.5078 14H18.4988',
  d4: 'M5.50781 14H5.49883',
  d5: 'M14.5 14C14.5 15.3807 13.3807 16.5 12 16.5C10.6193 16.5 9.5 15.3807 9.5 14C9.5 12.6193 10.6193 11.5 12 11.5C13.3807 11.5 14.5 12.6193 14.5 14Z',
  d6: 'M3.0528 7.5129C2 8.69377 2 10.4625 2 14C2 17.5375 2 19.3062 3.0528 20.4871C3.22119 20.676 3.40678 20.8506 3.60746 21.0091C4.86213 22 6.74142 22 10.5 22H13.5C17.2586 22 19.1379 22 20.3925 21.0091C20.5932 20.8506 20.7788 20.676 20.9472 20.4871C22 19.3062 22 17.5375 22 14C22 10.4625 22 8.69377 20.9472 7.5129C20.7788 7.32403 20.5932 7.14935 20.3925 6.99087C19.1379 6 17.2586 6 13.5 6H10.5C6.74142 6 4.86213 6 3.60746 6.99087C3.40678 7.14935 3.22119 7.32403 3.0528 7.5129ZM12 16.5C13.3807 16.5 14.5 15.3807 14.5 14C14.5 12.6193 13.3807 11.5 12 11.5C10.6193 11.5 9.5 12.6193 9.5 14C9.5 15.3807 10.6193 16.5 12 16.5Z',
  d7: 'M6.03058 6.8443C6.4781 6.79656 6.97284 6.76759 7.52022 6.75C7.56848 6.75 7.61267 6.7765 7.63708 6.81814C7.64904 6.83854 7.65881 6.85456 7.66576 6.86594C7.80716 7.10045 8.03879 7.39817 8.13859 7.5251C8.42633 7.89213 8.85567 8.4389 9.30058 8.89618C9.52246 9.12423 9.81757 9.40317 10.1635 9.64117C10.4464 9.83578 11.108 10.2498 11.9998 10.2498C12.8916 10.2498 13.5532 9.83577 13.8361 9.64117C14.182 9.40317 14.4771 9.12423 14.699 8.89618C15.1439 8.4389 15.5737 7.89159 15.8614 7.52456C15.9612 7.39767 16.1925 7.10036 16.3339 6.86593C16.3408 6.85461 16.3505 6.83871 16.3623 6.81848C16.3869 6.77663 16.4313 6.75 16.4798 6.75C17.0272 6.76759 17.5219 6.79656 17.9694 6.8443C19.1316 6.96828 20.074 7.22681 20.8574 7.81108C21.0919 7.98599 21.3093 8.17918 21.507 8.3886C22.1732 9.09427 22.4707 9.94961 22.6124 10.999C22.75 12.0184 22.75 13.3084 22.75 14.9366V15.0362C22.75 16.6644 22.75 17.9544 22.6124 18.9739C22.4707 20.0232 22.1732 20.8786 21.507 21.5843C21.3093 21.7937 21.0919 21.9869 20.8574 22.1618C20.074 22.746 19.1316 23.0046 17.9694 23.1285C16.8308 23.25 15.3866 23.25 13.5475 23.25H10.4525C8.61345 23.25 7.16917 23.25 6.03058 23.1285C4.86842 23.0046 3.926 22.746 3.14263 22.1618C2.90811 21.9869 2.69068 21.7937 2.49298 21.5843C1.82681 20.8786 1.52932 20.0232 1.38763 18.9739C1.24998 17.9544 1.24999 16.6644 1.25 15.0362V15.0362V15.0362V14.9366V14.9366C1.24999 13.3084 1.24998 12.0184 1.38763 10.999C1.52932 9.94961 1.82681 9.09427 2.49298 8.3886C2.69068 8.17918 2.90811 7.98599 3.14263 7.81108C3.926 7.22681 4.86842 6.96828 6.03058 6.8443ZM12.0002 18.4942C13.6571 18.4942 15.0002 17.1489 15.0002 15.4893C15.0002 13.8297 13.6571 12.4844 12.0002 12.4844C10.3434 12.4844 9.00025 13.8297 9.00025 15.4893C9.00025 17.1489 10.3434 18.4942 12.0002 18.4942ZM19.5078 15.486C19.5078 14.9328 19.0601 14.4844 18.5078 14.4844H18.4988C17.9465 14.4844 17.4988 14.9328 17.4988 15.486C17.4988 16.0392 17.9465 16.4877 18.4988 16.4877H18.5078C19.0601 16.4877 19.5078 16.0392 19.5078 15.486ZM5.5 14.4844C6.05228 14.4844 6.5 14.9328 6.5 15.486C6.5 16.0392 6.05228 16.4877 5.5 16.4877H5.49102C4.93873 16.4877 4.49102 16.0392 4.49102 15.486C4.49102 14.9328 4.93873 14.4844 5.49102 14.4844H5.5Z',
  d8: 'M13.0059 1.75C13.0059 1.19772 12.5581 0.75 12.0059 0.75C11.4536 0.75 11.0059 1.19772 11.0059 1.75L11.0059 4.25004L10.4116 4.25002C10.236 4.24989 10.0203 4.24974 9.84387 4.27181L9.84053 4.27223C9.71408 4.288 9.13804 4.35983 8.86368 4.92543C8.58872 5.49225 8.89065 5.99239 8.95597 6.1006L8.95841 6.10463C9.05062 6.25765 9.18477 6.42853 9.29511 6.56908L9.31885 6.59933C9.61348 6.97515 9.99545 7.45937 10.3759 7.85038C10.5657 8.04549 10.783 8.24672 11.0139 8.40557C11.2191 8.54677 11.5693 8.75004 12 8.75004C12.4307 8.75004 12.7809 8.54677 12.9861 8.40557C13.217 8.24672 13.4343 8.04549 13.6241 7.85038C14.0046 7.45937 14.3865 6.97515 14.6812 6.59933L14.7049 6.56909C14.8152 6.42853 14.9494 6.25765 15.0416 6.10463L15.044 6.10059C15.1093 5.99239 15.4113 5.49225 15.1363 4.92543C14.862 4.35983 14.2859 4.28799 14.1595 4.27223L14.1561 4.27181C13.9797 4.24974 13.764 4.24989 13.5884 4.25002L13.0059 4.25004L13.0059 1.75Z',
  d9: 'M7.52022 6.75C6.97284 6.76759 6.4781 6.79656 6.03058 6.8443C4.86842 6.96828 3.926 7.22681 3.14263 7.81108C2.90811 7.98599 2.69068 8.17918 2.49298 8.3886C1.82681 9.09427 1.52932 9.94961 1.38763 10.999C1.24998 12.0184 1.24999 13.3084 1.25 14.9366V15.0362C1.24999 16.6644 1.24998 17.9544 1.38763 18.9739C1.52932 20.0232 1.82681 20.8786 2.49298 21.5843C2.69068 21.7937 2.90811 21.9869 3.14263 22.1618C3.926 22.746 4.86842 23.0046 6.03058 23.1285C7.16917 23.25 8.61345 23.25 10.4525 23.25H13.5475C15.3866 23.25 16.8308 23.25 17.9694 23.1285C19.1316 23.0046 20.074 22.746 20.8574 22.1618C21.0919 21.9869 21.3093 21.7937 21.507 21.5843C22.1732 20.8786 22.4707 20.0232 22.6124 18.9739C22.75 17.9544 22.75 16.6644 22.75 15.0362V14.9366C22.75 13.3084 22.75 12.0184 22.6124 10.999C22.4707 9.94961 22.1732 9.09427 21.507 8.3886C21.3093 8.17918 21.0919 7.98599 20.8574 7.81108C20.074 7.22681 19.1316 6.96828 17.9694 6.8443C17.5219 6.79656 17.0272 6.76759 16.4798 6.75C16.4313 6.75 16.3869 6.77663 16.3623 6.81848C16.3505 6.83871 16.3408 6.85461 16.3339 6.86593C16.1925 7.10036 15.9612 7.39767 15.8614 7.52456C15.5737 7.89159 15.1439 8.4389 14.699 8.89618C14.4771 9.12423 14.182 9.40317 13.8361 9.64117C13.5532 9.83577 12.8916 10.2498 11.9998 10.2498C11.108 10.2498 10.4464 9.83578 10.1635 9.64117C9.81757 9.40317 9.52246 9.12423 9.30058 8.89618C8.85567 8.4389 8.42633 7.89213 8.13859 7.5251C8.03879 7.39817 7.80716 7.10045 7.66576 6.86594C7.65881 6.85456 7.64904 6.83854 7.63708 6.81814C7.61267 6.7765 7.56848 6.75 7.52022 6.75Z',
  d10: 'M15.0002 15.4854C15.0002 17.145 13.6571 18.4903 12.0002 18.4903C10.3434 18.4903 9.00025 17.145 9.00025 15.4854C9.00025 13.8258 10.3434 12.4805 12.0002 12.4805C13.6571 12.4805 15.0002 13.8258 15.0002 15.4854Z',
  d11: 'M19.5078 15.486C19.5078 14.9328 19.0601 14.4844 18.5078 14.4844H18.4988C17.9465 14.4844 17.4988 14.9328 17.4988 15.486C17.4988 16.0392 17.9465 16.4877 18.4988 16.4877H18.5078C19.0601 16.4877 19.5078 16.0392 19.5078 15.486Z',
  d12: 'M6.5 15.486C6.5 14.9328 6.05228 14.4844 5.5 14.4844H5.49102C4.93873 14.4844 4.49102 14.9328 4.49102 15.486C4.49102 16.0392 4.93873 16.4877 5.49102 16.4877H5.5C6.05228 16.4877 6.5 16.0392 6.5 15.486Z',
  d13: 'M18 6H22V22H2V6H6',
  d14: 'M9.5 5.5L12 8L14.5 5.5M12 2V7.49326',
  d15: 'M12.0001 8.16406L15.2072 4.95696L13.793 3.54274L13.0001 4.33564V0.749849L11.0001 0.749849V4.33564L10.2072 3.54274L8.79297 4.95696L12.0001 8.16406Z',
  d16: 'M16.182 5.75L12.0003 9.93176L7.8185 5.75H2C1.58579 5.75 1.25 6.08579 1.25 6.5V22.5C1.25 22.9142 1.58579 23.25 2 23.25H22C22.4142 23.25 22.75 22.9142 22.75 22.5V6.5C22.75 6.08579 22.4142 5.75 22 5.75H16.182ZM8.79883 14.5C8.79883 12.7051 10.2539 11.25 12.0488 11.25C13.8438 11.25 15.2988 12.7051 15.2988 14.5C15.2988 16.2949 13.8438 17.75 12.0488 17.75C10.2539 17.75 8.79883 16.2949 8.79883 14.5ZM4 13.5H6V15.5H4V13.5ZM18 13.5H20V15.5H18V13.5Z',
};

export const IconMoneyReceive01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-01-stroke-rounded IconMoneyReceive01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceive01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-01-duotone-rounded IconMoneyReceive01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceive01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-01-twotone-rounded IconMoneyReceive01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceive01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-01-solid-rounded IconMoneyReceive01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceive01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-01-bulk-rounded IconMoneyReceive01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceive01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-01-stroke-sharp IconMoneyReceive01StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceive01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-01-solid-sharp IconMoneyReceive01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneyReceive01: TheIconSelfPack = {
  name: 'MoneyReceive01',
  StrokeRounded: IconMoneyReceive01StrokeRounded,
  DuotoneRounded: IconMoneyReceive01DuotoneRounded,
  TwotoneRounded: IconMoneyReceive01TwotoneRounded,
  SolidRounded: IconMoneyReceive01SolidRounded,
  BulkRounded: IconMoneyReceive01BulkRounded,
  StrokeSharp: IconMoneyReceive01StrokeSharp,
  SolidSharp: IconMoneyReceive01SolidSharp,
};