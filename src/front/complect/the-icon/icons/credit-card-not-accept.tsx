import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C21.8957 6.57684 21.9897 8.11799 21.999 11',
  d2: 'M2 9H22',
  d3: 'M22 14L16 20M22 20L16 14',
  d4: 'M10.5 20H13.5C17.2586 20 19.1379 20 20.3925 19.0091C20.5932 18.8506 20.7788 18.676 20.9472 18.4871C22 17.3062 22 15.5375 22 12C22 10.8169 22 9.8316 21.9606 9H2.03939C2 9.8316 2 10.8169 2 12C2 15.5375 2 17.3062 3.0528 18.4871C3.22119 18.676 3.40678 18.8506 3.60746 19.0091C4.86213 20 6.74142 20 10.5 20Z',
  d5: 'M15.1679 13.1679C15.5584 12.7774 16.1916 12.7774 16.5821 13.1679L18.875 15.4608L21.1679 13.1679C21.5584 12.7774 22.1916 12.7774 22.5821 13.1679C22.9726 13.5584 22.9726 14.1916 22.5821 14.5821L20.2892 16.875L22.5821 19.1679C22.9726 19.5584 22.9726 20.1916 22.5821 20.5821C22.1916 20.9726 21.5584 20.9726 21.1679 20.5821L18.875 18.2892L16.5821 20.5821C16.1916 20.9726 15.5584 20.9726 15.1679 20.5821C14.7774 20.1916 14.7774 19.5584 15.1679 19.1679L17.4608 16.875L15.1679 14.5821C14.7774 14.1916 14.7774 13.5584 15.1679 13.1679Z',
  d6: 'M17.8444 3.2536C16.7058 3.12498 15.2616 3.12499 13.4226 3.125H10.3275C8.48847 3.12499 7.04418 3.12498 5.90559 3.2536C4.74343 3.38488 3.80102 3.65862 3.01764 4.27729C2.78312 4.46249 2.56569 4.66705 2.36799 4.8888C1.70182 5.63601 1.40433 6.54169 1.26264 7.65285C1.24633 7.7807 1.23818 7.84463 1.25284 7.90079C1.27628 7.99054 1.34515 8.06875 1.43122 8.10335C1.48507 8.125 1.55246 8.125 1.68724 8.125H22.0628C22.1976 8.125 22.265 8.125 22.3188 8.10335C22.4049 8.06875 22.4737 7.99053 22.4972 7.90079C22.5118 7.84463 22.5037 7.7807 22.4874 7.65285C22.3457 6.54169 22.0482 5.63601 21.382 4.8888C21.1843 4.66705 20.9669 4.46249 20.7324 4.27729C19.949 3.65862 19.0066 3.38488 17.8444 3.2536Z',
  d7: 'M22.6233 10.6724C22.6249 11.0146 22.6257 11.1857 22.5401 11.2736C22.4545 11.3616 22.2428 11.3663 21.8194 11.3756C21.1982 11.3893 20.5812 11.6332 20.1072 12.1072L19.2993 12.9152C19.0993 13.1152 18.9993 13.2152 18.875 13.2152C18.7507 13.2152 18.6507 13.1152 18.4507 12.9152L17.6428 12.1072C16.6665 11.1309 15.0835 11.1309 14.1072 12.1072C13.1309 13.0835 13.1309 14.6665 14.1072 15.6428L14.9152 16.4507C15.1152 16.6507 15.2152 16.7507 15.2152 16.875C15.2152 16.9993 15.1152 17.0993 14.9152 17.2993L14.1072 18.1072C13.6331 18.5813 13.3893 19.1985 13.3756 19.8197C13.3663 20.2425 13.3617 20.4539 13.2742 20.5394C13.1868 20.625 13.0154 20.625 12.6727 20.625H10.3275C8.48845 20.625 7.04417 20.625 5.90558 20.4964C4.74342 20.3651 3.801 20.0914 3.01763 19.4727C2.78311 19.2875 2.56568 19.0829 2.36798 18.8612C1.70181 18.114 1.40432 17.2083 1.26263 16.0972C1.12498 15.0177 1.12499 13.6517 1.125 11.9277V11.8223C1.125 11.2465 1.12499 10.7107 1.13012 10.2121C1.13295 9.9364 1.13437 9.79856 1.22204 9.71178C1.30972 9.625 1.44861 9.625 1.72639 9.625H22.0236C22.3014 9.625 22.4403 9.625 22.528 9.71178C22.6156 9.79856 22.6171 9.9364 22.6199 10.2121C22.6214 10.3621 22.6225 10.5155 22.6233 10.6724Z',
  d8: 'M17.8453 3.2536C16.7067 3.12498 15.2625 3.12499 13.4235 3.125H10.3284C8.48937 3.12499 7.04508 3.12498 5.90649 3.2536C4.74433 3.38488 3.80192 3.65862 3.01854 4.27729C2.78402 4.46249 2.56659 4.66705 2.36889 4.8888C1.70272 5.63601 1.40523 6.54169 1.26354 7.65285C1.24723 7.7807 1.23908 7.84463 1.25374 7.90079C1.27718 7.99054 1.34605 8.06875 1.43212 8.10335C1.48597 8.125 1.55336 8.125 1.68814 8.125H22.0637C22.1985 8.125 22.2659 8.125 22.3197 8.10335C22.4058 8.06875 22.4746 7.99053 22.4981 7.90079C22.5127 7.84463 22.5046 7.7807 22.4883 7.65285C22.3466 6.54169 22.0491 5.63601 21.3829 4.8888C21.1852 4.66705 20.9678 4.46249 20.7333 4.27729C19.9499 3.65862 19.0075 3.38488 17.8453 3.2536Z',
  d9: 'M22 11V4H2V20H13',
  d10: 'M1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H22C22.4142 2.75 22.75 3.08579 22.75 3.5V7.75H1.25V3.5Z',
  d11: 'M1.25 9.25H22.75V13.1283L21.3362 11.7145L19.0433 14.0074L16.7504 11.7145L13.2148 15.25L15.5077 17.5429L13.2148 19.8358L13.629 20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V9.25Z',
  d12: 'M20.4573 17.543L22.7502 19.8359L21.3359 21.2502L19.043 18.9573L16.7502 21.2502L15.3359 19.8359L17.6288 17.543L15.3359 15.2502L16.7502 13.8359L19.043 16.1288L21.3359 13.8359L22.7502 15.2502L20.4573 17.543Z',
} as const;

export const IconCreditCardNotAcceptStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-not-accept-stroke-rounded IconCreditCardNotAcceptStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardNotAcceptDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-not-accept-duotone-rounded IconCreditCardNotAcceptDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardNotAcceptTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-not-accept-twotone-rounded IconCreditCardNotAcceptTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardNotAcceptSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-not-accept-solid-rounded IconCreditCardNotAcceptSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardNotAcceptBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-not-accept-bulk-rounded IconCreditCardNotAcceptBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardNotAcceptStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-not-accept-stroke-sharp IconCreditCardNotAcceptStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardNotAcceptSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-not-accept-solid-sharp IconCreditCardNotAcceptSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCreditCardNotAccept: TheIconSelfPack = {
  name: 'CreditCardNotAccept',
  StrokeRounded: IconCreditCardNotAcceptStrokeRounded,
  DuotoneRounded: IconCreditCardNotAcceptDuotoneRounded,
  TwotoneRounded: IconCreditCardNotAcceptTwotoneRounded,
  SolidRounded: IconCreditCardNotAcceptSolidRounded,
  BulkRounded: IconCreditCardNotAcceptBulkRounded,
  StrokeSharp: IconCreditCardNotAcceptStrokeSharp,
  SolidSharp: IconCreditCardNotAcceptSolidSharp,
};