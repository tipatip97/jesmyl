import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 3L12.5 17',
  d2: 'M12.5 17C12.5 19.2091 10.7091 21 8.5 21C6.29086 21 4.5 19.2091 4.5 17C4.5 14.7909 6.29086 13 8.5 13C10.7091 13 12.5 14.7909 12.5 17Z',
  d3: 'M12.5 3C16.366 3 19.5 6.13401 19.5 10C18 8.5 14.0556 6.26667 12.5 8.44444',
  d4: 'M14.6952 2.30606L14.755 2.32365C18.0744 3.29725 20.5 6.36464 20.5 10.0012C20.5 10.4056 20.2564 10.7703 19.8827 10.925C19.509 11.0798 19.0789 10.9943 18.7929 10.7083C18.1412 10.0565 16.9075 9.20939 15.6937 8.78919C14.6015 8.41109 13.9056 8.48251 13.5 8.82432L13.5 17.0012C13.5 19.7626 11.2614 22.0012 8.5 22.0012C5.73858 22.0012 3.5 19.7626 3.5 17.0012C3.5 14.2397 5.73858 12.0012 8.5 12.0012C9.62561 12.0012 10.6643 12.3731 11.5 13.0008V8.45725C11.4999 8.44892 11.4999 8.44059 11.5 8.43226V5.00116L11.5 4.93629V4.93628C11.4998 4.50611 11.4996 4.06207 11.5656 3.69193C11.6462 3.23941 11.8422 2.78264 12.3012 2.4389C12.7212 2.12438 13.1687 2.02927 13.6247 2.06607C13.9754 2.09438 14.358 2.20689 14.6952 2.30606Z',
  d5: 'M3.5 16.9688C3.5 19.7302 5.73858 21.9688 8.5 21.9688C11.2614 21.9688 13.5 19.7302 13.5 16.9688C13.5 14.2073 11.2614 11.9688 8.5 11.9688C5.73858 11.9688 3.5 14.2073 3.5 16.9688Z',
  d6: 'M14.7551 2.2924L14.6952 2.27481C14.358 2.17564 13.9755 2.06313 13.6248 2.03482C13.1688 1.99802 12.7213 2.09313 12.3013 2.40765C11.8422 2.75139 11.6463 3.20816 11.5656 3.66068C11.4997 4.03082 11.4999 4.47486 11.5001 4.90503L11.5001 8.40101C11.5 8.40934 11.5 8.41767 11.5001 8.426V12.9694C12.7145 13.8816 13.5001 15.3339 13.5001 16.9697V8.79307C13.9057 8.45126 14.6016 8.37984 15.6938 8.75794C16.9075 9.17814 18.1412 10.0253 18.793 10.677C19.079 10.963 19.5091 11.0486 19.8828 10.8938C20.2564 10.739 20.5001 10.3744 20.5001 9.9699C20.5001 6.33339 18.0745 3.266 14.7551 2.2924Z',
  d7: 'M11.9715 17.0109C11.9715 19.2216 10.187 21.0139 7.98576 21.0139C5.78449 21.0139 4 19.2216 4 17.0109C4 14.8001 5.78449 13.0078 7.98576 13.0078C10.187 13.0078 11.9715 14.8001 11.9715 17.0109Z',
  d8: 'M11.9697 17.0536V10.0994M11.9697 10.0994V3.01172C16.651 3.18845 19.6806 6.38945 19.9997 9.94231C20.008 10.0344 19.8959 10.0851 19.8276 10.0231C17.5307 7.93543 12.8043 8.31689 11.9697 10.0994Z',
  d9: 'M12.75 17.0103C12.7445 19.6289 10.62 21.7501 8 21.7501C5.37665 21.7501 3.25 19.6235 3.25 17.0001C3.25 14.3768 5.37665 12.2501 8 12.2501C9.02487 12.2501 9.97394 12.5747 10.75 13.1267L10.75 2.25H12.75C14.6016 2.25 16.4845 3.26688 17.9306 4.47461C19.5699 5.8437 20.7501 7.78885 20.7501 10C20.7501 10.3033 20.5673 10.5768 20.2871 10.6929C20.0068 10.809 19.6842 10.7448 19.4697 10.5303C19.2064 10.267 18.7342 9.99111 18.092 9.77013C17.4619 9.55333 16.7238 9.40866 15.9817 9.36981C14.5494 9.29481 13.3542 9.61672 12.7501 10.2654V17L12.75 17.0103Z',
} as const;

export const IconMusicNote04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-04-stroke-rounded IconMusicNote04StrokeRounded"
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

export const IconMusicNote04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-04-duotone-rounded IconMusicNote04DuotoneRounded"
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
        fill="var(--icon-fill)" 
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

export const IconMusicNote04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-04-twotone-rounded IconMusicNote04TwotoneRounded"
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

export const IconMusicNote04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-04-solid-rounded IconMusicNote04SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMusicNote04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-04-bulk-rounded IconMusicNote04BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMusicNote04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-04-stroke-sharp IconMusicNote04StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMusicNote04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-04-solid-sharp IconMusicNote04SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMusicNote04: TheIconSelfPack = {
  name: 'MusicNote04',
  StrokeRounded: IconMusicNote04StrokeRounded,
  DuotoneRounded: IconMusicNote04DuotoneRounded,
  TwotoneRounded: IconMusicNote04TwotoneRounded,
  SolidRounded: IconMusicNote04SolidRounded,
  BulkRounded: IconMusicNote04BulkRounded,
  StrokeSharp: IconMusicNote04StrokeSharp,
  SolidSharp: IconMusicNote04SolidSharp,
};