import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.0357 21.9286C17.5388 21.9286 22 17.4674 22 11.9643C22 6.46117 17.5388 2 12.0357 2C6.53258 2 2.07141 6.46117 2.07141 11.9643C2.07141 13.7792 1.72192 15.4808 2.56974 16.9464L2.07141 21.9286L7.05356 21.4304C8.51918 22.2782 10.2208 21.9286 12.0357 21.9286Z',
  d2: 'M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.275 5.4044 14.4704 6 15.5L5 19L8.5 18C9.52961 18.5956 10.725 19 12 19Z',
  d3: 'M22 11.9643C22 17.4674 17.5389 21.9286 12.0357 21.9286C11.6181 21.9286 11.2065 21.9471 10.8024 21.9653C9.45022 22.0261 8.18196 22.0831 7.05358 21.4304L2.07143 21.9286L2.56975 16.9464C1.91698 15.818 1.97399 14.5497 2.03477 13.1974C2.05293 12.7934 2.07143 12.3818 2.07143 11.9643C2.07143 6.46117 6.5326 2 12.0357 2C17.5389 2 22 6.46117 22 11.9643ZM19 12C19 15.866 15.866 19 12 19C10.725 19 9.52962 18.5956 8.50001 18L5.00002 19L6.00002 15.5C5.40442 14.4704 5.00002 13.275 5.00002 12C5.00002 8.13401 8.13402 5 12 5C15.866 5 19 8.13401 19 12Z',
  d4: 'M1.93886 15.0505C2.34485 14.9652 2.74308 15.2253 2.82833 15.6313C2.90041 15.9745 3.01433 16.2933 3.18859 16.5946C3.26748 16.731 3.30149 16.8887 3.28581 17.0455L3.16104 18.2929C3.11975 18.7057 2.75165 19.0069 2.33886 18.9656C1.92607 18.9243 1.62491 18.5562 1.66619 18.1434L1.76806 17.125C1.57163 16.7364 1.44192 16.3392 1.35809 15.94C1.27284 15.534 1.53286 15.1357 1.93886 15.0505Z',
  d5: 'M21.5289 15.1071C21.9121 15.266 22.094 15.7055 21.9351 16.0887C21.5731 16.9615 21.0995 17.7759 20.5323 18.514C20.2795 18.843 19.8079 18.9047 19.479 18.6519C19.15 18.3991 19.0883 17.9276 19.3411 17.5986C19.8292 16.9634 20.2364 16.2631 20.5474 15.5132C20.7063 15.13 21.1457 14.9482 21.5289 15.1071Z',
  d6: 'M18.6899 19.441C18.9427 19.77 18.8809 20.2415 18.552 20.4943C17.8138 21.0616 16.9995 21.5352 16.1267 21.8971C15.7435 22.056 15.304 21.8742 15.1451 21.491C14.9862 21.1078 15.168 20.6683 15.5512 20.5094C16.3011 20.1984 17.0013 19.7913 17.6366 19.3031C17.9655 19.0503 18.4371 19.1121 18.6899 19.441Z',
  d7: 'M2.23883 19.9656C2.65162 20.0069 2.95278 20.375 2.91149 20.7878L2.87809 21.1217L3.212 21.0883C3.62479 21.0471 3.99289 21.3482 4.03417 21.761C4.07545 22.1738 3.77428 22.5419 3.36149 22.5832L2.11404 22.7079C1.88986 22.7303 1.66746 22.6509 1.50815 22.4916C1.34884 22.3323 1.26946 22.1099 1.29188 21.8857L1.41665 20.6383C1.45794 20.2255 1.82604 19.9243 2.23883 19.9656Z',
  d8: 'M6.95435 20.7141C7.11111 20.6984 7.26884 20.7324 7.40521 20.8113C7.70644 20.9856 8.02524 21.0995 8.36853 21.1716C8.77453 21.2568 9.03456 21.655 8.94932 22.061C8.86409 22.467 8.46586 22.727 8.05986 22.6418C7.66059 22.558 7.26337 22.4283 6.87482 22.2318L5.85639 22.3337C5.4436 22.375 5.0755 22.0738 5.03422 21.661C4.99294 21.2482 5.29411 20.8801 5.7069 20.8388L6.95435 20.7141Z',
  d9: 'M14.0671 21.779C14.1208 22.1904 13.8308 22.5673 13.4195 22.621C12.9607 22.6808 12.4932 22.7116 12.0189 22.7116C11.6178 22.7116 11.2203 22.7295 10.8109 22.7479L10.7819 22.7492C10.3674 22.7678 10.0164 22.447 9.99774 22.0325C9.97912 21.6181 10.3 21.2671 10.7144 21.2484L10.7557 21.2466C11.1563 21.2286 11.5835 21.2093 12.0189 21.2093C12.4281 21.2093 12.8307 21.1828 13.2252 21.1313C13.6365 21.0776 14.0135 21.3676 14.0671 21.779Z',
  d10: 'M10.6185 1.34066C11.0772 1.28082 11.5447 1.25 12.0191 1.25C12.4934 1.25 12.9609 1.28082 13.4197 1.34066C13.831 1.39432 14.121 1.7713 14.0673 2.18266C14.0137 2.59402 13.6367 2.884 13.2253 2.83034C12.8309 2.77889 12.4283 2.7523 12.0191 2.7523C11.6099 2.7523 11.2073 2.77889 10.8128 2.83034C10.4014 2.884 10.0245 2.59402 9.9708 2.18266C9.91714 1.77129 10.2071 1.39432 10.6185 1.34066Z',
  d11: 'M15.1453 2.47068C15.3042 2.08747 15.7437 1.90564 16.1269 2.06455C16.9997 2.42648 17.814 2.90009 18.5522 3.46734C18.8811 3.72011 18.9429 4.19169 18.6901 4.52063C18.4373 4.84958 17.9657 4.91132 17.6368 4.65854C17.0015 4.17037 16.3012 3.76321 15.5514 3.45226C15.1682 3.29335 14.9864 2.85388 15.1453 2.47068Z',
  d12: 'M8.89286 2.47068C9.05177 2.85388 8.86994 3.29335 8.48673 3.45226C7.73689 3.76321 7.03661 4.17037 6.40135 4.65854C6.07241 4.91132 5.60083 4.84958 5.34805 4.52063C5.09527 4.19169 5.15702 3.72012 5.48596 3.46734C6.22412 2.90009 7.03848 2.42648 7.91127 2.06455C8.29448 1.90564 8.73395 2.08747 8.89286 2.47068Z',
  d13: 'M19.4792 5.30972C19.8081 5.05694 20.2797 5.11868 20.5325 5.44763C21.0997 6.18579 21.5733 7.00015 21.9352 7.87294C22.0942 8.25615 21.9123 8.69562 21.5291 8.85453C21.1459 9.01344 20.7064 8.83161 20.5475 8.4484C20.2366 7.69856 19.8294 6.99828 19.3413 6.36302C19.0885 6.03408 19.1502 5.5625 19.4792 5.30972Z',
  d14: 'M4.55897 5.30972C4.88791 5.5625 4.94965 6.03408 4.69687 6.36302C4.2087 6.99828 3.80154 7.69856 3.4906 8.4484C3.33169 8.83161 2.89222 9.01344 2.50901 8.85453C2.1258 8.69562 1.94397 8.25615 2.10288 7.87294C2.46481 7.00015 2.93842 6.18579 3.50567 5.44763C3.75845 5.11869 4.23003 5.05694 4.55897 5.30972Z',
  d15: 'M2.22099 9.93247C2.63236 9.98612 2.92233 10.3631 2.86868 10.7745C2.81722 11.1689 2.79064 11.5715 2.79064 11.9807C2.79064 12.4161 2.77143 12.8432 2.75342 13.2438L2.75156 13.2852C2.73295 13.6996 2.3819 14.0205 1.96747 14.0019C1.55304 13.9833 1.23216 13.6322 1.25077 13.2178L1.25208 13.1885C1.27048 12.7791 1.28833 12.3818 1.28833 11.9807C1.28833 11.5064 1.31916 11.0389 1.37899 10.5801C1.43265 10.1688 1.80963 9.87881 2.22099 9.93247Z',
  d16: 'M21.8171 9.93247C22.2285 9.87881 22.6055 10.1688 22.6591 10.5801C22.719 11.0389 22.7498 11.5064 22.7498 11.9807C22.7498 12.4551 22.719 12.9226 22.6591 13.3813C22.6055 13.7927 22.2285 14.0827 21.8171 14.029C21.4058 13.9753 21.1158 13.5984 21.1695 13.187C21.2209 12.7925 21.2475 12.3899 21.2475 11.9807C21.2475 11.5715 21.2209 11.1689 21.1695 10.7745C21.1158 10.3631 21.4058 9.98612 21.8171 9.93247Z',
  d17: 'M4.25002 12C4.25002 7.71979 7.71981 4.25 12 4.25C16.2802 4.25 19.75 7.71979 19.75 12C19.75 16.2802 16.2802 19.75 12 19.75C10.6847 19.75 9.46256 19.3679 8.40762 18.8064L5.20606 19.7211C4.94416 19.796 4.66229 19.7229 4.46969 19.5303C4.27709 19.3377 4.20405 19.0559 4.27888 18.794L5.19361 15.5924C4.63216 14.5375 4.25002 13.3153 4.25002 12Z',
  d18: 'M12.0357 21.9286C17.5389 21.9286 22 17.4674 22 11.9643C22 6.46117 17.5389 2 12.0357 2C6.53257 2 2.0714 6.46117 2.0714 11.9643C2.0714 13.7792 1.72191 15.4808 2.56972 16.9464L2.0714 21.9286L7.05355 21.4304C8.51916 22.2782 10.2208 21.9286 12.0357 21.9286Z',
  d19: 'M12.0153 18.9817C15.8794 18.9817 19.012 15.8491 19.012 11.985C19.012 8.12081 15.8794 4.98828 12.0153 4.98828C8.15111 4.98828 5.01859 8.12081 5.01859 11.985C5.01859 13.3063 5.32216 14.4319 5.95875 15.4861L5.02174 18.9699C5.02034 18.9751 5.02511 18.9799 5.03031 18.9785L8.49694 18.0471C9.55532 18.6908 10.686 18.9817 12.0153 18.9817Z',
  d20: 'M10.6181 1.34066C11.0769 1.28082 11.5444 1.25 12.0188 1.25C12.4931 1.25 12.9607 1.28082 13.4194 1.34066L13.2251 2.83041C12.8306 2.77896 12.428 2.75237 12.0188 2.75237C11.6096 2.75237 11.2069 2.77896 10.8125 2.83041L10.6181 1.34066ZM16.1268 2.06459C16.9996 2.42653 17.814 2.90016 18.5522 3.46743L17.6367 4.65869C17.0014 4.1705 16.3011 3.76332 15.5513 3.45236L16.1268 2.06459ZM5.48538 3.46744C6.22357 2.90016 7.03797 2.42653 7.9108 2.06459L8.48629 3.45236C7.73641 3.76332 7.0361 4.1705 6.40081 4.65869L5.48538 3.46744ZM20.5326 5.44781C21.0998 6.18601 21.5735 7.0004 21.9354 7.87323L20.5476 8.44872C20.2367 7.69885 19.8295 6.99854 19.3413 6.36325L20.5326 5.44781ZM2.10215 7.87323C2.4641 7.00041 2.93772 6.18601 3.505 5.44781L4.69626 6.36325C4.20806 6.99854 3.80089 7.69885 3.48993 8.44872L2.10215 7.87323ZM1.28756 11.9812C1.28756 11.5068 1.31839 11.0393 1.37823 10.5806L2.86798 10.7749C2.81652 11.1694 2.78993 11.572 2.78993 11.9812C2.78993 12.4166 2.77073 12.8437 2.75271 13.2444L2.75086 13.2857L1.25 13.2183L1.25131 13.1891C1.26971 12.7797 1.28756 12.3823 1.28756 11.9812ZM22.6593 10.5806C22.7192 11.0393 22.75 11.5068 22.75 11.9812C22.75 12.4556 22.7192 12.9231 22.6593 13.3819L21.1696 13.1875C21.221 12.7931 21.2476 12.3904 21.2476 11.9812C21.2476 11.572 21.221 11.1694 21.1696 10.7749L22.6593 10.5806ZM21.9354 16.0892C21.5735 16.962 21.0998 17.7764 20.5326 18.5146L19.3413 17.5992C19.8295 16.9639 20.2367 16.2636 20.5476 15.5137L21.9354 16.0892ZM1.7675 17.1255C1.57106 16.7369 1.44134 16.3397 1.35751 15.9404L2.82781 15.6317C2.8999 15.975 3.01382 16.2938 3.18809 16.5951C3.26698 16.7315 3.30099 16.8892 3.28531 17.046L3.16054 18.2935L1.66563 18.144L1.7675 17.1255ZM18.5522 20.495C17.814 21.0623 16.9996 21.5359 16.1268 21.8978L15.5513 20.5101C16.3011 20.1991 17.0015 19.7919 17.6367 19.3037L18.5522 20.495ZM1.29129 21.8865L1.41607 20.639L2.91098 20.7885L2.87758 21.1224L3.21151 21.089L3.361 22.5839L2.11349 22.7087C1.88931 22.7311 1.66689 22.6517 1.50758 22.4924C1.34826 22.3331 1.26887 22.1107 1.29129 21.8865ZM6.95402 20.7148C7.11079 20.6991 7.26852 20.7331 7.4049 20.812C7.70615 20.9863 8.02495 21.1002 8.36826 21.1723L8.05958 22.6426C7.6603 22.5587 7.26305 22.429 6.87449 22.2326L5.85601 22.3344L5.70651 20.8395L6.95402 20.7148ZM13.4194 22.6218C12.9607 22.6816 12.4931 22.7124 12.0188 22.7124C11.6177 22.7124 11.2203 22.7303 10.8108 22.7487L10.7817 22.75L10.7143 21.2491L10.7553 21.2473C11.1561 21.2293 11.5833 21.2101 12.0188 21.2101C12.428 21.2101 12.8306 21.1835 13.2251 21.132L13.4194 22.6218Z',
  d21: 'M4.25093 12C4.25093 7.71979 7.72073 4.25 12.0009 4.25C16.2811 4.25 19.7509 7.71979 19.7509 12C19.7509 16.2802 16.2811 19.75 12.0009 19.75C10.6856 19.75 9.46348 19.3679 8.40854 18.8064L5.20697 19.7211C4.94508 19.796 4.6632 19.7229 4.4706 19.5303C4.27801 19.3377 4.20496 19.0559 4.27979 18.794L5.19452 15.5924C4.63307 14.5375 4.25093 13.3153 4.25093 12Z',
} as const;

export const IconSignalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-stroke-rounded IconSignalStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeDasharray="3 3" 
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

export const IconSignalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-duotone-rounded IconSignalDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeDasharray="3 3" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconSignalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-twotone-rounded IconSignalTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeDasharray="3 3" 
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

export const IconSignalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-solid-rounded IconSignalSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-bulk-rounded IconSignalBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      </g>
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-stroke-sharp IconSignalStrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
        strokeDasharray="3 3" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-solid-sharp IconSignalSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSignal: TheIconSelfPack = {
  name: 'Signal',
  StrokeRounded: IconSignalStrokeRounded,
  DuotoneRounded: IconSignalDuotoneRounded,
  TwotoneRounded: IconSignalTwotoneRounded,
  SolidRounded: IconSignalSolidRounded,
  BulkRounded: IconSignalBulkRounded,
  StrokeSharp: IconSignalStrokeSharp,
  SolidSharp: IconSignalSolidSharp,
};