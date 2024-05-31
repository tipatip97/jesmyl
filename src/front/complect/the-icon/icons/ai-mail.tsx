import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.00035 7L3.78154 7.81253C2.90783 8.39501 2.47097 8.68625 2.23422 9.13041C1.99747 9.57457 1.99923 10.0966 2.00273 11.1406C2.00696 12.3975 2.01864 13.6782 2.05099 14.9741C2.12773 18.0487 2.16611 19.586 3.29651 20.7164C4.42691 21.8469 5.98497 21.8858 9.10108 21.9637C11.0397 22.0121 12.9611 22.0121 14.8996 21.9637C18.0158 21.8858 19.5738 21.8469 20.7042 20.7164C21.8346 19.586 21.873 18.0487 21.9497 14.9741C21.9821 13.6782 21.9937 12.3975 21.998 11.1406C22.0015 10.0966 22.0032 9.57456 21.7665 9.13041C21.5297 8.68625 21.0929 8.39501 20.2191 7.81253L19.0003 7',
  d2: 'M2 10L8.91302 14.1478C10.417 15.0502 11.169 15.5014 12 15.5014C12.831 15.5014 13.583 15.0502 15.087 14.1478L22 10',
  d3: 'M5 12V6C5 4.11438 5 3.17157 5.58579 2.58579C6.17157 2 7.11438 2 9 2H15C16.8856 2 17.8284 2 18.4142 2.58579C19 3.17157 19 4.11438 19 6V12',
  d4: 'M8 10L9.61165 5.39528C9.69427 5.15922 9.92623 5 10.1875 5C10.4488 5 10.6807 5.15922 10.7633 5.39528L12.375 10M15 5V10M8.875 8.33333H11.5',
  d5: 'M5 7.00023V12L12 15.5L19 12V7L20.2191 7.81253C21.0929 8.39501 21.5297 8.68625 21.7665 9.13041C22.0032 9.57456 22.0015 10.0966 21.998 11.1406C21.9937 12.3975 21.9821 13.6782 21.9497 14.9741C21.873 18.0487 21.8346 19.586 20.7042 20.7164C19.5738 21.8469 18.0158 21.8858 14.8996 21.9637C12.9611 22.0121 11.0397 22.0121 9.10108 21.9637C5.98497 21.8858 4.42691 21.8469 3.29651 20.7164C2.16611 19.586 2.12773 18.0487 2.05099 14.9741C2.01864 13.6782 2.00696 12.3975 2.00273 11.1406C1.99923 10.0966 1.99747 9.57457 2.23422 9.13041C2.47097 8.68625 2.90783 8.39501 3.78154 7.81253L5 7.00023Z',
  d6: 'M5.62441 6.58405C5.85417 6.9287 5.76104 7.39435 5.4164 7.62412L4.1976 8.43665C3.74928 8.73553 3.45596 8.93199 3.24145 9.10594C3.03912 9.27003 2.9511 9.38007 2.8961 9.48327C2.87412 9.52449 2.85422 9.57047 2.83673 9.62723L9.2993 13.5048C10.0642 13.9637 10.5908 14.2786 11.0284 14.4844C11.4506 14.6829 11.7339 14.7515 12.0004 14.7515C12.2669 14.7515 12.5502 14.6829 12.9724 14.4844C13.41 14.2786 13.9366 13.9637 14.7015 13.5048L21.164 9.62726C21.1465 9.57049 21.1266 9.5245 21.1046 9.48327C21.0496 9.38007 20.9616 9.27003 20.7593 9.10594C20.5448 8.93198 20.2515 8.73553 19.8031 8.43665L18.5843 7.62412C18.2397 7.39435 18.1466 6.9287 18.3763 6.58405C18.6061 6.23941 19.0718 6.14628 19.4164 6.37604L20.6625 7.20679C21.0761 7.48249 21.4286 7.71749 21.7041 7.9409C21.9978 8.17909 22.2466 8.43675 22.4283 8.7777C22.6289 9.15396 22.6999 9.54114 22.7286 9.96088C22.7509 10.286 22.7496 10.6716 22.7481 11.1187L22.748 11.1432C22.7438 12.4028 22.732 13.6895 22.6995 14.9929L22.6981 15.0514C22.661 16.539 22.631 17.7391 22.4607 18.7047C22.282 19.7181 21.9387 20.5427 21.2346 21.2468C20.529 21.9524 19.6977 22.2951 18.6757 22.4737C17.7003 22.644 16.4852 22.6744 14.9766 22.7121L14.9184 22.7135C12.9673 22.7623 11.0335 22.7623 9.08238 22.7135L9.02417 22.7121C7.51556 22.6744 6.30049 22.6441 5.32512 22.4737C4.30305 22.2951 3.47177 21.9524 2.7662 21.2469C2.0621 20.5427 1.71878 19.7181 1.54005 18.7047C1.36975 17.7391 1.33982 16.539 1.30271 15.0514L1.30125 14.9929C1.26871 13.6895 1.257 12.4028 1.25276 11.1432L1.25268 11.1188C1.25117 10.6716 1.24987 10.286 1.27213 9.96084C1.30086 9.54112 1.37185 9.15395 1.5724 8.77771C1.75414 8.43675 2.00292 8.17909 2.29664 7.9409C2.57213 7.71748 2.92463 7.4825 3.33822 7.20679L4.58435 6.37604C4.92899 6.14628 5.39465 6.23941 5.62441 6.58405Z',
  d7: 'M15.052 1.25C15.9505 1.24997 16.6997 1.24995 17.2945 1.32991C17.9223 1.41432 18.4891 1.59999 18.9445 2.05546C19.4 2.51093 19.5857 3.07773 19.6701 3.70552C19.7501 4.3003 19.75 5.04951 19.75 5.94798V5.94801L19.75 12C19.75 12.4142 19.4142 12.75 19 12.75C18.5858 12.75 18.25 12.4142 18.25 12V6C18.25 5.03599 18.2484 4.38843 18.1835 3.90539C18.1214 3.44393 18.0142 3.24644 17.8839 3.11612C17.7536 2.9858 17.5561 2.87858 17.0946 2.81654C16.6116 2.7516 15.964 2.75 15 2.75H9C8.03599 2.75 7.38843 2.7516 6.90539 2.81654C6.44393 2.87858 6.24644 2.9858 6.11612 3.11612C5.9858 3.24644 5.87858 3.44393 5.81654 3.90539C5.7516 4.38843 5.75 5.03599 5.75 6V12C5.75 12.4142 5.41422 12.75 5 12.75C4.58579 12.75 4.25 12.4142 4.25 12L4.25 5.948V5.94797C4.24997 5.0495 4.24995 4.3003 4.32991 3.70552C4.41432 3.07773 4.59999 2.51093 5.05546 2.05546C5.51093 1.59999 6.07773 1.41432 6.70552 1.32991C7.3003 1.24995 8.04951 1.24997 8.94797 1.25H8.948H15.052H15.052Z',
  d8: 'M8.90396 5.14752C9.09807 4.59291 9.62693 4.25 10.1877 4.25C10.7485 4.25 11.2773 4.59291 11.4714 5.14752L10.7736 5.39176L11.4714 5.14752L13.0831 9.75224C13.2199 10.1432 13.0139 10.5711 12.623 10.7079C12.232 10.8447 11.8041 10.6387 11.6673 10.2478L11.2598 9.08333H9.11565L8.7081 10.2478C8.57126 10.6387 8.1434 10.8447 7.75244 10.7079C7.36148 10.5711 7.15548 10.1432 7.29231 9.75224L8.90396 5.14752ZM9.64065 7.58333H10.7348L10.1877 6.02032L9.64065 7.58333ZM15.0002 4.25C15.4144 4.25 15.7502 4.58579 15.7502 5V10C15.7502 10.4142 15.4144 10.75 15.0002 10.75C14.586 10.75 14.2502 10.4142 14.2502 10V5C14.2502 4.58579 14.586 4.25 15.0002 4.25Z',
  d9: 'M4.25 6.59815L3.33822 7.206C2.92463 7.48171 2.57213 7.71669 2.29664 7.94011C2.00292 8.1783 1.75414 8.43596 1.5724 8.77692C1.37185 9.15317 1.30086 9.54033 1.27213 9.96005C1.24987 10.2852 1.25117 10.6708 1.25268 11.1181L1.25276 11.1424C1.257 12.402 1.26871 13.6887 1.30125 14.9921L1.30271 15.0506C1.33982 16.5382 1.36975 17.7383 1.54005 18.7039C1.71878 19.7173 2.0621 20.5419 2.7662 21.2461C3.47177 21.9517 4.30305 22.2943 5.32512 22.4729C6.30049 22.6433 7.51556 22.6736 9.02417 22.7113L9.08238 22.7127C11.0335 22.7615 12.9673 22.7615 14.9184 22.7127L14.9766 22.7113C16.4852 22.6736 17.7003 22.6433 18.6757 22.4729C19.6977 22.2943 20.529 21.9517 21.2346 21.2461C21.9387 20.5419 22.282 19.7173 22.4607 18.7039C22.631 17.7383 22.661 16.5382 22.6981 15.0506L22.6995 14.9921C22.732 13.6887 22.7438 12.402 22.748 11.1424L22.7481 11.118C22.7496 10.6709 22.7509 10.2852 22.7286 9.96009C22.6999 9.54035 22.6289 9.15317 22.4283 8.77691C22.2466 8.43596 21.9978 8.1783 21.7041 7.94011C21.4286 7.7167 21.0761 7.48173 20.6626 7.20603L19.75 6.59766L19.75 8.40043L19.8031 8.43586C20.2515 8.73474 20.5448 8.9312 20.7593 9.10515C20.9616 9.26924 21.0496 9.37928 21.1046 9.48248C21.1266 9.52371 21.1465 9.5697 21.164 9.62647L14.7015 13.504C13.9366 13.9629 13.41 14.2778 12.9724 14.4836C12.5502 14.6821 12.2669 14.7507 12.0004 14.7507C11.7339 14.7507 11.4506 14.6821 11.0284 14.4836C10.5908 14.2778 10.0642 13.9629 9.2993 13.504L2.83673 9.62644C2.85422 9.56968 2.87412 9.5237 2.8961 9.48248C2.9511 9.37928 3.03912 9.26924 3.24145 9.10515C3.45596 8.9312 3.74928 8.73474 4.1976 8.43586L4.25 8.40092L4.25 6.59815Z',
  d10: 'M15.054 1.25H8.94996C8.05151 1.24997 7.30225 1.24995 6.70748 1.32992C6.07968 1.41432 5.51288 1.59999 5.05741 2.05546C4.60194 2.51093 4.41627 3.07773 4.33187 3.70552C4.2519 4.30029 4.25193 5.04949 4.25195 5.94794L4.25196 10.4757L5.75196 11.3757V6C5.75196 5.03599 5.75355 4.38843 5.81849 3.9054C5.88053 3.44393 5.98776 3.24644 6.11807 3.11612C6.24839 2.9858 6.44589 2.87858 6.90735 2.81654C7.39039 2.7516 8.03795 2.75 9.00196 2.75H15.002C15.966 2.75 16.6135 2.7516 17.0966 2.81654C17.558 2.87858 17.7555 2.9858 17.8858 3.11612C18.0162 3.24644 18.1234 3.44393 18.1854 3.9054C18.2504 4.38843 18.252 5.03599 18.252 6V11.375L19.752 10.475L19.752 5.94801C19.752 5.04954 19.752 4.3003 19.672 3.70552C19.5876 3.07773 19.402 2.51093 18.9465 2.05546C18.491 1.59999 17.9242 1.41432 17.2964 1.32992C16.7017 1.24995 15.9524 1.24997 15.054 1.25Z',
  d11: 'M2 10.0479L12 15.5825L22 10.0479',
  d12: 'M5 11.6668V1.99951H19V11.6668',
  d13: 'M4.8249 7.02979L2 9.87883V21.9759C2 22.0314 2.16919 21.9759 2.22407 21.9759H21.9006C21.9555 21.9759 22 22.0314 22 21.9759V9.80715L19.2177 7.02979',
  d14: 'M7.74069 10.6004L10.2666 4.37381L12.7925 10.6004M8.70441 8.36083H11.9397M14.9773 4.10693V10.6004',
  d15: 'M4.46903 6.4707L5.53097 7.53008L3.24035 9.82626L12.0009 14.6458L20.7603 9.8269L18.469 7.53008L19.531 6.4707L22.75 9.69755V22.0004C22.75 22.4146 22.4142 22.7504 22 22.7504H2C1.58579 22.7504 1.25 22.4146 1.25 22.0004V9.69755L4.46903 6.4707Z',
  d16: 'M4.25 1.25H19.75V11.6499H18.25V2.75H5.75V11.6509H4.25V1.25Z',
  d17: 'M9.49252 4.25H11.0081L13.4752 10.4178L12.0825 10.9749L11.3925 9.25H9.10807L8.41811 10.9749L7.02539 10.4178L9.49252 4.25ZM9.70807 7.75H10.7925L10.2503 6.39444L9.70807 7.75ZM15.7503 4.25V10.75H14.2503V4.25H15.7503Z',
} as const;

export const IconAiMailStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-mail-stroke-rounded IconAiMailStrokeRounded"
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

export const IconAiMailDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-mail-duotone-rounded IconAiMailDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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

export const IconAiMailTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-mail-twotone-rounded IconAiMailTwotoneRounded"
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

export const IconAiMailSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-mail-solid-rounded IconAiMailSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconAiMailBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-mail-bulk-rounded IconAiMailBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
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

export const IconAiMailStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-mail-stroke-sharp IconAiMailStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconAiMailSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-mail-solid-sharp IconAiMailSolidSharp"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiMail: TheIconSelfPack = {
  name: 'AiMail',
  StrokeRounded: IconAiMailStrokeRounded,
  DuotoneRounded: IconAiMailDuotoneRounded,
  TwotoneRounded: IconAiMailTwotoneRounded,
  SolidRounded: IconAiMailSolidRounded,
  BulkRounded: IconAiMailBulkRounded,
  StrokeSharp: IconAiMailStrokeSharp,
  SolidSharp: IconAiMailSolidSharp,
};