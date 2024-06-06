import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 10C22 6.13401 20.5 4 18 3C16.5342 2.37764 14.6088 2 12.5 2C10.3912 2 8.46579 2.37764 7 3',
  d2: 'M7 3C8.46579 2.37764 10.3912 2 12.5 2C14.6088 2 16.5342 2.37764 18 3C20.5 4 22 6.13401 22 10C22 13.866 20.5 16 18 17C16.5342 17.6224 14.6088 18 12.5 18C10.3912 18 8.46579 17.6224 7 17',
  d3: 'M9 22L18 13',
  d4: 'M2 15L7 10',
  d5: 'M3 10C3 6.13401 4.79086 3 7 3C9.20914 3 11 6.13401 11 10C11 13.866 9.20914 17 7 17C5.51321 17 4.21588 15.5804 3.52643 13.4736',
  d6: 'M6.99981 10H7.00879',
  d7: 'M18 22L16 20',
  d8: 'M22 10C22 6.13401 20.5 4 18 3C16.5342 2.37764 14.6088 2 12.5 2C10.3912 2 8.46579 2.37764 7 3C9.20914 3 11 6.13401 11 10C11 13.866 9.20914 17 7 17C8.46579 17.6224 10.3912 18 12.5 18C14.6088 18 16.5342 17.6224 18 17C20.5 16 22 13.866 22 10Z',
  d9: 'M5.26283 5.56057C4.67115 6.61643 4.275 8.13976 4.275 9.875C4.275 10.41 3.84967 10.8438 3.325 10.8438C2.80033 10.8438 2.375 10.41 2.375 9.875C2.375 7.86506 2.82951 5.99776 3.61316 4.5993C4.38146 3.22824 5.58762 2.125 7.125 2.125C8.66238 2.125 9.86854 3.22824 10.6368 4.5993C11.4205 5.99776 11.875 7.86506 11.875 9.875C11.875 11.8849 11.4205 13.7522 10.6368 15.1507C9.86854 16.5218 8.66238 17.625 7.125 17.625C6.0952 17.625 5.20144 17.1199 4.50726 16.3861C3.81667 15.656 3.28191 14.6622 2.92223 13.5413C2.75905 13.0328 3.03101 12.4857 3.52966 12.3193C4.02831 12.1529 4.56482 12.4302 4.728 12.9387C5.02329 13.8589 5.43224 14.5732 5.87475 15.041C6.31365 15.505 6.74235 15.6875 7.125 15.6875C7.6863 15.6875 8.38014 15.2727 8.98717 14.1894C9.57885 13.1336 9.975 11.6102 9.975 9.875C9.975 8.13976 9.57885 6.61643 8.98717 5.56057C8.38014 4.47729 7.6863 4.0625 7.125 4.0625C6.5637 4.0625 5.86986 4.47729 5.26283 5.56057Z',
  d10: 'M7.12052 8.375C6.29457 8.375 5.625 9.04657 5.625 9.875C5.625 9.90302 5.62577 9.93086 5.62728 9.95851L1.41789 14.1679C1.02737 14.5584 1.02737 15.1916 1.41789 15.5821C1.80842 15.9726 2.44158 15.9726 2.83211 15.5821L7.04128 11.3729C7.06752 11.3743 7.09394 11.375 7.12052 11.375H7.12948C7.95543 11.375 8.625 10.7034 8.625 9.875C8.625 9.04657 7.95543 8.375 7.12948 8.375H7.12052Z',
  d11: 'M15.4179 19.1679C15.0274 19.5584 15.0274 20.1916 15.4179 20.5821L17.4179 22.5821C17.8084 22.9726 18.4416 22.9726 18.8321 22.5821C19.2226 22.1916 19.2226 21.5584 18.8321 21.1679L16.8321 19.1679C16.4416 18.7774 15.8084 18.7774 15.4179 19.1679Z',
  d12: 'M6.83203 2.18465C8.40611 1.51631 10.4341 1.125 12.6251 1.125C14.8129 1.125 16.838 1.51511 18.411 2.18158C19.7885 2.73406 20.9237 3.61556 21.7052 4.91337C22.4822 6.20387 22.8751 7.84855 22.8751 9.875C22.8751 11.9015 22.4822 13.5461 21.7052 14.8366C20.9237 16.1344 19.7884 17.0159 18.411 17.5684C17.131 18.1107 15.5518 18.47 13.8291 18.5851L18.8321 13.5821C19.2226 13.1916 19.2226 12.5584 18.8321 12.1679C18.4416 11.7774 17.8084 11.7774 17.4179 12.1679L11.0311 18.5547C9.45709 18.4141 8.01613 18.0681 6.83203 17.5653C8.20815 16.683 10.9234 14.0391 10.7757 10.5222C10.591 6.12608 8.94692 3.2443 6.83203 2.18465ZM8.41789 21.1679L11.0311 18.5547C11.5495 18.601 12.0823 18.625 12.6251 18.625C13.0327 18.625 13.4347 18.6115 13.8291 18.5851L9.83211 22.5821C9.44158 22.9726 8.80842 22.9726 8.41789 22.5821C8.02737 22.1916 8.02737 21.5584 8.41789 21.1679Z',
  d13: 'M6.96579 2.12897C8.52021 1.49463 10.4956 1.125 12.6251 1.125C14.8129 1.125 16.838 1.51511 18.411 2.18158C19.7885 2.73406 20.9237 3.61556 21.7052 4.91337C22.4822 6.20387 22.8751 7.84855 22.8751 9.875C22.8751 11.9015 22.4822 13.5461 21.7052 14.8366C20.9237 16.1344 19.7884 17.0159 18.411 17.5684C17.131 18.1107 15.5518 18.47 13.8291 18.5851L18.8321 13.5821C19.2226 13.1916 19.2226 12.5584 18.8321 12.1679C18.4416 11.7774 17.8084 11.7774 17.4179 12.1679L11.0311 18.5547C9.51579 18.4193 8.12381 18.0936 6.96559 17.6209C6.00286 17.5719 5.16537 17.0818 4.50726 16.3861C3.81667 15.656 3.28191 14.6622 2.92223 13.5413C2.75905 13.0328 3.03101 12.4857 3.52966 12.3193C4.02831 12.1529 4.56482 12.4302 4.728 12.9387C5.02329 13.8589 5.43224 14.5732 5.87475 15.041C6.31365 15.505 6.74235 15.6875 7.125 15.6875C7.6863 15.6875 8.38014 15.2727 8.98717 14.1894C9.57885 13.1336 9.975 11.6102 9.975 9.875C9.975 8.13976 9.57885 6.61643 8.98717 5.56057C8.38014 4.47729 7.6863 4.0625 7.125 4.0625C6.5637 4.0625 5.86986 4.47729 5.26283 5.56057C4.67115 6.61643 4.275 8.13976 4.275 9.875C4.275 10.41 3.84967 10.8438 3.325 10.8438C2.80033 10.8438 2.375 10.41 2.375 9.875C2.375 7.86506 2.82951 5.99776 3.61316 4.5993C4.35474 3.27593 5.50425 2.20207 6.96579 2.12897Z',
  d14: 'M11.0311 18.5547L8.41789 21.1679C8.02737 21.5584 8.02737 22.1916 8.41789 22.5821C8.80842 22.9726 9.44158 22.9726 9.83211 22.5821L13.8291 18.5851C13.4347 18.6115 13.0327 18.625 12.6251 18.625C12.0823 18.625 11.5495 18.601 11.0311 18.5547Z',
  d15: 'M22 9.99988C22 6.13388 20.5 3.99988 18 2.99988C16.5342 2.37751 14.6088 1.99988 12.5 1.99988C10.3912 1.99988 8.46579 2.37751 7 2.99988',
  d16: 'M12.5001 1.24976C10.3706 1.24976 8.39521 1.61938 6.84079 2.25372C5.37925 2.32682 4.22974 3.40068 3.48816 4.72405C2.70451 6.12252 2.25 7.98981 2.25 9.99976H4.15C4.15 8.26452 4.54615 6.74119 5.13783 5.68532C5.74486 4.60205 6.4387 4.18726 7 4.18726C7.5613 4.18726 8.25514 4.60205 8.86217 5.68532C9.45385 6.74119 9.85 8.26452 9.85 9.99976C9.85 11.735 9.45385 13.2583 8.86217 14.3142C8.25514 15.3975 7.5613 15.8123 7 15.8123C6.61735 15.8123 6.18865 15.6297 5.74975 15.1657C5.30724 14.6979 4.89829 13.9837 4.603 13.0635L2.79723 13.6661C3.15691 14.7869 3.69167 15.7808 4.38226 16.5108C5.04037 17.2066 5.87786 17.6967 6.84059 17.7457C8.00888 18.2225 9.41502 18.5498 10.9457 18.6829L8.29297 21.3356L9.70718 22.7498L13.7504 18.7066C13.3411 18.7351 12.9237 18.7497 12.5001 18.7497C11.9712 18.7497 11.4515 18.7269 10.9457 18.6829L17.293 12.3357L18.7072 13.7499L13.7504 18.7066C15.455 18.5883 17.0175 18.2306 18.286 17.6932C19.6634 17.1407 20.7987 16.2592 21.5802 14.9614C22.3572 13.6709 22.7501 12.0262 22.7501 9.99976C22.7501 7.9733 22.3572 6.32863 21.5802 5.03812C20.7987 3.74032 19.6635 2.85882 18.286 2.30634C16.713 1.63987 14.6879 1.24976 12.5001 1.24976Z',
  d17: 'M16.7072 19.3356L18.7072 21.3356L17.293 22.7498L15.293 20.7498L16.7072 19.3356Z',
  d18: 'M6.95703 8.49988C6.1286 8.49988 5.45703 9.17145 5.45703 9.99988C5.45703 10.0279 5.4578 10.0558 5.45932 10.0835L1.25 14.2928L2.66421 15.7071L6.87367 11.4976C6.90127 11.4991 6.92906 11.4999 6.95703 11.4999H6.96601C7.79444 11.4999 8.46601 10.8283 8.46601 9.99988C8.46601 9.17145 7.79444 8.49988 6.96601 8.49988H6.95703Z',
};

export const IconBedug02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bedug-02-stroke-rounded IconBedug02StrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBedug02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bedug-02-duotone-rounded IconBedug02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBedug02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bedug-02-twotone-rounded IconBedug02TwotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
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
      />
    </TheIconWrapper>
  );
};

export const IconBedug02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bedug-02-solid-rounded IconBedug02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconBedug02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bedug-02-bulk-rounded IconBedug02BulkRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBedug02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bedug-02-stroke-sharp IconBedug02StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBedug02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bedug-02-solid-sharp IconBedug02SolidSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBedug02: TheIconSelfPack = {
  name: 'Bedug02',
  StrokeRounded: IconBedug02StrokeRounded,
  DuotoneRounded: IconBedug02DuotoneRounded,
  TwotoneRounded: IconBedug02TwotoneRounded,
  SolidRounded: IconBedug02SolidRounded,
  BulkRounded: IconBedug02BulkRounded,
  StrokeSharp: IconBedug02StrokeSharp,
  SolidSharp: IconBedug02SolidSharp,
};