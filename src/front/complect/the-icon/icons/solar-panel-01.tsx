import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.6745 4H8.32553C6.86148 4 6.12945 4 5.56252 4.41264C4.99559 4.82528 4.72372 5.55596 4.17998 7.01733L3.287 9.41732C2.1773 12.3998 1.62245 13.891 2.28654 14.9455C2.95062 16 4.4446 16 7.43256 16H16.5674C19.5554 16 21.0494 16 21.7135 14.9455C22.3775 13.891 21.8227 12.3998 20.713 9.41732L19.82 7.01732C19.2763 5.55596 19.0044 4.82528 18.4375 4.41264C17.8706 4 17.1385 4 15.6745 4Z',
  d2: 'M12 16V20M12 20H15M12 20H9',
  d3: 'M10 4L8 16',
  d4: 'M14 4L16 16',
  d5: 'M20.5 10H3.5',
  d6: 'M19.8198 7.01732L20.7128 9.41732L20.7138 9.41993C20.7882 9.61989 20.8601 9.81314 20.9293 10H14.9998L15.9998 16H7.99979L8.99979 10H3.07031C3.13981 9.81235 3.21203 9.61826 3.28676 9.4174L3.28679 9.41732L4.17977 7.01733C4.72351 5.55596 4.99537 4.82528 5.56231 4.41264C6.12924 4 6.86127 4 8.32532 4H9.99979L8.99979 10H14.9998L13.9998 4H15.6743C17.1383 4 17.8703 4 18.4373 4.41264C19.0042 4.82528 19.2761 5.55595 19.8198 7.01731L19.8198 7.01732Z',
  d7: 'M10 4L8 16M14 4L16 16M20.5 10H3.5',
  d8: 'M12 15.25C12.4142 15.25 12.75 15.5858 12.75 16V19.25H15C15.4142 19.25 15.75 19.5858 15.75 20C15.75 20.4142 15.4142 20.75 15 20.75H9C8.58579 20.75 8.25 20.4142 8.25 20C8.25 19.5858 8.58579 19.25 9 19.25H11.25V16C11.25 15.5858 11.5858 15.25 12 15.25Z',
  d9: 'M9.20669 3.25H8.2826H8.28257H8.28255C7.58705 3.24998 7.00063 3.24996 6.51957 3.30676C6.00705 3.36727 5.54398 3.49844 5.12107 3.80626C4.70227 4.11107 4.42569 4.51443 4.19057 4.98845C3.96625 5.44068 3.75088 6.01957 3.49074 6.71877L3.49074 6.71878L2.56306 9.21202C2.55833 9.22473 2.55361 9.23743 2.5489 9.2501H8.34953L9.20669 3.25ZM1.99864 10.7501C1.72851 11.5101 1.51608 12.1698 1.38926 12.7422C1.1784 13.6938 1.16385 14.5704 1.65181 15.3452C2.14928 16.1351 2.94228 16.4615 3.87037 16.6089C4.7412 16.7472 5.88115 16.75 7.27811 16.75L8.13524 10.7501H1.99864ZM8.79334 16.75H15.2067L14.3495 10.7501H9.65047L8.79334 16.75ZM16.7219 16.75C18.1188 16.75 19.2587 16.7472 20.1294 16.6089C21.0575 16.4615 21.8505 16.1351 22.348 15.3452C22.836 14.5704 22.8214 13.6938 22.6105 12.7422C22.4837 12.1698 22.2713 11.5101 22.0012 10.7501H15.8648L16.7219 16.75ZM21.4509 9.2501C21.4462 9.23741 21.4415 9.22471 21.4367 9.21198L20.5091 6.71876L20.5091 6.71872L20.509 6.71865C20.2489 6.01951 20.0335 5.44065 19.8092 4.98844C19.5741 4.51443 19.2975 4.11107 18.8787 3.80626C18.4558 3.49844 17.9928 3.36727 17.4802 3.30676C16.9992 3.24996 16.4128 3.24998 15.7173 3.25H15.7172H15.7172H14.7933L15.6505 9.2501H21.4509ZM13.2781 3.25H10.7219L9.86476 9.2501H14.1352L13.2781 3.25Z',
  d10: 'M15.7172 3.25C16.4127 3.24998 16.9992 3.24996 17.4802 3.30675C17.9928 3.36727 18.4558 3.49844 18.8787 3.80625C19.2975 4.11107 19.5741 4.51443 19.8092 4.98844C20.0336 5.44067 20.2489 6.01955 20.5091 6.71872L20.5091 6.71875L21.4367 9.21198C21.9739 10.6555 22.4048 11.8138 22.6105 12.7422C22.8214 13.6938 22.836 14.5704 22.348 15.3452C21.8505 16.1351 21.0575 16.4615 20.1294 16.6089C19.2406 16.7501 18.0714 16.75 16.6347 16.75H16.6347H7.36514H7.36507C5.92839 16.75 4.7592 16.7501 3.87037 16.6089C2.94228 16.4615 2.14928 16.1351 1.65181 15.3452C1.16385 14.5704 1.1784 13.6938 1.38926 12.7422C1.59497 11.8138 2.02596 10.6555 2.56306 9.21202L3.49074 6.71877L3.49074 6.71877C3.75088 6.01957 3.96625 5.44068 4.19057 4.98844C4.42569 4.51443 4.70227 4.11107 5.12107 3.80625C5.54398 3.49844 6.00705 3.36727 6.51957 3.30675C7.00064 3.24996 7.58707 3.24998 8.28257 3.25H8.2826H15.7172H15.7172Z',
  d11: 'M2.54928 9.2501H8.34991L9.20707 3.25H10.7223L9.86514 9.2501H14.1356L13.2785 3.25H14.7937L15.6509 9.2501H21.4513C21.6519 9.7891 21.8374 10.2881 22.0016 10.7501H15.8651L16.7223 16.75C16.6933 16.75 16.6643 16.75 16.6351 16.75H15.207L14.3499 10.7501H9.65085L8.79372 16.75H7.36552C7.33643 16.75 7.30737 16.75 7.2785 16.75L8.13563 10.7501H1.99902C2.16321 10.2881 2.34872 9.7891 2.54928 9.2501Z',
  d12: 'M11.25 16.75V19.25H9C8.58579 19.25 8.25 19.5858 8.25 20C8.25 20.4142 8.58579 20.75 9 20.75H15C15.4142 20.75 15.75 20.4142 15.75 20C15.75 19.5858 15.4142 19.25 15 19.25H12.75V16.75H11.25Z',
  d13: 'M22 15.8353L19 3.99707H5L2 15.8353H22Z',
  d14: 'M12 15.8352V19.7813M12 19.7813H15M12 19.7813H9',
  d15: 'M3.31055 9.94678H20.4321',
  d16: 'M13.9653 3.77832L16.0273 15.7822M10.1323 4.03651L7.9541 15.9547',
  d17: 'M12.75 15.25V19.25H15.75V20.75H8.25V19.25H11.25V15.25H12.75Z',
  d18: 'M13.7781 3.25H10.2219L9.36476 9.2499H14.6352L13.7781 3.25Z',
  d19: 'M8.70666 3.25H5.00001C4.65586 3.25 4.35587 3.48422 4.2724 3.8181L2.91445 9.2499H7.84953L8.70666 3.25Z',
  d20: 'M2.53945 10.7499L1.2724 15.8181C1.21639 16.0422 1.26672 16.2795 1.40885 16.4616C1.55098 16.6436 1.76906 16.75 2.00001 16.75H6.77809L7.63524 10.7499H2.53945Z',
  d21: 'M8.29331 16.75H15.7067L14.8495 10.7499H9.15047L8.29331 16.75Z',
  d22: 'M17.2219 16.75H22C22.231 16.75 22.449 16.6436 22.5912 16.4616C22.7333 16.2795 22.7836 16.0422 22.7276 15.8181L21.4606 10.7499H16.3648L17.2219 16.75Z',
  d23: 'M21.0856 9.2499L19.7276 3.8181C19.6441 3.48422 19.3442 3.25 19 3.25H15.2933L16.1505 9.2499H21.0856Z',
};

export const IconSolarPanel01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-01-stroke-rounded IconSolarPanel01StrokeRounded"
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

export const IconSolarPanel01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-01-duotone-rounded IconSolarPanel01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconSolarPanel01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-01-twotone-rounded IconSolarPanel01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-01-solid-rounded IconSolarPanel01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-01-bulk-rounded IconSolarPanel01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-01-stroke-sharp IconSolarPanel01StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-01-solid-sharp IconSolarPanel01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSolarPanel01: TheIconSelfPack = {
  name: 'SolarPanel01',
  StrokeRounded: IconSolarPanel01StrokeRounded,
  DuotoneRounded: IconSolarPanel01DuotoneRounded,
  TwotoneRounded: IconSolarPanel01TwotoneRounded,
  SolidRounded: IconSolarPanel01SolidRounded,
  BulkRounded: IconSolarPanel01BulkRounded,
  StrokeSharp: IconSolarPanel01StrokeSharp,
  SolidSharp: IconSolarPanel01SolidSharp,
};