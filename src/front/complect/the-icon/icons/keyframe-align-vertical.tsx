import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.8546 8.89114C11.3832 8.29705 11.6475 8 12 8C12.3525 8 12.6168 8.29705 13.1454 8.89114L14.4455 10.3522C15.1485 11.1423 15.5 11.5374 15.5 12C15.5 12.4626 15.1485 12.8577 14.4455 13.6478L13.1454 15.1089C12.6168 15.703 12.3525 16 12 16C11.6475 16 11.3832 15.703 10.8546 15.1089L9.55451 13.6478C8.8515 12.8577 8.5 12.4626 8.5 12C8.5 11.5374 8.8515 11.1423 9.55451 10.3522L10.8546 8.89114Z',
  d2: 'M12 19L12 22',
  d3: 'M12 2L12 5',
  d4: 'M10.8489 7.45815C11.1193 7.2302 11.4956 7 12 7C12.5044 7 12.8807 7.2302 13.1511 7.45815C13.3835 7.65403 13.624 7.9245 13.857 8.18647L13.8925 8.2264L15.1926 9.6875L15.2281 9.72745C15.549 10.0879 15.8485 10.4245 16.0601 10.732C16.2937 11.0713 16.5 11.4848 16.5 12C16.5 12.5152 16.2937 12.9287 16.0601 13.268C15.8485 13.5755 15.549 13.9121 15.2281 14.2725L15.1926 14.3125L13.8925 15.7736L13.857 15.8135C13.624 16.0755 13.3835 16.346 13.1511 16.5418C12.8807 16.7698 12.5044 17 12 17C11.4956 17 11.1193 16.7698 10.8489 16.5418C10.6165 16.346 10.376 16.0755 10.143 15.8135L10.1075 15.7736L8.80743 14.3125L8.77188 14.2725L8.77187 14.2725C8.45104 13.9121 8.1515 13.5755 7.93988 13.268C7.70631 12.9287 7.5 12.5152 7.5 12C7.5 11.4848 7.70631 11.0713 7.93988 10.732C8.1515 10.4245 8.45104 10.0879 8.77188 9.72745L8.80743 9.6875L10.1075 8.22641L10.143 8.18648L10.143 8.18647C10.376 7.9245 10.6165 7.65403 10.8489 7.45815Z',
  d5: 'M12 18C12.5523 18 13 18.4477 13 19L13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22L11 19C11 18.4477 11.4477 18 12 18Z',
  d6: 'M12 1C12.5523 1 13 1.44772 13 2L13 5C13 5.55229 12.5523 6 12 6C11.4477 6 11 5.55229 11 5L11 2C11 1.44772 11.4477 1 12 1Z',
  d7: 'M15.5 12L12 8L8.5 12L12 16L15.5 12Z',
  d8: 'M11.9883 6.75L16.4883 12L11.9883 17.25L7.48828 12L11.9883 6.75Z',
  d9: 'M11 22L11 19L13 19L13 22L11 22Z',
  d10: 'M11 5L11 2L13 2L13 5L11 5Z',
};

export const IconKeyframeAlignVerticalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-align-vertical-stroke-rounded IconKeyframeAlignVerticalStrokeRounded"
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

export const IconKeyframeAlignVerticalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-align-vertical-duotone-rounded IconKeyframeAlignVerticalDuotoneRounded"
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

export const IconKeyframeAlignVerticalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-align-vertical-twotone-rounded IconKeyframeAlignVerticalTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconKeyframeAlignVerticalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-align-vertical-solid-rounded IconKeyframeAlignVerticalSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframeAlignVerticalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-align-vertical-bulk-rounded IconKeyframeAlignVerticalBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframeAlignVerticalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-align-vertical-stroke-sharp IconKeyframeAlignVerticalStrokeSharp"
    >
      <path 
        d={d.d7} 
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
      />
    </TheIconWrapper>
  );
};

export const IconKeyframeAlignVerticalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-align-vertical-solid-sharp IconKeyframeAlignVerticalSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfKeyframeAlignVertical: TheIconSelfPack = {
  name: 'KeyframeAlignVertical',
  StrokeRounded: IconKeyframeAlignVerticalStrokeRounded,
  DuotoneRounded: IconKeyframeAlignVerticalDuotoneRounded,
  TwotoneRounded: IconKeyframeAlignVerticalTwotoneRounded,
  SolidRounded: IconKeyframeAlignVerticalSolidRounded,
  BulkRounded: IconKeyframeAlignVerticalBulkRounded,
  StrokeSharp: IconKeyframeAlignVerticalStrokeSharp,
  SolidSharp: IconKeyframeAlignVerticalSolidSharp,
};