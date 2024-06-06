import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 8C4.01099 8.5559 2 9.59492 2 10.7849C2 12.5606 6.47715 14 12 14C17.5228 14 22 12.5606 22 10.7849C22 9.59492 19.989 8.5559 17 8',
  d2: 'M7.32229 8.84003C6.87335 8.21459 6.96834 7.81402 7.15831 7.01288C7.68534 4.79037 9.6202 3 12 3C14.3798 3 16.3147 4.79037 16.8417 7.01288C17.0317 7.81402 17.1267 8.21459 16.6777 8.84003C15.4532 10.546 8.31188 10.2187 7.32229 8.84003Z',
  d3: 'M7 14L5 21M17 14L19 21',
  d4: 'M11.9998 19H12.0088',
  d5: 'M22 10.7849C22 12.5606 17.5228 14 12 14C6.47715 14 2 12.5606 2 10.7849C2 9.59492 4.01099 8.5559 7 8C7.01 8.27552 7.09988 8.53018 7.32229 8.84003C8.31188 10.2187 15.4532 10.546 16.6777 8.84003C16.9001 8.53018 16.989 8.27552 16.999 8C19.988 8.5559 22 9.59492 22 10.7849Z',
  d6: 'M17.705 7.25127C19.0022 7.52984 20.1299 7.90757 20.98 8.37124C21.8937 8.8696 22.75 9.61816 22.75 10.6599C22.75 11.444 22.2561 12.0614 21.668 12.5085C21.0681 12.9644 20.2475 13.3429 19.3006 13.6473C17.3984 14.2589 14.8174 14.625 12 14.625C9.18262 14.625 6.60156 14.2589 4.69938 13.6473C3.75252 13.3429 2.93185 12.9644 2.33199 12.5085C1.74387 12.0614 1.25 11.444 1.25 10.6599C1.25 9.61816 2.10629 8.8696 3.02 8.37124C3.87011 7.90757 4.99781 7.52984 6.29498 7.25127C6.32748 7.05618 6.37268 6.86927 6.41355 6.70026L6.42752 6.6424C7.01996 4.18024 9.21298 2.12593 12 2.12593C14.787 2.12593 16.98 4.18025 17.5725 6.6424L17.5865 6.70026C17.6273 6.86927 17.6725 7.05618 17.705 7.25127ZM8.29249 7.07822C8.71018 5.34231 10.2257 4.01481 12 4.01481C13.7743 4.01481 15.2898 5.34231 15.7075 7.07822C15.8081 7.49635 15.8366 7.64503 15.8332 7.75612L15.8331 7.75803C15.8319 7.79755 15.8299 7.86281 15.7043 8.03523C15.6853 8.06135 15.6045 8.1461 15.3833 8.25126C15.1697 8.35275 14.879 8.4477 14.5153 8.52619C13.7878 8.68316 12.8717 8.75249 11.9346 8.73416C10.9988 8.71587 10.0882 8.6111 9.37594 8.44328C9.01886 8.35915 8.73647 8.26492 8.53454 8.17129C8.34875 8.08515 8.29086 8.02857 8.29086 8.02857C8.17006 7.86113 8.1681 7.79704 8.1669 7.75803L8.16685 7.75612C8.16335 7.64503 8.19188 7.49635 8.29249 7.07822Z',
  d7: 'M7.27498 12.9137C7.80601 13.0655 8.11351 13.6189 7.96178 14.15L5.96178 21.15C5.81006 21.681 5.25657 21.9885 4.72554 21.8368C4.1945 21.6851 3.88701 21.1316 4.03873 20.6005L6.03873 13.6005C6.19046 13.0695 6.74394 12.762 7.27498 12.9137ZM16.7255 12.9137C17.2566 12.762 17.8101 13.0695 17.9618 13.6005L19.9618 20.6005C20.1135 21.1316 19.806 21.6851 19.275 21.8368C18.7439 21.9885 18.1905 21.681 18.0387 21.15L16.0387 14.15C15.887 13.6189 16.1945 13.0655 16.7255 12.9137Z',
  d8: 'M10.5 18.875C10.5 18.0466 11.1686 17.375 11.9933 17.375H12.0067C12.8314 17.375 13.5 18.0466 13.5 18.875C13.5 19.7034 12.8314 20.375 12.0067 20.375H11.9933C11.1686 20.375 10.5 19.7034 10.5 18.875Z',
  d9: 'M17.9537 7.93044C19.1464 8.20296 20.1847 8.56153 20.98 8.99532C21.8937 9.49368 22.75 10.2422 22.75 11.284C22.75 12.0681 22.2561 12.6855 21.668 13.1325C21.0681 13.5885 20.2475 13.967 19.3006 14.2714C17.3984 14.883 14.8174 15.2491 12 15.2491C9.18262 15.2491 6.60156 14.883 4.69938 14.2714C3.75252 13.967 2.93185 13.5885 2.33199 13.1325C1.74387 12.6855 1.25 12.0681 1.25 11.284C1.25 10.2422 2.10629 9.49368 3.02 8.99532C3.81529 8.56155 4.85353 8.20299 6.04618 7.93047C6.08015 7.72223 6.12769 7.52272 6.17066 7.34243L6.18523 7.28117C6.80343 4.67418 9.09177 2.49902 11.9999 2.49902C14.9081 2.49902 17.1964 4.67419 17.8146 7.28117L17.8292 7.34244C17.8722 7.52271 17.9197 7.72222 17.9537 7.93044ZM12.0001 4.49902C10.1486 4.49902 8.56725 5.90461 8.13139 7.74263C8.02641 8.18536 7.99665 8.34278 8.00029 8.46041L8.00035 8.46243C8.0016 8.50373 8.00364 8.57159 8.1297 8.74888C8.1297 8.74888 8.19011 8.80879 8.38397 8.9C8.59468 8.99914 8.88935 9.09891 9.26194 9.18798C10.0052 9.36568 10.9554 9.47661 11.9318 9.49598C12.9096 9.51538 13.8656 9.44198 14.6247 9.27577C15.0042 9.19267 15.3076 9.09213 15.5304 8.98467C15.7613 8.87333 15.8455 8.78359 15.8654 8.75593C15.9964 8.57338 15.9985 8.50427 15.9998 8.46243L15.9998 8.46041C16.0035 8.34278 15.9737 8.18536 15.8687 7.74263C15.4329 5.90461 13.8515 4.49902 12.0001 4.49902Z',
  d10: 'M4.03809 20.9502L6.03809 13.9502L7.96113 14.4996L5.96113 21.4996L4.03809 20.9502ZM18.0381 21.4996L16.0381 14.4996L17.9611 13.9502L19.9611 20.9502L18.0381 21.4996Z',
  d11: 'M10.5 19.499C10.5 18.6706 11.1716 17.999 12 17.999H12.009C12.8374 17.999 13.509 18.6706 13.509 19.499C13.509 20.3275 12.8374 20.999 12.009 20.999H12C11.1716 20.999 10.5 20.3275 10.5 19.499Z',
};

export const IconUfoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ufo-stroke-rounded IconUfoStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconUfoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ufo-duotone-rounded IconUfoDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconUfoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ufo-twotone-rounded IconUfoTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUfoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ufo-solid-rounded IconUfoSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUfoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ufo-bulk-rounded IconUfoBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconUfoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ufo-stroke-sharp IconUfoStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconUfoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ufo-solid-sharp IconUfoSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUfo: TheIconSelfPack = {
  name: 'Ufo',
  StrokeRounded: IconUfoStrokeRounded,
  DuotoneRounded: IconUfoDuotoneRounded,
  TwotoneRounded: IconUfoTwotoneRounded,
  SolidRounded: IconUfoSolidRounded,
  BulkRounded: IconUfoBulkRounded,
  StrokeSharp: IconUfoStrokeSharp,
  SolidSharp: IconUfoSolidSharp,
};