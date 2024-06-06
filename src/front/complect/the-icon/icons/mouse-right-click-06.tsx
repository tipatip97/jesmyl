import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5 5.5V2M10.5 12V9',
  d2: 'M10.5 22C16.5 22 18 17.49 18 12C18 6.50998 16.5 2 10.5 2C4.49993 2 3 6.50996 3 12C3 17.49 4.49993 22 10.5 22Z',
  d3: 'M18 12L3 12',
  d4: 'M19 3.16746L19.3811 2M19.9713 5.56746L21 6',
  d5: 'M9 7C9 6.53406 9 6.30109 9.07612 6.11732C9.17761 5.87229 9.37229 5.67761 9.61732 5.57612C9.80109 5.5 10.0341 5.5 10.5 5.5C10.9659 5.5 11.1989 5.5 11.3827 5.57612C11.6277 5.67761 11.8224 5.87229 11.9239 6.11732C12 6.30109 12 6.53406 12 7V7.5C12 7.96594 12 8.19891 11.9239 8.38268C11.8224 8.62771 11.6277 8.82239 11.3827 8.92388C11.1989 9 10.9659 9 10.5 9C10.0341 9 9.80109 9 9.61732 8.92388C9.37229 8.82239 9.17761 8.62771 9.07612 8.38268C9 8.19891 9 7.96594 9 7.5V7Z',
  d6: 'M18 12C18 17.49 16.5 22 10.5 22C4.49995 22 3.00001 17.49 3 12H10.5V9C10.9659 9 11.1989 8.99995 11.3827 8.92383C11.6277 8.82234 11.8224 8.62767 11.9239 8.38264C12 8.19887 12 7.9659 12 7.49995V6.99995C12 6.53401 12 6.30104 11.9239 6.11727C11.8224 5.87224 11.6277 5.67757 11.3827 5.57607C11.1989 5.49995 10.9659 5.49995 10.5 5.49995V2C4.49997 2 3 6.50998 3 12C3 12 3 12 3 12C3 6.50998 4.49997 2 10.5 2C16.5 2 18 6.50994 18 12Z',
  d7: 'M10.3532 4.875H10.375H10.3968H10.3968C10.6111 4.87499 10.8079 4.87498 10.9732 4.88626C11.1509 4.89838 11.3462 4.92599 11.5447 5.00821C11.9735 5.18583 12.3142 5.52651 12.4918 5.95531C12.574 6.15381 12.6016 6.34915 12.6137 6.52679C12.625 6.69212 12.625 6.88896 12.625 7.10324V7.64676C12.625 7.86104 12.625 8.05789 12.6137 8.22321C12.6016 8.40085 12.574 8.59619 12.4918 8.7947C12.3142 9.2235 11.9735 9.56418 11.5447 9.74179C11.3462 9.82401 11.1509 9.85163 10.9732 9.86375C10.8079 9.87503 10.611 9.87502 10.3968 9.875H10.3532C10.139 9.87502 9.94212 9.87503 9.77679 9.86375C9.59915 9.85163 9.40381 9.82401 9.20531 9.74179C8.77651 9.56418 8.43583 9.2235 8.25821 8.7947C8.17599 8.59619 8.14838 8.40085 8.13626 8.22321C8.12498 8.0579 8.12499 7.86106 8.125 7.6468V7.64676V7.625V7.125V7.10325V7.1032C8.12499 6.88894 8.12498 6.69211 8.13626 6.52679C8.14838 6.34915 8.17599 6.15381 8.25821 5.95531C8.43583 5.52651 8.77651 5.18583 9.20531 5.00821C9.40381 4.92599 9.59915 4.89838 9.77679 4.88626C9.94211 4.87498 10.1389 4.87499 10.3532 4.875H10.3532Z',
  d8: 'M10.375 1.375C13.5756 1.375 15.731 2.61358 17.0234 4.71154C18.2612 6.72103 18.625 9.39061 18.625 12.125C18.625 14.8594 18.2612 17.529 17.0234 19.5385C15.731 21.6364 13.5756 22.875 10.375 22.875C7.17447 22.875 5.01906 21.6364 3.72667 19.5385C2.48878 17.529 2.125 14.8594 2.125 12.125C2.125 9.39061 2.48878 6.72103 3.72667 4.71155C5.01906 2.61359 7.17448 1.375 10.375 1.375ZM16.6482 10.7582C16.664 11.0443 16.6719 11.1874 16.5832 11.2812C16.4944 11.375 16.3485 11.375 16.0566 11.375H11.9754C11.6925 11.375 11.5511 11.375 11.4632 11.2871C11.3754 11.1993 11.3754 11.0579 11.3754 10.775V9.12501C11.3754 8.57272 10.9277 8.12501 10.3754 8.12501C9.82309 8.12501 9.37538 8.57272 9.37538 9.12501V10.775C9.37538 11.0579 9.37538 11.1993 9.28751 11.2871C9.19964 11.375 9.05822 11.375 8.77538 11.375H4.6942C4.4023 11.375 4.25634 11.375 4.16758 11.2812C4.07882 11.1874 4.08673 11.0443 4.10255 10.7582C4.21498 8.72498 4.59945 7.00346 5.37666 5.7418C6.05955 4.63325 7.09037 3.80752 8.71448 3.48184C9.0086 3.42286 9.15565 3.39337 9.26552 3.48339C9.37538 3.57341 9.37538 3.73205 9.37538 4.04934V5.62501C9.37538 6.17729 9.82309 6.62501 10.3754 6.62501C10.9277 6.62501 11.3754 6.17729 11.3754 5.62501V4.04933C11.3754 3.73204 11.3754 3.5734 11.4852 3.48338C11.5951 3.39336 11.7422 3.42285 12.0363 3.48182C13.6604 3.80749 14.6912 4.63323 15.3741 5.74179C16.1513 7.00344 16.5358 8.72496 16.6482 10.7582Z',
  d9: 'M19.5662 1.17464C19.0412 1.00325 18.4766 1.28992 18.3052 1.81493L17.9241 2.98239C17.7527 3.5074 18.0394 4.07196 18.5644 4.24335C19.0894 4.41475 19.654 4.12808 19.8254 3.60307L20.2065 2.43561C20.3779 1.91059 20.0912 1.34604 19.5662 1.17464ZM18.9242 5.30511C18.7102 5.81422 18.9493 6.40048 19.4585 6.61455L20.4871 7.04709C20.9962 7.26117 21.5825 7.02199 21.7966 6.51288C22.0106 6.00378 21.7715 5.41752 21.2624 5.20345L20.2337 4.7709C19.7246 4.55683 19.1383 4.79601 18.9242 5.30511Z',
  d10: 'M18.5 3.5L19.3811 2M19 5.5L21 6',
  d11: 'M12 5.5H9V9H12V5.5Z',
  d12: 'M19.0266 1.25L18.1455 2.75L19.87 3.76299L20.7511 2.26299L19.0266 1.25ZM21.7503 4.78635L19.7503 4.28635L19.2652 6.22664L21.2652 6.72664L21.7503 4.78635Z',
  d13: 'M17.1484 4.58654C15.856 2.48858 13.7006 1.25 10.5 1.25C7.29948 1.25 5.14406 2.48859 3.85167 4.58655C2.61378 6.59603 2.25 9.26561 2.25 12C2.25 14.7344 2.61378 17.404 3.85167 19.4135C5.14406 21.5114 7.29947 22.75 10.5 22.75C13.7006 22.75 15.856 21.5114 17.1484 19.4135C18.3862 17.404 18.75 14.7344 18.75 12C18.75 9.26561 18.3862 6.59603 17.1484 4.58654ZM15.4997 5.61667C16.3232 6.95351 16.7058 8.80667 16.791 10.9999H11.501V9.49989H12.001C12.4152 9.49989 12.751 9.1641 12.751 8.74989V5.74989C12.751 5.33567 12.4152 4.99989 12.001 4.99989H11.501V3.25586C13.5134 3.47338 14.7284 4.36464 15.4997 5.61667ZM4.2109 10.9999C4.29613 8.80669 4.67871 6.95353 5.50224 5.61668C6.27351 4.36466 7.48858 3.4734 9.50096 3.25587V4.99989H9.00096C8.58675 4.99989 8.25096 5.33567 8.25096 5.74989V8.74989C8.25096 9.1641 8.58675 9.49989 9.00096 9.49989H9.50096V10.9999H4.2109Z',
};

export const IconMouseRightClick06StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-06-stroke-rounded IconMouseRightClick06StrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick06DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-06-duotone-rounded IconMouseRightClick06DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick06TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-06-twotone-rounded IconMouseRightClick06TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick06SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-06-solid-rounded IconMouseRightClick06SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconMouseRightClick06BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-06-bulk-rounded IconMouseRightClick06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
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

export const IconMouseRightClick06StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-06-stroke-sharp IconMouseRightClick06StrokeSharp"
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick06SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-06-solid-sharp IconMouseRightClick06SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouseRightClick06: TheIconSelfPack = {
  name: 'MouseRightClick06',
  StrokeRounded: IconMouseRightClick06StrokeRounded,
  DuotoneRounded: IconMouseRightClick06DuotoneRounded,
  TwotoneRounded: IconMouseRightClick06TwotoneRounded,
  SolidRounded: IconMouseRightClick06SolidRounded,
  BulkRounded: IconMouseRightClick06BulkRounded,
  StrokeSharp: IconMouseRightClick06StrokeSharp,
  SolidSharp: IconMouseRightClick06SolidSharp,
};