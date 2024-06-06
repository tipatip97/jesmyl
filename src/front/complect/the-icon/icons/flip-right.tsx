import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 9.66676V14.3334M16.5 3.01509C16.0004 2.99793 15.5001 2.99705 15 2.99855M16.5 20.9849C16.0004 21.0021 15.5001 21.003 15 21.0015M19.2547 3.53709C20.213 4.02122 20.9914 4.80249 21.4718 5.76305M21.5 18.1797C21.0221 19.1665 20.232 19.9692 19.2547 20.4629',
  d2: 'M12 5.50502C12 3.54695 11.3622 3.00695 9.5 3.00695C6.96832 3.00695 4.04633 2.75702 2.60289 5.25521C2 6.29863 2 7.69948 2 10.5012V13.4988C2 16.3005 2 17.7014 2.60289 18.7448C4.04633 21.243 6.96832 20.9931 9.5 20.9931C11.3622 20.9931 12 20.453 12 18.495V5.50502Z',
  d3: 'M12 5.50306C12 3.545 11.3622 3.00499 9.5 3.00499C6.96832 3.00499 4.04633 2.75507 2.60289 5.25326C2 6.29668 2 7.69752 2 10.4992V13.4969C2 16.2986 2 17.6994 2.60289 18.7428C4.04633 21.241 6.96832 20.9911 9.5 20.9911C11.3622 20.9911 12 20.4511 12 18.493V5.50306Z',
  d4: 'M14.753 4.2001C15.2516 4.19865 15.736 4.1996 16.2157 4.21565C16.7677 4.23413 17.2305 3.81292 17.2494 3.27486C17.2684 2.73681 16.8363 2.28566 16.2843 2.26719C15.7647 2.2498 15.2485 2.24903 14.747 2.2505C14.1947 2.25211 13.7484 2.68985 13.75 3.22822C13.7517 3.76659 14.2007 4.20172 14.753 4.2001ZM18.1121 3.31074C17.8631 3.79127 18.0608 4.37762 18.5538 4.62037C19.3203 4.99785 19.9432 5.60728 20.3275 6.35624C20.5745 6.83774 21.1752 7.03283 21.6692 6.79199C22.1631 6.55115 22.3632 5.96557 22.1162 5.48408C21.5396 4.36032 20.6057 3.44656 19.4556 2.88019C18.9626 2.63744 18.3611 2.8302 18.1121 3.31074ZM21.75 8.75072C21.1977 8.75072 20.75 9.18715 20.75 9.72553V14.2746C20.75 14.813 21.1977 15.2494 21.75 15.2494C22.3023 15.2494 22.75 14.813 22.75 14.2746V9.72553C22.75 9.18715 22.3023 8.75072 21.75 8.75072ZM21.6859 17.1467C21.1888 16.912 20.5907 17.1146 20.35 17.5991C19.9678 18.3685 19.3355 18.9947 18.5538 19.3796C18.0608 19.6224 17.8631 20.2087 18.1121 20.6893C18.3611 21.1698 18.9626 21.3626 19.4556 21.1198C20.6285 20.5422 21.5764 19.6034 22.15 18.4489C22.3907 17.9644 22.1829 17.3814 21.6859 17.1467ZM17.2494 20.7251C17.2305 20.1871 16.7677 19.7659 16.2157 19.7843C15.736 19.8004 15.2517 19.8013 14.753 19.7999C14.2007 19.7983 13.7517 20.2334 13.75 20.7718C13.7484 21.3102 14.1947 21.7479 14.747 21.7495C15.2485 21.751 15.7647 21.7502 16.2843 21.7328C16.8363 21.7143 17.2684 21.2632 17.2494 20.7251Z',
  d5: 'M5.49378 2.45976C4.1225 2.73883 2.81248 3.39376 1.95349 4.88042C1.57508 5.53536 1.40851 6.2686 1.32843 7.15152C1.24999 8.0163 1.24999 9.09506 1.25 10.4644V13.5365C1.24999 14.9058 1.24999 15.9846 1.32843 16.8493C1.40851 17.7323 1.57508 18.4655 1.95349 19.1204C2.81248 20.6071 4.1225 21.262 5.49378 21.5411C6.60294 21.7668 7.81715 21.7563 8.89367 21.747H8.89369H8.89387C9.10163 21.7452 9.30425 21.7435 9.5 21.7435C10.4531 21.7435 11.3499 21.618 11.97 21.0175C12.5962 20.4113 12.75 19.5087 12.75 18.4954V5.50545C12.75 4.49218 12.5962 3.58959 11.97 2.98332C11.3499 2.38285 10.4531 2.25738 9.5 2.25738C9.30419 2.25738 9.10151 2.25563 8.89369 2.25383C7.81717 2.24452 6.60295 2.23402 5.49378 2.45976Z',
  d6: 'M17.0161 2.99854H15.0225M17.0161 21.0015H15.0225M19.0097 2.99854H22.0001V6M22.0001 18V21.0015L19.0097 20.9849M22.0001 8V11M22.0001 13V16',
  d7: 'M11.9899 20.9976L12.0953 3.05767L2.11524 2.99854C2.10976 2.9985 2.10529 3.00294 2.10526 3.00844L2 20.9284C1.99997 20.9339 2.00439 20.9384 2.00987 20.9384L11.9899 20.9976Z',
  d8: 'M22.7508 3.22486C22.7508 2.68646 22.3133 2.25 21.7735 2.25H18.8417V4.19972H20.7963V6.15086H22.7508V3.22486ZM14.9326 4.19972L16.8872 4.19972L16.8872 2.25L14.9326 2.25L14.9326 4.19972ZM22.7508 11.0251V8.10057H20.7963V11.0251H22.7508ZM22.7508 15.8994V12.9749H20.7963V15.8994H22.7508ZM22.7508 20.7751V17.8492H20.7963V19.7949L18.8471 19.7842L18.8363 21.7339L21.7681 21.75C22.0283 21.7514 22.2782 21.6493 22.4627 21.4664C22.6471 21.2834 22.7508 21.0346 22.7508 20.7751ZM14.9326 21.75H16.8872V19.8003H14.9326V21.75Z',
  d9: 'M2.22727 2.25146C1.68754 2.25146 1.25 2.68792 1.25 3.22632V20.7668C1.25 21.305 1.68712 21.7413 2.22658 21.7417L12.9773 21.7493V2.25146H2.22727Z',
};

export const IconFlipRightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-right-stroke-rounded IconFlipRightStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFlipRightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-right-duotone-rounded IconFlipRightDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconFlipRightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-right-twotone-rounded IconFlipRightTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFlipRightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-right-solid-rounded IconFlipRightSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlipRightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-right-bulk-rounded IconFlipRightBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlipRightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-right-stroke-sharp IconFlipRightStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlipRightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-right-solid-sharp IconFlipRightSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlipRight: TheIconSelfPack = {
  name: 'FlipRight',
  StrokeRounded: IconFlipRightStrokeRounded,
  DuotoneRounded: IconFlipRightDuotoneRounded,
  TwotoneRounded: IconFlipRightTwotoneRounded,
  SolidRounded: IconFlipRightSolidRounded,
  BulkRounded: IconFlipRightBulkRounded,
  StrokeSharp: IconFlipRightStrokeSharp,
  SolidSharp: IconFlipRightSolidSharp,
};