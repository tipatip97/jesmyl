import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z',
  d2: 'M8 6.99997C8 6.99997 10.946 3.00001 12 3C13.0541 2.99999 16 7 16 7',
  d3: 'M16 17C16 17 13.054 21 12 21C10.9459 21 8 17 8 17',
  d4: 'M8.5 18C8.5 18 11.0777 21 12 21C12.9223 21 15.5 18 15.5 18',
  d5: 'M15.5 5.99998C15.5 5.99998 12.9223 3.00001 12 3C11.0777 2.99999 8.5 6 8.5 6',
  d6: 'M9.25 12.0001C9.25 10.4813 10.4812 9.25012 12 9.25012C13.5188 9.25012 14.75 10.4813 14.75 12.0001C14.75 13.5189 13.5188 14.7501 12 14.7501C10.4812 14.7501 9.25 13.5189 9.25 12.0001Z',
  d7: 'M11.0092 2.31546C11.2352 2.17921 11.5898 2 12 2C12.4103 2 12.7648 2.17921 12.9908 2.31546C13.2443 2.46825 13.4965 2.66762 13.7319 2.87562C14.2049 3.29362 14.7054 3.83189 15.1504 4.34439C15.5997 4.86186 16.0124 5.3764 16.3116 5.75977C16.4602 5.95025 16.7149 6.28739 16.8025 6.40341L16.8049 6.40654C17.0286 6.71027 17.0626 7.11447 16.8925 7.45111C16.7223 7.78775 16.3772 8 16 8L8 7.99997C7.6228 7.99997 7.27769 7.78771 7.10753 7.45107C6.93737 7.11442 6.97113 6.71067 7.19482 6.40695L7.19759 6.40328C7.28561 6.28675 7.54002 5.94991 7.68844 5.75974C7.98763 5.37637 8.40036 4.86184 8.84965 4.34437C9.29462 3.83188 9.79513 3.29361 10.2682 2.87561C10.5036 2.66762 10.7558 2.46825 11.0092 2.31546Z',
  d8: 'M7.10753 16.5489C7.27769 16.2122 7.6228 16 8 16L16 16C16.3772 16 16.7223 16.2123 16.8925 16.5489C17.0626 16.8856 17.0289 17.2893 16.8052 17.593L16.8024 17.5967C16.7144 17.7132 16.46 18.0501 16.3116 18.2403C16.0124 18.6236 15.5996 19.1382 15.1504 19.6556C14.7054 20.1681 14.2049 20.7064 13.7318 21.1244C13.4964 21.3324 13.2442 21.5317 12.9908 21.6845C12.7648 21.8208 12.4102 22 12 22C11.5897 22 11.2352 21.8208 11.0092 21.6845C10.7557 21.5317 10.5035 21.3324 10.2681 21.1244C9.79506 20.7064 9.29457 20.1681 8.8496 19.6556C8.40032 19.1381 7.9876 18.6236 7.68841 18.2402C7.53978 18.0498 7.28516 17.7126 7.19752 17.5966L7.19513 17.5935C6.97145 17.2897 6.93737 16.8855 7.10753 16.5489Z',
  d9: 'M14.8287 12.0001L12.0003 14.8285L9.17188 12.0001L12.0003 9.17163L14.8287 12.0001Z',
  d10: 'M8 6.99997L12 3L16 7',
  d11: 'M16 17L12 21L8 17',
  d12: 'M12 8.5L15.5 12L12 15.5L8.5 12L12 8.5Z',
  d13: 'M12 3L16 7L8 6.99997L12 3Z',
  d14: 'M12 21L16 17L8 17L12 21Z',
};

export const IconVerticalScrollPointStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-scroll-point-stroke-rounded IconVerticalScrollPointStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconVerticalScrollPointDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-scroll-point-duotone-rounded IconVerticalScrollPointDuotoneRounded"
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

export const IconVerticalScrollPointTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-scroll-point-twotone-rounded IconVerticalScrollPointTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconVerticalScrollPointSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-scroll-point-solid-rounded IconVerticalScrollPointSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconVerticalScrollPointBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-scroll-point-bulk-rounded IconVerticalScrollPointBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconVerticalScrollPointStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-scroll-point-stroke-sharp IconVerticalScrollPointStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVerticalScrollPointSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-scroll-point-solid-sharp IconVerticalScrollPointSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfVerticalScrollPoint: TheIconSelfPack = {
  name: 'VerticalScrollPoint',
  StrokeRounded: IconVerticalScrollPointStrokeRounded,
  DuotoneRounded: IconVerticalScrollPointDuotoneRounded,
  TwotoneRounded: IconVerticalScrollPointTwotoneRounded,
  SolidRounded: IconVerticalScrollPointSolidRounded,
  BulkRounded: IconVerticalScrollPointBulkRounded,
  StrokeSharp: IconVerticalScrollPointStrokeSharp,
  SolidSharp: IconVerticalScrollPointSolidSharp,
};