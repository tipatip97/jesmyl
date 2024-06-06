import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.0088 20.5C7.29058 20.5 4.9315 20.5 3.46575 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38065 4.03806C2.65199 3.55227 3.05319 3.15142 3.53941 2.88032C4.22151 2.5 5.13054 2.5 6.9486 2.5C8.11337 2.5 8.69575 2.5 9.20556 2.69101C10.3695 3.12712 10.8495 4.18358 11.3748 5.23313L12.0088 6.5M7.00438 6.5H16.7629C18.8714 6.5 19.9257 6.5 20.683 7.00559C21.0109 7.22447 21.2924 7.50572 21.5115 7.83329C21.8526 8.34341 21.9638 8.98836 22 10',
  d2: 'M21.0002 18.5826V15.4174C21.0002 13.6482 21.0002 12.7636 20.4601 12.5435C19.9199 12.3233 19.2842 12.9488 18.0128 14.1998C17.3509 14.851 16.9662 14.9911 16.0419 14.9911C15.2226 14.9911 14.813 14.9911 14.5187 15.1846C13.9152 15.5814 14.0002 16.3627 14.0002 17C14.0002 17.6373 13.9152 18.4186 14.5187 18.8154C14.813 19.0089 15.2226 19.0089 16.0419 19.0089C16.9662 19.0089 17.3509 19.149 18.0128 19.8002C19.2842 21.0512 19.9199 21.6767 20.4601 21.4565C21.0002 21.2364 21.0002 20.3518 21.0002 18.5826Z',
  d3: 'M13.25 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3079 3.10673 10.7955 4.08617 11.2932 5.08597C11.3176 5.13499 11.342 5.18407 11.3666 5.23313L12 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 15.2612 22 17.0167 21.1573 18.2779C21.1069 18.3533 21.0545 18.4273 21.0002 18.4997V15.4174C21.0002 13.6482 21.0002 12.7636 20.4601 12.5435C19.9199 12.3233 19.2842 12.9488 18.0128 14.1998C17.3509 14.851 16.9662 14.9911 16.0419 14.9911C15.2226 14.9911 14.813 14.9911 14.5187 15.1846C13.9806 15.5384 13.9899 16.1979 13.9982 16.7884C13.9992 16.8602 14.0002 16.9309 14.0002 17C14.0002 17.0691 13.9992 17.1398 13.9982 17.2116C13.9899 17.8021 13.9806 18.4616 14.5187 18.8154C14.813 19.0089 15.2226 19.0089 16.0419 19.0089C16.9662 19.0089 17.3509 19.149 18.0128 19.8002C18.1639 19.9489 18.3061 20.0888 18.4402 20.2195C17.2735 20.5 15.6834 20.5 13.25 20.5Z',
  d4: 'M9.4626 1.98908C8.82373 1.74951 8.11205 1.74983 7.08264 1.75028C6.2039 1.75027 5.32205 1.75031 4.7497 1.80076C4.15996 1.85275 3.64388 1.96271 3.17258 2.22572C2.56533 2.5646 2.06428 3.06566 1.7254 3.6729C1.46238 4.14421 1.35242 4.66028 1.30044 5.25002C1.24999 5.82237 1.24999 6.5311 1.25 7.40983V10.5577C1.24999 12.8661 1.24998 14.6751 1.43975 16.0866C1.63399 17.5314 2.03933 18.6714 2.93414 19.5662C3.82895 20.461 4.96897 20.8663 6.41371 21.0606C7.82519 21.2503 9.63423 21.2503 11.9426 21.2503H12.9272C12.9827 21.2503 13.0104 21.2503 13.0336 21.2467C13.1641 21.2262 13.2659 21.1226 13.2842 20.9917C13.2874 20.9685 13.2869 20.9408 13.2859 20.8853C13.2854 20.853 13.2851 20.8369 13.2837 20.8235C13.2752 20.7448 13.2439 20.684 13.1847 20.6314C13.1747 20.6224 13.1588 20.6107 13.1271 20.5872C12.2383 19.9297 11.9225 19.0198 11.8138 18.3686C11.7346 17.8937 11.7443 17.243 11.7482 17.0003C11.7443 16.7576 11.7346 16.1069 11.8138 15.6319C11.9287 14.9441 12.2745 13.9676 13.2827 13.3048C13.8589 12.926 14.4436 12.8184 14.8593 12.7768C15.2148 12.7412 15.6518 12.7413 15.9977 12.7414C16.0266 12.7414 16.0562 12.7412 16.0851 12.7409C16.1759 12.7398 16.2212 12.7392 16.2736 12.718C16.326 12.6969 16.3589 12.6658 16.4247 12.6037C16.4635 12.567 16.5034 12.5287 16.537 12.4957C17.0867 11.9545 17.6579 11.3923 18.1721 11.0117C18.6427 10.6634 19.8502 9.8655 21.3092 10.4602C22.065 10.7682 22.4428 10.9222 22.5413 10.895C22.631 10.8702 22.654 10.8539 22.7074 10.7776C22.7659 10.6939 22.7517 10.3892 22.7232 9.77986C22.7136 9.57441 22.7006 9.38359 22.683 9.20981C22.6137 8.52925 22.4669 7.93904 22.118 7.41693C21.8444 7.00747 21.4929 6.65591 21.0834 6.38231C20.5613 6.03345 19.9711 5.8866 19.2905 5.81737C18.6312 5.7503 17.8095 5.75031 16.7905 5.75032L13.2361 5.75032C12.92 5.75032 12.7396 5.7494 12.6064 5.73563C12.5044 5.72849 12.4348 5.65287 12.4128 5.61595C12.3409 5.50302 12.0838 4.98941 11.9425 4.70668C11.4704 3.75154 10.8581 2.51237 9.4626 1.98908Z',
  d5: 'M19.0647 12.2184C19.4809 11.9104 20.0784 11.5793 20.7434 11.8503C21.4143 12.1237 21.6019 12.7835 21.6753 13.2942C21.7505 13.8176 21.7505 14.5252 21.7504 15.3579V18.6448C21.7505 19.4774 21.7505 20.185 21.6753 20.7085C21.6019 21.2191 21.4143 21.8789 20.7434 22.1524C20.0784 22.4234 19.4809 22.0922 19.0647 21.7842C18.6366 21.4673 18.1289 20.9678 17.5297 20.3781C17.2267 20.0799 17.0073 19.9212 16.8502 19.8591C16.6894 19.7955 16.4764 19.7602 16.0421 19.7602H16.0421C15.6616 19.7602 15.2883 19.7602 15.009 19.7323C14.7094 19.7023 14.3971 19.6342 14.1069 19.4434C13.5704 19.0907 13.3682 18.5696 13.2936 18.1227C13.2386 17.7934 13.2445 17.2629 13.2486 17.0013C13.2445 16.7397 13.2386 16.2093 13.2936 15.8799C13.3682 15.4331 13.5704 14.9119 14.1069 14.5592C14.3971 14.3684 14.7094 14.3003 15.009 14.2704C15.2883 14.2424 15.6616 14.2424 16.0421 14.2424C16.4764 14.2424 16.6894 14.2071 16.8502 14.1435C17.0073 14.0814 17.2267 13.9227 17.5297 13.6245C18.1289 13.0349 18.6366 12.5353 19.0647 12.2184Z',
  d6: 'M18 19L18.3974 18.364L18.215 18.25H18V19ZM18 15V15.75H18.215L18.3974 15.6361L18 15ZM15 15V14.25C14.5858 14.25 14.25 14.5858 14.25 15H15ZM15 19H14.25C14.25 19.4142 14.5858 19.75 15 19.75V19ZM22.0012 21.5001L21.6037 22.1361C21.8349 22.2806 22.1263 22.2882 22.3648 22.156C22.6032 22.0239 22.7512 21.7727 22.7512 21.5001H22.0012ZM22.0012 12.5H22.7512C22.7512 12.2274 22.6032 11.9762 22.3648 11.844C22.1263 11.7119 21.8349 11.7195 21.6037 11.8639L22.0012 12.5ZM21.2512 12.5V21.5001H22.7512V12.5H21.2512ZM22.3986 20.864L18.3974 18.364L17.6026 19.636L21.6037 22.1361L22.3986 20.864ZM18.3974 15.6361L22.3986 13.1361L21.6037 11.8639L17.6026 14.3639L18.3974 15.6361ZM18 18.25H15V19.75H18V18.25ZM15 15.75H18V14.25H15V15.75ZM14.25 15V19H15.75V15H14.25Z',
  d7: 'M7.00229 6.50009H12.0092M12.0092 6.50009H21.991C21.9966 6.50009 22.001 6.50457 22.001 6.51009L22.0011 10.0076M12.0092 6.50009L9.00892 2.50195H2.03061C2.02508 2.50195 2.02061 2.50643 2.02061 2.51195L2.02105 20.4498C2.02105 20.4553 2.01548 20.4979 2.02099 20.498H12.0206',
  d8: 'M21.9983 12.5178L22.0155 21.4897C22.0155 21.4976 22.0069 21.5024 22.0002 21.4982L18.0108 19.0011H15.0266C15.0211 19.0011 15.0166 18.9966 15.0166 18.9911V14.9992C15.0166 14.9936 15.0211 14.9891 15.0267 14.9892L18.0058 15.0081L21.9829 12.5094C21.9896 12.5052 21.9982 12.51 21.9983 12.5178Z',
  d9: 'M22.75 22.25V12.25L18.178 15.0278H14.75V19.4722H18.178L22.75 22.25Z',
  d10: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H13.25V13.5277H17.7581L22.75 10.4948V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
};

export const IconFolderAudioStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-audio-stroke-rounded IconFolderAudioStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFolderAudioDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-audio-duotone-rounded IconFolderAudioDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconFolderAudioTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-audio-twotone-rounded IconFolderAudioTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFolderAudioSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-audio-solid-rounded IconFolderAudioSolidRounded"
    >
      <path 
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

export const IconFolderAudioBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-audio-bulk-rounded IconFolderAudioBulkRounded"
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

export const IconFolderAudioStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-audio-stroke-sharp IconFolderAudioStrokeSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderAudioSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-audio-solid-sharp IconFolderAudioSolidSharp"
    >
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

export const iconPackOfFolderAudio: TheIconSelfPack = {
  name: 'FolderAudio',
  StrokeRounded: IconFolderAudioStrokeRounded,
  DuotoneRounded: IconFolderAudioDuotoneRounded,
  TwotoneRounded: IconFolderAudioTwotoneRounded,
  SolidRounded: IconFolderAudioSolidRounded,
  BulkRounded: IconFolderAudioBulkRounded,
  StrokeSharp: IconFolderAudioStrokeSharp,
  SolidSharp: IconFolderAudioSolidSharp,
};