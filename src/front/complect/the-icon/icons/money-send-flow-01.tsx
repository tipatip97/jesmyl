import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22V18M8 20L8 18M16 20V18',
  d2: 'M19 17.5C19.7745 17.3341 20.3588 17.0571 20.8284 16.5949C22 15.4418 22 13.5859 22 9.87402C22 6.16217 22 4.30625 20.8284 3.15312C19.6569 2 17.7712 2 14 2H10C6.22876 2 4.34315 2 3.17157 3.15312C2 4.30625 2 6.16217 2 9.87402C2 13.5859 2 15.4418 3.17157 16.5949C3.64118 17.0571 4.2255 17.3341 5 17.5',
  d3: 'M18.5 10H18.491',
  d4: 'M5.50996 10H5.50098',
  d5: 'M14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5C13.3807 12.5 14.5 11.3807 14.5 10Z',
  d6: 'M3.0528 3.5129C2 4.69377 2 6.46251 2 10C2 13.5375 2 15.3062 3.0528 16.4871C3.22119 16.676 3.40678 16.8506 3.60746 17.0091C4.86213 18 6.74142 18 10.5 18H13.5C17.2586 18 19.1379 18 20.3925 17.0091C20.5932 16.8506 20.7788 16.676 20.9472 16.4871C22 15.3062 22 13.5375 22 10C22 6.46251 22 4.69377 20.9472 3.5129C20.7788 3.32403 20.5932 3.14935 20.3925 2.99087C19.1379 2 17.2586 2 13.5 2H10.5C6.74142 2 4.86213 2 3.60746 2.99087C3.40678 3.14935 3.22119 3.32403 3.0528 3.5129ZM12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z',
  d7: 'M12 22.875C11.4477 22.875 11 22.4273 11 21.875L11 17.875C11 17.3227 11.4477 16.875 12 16.875C12.5523 16.875 13 17.3227 13 17.875L13 21.875C13 22.4273 12.5523 22.875 12 22.875ZM16 20.875C15.4477 20.875 15 20.4273 15 19.875L15 17.875C15 17.3227 15.4477 16.875 16 16.875C16.5523 16.875 17 17.3227 17 17.875L17 19.875C17 20.4273 16.5523 20.875 16 20.875ZM8 20.875C7.44771 20.875 7 20.4273 7 19.875L7 17.875C7 17.3227 7.44772 16.875 8 16.875C8.55228 16.875 9 17.3227 9 17.875L9 19.875C9 20.4273 8.55228 20.875 8 20.875Z',
  d8: 'M18.5 17.8744C18.5 17.8736 18.5 17.8748 18.5 17.8754L18.5 17.8754C18.5 16.4947 17.3807 15.3754 16 15.3754C15.4692 15.3754 14.977 15.5408 14.5723 15.8229C14.2536 16.045 14.0942 16.156 14 16.156C13.9058 16.156 13.7464 16.045 13.4277 15.8229C13.023 15.5408 12.5308 15.3754 12 15.3754C11.4692 15.3754 10.977 15.5408 10.5723 15.8229L10.5722 15.8229C10.2536 16.045 10.0942 16.156 10 16.156C9.90577 16.156 9.74643 16.045 9.42774 15.8229C9.02296 15.5408 8.5308 15.3754 8 15.3754C6.61929 15.3754 5.5 16.4947 5.5 17.8754C5.5 17.8768 5.5 17.8732 5.49999 17.8744C5.49861 18.054 5.32892 18.1971 5.15162 18.1681C5.15083 18.168 5.15677 18.169 5.1587 18.1694L5.15809 18.1692C4.14915 17.9964 3.31717 17.6659 2.64547 17.0048C1.89501 16.2662 1.56146 15.3283 1.40335 14.1709C1.24997 13.048 1.24998 11.614 1.25 9.80656L1.25 9.69223C1.24998 7.88479 1.24997 6.45075 1.40335 5.32791C1.56146 4.17045 1.89501 3.23261 2.64547 2.49397C3.39427 1.75696 4.34225 1.43086 5.51253 1.27599C6.65096 1.12534 8.10592 1.12536 9.94433 1.12537L14.0557 1.12537C15.8941 1.12536 17.349 1.12534 18.4875 1.27599C19.6578 1.43086 20.6057 1.75696 21.3545 2.49397C22.105 3.23261 22.4385 4.17045 22.5967 5.32792C22.75 6.45075 22.75 7.88481 22.75 9.69224L22.75 9.69226L22.75 9.80654L22.75 9.80656C22.75 11.614 22.75 13.048 22.5967 14.1709C22.4385 15.3283 22.105 16.2662 21.3545 17.0048C20.6828 17.6659 19.8508 17.9964 18.8419 18.1692L18.8412 18.1694C18.843 18.1691 18.8492 18.168 18.8484 18.1681C18.6711 18.1971 18.5014 18.054 18.5 17.8744ZM5.5 10.75C4.94772 10.75 4.5 10.3023 4.5 9.75C4.5 9.19772 4.94772 8.75 5.5 8.75L5.50898 8.75C6.06127 8.75 6.50898 9.19772 6.50898 9.75C6.50898 10.3023 6.06127 10.75 5.50898 10.75L5.5 10.75ZM17.4902 9.75C17.4902 10.3023 17.9379 10.75 18.4902 10.75L18.4992 10.75C19.0515 10.75 19.4992 10.3023 19.4992 9.75C19.4992 9.19772 19.0515 8.75 18.4992 8.75L18.4902 8.75C17.938 8.75 17.4902 9.19772 17.4902 9.75ZM12 13C13.7949 13 15.25 11.5449 15.25 9.75C15.25 7.95507 13.7949 6.5 12 6.5C10.2051 6.5 8.75 7.95507 8.75 9.75C8.75 11.5449 10.2051 13 12 13Z',
  d9: 'M18.5 17.8754C18.5 17.8768 18.5 17.8732 18.5 17.8744C18.5014 18.054 18.6711 18.1971 18.8484 18.1681C18.8495 18.1679 18.8368 18.1701 18.8419 18.1692C19.8508 17.9964 20.6828 17.6659 21.3545 17.0048C22.105 16.2662 22.4385 15.3283 22.5967 14.1709C22.75 13.048 22.75 11.614 22.75 9.80654L22.75 9.69226C22.75 7.88482 22.75 6.45076 22.5967 5.32792C22.4385 4.17045 22.105 3.23261 21.3545 2.49397C20.6057 1.75696 19.6578 1.43086 18.4875 1.27599C17.349 1.12534 15.8941 1.12536 14.0557 1.12537L9.94433 1.12537C8.10592 1.12536 6.65096 1.12534 5.51253 1.27599C4.34225 1.43086 3.39427 1.75696 2.64547 2.49397C1.89501 3.23261 1.56146 4.17045 1.40335 5.32791C1.24997 6.45075 1.24998 7.88479 1.25 9.69223L1.25 9.80656C1.24998 11.614 1.24997 13.048 1.40335 14.1709C1.56146 15.3283 1.89501 16.2662 2.64547 17.0048C3.31717 17.6659 4.14915 17.9964 5.15809 18.1692C5.16316 18.1701 5.15049 18.1679 5.15162 18.1681C5.32892 18.1971 5.49861 18.054 5.49999 17.8744C5.5 17.8732 5.5 17.8768 5.5 17.8754C5.5 16.4947 6.61929 15.3754 8 15.3754C8.5308 15.3754 9.02296 15.5408 9.42774 15.8229C9.74643 16.045 9.90577 16.156 10 16.156C10.0942 16.156 10.2536 16.045 10.5723 15.8229C10.977 15.5408 11.4692 15.3754 12 15.3754C12.5308 15.3754 13.023 15.5408 13.4277 15.8229C13.7464 16.045 13.9058 16.156 14 16.156C14.0942 16.156 14.2536 16.045 14.5723 15.8229C14.977 15.5408 15.4692 15.3754 16 15.3754C17.3807 15.3754 18.5 16.4947 18.5 17.8754Z',
  d10: 'M4.5 9.75C4.5 10.3023 4.94772 10.75 5.5 10.75L5.50898 10.75C6.06127 10.75 6.50898 10.3023 6.50898 9.75C6.50898 9.19772 6.06127 8.75 5.50898 8.75L5.5 8.75C4.94772 8.75 4.5 9.19772 4.5 9.75Z',
  d11: 'M17.4902 9.75C17.4902 10.3023 17.9379 10.75 18.4902 10.75L18.4992 10.75C19.0515 10.75 19.4992 10.3023 19.4992 9.75C19.4992 9.19772 19.0515 8.75 18.4992 8.75L18.4902 8.75C17.9379 8.75 17.4902 9.19772 17.4902 9.75Z',
  d12: 'M15.25 9.75C15.25 11.5449 13.7949 13 12 13C10.2051 13 8.75 11.5449 8.75 9.75C8.75 7.95507 10.2051 6.5 12 6.5C13.7949 6.5 15.25 7.95507 15.25 9.75Z',
  d13: 'M12 22V17M8 20L8 17M16 20V17',
  d14: 'M19 18H22V2H2V18H5',
  d15: 'M5.75 18.75H2C1.58579 18.75 1.25 18.4142 1.25 18V2C1.25 1.58579 1.58579 1.25 2 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V18C22.75 18.4142 22.4142 18.75 22 18.75H18.25V16.5H5.75V18.75ZM8.79883 10C8.79883 11.7949 10.2539 13.25 12.0488 13.25C13.8438 13.25 15.2988 11.7949 15.2988 10C15.2988 8.20507 13.8438 6.75 12.0488 6.75C10.2539 6.75 8.79883 8.20507 8.79883 10ZM4 11H6V9H4V11ZM18 11H20V9H18V11Z',
  d16: 'M11 17.75V22.75H13V17.75H11ZM7 17.75L7 20.75H9V17.75H7ZM15 17.75V20.75H17V17.75H15Z',
};

