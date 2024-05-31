import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 15.6L15.7307 15.4C15.0125 14.8667 14.1672 14.8667 13.4491 15.4L13.1798 15.6C12.4616 16.1333 11.6163 16.1333 10.8982 15.6L10.6288 15.4C9.91069 14.8667 9.06539 14.8667 8.34723 15.4L8 15.6579',
  d2: 'M8.00897 9H8M16 9H15.991',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM10.1817 16.0021C9.72908 15.666 9.24709 15.666 8.79444 16.0021L8.44721 16.26C8.11467 16.5069 7.64489 16.4376 7.39793 16.105C7.15097 15.7725 7.22035 15.3027 7.55289 15.0557L7.90012 14.7979C8.88378 14.0674 10.0924 14.0674 11.0761 14.7979L11.3454 14.9979C11.798 15.334 12.28 15.334 12.7327 14.9979L13.002 14.7979C13.9856 14.0674 15.1942 14.0674 16.1779 14.7979L16.4472 14.9979C16.7797 15.2448 16.8491 15.7146 16.6022 16.0472C16.3552 16.3797 15.8854 16.4491 15.5529 16.2021L15.2836 16.0021C14.8309 15.666 14.3489 15.666 13.8963 16.0021L13.627 16.2021C12.6433 16.9326 11.4347 16.9326 10.451 16.2021L10.1817 16.0021ZM8 7.75C7.30964 7.75 6.75 8.30964 6.75 9C6.75 9.69036 7.30964 10.25 8 10.25H8.00897C8.69933 10.25 9.25897 9.69036 9.25897 9C9.25897 8.30964 8.69933 7.75 8.00897 7.75H8ZM15.991 7.75C15.3007 7.75 14.741 8.30964 14.741 9C14.741 9.69036 15.3007 10.25 15.991 10.25H16C16.6904 10.25 17.25 9.69036 17.25 9C17.25 8.30964 16.6904 7.75 16 7.75H15.991Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M10.1817 16.0021C9.72908 15.666 9.24709 15.666 8.79444 16.0021L8.44721 16.26C8.11467 16.5069 7.64489 16.4376 7.39793 16.105C7.15097 15.7725 7.22035 15.3027 7.55289 15.0557L7.90012 14.7979C8.88378 14.0674 10.0924 14.0674 11.0761 14.7979L11.3454 14.9979V14.9979C11.798 15.334 12.28 15.334 12.7327 14.9979L13.002 14.7979C13.9856 14.0674 15.1942 14.0674 16.1779 14.7979L16.4472 14.9979C16.7797 15.2448 16.8491 15.7146 16.6022 16.0472C16.3552 16.3797 15.8854 16.4491 15.5529 16.2021L15.2836 16.0021C14.8309 15.666 14.3489 15.666 13.8963 16.0021L13.627 16.2021C12.6433 16.9326 11.4347 16.9326 10.451 16.2021L10.1817 16.0021Z',
  d6: 'M6.75 9C6.75 8.30964 7.30964 7.75 8 7.75H8.00897C8.69933 7.75 9.25897 8.30964 9.25897 9C9.25897 9.69036 8.69933 10.25 8.00897 10.25H8C7.30964 10.25 6.75 9.69036 6.75 9ZM14.741 9C14.741 8.30964 15.3007 7.75 15.991 7.75H16C16.6904 7.75 17.25 8.30964 17.25 9C17.25 9.69036 16.6904 10.25 16 10.25H15.991C15.3007 10.25 14.741 9.69036 14.741 9Z',
  d7: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM10.1816 16.0021C9.72893 15.666 9.24694 15.666 8.79429 16.0021L8.44705 16.26L7.55273 15.0557L7.89997 14.7979C8.88362 14.0674 10.0922 14.0674 11.0759 14.7979L11.3452 14.9979C11.7979 15.334 12.2799 15.334 12.7325 14.9979L13.0018 14.7979C13.9855 14.0674 15.1941 14.0674 16.1777 14.7979L16.4471 14.9979L15.5527 16.2021L15.2834 16.0021C14.8308 15.666 14.3488 15.666 13.8961 16.0021L13.6268 16.2021C12.6432 16.9326 11.4345 16.9326 10.4509 16.2021L10.1816 16.0021ZM8 7.75C7.30964 7.75 6.75 8.30964 6.75 9C6.75 9.69036 7.30964 10.25 8 10.25H8.00897C8.69933 10.25 9.25897 9.69036 9.25897 9C9.25897 8.30964 8.69933 7.75 8.00897 7.75H8ZM15.991 7.75C15.3007 7.75 14.741 8.30964 14.741 9C14.741 9.69036 15.3007 10.25 15.991 10.25H16C16.6904 10.25 17.25 9.69036 17.25 9C17.25 8.30964 16.6904 7.75 16 7.75H15.991Z',
} as const;

export const IconWorryStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="worry-stroke-rounded IconWorryStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWorryDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="worry-duotone-rounded IconWorryDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconWorryTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="worry-twotone-rounded IconWorryTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconWorrySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="worry-solid-rounded IconWorrySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorryBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="worry-bulk-rounded IconWorryBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorryStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="worry-stroke-sharp IconWorryStrokeSharp"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorrySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="worry-solid-sharp IconWorrySolidSharp"
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

export const iconPackOfWorry: TheIconSelfPack = {
  name: 'Worry',
  StrokeRounded: IconWorryStrokeRounded,
  DuotoneRounded: IconWorryDuotoneRounded,
  TwotoneRounded: IconWorryTwotoneRounded,
  SolidRounded: IconWorrySolidRounded,
  BulkRounded: IconWorryBulkRounded,
  StrokeSharp: IconWorryStrokeSharp,
  SolidSharp: IconWorrySolidSharp,
};