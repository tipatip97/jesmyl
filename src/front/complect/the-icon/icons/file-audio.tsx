import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.0002 19.0826V15.9174C21.0002 14.1482 21.0002 13.2636 20.4601 13.0435C19.9199 12.8233 19.2842 13.4488 18.0128 14.6998C17.3509 15.351 16.9662 15.4911 16.0419 15.4911C15.2226 15.4911 14.813 15.4911 14.5187 15.6846C13.9152 16.0814 14.0002 16.8627 14.0002 17.5C14.0002 18.1373 13.9152 18.9186 14.5187 19.3154C14.813 19.5089 15.2226 19.5089 16.0419 19.5089C16.9662 19.5089 17.3509 19.649 18.0128 20.3002C19.2842 21.5512 19.9199 22.1767 20.4601 21.9565C21.0002 21.7364 21.0002 20.8518 21.0002 19.0826Z',
  d2: 'M12 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10',
  d3: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M8.49805 8.49792C4.90998 8.49792 3.34179 10.1536 3.0014 10.9896C3 11.3586 3 11.7548 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.83546 22 7.46607 22 10.7273 22H15C15.9293 22 16.394 22 16.7804 21.9231C17.5083 21.7783 18.1634 21.4389 18.6897 20.9606C18.4857 20.7655 18.2614 20.5448 18.0128 20.3002C17.3509 19.649 16.9662 19.5089 16.0419 19.5089C15.2226 19.5089 14.813 19.5089 14.5187 19.3154C13.9806 18.9616 13.9899 18.3021 13.9982 17.7116C13.9992 17.6398 14.0002 17.5691 14.0002 17.5C14.0002 17.4309 13.9992 17.3602 13.9982 17.2884C13.9899 16.6979 13.9806 16.0384 14.5187 15.6846C14.813 15.4911 15.2226 15.4911 16.0419 15.4911C16.9662 15.4911 17.3509 15.351 18.0128 14.6998C18.947 13.7806 19.5379 13.1992 20 13.0427V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C13.2836 2 12.7945 2 12.3445 2.00216C10.0738 2.12886 9.53252 5.06667 9.5492 6.55168C9.59012 8.19468 8.79946 8.49792 8.49805 8.49792Z',
  d5: 'M19.0629 12.7184C19.4791 12.4104 20.0766 12.0793 20.7415 12.3503C21.4125 12.6237 21.6001 13.2835 21.6735 13.7942C21.7487 14.3176 21.7487 15.0252 21.7486 15.8578V15.8579V19.1448V19.1448C21.7487 19.9774 21.7487 20.685 21.6735 21.2085C21.6001 21.7191 21.4125 22.3789 20.7415 22.6524C20.0766 22.9234 19.4791 22.5922 19.0629 22.2842C18.6347 21.9673 18.1271 21.4678 17.5278 20.8781C17.2248 20.5799 17.0055 20.4212 16.8484 20.3591C16.6876 20.2955 16.4746 20.2602 16.0403 20.2602H16.0403C15.6598 20.2602 15.2865 20.2602 15.0071 20.2323C14.7076 20.2023 14.3953 20.1342 14.1051 19.9434C13.5686 19.5907 13.3664 19.0696 13.2918 18.6227C13.2368 18.2934 13.245 17.7629 13.2491 17.5013C13.245 17.2397 13.2368 16.7093 13.2918 16.3799C13.3664 15.9331 13.5686 15.4119 14.1051 15.0592C14.3953 14.8684 14.7076 14.8003 15.0071 14.7704C15.2865 14.7424 15.6598 14.7424 16.0403 14.7424C16.4746 14.7424 16.6876 14.7071 16.8484 14.6435C17.0055 14.5814 17.2248 14.4227 17.5278 14.1245L17.5278 14.1245C18.1271 13.5349 18.6347 13.0353 19.0629 12.7184Z',
  d6: 'M6.93654 22.6472C7.91879 22.75 10.4816 22.75 12.0227 22.75C12.5625 22.75 13 22.3124 13 21.7727C13 21.233 12.5625 20.7954 12.0227 20.7954C10.4141 20.7954 8.00785 20.7941 7.1384 20.7032C6.28448 20.6138 5.80055 20.4471 5.44272 20.194C5.20127 20.0233 4.98889 19.8222 4.8111 19.5978C4.55553 19.2753 4.38609 18.8425 4.29386 18.0558C4.19893 17.246 4.19735 16.1887 4.19735 14.6652L4.19727 11.765C4.19725 11.498 4.19742 10.8595 4.47804 10.3873C4.65097 10.0963 4.87239 9.8532 5.09984 9.72938C5.46635 9.52986 5.88654 9.4165 6.33321 9.4165L7.37358 9.45299C7.75367 9.46088 8.19721 9.44887 8.62536 9.33415C9.45933 9.11069 10.1107 8.45928 10.3342 7.62531C10.4489 7.19716 10.4609 6.75362 10.453 6.37353L10.4165 5.33316C10.4165 4.86547 10.5409 4.45834 10.7583 4.07993C10.885 3.85934 11.1057 3.65745 11.4105 3.48014C11.8726 3.21123 12.426 3.20874 12.7642 3.20722C13.1023 3.20569 13.4591 3.20452 13.7572 3.20452C15.5913 3.20452 16.2584 3.21847 16.7618 3.39582C17.6344 3.70328 18.3001 4.34492 18.6102 5.13029C18.6878 5.32693 18.7427 5.58535 18.7721 6.0333C18.8021 6.48997 18.8026 7.07292 18.8026 7.91318V10.0263C18.8026 10.564 19.2386 11 19.7763 11C20.3141 11 20.75 10.564 20.75 10.0263V7.88C20.75 7.08084 20.75 6.43328 20.7153 5.9047C20.6795 5.36007 20.6039 4.8744 20.4206 4.41024C19.8918 3.07093 18.7834 2.03666 17.4068 1.55166C16.548 1.24907 15.0759 1.24946 13.5209 1.25C10.6813 1.24964 8.99465 1.24943 7.61221 1.73651C5.39221 2.51869 3.61848 4.18143 2.77509 6.31749C2.49397 7.02945 2.36944 7.79416 2.30919 8.711C2.25 9.61171 2.25 10.7243 2.25 12.1426V12.1426V14.7261C2.24998 16.1742 2.24996 17.3469 2.35985 18.2842C2.47396 19.2576 2.71721 20.0955 3.28704 20.8145C3.58222 21.187 3.93077 21.5158 4.32114 21.7919C5.0659 22.3185 5.92712 22.5416 6.93654 22.6472Z',
  d7: 'M11.988 21.9961H3.01C3.00448 21.9961 3 21.9916 3 21.9861V8.99863L10 2H19.99C19.9955 2 20 2.00448 20 2.01V9.99338M10 2.63407V8.99863H3.56763',
  d8: 'M13.998 19.5005L13.9981 15.5099C13.9981 15.5044 14.0026 15.4999 14.0081 15.4999H16.9949L20.9828 13.0052C20.9894 13.001 20.998 13.0058 20.998 13.0137V21.9936C20.998 22.0015 20.9894 22.0063 20.9828 22.0021L17.0071 19.5106H14.008C14.0025 19.5106 13.998 19.5061 13.998 19.5005Z',
  d9: 'M21.2492 22.7501V13.75L17.248 16.25H14.248V20.25H17.248L21.2492 22.7501Z',
  d10: 'M21.25 2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H10.1362L2.75 8.66338V21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H12.5131V20.7955H4.69727V10.0455H11.5131L11.5131 3.20459H19.3025V11H21.25V2.22727Z',
} as const;

export const IconFileAudioStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-audio-stroke-rounded IconFileAudioStrokeRounded"
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

export const IconFileAudioDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-audio-duotone-rounded IconFileAudioDuotoneRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconFileAudioTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-audio-twotone-rounded IconFileAudioTwotoneRounded"
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

export const IconFileAudioSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-audio-solid-rounded IconFileAudioSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileAudioBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-audio-bulk-rounded IconFileAudioBulkRounded"
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

export const IconFileAudioStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-audio-stroke-sharp IconFileAudioStrokeSharp"
    >
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

export const IconFileAudioSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-audio-solid-sharp IconFileAudioSolidSharp"
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

export const iconPackOfFileAudio: TheIconSelfPack = {
  name: 'FileAudio',
  StrokeRounded: IconFileAudioStrokeRounded,
  DuotoneRounded: IconFileAudioDuotoneRounded,
  TwotoneRounded: IconFileAudioTwotoneRounded,
  SolidRounded: IconFileAudioSolidRounded,
  BulkRounded: IconFileAudioBulkRounded,
  StrokeSharp: IconFileAudioStrokeSharp,
  SolidSharp: IconFileAudioSolidSharp,
};