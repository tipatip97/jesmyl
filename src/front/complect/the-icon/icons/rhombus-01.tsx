import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.05622 4.78867C9.91534 2.92956 10.8449 2 12 2C13.1551 2 14.0847 2.92956 15.9438 4.78867L19.2113 8.05622C21.0704 9.91534 22 10.8449 22 12C22 13.1551 21.0704 14.0847 19.2113 15.9438L15.9438 19.2113C14.0847 21.0704 13.1551 22 12 22C10.8449 22 9.91534 21.0704 8.05622 19.2113L4.78867 15.9438C2.92956 14.0847 2 13.1551 2 12C2 10.8449 2.92956 9.91534 4.78867 8.05622L8.05622 4.78867Z',
  d2: 'M12 22C10.8449 22 9.91534 21.0704 8.05622 19.2113L4.78867 15.9438C2.92956 14.0847 2 13.1551 2 12C2 10.8449 2.92956 9.91534 4.78867 8.05622L8.05622 4.78867C9.91534 2.92956 10.8449 2 12 2',
  d3: 'M9.83718 2.1009C10.5131 1.58522 11.1925 1.25 12 1.25C12.8075 1.25 13.4869 1.58522 14.1628 2.1009C14.8121 2.59631 15.5388 3.323 16.4356 4.21986L19.7801 7.56436L19.7802 7.5644C20.677 8.46122 21.4037 9.18787 21.8991 9.83718C22.4148 10.5131 22.75 11.1925 22.75 12C22.75 12.8075 22.4148 13.4869 21.8991 14.1628C21.4037 14.8121 20.677 15.5388 19.7802 16.4356L16.4357 19.7801L16.4356 19.7801C15.5388 20.677 14.8121 21.4037 14.1628 21.8991C13.4869 22.4148 12.8075 22.75 12 22.75C11.1925 22.75 10.5131 22.4148 9.83718 21.8991C9.18788 21.4037 8.46124 20.677 7.56444 19.7802L7.56441 19.7802L4.21988 16.4356C3.32301 15.5388 2.59631 14.8121 2.1009 14.1628C1.58522 13.4869 1.25 12.8075 1.25 12C1.25 11.1925 1.58522 10.5131 2.1009 9.83718C2.59631 9.18787 3.323 8.4612 4.21986 7.56437L7.56437 4.21986C8.4612 3.323 9.18787 2.59631 9.83718 2.1009Z',
  d4: 'M9.83718 2.1009C10.5131 1.58522 11.1925 1.25 12 1.25C12.8075 1.25 13.4869 1.58522 14.1628 2.1009C14.8121 2.59631 15.5388 3.323 16.4356 4.21986L18.1079 5.89211L5.89215 18.1079L4.21988 16.4356C3.32301 15.5388 2.59631 14.8121 2.1009 14.1628C1.58522 13.4869 1.25 12.8075 1.25 12C1.25 11.1925 1.58522 10.5131 2.1009 9.83718C2.59631 9.18787 3.323 8.4612 4.21986 7.56437L7.56437 4.21986C8.4612 3.323 9.18787 2.59631 9.83718 2.1009Z',
  d5: 'M19.7787 7.56292C20.6755 8.45974 21.4022 9.18639 21.8976 9.83569C22.4133 10.5116 22.7485 11.191 22.7485 11.9985C22.7485 12.806 22.4133 13.4855 21.8976 14.1613C21.4022 14.8106 20.6755 15.5373 19.7787 16.4341L16.4342 19.7786L16.4341 19.7787C15.5373 20.6755 14.8107 21.4022 14.1613 21.8976C13.4855 22.4133 12.806 22.7485 11.9985 22.7485C11.191 22.7485 10.5116 22.4133 9.83569 21.8976C9.1864 21.4022 8.45977 20.6756 7.56298 19.7787L7.56293 19.7787L5.89062 18.1064L18.1064 5.89062L19.7786 7.56287L19.7787 7.56292Z',
  d6: 'M1.99902 12L11.9992 22L21.999 12.0003L11.9992 2L1.99902 12Z',
  d7: 'M11.9992 1.25C12.1981 1.25 12.3888 1.32902 12.5295 1.46968L22.5294 11.4699C22.8222 11.7628 22.8222 12.2377 22.5294 12.5306L12.5295 22.5303C12.2366 22.8232 11.7617 22.8232 11.4688 22.5303L1.4687 12.5303C1.32804 12.3897 1.24902 12.1989 1.24902 12C1.24902 11.8011 1.32804 11.6103 1.4687 11.4697L11.4688 1.46967C11.6095 1.32901 11.8002 1.25 11.9992 1.25Z',
} as const;

export const IconRhombus01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rhombus-01-stroke-rounded IconRhombus01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRhombus01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rhombus-01-duotone-rounded IconRhombus01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRhombus01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rhombus-01-twotone-rounded IconRhombus01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconRhombus01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rhombus-01-solid-rounded IconRhombus01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRhombus01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rhombus-01-bulk-rounded IconRhombus01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconRhombus01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rhombus-01-stroke-sharp IconRhombus01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRhombus01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rhombus-01-solid-sharp IconRhombus01SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRhombus01: TheIconSelfPack = {
  name: 'Rhombus01',
  StrokeRounded: IconRhombus01StrokeRounded,
  DuotoneRounded: IconRhombus01DuotoneRounded,
  TwotoneRounded: IconRhombus01TwotoneRounded,
  SolidRounded: IconRhombus01SolidRounded,
  BulkRounded: IconRhombus01BulkRounded,
  StrokeSharp: IconRhombus01StrokeSharp,
  SolidSharp: IconRhombus01SolidSharp,
};