export const IconMoneySendFlow01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-01-stroke-rounded IconMoneySendFlow01StrokeRounded"
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

export const IconMoneySendFlow01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-01-duotone-rounded IconMoneySendFlow01DuotoneRounded"
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

export const IconMoneySendFlow01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-01-twotone-rounded IconMoneySendFlow01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMoneySendFlow01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-01-solid-rounded IconMoneySendFlow01SolidRounded"
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

export const IconMoneySendFlow01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-01-bulk-rounded IconMoneySendFlow01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySendFlow01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-01-stroke-sharp IconMoneySendFlow01StrokeSharp"
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
        strokeLinejoin="round" 
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

export const IconMoneySendFlow01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-01-solid-sharp IconMoneySendFlow01SolidSharp"
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

export const iconPackOfMoneySendFlow01: TheIconSelfPack = {
  name: 'MoneySendFlow01',
  StrokeRounded: IconMoneySendFlow01StrokeRounded,
  DuotoneRounded: IconMoneySendFlow01DuotoneRounded,
  TwotoneRounded: IconMoneySendFlow01TwotoneRounded,
  SolidRounded: IconMoneySendFlow01SolidRounded,
  BulkRounded: IconMoneySendFlow01BulkRounded,
  StrokeSharp: IconMoneySendFlow01StrokeSharp,
  SolidSharp: IconMoneySendFlow01SolidSharp,
};