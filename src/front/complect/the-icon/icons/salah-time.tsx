import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.0092 5.00163C13.7435 3.18746 11.3856 2.00049 9.00543 2.00049C5.13698 2.00049 2.00098 5.13569 2.00098 9.00316C2.00098 12.7025 4.87016 15.7493 8.50511 16.0058',
  d2: 'M9.00486 7.00244V9.5034L7.50391 10.5038',
  d3: 'M12.6148 15.5486C11.2537 13.8925 11.0215 12.2295 12.969 10.2102C15.0149 8.38506 16.1931 7.52188 16.507 7.00244C16.8209 7.52188 18.0182 8.38506 20.0641 10.2102C21.9183 11.8643 21.8017 13.8925 20.4405 15.5486M12.6148 15.5486H12.0923M12.6148 15.5486H20.4405M20.4405 15.5486H20.9009M11.0215 15.5486H12.0923M12.0923 15.5486V21.0934C12.1323 21.7611 12.0923 22.0727 13.3035 21.9852H16.4881M20.9009 15.5486H22.0001M20.9009 15.5486V21.1949C21.0177 22.1018 20.2956 21.9427 19.8338 21.9852H16.4881M16.4881 21.9852L16.5235 19.8507',
  d4: 'M12.1055 20.929V15.5719H20.9102V20.929C20.9102 21.4341 20.9102 21.6866 20.749 21.8435C20.5878 22.0004 20.3284 22.0004 19.8096 22.0004H13.2061C12.6873 22.0004 12.4278 22.0004 12.2667 21.8435C12.1055 21.6866 12.1055 21.4341 12.1055 20.929Z',
  d5: 'M15.8878 7.70448C15.5269 8.05018 15.0926 8.40183 14.6402 8.76811C12.6551 10.3752 10.3222 12.264 12.3176 15.168C11.3311 15.6986 10.2026 15.9996 9.00375 15.9996C5.13569 15.9996 2 12.8656 2 8.99963C2 5.13364 5.13569 1.99963 9.00375 1.99963C12.4291 1.99963 15.2801 4.45725 15.8878 7.70448Z',
  d6: 'M15.007 4.99963C13.7414 3.18615 11.3837 1.99963 9.00375 1.99963C5.13569 1.99963 2 5.13364 2 8.99963C2 12.6975 4.8689 15.7432 8.50349 15.9996',
  d7: 'M9.00293 6.99963V9.49963L7.50293 10.4996',
  d8: 'M12.6098 15.5458C11.248 13.8897 11.0156 12.2267 12.9642 10.2074C15.0112 8.38225 16.19 7.51907 16.5041 6.99963C16.8181 7.51907 18.0161 8.38225 20.0631 10.2074C21.9183 11.8615 21.8016 13.8897 20.4397 15.5458M12.6098 15.5458H12.087M12.6098 15.5458H20.4397M20.4397 15.5458H20.9003M12.087 15.5458H11.0156M12.087 15.5458V21.0906C12.127 21.7583 12.087 22.0699 13.2988 21.9824H16.4852M20.9003 15.5458H22.0001M20.9003 15.5458V21.1921C21.0172 22.099 20.2947 21.9399 19.8326 21.9824H16.4852M16.4852 21.9824L16.5206 19.8479',
  d9: 'M15.0053 5C13.7399 3.18652 11.3826 2 9.00288 2C5.1353 2 2 5.13401 2 9C2 12.6979 4.86854 15.7436 8.50267 16',
  d10: 'M9.00257 7V9.5L7.50195 10.5',
  d11: 'M12.6086 15.5462C11.2469 13.8901 11.0146 12.2271 12.9629 10.2078C15.0097 8.38262 16.1884 7.51944 16.5024 7C16.8164 7.51944 18.0142 8.38262 20.061 10.2078C21.9159 11.8619 21.7993 13.8901 20.4375 15.5462M12.6086 15.5462H12.0859M12.6086 15.5462H20.4375M20.4375 15.5462H20.8981M12.0859 15.5462H11.0146M12.0859 15.5462V21.091C12.1259 21.7587 12.0859 22.0703 13.2976 21.9828H16.4835M20.8981 15.5462H21.9978M20.8981 15.5462V21.1925C21.015 22.0994 20.2926 21.9403 19.8306 21.9828H16.4835M16.4835 21.9828L16.5189 19.8483',
  d12: 'M16.5 19.8555C17.0523 19.8555 17.5 20.3032 17.5 20.8555L17.5 22.1489C17.5 22.4317 17.5 22.5732 17.5879 22.661C17.6757 22.7489 17.8172 22.7489 18.1 22.7489L19.8355 22.7489C20.0635 22.749 20.3015 22.749 20.5009 22.7229C20.7303 22.6929 21.0184 22.6167 21.2622 22.3792C21.5088 22.1391 21.5907 21.8505 21.6228 21.6178C21.6502 21.4196 21.6501 21.1841 21.65 20.9635L21.65 16.6703C21.65 16.6239 21.65 16.6007 21.6526 16.5812C21.6703 16.4465 21.7762 16.3406 21.9108 16.3229C21.9303 16.3203 21.9536 16.3203 22 16.3203C22.4142 16.3203 22.75 15.9845 22.75 15.5703C22.75 15.1561 22.4142 14.8203 22 14.8203H21.9445C22.1649 14.1905 22.2422 13.5671 22.18 12.9501C22.0639 11.7976 21.478 10.8573 20.8317 10.1059C20.2403 9.41832 19.5191 8.80152 18.9011 8.273L18.9011 8.27299L18.7421 8.13686C18.0414 7.53597 17.5487 7.08727 17.2908 6.6898C17.1121 6.41453 16.8165 6.24999 16.5007 6.25C16.1848 6.25001 15.8892 6.41456 15.7106 6.68985C15.4527 7.0873 14.96 7.53598 14.2593 8.13688L14.1003 8.27304C13.4824 8.80155 12.7612 9.41834 12.1698 10.1059C11.5235 10.8573 10.9376 11.7976 10.8215 12.9501C10.7594 13.5671 10.8367 14.1905 11.057 14.8203H11C10.5858 14.8203 10.25 15.1561 10.25 15.5703C10.25 15.9845 10.5858 16.3203 11 16.3203C11.0464 16.3203 11.0697 16.3203 11.0892 16.3229C11.2238 16.3406 11.3297 16.4465 11.3474 16.5812C11.35 16.6007 11.35 16.6239 11.35 16.6703L11.35 20.9635C11.3499 21.1841 11.3498 21.4196 11.3772 21.6178C11.4093 21.8505 11.4912 22.1391 11.7378 22.3792C11.9816 22.6167 12.2697 22.6929 12.4991 22.7229C12.6985 22.749 12.9365 22.749 13.1645 22.7489L13.1645 22.7489L14.9 22.7489C15.1828 22.7489 15.3243 22.7489 15.4121 22.661C15.5 22.5732 15.5 22.4317 15.5 22.1489L15.5 20.8555C15.5 20.3032 15.9477 19.8555 16.5 19.8555ZM13.1919 14.8203C12.7691 14.1227 12.6845 13.5833 12.7267 13.1644C12.7813 12.6225 13.0681 12.0715 13.5877 11.4674C14.0757 10.9 14.6855 10.3778 15.3281 9.82742L15.4668 9.70861C15.8044 9.4191 16.1674 9.10631 16.5007 8.77505C16.834 9.10631 17.1971 9.41911 17.5347 9.70862L17.6733 9.82737L17.6733 9.82738C18.316 10.3778 18.9258 10.9 19.4138 11.4674C19.9335 12.0716 20.2203 12.6225 20.2749 13.1644C20.3171 13.5833 20.2325 14.1227 19.8096 14.8203H13.1919Z',
  d13: 'M8.98329 3.18749C5.78006 3.18749 3.18332 5.78983 3.18332 8.99998C3.18332 12.0732 5.56216 14.6023 8.56801 14.8149C9.10056 14.8525 9.5018 15.3157 9.46422 15.8494C9.42664 16.3831 8.96445 16.7852 8.43191 16.7476C4.4147 16.4634 1.25 13.0914 1.25 8.99998C1.25 4.71978 4.71231 1.25 8.98329 1.25C11.5745 1.25 14.1591 2.53491 15.5761 4.57077C15.8815 5.00959 15.7742 5.61346 15.3363 5.91954C14.8984 6.22563 14.2958 6.11803 13.9904 5.67921C12.9619 4.20145 10.991 3.18749 8.98329 3.18749Z',
  d14: 'M9 5.99998C9.55228 5.99998 10 6.4477 10 6.99998V9.49998C10 9.83434 9.8329 10.1466 9.5547 10.332L8.0547 11.332C7.59517 11.6384 6.9743 11.5142 6.66795 11.0547C6.3616 10.5952 6.48577 9.97429 6.9453 9.66793L8 8.9648V6.99998C8 6.4477 8.44772 5.99998 9 5.99998Z',
  d15: 'M15 4.99481C13.7351 3.18447 11.3787 2 9 2C5.13401 2 2 5.12859 2 8.98789C2 12.6794 4.86736 15.7198 8.5 15.9758',
  d16: 'M9 5.99341V9.48735L7 10.9848',
  d17: 'M12.1693 15.4309C10.1089 11.9407 12.816 10.3106 13.3398 9.82931C13.7578 9.44517 15.3505 8.53358 15.9968 7.95105C16.545 8.45558 18.3296 9.49519 18.6477 9.81046C18.9658 10.1257 22.035 11.9796 19.8105 15.4309M12.1693 15.4309H19.8105M12.1693 15.4309H10H22H19.8105M12.1693 15.4309V21.9951H15.9899M19.8105 15.4309V21.9951H15.9899M15.9899 21.9951V19.1621',
  d18: 'M9.25218 3.18768C6.04153 3.18768 3.43878 5.79043 3.43878 9.00108C3.43878 12.0748 5.82313 14.6043 8.83594 14.8169L8.69952 16.7499C4.673 16.4657 1.50098 13.0931 1.50098 9.00108C1.50098 4.72021 4.97131 1.24988 9.25218 1.24988C11.8494 1.24988 14.44 2.53499 15.8603 4.57117L14.2709 5.67978C13.24 4.20179 11.2645 3.18768 9.25218 3.18768Z',
  d19: 'M8.25137 8.99988V5.99988H10.2514V9.99988L7.85137 11.7999L6.65137 10.1999L8.25137 8.99988Z',
  d20: 'M17.249 19.1981V22.75H21.499V16.4663H22.499V14.4663H21.8823C22.0913 13.8207 22.158 13.1967 22.0874 12.5935C21.9631 11.5306 21.4297 10.6815 20.805 10.0112C20.1874 9.34844 19.4314 8.8087 18.7725 8.36616C18.5923 8.24511 18.4231 8.1335 18.2646 8.02898C17.8021 7.72396 17.4314 7.47945 17.1472 7.2378L16.4993 6.68689L15.8515 7.23794C15.5673 7.47967 15.1964 7.72431 14.7336 8.02959C14.5754 8.13392 14.4065 8.24536 14.2266 8.36616C13.5677 8.80868 12.8118 9.34839 12.194 10.0111C11.5692 10.6813 11.0356 11.5303 10.9108 12.5931C10.84 13.1964 10.9065 13.8205 11.1153 14.4663H10.499V16.4663H11.499V22.75H15.749V19.1981H17.249ZM19.7197 14.4663H13.2776C12.9198 13.7704 12.849 13.2366 12.8972 12.8262C12.9563 12.3223 13.2127 11.8513 13.6569 11.3749C14.1081 10.8909 14.7003 10.4573 15.3417 10.0264C15.4735 9.93795 15.6112 9.84725 15.7511 9.75508C16.0004 9.59091 16.2569 9.42196 16.4995 9.25249C16.7419 9.42179 16.9981 9.59049 17.2472 9.75452C17.3874 9.84688 17.5254 9.93777 17.6574 10.0264C18.2989 10.4572 18.8909 10.8908 19.3419 11.3748C19.7859 11.8511 20.042 12.322 20.1009 12.8258C20.1489 13.2362 20.0779 13.7702 19.7197 14.4663Z',
} as const;

export const IconSalahTimeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-time-stroke-rounded IconSalahTimeStrokeRounded"
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

export const IconSalahTimeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-time-duotone-rounded IconSalahTimeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSalahTimeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-time-twotone-rounded IconSalahTimeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSalahTimeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-time-solid-rounded IconSalahTimeSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSalahTimeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-time-bulk-rounded IconSalahTimeBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconSalahTimeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-time-stroke-sharp IconSalahTimeStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSalahTimeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-time-solid-sharp IconSalahTimeSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSalahTime: TheIconSelfPack = {
  name: 'SalahTime',
  StrokeRounded: IconSalahTimeStrokeRounded,
  DuotoneRounded: IconSalahTimeDuotoneRounded,
  TwotoneRounded: IconSalahTimeTwotoneRounded,
  SolidRounded: IconSalahTimeSolidRounded,
  BulkRounded: IconSalahTimeBulkRounded,
  StrokeSharp: IconSalahTimeStrokeSharp,
  SolidSharp: IconSalahTimeSolidSharp,
};