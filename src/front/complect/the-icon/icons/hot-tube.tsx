import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.6644 16.9864L3 13H21L20.3356 16.9864C19.9365 19.3809 19.737 20.5781 18.8977 21.2891C18.0585 22 16.8448 22 14.4172 22H9.58276C7.15525 22 5.94149 22 5.10226 21.2891C4.26302 20.5781 4.06348 19.3809 3.6644 16.9864Z',
  d2: 'M18.6 10C19.1333 9.44772 19.1333 8.55228 18.6 8C18.0667 7.44772 18.0667 6.55228 18.6 6M15.4 10C15.9333 9.44772 15.9333 8.55228 15.4 8C14.8667 7.44772 14.8667 6.55228 15.4 6',
  d3: 'M3 13H2M21 13H22',
  d4: 'M5 13V9.8513C5 8.82886 5.82885 8 6.8513 8C8.18 8 9.40683 8.71196 10.0661 9.8656L13 15M9 4C9 5.10457 8.10457 6 7 6C5.89543 6 5 5.10457 5 4C5 2.89543 5.89543 2 7 2C8.10457 2 9 2.89543 9 4Z',
  d5: 'M9 4C9 5.10457 8.10457 6 7 6C5.89543 6 5 5.10457 5 4C5 2.89543 5.89543 2 7 2C8.10457 2 9 2.89543 9 4Z',
  d6: 'M16.0947 5.28066C16.4919 5.66431 16.503 6.29738 16.1193 6.69466C15.9602 6.85943 15.9602 7.14057 16.1193 7.30534C17.0269 8.24514 17.0269 9.75486 16.1193 10.6947C15.7357 11.0919 15.1026 11.103 14.7053 10.7193C14.3081 10.3357 14.297 9.70262 14.6807 9.30534C14.8398 9.14057 14.8398 8.85943 14.6807 8.69466C13.7731 7.75486 13.7731 6.24514 14.6807 5.30534C15.0643 4.90806 15.6974 4.89701 16.0947 5.28066ZM19.2947 5.28066C19.6919 5.66431 19.703 6.29738 19.3193 6.69466C19.1602 6.85943 19.1602 7.14057 19.3193 7.30534C20.2269 8.24514 20.2269 9.75486 19.3193 10.6947C18.9357 11.0919 18.3026 11.103 17.9053 10.7193C17.5081 10.3357 17.497 9.70262 17.8807 9.30534C18.0398 9.14057 18.0398 8.85943 17.8807 8.69466C16.9731 7.75486 16.9731 6.24514 17.8807 5.30534C18.2643 4.90806 18.8974 4.89701 19.2947 5.28066Z',
  d7: 'M2 12C1.44772 12 1 12.4477 1 13C1 13.5523 1.44772 14 2 14H2.40633L2.93274 17.1585C3.12535 18.3143 3.28139 19.2506 3.49945 19.9831C3.72655 20.7459 4.0447 21.3761 4.61748 21.8613C5.19027 22.3465 5.86423 22.5568 6.65399 22.6554C7.41233 22.75 8.36157 22.75 9.53327 22.75H14.4667C15.6384 22.75 16.5877 22.75 17.346 22.6554C18.1358 22.5568 18.8097 22.3465 19.3825 21.8613C19.9553 21.3761 20.2735 20.7459 20.5006 19.9831C20.7186 19.2506 20.8747 18.3143 21.0673 17.1585L21.5937 14H22C22.5523 14 23 13.5523 23 13C23 12.4477 22.5523 12 22 12H2Z',
  d8: 'M7 1.25C5.48122 1.25 4.25 2.48122 4.25 4C4.25 5.51878 5.48122 6.75 7 6.75C8.51878 6.75 9.75 5.51878 9.75 4C9.75 2.48122 8.51878 1.25 7 1.25Z',
  d9: 'M6.8513 7.79019C5.41464 7.79019 4.25 8.95483 4.25 10.3915C4.25 10.4458 4.25 10.473 4.25351 10.4958C4.27348 10.6251 4.37493 10.7265 4.50422 10.7465C4.52698 10.75 4.55416 10.75 4.60851 10.75H10.3413C10.5989 10.75 10.7277 10.75 10.8016 10.7028C10.8911 10.6457 10.9437 10.5454 10.9399 10.4392C10.9368 10.3517 10.8636 10.2457 10.7172 10.0337C9.92448 8.64636 8.44914 7.79019 6.8513 7.79019Z',
  d10: 'M18.4781 10.9962C19.1448 10.3061 19.1448 9.1873 18.4781 8.49723C17.8114 7.80717 17.8114 6.68836 18.4781 5.99829M15.4781 10.9962C16.1448 10.3061 16.1448 9.1873 15.4781 8.49723C14.8114 7.80717 14.8114 6.68836 15.4781 5.99829',
  d11: 'M4.97803 13.9949V9.49676H8.97803L13.478 16.4938M8.97803 4.99867C8.97803 6.10277 8.0826 6.99782 6.97803 6.99782C5.87346 6.99782 4.97803 6.10277 4.97803 4.99867C4.97803 3.89456 5.87346 2.99951 6.97803 2.99951C8.0826 2.99951 8.97803 3.89456 8.97803 4.99867Z',
  d12: 'M3.9909 13.9919L5.97065 21.0005H17.9791L19.9889 13.9919M3.9909 13.9919H2.00146M3.9909 13.9919H19.9889M19.9889 13.9919H21.9989',
  d13: 'M22 13.25V14.75H20.5657L18.5657 21.75H5.43427L3.43427 14.75H2V13.25H22Z',
  d14: 'M14.9605 9.02099C14.0132 8.04 14.0132 6.45999 14.9605 5.479L16.0395 6.52099C15.6535 6.92071 15.6535 7.57928 16.0395 7.979C16.9868 8.95999 16.9868 10.54 16.0395 11.521L14.9605 10.479C15.3465 10.0793 15.3465 9.42071 14.9605 9.02099ZM17.9605 9.02099C17.0132 8.04 17.0132 6.45999 17.9605 5.479L19.0395 6.52099C18.6535 6.92071 18.6535 7.57928 19.0395 7.979C19.9868 8.95999 19.9868 10.54 19.0395 11.521L17.9605 10.479C18.3465 10.0793 18.3465 9.42071 17.9605 9.02099Z',
  d15: 'M7 2.25C5.48122 2.25 4.25 3.48122 4.25 5C4.25 6.51878 5.48122 7.75 7 7.75C8.51878 7.75 9.75 6.51878 9.75 5C9.75 3.48122 8.51878 2.25 7 2.25Z',
  d16: 'M5 8.75C4.58579 8.75 4.25 9.08579 4.25 9.5V11.75H11.338L9.63088 9.09443C9.49288 8.87977 9.2552 8.75 9 8.75H5Z',
};

export const IconHotTubeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-tube-stroke-rounded IconHotTubeStrokeRounded"
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

export const IconHotTubeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-tube-duotone-rounded IconHotTubeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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

export const IconHotTubeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-tube-twotone-rounded IconHotTubeTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconHotTubeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-tube-solid-rounded IconHotTubeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
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

export const IconHotTubeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-tube-bulk-rounded IconHotTubeBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
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

export const IconHotTubeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-tube-stroke-sharp IconHotTubeStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconHotTubeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-tube-solid-sharp IconHotTubeSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHotTube: TheIconSelfPack = {
  name: 'HotTube',
  StrokeRounded: IconHotTubeStrokeRounded,
  DuotoneRounded: IconHotTubeDuotoneRounded,
  TwotoneRounded: IconHotTubeTwotoneRounded,
  SolidRounded: IconHotTubeSolidRounded,
  BulkRounded: IconHotTubeBulkRounded,
  StrokeSharp: IconHotTubeStrokeSharp,
  SolidSharp: IconHotTubeSolidSharp,
};