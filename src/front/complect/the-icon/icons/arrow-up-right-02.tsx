import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 11L6 18',
  d2: 'M15.541 6.08278L14.2992 6.19567C12.2873 6.37857 11.2814 6.47002 11.0447 7.12388C10.8079 7.77774 11.5222 8.49198 12.9507 9.92046L14.0795 11.0493C15.508 12.4778 16.2223 13.1921 16.8761 12.9553C17.53 12.7186 17.6214 11.7127 17.8043 9.70078L17.9172 8.45902C18.0273 7.24766 18.0824 6.64198 17.7202 6.27979C17.358 5.9176 16.7523 5.97266 15.541 6.08278Z',
  d3: 'M18.3766 5.62435C18.0079 5.25565 17.548 5.15219 17.1133 5.13003C16.7114 5.10954 16.212 5.15499 15.65 5.20613L14.2956 5.32925C13.3423 5.41588 12.5435 5.48846 11.9578 5.62865C11.3718 5.76889 10.7203 6.03986 10.4655 6.74345C10.2108 7.44704 10.5379 8.07232 10.8982 8.55516C11.2407 9.01405 11.7702 9.54925 12.4032 10.1825L5.41789 17.1678C5.02737 17.5583 5.02737 18.1915 5.41789 18.582C5.80842 18.9725 6.44158 18.9725 6.83211 18.582L13.8174 11.5967C14.4511 12.2301 14.9867 12.7601 15.4458 13.1027C15.9286 13.4631 16.5539 13.7902 17.2575 13.5354C17.9611 13.2807 18.2321 12.6291 18.3723 12.0432C18.5125 11.4574 18.5851 10.6586 18.6717 9.70536V9.70535L18.7948 8.35094C18.846 7.78898 18.8914 7.2896 18.8709 6.88767C18.8488 6.45293 18.7453 5.99304 18.3766 5.62435Z',
  d4: 'M13.8321 10.1679C14.2226 10.5584 14.2226 11.1916 13.8321 11.5821L6.83211 18.5821C6.44158 18.9726 5.80842 18.9726 5.41789 18.5821C5.02737 18.1916 5.02737 17.5584 5.41789 17.1679L12.4179 10.1679C12.8084 9.77737 13.4416 9.77737 13.8321 10.1679Z',
  d5: 'M17.1133 5.13003C17.548 5.15219 18.0079 5.25565 18.3766 5.62435C18.7453 5.99304 18.8488 6.45293 18.8709 6.88767C18.8914 7.2896 18.846 7.78898 18.7948 8.35094L18.6717 9.70535V9.70536C18.5851 10.6586 18.5125 11.4574 18.3723 12.0432C18.2321 12.6291 17.9611 13.2807 17.2575 13.5354C16.5539 13.7902 15.9286 13.4631 15.4458 13.1027C14.9631 12.7425 14.396 12.1753 13.7191 11.4984L13.7191 11.4984L12.5026 10.2818L12.5025 10.2818C11.8257 9.605 11.2585 9.03786 10.8982 8.55516C10.5379 8.07232 10.2108 7.44704 10.4655 6.74345C10.7203 6.03986 11.3718 5.76889 11.9578 5.62865C12.5435 5.48846 13.3423 5.41588 14.2956 5.32925L15.65 5.20613C16.212 5.15499 16.7114 5.10954 17.1133 5.13003Z',
  d6: 'M14 10L6 18',
  d7: 'M14.4654 9.53605L6.00293 18M17.2933 12.364L18.0004 6L11.637 6.70764L17.2933 12.364Z',
  d8: 'M17.8685 13.9097L19.0028 5L10.0903 6.13149L13.2723 9.31348L4.99995 17.5858L6.41416 19L14.6865 10.7277L17.8685 13.9097Z',
} as const;

export const IconArrowUpRight02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-right-02-stroke-rounded IconArrowUpRight02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowUpRight02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-right-02-duotone-rounded IconArrowUpRight02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconArrowUpRight02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-right-02-twotone-rounded IconArrowUpRight02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconArrowUpRight02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-right-02-solid-rounded IconArrowUpRight02SolidRounded"
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

export const IconArrowUpRight02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-right-02-bulk-rounded IconArrowUpRight02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUpRight02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-right-02-stroke-sharp IconArrowUpRight02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUpRight02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-right-02-solid-sharp IconArrowUpRight02SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowUpRight02: TheIconSelfPack = {
  name: 'ArrowUpRight02',
  StrokeRounded: IconArrowUpRight02StrokeRounded,
  DuotoneRounded: IconArrowUpRight02DuotoneRounded,
  TwotoneRounded: IconArrowUpRight02TwotoneRounded,
  SolidRounded: IconArrowUpRight02SolidRounded,
  BulkRounded: IconArrowUpRight02BulkRounded,
  StrokeSharp: IconArrowUpRight02StrokeSharp,
  SolidSharp: IconArrowUpRight02SolidSharp,
};