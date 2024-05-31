import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 6H16.75C18.8567 6 19.91 6 20.6667 6.50559C20.9943 6.72447 21.2755 7.00572 21.4944 7.33329C22 8.08996 22 9.14331 22 11.25C22 14.7612 22 16.5167 21.1573 17.7779C20.975 18.0508 20.7666 18.3045 20.5355 18.5355M3.46447 18.5355C2 17.0711 2 14.714 2 10V6.94427C2 5.1278 2 4.21956 2.38032 3.53806C2.65142 3.05227 3.05227 2.65142 3.53806 2.38032C4.21956 2 5.1278 2 6.94427 2C8.10802 2 8.6899 2 9.19926 2.19101C10.3622 2.62712 10.8418 3.68358 11.3666 4.73313L12 6',
  d2: 'M18.25 21.25L16 19L16 16M18.25 20.5C17.8358 20.5 17.5 20.8358 17.5 21.25C17.5 21.6642 17.8358 22 18.25 22C18.6642 22 19 21.6642 19 21.25C19 20.8358 18.6642 20.5 18.25 20.5Z',
  d3: 'M5.75 21.25L8 19L8 16M5.75 20.5C6.16421 20.5 6.5 20.8358 6.5 21.25C6.5 21.6642 6.16421 22 5.75 22C5.33579 22 5 21.6642 5 21.25C5 20.8358 5.33579 20.5 5.75 20.5Z',
  d4: 'M12 21.25L12 16M12 20.5C11.5858 20.5 11.25 20.8358 11.25 21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25C12.75 20.8358 12.4142 20.5 12 20.5Z',
  d5: 'M3.46447 18.5355C2 17.0711 2 14.714 2 10V6.94427C2 5.1278 2 4.21956 2.38032 3.53806C2.65142 3.05227 3.05227 2.65142 3.53806 2.38032C4.21956 2 5.1278 2 6.94427 2C8.10802 2 8.6899 2 9.19926 2.19101C10.3622 2.62712 10.8418 3.68358 11.3666 4.73313L12 6H16.75C18.8567 6 19.91 6 20.6667 6.50559C20.9943 6.72447 21.2755 7.00572 21.4944 7.33329C22 8.08996 22 9.14331 22 11.25C22 14.7612 22 16.5167 21.1573 17.7779C20.975 18.0508 20.7666 18.3045 20.5355 18.5355H3.46447Z',
  d6: 'M18.25 19.75C19.0784 19.75 19.75 20.4216 19.75 21.25C19.75 22.0784 19.0784 22.75 18.25 22.75C17.4216 22.75 16.75 22.0784 16.75 21.25C16.75 21.1156 16.7677 20.9854 16.8008 20.8615L15.4697 19.5303C15.329 19.3897 15.25 19.1989 15.25 19L15.25 16C15.25 15.5858 15.5858 15.25 16 15.25C16.4142 15.25 16.75 15.5858 16.75 16L16.75 18.6893L17.8615 19.8008C17.9854 19.7677 18.1156 19.75 18.25 19.75Z',
  d7: 'M8.75 16L8.75 19C8.75 19.1989 8.67098 19.3897 8.53033 19.5303L7.19919 20.8615C7.23233 20.9854 7.25 21.1156 7.25 21.25C7.25 22.0784 6.57843 22.75 5.75 22.75C4.92157 22.75 4.25 22.0784 4.25 21.25C4.25 20.4216 4.92157 19.75 5.75 19.75C5.88437 19.75 6.01461 19.7677 6.13853 19.8008L7.25 18.6893L7.25 16C7.25 15.5858 7.58579 15.25 8 15.25C8.41421 15.25 8.75 15.5858 8.75 16Z',
  d8: 'M12.75 19.9507C13.1983 20.21 13.5 20.6948 13.5 21.25C13.5 22.0784 12.8284 22.75 12 22.75C11.1716 22.75 10.5 22.0784 10.5 21.25C10.5 20.6948 10.8016 20.21 11.25 19.9507L11.25 16C11.25 15.5858 11.5858 15.25 12 15.25C12.4142 15.25 12.75 15.5858 12.75 16L12.75 19.9507Z',
  d9: 'M9.4626 1.48884C8.82373 1.24927 8.11205 1.24958 7.08264 1.25004C6.2039 1.25003 5.32205 1.25006 4.7497 1.30052C4.15996 1.3525 3.64388 1.46246 3.17258 1.72548C2.56533 2.06435 2.06428 2.56541 1.7254 3.17266C1.46238 3.64396 1.35242 4.16004 1.30044 4.74978C1.24998 5.32212 1.24999 6.03085 1.25 6.90958V10.0575C1.24999 12.3658 1.24998 14.1749 1.43975 15.5864C1.63399 17.0311 2.03933 18.1711 2.93414 19.0659C3.0696 19.2014 3.21068 19.3257 3.35759 19.4396C3.87002 18.7635 4.66246 18.3113 5.56224 18.2558L5.75 18.068V16C5.75 14.7574 6.75736 13.75 8 13.75C8.87074 13.75 9.62594 14.2446 10 14.9682C10.3741 14.2446 11.1293 13.75 12 13.75C12.8707 13.75 13.6259 14.2446 14 14.9682C14.3741 14.2446 15.1293 13.75 16 13.75C17.2426 13.75 18.25 14.7574 18.25 16V18.068L18.4378 18.2558C19.3402 18.3115 20.1346 18.7662 20.6469 19.4456C21.0836 19.0873 21.466 18.666 21.781 18.1946C22.2983 17.4203 22.5295 16.5284 22.6408 15.4337C22.75 14.3603 22.75 13.0121 22.75 11.2923C22.75 10.2733 22.75 9.36889 22.683 8.70956C22.6137 8.029 22.4669 7.4388 22.118 6.91669C21.8444 6.50723 21.4929 6.15566 21.0834 5.88207C20.5613 5.53321 19.9711 5.38636 19.2905 5.31713C18.6312 5.25006 17.8095 5.25007 16.7905 5.25008L13.2361 5.25008C12.92 5.25008 12.7396 5.24915 12.6064 5.23539C12.5044 5.22825 12.4348 5.15263 12.4128 5.11571C12.3409 5.00277 12.0838 4.48916 11.9425 4.20644C11.4704 3.25129 10.8581 2.01213 9.4626 1.48884Z',
  d10: 'M18.25 21.25L16 19V16M18.25 20.5C17.8358 20.5 17.5 20.8358 17.5 21.25C17.5 21.6642 17.8358 22 18.25 22C18.6642 22 19 21.6642 19 21.25C19 20.8358 18.6642 20.5 18.25 20.5Z',
  d11: 'M5.75 21.25L8 19V16M5.75 20.5C6.16421 20.5 6.5 20.8358 6.5 21.25C6.5 21.6642 6.16421 22 5.75 22C5.33579 22 5 21.6642 5 21.25C5 20.8358 5.33579 20.5 5.75 20.5Z',
  d12: 'M12 21.25V16M12 20.5C11.5858 20.5 11.25 20.8358 11.25 21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25C12.75 20.8358 12.4142 20.5 12 20.5Z',
  d13: 'M7 6H21.9C21.9552 6 22 6.04477 22 6.1V17.9C22 17.9552 21.9552 18 21.9 18H19M5 18H2.1C2.04477 18 2 17.9552 2 17.9V2.1C2 2.04477 2.04477 2 2.1 2H8.98631L12.0381 5.97215',
  d14: 'M18.25 19.75C19.0784 19.75 19.75 20.4216 19.75 21.25C19.75 22.0784 19.0784 22.75 18.25 22.75C17.4216 22.75 16.75 22.0784 16.75 21.25C16.75 21.1156 16.7677 20.9854 16.8008 20.8615L15.4697 19.5303C15.329 19.3897 15.25 19.1989 15.25 19L15.25 16L16.75 16L16.75 18.6893L17.8615 19.8008C17.9854 19.7677 18.1156 19.75 18.25 19.75Z',
  d15: 'M8.75 16L8.75 19C8.75 19.1989 8.67098 19.3897 8.53033 19.5303L7.19919 20.8615C7.23233 20.9854 7.25 21.1156 7.25 21.25C7.25 22.0784 6.57843 22.75 5.75 22.75C4.92157 22.75 4.25 22.0784 4.25 21.25C4.25 20.4216 4.92157 19.75 5.75 19.75C5.88437 19.75 6.01461 19.7677 6.13853 19.8008L7.25 18.6893L7.25 16L8.75 16Z',
  d16: 'M12.75 19.9507C13.1984 20.21 13.5 20.6948 13.5 21.25C13.5 22.0784 12.8284 22.75 12 22.75C11.1716 22.75 10.5 22.0784 10.5 21.25C10.5 20.6948 10.8016 20.21 11.25 19.9507L11.25 16L12.75 16L12.75 19.9507Z',
  d17: 'M2 1.25C1.80109 1.25 1.61032 1.32902 1.46967 1.46967C1.32902 1.61032 1.25 1.80109 1.25 2V18C1.25 18.4142 1.58579 18.75 2 18.75H4.0911C4.51741 18.4666 5.02036 18.2892 5.56224 18.2558L5.75 18.068V14.5H18.25V18.068L18.4378 18.2558C18.9796 18.2892 19.4826 18.4666 19.9089 18.75H22C22.4142 18.75 22.75 18.4142 22.75 18V6C22.75 5.58579 22.4142 5.25 22 5.25H12.375L9.375 1.25001L2 1.25Z',
} as const;

export const IconAiFolder01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-folder-01-stroke-rounded IconAiFolder01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconAiFolder01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-folder-01-duotone-rounded IconAiFolder01DuotoneRounded"
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

export const IconAiFolder01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-folder-01-twotone-rounded IconAiFolder01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconAiFolder01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-folder-01-solid-rounded IconAiFolder01SolidRounded"
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiFolder01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-folder-01-bulk-rounded IconAiFolder01BulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiFolder01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-folder-01-stroke-sharp IconAiFolder01StrokeSharp"
    >
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiFolder01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-folder-01-solid-sharp IconAiFolder01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiFolder01: TheIconSelfPack = {
  name: 'AiFolder01',
  StrokeRounded: IconAiFolder01StrokeRounded,
  DuotoneRounded: IconAiFolder01DuotoneRounded,
  TwotoneRounded: IconAiFolder01TwotoneRounded,
  SolidRounded: IconAiFolder01SolidRounded,
  BulkRounded: IconAiFolder01BulkRounded,
  StrokeSharp: IconAiFolder01StrokeSharp,
  SolidSharp: IconAiFolder01SolidSharp,
};