import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.002 9.00708C10.8974 9.00708 10.002 9.67865 10.002 10.5071C10.002 11.3355 10.8974 12.0071 12.002 12.0071C13.1065 12.0071 14.002 12.6787 14.002 13.5071C14.002 14.3355 13.1065 15.0071 12.002 15.0071M12.002 9.00708C12.8728 9.00708 13.6136 9.42448 13.8881 10.0071M12.002 9.00708V8.00708M12.002 15.0071C11.1311 15.0071 10.3903 14.5897 10.1158 14.0071M12.002 15.0071V16.0071',
  d2: 'M13 2.50708C13 2.50708 12.6839 2.50708 12 2.50708C7.52166 2.50708 5.28249 2.50708 3.89124 3.89833C2.5 5.28957 2.5 7.52874 2.5 12.0071C2.5 16.4854 2.5 18.7246 3.89124 20.1159C5.28249 21.5071 7.52166 21.5071 12 21.5071C16.4783 21.5071 18.7175 21.5071 20.1088 20.1159C21.5 18.7246 21.5 16.4854 21.5 12.0071C21.5 11.3232 21.5 11.0071 21.5 11.0071',
  d3: 'M21.4883 2.49292L17.3125 6.67112M16.4883 3.01468L16.6065 6.10617C16.6065 6.83481 17.0416 7.2888 17.8341 7.34606L20.9581 7.49292',
  d4: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d5: 'M12.002 9C10.8974 9 10.002 9.67157 10.002 10.5C10.002 11.3284 10.8974 12 12.002 12C13.1065 12 14.002 12.6716 14.002 13.5C14.002 14.3284 13.1065 15 12.002 15M12.002 9C12.8728 9 13.6136 9.4174 13.8881 10M12.002 9V8M12.002 15C11.1311 15 10.3903 14.5826 10.1158 14M12.002 15V16',
  d6: 'M13 2.5C13 2.5 12.6839 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89125C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 11.3161 21.5 11 21.5 11',
  d7: 'M21.5022 2.49707L17.3264 6.67069M16.5022 3.01826L16.6204 6.10635C16.6204 6.8342 17.0555 7.28769 17.848 7.34489L20.9721 7.49158',
  d8: 'M11.9938 9.00918C10.8901 9.00918 9.99536 9.68018 9.99536 10.5079C9.99536 11.3356 10.8901 12.0067 11.9938 12.0067C13.0975 12.0067 13.9923 12.6777 13.9923 13.5054C13.9923 14.3331 13.0975 15.0042 11.9938 15.0042M11.9938 9.00918C12.864 9.00918 13.6042 9.42623 13.8785 10.0083M11.9938 9.00918V8.01001M11.9938 15.0042C11.1236 15.0042 10.3834 14.5871 10.1091 14.005M11.9938 15.0042V16.0033',
  d9: 'M12.9912 2.51489C12.9912 2.51489 12.6754 2.51489 11.992 2.51489C7.51707 2.51489 5.27962 2.51489 3.88944 3.90498C2.49927 5.29506 2.49927 7.53236 2.49927 12.007C2.49927 16.4815 2.49927 18.7189 3.88944 20.109C5.27962 21.499 7.51707 21.499 11.992 21.499C16.4668 21.499 18.7043 21.499 20.0946 20.109C21.4847 18.7189 21.4847 16.4815 21.4847 12.007C21.4847 11.3236 21.4847 11.0078 21.4847 11.0078',
  d10: 'M21.5007 2.50073L17.3281 6.67545M16.4807 3.02375L16.6227 6.11097C16.6227 6.839 17.0574 7.29261 17.8493 7.34983L20.971 7.49656',
  d11: 'M12 3.70239C9.78654 3.70239 8.22466 3.70446 7.04213 3.86345C5.88768 4.01866 5.24203 4.30713 4.77458 4.77458C4.30713 5.24203 4.01865 5.88769 3.86344 7.04213C3.70445 8.22466 3.70238 9.78655 3.70238 12C3.70238 14.2135 3.70445 15.7753 3.86344 16.9579C4.01865 18.1123 4.30713 18.758 4.77458 19.2254C5.24203 19.6929 5.88768 19.9813 7.04213 20.1366C8.22466 20.2955 9.78654 20.2976 12 20.2976C14.2135 20.2976 15.7753 20.2955 16.9579 20.1366C18.1123 19.9813 18.758 19.6929 19.2254 19.2254C19.6929 18.758 19.9813 18.1123 20.1366 16.9579C20.2955 15.7753 20.2976 14.2135 20.2976 12V10.5364C20.2976 9.99731 20.7347 9.55952 21.2738 9.55952C21.8129 9.55952 22.25 9.99658 22.25 10.5357V12.0727C22.25 14.1968 22.25 15.8903 22.0715 17.218C21.8872 18.589 21.4966 19.7153 20.606 20.606C19.7153 21.4966 18.589 21.8872 17.218 22.0715C15.8903 22.25 14.1968 22.25 12.0726 22.25H11.9273C9.80317 22.25 8.10974 22.25 6.78198 22.0715C5.41104 21.8872 4.2847 21.4966 3.39404 20.606C2.50337 19.7153 2.11279 18.589 1.92847 17.218C1.74996 15.8903 1.74998 14.1968 1.75 12.0727V11.9273C1.74998 9.80316 1.74996 8.10973 1.92847 6.78198C2.11279 5.41104 2.50337 4.28471 3.39404 3.39404C4.2847 2.50338 5.41104 2.11279 6.78198 1.92847C8.10973 1.74996 9.80315 1.74998 11.9273 1.75L13.4637 1.75C14.0028 1.75 14.4405 2.18705 14.4405 2.72618C14.4405 3.26532 14.0034 3.70238 13.4643 3.70238L12 3.70239Z',
  d12: 'M20.5541 2.04097C20.9421 1.65301 21.5711 1.65301 21.959 2.04097C22.347 2.42892 22.347 3.05793 21.959 3.44588L20.1586 5.24631L20.2724 5.36011C20.4765 5.56404 20.6924 5.77981 20.8424 5.97055C20.9517 6.10961 21.3526 6.62261 21.1357 7.26119C20.9186 7.90029 20.2951 8.0392 20.1264 8.07637C19.894 8.12754 19.595 8.15539 19.3121 8.18174L19.2636 8.18626C18.818 8.22791 18.3003 8.2647 17.8386 8.24411C17.608 8.23383 17.3552 8.20801 17.1144 8.14644C16.891 8.08936 16.5639 7.97368 16.2951 7.70492C16.0264 7.43617 15.9107 7.10902 15.8536 6.88571C15.7921 6.64482 15.7662 6.39205 15.756 6.16147C15.7354 5.69974 15.7722 5.182 15.8138 4.73648L15.8183 4.68791C15.8447 4.40502 15.8725 4.106 15.9237 3.87368C15.9609 3.70496 16.0998 3.08145 16.7389 2.86434C17.3775 2.6474 17.8904 3.04834 18.0295 3.15767C18.2202 3.30761 18.436 3.52352 18.6399 3.72759L18.7537 3.84139L20.5541 2.04097Z',
  d13: 'M12 6.5C12.5523 6.5 13 6.94772 13 7.5V7.77827C13.8024 8.03113 14.4829 8.58617 14.8085 9.36363C15.0219 9.87302 14.782 10.459 14.2726 10.6723C13.7632 10.8857 13.1772 10.6458 12.9639 10.1364C12.8699 9.91204 12.5363 9.625 12 9.625C11.2818 9.625 11 10.0853 11 10.3125C11 10.5397 11.2818 11 12 11C13.4909 11 15 12.0507 15 13.6875C15 14.9528 14.0981 15.8679 13 16.2181V16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5V16.2217C10.1976 15.9689 9.51714 15.4138 9.19146 14.6364C8.97807 14.127 9.21804 13.541 9.72743 13.3277C10.2368 13.1143 10.8228 13.3542 11.0361 13.8636C11.1301 14.088 11.4637 14.375 12 14.375C12.7182 14.375 13 13.9147 13 13.6875C13 13.4603 12.7182 13 12 13C10.5091 13 9 11.9493 9 10.3125C9 9.04719 9.90187 8.1321 11 7.78192V7.5C11 6.94772 11.4477 6.5 12 6.5Z',
  d14: 'M11.9998 9C10.8952 9 9.99976 9.67157 9.99976 10.5C9.99976 11.3284 10.8952 12 11.9998 12C13.1044 12 13.9998 12.6716 13.9998 13.5C13.9998 14.3284 13.1044 15 11.9998 15M11.9998 9C12.8706 9 13.6114 9.4174 13.886 10M11.9998 9V7.5M11.9998 15C11.129 15 10.3882 14.5826 10.1136 14M11.9998 15V16.5',
  d15: 'M13.5003 2.5H2.49976V21.5H21.5003V10.5',
  d16: 'M21.5002 2.52441L16.8513 7.16137M16.512 2.99833V7.49981H21.0001',
  d17: 'M10.9998 8.14015C10.6277 8.24804 10.2827 8.41646 9.98554 8.63934C9.43419 9.05286 8.99976 9.70046 8.99976 10.5C8.99976 11.2995 9.43419 11.9471 9.98554 12.3607C10.5366 12.7739 11.252 13 11.9998 13C12.3566 13 12.6412 13.1097 12.814 13.2393C12.9865 13.3687 12.9998 13.4711 12.9998 13.5C12.9998 13.5289 12.9865 13.6313 12.814 13.7607C12.6412 13.8903 12.3566 14 11.9998 14C11.3988 14 11.0829 13.7112 11.0181 13.5737L9.20898 14.4263C9.55012 15.1502 10.2293 15.6351 10.9998 15.8585V16.5H12.9998V15.8598C13.3718 15.752 13.7168 15.5835 14.014 15.3607C14.5653 14.9471 14.9998 14.2995 14.9998 13.5C14.9998 12.7005 14.5653 12.0529 14.014 11.6393C13.4629 11.2261 12.7475 11 11.9998 11C11.6429 11 11.3584 10.8903 11.1855 10.7607C11.013 10.6313 10.9998 10.5289 10.9998 10.5C10.9998 10.4711 11.013 10.3687 11.1855 10.2393C11.3584 10.1097 11.6429 10 11.9998 10C12.6007 10 12.9166 10.2888 12.9814 10.4263L14.7905 9.5737C14.4494 8.84981 13.7702 8.36492 12.9998 8.14149V7.5H10.9998V8.14015Z',
  d18: 'M1.49976 2.5C1.49976 1.94772 1.94747 1.5 2.49976 1.5H13.5002V3.5H3.49976V20.5H20.5002V10.5H22.5002V21.5C22.5002 22.0523 22.0525 22.5 21.5002 22.5H2.49976C1.94747 22.5 1.49976 22.0523 1.49976 21.5V2.5Z',
  d19: 'M22.2069 3.2069L18.9183 6.49566H20.9999V8.49566H15.5042L15.5037 2.99565L17.5037 2.99544L17.5039 5.08163L20.7926 1.79272L22.2069 3.2069Z',
} as const;

export const IconMoneyReceiveSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-square-stroke-rounded IconMoneyReceiveSquareStrokeRounded"
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

export const IconMoneyReceiveSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-square-duotone-rounded IconMoneyReceiveSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceiveSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-square-twotone-rounded IconMoneyReceiveSquareTwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceiveSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-square-solid-rounded IconMoneyReceiveSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMoneyReceiveSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-square-bulk-rounded IconMoneyReceiveSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceiveSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-square-stroke-sharp IconMoneyReceiveSquareStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceiveSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-square-solid-sharp IconMoneyReceiveSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneyReceiveSquare: TheIconSelfPack = {
  name: 'MoneyReceiveSquare',
  StrokeRounded: IconMoneyReceiveSquareStrokeRounded,
  DuotoneRounded: IconMoneyReceiveSquareDuotoneRounded,
  TwotoneRounded: IconMoneyReceiveSquareTwotoneRounded,
  SolidRounded: IconMoneyReceiveSquareSolidRounded,
  BulkRounded: IconMoneyReceiveSquareBulkRounded,
  StrokeSharp: IconMoneyReceiveSquareStrokeSharp,
  SolidSharp: IconMoneyReceiveSquareSolidSharp,
};