import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.99854 14.0034V21.9998',
  d2: 'M3.99854 18.3026L7.95845 19.8479C10.476 20.8303 11.7349 21.3216 12.6313 20.7699C13.5278 20.2182 13.5278 18.9524 13.5278 16.4205V8.0061',
  d3: 'M13.5513 2.99895V2.00024',
  d4: 'M7.07812 8.00617H20.0016M9.34857 6.2107C8.70068 6.81575 8.57269 6.91006 8.39523 7.07609C8.14088 7.31408 8.05386 7.67847 8.14242 8.01476L10.196 15.8127C10.3302 16.3219 10.751 16.7058 11.2719 16.7939C12.7668 17.0467 14.2917 17.0557 15.7861 16.7919C16.2798 16.7048 16.6789 16.3418 16.8109 15.8597L18.9668 7.9878C19.052 7.677 18.9918 7.33487 18.7675 7.10291C18.5847 6.91394 18.4566 6.84444 17.778 6.2107C17.0255 5.50799 16.3052 4.23984 16.001 3.85484C15.6968 3.46984 15.4628 3.28084 15.0768 3.19357C14.0804 2.96835 13.0461 2.96835 12.0498 3.19357C11.6638 3.28084 11.4647 3.42324 11.1256 3.85484C10.7864 4.28644 10.101 5.50799 9.34857 6.2107Z',
  d5: 'M18.846 8.24253L17.3405 14.0896C16.996 15.4276 16.8237 16.0966 16.3336 16.51C16.2794 16.5557 16.2228 16.5986 16.1639 16.6386C15.632 17 14.9218 17 13.5013 17C12.0809 17 11.3706 17 10.8387 16.6386C10.7799 16.5986 10.7233 16.5557 10.6691 16.51C10.179 16.0966 10.0067 15.4276 9.66216 14.0896L8.15666 8.24253C8.13377 8.15365 8.11303 8.0731 8.09473 8H18.908C18.8896 8.0732 18.8689 8.15384 18.846 8.24253Z',
  d6: 'M7.0791 8.00593H20.0026M9.34955 6.21046C8.70166 6.81551 8.57367 6.90982 8.39621 7.07585C8.14186 7.31384 8.05484 7.67823 8.1434 8.01452L10.197 15.8125C10.3312 16.3217 10.752 16.7056 11.2729 16.7937C12.7678 17.0465 14.2927 17.0555 15.7871 16.7917C16.2808 16.7046 16.6799 16.3416 16.8119 15.8595L18.9678 7.98756C19.053 7.67676 18.9928 7.33463 18.7685 7.10267C18.5857 6.9137 18.4576 6.8442 17.779 6.21046C17.0265 5.50775 16.3062 4.2396 16.002 3.8546C15.6978 3.4696 15.4638 3.2806 15.0778 3.19333C14.0814 2.96811 13.0471 2.96811 12.0508 3.19333C11.6648 3.2806 11.4657 3.423 11.1266 3.8546C10.7874 4.2862 10.102 5.50775 9.34955 6.21046Z',
  d7: 'M4.00098 14V22',
  d8: 'M4.00098 18.3011L7.94875 19.8471C10.4586 20.83 11.7136 21.3215 12.6073 20.7696C13.501 20.2176 13.501 18.9512 13.501 16.4182V8',
  d9: 'M7.00098 8H20.001',
  d10: 'M13.501 3V2',
  d11: 'M6.90576 8H19.9989',
  d12: 'M13.4526 3V2',
  d13: 'M9.26967 6.20508C8.61713 6.81013 8.48822 6.90444 8.30949 7.07048C8.05332 7.30847 7.96568 7.67285 8.05487 8.00914L10.1232 15.8071C10.2583 16.3163 10.6822 16.7002 11.2068 16.7883C12.7124 17.0411 14.2482 17.0501 15.7533 16.7863C16.2506 16.6991 16.6525 16.3361 16.7855 15.8541L18.9568 7.98219C19.0425 7.67138 18.982 7.32926 18.756 7.0973C18.5719 6.90833 18.4429 6.83883 17.7595 6.20508C17.0016 5.50237 16.2761 4.23423 15.9698 3.84922C15.6634 3.46422 15.4277 3.27522 15.0389 3.18796C14.0354 2.96274 12.9937 2.96274 11.9902 3.18796C11.6014 3.27522 11.401 3.41763 11.0594 3.84922C10.7178 4.28082 10.0275 5.50237 9.26967 6.20508Z',
  d14: 'M4.00146 18.3028L7.98974 19.8481C10.5253 20.8306 11.7932 21.3218 12.6961 20.7702C13.5989 20.2184 13.5989 18.9526 13.5989 16.4207V8.00635M4.00146 14.0036V22',
  d15: 'M13.5003 7C14.0526 7 14.5003 7.44772 14.5003 8V16.4182C14.5003 16.4463 14.5003 16.4743 14.5003 16.5022C14.5003 17.6969 14.5004 18.7128 14.3761 19.4939C14.2437 20.3264 13.9358 21.124 13.132 21.6204C12.349 22.104 11.4881 22.0567 10.6508 21.8565C9.84356 21.6635 8.84871 21.2738 7.65393 20.8059L5.00027 19.7666V22C5.00027 22.5523 4.55255 23 4.00027 23C3.44798 23 3.00027 22.5523 3.00027 22V18.3239C2.99991 18.3085 2.99991 18.2931 3.00027 18.2777V14C3.00027 13.4477 3.44798 13 4.00027 13C4.55255 13 5.00027 13.4477 5.00027 14V17.6187L8.3127 18.916C9.59634 19.4187 10.4606 19.7546 11.1159 19.9113C11.757 20.0646 11.9705 19.9871 12.0811 19.9187C12.1711 19.8632 12.31 19.7517 12.401 19.1797C12.4972 18.5745 12.5003 17.7201 12.5003 16.4182V8C12.5003 7.44772 12.948 7 13.5003 7Z',
  d16: 'M11.8408 2.12768C12.2769 1.9989 13.0507 1.99944 13.6621 2.00009C14.2568 1.99946 14.7573 1.99894 15.1895 2.12526C15.617 2.25024 15.93 2.4143 16.2747 2.69603C16.4884 2.87078 16.6635 3.08488 16.8236 3.30149C16.9823 3.51619 17.1673 3.79121 17.3893 4.12122C17.792 4.71995 18.2539 5.31416 18.6718 5.68188C18.9681 5.94247 19.232 6.17464 19.4077 6.34229C19.4971 6.42766 19.5892 6.51993 19.668 6.61302C19.7192 6.67351 19.8326 6.81035 19.9098 7.00024H20C20.5523 7.00024 21 7.44795 21 8.00024C21 8.55252 20.5523 9.00024 20 9.00024H19.6798L18.2922 14.3894C18.1311 15.0154 17.9899 15.5639 17.8222 16.0033C17.6409 16.4781 17.3961 16.919 16.9745 17.2746C16.8938 17.3427 16.8096 17.4065 16.7223 17.4658C16.2689 17.7739 15.7775 17.8948 15.2687 17.9493C14.7934 18.0002 14.2152 18.0002 13.5479 18.0002C12.8806 18.0002 12.2018 18.0002 11.7265 17.9493C11.2177 17.8948 10.7263 17.7739 10.2729 17.4658C10.1856 17.4065 10.1014 17.3427 10.0207 17.2746C9.59908 16.919 9.35428 16.4781 9.17304 16.0033C9.00531 15.5639 8.86413 15.0154 8.70298 14.3894L7.31538 9.00024H7C6.44772 9.00024 6 8.55253 6 8.00024C6 7.44795 6.44772 7.00024 7 7.00024H7.0959C7.17605 6.80892 7.29273 6.6722 7.34788 6.60945C7.42984 6.5162 7.52489 6.42512 7.61633 6.34187C7.79551 6.17875 8.06453 5.95407 8.36373 5.70418C8.7719 5.36328 9.21403 4.79826 9.60096 4.21078C9.83356 3.85762 10.0258 3.56576 10.1891 3.3395C10.3521 3.11382 10.5309 2.88901 10.748 2.70907C11.0987 2.41845 11.4037 2.25678 11.8408 2.12768ZM9.38086 9.00024H17.6148L16.3686 13.8404C16.1907 14.5315 16.0765 14.9689 15.9539 15.2901C15.8403 15.5876 15.7539 15.6879 15.6854 15.7457C15.6577 15.769 15.6287 15.791 15.5984 15.8116C15.5199 15.865 15.3902 15.9249 15.0558 15.9607C14.6998 15.9988 14.2298 16.0002 13.4979 16.0002C12.7659 16.0002 12.2959 15.9988 11.9399 15.9607C11.6055 15.9249 11.4758 15.865 11.3973 15.8116C11.367 15.791 11.338 15.769 11.3103 15.7457C11.2418 15.6879 11.1554 15.5876 11.0418 15.2901C10.9192 14.9689 10.8051 14.5315 10.6271 13.8404L9.38086 9.00024Z',
  d17: 'M13.5 1C14.0523 1 14.5 1.44772 14.5 2V3C14.5 3.55228 14.0523 4 13.5 4C12.9477 4 12.5 3.55228 12.5 3V2C12.5 1.44772 12.9477 1 13.5 1Z',
  d18: 'M12.5003 9H14.5003V15.9926C14.23 15.9995 13.9043 15.9999 13.4979 15.9999C13.0938 15.9999 12.7696 15.9995 12.5003 15.9928V9Z',
  d19: 'M12.4885 17.9919C12.8223 18 13.1868 18 13.5479 17.9999C13.885 18 14.1994 18 14.4892 17.9934C14.4755 18.559 14.4448 19.0623 14.3761 19.4939C14.2437 20.3264 13.9358 21.124 13.132 21.6204C12.349 22.104 11.4881 22.0567 10.6508 21.8565C9.84357 21.6635 8.84873 21.2738 7.65396 20.8059L5.00027 19.7666V22C5.00027 22.5523 4.55255 23 4.00027 23C3.44798 23 3.00027 22.5523 3.00027 22V18.3239C2.99991 18.3085 2.99991 18.2932 3.00027 18.2777V14C3.00027 13.4477 3.44798 13 4.00027 13C4.55255 13 5.00027 13.4477 5.00027 14V17.6187L8.3127 18.916C9.59634 19.4187 10.4606 19.7546 11.1159 19.9113C11.757 20.0646 11.9705 19.9871 12.0811 19.9188C12.1711 19.8632 12.31 19.7517 12.401 19.1797C12.4515 18.862 12.4763 18.4756 12.4885 17.9919Z',
  d20: 'M4 16V22',
  d21: 'M4 19H12.5V8',
  d22: 'M5 8H20',
  d23: 'M12.5 4V2',
  d24: 'M15.4945 16.0078H9.51306C9.50868 16.0078 9.50481 16.005 9.50351 16.0008L7.00338 7.99189C7.00242 7.98881 7.00301 7.98546 7.00495 7.98288L10.0081 4.00903H15.005L17.9966 7.98882C17.9986 7.99139 17.9991 7.99473 17.9982 7.9978L15.5041 16.0008C15.5028 16.005 15.4989 16.0078 15.4945 16.0078Z',
  d25: 'M3.5 22V16H5V22H3.5Z',
  d26: 'M13.75 8V19C13.75 19.4142 13.4142 19.75 13 19.75H4.5V18.25H12.25V8H13.75Z',
  d27: 'M7.27493 7.28413C7.67027 7.16052 8.09096 7.38081 8.21456 7.77615L10.5513 15.25H15.4485L17.7828 7.77635C17.9063 7.38098 18.327 7.16057 18.7223 7.28406C19.1177 7.40756 19.3381 7.82818 19.2146 8.22356L16.7159 16.2236C16.6181 16.5367 16.3281 16.75 16 16.75H10C9.672 16.75 9.38205 16.5368 9.28417 16.2238L6.78291 8.22377C6.6593 7.82842 6.87959 7.40774 7.27493 7.28413Z',
  d28: 'M19.0981 7.55C19.2685 7.77726 19.2959 8.08132 19.1689 8.33541C19.0418 8.5895 18.7821 8.75 18.4981 8.75H7.49805C7.21397 8.75 6.95427 8.5895 6.82723 8.33541C6.70019 8.08132 6.7276 7.77726 6.89805 7.55L10.1231 3.25H15.8731L19.0981 7.55Z',
  d29: 'M20.5 8.75H5.5V7.25H20.5V8.75Z',
  d30: 'M13.75 2V4H12.25V2H13.75Z',
} as const;

export const IconWallLampStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wall-lamp-stroke-rounded IconWallLampStrokeRounded"
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

export const IconWallLampDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wall-lamp-duotone-rounded IconWallLampDuotoneRounded"
    >
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
        strokeLinejoin="round" 
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWallLampTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wall-lamp-twotone-rounded IconWallLampTwotoneRounded"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWallLampSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wall-lamp-solid-rounded IconWallLampSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconWallLampBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wall-lamp-bulk-rounded IconWallLampBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWallLampStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wall-lamp-stroke-sharp IconWallLampStrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWallLampSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wall-lamp-solid-sharp IconWallLampSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWallLamp: TheIconSelfPack = {
  name: 'WallLamp',
  StrokeRounded: IconWallLampStrokeRounded,
  DuotoneRounded: IconWallLampDuotoneRounded,
  TwotoneRounded: IconWallLampTwotoneRounded,
  SolidRounded: IconWallLampSolidRounded,
  BulkRounded: IconWallLampBulkRounded,
  StrokeSharp: IconWallLampStrokeSharp,
  SolidSharp: IconWallLampSolidSharp,
};