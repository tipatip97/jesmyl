import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.46433 9.34375C2.21579 9.34375 1.98899 9.14229 2.00041 8.87895C2.06733 7.33687 2.25481 6.33298 2.78008 5.53884C3.08228 5.08196 3.45765 4.68459 3.88923 4.36468C5.05575 3.5 6.70139 3.5 9.99266 3.5H14.0074C17.2986 3.5 18.9443 3.5 20.1108 4.36468C20.5424 4.68459 20.9177 5.08196 21.2199 5.53884C21.7452 6.33289 21.9327 7.33665 21.9996 8.87843C22.011 9.14208 21.7839 9.34375 21.5351 9.34375C20.1493 9.34375 19.0259 10.533 19.0259 12C19.0259 13.467 20.1493 14.6562 21.5351 14.6562C21.7839 14.6562 22.011 14.8579 21.9996 15.1216C21.9327 16.6634 21.7452 17.6671 21.2199 18.4612C20.9177 18.918 20.5424 19.3154 20.1108 19.6353C18.9443 20.5 17.2986 20.5 14.0074 20.5H9.99266C6.70139 20.5 5.05575 20.5 3.88923 19.6353C3.45765 19.3154 3.08228 18.918 2.78008 18.4612C2.25481 17.667 2.06733 16.6631 2.00041 15.1211C1.98899 14.8577 2.21579 14.6562 2.46433 14.6562C3.85012 14.6562 4.97352 13.467 4.97352 12C4.97352 10.533 3.85012 9.34375 2.46433 9.34375Z',
  d2: 'M9 3.5L9 20.5',
  d3: 'M9.99266 3.5H14.0074C17.2986 3.5 18.9443 3.5 20.1108 4.36468C20.5424 4.68459 20.9177 5.08196 21.2199 5.53884C21.7452 6.33289 21.9327 7.33665 21.9996 8.87843C22.011 9.14208 21.7839 9.34375 21.5351 9.34375C20.1493 9.34375 19.0259 10.533 19.0259 12C19.0259 13.467 20.1493 14.6562 21.5351 14.6562C21.7839 14.6562 22.011 14.8579 21.9996 15.1216C21.9327 16.6634 21.7452 17.6671 21.2199 18.4612C20.9177 18.918 20.5424 19.3154 20.1108 19.6353C18.9443 20.5 17.2986 20.5 14.0074 20.5H9.99266C9.64374 20.5 9.31332 20.5 9 20.499V3.50103C9.31332 3.5 9.64374 3.5 9.99266 3.5Z',
  d4: 'M8.25 3.36355C8.25 3.07656 8.25 2.93307 8.15941 2.84476C8.06881 2.75645 7.92681 2.76008 7.64281 2.76733C7.05458 2.78235 6.52998 2.81039 6.06107 2.86271C5.02537 2.97828 4.17461 3.21963 3.44269 3.76216C2.93954 4.13512 2.50404 4.5968 2.15462 5.12508C1.50935 6.10064 1.31903 7.28333 1.2512 8.84643C1.21882 9.5926 1.84739 10.0938 2.46441 10.0938C3.39631 10.0938 4.2236 10.9064 4.2236 12C4.2236 13.0936 3.39631 13.9062 2.46441 13.9062C1.84739 13.9062 1.21882 14.4074 1.2512 15.1536C1.31903 16.7167 1.50935 17.8994 2.15462 18.8749C2.50404 19.4032 2.93955 19.8649 3.44269 20.2378C4.17461 20.7804 5.02537 21.0217 6.06107 21.1373C6.52998 21.1896 7.05458 21.2176 7.64281 21.2327C7.92681 21.2399 8.06881 21.2435 8.15941 21.1552C8.25 21.0669 8.25 20.9234 8.25 20.6364L8.25 3.36355ZM9.75 21.0532C9.75 21.1619 9.8381 21.25 9.94678 21.25H9.94687H14.0533H14.0534C15.6601 21.25 16.9289 21.25 17.9391 21.1373C18.9748 21.0217 19.8256 20.7804 20.5575 20.2378C21.0606 19.8649 21.4961 19.4032 21.8456 18.8749C22.4908 17.8995 22.6811 16.7169 22.749 15.1541C22.7814 14.4075 22.1524 13.9062 21.5352 13.9062C20.6033 13.9062 19.776 13.0936 19.776 12C19.776 10.9064 20.6033 10.0938 21.5352 10.0938C22.1524 10.0938 22.7814 9.59249 22.749 8.8459C22.6811 7.28307 22.4908 6.10053 21.8456 5.12508C21.4961 4.5968 21.0606 4.13512 20.5575 3.76216C19.8256 3.21963 18.9748 2.97828 17.9391 2.86271C16.9289 2.74998 15.6601 2.74999 14.0534 2.75H14.0534H9.94683H9.94682C9.83812 2.75 9.75 2.83812 9.75 2.94683L9.75 21.0532Z',
  d5: 'M9.75 21.0532C9.75 21.1619 9.8381 21.25 9.94678 21.25H14.0533C15.66 21.25 16.9289 21.25 17.9391 21.1373C18.9748 21.0217 19.8256 20.7804 20.5575 20.2378C21.0606 19.8649 21.4961 19.4032 21.8456 18.8749C22.4908 17.8995 22.6811 16.7169 22.749 15.1541C22.7814 14.4075 22.1524 13.9062 21.5352 13.9062C20.6033 13.9062 19.776 13.0936 19.776 12C19.776 10.9064 20.6033 10.0938 21.5352 10.0938C22.1524 10.0938 22.7814 9.59249 22.749 8.8459C22.6811 7.28307 22.4908 6.10053 21.8456 5.12508C21.4961 4.5968 21.0606 4.13512 20.5575 3.76216C19.8256 3.21963 18.9748 2.97828 17.9391 2.86271C16.9289 2.74998 15.6601 2.74999 14.0534 2.75H9.94683C9.83813 2.75 9.75 2.83812 9.75 2.94683L9.75 21.0532Z',
  d6: 'M8.25 3.36522C8.25 3.07824 8.25 2.93474 8.15941 2.84644C8.06881 2.75813 7.92681 2.76175 7.64281 2.769C7.05458 2.78403 6.52998 2.81206 6.06107 2.86438C5.02537 2.97995 4.17461 3.2213 3.44269 3.76383C2.93954 4.13679 2.50404 4.59848 2.15462 5.12675C1.50935 6.10231 1.31903 7.28501 1.2512 8.84811C1.21882 9.59428 1.84739 10.0954 2.46441 10.0954C3.39631 10.0954 4.2236 10.9081 4.2236 12.0017C4.2236 13.0953 3.39631 13.9079 2.46441 13.9079C1.84739 13.9079 1.21882 14.4091 1.2512 15.1552C1.31903 16.7183 1.50935 17.901 2.15462 18.8766C2.50404 19.4049 2.93955 19.8666 3.44269 20.2395C4.17461 20.782 5.02537 21.0234 6.06107 21.139C6.52998 21.1913 7.05458 21.2193 7.64281 21.2343C7.92681 21.2416 8.06881 21.2452 8.15941 21.1569C8.25 21.0686 8.25 20.9251 8.25 20.6381L8.25 3.36522Z',
  d7: 'M8.96484 3.5V20.5',
  d8: 'M10.0659 3.5H21.991C21.9965 3.5 22.001 3.50452 22.001 3.51007L21.9653 9.51469C20.841 9.51469 20.0503 9.59325 19.2862 10.8527C18.7291 11.7709 19.0079 12.9433 19.6069 13.6459C19.8904 13.9785 20.2635 14.2475 20.6796 14.3771C20.9816 14.4712 21.4023 14.5379 21.9653 14.5177V20.49C21.9653 20.4955 21.9608 20.5 21.9553 20.5H10.8785M13.9341 3.5H2.00897C2.00346 3.5 1.99899 3.50452 1.99902 3.51007L2.03471 9.51469C3.15904 9.51469 3.94968 9.59325 4.71383 10.8527C5.27092 11.7709 4.99209 12.9433 4.39313 13.6459C4.10957 13.9785 3.73648 14.2475 3.32042 14.3771C3.01838 14.4712 2.59774 14.5379 2.03471 14.5177V20.49C2.03471 20.4955 2.03916 20.5 2.04466 20.5H13.1215',
  d9: 'M9.75 21.25H21.9992C22.4133 21.25 22.7491 20.9143 22.7492 20.5001L22.7501 13.75H21.5255C20.559 13.75 19.7755 12.9665 19.7755 12C19.7755 11.0335 20.559 10.25 21.5255 10.25H22.7501L22.7492 3.4999C22.7491 3.08572 22.4133 2.75 21.9992 2.75H9.75L9.75 21.25Z',
  d10: 'M8.25 2.75H2C1.58579 2.75 1.25 3.08579 1.25 3.5V10.25H2.4731C3.4396 10.25 4.2231 11.0335 4.2231 12C4.2231 12.9665 3.4396 13.75 2.4731 13.75H1.25V20.5C1.25 20.9142 1.58579 21.25 2 21.25H8.25L8.25 2.75Z',
};

export const IconTicket01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-01-stroke-rounded IconTicket01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTicket01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-01-duotone-rounded IconTicket01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTicket01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-01-twotone-rounded IconTicket01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTicket01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-01-solid-rounded IconTicket01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTicket01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-01-bulk-rounded IconTicket01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTicket01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-01-stroke-sharp IconTicket01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTicket01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-01-solid-sharp IconTicket01SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTicket01: TheIconSelfPack = {
  name: 'Ticket01',
  StrokeRounded: IconTicket01StrokeRounded,
  DuotoneRounded: IconTicket01DuotoneRounded,
  TwotoneRounded: IconTicket01TwotoneRounded,
  SolidRounded: IconTicket01SolidRounded,
  BulkRounded: IconTicket01BulkRounded,
  StrokeSharp: IconTicket01StrokeSharp,
  SolidSharp: IconTicket01SolidSharp,
};