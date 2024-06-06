import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.74061 17.0888C4.93047 19.4803 6.82417 21.511 9.26502 21.8118C10.1626 21.9223 11.0752 22 12 22C12.9247 22 13.8373 21.9223 14.7349 21.8118C17.1758 21.511 19.0694 19.4803 19.2593 17.0888C19.3909 15.4317 19.5 13.732 19.5 12C19.5 10.268 19.3909 8.56832 19.2593 6.91118C19.0694 4.51965 17.1758 2.48893 14.7349 2.1882C13.8373 2.07762 12.9247 2 12 2C11.0752 2 10.1626 2.07762 9.26502 2.1882C6.82417 2.48893 4.93047 4.51965 4.74061 6.91118C4.60903 8.56832 4.5 10.268 4.5 12C4.5 13.732 4.60903 15.4317 4.74061 17.0888Z',
  d2: 'M12 2L12 11',
  d3: 'M19 11H5',
  d4: 'M12 11L18 4',
  d5: 'M9.26502 21.8118C6.82417 21.511 4.93047 19.4803 4.74061 17.0888C4.60903 15.4317 4.5 13.7319 4.5 12C4.5 11.6654 4.50407 11.3321 4.51158 11H11.9884V2C11.9923 2 11.9961 2 12 2C12.9247 2 13.8373 2.07762 14.7349 2.1882C17.1758 2.48893 19.0694 4.51965 19.2593 6.91118C19.3909 8.56832 19.5 10.2681 19.5 12C19.5 13.7319 19.3909 15.4317 19.2593 17.0888C19.0694 19.4803 17.1758 21.511 14.7349 21.8118C13.8373 21.9223 12.9247 22 12 22C11.0752 22 10.1626 21.9223 9.26502 21.8118Z',
  d6: 'M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2L12.75 2ZM12 11H11.25C11.25 11.3139 11.4454 11.5945 11.7398 11.7034C12.0342 11.8123 12.3652 11.7264 12.5694 11.4881L12 11ZM11.25 2L11.25 11H12.75L12.75 2L11.25 2ZM12.5694 11.4881L18.5694 4.48809L17.4306 3.51191L11.4306 10.5119L12.5694 11.4881Z',
  d7: 'M14.7732 1.44126C13.8788 1.3303 12.9508 1.25 12 1.25C11.0493 1.25 10.1213 1.3303 9.22686 1.44126C6.39383 1.7927 4.20699 4.15593 3.98666 6.94946C3.85827 8.57698 3.75 10.2685 3.75 12C3.75 13.7315 3.85827 15.423 3.98666 17.0506C4.20699 19.8441 6.39397 22.2072 9.22695 22.5588C10.1213 22.6696 11.0493 22.75 12 22.75C12.9508 22.75 13.8789 22.6696 14.7733 22.5588C17.6061 22.2072 19.7932 19.8441 20.0134 17.0505C20.1418 15.423 20.25 13.7315 20.25 12C20.25 10.2685 20.1418 8.577 20.0134 6.94949C19.7932 4.15592 17.6061 1.7927 14.7732 1.44126ZM14.5359 3.38112C14.2352 3.34381 13.935 3.31075 13.6352 3.28363C13.3419 3.2571 13.1953 3.24383 13.0977 3.33305C13 3.42226 13 3.57236 13 3.87256V6.67387C13 7.35378 13 7.69374 13.196 7.76621C13.3919 7.83869 13.6131 7.58057 14.0556 7.06435L16.0974 4.68228C16.2936 4.45335 16.3917 4.33889 16.3669 4.19907C16.3421 4.05926 16.2228 3.99235 15.9842 3.85852C15.545 3.61219 15.0559 3.44563 14.5359 3.38112ZM10.3649 3.28363C10.6581 3.2571 10.8047 3.24384 10.9024 3.33305C11 3.42227 11 3.57237 11 3.87256V9.64998C11 9.93282 11 10.0742 10.9122 10.1621C10.8243 10.25 10.6829 10.25 10.4 10.25H6.3503C6.05672 10.25 5.90992 10.25 5.82124 10.1568C5.73256 10.0636 5.73979 9.91804 5.75426 9.62695C5.79632 8.7805 5.85587 7.93974 5.92178 7.10418C6.07012 5.22336 7.55901 3.61747 9.46427 3.38112C9.76496 3.34381 10.0651 3.31076 10.3649 3.28363ZM18.2458 9.62696C18.2603 9.91804 18.2675 10.0636 18.1789 10.1568C18.0902 10.25 17.9434 10.25 17.6498 10.25H15.2637C14.7007 10.25 14.4192 10.25 14.3389 10.0753C14.2586 9.9007 14.4418 9.68697 14.8082 9.25951L17.1329 6.54732C17.419 6.2135 17.5621 6.04659 17.7455 6.09691C17.9289 6.14723 17.9631 6.34314 18.0316 6.73498C18.0529 6.85663 18.0686 6.9798 18.0784 7.10417C18.1443 7.93974 18.2038 8.7805 18.2458 9.62696Z',
  d8: 'M14.7732 1.44126C13.8788 1.3303 12.9508 1.25 12 1.25C11.0493 1.25 10.1213 1.3303 9.22686 1.44126C6.39383 1.7927 4.20699 4.15593 3.98666 6.94946C3.85827 8.57698 3.75 10.2685 3.75 12C3.75 13.7315 3.85827 15.423 3.98666 17.0506C4.20699 19.8441 6.39397 22.2072 9.22695 22.5588C10.1213 22.6696 11.0493 22.75 12 22.75C12.9508 22.75 13.8789 22.6696 14.7733 22.5588C17.6061 22.2072 19.7932 19.8441 20.0134 17.0505C20.1418 15.423 20.25 13.7315 20.25 12C20.25 10.2685 20.1418 8.577 20.0134 6.94949C19.7932 4.15592 17.6061 1.7927 14.7732 1.44126ZM14.5364 3.38087C14.0232 3.31721 13.5116 3.26592 13.0005 3.23535V8.29747L16.507 4.2066C15.9481 3.76866 15.2734 3.4723 14.5364 3.38087ZM17.7571 5.82132C17.9321 6.22338 18.0435 6.65585 18.0789 7.10392C18.1544 8.06211 18.2216 9.02714 18.2637 9.99974H14.1756L17.7571 5.82132ZM5.92226 7.10396C5.84667 8.06214 5.77945 9.02715 5.73738 9.99974H11.0005V3.23536C10.4894 3.26593 9.97789 3.31721 9.46474 3.38087C7.55949 3.61722 6.0706 5.22313 5.92226 7.10396Z',
};

export const IconMouseRightClick03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-03-stroke-rounded IconMouseRightClick03StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-03-duotone-rounded IconMouseRightClick03DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-03-twotone-rounded IconMouseRightClick03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-03-solid-rounded IconMouseRightClick03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-03-bulk-rounded IconMouseRightClick03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-03-stroke-sharp IconMouseRightClick03StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconMouseRightClick03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-03-solid-sharp IconMouseRightClick03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouseRightClick03: TheIconSelfPack = {
  name: 'MouseRightClick03',
  StrokeRounded: IconMouseRightClick03StrokeRounded,
  DuotoneRounded: IconMouseRightClick03DuotoneRounded,
  TwotoneRounded: IconMouseRightClick03TwotoneRounded,
  SolidRounded: IconMouseRightClick03SolidRounded,
  BulkRounded: IconMouseRightClick03BulkRounded,
  StrokeSharp: IconMouseRightClick03StrokeSharp,
  SolidSharp: IconMouseRightClick03SolidSharp,
};