import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 8.18677C2.60406 6.08705 2.91537 4.77792 3.84664 3.84664C4.77792 2.91537 6.08705 2.60406 8.18677 2.5M21.5 8.18677C21.3959 6.08705 21.0846 4.77792 20.1534 3.84664C19.2221 2.91537 17.9129 2.60406 15.8132 2.5M15.8132 21.5C17.9129 21.3959 19.2221 21.0846 20.1534 20.1534C21.0846 19.2221 21.3959 17.9129 21.5 15.8132M8.18676 21.5C6.08705 21.3959 4.77792 21.0846 3.84664 20.1534C2.91537 19.2221 2.60406 17.9129 2.5 15.8132',
  d2: 'M12 7V17M8 9V15M16 15V9',
  d3: 'M3.84664 3.84664C2.91537 4.77792 2.60406 6.08705 2.5 8.18677V15.8132C2.60406 17.9129 2.91537 19.2221 3.84664 20.1534C4.77792 21.0846 6.08705 21.3959 8.18676 21.5H15.8132C17.9129 21.3959 19.2221 21.0846 20.1534 20.1534C21.0846 19.2221 21.3959 17.9129 21.5 15.8132V8.18677C21.3959 6.08705 21.0846 4.77792 20.1534 3.84664C19.2221 2.91537 17.9129 2.60406 15.8132 2.5H8.18677C6.08705 2.60406 4.77792 2.91537 3.84664 3.84664Z',
  d4: 'M9.18557 2.45052C9.2129 3.00213 8.7879 3.47146 8.23629 3.4988C6.16432 3.60148 5.19943 3.90811 4.55377 4.55377C3.90811 5.19943 3.60148 6.16432 3.4988 8.23629C3.47146 8.7879 3.00213 9.21291 2.45052 9.18557C1.89892 9.15823 1.47391 8.6889 1.50125 8.1373C1.60669 6.00982 1.92267 4.35645 3.13956 3.13956C4.35645 1.92267 6.00982 1.60669 8.13729 1.50125C8.6889 1.47391 9.15823 1.89892 9.18557 2.45052ZM14.8145 2.45052C14.8418 1.89892 15.3111 1.47391 15.8628 1.50125C17.9902 1.60669 19.6436 1.92267 20.8605 3.13956C22.0774 4.35645 22.3934 6.00982 22.4988 8.1373C22.5261 8.6889 22.1011 9.15823 21.5495 9.18557C20.9979 9.21291 20.5286 8.7879 20.5012 8.23629C20.3986 6.16432 20.0919 5.19943 19.4463 4.55377C18.8006 3.90811 17.8357 3.60148 15.7638 3.4988C15.2121 3.47146 14.7871 3.00213 14.8145 2.45052ZM2.45052 14.8145C3.00213 14.7871 3.47146 15.2121 3.4988 15.7638C3.60148 17.8357 3.90811 18.8006 4.55377 19.4463C5.19943 20.0919 6.16432 20.3986 8.23629 20.5012C8.78789 20.5286 9.2129 20.9979 9.18556 21.5495C9.15822 22.1011 8.68889 22.5261 8.13729 22.4988C6.00982 22.3934 4.35645 22.0774 3.13956 20.8605C1.92267 19.6436 1.60669 17.9902 1.50125 15.8628C1.47391 15.3111 1.89892 14.8418 2.45052 14.8145ZM21.5495 14.8145C22.1011 14.8418 22.5261 15.3111 22.4988 15.8628C22.3934 17.9902 22.0774 19.6436 20.8605 20.8605C19.6436 22.0774 17.9902 22.3934 15.8628 22.4988C15.3111 22.5261 14.8418 22.1011 14.8145 21.5495C14.7871 20.9979 15.2121 20.5286 15.7638 20.5012C17.8357 20.3986 18.8006 20.0919 19.4463 19.4463C20.0919 18.8006 20.3986 17.8357 20.5012 15.7638C20.5286 15.2121 20.9979 14.7871 21.5495 14.8145Z',
  d5: 'M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4478 18 11 17.5523 11 17V7C11 6.44772 11.4478 6 12 6ZM8.00006 8C8.55235 8 9.00006 8.44772 9.00006 9V15C9.00006 15.5523 8.55235 16 8.00006 16C7.44778 16 7.00006 15.5523 7.00006 15V9C7.00006 8.44772 7.44778 8 8.00006 8ZM16.0001 8C16.5523 8 17.0001 8.44772 17.0001 9V15C17.0001 15.5523 16.5523 16 16.0001 16C15.4478 16 15.0001 15.5523 15.0001 15V9C15.0001 8.44772 15.4478 8 16.0001 8Z',
  d6: 'M9.14426 2.5H2.5V9.14426M14.8557 2.5H21.5V9.14426M14.8557 21.5H21.5V14.8557M9.14426 21.5H2.5V14.8557',
  d7: 'M1.5 1.5H9.14426V3.5H3.5V9.14426H1.5V1.5ZM20.5 3.5H14.8557V1.5H22.5V9.14426H20.5V3.5ZM22.5 14.8557V22.5H14.8557V20.5H20.5V14.8557H22.5ZM3.5 20.5V14.8557H1.5V22.5H9.14426V20.5H3.5Z',
  d8: 'M11 17V7H13V17H11ZM7 15V9H9V15H7ZM17 9V15H15V9H17Z',
} as const;

export const IconVoiceIdStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="voice-id-stroke-rounded IconVoiceIdStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconVoiceIdDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="voice-id-duotone-rounded IconVoiceIdDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVoiceIdTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="voice-id-twotone-rounded IconVoiceIdTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconVoiceIdSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="voice-id-solid-rounded IconVoiceIdSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVoiceIdBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="voice-id-bulk-rounded IconVoiceIdBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVoiceIdStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="voice-id-stroke-sharp IconVoiceIdStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVoiceIdSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="voice-id-solid-sharp IconVoiceIdSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfVoiceId: TheIconSelfPack = {
  name: 'VoiceId',
  StrokeRounded: IconVoiceIdStrokeRounded,
  DuotoneRounded: IconVoiceIdDuotoneRounded,
  TwotoneRounded: IconVoiceIdTwotoneRounded,
  SolidRounded: IconVoiceIdSolidRounded,
  BulkRounded: IconVoiceIdBulkRounded,
  StrokeSharp: IconVoiceIdStrokeSharp,
  SolidSharp: IconVoiceIdSolidSharp,
};