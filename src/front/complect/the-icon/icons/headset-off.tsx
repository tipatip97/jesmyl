import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 2.00391L22 21.959',
  d2: 'M21 13.9769C21 11.7727 19.2091 9.98584 17 9.98584C16.2532 9.98584 15.602 10.3942 15.2585 10.9995M15 14.9746V15.9724C15 17.0745 15.8954 17.9679 17 17.9679C17.309 17.9679 17.6098 17.9329 17.8987 17.8668',
  d3: 'M5.90819 10.1367C4.22974 10.6108 3 12.1507 3 13.9773C3 16.1814 4.79086 17.9683 7 17.9683C8.10457 17.9683 9 17.0748 9 15.9728V13.2216',
  d4: 'M2.99116 13.9908C2.99116 12.9805 2.35632 8.16457 5.16685 5.15696M21.0138 16.7064V11.1023C21.0138 10.1124 20.9066 9.11872 20.5958 8.17871C20.3281 7.36921 19.9888 6.6189 19.3344 5.69402C15.552 0.905214 10.3682 1.58866 7.47429 3.22258M20.3065 20.2694C19.9571 20.8904 19.391 21.3331 18.7069 21.6168C18.0006 21.9096 17.4337 21.9424 16.5713 21.9902C14.9707 21.9902 13.2333 22.0094 12.0548 21.9902',
  d5: 'M9 12C9 10.8954 8.10457 10 7 10C4.79086 10 3 11.7909 3 14C3 16.2091 4.79086 18 7 18C8.10457 18 9 17.1046 9 16V12Z',
  d6: 'M15 12C15 10.8954 15.8954 10 17 10C19.2091 10 21 11.7909 21 14C21 16.2091 19.2091 18 17 18C15.8954 18 15 17.1046 15 16V12Z',
  d7: 'M2 2L22 22',
  d8: 'M21 14C21 11.7909 19.2091 10 17 10C16.2532 10 15.602 10.4093 15.2585 11.0159M15 15V16C15 17.1046 15.8954 18 17 18C17.309 18 17.6098 17.965 17.8987 17.8987',
  d9: 'M5.90819 10.1504C4.22974 10.6255 3 12.1689 3 13.9996C3 16.2087 4.79086 17.9996 7 17.9996C8.10457 17.9996 9 17.1041 9 15.9996V13.2422',
  d10: 'M2.97749 13.9903C2.97749 12.98 2.34265 8.16408 5.15318 5.15647M21.0001 16.7059V11.1018C21.0001 10.1119 20.8929 9.11823 20.5821 8.17822C20.3144 7.36872 19.9751 6.61841 19.3207 5.69353C15.5383 0.904726 10.3545 1.58817 7.46062 3.22209M20.2928 20.2689C19.9434 20.8899 19.3773 21.3326 18.6932 21.6163C17.9869 21.9091 17.42 21.9419 16.5576 21.9897C14.957 21.9897 13.2196 22.0089 12.0411 21.9897',
  d11: 'M2 2.00244L22 21.9726',
  d12: 'M15 14.9829V15.9814C15 17.0844 15.8954 17.9784 17 17.9784C17.309 17.9784 17.6098 17.9435 17.8987 17.8773',
  d13: 'M5.90819 10.1406C4.22974 10.615 3 12.1561 3 13.9841C3 16.1899 4.79086 17.9781 7 17.9781C8.10457 17.9781 9 17.084 9 15.9811V13.2278',
  d14: 'M21 13.9845C21 11.7787 19.2091 9.99051 17 9.99051C16.2532 9.99051 15.5007 10.4898 15.5007 10.989M20.9985 16.4808C21 16.2028 21 16.1559 21 15.828V10.989C21 6.02587 16.9806 2.00244 12.0224 2.00244C10.3733 2.00244 8.82805 2.44754 7.5 3.22426',
  d15: 'M3.04157 14.4754C3.04156 12.7262 2.39617 8.03081 5.00087 4.99268M20.0039 20.472C19.6545 21.0921 19.3146 21.3327 18.6304 21.616C17.9242 21.9084 17.3573 21.9411 16.4949 21.9889C14.8942 21.9889 13.1546 22.008 11.9761 21.9889',
  d16: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d17: 'M19.483 8.80922C18.5306 5.56936 15.5408 3.20455 12 3.20455C10.7802 3.20455 9.6258 3.4852 8.59756 3.9856C8.17998 4.18881 7.67155 4.13605 7.34317 3.80767C6.90089 3.36539 6.96816 2.62684 7.52334 2.33873C8.86394 1.643 10.3862 1.25 12 1.25C17.3848 1.25 21.75 5.6254 21.75 11.0227V15.7963C21.75 16.1676 21.75 16.5108 21.7473 16.8284C21.7426 17.377 21.7402 17.6513 21.5559 17.727C21.3716 17.8027 21.1738 17.6059 20.7783 17.2123L14.7529 11.216C14.6096 11.0734 14.538 11.0021 14.5255 10.8988C14.513 10.7955 14.5589 10.7204 14.6505 10.5702C15.1333 9.77852 16.0049 9.25 17 9.25C17.5458 9.25 18.0701 9.34205 18.5582 9.51147C19.1462 9.71558 19.4403 9.81765 19.5727 9.69141C19.7052 9.56518 19.6311 9.31319 19.483 8.80922Z',
  d18: 'M17 18.75C15.4812 18.75 14.25 17.5188 14.25 16V15.6986C14.25 15.0821 14.25 14.7738 14.4352 14.6971C14.6204 14.6204 14.8383 14.8384 15.2743 15.2743L17.8203 17.8203C18.1338 18.1339 18.2906 18.2907 18.229 18.4683C18.1674 18.6459 17.9653 18.6696 17.5611 18.7172C17.3771 18.7389 17.1898 18.75 17 18.75Z',
  d19: 'M17.0019 20.755C17.5332 20.7159 17.8411 20.6429 18.0755 20.5372C18.3835 20.3982 18.6626 20.208 18.9022 19.9771C19.1846 19.705 19.3258 19.5689 19.4485 19.57C19.5711 19.5712 19.6879 19.6879 19.9214 19.9214L20.4173 20.4173C20.5956 20.5956 20.6847 20.6848 20.6871 20.8055C20.6896 20.9263 20.6107 21.0117 20.453 21.1825C20.0123 21.6599 19.4772 22.0482 18.8758 22.3195C18.3467 22.5582 17.7834 22.6573 17.1447 22.7043C16.5239 22.75 15.7597 22.75 14.8124 22.75H12C11.4615 22.75 11.025 22.3125 11.025 21.7727C11.025 21.233 11.4615 20.7955 12 20.7955H14.775C15.7685 20.7955 16.4609 20.7948 17.0019 20.755Z',
  d20: 'M2.25 13.9545V11.0227C2.25 8.80923 2.98418 6.76762 4.22178 5.12919C4.39847 4.89528 4.48681 4.77832 4.6231 4.76887C4.75939 4.75942 4.86749 4.86752 5.08368 5.08372L5.62461 5.62465C5.80549 5.80552 5.89593 5.89596 5.90476 6.00601C5.9136 6.11607 5.83445 6.22573 5.67615 6.44505C5.16508 7.15313 4.76948 7.95043 4.51702 8.80922C4.36887 9.31319 4.2948 9.56517 4.42726 9.69141C4.55973 9.81764 4.85377 9.71559 5.44184 9.51147C5.92994 9.34205 6.45422 9.25 7 9.25C8.51878 9.25 9.75 10.4812 9.75 12V16C9.75 17.5188 8.51878 18.75 7 18.75C4.37665 18.75 2.25 16.6234 2.25 14L2.2501 13.9687L2.25 13.9545Z',
  d21: 'M17 18.7476C15.4812 18.7476 14.25 17.5164 14.25 15.9976V15.6961C14.25 15.0797 14.25 14.7714 14.4352 14.6947C14.6204 14.618 14.8383 14.836 15.2743 15.2719L17.8203 17.8179C18.1338 18.1315 18.2906 18.2883 18.229 18.4659C18.1674 18.6434 17.9653 18.6672 17.5611 18.7148C17.3771 18.7364 17.1898 18.7476 17 18.7476Z',
  d22: 'M17.0019 20.7526C17.5332 20.7135 17.8411 20.6405 18.0755 20.5347C18.3835 20.3958 18.6626 20.2056 18.9022 19.9747C19.1846 19.7026 19.3258 19.5665 19.4485 19.5676C19.5711 19.5687 19.6879 19.6855 19.9214 19.919L20.4173 20.4149C20.5956 20.5932 20.6847 20.6824 20.6871 20.8031C20.6896 20.9239 20.6107 21.0092 20.453 21.18C20.0123 21.6574 19.4772 22.0458 18.8758 22.3171C18.3467 22.5557 17.7834 22.6549 17.1447 22.7019C16.5239 22.7476 15.7597 22.7476 14.8124 22.7476H12C11.4615 22.7476 11.025 22.31 11.025 21.7703C11.025 21.2306 11.4615 20.793 12 20.793H14.775C15.7685 20.793 16.4609 20.7924 17.0019 20.7526Z',
  d23: 'M2.25 13.9521V11.0203C2.25 8.80682 2.98418 6.7652 4.22178 5.12677C4.39847 4.89286 4.48681 4.77591 4.6231 4.76646C4.75939 4.757 4.86749 4.8651 5.08368 5.0813L5.62461 5.62223C5.80549 5.80311 5.89593 5.89355 5.90476 6.0036C5.9136 6.11366 5.83445 6.22332 5.67615 6.44263C5.16508 7.15071 4.76948 7.94802 4.51702 8.80681C4.36887 9.31078 4.2948 9.56276 4.42726 9.68899C4.55973 9.81523 4.85377 9.71317 5.44184 9.50905C5.92994 9.33963 6.45422 9.24759 7 9.24759C8.51878 9.24759 9.75 10.4788 9.75 11.9976V15.9976C9.75 17.5164 8.51878 18.7476 7 18.7476C4.37665 18.7476 2.25 16.6209 2.25 13.9976L2.2501 13.9663L2.25 13.9521Z',
  d24: 'M19.4823 8.80922C18.5298 5.56936 15.5401 3.20455 11.9993 3.20455C10.7795 3.20455 9.62507 3.4852 8.59683 3.9856C8.17926 4.18881 7.67083 4.13605 7.34245 3.80767C6.90016 3.36539 6.96744 2.62684 7.52261 2.33873C8.86322 1.643 10.3855 1.25 11.9993 1.25C17.3841 1.25 21.7493 5.6254 21.7493 11.0227V15.7964C21.7493 16.1676 21.7493 16.5108 21.7466 16.8284C21.7419 17.377 21.7395 17.6513 21.5552 17.727C21.3708 17.8027 21.1731 17.6059 20.7775 17.2123L14.7522 11.216C14.6089 11.0734 14.5373 11.0021 14.5248 10.8988C14.5123 10.7955 14.5581 10.7204 14.6498 10.5702C15.1326 9.77852 16.0042 9.25 16.9993 9.25C17.5451 9.25 18.0693 9.34205 18.5574 9.51147C19.1455 9.71558 19.4395 9.81765 19.572 9.69141C19.7045 9.56518 19.6304 9.31319 19.4823 8.80922Z',
  d25: 'M21 14C21 11.7909 19.2091 10 17 10H15V11.818M21 14C21 15.0583 20.589 16.0206 19.918 16.736M21 14V11C21 6.02944 16.9706 2 12 2C10.0719 2 8.28534 2.60633 6.8207 3.63872M3 14C3 16.2091 4.79086 18 7 18H9V10H7C4.79086 10 3 11.7909 3 14ZM3 14V11C3 8.76925 3.81158 6.72806 5.15559 5.15559M18.5 22H12',
  d26: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d27: 'M12 3.20455C15.971 3.20455 19.2489 6.1789 19.7372 10.0262C18.9635 9.53724 18.0193 9.25 17 9.25H15.25V11.7145L21.75 18.2145V11.0227C21.75 5.6254 17.3848 1.25 12 1.25C9.95645 1.25 8.05974 1.88016 6.49273 2.9572L7.90371 4.36818C9.0942 3.63037 10.4975 3.20455 12 3.20455Z',
  d28: 'M19.8 20.7955H12V22.75H20.775C21.3135 22.75 21.75 22.3125 21.75 21.7727V21.75L19.8 19.8V20.7955Z',
  d29: 'M2.25 13.9545H2.27685C2.53037 16.088 4.54827 17.75 7 17.75H8.75V9.25H7C5.98074 9.25 5.03646 9.53724 4.26277 10.0262C4.45525 8.50964 5.08119 7.12874 6.01218 6.01218L4.6274 4.6274C3.14621 6.34139 2.25 8.57716 2.25 11.0227V13.9545Z',
} as const;

export const IconHeadsetOffStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-off-stroke-rounded IconHeadsetOffStrokeRounded"
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

export const IconHeadsetOffDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-off-duotone-rounded IconHeadsetOffDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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

export const IconHeadsetOffTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-off-twotone-rounded IconHeadsetOffTwotoneRounded"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
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
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHeadsetOffSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-off-solid-rounded IconHeadsetOffSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHeadsetOffBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-off-bulk-rounded IconHeadsetOffBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHeadsetOffStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-off-stroke-sharp IconHeadsetOffStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHeadsetOffSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="headset-off-solid-sharp IconHeadsetOffSolidSharp"
    >
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHeadsetOff: TheIconSelfPack = {
  name: 'HeadsetOff',
  StrokeRounded: IconHeadsetOffStrokeRounded,
  DuotoneRounded: IconHeadsetOffDuotoneRounded,
  TwotoneRounded: IconHeadsetOffTwotoneRounded,
  SolidRounded: IconHeadsetOffSolidRounded,
  BulkRounded: IconHeadsetOffBulkRounded,
  StrokeSharp: IconHeadsetOffStrokeSharp,
  SolidSharp: IconHeadsetOffSolidSharp,
};