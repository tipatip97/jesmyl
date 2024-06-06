import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.106 10.3188L14.9087 5.64798C15.0417 4.87408 14.5381 4.1361 13.7839 3.99964C13.0296 3.86317 12.3103 4.37992 12.1773 5.15382L10.5719 14.4955L10.4388 15.2196L8.64163 13.3092C7.9896 12.6327 6.91556 12.6944 6.33952 13.4415C5.89875 14.0131 5.88658 14.8216 6.30992 15.4073L9.06506 19.2186C9.69033 20.0836 10.003 20.5161 10.3792 20.8523C10.9532 21.365 11.641 21.7219 12.3808 21.8906C12.8657 22.0012 13.3868 22.0012 14.4289 22.0012H16.2461C18.6376 22.0012 20.6943 20.3055 21.1532 17.9554L21.8989 14.1368L21.9792 13.6697C22.1122 12.8957 21.6086 12.1578 20.8543 12.0213C20.1 11.8848 19.3808 12.4016 19.2478 13.1755L19.1675 13.6426M14.106 10.3188L13.8652 11.7201M14.106 10.3188C14.239 9.54494 14.9583 9.0282 15.7126 9.16466C16.4668 9.30112 16.9705 10.0391 16.8375 10.813L16.6769 11.7472M16.6769 11.7472L16.5966 12.2143M16.6769 11.7472C16.8099 10.9733 17.5292 10.4565 18.2834 10.593C19.0377 10.7294 19.5413 11.4674 19.4083 12.2413L19.3281 12.7084',
  d2: 'M9.87479 4.61865C9.87479 4.61865 10.1205 2.39508 9.87479 2.15268M9.87479 2.15268C9.55602 1.8383 7.33416 2.10294 7.33416 2.10294M9.87479 2.15268L6.90237 5.09854M2.10872 7.35171C2.10872 7.35171 1.86301 9.57529 2.10872 9.81769M2.10872 9.81769C2.42748 10.1321 4.64934 9.86743 4.64934 9.86743M2.10872 9.81769L5.08113 6.87183',
  d3: 'M9.06457 19.2211L6.30943 15.4147C5.88609 14.8298 5.89826 14.0223 6.33903 13.4514C6.91507 12.7053 7.98911 12.6437 8.64114 13.3193L10.4383 15.2272L10.5714 14.5041L12.1768 5.17451C12.3098 4.40162 13.0291 3.88554 13.7834 4.02183C14.5376 4.15811 15.0412 4.89514 14.9082 5.66803L14.1055 10.3328C14.2385 9.55994 14.9578 9.04387 15.7121 9.18015C16.4663 9.31643 16.97 10.0535 16.837 10.8264L16.6764 11.7593C16.8094 10.9864 17.5287 10.4703 18.2829 10.6066C19.0372 10.7429 19.5408 11.4799 19.4078 12.2528L19.2473 13.1858C19.3803 12.4129 20.0995 11.8968 20.8538 12.0331C21.6081 12.1694 22.1117 12.9064 21.9787 13.6793L21.8984 14.1458L21.1527 17.9595C20.6938 20.3065 18.6371 22 16.2456 22H14.4284C13.3863 22 12.8652 22 12.3803 21.8896C11.6405 21.7211 10.9527 21.3647 10.3787 20.8526C10.0025 20.5169 9.68984 20.0849 9.06457 19.2211Z',
  d4: 'M14.1055 10.3328L14.9082 5.66803C15.0412 4.89514 14.5376 4.15811 13.7834 4.02183C13.0291 3.88554 12.3098 4.40162 12.1768 5.17451L10.5714 14.5041L10.4383 15.2272L8.64114 13.3193C7.98911 12.6437 6.91507 12.7053 6.33903 13.4514C5.89826 14.0223 5.88609 14.8298 6.30943 15.4147L9.06457 19.2211C9.68984 20.0849 10.0025 20.5169 10.3787 20.8526C10.9527 21.3647 11.6405 21.7211 12.3803 21.8896C12.8652 22 13.3863 22 14.4284 22H16.2456C18.6371 22 20.6938 20.3065 21.1527 17.9595L21.8984 14.1458L21.9787 13.6793C22.1117 12.9064 21.6081 12.1694 20.8538 12.0331C20.0995 11.8968 19.3803 12.4129 19.2473 13.1858L19.167 13.6523M14.1055 10.3328L13.8647 11.7323M14.1055 10.3328C14.2385 9.55994 14.9578 9.04387 15.7121 9.18015C16.4663 9.31643 16.97 10.0535 16.837 10.8264L16.6764 11.7593M16.6764 11.7593L16.5961 12.2258M16.6764 11.7593C16.8094 10.9864 17.5287 10.4703 18.2829 10.6066C19.0372 10.7429 19.5408 11.4799 19.4078 12.2528L19.3276 12.7193',
  d5: 'M6.95596 2.49064C6.95596 2.49064 6.70432 4.76405 6.95596 5.01188M6.95596 5.01188C7.28241 5.33331 9.55781 5.06274 9.55781 5.06274M6.95596 5.01188L10 2M5.04404 9.50936C5.04404 9.50936 5.29568 7.23595 5.04404 6.98812M5.04404 6.98812C4.71759 6.66669 2.44219 6.93726 2.44219 6.93726M5.04404 6.98812L2 10',
  d6: 'M14.102 10.3246L14.905 5.65589C15.038 4.88234 14.5342 4.14469 13.7798 4.0083C13.0253 3.87189 12.3058 4.38841 12.1728 5.16195L10.5669 14.4994L10.4337 15.2231L8.63605 13.3136C7.98383 12.6374 6.90948 12.6991 6.33327 13.4458C5.89237 14.0172 5.8802 14.8254 6.30366 15.4108L9.05961 19.2204C9.68506 20.0849 9.99781 20.5173 10.3741 20.8533C10.9483 21.3658 11.6363 21.7225 12.3763 21.8911C12.8614 22.0016 13.3826 22.0016 14.425 22.0016H16.2427C18.6349 22.0016 20.6922 20.3067 21.1513 17.9577L21.8972 14.1408L21.9775 13.6739C22.1106 12.9004 21.6068 12.1627 20.8523 12.0263C20.0978 11.8899 19.3784 12.4064 19.2453 13.18L19.165 13.6469M14.102 10.3246L13.8611 11.7253M14.102 10.3246C14.2351 9.55108 14.9546 9.03457 15.7091 9.17097C16.4635 9.30736 16.9674 10.0451 16.8343 10.8186L16.6737 11.7523M16.6737 11.7523L16.5933 12.2192M16.6737 11.7523C16.8067 10.9787 17.5262 10.4622 18.2806 10.5986C19.0352 10.735 19.5389 11.4727 19.4059 12.2462L19.3256 12.7131',
  d7: 'M9.87856 4.62049C9.87856 4.62049 10.1243 2.39505 9.87856 2.15244M9.87856 2.15244C9.55969 1.8378 7.33718 2.10266 7.33718 2.10266M9.87856 2.15244L6.90527 5.10079M2.11021 7.35586C2.11021 7.35586 1.86443 9.58131 2.11021 9.82392M2.11021 9.82392C2.42907 10.1386 4.65158 9.8737 4.65158 9.8737M2.11021 9.82392L5.08349 6.87557',
  d8: 'M13.6748 3.26759C13.0538 3.15704 12.4456 3.57455 12.3319 4.22536L10.4888 14.7769L10.336 15.5943C10.3066 15.7514 10.1901 15.8789 10.0345 15.9241C9.87891 15.9693 9.71076 15.9245 9.59954 15.8082L7.53915 13.6534C6.97444 13.0789 6.05063 13.1295 5.54934 13.7691C5.16031 14.2655 5.14924 14.9718 5.52335 15.4809L8.68498 19.7838C9.41387 20.7758 9.74214 21.2187 10.1309 21.5604C10.736 22.0923 11.4599 22.4613 12.2369 22.6356C12.7351 22.7474 13.2758 22.7499 14.4916 22.7499H16.5769C19.1154 22.7499 21.2985 20.9791 21.7856 18.5249L22.6404 14.2184L22.7317 13.6958C22.8459 13.0425 22.4125 12.435 21.7885 12.3239C21.1674 12.2134 20.5592 12.6309 20.4455 13.2817L20.3534 13.809C20.3131 14.0398 20.0906 14.1946 19.8563 14.1549C19.6221 14.1152 19.4649 13.896 19.5052 13.6652L19.5973 13.1379C19.6191 13.0134 19.6469 12.7253 19.6894 12.6106L19.7816 12.0832C19.8957 11.4299 19.4623 10.8224 18.8383 10.7114C18.2172 10.6008 17.609 11.0183 17.4954 11.6691L17.4032 12.1965C17.3629 12.4272 17.1404 12.5821 16.9062 12.5424C16.6719 12.5026 16.5147 12.2834 16.5551 12.0527L16.8314 10.4707C16.9455 9.81738 16.5122 9.20988 15.8881 9.0988C15.267 8.98826 14.6589 9.40576 14.5452 10.0566L14.2688 11.6386C14.2285 11.8693 14.006 12.0242 13.7718 11.9845C13.5376 11.9448 13.3804 11.7255 13.4207 11.4948L14.6181 4.63948C14.7322 3.98617 14.2989 3.37866 13.6748 3.26759Z',
  d9: 'M8.70401 1.28557L8.66358 1.28877L7.31611 1.39523C7.0244 1.41828 6.77274 1.60887 6.6715 1.88342C6.57026 2.15796 6.63794 2.46632 6.84485 2.67323L7.5554 3.38377L6.35868 4.58049C6.06578 4.87339 6.06578 5.34826 6.35868 5.64115C6.65157 5.93405 7.12644 5.93405 7.41934 5.64115L8.61606 4.44443L9.32687 5.15524C9.53378 5.36215 9.84213 5.42983 10.1167 5.3286C10.3912 5.22736 10.5818 4.97569 10.6049 4.68399L10.7113 3.33652L10.7144 3.29776C10.7368 3.01482 10.7593 2.73161 10.7461 2.49789C10.7315 2.2392 10.6682 1.89353 10.3873 1.61257C10.1062 1.33151 9.76046 1.26837 9.50181 1.25387C9.26872 1.24081 8.98622 1.2632 8.70401 1.28557Z',
  d10: 'M5.64157 6.35846C5.34869 6.06555 4.87382 6.06554 4.58091 6.35843L3.38416 7.55512L2.67356 6.84452C2.46665 6.63761 2.15829 6.56993 1.88375 6.67117C1.6092 6.7724 1.41861 7.02407 1.39556 7.31578L1.2891 8.66325L1.28579 8.70507V8.70508C1.26346 8.98671 1.2411 9.26869 1.25405 9.50133C1.26844 9.75979 1.33135 10.1059 1.61264 10.3872C1.89383 10.6684 2.23987 10.7314 2.49838 10.7459C2.73166 10.759 3.01436 10.7366 3.29673 10.7142L3.33685 10.711L4.68432 10.6045C4.97603 10.5815 5.22769 10.3909 5.32893 10.1163C5.43017 9.8418 5.36249 9.53345 5.15558 9.32653L4.44482 8.61578L5.64154 7.41912C5.93445 7.12623 5.93446 6.65136 5.64157 6.35846Z',
  d11: 'M5.1164 6.48488L2.35728 9.23775M2.01561 6.59028L1.99805 9.59617H5.01493M6.87625 4.72358L9.6101 2M6.98991 1.60449H10.0071L10.0069 4.59563',
  d12: 'M16.5904 11.8423L16.8211 10.4324C16.9523 9.6752 16.446 8.90766 15.6867 8.77732C14.9273 8.64697 14.2286 9.20498 14.0974 9.96217M19.157 13.3012L19.4008 11.8227C19.532 11.0655 19.0154 10.3531 18.256 10.2228C17.4967 10.0925 16.7951 10.6638 16.664 11.421M13.8635 11.3261L14.9088 5.20247C14.9976 4.43057 14.4992 3.73496 13.7982 3.61504C13.0429 3.48582 12.3684 3.95779 12.1968 4.67627L10.428 14.7714L8.84192 13.0555C8.18958 12.2506 7.21031 12.1845 6.50989 12.8055C5.97394 13.2806 5.84472 14.0791 6.17007 14.716L9.96923 21.5497C9.98688 21.5814 10.0203 21.6011 10.0566 21.6011L20.4242 21.6006C20.4727 21.6006 20.5142 21.5658 20.5226 21.518L21.9825 13.2442C22.1138 12.487 21.5809 11.7664 20.8216 11.636C20.0622 11.5057 19.3557 12.1392 19.2245 12.8964',
  d13: 'M13.681 3.26799C13.0457 3.15568 12.4251 3.57998 12.3092 4.23903L10.4722 14.6853L10.1767 16.2552L7.58094 13.5587C7.00588 12.9775 6.06459 13.0288 5.55432 13.6755C5.15881 14.1768 5.14758 14.8897 5.52789 15.4038L5.54148 15.4222L9.65938 22.6121L21.3195 22.75L22.7314 13.6248C22.8477 12.9634 22.4062 12.3471 21.7681 12.2343C21.1328 12.1219 20.5122 12.5462 20.3963 13.2053L20.3045 13.7274L19.5154 13.5945L19.7909 12.0283C19.9072 11.3669 19.4656 10.7505 18.8276 10.6377C18.1923 10.5254 17.5716 10.9497 17.4558 11.6088L17.3639 12.1309L16.5749 11.998L16.8503 10.4317C16.9666 9.77038 16.5251 9.15403 15.887 9.04122C15.2517 8.9289 14.6311 9.3532 14.5152 10.0123L14.2398 11.5785L13.4507 11.4457L14.6443 4.65852C14.7606 3.99716 14.3191 3.3808 13.681 3.26799Z',
  d14: 'M8.18902 2.75H7V1.25H10.75V5H9.25V3.81034L7.41848 5.6414L6.35795 4.58061L8.18902 2.75ZM5.64082 7.41923L3.81041 9.25H5V10.75H1.25V7H2.75V8.18909L4.58006 6.35867L5.64082 7.41923Z',
} as const;

export const IconMaximize04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-04-stroke-rounded IconMaximize04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMaximize04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-04-duotone-rounded IconMaximize04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconMaximize04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-04-twotone-rounded IconMaximize04TwotoneRounded"
    >
      <path 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconMaximize04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-04-solid-rounded IconMaximize04SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const IconMaximize04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-04-bulk-rounded IconMaximize04BulkRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const IconMaximize04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-04-stroke-sharp IconMaximize04StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconMaximize04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maximize-04-solid-sharp IconMaximize04SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfMaximize04: TheIconSelfPack = {
  name: 'Maximize04',
  StrokeRounded: IconMaximize04StrokeRounded,
  DuotoneRounded: IconMaximize04DuotoneRounded,
  TwotoneRounded: IconMaximize04TwotoneRounded,
  SolidRounded: IconMaximize04SolidRounded,
  BulkRounded: IconMaximize04BulkRounded,
  StrokeSharp: IconMaximize04StrokeSharp,
  SolidSharp: IconMaximize04SolidSharp,
};