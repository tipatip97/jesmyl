import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 6H18.2763C20.5344 6 21.6635 6 21.9445 6.67836C22.2255 7.35672 21.4271 8.1551 19.8304 9.75184L9.75184 19.8304C8.15509 21.4271 7.35672 22.2255 6.67836 21.9445C6 21.6635 6 20.5344 6 18.2763V11',
  d2: 'M17.5 12H18C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16V17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17V16.5',
  d3: 'M9.75184 19.8304L19.8304 9.75184C21.4271 8.1551 22.2255 7.35672 21.9445 6.67836C21.6635 6 20.5344 6 18.2763 6H11C11 6 11.3724 7.86184 9.62987 9.66684C8.07367 11.2788 6 11 6 11V18.2763C6 20.5344 6 21.6635 6.67836 21.9445C7.35672 22.2255 8.15509 21.4271 9.75184 19.8304Z',
  d4: 'M12.3748 5.26574C12.169 5.26389 12.0661 5.26297 12.0066 5.32389C11.947 5.3848 11.9503 5.49273 11.9571 5.70857C11.9591 5.77296 11.9601 5.83761 11.9601 5.90249C11.9601 9.2704 9.22988 12.0006 5.86197 12.0006C5.80975 12.0006 5.75768 12 5.70577 11.9987C5.4912 11.9933 5.38392 11.9906 5.32344 12.0501C5.26296 12.1096 5.26388 12.2119 5.26571 12.4164L5.3424 20.9574C5.43229 21.5931 5.65156 22.3315 6.39156 22.638C7.13156 22.9445 7.80869 22.5775 8.32177 22.1915C8.84828 21.7955 9.4774 21.1663 10.238 20.4056L20.4052 10.2385C21.1659 9.47781 21.7951 8.84868 22.1912 8.32216C22.5771 7.80908 22.9441 7.13196 22.6376 6.39196C22.3311 5.65196 21.5928 5.43269 20.9571 5.34279L12.3748 5.26574Z',
  d5: 'M13.032 19.7266C12.7919 19.967 12.6718 20.0872 12.662 20.2791C12.6522 20.471 12.7345 20.5722 12.8992 20.7748C12.9472 20.8338 12.9989 20.8913 13.0548 20.9471C13.5102 21.4026 14.077 21.5882 14.7048 21.6726C15.2996 21.7526 16.0488 21.7526 16.9473 21.7526H18.0513C18.9498 21.7526 19.699 21.7526 20.2938 21.6726C20.9216 21.5882 21.4884 21.4026 21.9438 20.9471C22.3993 20.4916 22.585 19.9248 22.6694 19.297C22.7494 18.7023 22.7493 17.953 22.7493 17.0546V15.9506C22.7493 15.0521 22.7494 14.3029 22.6694 13.7081C22.585 13.0803 22.3993 12.5135 21.9438 12.058C21.8856 11.9998 21.8256 11.946 21.7638 11.8962C21.5609 11.7327 21.4594 11.651 21.268 11.6613C21.0766 11.6716 20.9568 11.7916 20.7171 12.0316L13.032 19.7266Z',
  d6: 'M11 6.00001L22 6L5.99805 22L5.99998 11',
  d7: 'M16 12H22V21H13V15',
  d8: 'M1.25 6.5C1.25 3.60051 3.60051 1.25 6.5 1.25C9.3995 1.25 11.75 3.60051 11.75 6.5C11.75 9.3995 9.3995 11.75 6.5 11.75C3.60051 11.75 1.25 9.3995 1.25 6.5Z',
  d9: 'M12.25 18.9306V21.75H22.75V11.25H19.9315L12.25 18.9306Z',
  d10: 'M5.24961 13.1344L5.24805 21.9999C5.24799 22.3032 5.4307 22.5767 5.71095 22.6929C5.99121 22.809 6.31382 22.7449 6.52834 22.5304L22.5303 6.53036C22.7448 6.31587 22.809 5.99327 22.6929 5.71301C22.5768 5.43274 22.3033 5.25 22 5.25L13.1345 5.25001C13.2103 5.65509 13.25 6.07291 13.25 6.5C13.25 10.2279 10.2279 13.25 6.5 13.25C6.07277 13.25 5.65481 13.2103 5.24961 13.1344Z',
};

export const IconGeometricShapes02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-02-stroke-rounded IconGeometricShapes02StrokeRounded"
    >
      <circle 
        cx="6.5" 
        cy="6.5" 
        r="4.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconGeometricShapes02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-02-duotone-rounded IconGeometricShapes02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="6.5" 
        cy="6.5" 
        r="4.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconGeometricShapes02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-02-twotone-rounded IconGeometricShapes02TwotoneRounded"
    >
      <circle 
        cx="6.5" 
        cy="6.5" 
        r="4.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      />
    </TheIconWrapper>
  );
};

export const IconGeometricShapes02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-02-solid-rounded IconGeometricShapes02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="5.94141" 
        cy="5.99219" 
        r="4.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGeometricShapes02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-02-bulk-rounded IconGeometricShapes02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5.94141" 
        cy="5.99219" 
        r="4.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGeometricShapes02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-02-stroke-sharp IconGeometricShapes02StrokeSharp"
    >
      <circle 
        cx="6.5" 
        cy="6.5" 
        r="4.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconGeometricShapes02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="geometric-shapes-02-solid-sharp IconGeometricShapes02SolidSharp"
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGeometricShapes02: TheIconSelfPack = {
  name: 'GeometricShapes02',
  StrokeRounded: IconGeometricShapes02StrokeRounded,
  DuotoneRounded: IconGeometricShapes02DuotoneRounded,
  TwotoneRounded: IconGeometricShapes02TwotoneRounded,
  SolidRounded: IconGeometricShapes02SolidRounded,
  BulkRounded: IconGeometricShapes02BulkRounded,
  StrokeSharp: IconGeometricShapes02StrokeSharp,
  SolidSharp: IconGeometricShapes02SolidSharp,
};