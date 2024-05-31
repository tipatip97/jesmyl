import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 8.18677C2.60406 6.08705 2.91537 4.77792 3.84664 3.84664C4.77792 2.91537 6.08705 2.60406 8.18677 2.5M21.5 8.18677C21.3959 6.08705 21.0846 4.77792 20.1534 3.84664C19.2221 2.91537 17.9129 2.60406 15.8132 2.5M15.8132 21.5C17.9129 21.3959 19.2221 21.0846 20.1534 20.1534C21.0846 19.2221 21.3959 17.9129 21.5 15.8132M8.18676 21.5C6.08705 21.3959 4.77792 21.0846 3.84664 20.1534C2.91537 19.2221 2.60406 17.9129 2.5 15.8132',
  d2: 'M19.6352 11.3178C19.8784 11.6224 20 11.7746 20 12C20 12.2254 19.8784 12.3776 19.6352 12.6822C18.5423 14.0504 15.7514 17 12 17C8.24862 17 5.45768 14.0504 4.36483 12.6822C4.12161 12.3776 4 12.2254 4 12C4 11.7746 4.12161 11.6224 4.36483 11.3178C5.45768 9.9496 8.24862 7 12 7C15.7514 7 18.5423 9.9496 19.6352 11.3178Z',
  d3: 'M14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12Z',
  d4: 'M20 12C20 11.7746 19.8784 11.6224 19.6352 11.3178C18.5423 9.9496 15.7514 7 12 7C8.24862 7 5.45768 9.9496 4.36483 11.3178C4.12161 11.6224 4 11.7746 4 12C4 12.2254 4.12161 12.3776 4.36483 12.6822C5.45768 14.0504 8.24862 17 12 17C15.7514 17 18.5423 14.0504 19.6352 12.6822C19.8784 12.3776 20 12.2254 20 12ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z',
  d5: 'M9.18557 2.45052C9.2129 3.00213 8.7879 3.47146 8.23629 3.4988C6.16432 3.60148 5.19943 3.90811 4.55377 4.55377C3.90811 5.19943 3.60148 6.16432 3.4988 8.23629C3.47146 8.7879 3.00213 9.21291 2.45052 9.18557C1.89892 9.15823 1.47391 8.6889 1.50125 8.1373C1.60669 6.00982 1.92267 4.35645 3.13956 3.13956C4.35645 1.92267 6.00982 1.60669 8.13729 1.50125C8.6889 1.47391 9.15823 1.89892 9.18557 2.45052ZM14.8145 2.45052C14.8418 1.89892 15.3111 1.47391 15.8628 1.50125C17.9902 1.60669 19.6436 1.92267 20.8605 3.13956C22.0774 4.35645 22.3934 6.00982 22.4988 8.1373C22.5261 8.6889 22.1011 9.15823 21.5495 9.18557C20.9979 9.21291 20.5286 8.7879 20.5012 8.23629C20.3986 6.16432 20.0919 5.19943 19.4463 4.55377C18.8006 3.90811 17.8357 3.60148 15.7638 3.4988C15.2121 3.47146 14.7871 3.00213 14.8145 2.45052ZM2.45052 14.8145C3.00213 14.7871 3.47146 15.2121 3.4988 15.7638C3.60148 17.8357 3.90811 18.8006 4.55377 19.4463C5.19943 20.0919 6.16432 20.3986 8.23629 20.5012C8.78789 20.5286 9.2129 20.9979 9.18556 21.5495C9.15822 22.1011 8.68889 22.5261 8.13729 22.4988C6.00982 22.3934 4.35645 22.0774 3.13956 20.8605C1.92267 19.6436 1.60669 17.9902 1.50125 15.8628C1.47391 15.3111 1.89892 14.8418 2.45052 14.8145ZM21.5495 14.8145C22.1011 14.8418 22.5261 15.3111 22.4988 15.8628C22.3934 17.9902 22.0774 19.6436 20.8605 20.8605C19.6436 22.0774 17.9902 22.3934 15.8628 22.4988C15.3111 22.5261 14.8418 22.1011 14.8145 21.5495C14.7871 20.9979 15.2121 20.5286 15.7638 20.5012C17.8357 20.3986 18.8006 20.0919 19.4463 19.4463C20.0919 18.8006 20.3986 17.8357 20.5012 15.7638C20.5286 15.2121 20.9979 14.7871 21.5495 14.8145Z',
  d6: 'M12 6.25C9.92311 6.25 8.13972 7.06646 6.75659 8.03055C5.37364 8.99453 4.30404 10.1915 3.73142 10.9084C3.53778 11.1468 3.25 11.5011 3.25 12C3.25 12.4989 3.53778 12.8532 3.73142 13.0916C4.30404 13.8085 5.37364 15.0055 6.75659 15.9694C8.13972 16.9335 9.92311 17.75 12 17.75C14.0769 17.75 15.8603 16.9335 17.2434 15.9694C18.6264 15.0055 19.696 13.8085 20.2686 13.0916C20.4622 12.8532 20.75 12.4989 20.75 12C20.75 11.5011 20.4622 11.1468 20.2686 10.9084C19.696 10.1915 18.6264 8.99453 17.2434 8.03055C15.8603 7.06646 14.0769 6.25 12 6.25ZM12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75Z',
  d7: 'M6.75659 8.03055C8.13972 7.06646 9.92311 6.25 12 6.25C14.0769 6.25 15.8603 7.06646 17.2434 8.03055C18.6264 8.99453 19.696 10.1915 20.2686 10.9084C20.4622 11.1468 20.75 11.5011 20.75 12C20.75 12.4989 20.4622 12.8532 20.2686 13.0916C19.696 13.8085 18.6264 15.0055 17.2434 15.9694C15.8603 16.9335 14.0769 17.75 12 17.75C9.92311 17.75 8.13972 16.9335 6.75659 15.9694C5.37364 15.0055 4.30404 13.8085 3.73142 13.0916C3.53778 12.8532 3.25 12.4989 3.25 12C3.25 11.5011 3.53778 11.1468 3.73142 10.9084C4.30404 10.1915 5.37364 8.99453 6.75659 8.03055Z',
  d8: 'M9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z',
  d9: 'M2.50081 8.18697L2.50138 2.5L8.18758 2.50019M21.5008 8.18697L21.5008 2.50045L15.814 2.50019M15.814 21.5002H21.5008V15.8134M8.18758 21.5002H2.5L2.50081 15.8134',
  d10: 'M12 7C16.4183 7 20 12 20 12C20 12 16.4183 17 12 17C7.58172 17 4 12 4 12C4 12 7.58172 7 12 7Z',
  d11: 'M1.50138 2.4999C1.50143 1.94764 1.94915 1.49998 2.50141 1.5L8.18762 1.50019L8.18755 3.50019L3.50128 3.50003L3.50081 8.18706L1.50081 8.18687L1.50138 2.4999ZM20.5008 3.5004L15.814 3.50019L15.8141 1.50019L21.5009 1.50045C22.0531 1.50047 22.5008 1.94818 22.5008 2.50045L22.5008 8.18697L20.5008 8.18696L20.5008 3.5004ZM1.5 21.5L1.50081 15.8133L3.50081 15.8136L3.50014 20.5002H8.18758V22.5002H2.5C2.23476 22.5002 1.98038 22.3948 1.79284 22.2072C1.6053 22.0197 1.49996 21.7653 1.5 21.5ZM20.5008 20.5002V15.8134H22.5008V21.5002C22.5008 22.0525 22.0531 22.5002 21.5008 22.5002H15.814V20.5002H20.5008Z',
  d12: 'M20.7434 12.2363C20.4995 12.5581 20.0965 13.0898 19.9396 13.2715C19.5175 13.7603 18.9059 14.413 18.1477 15.0677C16.6545 16.3569 14.4815 17.75 12.0007 17.75C9.51995 17.75 7.34688 16.3569 5.8537 15.0677C5.09547 14.413 4.48391 13.7603 4.06176 13.2715C3.90486 13.0898 3.50194 12.5581 3.258 12.2363C3.17307 12.1242 3.10741 12.0376 3.07812 12C3.10741 11.9624 3.17307 11.8758 3.258 11.7637C3.50194 11.4419 3.90486 10.9102 4.06176 10.7285C4.48391 10.2397 5.09547 9.587 5.8537 8.93232C7.34688 7.64307 9.51995 6.25 12.0007 6.25C14.4815 6.25 16.6545 7.64307 18.1477 8.93232C18.9059 9.587 19.5175 10.2397 19.9396 10.7285C20.0965 10.9102 20.4995 11.4419 20.7434 11.7637C20.8283 11.8758 20.894 11.9624 20.9233 12C20.894 12.0376 20.8283 12.1242 20.7434 12.2363ZM12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75Z',
} as const;

export const IconVisionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vision-stroke-rounded IconVisionStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconVisionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vision-duotone-rounded IconVisionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVisionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vision-twotone-rounded IconVisionTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVisionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vision-solid-rounded IconVisionSolidRounded"
    >
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

export const IconVisionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vision-bulk-rounded IconVisionBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVisionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vision-stroke-sharp IconVisionStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVisionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vision-solid-sharp IconVisionSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVision: TheIconSelfPack = {
  name: 'Vision',
  StrokeRounded: IconVisionStrokeRounded,
  DuotoneRounded: IconVisionDuotoneRounded,
  TwotoneRounded: IconVisionTwotoneRounded,
  SolidRounded: IconVisionSolidRounded,
  BulkRounded: IconVisionBulkRounded,
  StrokeSharp: IconVisionStrokeSharp,
  SolidSharp: IconVisionSolidSharp,
};