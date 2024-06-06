import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.5 11.5L6.08998 13.2453C5.1458 13.7285 4.42974 14.5647 4.14652 15.5868C3.66954 17.3083 3 20.0686 3 22M14.5 11.5L17.91 13.2453C18.8542 13.7285 19.5703 14.5647 19.8535 15.5868C20.3305 17.3083 21 20.0686 21 22',
  d2: 'M7 22C7 20.8473 7.5 17 8.00137 16',
  d3: 'M8 16.9586C9.4359 17.1947 12.8462 16.5336 15 12',
  d4: 'M12 20C12 20 17 18 18 13.5',
  d5: 'M20 16.5C19.5452 18.7075 18.5 21 17 22',
  d6: 'M15.5005 9.05826L15.921 6.9029C16.4159 4.36646 14.5233 2 12 2C9.47667 2 7.58414 4.36646 8.07901 6.9029L8.49952 9.05826C8.83325 10.7688 10.2983 12 12 12C13.7017 12 15.1668 10.7688 15.5005 9.05826Z',
  d7: 'M8 6L11.0299 5.1362C11.6668 4.9546 12.3332 4.9546 12.9701 5.1362L16 6',
  d8: 'M7 22.002H21C21 20.0706 20.3305 17.3103 19.8535 15.5888C19.5703 14.5667 18.8542 13.7305 17.91 13.2473L15.0389 11.7778L15 12.002C12.8462 16.5356 9.4359 17.1967 8 16.9606L7.71649 16.8528C7.32656 18.379 7 21.0704 7 22.002Z',
  d9: 'M11.0308 5.1362L8.00195 6.00002C8.04889 3.83208 9.78076 2 12.001 2C14.2199 2 15.951 3.82987 15.9999 5.99609L12.9711 5.1362C12.3342 4.9546 11.6678 4.9546 11.0308 5.1362Z',
  d10: 'M8.00137 16C7.5 17 7 20.8473 7 22M8 16.9586C9.4359 17.1947 12.8462 16.5336 15 12',
  d11: 'M9.8417 12.1678C10.2104 11.9791 10.3564 11.5272 10.1676 11.1585C9.97892 10.7897 9.52702 10.6438 9.1583 10.8325L5.74828 12.5778C4.62994 13.1502 3.7667 14.149 3.42375 15.3867C2.94854 17.1018 2.25 19.9538 2.25 22.0002C2.25 22.4144 2.58579 22.7502 3 22.7502C3.41421 22.7502 3.75 22.4144 3.75 22.0002C3.75 20.1838 4.39054 17.5151 4.86929 15.7873C5.09278 14.9807 5.66166 14.3072 6.43169 13.9131L9.8417 12.1678Z',
  d12: 'M14.8417 10.8325C14.473 10.6438 14.0211 10.7897 13.8324 11.1585C13.6547 11.5055 13.7736 11.9263 14.0957 12.1319C12.3824 15.385 10.0238 16.1854 8.70997 16.2462C8.83214 15.8957 8.6782 15.5005 8.33751 15.3297C7.96723 15.1441 7.51656 15.2937 7.33092 15.664C7.16075 16.0034 7.01958 16.5112 6.90184 17.0321C6.7793 17.5742 6.66674 18.2035 6.57124 18.8298C6.38239 20.0685 6.25 21.3646 6.25 22.0002C6.25 22.4144 6.58579 22.7502 7 22.7502H21C21.4142 22.7502 21.75 22.4144 21.75 22.0002C21.75 20.399 21.3224 18.3047 20.9087 16.6476C20.8856 16.5554 20.754 16.5589 20.7346 16.652C20.4421 18.0715 19.9134 19.5467 19.1627 20.74C18.9422 21.0906 18.4791 21.196 18.1285 20.9754C17.7779 20.7549 17.6725 20.2918 17.8931 19.9412C18.5265 18.9344 19.0001 17.6374 19.2656 16.3486L19.2659 16.3471C19.3648 15.8719 19.515 15.1157 19.6434 14.3958C19.7125 14.0078 19.6134 13.6017 19.3258 13.3321C19.245 13.2563 19.0078 12.9769 18.8863 13.0228C18.832 13.0432 18.8204 13.1153 18.7972 13.2594L18.7323 13.6626C18.1792 16.1519 16.5298 17.9135 15.0838 19.0309C14.3555 19.5936 13.2227 20.3831 12.2787 20.6963C11.8942 20.8501 11.4577 20.663 11.3038 20.2785C11.1501 19.8942 11.3368 19.4581 11.7207 19.3039C12.5889 18.9065 13.4095 18.429 14.1666 17.844C15.4659 16.84 16.8115 15.3586 17.2632 13.3589C17.3149 13.0336 17.502 12.5263 17.3475 12.2221C17.274 12.0774 17.1181 11.9976 16.8065 11.8381L14.8417 10.8325Z',
  d13: 'M8.33751 15.3296C8.7078 15.5152 8.85747 15.9659 8.67182 16.3362C8.59131 16.4968 8.48196 16.8449 8.36494 17.3627C8.25272 17.8592 8.14628 18.4513 8.0541 19.0558C7.86761 20.279 7.75 21.4829 7.75 22C7.75 22.4143 7.41421 22.75 7 22.75C6.58579 22.75 6.25 22.4143 6.25 22C6.25 21.3645 6.38239 20.0684 6.57124 18.8297C6.66674 18.2034 6.7793 17.5741 6.90184 17.032C7.01958 16.5111 7.16075 16.0033 7.33092 15.6639C7.51657 15.2936 7.96723 15.1439 8.33751 15.3296Z',
  d14: 'M16.7466 5.93355C16.7792 6.29935 16.7263 6.68847 16.6564 7.04652L16.2359 9.20188C15.8359 11.252 14.0725 12.75 11.9993 12.75C9.92616 12.75 8.1627 11.252 7.76271 9.20188L7.3422 7.04652C7.27234 6.68847 7.21945 6.29935 7.25205 5.93355C7.33376 3.40345 9.36191 1.25 11.9993 1.25C14.6367 1.25 16.6649 3.40345 16.7466 5.93355ZM8.81444 6.75929C8.79191 6.6438 8.86499 6.53308 8.97814 6.50082L11.2348 5.85746C11.7373 5.71418 12.2613 5.71418 12.7638 5.85746L15.0205 6.50082C15.1336 6.53308 15.2067 6.6438 15.1842 6.75928L14.7637 8.91464C14.4962 10.2855 13.3295 11.25 11.9993 11.25C10.6691 11.25 9.50241 10.2855 9.23495 8.91464L8.81444 6.75929Z',
  d15: 'M9.5 11.5L4 14.5L3 22M14.5 11.5L20 14.5L21 22',
  d16: 'M7 22L8.00137 16',
  d17: 'M7.5 18C7.5 18 12.8462 16.5336 15 12',
  d18: 'M20.5 17.5C20.5 17.5 18.5 21 17 22',
  d19: 'M8.00098 6.00003L15.9996 6',
  d20: 'M9.13698 10.8412L3.63487 13.8412C3.42486 13.9557 3.28206 14.1635 3.25044 14.4005L2.24902 22.5519L3.73644 22.7501L4.68755 14.9758L9.85554 12.158L9.13698 10.8412Z',
  d21: 'M14.8575 10.8412L14.385 11.7069L14.3233 11.6776C13.3356 13.7566 11.6005 15.1593 10.0662 16.0511C9.54275 16.3553 9.04919 16.5963 8.62721 16.7813L8.73711 16.1231L7.257 15.8761L6.25525 21.8761C6.21894 22.0936 6.2802 22.3161 6.42276 22.4843C6.56532 22.6526 6.77472 22.7496 6.9953 22.7496H21.0007C21.217 22.7496 21.4227 22.6563 21.5652 22.4937C21.7076 22.331 21.773 22.1148 21.7444 21.9005L21.1779 17.6538C21.0926 17.7514 21.0042 17.8512 20.9133 17.9522C20.4976 18.4142 20.0226 18.9104 19.541 19.3465C19.0683 19.7747 18.5514 20.1801 18.053 20.4256L17.3902 19.0799C17.7005 18.9271 18.0949 18.6325 18.5341 18.2347C18.9645 17.8449 19.4021 17.3891 19.7981 16.949C20.193 16.5101 20.5397 16.0943 20.7878 15.7879C20.8314 15.7341 20.8719 15.6837 20.909 15.6373L20.744 14.4005C20.7124 14.1635 20.5696 13.9557 20.3596 13.8412L19.5256 13.3865C18.9593 14.8859 18.0223 16.0998 17.1396 16.9977C16.4943 17.6539 15.863 18.1569 15.3923 18.4966C15.1565 18.6668 14.9595 18.797 14.8195 18.8858C14.7494 18.9303 14.6935 18.9644 14.6539 18.9882C14.6341 19 14.6183 19.0093 14.607 19.0159L14.5932 19.0239L14.5888 19.0264L14.5867 19.0276C14.5867 19.0276 14.5862 19.0279 14.2158 18.3757C13.8454 17.7236 13.845 17.7238 13.845 17.7238L13.8515 17.72L13.8831 17.7013C13.9123 17.6839 13.9573 17.6564 14.016 17.6192C14.1336 17.5446 14.3055 17.4312 14.5146 17.2803C14.9337 16.9778 15.4969 16.5288 16.07 15.946C16.9082 15.0935 17.7364 13.9869 18.1929 12.6598L14.8575 10.8412Z',
  d22: 'M7.3427 7.04652C6.76187 4.06946 8.982 1.25 11.9998 1.25C15.0176 1.25 17.2378 4.06946 16.6569 7.04652L16.2364 9.20188C15.8364 11.252 14.073 12.75 11.9998 12.75C9.92666 12.75 8.1632 11.252 7.76322 9.20188L7.3427 7.04652ZM8.81429 6.75928L8.8125 6.75003L15.1858 6.75L15.184 6.75928L14.7635 8.91463C14.4961 10.2855 13.3293 11.25 11.9992 11.25C10.669 11.25 9.50227 10.2855 9.23481 8.91464L8.81429 6.75928Z',
};

export const IconHajiStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="haji-stroke-rounded IconHajiStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconHajiDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="haji-duotone-rounded IconHajiDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconHajiTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="haji-twotone-rounded IconHajiTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconHajiSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="haji-solid-rounded IconHajiSolidRounded"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHajiBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="haji-bulk-rounded IconHajiBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconHajiStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="haji-stroke-sharp IconHajiStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHajiSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="haji-solid-sharp IconHajiSolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHaji: TheIconSelfPack = {
  name: 'Haji',
  StrokeRounded: IconHajiStrokeRounded,
  DuotoneRounded: IconHajiDuotoneRounded,
  TwotoneRounded: IconHajiTwotoneRounded,
  SolidRounded: IconHajiSolidRounded,
  BulkRounded: IconHajiBulkRounded,
  StrokeSharp: IconHajiStrokeSharp,
  SolidSharp: IconHajiSolidSharp,
};