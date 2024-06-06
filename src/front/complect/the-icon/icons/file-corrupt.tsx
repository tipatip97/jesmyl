import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 21.9999C9.13078 22.0014 8.45772 21.9898 7.90733 21.9484C6.59818 21.85 5.16301 21.4938 4.38288 20.4389C4.28115 20.3013 4.18594 20.1487 4.09474 19.9786C3.59621 19.0489 3.5 17.966 3.5 16.9113V10.3879C3.5 8.80902 3.54361 7.17073 4.32263 5.79698C5.0304 4.54888 6.11215 3.50538 7.52571 2.87295C8.15522 2.59131 8.80685 2.33485 9.48531 2.21066C10.6451 1.99836 12.5823 1.97321 16 2.01975C18.2152 2.21825 19.3251 2.83421 20.0642 4.37732C20.4135 5.10659 20.4994 5.92797 20.4983 6.73643C20.4928 10.7594 20.489 13.7252 20.5 18.0039C20.088 21.0935 18.4113 21.8228 15.5008 21.9788C15.1863 21.9956 14.8842 21.8552 14.6874 21.6095L13.255 19.8208C13.0948 19.6208 13.0336 19.3516 13.1567 19.1268C13.417 18.6511 13.9233 18.1157 14.6468 17.3691C14.8408 17.1689 14.8331 16.8488 14.6311 16.6565C13.8461 15.9092 13.3677 15.3969 13.0951 14.76C13.0288 14.6051 13.0635 14.428 13.1688 14.2965L15.1648 12.0158',
  d2: 'M3.5 12.0198C3.5 10.1789 4.99238 8.68645 6.83333 8.68645C7.49912 8.68645 8.28404 8.80311 8.93137 8.62966C9.50652 8.47554 9.95576 8.0263 10.1099 7.45114C10.2833 6.80382 10.1667 6.0189 10.1667 5.35311C10.1667 3.51216 11.6591 2.01978 13.5 2.01978',
  d3: 'M3.56585 10.9896C3.90491 10.1536 5.46701 8.49792 9.04113 8.49792C9.34137 8.49792 10.1289 8.19468 10.0882 6.55168C10.0716 5.06667 10.6108 2.12886 12.8726 2.00216C13.3209 2 13.8081 2 14.3406 2C16.1327 2 17.0287 2 17.7443 2.2522C18.8948 2.65765 19.8023 3.5151 20.2314 4.60214C20.4984 5.27832 20.4984 6.12494 20.4984 7.81818V17C20.4984 17.9293 20.4984 18.394 20.4218 18.7804C20.1074 20.3671 18.8718 21.6075 17.2913 21.9231C16.9064 22 16.4435 22 15.5178 22H11.2617C8.01316 22 6.38889 22 5.2609 21.2022C4.93771 20.9736 4.65079 20.7025 4.40886 20.3971C3.56445 19.3313 3.56445 17.7966 3.56445 14.7273V12.1818C3.56445 11.7548 3.56445 11.3586 3.56585 10.9896Z',
  d4: 'M9.97669 21.9999C9.11085 22.0014 8.4404 21.9898 7.89215 21.9484C6.58809 21.85 5.1585 21.4938 4.3814 20.4389C4.28007 20.3013 4.18523 20.1487 4.09438 19.9786C3.59779 19.0489 3.50195 17.966 3.50195 16.9113V10.3879C3.50195 8.80902 3.54539 7.17073 4.32139 5.79698C5.0264 4.54888 6.10395 3.50538 7.51202 2.87295C8.13908 2.59131 8.78818 2.33485 9.464 2.21066C10.6193 1.99836 12.549 1.97321 15.9534 2.01975C18.16 2.21825 19.2655 2.83421 20.0018 4.37732C20.3497 5.10659 20.4353 5.92797 20.4342 6.73643C20.4287 10.7594 20.4249 13.7252 20.4359 18.0039C20.0255 21.0935 18.3553 21.8228 15.4561 21.9788C15.1428 21.9956 14.8419 21.8552 14.6459 21.6095L13.219 19.8208C13.0595 19.6208 12.9985 19.3516 13.1211 19.1268C13.3804 18.6511 13.8847 18.1157 14.6054 17.3691C14.7987 17.1689 14.791 16.8488 14.5898 16.6565C13.8078 15.9092 13.3313 15.3969 13.0598 14.76C12.9937 14.6051 13.0283 14.428 13.1332 14.2965L15.1214 12.0158',
  d5: 'M3.50195 12C3.50195 10.1591 4.98853 8.66667 6.82233 8.66667C7.48553 8.66667 8.2674 8.78333 8.91221 8.60988C9.48513 8.45576 9.93262 8.00652 10.0862 7.43136C10.2589 6.78404 10.1427 5.99912 10.1427 5.33333C10.1427 3.49238 11.6293 2 13.4631 2',
  d6: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d7: 'M15.865 11.2638C16.2723 11.6368 16.3 12.2694 15.927 12.6767L14.5183 14.2148C14.3329 14.4173 14.2401 14.5186 14.2435 14.64C14.2469 14.7614 14.3451 14.8574 14.5416 15.0493C14.5416 15.0493 15.0471 15.5082 15.1517 15.6061C15.4311 15.8676 15.6679 16.1968 15.7621 16.6049C15.8592 17.0259 15.7761 17.4073 15.6351 17.7106C15.4054 18.2044 14.9524 18.6114 14.6798 18.8563L14.6748 18.8608C14.4943 19.0262 14.2574 19.243 14.2547 19.37C14.2518 19.4981 14.343 19.5892 14.5253 19.7715L14.861 20.1073C15.1032 20.3495 15.2541 20.5003 15.4074 20.5921C15.4236 20.6018 15.4317 20.6066 15.5427 20.6419C15.6536 20.6771 15.6792 20.679 15.7302 20.6829C15.9056 20.6962 16.1619 20.6998 16.4184 20.66C17.4477 20.5293 18.0037 20.2875 18.3969 19.9161C18.7818 19.5525 19.0264 19.0505 19.1609 18.1056C19.3003 17.1263 19.3026 15.8266 19.3026 13.9545V7.91322C19.3026 7.07296 19.3021 6.49002 19.2721 6.03334C19.2427 5.58539 19.1878 5.32697 19.1102 5.13033C18.8001 4.34497 18.1344 3.70332 17.2618 3.39587C16.7584 3.21851 16.0913 3.20456 14.2572 3.20456C13.9591 3.20456 13.6023 3.20573 13.2642 3.20726C12.926 3.20878 12.3726 3.21127 11.9105 3.48018C11.6057 3.65749 11.385 3.85938 11.2583 4.07997C11.0409 4.45838 10.9166 4.86551 10.9166 5.3332L10.953 6.37357C10.9609 6.75366 10.9489 7.1972 10.8342 7.62535C10.6107 8.45932 9.95933 9.11073 9.12536 9.33419C8.69721 9.44891 8.25367 9.46092 7.87358 9.45302L6.83322 9.41654C6.38655 9.41654 5.96635 9.5299 5.59984 9.72942C5.37239 9.85324 5.15098 10.0963 4.97804 10.3873C4.69743 10.8595 4.69725 11.4981 4.69727 11.7651L4.69735 14.6653C4.69735 16.1887 4.69893 17.246 4.79386 18.0558C4.88609 18.8426 5.05554 19.2754 5.3111 19.5979C5.48889 19.8222 5.70127 20.0233 5.94272 20.1941C6.30055 20.4471 6.78448 20.6139 7.6384 20.7032C8.07305 20.7487 8.83131 20.7717 9.58294 20.7834C10.1206 20.7918 10.5549 21.2276 10.5549 21.7653C10.5549 22.3072 10.1142 22.7465 9.57235 22.738C8.772 22.7255 7.93922 22.6998 7.43654 22.6472C6.42712 22.5416 5.5659 22.3186 4.82114 21.7919C4.43077 21.5159 4.08223 21.1871 3.78704 20.8146C3.21721 20.0955 2.97396 19.2576 2.85985 18.2842C2.74996 17.3469 2.74998 16.1743 2.75 14.7262V14.7262V12.1427C2.75 10.7245 2.75 9.6117 2.80919 8.71104C2.86944 7.7942 2.99398 7.02949 3.27509 6.31753C4.11848 4.18147 5.89222 2.51873 8.11221 1.73655C9.49465 1.24947 11.1813 1.24969 14.0209 1.25005C15.5759 1.2495 17.048 1.24911 17.9068 1.5517C19.2834 2.0367 20.3918 3.07097 20.9206 4.41028C21.1039 4.87444 21.1795 5.36012 21.2153 5.90474C21.25 6.43332 21.25 7.08088 21.25 7.88003V14.0298C21.25 15.8086 21.2501 17.2484 21.0887 18.3821C20.9202 19.5662 20.5588 20.558 19.7316 21.3394C18.9128 22.1129 17.8874 22.4436 16.6629 22.5991C16.3094 22.644 15.927 22.6756 15.5143 22.6977C15.106 22.7196 14.9018 22.7306 14.703 22.6544C14.5042 22.5782 14.3526 22.4266 14.0495 22.1233L12.5906 20.6639C12.3269 20.376 12.1262 20.0226 12.0763 19.6048C12.0265 19.1874 12.1414 18.8258 12.2905 18.5478C12.5341 18.0937 12.9661 17.7067 13.2376 17.4634L13.24 17.4612C13.4172 17.2984 13.5569 17.1701 13.5715 17.0635C13.5715 16.8984 13.4581 16.785 13.2678 16.6182C13.0589 16.4351 12.8025 16.198 12.5877 15.9249C12.3791 15.6596 12.1401 15.2741 12.0887 14.7928C12.0315 14.2576 12.2214 13.7616 12.5906 13.3585L14.4521 11.3259C14.8251 10.9186 15.4577 10.8908 15.865 11.2638Z',
  d8: 'M19.7316 21.3394C20.5588 20.558 20.9202 19.5662 21.0887 18.3821C21.2501 17.2484 21.25 15.8086 21.25 14.0298V7.88003C21.25 7.08088 21.25 6.43332 21.2153 5.90474C21.1795 5.36012 21.1039 4.87444 20.9206 4.41028C20.3918 3.07097 19.2834 2.0367 17.9068 1.5517C17.048 1.24911 15.5759 1.2495 14.0209 1.25005C11.1813 1.24969 9.49465 1.24947 8.11221 1.73655C5.89222 2.51873 4.11848 4.18147 3.27509 6.31753C2.99398 7.02949 2.86944 7.7942 2.80919 8.71104C2.75 9.6117 2.75 10.7245 2.75 12.1427V14.7262V14.7262C2.74998 16.1743 2.74996 17.3469 2.85985 18.2842C2.97396 19.2576 3.21721 20.0955 3.78704 20.8146C4.08223 21.1871 4.43077 21.5159 4.82114 21.7919C5.5659 22.3186 6.42712 22.5416 7.43654 22.6472C7.93922 22.6998 8.772 22.7255 9.57235 22.738C10.1142 22.7465 10.5549 22.3072 10.5549 21.7653C10.5549 21.2276 10.1206 20.7918 9.58294 20.7834C8.83131 20.7717 8.07305 20.7487 7.6384 20.7032C6.78448 20.6139 6.30055 20.4471 5.94272 20.1941C5.70127 20.0233 5.48889 19.8222 5.3111 19.5979C5.05554 19.2754 4.88609 18.8426 4.79386 18.0558C4.69893 17.246 4.69735 16.1887 4.69735 14.6653L4.69727 11.7651C4.69725 11.4981 4.69743 10.8595 4.97804 10.3873C5.15098 10.0963 5.37239 9.85324 5.59984 9.72942C5.96635 9.5299 6.38655 9.41654 6.83322 9.41654L7.87358 9.45302C8.25367 9.46092 8.69721 9.44891 9.12536 9.33419C9.95933 9.11073 10.6107 8.45932 10.8342 7.62535C10.9489 7.1972 10.9609 6.75366 10.953 6.37357L10.9166 5.3332C10.9166 4.86551 11.0409 4.45838 11.2583 4.07997C11.385 3.85938 11.6057 3.65749 11.9105 3.48018C12.3726 3.21127 12.926 3.20878 13.2642 3.20726C13.6023 3.20573 13.9591 3.20456 14.2572 3.20456C16.0913 3.20456 16.7584 3.21851 17.2618 3.39587C18.1344 3.70332 18.8001 4.34497 19.1102 5.13033C19.1878 5.32697 19.2427 5.58539 19.2721 6.03334C19.3021 6.49002 19.3026 7.07296 19.3026 7.91322V13.9545C19.3026 15.8266 19.3003 17.1263 19.1609 18.1056C19.0264 19.0505 18.7818 19.5525 18.3969 19.9161C18.0037 20.2875 17.4477 20.5293 16.4184 20.66C16.1619 20.6998 15.9056 20.6962 15.7302 20.6829C15.6792 20.679 15.6536 20.6771 15.5427 20.6419C15.4317 20.6066 15.4236 20.6018 15.4074 20.5921C15.2541 20.5003 15.1032 20.3495 14.861 20.1073L17.0799 22.5377C18.1219 22.3612 19.0075 22.0234 19.7316 21.3394Z',
  d9: 'M15.8669 11.2626C16.2742 11.6356 16.3019 12.2681 15.9289 12.6754L14.5202 14.2135L14.5202 14.2135C14.3348 14.4161 14.242 14.5173 14.2454 14.6387C14.2488 14.7601 14.347 14.8561 14.5435 15.048C14.5435 15.048 15.049 15.507 15.1536 15.6049C15.433 15.8663 15.6698 16.1955 15.764 16.6036C15.8611 17.0246 15.7781 17.406 15.637 17.7093C15.4073 18.2031 14.9543 18.6101 14.6817 18.855L14.6768 18.8595C14.4962 19.0249 14.2594 19.2418 14.2566 19.3687C14.2537 19.4968 14.3449 19.588 14.5272 19.7702L14.8629 20.106L17.0818 22.5364C16.9455 22.5595 16.8065 22.5798 16.6648 22.5978C16.3113 22.6427 15.9289 22.6743 15.5162 22.6964C15.1079 22.7184 14.9037 22.7293 14.7049 22.6531C14.5061 22.5769 14.3545 22.4253 14.0514 22.1221L12.5925 20.6626C12.3288 20.3747 12.1281 20.0213 12.0782 19.6035C12.0284 19.1861 12.1433 18.8246 12.2924 18.5465C12.536 18.0924 12.968 17.7054 13.2395 17.4621L13.2419 17.4599C13.4191 17.2971 13.5588 17.1688 13.5734 17.0622C13.5734 16.8972 13.46 16.7837 13.2697 16.6169C13.0608 16.4338 12.8044 16.1967 12.5896 15.9236C12.381 15.6583 12.142 15.2729 12.0906 14.7915C12.0334 14.2563 12.2233 13.7603 12.5925 13.3572L14.454 11.3246C14.827 10.9173 15.4596 10.8895 15.8669 11.2626Z',
  d10: 'M10.0253 22H3.51C3.50448 22 3.5 21.9955 3.5 21.99V9L10.5 2H20.49C20.4955 2 20.5 2.00448 20.5 2.01V21.99C20.5 21.9955 20.4955 22 20.49 22L15.005 21.99L12.5045 18.9923C12.5012 18.9883 12.5015 18.9825 12.5051 18.9788L14.9979 16.4839C15.0018 16.48 15.0018 16.4737 14.9979 16.4698L12.5058 13.9913C12.5019 13.9874 12.5019 13.9811 12.5058 13.9772L15.005 11.4917M10.5 2.51752V9H3.95948',
  d11: 'M20.2763 1.25C20.8141 1.25 21.25 1.68754 21.25 2.22727V22.75H14.2929L11.7318 19.64C11.4007 19.2427 11.4272 18.6584 11.7929 18.2927L13.5858 16.4998L11.7929 14.7069C11.4024 14.3164 11.4024 13.6832 11.7929 13.2927L14.2929 10.7927L15.7071 12.2069L13.9142 13.9998L15.7071 15.7927C16.0976 16.1832 16.0976 16.8164 15.7071 17.2069L13.8529 19.0612L15.2981 20.7955H19.3025V3.20459H11.5131L11.5131 10.0455H4.69727V20.7955H10.002V22.75H3.72368C3.18593 22.75 2.75 22.3125 2.75 21.7727V8.66338L10.1362 1.25H20.2763Z',
};

export const IconFileCorruptStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-corrupt-stroke-rounded IconFileCorruptStrokeRounded"
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

export const IconFileCorruptDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-corrupt-duotone-rounded IconFileCorruptDuotoneRounded"
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

export const IconFileCorruptTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-corrupt-twotone-rounded IconFileCorruptTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileCorruptSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-corrupt-solid-rounded IconFileCorruptSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileCorruptBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-corrupt-bulk-rounded IconFileCorruptBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileCorruptStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-corrupt-stroke-sharp IconFileCorruptStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileCorruptSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-corrupt-solid-sharp IconFileCorruptSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileCorrupt: TheIconSelfPack = {
  name: 'FileCorrupt',
  StrokeRounded: IconFileCorruptStrokeRounded,
  DuotoneRounded: IconFileCorruptDuotoneRounded,
  TwotoneRounded: IconFileCorruptTwotoneRounded,
  SolidRounded: IconFileCorruptSolidRounded,
  BulkRounded: IconFileCorruptBulkRounded,
  StrokeSharp: IconFileCorruptStrokeSharp,
  SolidSharp: IconFileCorruptSolidSharp,
};