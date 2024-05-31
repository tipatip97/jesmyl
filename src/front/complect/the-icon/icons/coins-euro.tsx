import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z',
  d2: 'M3.15657 11C2.42523 12.1176 2 13.4535 2 14.8888C2 18.8162 5.18378 22 9.11116 22C10.5465 22 11.8824 21.5748 13 20.8434',
  d3: 'M17 12.4923C16.5216 13.3957 15.6512 14 14.6568 14C13.147 14 11.9231 12.6071 11.9231 10.8889V9.11111C11.9231 7.39289 13.147 6 14.6568 6C15.6512 6 16.5216 6.60426 17 7.50774M11 10H14.9231',
  d4: 'M2.98563 10.205C3.25523 9.87581 3.39003 9.7112 3.521 9.75811C3.65198 9.80502 3.65158 10.0334 3.6508 10.4902C3.65079 10.4959 3.65078 10.5017 3.65078 10.5075C3.65078 15.9432 8.05728 20.3497 13.493 20.3497C13.4988 20.3497 13.5045 20.3497 13.5103 20.3497C13.9671 20.3489 14.1955 20.3485 14.2424 20.4795C14.2893 20.6105 14.1247 20.7453 13.7954 21.0149C12.4709 22.0995 10.7774 22.7502 8.93196 22.7502C4.68947 22.7502 1.25024 19.311 1.25024 15.0685C1.25024 13.223 1.90103 11.5296 2.98563 10.205Z',
  d5: 'M14.0002 1.25024C9.16775 1.25024 5.25024 5.16775 5.25024 10.0002C5.25024 14.8327 9.16775 18.7502 14.0002 18.7502C18.8327 18.7502 22.7502 14.8327 22.7502 10.0002C22.7502 5.16775 18.8327 1.25024 14.0002 1.25024ZM14.657 5.25024C12.6449 5.25024 11.1733 7.07298 11.1733 9.11136V9.25024H11.0002C10.586 9.25024 10.2502 9.58603 10.2502 10.0002C10.2502 10.4145 10.586 10.7502 11.0002 10.7502H11.1733V10.8891C11.1733 12.9275 12.6449 14.7502 14.657 14.7502C15.9738 14.7502 17.077 13.9504 17.6631 12.8434C17.8569 12.4774 17.7173 12.0235 17.3512 11.8297C16.9851 11.6359 16.5312 11.7755 16.3374 12.1416C15.9668 12.8416 15.3291 13.2502 14.657 13.2502C13.6496 13.2502 12.6733 12.2872 12.6733 10.8891V10.7502H14.9233C15.3375 10.7502 15.6733 10.4145 15.6733 10.0002C15.6733 9.58603 15.3375 9.25024 14.9233 9.25024H12.6733V9.11136C12.6733 7.71329 13.6496 6.75024 14.657 6.75024C15.3291 6.75024 15.9668 7.15889 16.3374 7.85893C16.5312 8.225 16.9851 8.36463 17.3512 8.17081C17.7173 7.97699 17.8569 7.52311 17.6631 7.15704C17.077 6.05012 15.9738 5.25024 14.657 5.25024Z',
  d6: 'M5.25024 10.0002C5.25024 5.16775 9.16775 1.25024 14.0002 1.25024C18.8327 1.25024 22.7502 5.16775 22.7502 10.0002C22.7502 14.8327 18.8327 18.7502 14.0002 18.7502C9.16775 18.7502 5.25024 14.8327 5.25024 10.0002Z',
  d7: 'M11.1733 9.11136C11.1733 7.07298 12.6449 5.25024 14.657 5.25024C15.9738 5.25024 17.077 6.05012 17.6631 7.15704C17.8569 7.52311 17.7173 7.97699 17.3512 8.17081C16.9851 8.36463 16.5312 8.225 16.3374 7.85893C15.9668 7.15888 15.3291 6.75024 14.657 6.75024C13.6496 6.75024 12.6733 7.71329 12.6733 9.11136V9.25024H14.9233C15.3375 9.25024 15.6733 9.58603 15.6733 10.0002C15.6733 10.4145 15.3375 10.7502 14.9233 10.7502H12.6733V10.8891C12.6733 12.2872 13.6496 13.2502 14.657 13.2502C15.3291 13.2502 15.9668 12.8416 16.3374 12.1416C16.5312 11.7755 16.9851 11.6359 17.3512 11.8297C17.7173 12.0235 17.8569 12.4774 17.6631 12.8434C17.077 13.9504 15.9738 14.7502 14.657 14.7502C12.6449 14.7502 11.1733 12.9275 11.1733 10.8891V10.7502H11.0002C10.586 10.7502 10.2502 10.4145 10.2502 10.0002C10.2502 9.58603 10.586 9.25024 11.0002 9.25024H11.1733V9.11136Z',
  d8: 'M17 12.4923C16.5216 13.3957 15.6512 14 14.6568 14C13.147 14 11.9231 12.6071 11.9231 10.8889V9.11111C11.9231 7.39289 13.147 6 14.6568 6C15.6512 6 16.5216 6.60426 17 7.50774M10 10H14.9231',
  d9: 'M4.03233 7.60083C3.84776 8.37045 3.75 9.17383 3.75 10C3.75 15.661 8.33908 20.25 14 20.25C14.8262 20.25 15.6296 20.1523 16.3992 19.9677C14.802 21.6797 12.526 22.75 10 22.75C5.16751 22.75 1.25 18.8325 1.25 14C1.25 11.474 2.32039 9.19802 4.03233 7.60083Z',
  d10: 'M14 1.25C9.16751 1.25 5.25 5.16751 5.25 10C5.25 14.8325 9.16751 18.75 14 18.75C18.8325 18.75 22.75 14.8325 22.75 10C22.75 5.16751 18.8325 1.25 14 1.25ZM14.6568 5.25C12.6446 5.25 11.1731 7.07274 11.1731 9.11111V9.25H10V10.75H11.1731V10.8889C11.1731 12.9273 12.6446 14.75 14.6568 14.75C15.9736 14.75 17.0767 13.9501 17.6628 12.8432L16.3372 12.1413C15.9665 12.8414 15.3289 13.25 14.6568 13.25C13.6494 13.25 12.6731 12.287 12.6731 10.8889V10.75H14.9231V9.25H12.6731V9.11111C12.6731 7.71305 13.6494 6.75 14.6568 6.75C15.3289 6.75 15.9665 7.15864 16.3372 7.85868L17.6628 7.1568C17.0767 6.04988 15.9736 5.25 14.6568 5.25Z',
} as const;

export const IconCoinsEuroStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-euro-stroke-rounded IconCoinsEuroStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCoinsEuroDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-euro-duotone-rounded IconCoinsEuroDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCoinsEuroTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-euro-twotone-rounded IconCoinsEuroTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconCoinsEuroSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-euro-solid-rounded IconCoinsEuroSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsEuroBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-euro-bulk-rounded IconCoinsEuroBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCoinsEuroStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-euro-stroke-sharp IconCoinsEuroStrokeSharp"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsEuroSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-euro-solid-sharp IconCoinsEuroSolidSharp"
    >
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

export const iconPackOfCoinsEuro: TheIconSelfPack = {
  name: 'CoinsEuro',
  StrokeRounded: IconCoinsEuroStrokeRounded,
  DuotoneRounded: IconCoinsEuroDuotoneRounded,
  TwotoneRounded: IconCoinsEuroTwotoneRounded,
  SolidRounded: IconCoinsEuroSolidRounded,
  BulkRounded: IconCoinsEuroBulkRounded,
  StrokeSharp: IconCoinsEuroStrokeSharp,
  SolidSharp: IconCoinsEuroSolidSharp,
};