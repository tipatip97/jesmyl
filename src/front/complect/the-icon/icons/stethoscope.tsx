import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.0014 2C14.1053 2 15.0003 2.93126 15.0003 4.08003C15.0003 5.02915 15.0362 5.87375 14.2692 6.57196C11.7587 8.85732 10.5034 10 9.00027 10C7.49714 10 6.24187 8.85732 3.73133 6.57196C2.96426 5.87369 3.00027 5.029 3.00027 4.07981C3.00027 2.93116 3.8951 2 4.99893 2',
  d2: 'M9 14V17.4998C9 19.9852 11.0149 22.0001 13.5003 22.0001C15.9858 22.0001 18.0007 19.9852 18.0007 17.4998V16',
  d3: 'M14 7L12.6978 10.2556C12.3516 11.121 12.1785 11.5537 11.8887 11.9092C11.5988 12.2648 11.2098 12.5215 10.4319 13.0349L8.9696 14L7.53283 13.0323C6.77221 12.5201 6.39189 12.2639 6.10821 11.9126C5.82452 11.5613 5.65423 11.1356 5.31365 10.2841L4 7',
  d4: 'M21 13C21 14.6569 19.6569 16 18 16C16.3431 16 15 14.6569 15 13C15 11.3431 16.3431 10 18 10C19.6569 10 21 11.3431 21 13Z',
  d5: 'M18.008 13L17.999 13',
  d6: 'M8.9994 10.0003C10.4263 10.0003 11.6298 8.97061 13.8958 6.91123C13.9548 6.85761 14.0432 6.93019 14.0008 6.99767C13.9997 6.99942 13.9988 7.00127 13.998 7.00319L12.6969 10.2559C12.3507 11.1213 12.1777 11.554 11.8878 11.9095C11.5979 12.2651 11.209 12.5218 10.431 13.0352L8.96874 14.0003L7.53197 13.0327C6.77135 12.5204 6.39103 12.2642 6.10735 11.9129C5.82366 11.5616 5.65337 11.1359 5.31279 10.2844L4.00029 7.00318C3.99952 7.00127 3.99859 6.99943 3.99749 6.99768C3.95501 6.93 4.04369 6.8573 4.10282 6.91104C6.36892 8.97055 7.57248 10.0003 8.9994 10.0003Z',
  d7: 'M9 14V17.4998C9 19.9852 11.0149 22.0001 13.5003 22.0001C15.9858 22.0001 18.0007 19.9852 18.0007 17.4998V16M14 7L12.6978 10.2556C12.3516 11.121 12.1785 11.5537 11.8887 11.9092C11.5988 12.2648 11.2098 12.5215 10.4319 13.0349L8.9696 14L7.53283 13.0323C6.77221 12.5201 6.39189 12.2639 6.10821 11.9126C5.82452 11.5613 5.65423 11.1356 5.31365 10.2841L4 7',
  d8: 'M9 13C9.55228 13 10 13.4477 10 14V17.4998C10 19.4329 11.5672 21.0001 13.5003 21.0001C15.4335 21.0001 17.0007 19.4329 17.0007 17.4998V16C17.0007 15.4477 17.4484 15 18.0007 15C18.553 15 19.0007 15.4477 19.0007 16V17.4998C19.0007 20.5375 16.5381 23.0001 13.5003 23.0001C10.4626 23.0001 8 20.5375 8 17.4998V14C8 13.4477 8.44772 13 9 13Z',
  d9: 'M3.99965 4.07981C3.99965 3.44556 4.4839 3 4.99831 3C5.5506 3 5.99831 2.55228 5.99831 2C5.99831 1.44772 5.5506 1 4.99831 1C3.30506 1 1.99965 2.41676 1.99965 4.07981C1.99965 4.13523 1.99927 4.19268 1.99889 4.25196L1.99889 4.25197C1.99333 5.10193 1.98532 6.32709 3.04678 7.30161L4.43224 10.7727L4.43225 10.7727C4.7269 11.5106 4.95033 12.0701 5.33046 12.5409C5.71059 13.0116 6.21053 13.3479 6.86982 13.7914L8.41125 14.8294C8.74611 15.055 9.18374 15.057 9.52069 14.8346L11.0901 13.799C11.7643 13.3546 12.2756 13.0176 12.664 12.5411C13.0524 12.0647 13.2795 11.496 13.5789 10.7461L14.9543 7.30001C16.0139 6.32577 16.006 5.10155 16.0004 4.25206L16.0004 4.25162C16 4.19261 15.9996 4.13521 15.9996 4.08003C15.9996 2.41686 14.6941 1 13.0008 1C12.4485 1 12.0008 1.44772 12.0008 2C12.0008 2.55228 12.4485 3 13.0008 3C13.5153 3 13.9996 3.44566 13.9996 4.08003C13.9996 5.12559 13.9827 5.47992 13.5954 5.83247C12.3204 6.99309 11.4335 7.79791 10.6826 8.32398C9.95394 8.83444 9.4651 9 8.99965 9C8.5342 9 8.04536 8.83444 7.31674 8.32398C6.56583 7.79791 5.67886 6.99309 4.40388 5.83247C4.01656 5.47989 3.99965 5.12552 3.99965 4.07981Z',
  d10: 'M18 9C15.7909 9 14 10.7909 14 13C14 15.2091 15.7909 17 18 17C20.2091 17 22 15.2091 22 13C22 10.7909 20.2091 9 18 9ZM18.0067 14.5C18.8314 14.5 19.5 13.8284 19.5 13C19.5 12.1716 18.8314 11.5 18.0067 11.5H17.9933C17.1686 11.5 16.5 12.1716 16.5 13C16.5 13.8284 17.1686 14.5 17.9933 14.5H18.0067Z',
  d11: 'M14 13C14 10.7909 15.7909 9 18 9C20.2091 9 22 10.7909 22 13C22 15.2091 20.2091 17 18 17C15.7909 17 14 15.2091 14 13Z',
  d12: 'M19.5 13C19.5 13.8284 18.8314 14.5 18.0067 14.5L17.9933 14.5C17.1686 14.5 16.5 13.8284 16.5 13C16.5 12.1716 17.1686 11.5 17.9933 11.5L18.0067 11.5C18.8314 11.5 19.5 12.1716 19.5 13Z',
  d13: 'M19.0005 16.8738C18.6807 16.9562 18.3454 17 17.9998 17C17.6548 17 17.3199 16.9563 17.0005 16.8742V17.501C17.0005 19.4341 15.4333 21.0013 13.5002 21.0013C11.567 21.0013 9.99982 19.4341 9.99982 17.501V14.5195L9.52051 14.8358C9.18355 15.0582 8.74593 15.0562 8.41107 14.8307L7.99982 14.5537V17.501C7.99982 20.5387 10.4624 23.0013 13.5002 23.0013C16.5379 23.0013 19.0005 20.5387 19.0005 17.501V16.8738Z',
  d14: 'M13.0011 2C14.1051 2 15 2.93126 15 4.08003V6.5L9 10L3 6.5V4.07981C3 2.93116 3.89483 2 4.99866 2',
  d15: 'M14 7L12 12L8.9696 14L6 12L4 7',
  d16: 'M8.125 17.2498V13.75H10.125V17.2498C10.125 19.1829 11.6922 20.7501 13.6253 20.7501C15.5585 20.7501 17.1257 19.1829 17.1257 17.2498V15.75H19.1257V17.2498C19.1257 20.2875 16.6631 22.7501 13.6253 22.7501C10.5876 22.7501 8.125 20.2875 8.125 17.2498Z',
  d17: 'M5.51548 12.2432L3.72013 7.75486L2.62113 7.11378C2.31391 6.93457 2.125 6.60567 2.125 6.25V4.32981C2.125 2.66676 3.43041 1.25 5.12366 1.25H6.125V3.25H5.12366C4.60925 3.25 4.125 3.69556 4.125 4.32981V5.67563L9.125 8.5923L14.125 5.67563V4.33003C14.125 3.69566 13.6407 3.25 13.1261 3.25H12.125V1.25H13.1261C14.8195 1.25 16.125 2.66686 16.125 4.33003V6.25C16.125 6.60567 15.9361 6.93457 15.6289 7.11378L14.5326 7.75327L12.7352 12.2468L9.09143 14.6516L5.51548 12.2432Z',
  d18: 'M18.125 9C16.0539 9 14.375 10.6789 14.375 12.75C14.375 14.8211 16.0539 16.5 18.125 16.5C20.1961 16.5 21.875 14.8211 21.875 12.75C21.875 10.6789 20.1961 9 18.125 9ZM18.1183 11.25C17.2936 11.25 16.625 11.9216 16.625 12.75C16.625 13.5784 17.2936 14.25 18.1183 14.25H18.1317C18.9564 14.25 19.625 13.5784 19.625 12.75C19.625 11.9216 18.9564 11.25 18.1317 11.25H18.1183Z',
};

export const IconStethoscopeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-stroke-rounded IconStethoscopeStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconStethoscopeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-duotone-rounded IconStethoscopeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconStethoscopeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-twotone-rounded IconStethoscopeTwotoneRounded"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStethoscopeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-solid-rounded IconStethoscopeSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStethoscopeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-bulk-rounded IconStethoscopeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
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

export const IconStethoscopeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-stroke-sharp IconStethoscopeStrokeSharp"
    >
      <path 
        d={d.d14} 
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
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconStethoscopeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stethoscope-solid-sharp IconStethoscopeSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStethoscope: TheIconSelfPack = {
  name: 'Stethoscope',
  StrokeRounded: IconStethoscopeStrokeRounded,
  DuotoneRounded: IconStethoscopeDuotoneRounded,
  TwotoneRounded: IconStethoscopeTwotoneRounded,
  SolidRounded: IconStethoscopeSolidRounded,
  BulkRounded: IconStethoscopeBulkRounded,
  StrokeSharp: IconStethoscopeStrokeSharp,
  SolidSharp: IconStethoscopeSolidSharp,
};