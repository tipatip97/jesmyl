import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15',
  d2: 'M15 8C15 8 14 9 14 10C14.75 9 16.25 9 17 10',
  d3: 'M8.00897 9H8',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.59974 14.5496C8.35099 14.2184 7.88084 14.1515 7.54964 14.4003C7.21843 14.649 7.1516 15.1192 7.40035 15.4504C8.44802 16.8453 10.1185 17.75 12 17.75C13.8816 17.75 15.5521 16.8453 16.5997 15.4504C16.8485 15.1192 16.7817 14.649 16.4505 14.4003C16.1192 14.1515 15.6491 14.2184 15.4003 14.5496C14.6238 15.5835 13.3898 16.25 12 16.25C10.6103 16.25 9.37631 15.5835 8.59974 14.5496ZM15.5303 7.46967C15.8135 7.75286 15.8229 8.20618 15.5585 8.50064C16.3263 8.51754 17.088 8.86732 17.6 9.55C17.8485 9.88137 17.7814 10.3515 17.45 10.6C17.1186 10.8485 16.6485 10.7814 16.4 10.45C15.95 9.85 15.05 9.85 14.6 10.45C14.4063 10.7083 14.0691 10.8136 13.7628 10.7115C13.4566 10.6094 13.25 10.3228 13.25 10C13.25 9.27456 13.6011 8.62133 13.876 8.20897C14.0215 7.9906 14.227 7.74659 14.3352 7.62027C14.3897 7.55672 14.4359 7.50585 14.4697 7.46967C14.7626 7.17678 15.2374 7.17678 15.5303 7.46967ZM7.99553 7.75C7.30764 7.75 6.75 8.30964 6.75 9C6.75 9.69036 7.30764 10.25 7.99553 10.25H8.00447C8.69236 10.25 9.25 9.69036 9.25 9C9.25 8.30964 8.69236 7.75 8.00447 7.75H7.99553Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d6: 'M7.54964 14.4003C7.88084 14.1516 8.35099 14.2184 8.59974 14.5496C9.37631 15.5836 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5836 15.4003 14.5496C15.6491 14.2184 16.1192 14.1516 16.4505 14.4003C16.7817 14.6491 16.8485 15.1192 16.5997 15.4505C15.5521 16.8454 13.8816 17.75 12 17.75C10.1185 17.75 8.44802 16.8454 7.40035 15.4505C7.1516 15.1192 7.21843 14.6491 7.54964 14.4003Z',
  d7: 'M15.5303 7.46967C15.8135 7.75286 15.8229 8.20618 15.5585 8.50064C16.3263 8.51754 17.088 8.86732 17.6 9.55C17.8485 9.88137 17.7814 10.3515 17.45 10.6C17.1186 10.8485 16.6485 10.7814 16.4 10.45C15.95 9.85 15.05 9.85 14.6 10.45C14.4063 10.7083 14.0691 10.8136 13.7628 10.7115C13.4566 10.6094 13.25 10.3228 13.25 10C13.25 9.27456 13.6011 8.62133 13.876 8.20897C14.0215 7.9906 14.227 7.74659 14.3352 7.62027C14.3897 7.55672 14.4359 7.50585 14.4697 7.46967C14.7626 7.17678 15.2374 7.17678 15.5303 7.46967Z',
  d8: 'M6.75 9C6.75 8.30964 7.30764 7.75 7.99553 7.75H8.00447C8.69236 7.75 9.25 8.30964 9.25 9C9.25 9.69036 8.69236 10.25 8.00447 10.25H7.99553C7.30764 10.25 6.75 9.69036 6.75 9Z',
  d9: 'M15 7.5C15 7.5 14 9 14 10C14.75 9 16.25 9 17 10',
  d10: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.4004 14.5498C14.6238 15.5838 13.3899 16.2502 12.0001 16.2502C10.6103 16.2502 9.37635 15.5838 8.59978 14.5498L7.40039 15.4506C8.44806 16.8455 10.1185 17.7502 12.0001 17.7502C13.8816 17.7502 15.5521 16.8455 16.5998 15.4506L15.4004 14.5498ZM14.3758 7.08399C14.3759 7.08388 14.376 7.08378 15 7.49981C15.624 7.91583 15.6241 7.91574 15.6242 7.91566L15.6232 7.91709L15.617 7.9266C15.6111 7.93561 15.6019 7.94986 15.5898 7.96887C15.5656 8.00693 15.53 8.06381 15.4869 8.13568C15.4267 8.23603 15.3527 8.36395 15.2748 8.50936C16.1349 8.43621 17.0249 8.78303 17.6 9.54981L16.4 10.4498C15.95 9.84981 15.05 9.84981 14.6 10.4498C14.4063 10.7081 14.0691 10.8134 13.7628 10.7113C13.4566 10.6092 13.25 10.3226 13.25 9.99981C13.25 9.30869 13.5762 8.54528 13.8292 8.0394C13.9649 7.76799 14.0998 7.53201 14.2006 7.36394C14.2513 7.27956 14.2938 7.21144 14.3243 7.16356C14.3395 7.1396 14.3518 7.12064 14.3606 7.1072L14.3711 7.0912L14.3742 7.08639L14.3758 7.08399ZM8 7.75C7.30964 7.75 6.75 8.30964 6.75 9C6.75 9.69036 7.30964 10.25 8 10.25H8.00897C8.69933 10.25 9.25897 9.69036 9.25897 9C9.25897 8.30964 8.69933 7.75 8.00897 7.75H8Z',
};

export const IconWinkingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="winking-stroke-rounded IconWinkingStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWinkingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="winking-duotone-rounded IconWinkingDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconWinkingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="winking-twotone-rounded IconWinkingTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconWinkingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="winking-solid-rounded IconWinkingSolidRounded"
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

export const IconWinkingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="winking-bulk-rounded IconWinkingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconWinkingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="winking-stroke-sharp IconWinkingStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
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
    </TheIconWrapper>
  );
};

export const IconWinkingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="winking-solid-sharp IconWinkingSolidSharp"
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

export const iconPackOfWinking: TheIconSelfPack = {
  name: 'Winking',
  StrokeRounded: IconWinkingStrokeRounded,
  DuotoneRounded: IconWinkingDuotoneRounded,
  TwotoneRounded: IconWinkingTwotoneRounded,
  SolidRounded: IconWinkingSolidRounded,
  BulkRounded: IconWinkingBulkRounded,
  StrokeSharp: IconWinkingStrokeSharp,
  SolidSharp: IconWinkingSolidSharp,
};