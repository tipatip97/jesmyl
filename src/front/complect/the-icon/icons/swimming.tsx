import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.7184 6.86177L15 16C12.8333 16 12.1739 14.8571 9.91304 13.7143C8.10435 12.8 5.57971 12.9524 4.82609 13.1429L7.85739 10.9998C8.16585 10.7817 8.32008 10.6727 8.36937 10.5067C8.41866 10.3407 8.34893 10.1651 8.20947 9.81406L7.78519 8.74593C7.62654 8.34653 7.54721 8.14683 7.40384 8.00197C7.35388 7.9515 7.2987 7.9065 7.23922 7.86772C7.06848 7.7564 6.8569 7.71887 6.43376 7.64379L3.18315 7.06706C2.4987 6.94562 2 6.35065 2 5.65551C2 4.78222 2.77418 4.11181 3.63851 4.23665L8.0343 4.87152C8.82604 4.98586 9.22191 5.04304 9.5521 5.23177C9.68974 5.31045 9.81754 5.40521 9.93281 5.51407C10.2093 5.7752 10.379 6.13739 10.7184 6.86177Z',
  d2: 'M2 18.0843C3.05556 14.5527 7.7685 16.1736 11.5 18.0843C15.2315 19.995 19 21.2108 21 18.0843',
  d3: 'M10.7184 6.86083L15 15.9991C12.8333 15.9991 12.1739 14.8562 9.91304 13.7133C8.10435 12.7991 5.57971 12.9514 4.82609 13.1419L7.85739 10.9988C8.16585 10.7807 8.32008 10.6717 8.36937 10.5057C8.41866 10.3397 8.34893 10.1642 8.20947 9.81311L7.78519 8.74498C7.62654 8.34558 7.54721 8.14589 7.40384 8.00102C7.35388 7.95055 7.2987 7.90555 7.23922 7.86677C7.06848 7.75546 6.8569 7.71792 6.43376 7.64285L3.18315 7.06611C2.4987 6.94468 2 6.34971 2 5.65457C2 4.78127 2.77418 4.11087 3.63851 4.2357L8.0343 4.87057C8.82604 4.98492 9.22191 5.04209 9.5521 5.23082C9.68974 5.3095 9.81754 5.40427 9.93281 5.51312C10.2093 5.77425 10.379 6.13644 10.7184 6.86083Z',
  d4: 'M1.37512 5.41838C1.37512 4.08821 2.55433 3.06708 3.87084 3.25722L8.38512 3.90913C9.06026 4.006 9.59255 4.08237 10.0494 4.3435C10.2387 4.45168 10.4144 4.58198 10.5729 4.73166C10.9555 5.09296 11.1832 5.58012 11.472 6.198L15.8043 15.4447C15.9131 15.677 15.8957 15.9488 15.758 16.1653C15.6204 16.3818 15.3817 16.5129 15.1251 16.5129C13.8747 16.5129 13.0364 16.1722 12.2327 15.6927C11.9362 15.5157 11.6703 15.3396 11.4 15.1605C10.9155 14.8394 10.4164 14.5087 9.69982 14.1465C8.9236 13.7541 7.95495 13.5754 7.05781 13.526C6.15566 13.4764 5.41649 13.5617 5.13499 13.6329C4.78469 13.7214 4.42106 13.5476 4.26995 13.2194C4.11884 12.8912 4.22322 12.5019 4.51825 12.2933L7.32404 10.3088C7.50894 10.178 7.6014 10.1126 7.63097 10.0131C7.66054 9.91358 7.6188 9.80832 7.53532 9.59778L7.21329 8.78567C7.03011 8.32372 6.61335 8.16616 6.42786 8.14513L3.17725 7.5684C2.13473 7.38343 1.37512 6.47719 1.37512 5.41838Z',
  d5: 'M15.375 9.76562C15.375 7.69456 17.0539 6.01562 19.125 6.01562C21.1961 6.01562 22.875 7.69456 22.875 9.76562C22.875 11.8367 21.1961 13.5156 19.125 13.5156C17.0539 13.5156 15.375 11.8367 15.375 9.76562Z',
  d6: 'M3.96689 16.987C3.59474 17.1677 3.27514 17.4908 3.08338 18.1324C2.92522 18.6615 2.36805 18.9623 1.83889 18.8041C1.30974 18.646 1.00899 18.0888 1.16714 17.5596C1.50316 16.4354 2.16852 15.6368 3.09353 15.1878C3.97804 14.7584 4.99629 14.6988 5.98509 14.8116C7.95082 15.0357 10.1966 15.991 12.081 16.9559C13.9322 17.9038 15.6615 18.6058 17.1158 18.7391C17.8268 18.8043 18.4269 18.7284 18.9292 18.514C19.4212 18.304 19.8813 17.935 20.2829 17.3071C20.5805 16.8419 21.1989 16.706 21.6641 17.0036C22.1294 17.3012 22.2653 17.9197 21.9676 18.3849C21.3693 19.3203 20.6083 19.9718 19.7146 20.3534C18.8311 20.7306 17.8809 20.8176 16.9333 20.7308C15.0706 20.5601 13.0498 19.6989 11.1695 18.7361C9.3224 17.7903 7.34598 16.9797 5.75848 16.7987C4.97066 16.7088 4.37954 16.7867 3.96689 16.987Z',
  d7: 'M9.91304 4.93854L15 16C12.8333 16 12.1739 14.8356 9.91304 13.6713C8.10435 12.7398 5.57971 12.895 4.82609 13.0891L8.5 10.4428L7.41667 7.66421L3.18315 6.89896C2.4987 6.77524 2 6.16907 2 5.46085C2 4.57112 2.77418 3.8881 3.63851 4.01528L9.91304 4.93854Z',
  d8: 'M1.25 5.46094C1.25 4.12977 2.41464 3.07721 3.7477 3.27336L10.4245 4.25582L16.1704 16.7501H15C13.7463 16.7501 12.9062 16.4019 12.1023 15.9132C11.8055 15.7329 11.5397 15.5534 11.2693 15.3709C10.7849 15.0438 10.2861 14.7071 9.56965 14.3381C8.79473 13.939 7.82776 13.7573 6.93191 13.707C6.03074 13.6565 5.29303 13.7434 5.01311 13.8155L4.38774 12.4806L7.59015 10.1739L6.87033 8.3277L3.04974 7.63709C1.99869 7.4471 1.25 6.52203 1.25 5.46094Z',
  d9: 'M15.25 10C15.25 7.92893 16.9289 6.25 19 6.25C21.0711 6.25 22.75 7.92893 22.75 10C22.75 12.0711 21.0711 13.75 19 13.75C16.9289 13.75 15.25 12.0711 15.25 10Z',
  d10: 'M3.73248 17.0007C3.29122 17.2148 2.92841 17.5974 2.71861 18.2993L1.28143 17.8698C1.59942 16.8059 2.22156 16.0667 3.07746 15.6512C3.90299 15.2505 4.86785 15.1886 5.83152 15.2985C7.74998 15.5173 9.96211 16.4544 11.8419 17.4169C13.6967 18.3667 15.4624 19.0887 16.9678 19.2266C17.7083 19.2945 18.3522 19.2172 18.9021 18.9824C19.4443 18.751 19.942 18.3467 20.3682 17.6804L21.6318 18.4887C21.058 19.3857 20.3347 20.0018 19.4911 20.362C18.6554 20.7188 17.7489 20.8045 16.8309 20.7203C15.0192 20.5543 13.0348 19.713 11.1582 18.7521C9.30644 17.8039 7.29635 16.9752 5.66157 16.7888C4.84862 16.6961 4.20411 16.7717 3.73248 17.0007Z',
};

export const IconSwimmingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-stroke-rounded IconSwimmingStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="19" 
        cy="10" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSwimmingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-duotone-rounded IconSwimmingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="19" 
        cy="10.002" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSwimmingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-twotone-rounded IconSwimmingTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="19" 
        cy="10" 
        r="3" 
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
    </TheIconWrapper>
  );
};

export const IconSwimmingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-solid-rounded IconSwimmingSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSwimmingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-bulk-rounded IconSwimmingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSwimmingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-stroke-sharp IconSwimmingStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="19" 
        cy="10" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwimmingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-solid-sharp IconSwimmingSolidSharp"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfSwimming: TheIconSelfPack = {
  name: 'Swimming',
  StrokeRounded: IconSwimmingStrokeRounded,
  DuotoneRounded: IconSwimmingDuotoneRounded,
  TwotoneRounded: IconSwimmingTwotoneRounded,
  SolidRounded: IconSwimmingSolidRounded,
  BulkRounded: IconSwimmingBulkRounded,
  StrokeSharp: IconSwimmingStrokeSharp,
  SolidSharp: IconSwimmingSolidSharp,
};