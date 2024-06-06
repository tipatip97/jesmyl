import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 19.5H8C5.17157 19.5 3.75736 19.5 2.87868 18.5586C2 17.6171 2 16.1019 2 13.0714V10.9286C2 7.89811 2 6.38288 2.87868 5.44144C3.75736 4.5 5.17157 4.5 8 4.5H16C18.8284 4.5 20.2426 4.5 21.1213 5.44144C22 6.38288 22 7.89811 22 10.9286V13.0714C22 16.1019 22 17.6171 21.1213 18.5586C20.2426 19.5 18.8284 19.5 16 19.5Z',
  d2: 'M17 4.5V19.5',
  d3: 'M7 4.5V19.5',
  d4: 'M19.5 15.5L19.491 15.5',
  d5: 'M4.50801 8.5L4.49902 8.5',
  d6: 'M17 19.4982C19.175 19.4853 20.3529 19.3819 21.1213 18.5586C22 17.6172 22 16.102 22 13.0715V10.9287C22 7.8982 22 6.38298 21.1213 5.44153C20.3529 4.61827 19.175 4.51492 17 4.50195V19.4982Z',
  d7: 'M2.87868 18.5586C3.64707 19.3819 4.825 19.4853 7.00007 19.4982L7 4.50195C4.82497 4.51492 3.64706 4.61827 2.87868 5.44153C2 6.38298 2 7.8982 2 10.9287V13.0715C2 16.102 2 17.6172 2.87868 18.5586Z',
  d8: 'M16 19.5H8C7.64499 19.5 7.31226 19.5 7.00007 19.4981L7 4.50186C7.31221 4.5 7.64496 4.5 8 4.5H16C16.355 4.5 16.6878 4.5 17 4.50186V19.4981C16.6878 19.5 16.355 19.5 16 19.5Z',
  d9: 'M4.50781 8.5L4.49883 8.5',
  d10: 'M15.9821 3.75H8.01794C7.68281 3.74999 7.36144 3.74998 7.05532 3.75201C7.03705 3.75068 7.01861 3.75 7 3.75C6.97747 3.75 6.95518 3.75099 6.93316 3.75294C6.08582 3.76025 5.35266 3.78571 4.73457 3.87414C3.81497 4.0057 3.00934 4.29342 2.37154 4.97209C1.74267 5.64127 1.48441 6.4705 1.36494 7.41603C1.24995 8.32615 1.24997 9.47966 1.25 10.8948V13.1052C1.24997 14.5204 1.24995 15.6739 1.36494 16.584C1.48441 17.5295 1.74267 18.3587 2.37154 19.0279C3.00934 19.7066 3.81497 19.9943 4.73457 20.1259C5.35266 20.2143 6.08581 20.2397 6.93315 20.2471C6.95518 20.249 6.97747 20.25 7 20.25C7.01861 20.25 7.03706 20.2493 7.05533 20.248C7.36166 20.25 7.68254 20.25 8.01792 20.25H15.9821C16.3175 20.25 16.6383 20.25 16.9447 20.248C16.9629 20.2493 16.9814 20.25 17 20.25C17.0225 20.25 17.0448 20.249 17.0668 20.2471C17.9142 20.2397 18.6473 20.2143 19.2654 20.1259C20.185 19.9943 20.9907 19.7066 21.6285 19.0279C22.2573 18.3587 22.5156 17.5295 22.6351 16.584C22.75 15.6738 22.75 14.5203 22.75 13.1052V10.8948C22.75 9.47966 22.75 8.32616 22.6351 7.41603C22.5156 6.4705 22.2573 5.64127 21.6285 4.97209C20.9907 4.29342 20.185 4.0057 19.2654 3.87414C18.6473 3.78571 17.9142 3.76025 17.0668 3.75294C17.0448 3.75099 17.0225 3.75 17 3.75C16.9814 3.75 16.9629 3.75068 16.9447 3.75201C16.6386 3.74998 16.3172 3.74999 15.9821 3.75ZM8.05 5.69128C7.88431 5.69128 7.75 5.8256 7.75 5.99128V18.0087C7.75 18.1744 7.88431 18.3087 8.05 18.3087H15.95C16.1157 18.3087 16.25 18.1744 16.25 18.0087V5.99128C16.25 5.8256 16.1157 5.69128 15.95 5.69128H8.05ZM20.5 15.5C20.5 16.0523 20.0523 16.5 19.5 16.5H19.491C18.9387 16.5 18.491 16.0523 18.491 15.5C18.491 14.9477 18.9387 14.5 19.491 14.5H19.5C20.0523 14.5 20.5 14.9477 20.5 15.5ZM4.50781 9.5C5.0601 9.5 5.50781 9.05228 5.50781 8.5C5.50781 7.94772 5.0601 7.5 4.50781 7.5H4.49883C3.94655 7.5 3.49883 7.94771 3.49883 8.5C3.49883 9.05228 3.94655 9.5 4.49883 9.5H4.50781Z',
  d11: 'M15.9821 3.75H8.01794C7.68281 3.74999 7.36144 3.74998 7.05532 3.75201C7.03705 3.75068 7.01861 3.75 7 3.75C6.97748 3.75 6.95518 3.751 6.93316 3.75294C6.08582 3.76026 5.35267 3.78571 4.73457 3.87414C3.81497 4.0057 3.00934 4.29342 2.37155 4.9721C1.74267 5.64128 1.48441 6.47051 1.36495 7.41603C1.24995 8.32615 1.24998 9.47966 1.25 10.8948V13.1052C1.24998 14.5204 1.24995 15.6739 1.36495 16.584C1.48441 17.5295 1.74267 18.3587 2.37155 19.0279C3.00934 19.7066 3.81497 19.9943 4.73457 20.1259C5.35266 20.2143 6.08582 20.2397 6.93316 20.2471C6.95518 20.249 6.97747 20.25 7 20.25C7.01861 20.25 7.03706 20.2493 7.05533 20.248C7.36166 20.25 7.68254 20.25 8.01792 20.25H15.9821C16.3175 20.25 16.6383 20.25 16.9447 20.248C16.9629 20.2493 16.9814 20.25 17 20.25C17.0225 20.25 17.0448 20.249 17.0668 20.2471C17.9142 20.2397 18.6473 20.2143 19.2654 20.1259C20.185 19.9943 20.9907 19.7066 21.6285 19.0279C22.2573 18.3587 22.5156 17.5295 22.6351 16.584C22.75 15.6738 22.75 14.5203 22.75 13.1052V10.8948C22.75 9.47967 22.75 8.32617 22.6351 7.41603C22.5156 6.47051 22.2573 5.64128 21.6285 4.9721C20.9907 4.29342 20.185 4.0057 19.2654 3.87414C18.6473 3.78571 17.9142 3.76026 17.0668 3.75294C17.0448 3.751 17.0225 3.75 17 3.75C16.9814 3.75 16.9629 3.75068 16.9447 3.75201C16.6386 3.74998 16.3172 3.74999 15.9821 3.75ZM8.05 5.69129C7.88432 5.69129 7.75 5.8256 7.75 5.99129V18.0087C7.75 18.1744 7.88432 18.3087 8.05 18.3087H15.95C16.1157 18.3087 16.25 18.1744 16.25 18.0087V5.99129C16.25 5.8256 16.1157 5.69129 15.95 5.69129H8.05Z',
  d12: 'M8.05 5.69141C7.88431 5.69141 7.75 5.82572 7.75 5.99141V18.0088C7.75 18.1745 7.88432 18.3088 8.05 18.3088H15.95C16.1157 18.3088 16.25 18.1745 16.25 18.0088V5.99141C16.25 5.82572 16.1157 5.69141 15.95 5.69141H8.05Z',
  d13: 'M20.5 15.5C20.5 16.0523 20.0523 16.5 19.5 16.5L19.491 16.5C18.9387 16.5 18.491 16.0523 18.491 15.5C18.491 14.9477 18.9387 14.5 19.491 14.5L19.5 14.5C20.0523 14.5 20.5 14.9477 20.5 15.5Z',
  d14: 'M5.50781 8.5C5.50781 9.05228 5.0601 9.5 4.50781 9.5L4.49883 9.5C3.94655 9.5 3.49883 9.05228 3.49883 8.5C3.49883 7.94771 3.94655 7.5 4.49883 7.5L4.50781 7.5C5.0601 7.5 5.50781 7.94772 5.50781 8.5Z',
  d15: 'M22 4.5H2V19.5H22V4.5Z',
  d16: 'M1.25 4.5C1.25 4.08579 1.58579 3.75 2 3.75H22C22.4142 3.75 22.75 4.08579 22.75 4.5V19.5C22.75 19.9142 22.4142 20.25 22 20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V4.5ZM6.75 18.75H17.25V5.25H6.75V18.75ZM20.7539 16.25H19.2449V14.75H20.7539V16.25ZM3.24492 9.25L4.75391 9.25L4.75391 7.75L3.24492 7.75L3.24492 9.25Z',
};

export const IconNintendoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-stroke-rounded IconNintendoStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNintendoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-duotone-rounded IconNintendoDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNintendoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-twotone-rounded IconNintendoTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNintendoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-solid-rounded IconNintendoSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNintendoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-bulk-rounded IconNintendoBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNintendoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-stroke-sharp IconNintendoStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNintendoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nintendo-solid-sharp IconNintendoSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNintendo: TheIconSelfPack = {
  name: 'Nintendo',
  StrokeRounded: IconNintendoStrokeRounded,
  DuotoneRounded: IconNintendoDuotoneRounded,
  TwotoneRounded: IconNintendoTwotoneRounded,
  SolidRounded: IconNintendoSolidRounded,
  BulkRounded: IconNintendoBulkRounded,
  StrokeSharp: IconNintendoStrokeSharp,
  SolidSharp: IconNintendoSolidSharp,
};