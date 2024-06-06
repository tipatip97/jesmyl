import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 14C8.91212 15.2144 10.3643 16 12 16C13.6357 16 15.0879 15.2144 16 14',
  d2: 'M15 8C15 8 14 9 14 10C14.75 9 16.25 9 17 10',
  d3: 'M8.00897 9H8',
  d4: 'M13.5 16L14.2348 17.3203C14.644 17.9703 15.5502 18.1929 16.2589 17.8177C16.9676 17.4424 17.2104 16.6113 16.8012 15.9614L16 15',
  d5: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5 16L14.2348 17.3203C14.644 17.9703 15.5502 18.1929 16.2589 17.8177C16.9676 17.4424 17.2104 16.6113 16.8012 15.9614L16 15L13.5 16Z',
  d6: 'M8 14C8.91212 15.2144 10.3643 16 12 16C13.6357 16 15.0879 15.2144 16 14M13.5 16L14.2348 17.3203C14.644 17.9703 15.5502 18.1929 16.2589 17.8177C16.9676 17.4424 17.2104 16.6113 16.8012 15.9614L16 15',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.5585 8.50064C15.8229 8.20618 15.8135 7.75286 15.5303 7.46967C15.2374 7.17678 14.7626 7.17678 14.4697 7.46967L14.463 7.47679C14.4236 7.51905 14.3256 7.62395 14.2743 7.68378C14.166 7.8101 14.0215 7.9906 13.876 8.20897C13.6011 8.62133 13.25 9.27456 13.25 10C13.25 10.3228 13.4566 10.6094 13.7628 10.7115C14.0691 10.8136 14.4063 10.7083 14.6 10.45C15.05 9.85 15.95 9.85 16.4 10.45C16.6485 10.7814 17.1186 10.8485 17.45 10.6C17.7814 10.3515 17.8485 9.88137 17.6 9.55C17.088 8.86732 16.3263 8.51754 15.5585 8.50064ZM6.75 9C6.75 8.30964 7.30764 7.75 7.99553 7.75H8.00447C8.69236 7.75 9.25 8.30964 9.25 9C9.25 9.69036 8.69236 10.25 8.00447 10.25H7.99553C7.30764 10.25 6.75 9.69036 6.75 9ZM8.59974 13.5496C8.35099 13.2184 7.88084 13.1515 7.54964 13.4003C7.21843 13.649 7.1516 14.1192 7.40035 14.4504C8.44802 15.8453 10.1185 16.75 12 16.75C12.3446 16.75 12.682 16.7196 13.0099 16.6615L13.6001 17.7199C14.2328 18.7248 15.5788 19.0265 16.6099 18.4805C17.6736 17.9173 18.0956 16.6096 17.436 15.5618C17.3233 15.3744 16.9905 14.9001 16.5607 14.5018C16.5738 14.4847 16.5868 14.4676 16.5997 14.4504C16.8485 14.1192 16.7817 13.649 16.4505 13.4003C16.1192 13.1515 15.6491 13.2184 15.4003 13.5496C14.6238 14.5835 13.3898 15.25 12 15.25C10.6103 15.25 9.37631 14.5835 8.59974 13.5496Z',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d9: 'M15.5303 7.46967C15.8135 7.75286 15.8229 8.20618 15.5585 8.50064C16.3263 8.51754 17.088 8.86732 17.6 9.55C17.8485 9.88137 17.7814 10.3515 17.45 10.6C17.1186 10.8485 16.6485 10.7814 16.4 10.45C15.95 9.85 15.05 9.85 14.6 10.45C14.4063 10.7083 14.0691 10.8136 13.7628 10.7115C13.4566 10.6094 13.25 10.3228 13.25 10C13.25 9.27456 13.6011 8.62133 13.876 8.20897C14.0215 7.9906 14.166 7.8101 14.2743 7.68378C14.3288 7.62023 14.4359 7.50585 14.4697 7.46967C14.7626 7.17678 15.2374 7.17678 15.5303 7.46967Z',
  d10: 'M6.75 9C6.75 8.30964 7.30764 7.75 7.99553 7.75H8.00447C8.69236 7.75 9.25 8.30964 9.25 9C9.25 9.69036 8.69236 10.25 8.00447 10.25H7.99553C7.30764 10.25 6.75 9.69036 6.75 9Z',
  d11: 'M7.54964 13.4003C7.88084 13.1516 8.35099 13.2184 8.59974 13.5496C9.37631 14.5836 10.6103 15.25 12 15.25C13.3898 15.25 14.6238 14.5836 15.4003 13.5496C15.6491 13.2184 16.1192 13.1516 16.4505 13.4003C16.7817 13.6491 16.8485 14.1192 16.5997 14.4505C16.5868 14.4677 16.5738 14.4848 16.5607 14.5019C16.9905 14.9002 17.3233 15.3745 17.436 15.5619C18.0956 16.6097 17.6736 17.9173 16.6099 18.4806C15.5788 19.0265 14.2328 18.7248 13.6001 17.7199L13.0099 16.6616C12.682 16.7197 12.3446 16.75 12 16.75C10.1185 16.75 8.44802 15.8454 7.40035 14.4505C7.1516 14.1192 7.21843 13.6491 7.54964 13.4003Z',
  d12: 'M15 7.5C15 7.5 14 9 14 10C14.75 9 16.25 9 17 10',
  d13: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15 7.49981C14.376 7.08378 14.3759 7.08388 14.3758 7.08399L14.3742 7.08639L14.3711 7.0912L14.3606 7.1072C14.3518 7.12064 14.3395 7.1396 14.3243 7.16356C14.2938 7.21144 14.2513 7.27956 14.2006 7.36394C14.0998 7.53201 13.9649 7.76799 13.8292 8.0394C13.5762 8.54528 13.25 9.30869 13.25 9.99981C13.25 10.3226 13.4566 10.6092 13.7628 10.7113C14.0691 10.8134 14.4063 10.7081 14.6 10.4498C15.05 9.84981 15.95 9.84981 16.4 10.4498L17.6 9.54981C17.0249 8.78303 16.1349 8.43621 15.2748 8.50936C15.3527 8.36395 15.4267 8.23603 15.4869 8.13568C15.53 8.06381 15.5656 8.00693 15.5898 7.96887C15.6019 7.94986 15.6111 7.93561 15.617 7.9266L15.6232 7.91709L15.6242 7.91566C15.6241 7.91574 15.624 7.91583 15 7.49981ZM6.75 9C6.75 8.30964 7.30964 7.75 8 7.75H8.00897C8.69933 7.75 9.25897 8.30964 9.25897 9C9.25897 9.69036 8.69933 10.25 8.00897 10.25H8C7.30964 10.25 6.75 9.69036 6.75 9ZM15.4004 13.5498C14.6238 14.5838 13.3899 15.2502 12.0001 15.2502C10.6103 15.2502 9.37635 14.5838 8.59978 13.5498L7.40039 14.4506C8.44806 15.8455 10.1185 16.7502 12.0001 16.7502C12.3446 16.7502 12.6821 16.7199 13.0099 16.6618L13.5795 17.6852C13.5861 17.697 13.593 17.7087 13.6002 17.7201C14.2328 18.725 15.5788 19.0267 16.6099 18.4807C17.6737 17.9175 18.0957 16.6099 17.436 15.562C17.4183 15.5339 17.3988 15.507 17.3775 15.4814L16.5926 14.5397L15.4004 13.5498Z',
};

export const IconWinkStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wink-stroke-rounded IconWinkStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconWinkDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wink-duotone-rounded IconWinkDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconWinkTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wink-twotone-rounded IconWinkTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWinkSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wink-solid-rounded IconWinkSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWinkBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wink-bulk-rounded IconWinkBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWinkStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wink-stroke-sharp IconWinkStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWinkSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wink-solid-sharp IconWinkSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWink: TheIconSelfPack = {
  name: 'Wink',
  StrokeRounded: IconWinkStrokeRounded,
  DuotoneRounded: IconWinkDuotoneRounded,
  TwotoneRounded: IconWinkTwotoneRounded,
  SolidRounded: IconWinkSolidRounded,
  BulkRounded: IconWinkBulkRounded,
  StrokeSharp: IconWinkStrokeSharp,
  SolidSharp: IconWinkSolidSharp,
};