import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.5 10.5H17.9118C19.3676 10.5 20.0955 10.5 20.5477 10.9393C21 11.3787 21 12.0858 21 13.5V15C21 18.2998 21 19.9497 19.9447 20.9749C18.8894 22 17.191 22 13.7941 22H10.7059C7.309 22 5.61055 22 4.55528 20.9749C3.5 19.9497 3.5 18.2998 3.5 15V10.5Z',
  d2: 'M3.49827 10.5C3.14118 9.14207 2.96264 8.46311 3.00654 7.86611C3.08518 6.79682 3.63742 5.82221 4.50691 5.21816C4.99236 4.88092 5.6587 4.69899 6.99138 4.33514L14.7321 2.22172C15.0767 2.12763 15.2491 2.08058 15.3977 2.05386C17.0504 1.75694 18.6737 2.71192 19.2477 4.31874C19.2993 4.4633 19.3455 4.63888 19.4378 4.99006C19.4642 5.09039 19.4774 5.14056 19.4849 5.18385C19.5682 5.66498 19.3004 6.13757 18.8498 6.30467C18.8093 6.3197 18.7601 6.33314 18.6616 6.36003L3.49827 10.5Z',
  d3: 'M7 10L9 4',
  d4: 'M14 8L16 2',
  d5: 'M8 18H11',
  d6: 'M16.6863 3.10168L15.6737 6.13933L18.3978 5.39558C18.4492 5.38156 18.4774 5.37384 18.4978 5.36793C18.4985 5.3665 18.499 5.36486 18.4993 5.36311C18.4994 5.36233 18.4996 5.36144 18.4996 5.36041C18.4996 5.35968 18.4996 5.35887 18.4996 5.35798L18.4972 5.3484C18.4919 5.32686 18.4843 5.29765 18.4703 5.24463C18.3727 4.8733 18.3391 4.74923 18.3056 4.65537C18.0273 3.87649 17.4122 3.31942 16.6863 3.10168ZM13.3545 6.77255L14.5052 3.32042L9.857 4.58949L8.70629 8.04162L13.3545 6.77255ZM7.25438 5.30007L7.53774 5.22271L6.38703 8.67484L4.21314 9.26836C4.03647 8.5543 3.98265 8.22274 4.00347 7.93971C4.06031 7.16689 4.45903 6.46904 5.07707 6.03968C5.38576 5.82523 5.84043 5.68612 7.25438 5.30007ZM15.2205 1.06987C17.3659 0.684421 19.4546 1.9267 20.189 3.9826C20.2554 4.16849 20.3119 4.38324 20.3922 4.68905L20.4046 4.73598L20.4103 4.75785L20.4104 4.7579L20.4104 4.758C20.4305 4.83429 20.4547 4.92595 20.4699 5.01358C20.6333 5.95807 20.1102 6.90389 19.1972 7.24251C19.1129 7.27375 19.0207 7.29883 18.9462 7.31909L18.9246 7.32496L2.78749 11.7308L2.53077 10.7546L2.48318 10.5738C2.1718 9.39213 1.95247 8.55975 2.00886 7.79301C2.1093 6.42725 2.81504 5.17587 3.93599 4.39714C4.56566 3.95971 5.39043 3.73502 6.54581 3.42026L6.72761 3.37069L14.4683 1.25728L14.5158 1.24431C14.8145 1.16272 15.0272 1.10461 15.2205 1.06987Z',
  d7: 'M19.7356 9.56335C20.2618 9.63207 20.8006 9.79084 21.2445 10.2221C21.6925 10.6572 21.8614 11.1923 21.934 11.717C22.0001 12.1946 22.0001 12.7841 22 13.4371L22 15.0739V15.0739C22 16.661 22.0001 17.9558 21.8587 18.9776C21.7106 20.0469 21.391 20.9641 20.6415 21.6922C19.8961 22.4163 18.9639 22.7215 17.877 22.8634C16.831 23.0001 15.5031 23 13.8647 23H10.6353C8.99685 23 7.66897 23.0001 6.62297 22.8634C5.53614 22.7215 4.60391 22.4163 3.85849 21.6922C3.10903 20.9641 2.78936 20.0469 2.64135 18.9776C2.49994 17.9558 2.49997 16.661 2.5 15.0738V15.0738L2.5 9.50001L17.9725 9.5C18.6483 9.49995 19.2498 9.4999 19.7356 9.56335ZM8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19H11C11.5523 19 12 18.5523 12 18C12 17.4477 11.5523 17 11 17H8Z',
  d8: 'M21.2445 10.2221C20.8006 9.79084 20.2618 9.63207 19.7356 9.56335C19.2498 9.4999 18.6483 9.49995 17.9725 9.5L3.5 9.50001C3.0286 9.50001 2.7929 9.50001 2.64645 9.64645C2.5 9.7929 2.5 10.0286 2.5 10.5L2.5 15.0738C2.49997 16.6609 2.49994 17.9558 2.64135 18.9776C2.78936 20.0469 3.10903 20.9641 3.85849 21.6922C4.60391 22.4163 5.53614 22.7215 6.62297 22.8634C7.66897 23.0001 8.99685 23 10.6353 23H13.8647C15.5031 23 16.831 23.0001 17.877 22.8634C18.9639 22.7215 19.8961 22.4163 20.6415 21.6922C21.391 20.9641 21.7106 20.0469 21.8587 18.9776C22.0001 17.9558 22 16.661 22 15.0739L22 13.4371C22.0001 12.7841 22.0001 12.1946 21.934 11.717C21.8614 11.1923 21.6925 10.6572 21.2445 10.2221Z',
  d9: 'M18.3056 4.65537C18.0273 3.87649 17.4122 3.31942 16.6863 3.10168L15.6737 6.13933L18.3978 5.39558C18.4492 5.38156 18.4774 5.37384 18.4978 5.36793C18.4985 5.3665 18.499 5.36486 18.4993 5.36311C18.4994 5.36233 18.4996 5.36144 18.4996 5.36041C18.4996 5.35968 18.4996 5.35887 18.4996 5.35798L18.4972 5.3484C18.4919 5.32686 18.4843 5.29765 18.4703 5.24463C18.3727 4.8733 18.3391 4.74923 18.3056 4.65537ZM9.857 4.58949L14.5052 3.32042L13.3545 6.77255L8.70629 8.04162L9.857 4.58949ZM7.53774 5.22271L6.38703 8.67484L4.21314 9.26836C4.03647 8.5543 3.98265 8.22274 4.00347 7.93971C4.06031 7.16689 4.45903 6.46904 5.07707 6.03968C5.38576 5.82523 5.84043 5.68612 7.25438 5.30007L7.53774 5.22271ZM15.2205 1.06987C17.3659 0.684421 19.4546 1.9267 20.189 3.9826C20.2554 4.16849 20.3119 4.38324 20.3922 4.68905L20.4046 4.73598L20.4103 4.75785L20.4104 4.7579L20.4104 4.75801C20.4305 4.83429 20.4547 4.92595 20.4699 5.01358C20.6333 5.95807 20.1102 6.90389 19.1972 7.24251C19.1129 7.27375 19.0207 7.29883 18.9462 7.31909L18.9246 7.32496L10.9582 9.5L3.5 9.50001C3.0286 9.50001 2.7929 9.50001 2.64645 9.64645C2.5 9.7929 2.5 10.0286 2.5 10.5V10.6377L2.48318 10.5738C2.1718 9.39213 1.95247 8.55975 2.00886 7.79301C2.1093 6.42725 2.81504 5.17587 3.93599 4.39714C4.56566 3.95971 5.39043 3.73502 6.54581 3.42026L6.72761 3.37069L14.4683 1.25728L14.5158 1.24431C14.8145 1.16272 15.0272 1.10461 15.2205 1.06987Z',
  d10: 'M7 18C7 17.4477 7.44772 17 8 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H8C7.44772 19 7 18.5523 7 18Z',
  d11: 'M21.5 11H4V22H21.5V11Z',
  d12: 'M3.99827 11L20.5 7L19 2L2.5 6.5L3.99827 11Z',
  d13: 'M8 10L9 4.5',
  d14: 'M14 8.5L15 3',
  d15: 'M8 18H12',
  d16: 'M18.556 1.28361C19.0662 1.14737 19.5944 1.43426 19.7464 1.93021L21.2089 6.70276C21.2858 6.95375 21.2539 7.22465 21.1208 7.45195C20.9876 7.67925 20.7648 7.84295 20.5047 7.90468L4.4155 11.7227C3.92285 11.8396 3.42088 11.5675 3.26074 11.0966L1.79993 6.80131C1.71529 6.55246 1.73899 6.28047 1.86545 6.04924C1.99191 5.81801 2.20999 5.64792 2.46846 5.57891L18.556 1.28361ZM3.97555 7.15526L4.82761 9.66062L7.14477 9.11075L7.68015 6.16615L3.97555 7.15526ZM13.1303 7.69036L9.26922 8.60661L9.81666 5.59571L13.6996 4.55897L13.1303 7.69036ZM15.2547 7.18621L19.0455 6.28665L18.1518 3.37026L15.8361 3.98853L15.2547 7.18621Z',
  d17: 'M4 10.2498C3.58579 10.2498 3.25 10.5855 3.25 10.9998V21.9998C3.25 22.414 3.58579 22.7498 4 22.7498H21.5C21.9142 22.7498 22.25 22.414 22.25 21.9998V10.9998C22.25 10.5855 21.9142 10.2498 21.5 10.2498H4ZM8 18.9998H12V16.9998H8V18.9998Z',
};

export const IconFlimSlateStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flim-slate-stroke-rounded IconFlimSlateStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlimSlateDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flim-slate-duotone-rounded IconFlimSlateDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlimSlateTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flim-slate-twotone-rounded IconFlimSlateTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlimSlateSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flim-slate-solid-rounded IconFlimSlateSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlimSlateBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flim-slate-bulk-rounded IconFlimSlateBulkRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlimSlateStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flim-slate-stroke-sharp IconFlimSlateStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlimSlateSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flim-slate-solid-sharp IconFlimSlateSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlimSlate: TheIconSelfPack = {
  name: 'FlimSlate',
  StrokeRounded: IconFlimSlateStrokeRounded,
  DuotoneRounded: IconFlimSlateDuotoneRounded,
  TwotoneRounded: IconFlimSlateTwotoneRounded,
  SolidRounded: IconFlimSlateSolidRounded,
  BulkRounded: IconFlimSlateBulkRounded,
  StrokeSharp: IconFlimSlateStrokeSharp,
  SolidSharp: IconFlimSlateSolidSharp,
};