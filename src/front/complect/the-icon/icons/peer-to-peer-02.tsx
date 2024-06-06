import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.52001 3C4.69617 3 4.02832 3.67178 4.02832 4.50048C4.02832 5.32917 4.69617 6.00096 5.52001 6.00096C6.34385 6.00096 7.0117 5.32917 7.0117 4.50048C7.0117 3.67178 6.34385 3 5.52001 3Z',
  d2: 'M18.4821 21.0002H16.7038C16.4972 21.0002 16.2898 20.97 16.1001 20.8852C15.4826 20.6091 15.1693 20.2445 15.0233 20.0165C14.9402 19.8867 14.9521 19.7214 15.0422 19.5969C15.7576 18.6081 17.4164 18.0108 18.4821 18.0107M18.4852 21.0002H20.2635C20.4701 21.0002 20.6775 20.97 20.8672 20.8852C21.4847 20.6091 21.798 20.2445 21.944 20.0165C22.0271 19.8867 22.0153 19.7214 21.9251 19.5969C21.2097 18.6081 19.5509 18.0108 18.4852 18.0107',
  d3: 'M5.51485 11.4924H3.73649C3.52995 11.4924 3.32254 11.4621 3.13284 11.3773C2.51533 11.1013 2.20203 10.7367 2.05602 10.5087C1.97294 10.3789 1.98477 10.2136 2.07491 10.089C2.79035 9.10024 4.44914 8.50298 5.51485 8.50293M5.51789 11.4924H7.29625C7.50279 11.4924 7.7102 11.4621 7.8999 11.3773C8.51741 11.1013 8.83071 10.7367 8.97672 10.5087C9.0598 10.3789 9.04797 10.2136 8.95783 10.089C8.24239 9.10024 6.5836 8.50298 5.51789 8.50293',
  d4: 'M11.4868 4C14.2995 4 16.7004 4 17.5742 4.87896C18.448 5.75792 18.448 6.67242 18.448 9.50175L16.4591 8.50143',
  d5: 'M11.9842 20.0057C9.1714 20.0057 6.77057 20.0057 5.89676 19.1267C5.02295 18.2477 5.02295 17.3332 5.02295 14.5039L7.01187 15.5042',
  d6: 'M18.4477 12.5029C17.6239 12.5029 16.9561 13.1747 16.9561 14.0034C16.9561 14.8321 17.6239 15.5039 18.4477 15.5039C19.2716 15.5039 19.9394 14.8321 19.9394 14.0034C19.9394 13.1747 19.2716 12.5029 18.4477 12.5029Z',
  d7: 'M5.49456 3C4.66752 3 3.99707 3.67157 3.99707 4.5C3.99707 5.32843 4.66752 6 5.49456 6C6.32161 6 6.99205 5.32843 6.99205 4.5C6.99205 3.67157 6.32161 3 5.49456 3Z',
  d8: 'M3.38895 9.05559C2.83968 9.3715 1.39953 10.0165 2.27669 10.8237C2.70516 11.218 3.18238 11.5 3.78235 11.5H7.20594C7.80592 11.5 8.28314 11.218 8.71161 10.8237C9.58876 10.0165 8.14861 9.3715 7.59934 9.05559C6.31132 8.3148 4.67698 8.3148 3.38895 9.05559Z',
  d9: 'M18.4721 12.5C17.6451 12.5 16.9746 13.1716 16.9746 14C16.9746 14.8284 17.6451 15.5 18.4721 15.5C19.2991 15.5 19.9696 14.8284 19.9696 14C19.9696 13.1716 19.2991 12.5 18.4721 12.5Z',
  d10: 'M16.3675 18.5556C15.8182 18.8715 14.3781 19.5165 15.2552 20.3237C15.6837 20.718 16.161 21 16.7609 21H20.1845C20.7844 21 21.2617 20.718 21.6902 20.3237C22.5673 19.5165 21.1272 18.8715 20.5779 18.5556C19.2898 17.8148 17.6556 17.8148 16.3675 18.5556Z',
  d11: 'M5.50898 11.5002H3.73359C3.52739 11.5002 3.32033 11.4699 3.13095 11.3851C2.51447 11.1091 2.20169 10.7445 2.05593 10.5165C1.97299 10.3867 1.9848 10.2214 2.07479 10.0968C2.78903 9.10805 4.44505 8.51079 5.50898 8.51074M5.51201 11.5002H7.2874C7.49359 11.5002 7.70066 11.4699 7.89004 11.3851C8.50652 11.1091 8.81929 10.7445 8.96506 10.5165C9.048 10.3867 9.03619 10.2214 8.9462 10.0968C8.23196 9.10805 6.57594 8.51079 5.51201 8.51074',
  d12: 'M18.4875 21.0002H16.7121C16.5059 21.0002 16.2988 20.97 16.1094 20.8852C15.493 20.6091 15.1802 20.2445 15.0344 20.0165C14.9515 19.8867 14.9634 19.7214 15.0533 19.5969C15.7675 18.6081 17.4235 18.0108 18.4875 18.0107M18.4905 21.0002H20.2659C20.4721 21.0002 20.6792 20.97 20.8686 20.8852C21.485 20.6091 21.7978 20.2445 21.9436 20.0165C22.0265 19.8867 22.0147 19.7214 21.9247 19.5969C21.2105 18.6081 19.5545 18.0108 18.4905 18.0107',
  d13: 'M11.4844 4C14.308 4 16.7182 4 17.5954 4.87868C18.4727 5.75736 18.4727 6.67157 18.4727 9.5L16.476 8.5',
  d14: 'M11.9834 20C9.15971 20 6.74954 20 5.87233 19.1213C4.99512 18.2426 4.99512 17.3284 4.99512 14.5L6.99177 15.5',
  d15: 'M5.53906 3C4.71063 3 4.03906 3.67157 4.03906 4.5C4.03906 5.32843 4.71063 6 5.53906 6C6.36749 6 7.03906 5.32843 7.03906 4.5C7.03906 3.67157 6.36749 3 5.53906 3Z',
  d16: 'M18.5391 12.5C17.7107 12.5 17.0391 13.1716 17.0391 14C17.0391 14.8284 17.7107 15.5 18.5391 15.5C19.3675 15.5 20.0391 14.8284 20.0391 14C20.0391 13.1716 19.3675 12.5 18.5391 12.5Z',
  d17: 'M11.5391 4C14.3675 4 16.7817 4 17.6604 4.87868C18.5391 5.75736 18.5391 6.67157 18.5391 9.5L16.5391 8.5',
  d18: 'M12.0391 20C9.21063 20 6.79642 20 5.91774 19.1213C5.03906 18.2426 5.03906 17.3284 5.03906 14.5L7.03906 15.5',
  d19: 'M18.4816 21.0002H16.7033C16.4967 21.0002 16.2893 20.97 16.0996 20.8852C15.4821 20.6091 15.1688 20.2445 15.0228 20.0165C14.9397 19.8867 14.9516 19.7214 15.0417 19.5969C15.7572 18.6081 17.4159 18.0108 18.4816 18.0107M18.4847 21.0002H20.2631C20.4696 21.0002 20.677 20.97 20.8667 20.8852C21.4842 20.6091 21.7975 20.2445 21.9435 20.0165C22.0266 19.8867 22.0148 19.7214 21.9246 19.5969C21.2092 18.6081 19.5504 18.0108 18.4847 18.0107',
  d20: 'M7.75 4.5C7.75 5.74264 6.74264 6.75 5.5 6.75C4.25736 6.75 3.25 5.74264 3.25 4.5C3.25 3.25736 4.25736 2.25 5.5 2.25C6.74264 2.25 7.75 3.25736 7.75 4.5Z',
  d21: 'M20.75 14C20.75 15.2426 19.7426 16.25 18.5 16.25C17.2574 16.25 16.25 15.2426 16.25 14C16.25 12.7574 17.2574 11.75 18.5 11.75C19.7426 11.75 20.75 12.7574 20.75 14Z',
  d22: 'M7.98239 8.40518C8.25072 8.55032 8.87868 8.89106 9.21661 9.21001C9.42585 9.4075 9.69245 9.72751 9.74225 10.1669C9.79781 10.657 9.56429 11.0693 9.23047 11.376C8.73064 11.8352 8.07904 12.25 7.21488 12.25H3.78556C2.9214 12.25 2.2698 11.8352 1.76997 11.376C1.43614 11.0693 1.20263 10.657 1.25818 10.1669C1.30799 9.72751 1.57459 9.4075 1.78383 9.21001C2.12175 8.89106 2.74972 8.55032 3.01805 8.40518C4.53949 7.53161 6.46094 7.53161 7.98239 8.40518Z',
  d23: 'M20.9824 17.9052C21.2507 18.0503 21.8787 18.3911 22.2166 18.71C22.4258 18.9075 22.6924 19.2275 22.7423 19.6669C22.7978 20.157 22.5643 20.5693 22.2305 20.876C21.7306 21.3352 21.079 21.75 20.2149 21.75H16.7856C15.9214 21.75 15.2698 21.3352 14.77 20.876C14.4361 20.5693 14.2026 20.157 14.2582 19.6669C14.308 19.2275 14.5746 18.9075 14.7838 18.71C15.1218 18.3911 15.7497 18.0503 16.018 17.9052C17.5395 17.0316 19.4609 17.0316 20.9824 17.9052Z',
  d24: 'M15.215 4.85589C14.1946 4.75085 12.927 4.75 11.5 4.75C11.0858 4.75 10.75 4.41421 10.75 4C10.75 3.58579 11.0858 3.25 11.5 3.25L11.5308 3.25C12.9212 3.24999 14.2633 3.24999 15.3686 3.36378C15.9279 3.42135 16.4554 3.51054 16.9163 3.65505C17.3726 3.79813 17.8142 4.0109 18.1517 4.34835C18.7158 4.9125 18.9993 5.51133 19.1309 6.34061C19.2501 7.09144 19.25 8.07689 19.25 9.42321L19.25 9.5C19.25 9.75993 19.1154 10.0013 18.8943 10.138C18.6732 10.2746 18.3971 10.2871 18.1646 10.1708L16.1646 9.17082C15.7941 8.98558 15.6439 8.53507 15.8292 8.16459C16.0144 7.79411 16.4649 7.64394 16.8354 7.82918L17.7462 8.2846C17.7387 7.5313 17.7163 6.99703 17.6494 6.57576C17.5614 6.02116 17.4055 5.72354 17.091 5.40901C16.9891 5.30712 16.7994 5.19039 16.4675 5.08634C16.1402 4.98372 15.7227 4.90816 15.215 4.85589Z',
  d25: 'M4.6057 13.862C4.82682 13.7254 5.10292 13.7129 5.33541 13.8292L7.33541 14.8292C7.7059 15.0144 7.85607 15.4649 7.67082 15.8354C7.48558 16.2059 7.03508 16.3561 6.66459 16.1708L5.75376 15.7154C5.76127 16.4687 5.78369 17.003 5.85056 17.4242C5.9386 17.9788 6.09448 18.2765 6.40901 18.591C6.51091 18.6929 6.70062 18.8096 7.03247 18.9137C7.35976 19.0163 7.7773 19.0918 8.28499 19.1441C9.30536 19.2492 10.573 19.25 12 19.25C12.4142 19.25 12.75 19.5858 12.75 20C12.75 20.4142 12.4142 20.75 12 20.75H11.9693C10.5788 20.75 9.23675 20.75 8.13139 20.6362C7.57213 20.5787 7.04459 20.4895 6.5837 20.345C6.12736 20.2019 5.6858 19.9891 5.34835 19.6517C4.7842 19.0875 4.50075 18.4887 4.36911 17.6594C4.24993 16.9086 4.24996 15.9231 4.25 14.5768C4.25 14.5513 4.25 14.5257 4.25 14.5C4.25 14.2401 4.38459 13.9987 4.6057 13.862Z',
  d26: 'M5.5 2.99219C4.6716 2.99219 4 3.66335 4 4.49121C4 5.31907 4.6716 5.99024 5.5 5.99024C6.3284 5.99024 7 5.31907 7 4.49121C7 3.66335 6.3284 2.99219 5.5 2.99219Z',
  d27: 'M22 20.9883H15C15 19.3325 16.567 17.9902 18.5 17.9902C20.433 17.9902 22 19.3325 22 20.9883Z',
  d28: 'M18.5 12.4937C17.6716 12.4937 17 13.1648 17 13.9927C17 14.8205 17.6716 15.4917 18.5 15.4917C19.3284 15.4917 20 14.8205 20 13.9927C20 13.1648 19.3284 12.4937 18.5 12.4937Z',
  d29: 'M11.5 3.99956L18.5 3.99951V8.99631H18L16 7.49723',
  d30: 'M12 19.9889L5 19.989V14.9922H5.5L7.5 16.4913',
  d31: 'M9 11.4785H2C2 9.82269 3.567 8.48047 5.5 8.48047C7.433 8.48047 9 9.82269 9 11.4785Z',
  d32: 'M3.25 4.5C3.25 3.25736 4.25736 2.25 5.5 2.25C6.74264 2.25 7.75 3.25736 7.75 4.5C7.75 5.74264 6.74264 6.75 5.5 6.75C4.25736 6.75 3.25 5.74264 3.25 4.5Z',
  d33: 'M1.25 11.5C1.25 9.32463 3.26542 7.75 5.5 7.75C7.73458 7.75 9.75 9.32463 9.75 11.5V12.25H1.25V11.5Z',
  d34: 'M14.25 21C14.25 18.8246 16.2654 17.25 18.5 17.25C20.7346 17.25 22.75 18.8246 22.75 21V21.75H14.25V21Z',
  d35: 'M19.25 3.25V9.75006H17.75L15.55 8.1L16.45 6.90001L17.75 7.87504V4.75001L11.5 4.75006L11.5 3.25006L19.25 3.25Z',
  d36: 'M4.25 14.25L5.75001 14.25L7.95001 15.9001L7.04999 17.1L5.75 16.125L5.75 19.25L12 19.25L12 20.75L4.25 20.7501L4.25 14.25Z',
};

export const IconPeerToPeer02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-02-stroke-rounded IconPeerToPeer02StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-02-duotone-rounded IconPeerToPeer02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
        d={d.d9} 
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-02-twotone-rounded IconPeerToPeer02TwotoneRounded"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
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

export const IconPeerToPeer02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-02-solid-rounded IconPeerToPeer02SolidRounded"
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
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-02-bulk-rounded IconPeerToPeer02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-02-stroke-sharp IconPeerToPeer02StrokeSharp"
    >
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d31} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-02-solid-sharp IconPeerToPeer02SolidSharp"
    >
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPeerToPeer02: TheIconSelfPack = {
  name: 'PeerToPeer02',
  StrokeRounded: IconPeerToPeer02StrokeRounded,
  DuotoneRounded: IconPeerToPeer02DuotoneRounded,
  TwotoneRounded: IconPeerToPeer02TwotoneRounded,
  SolidRounded: IconPeerToPeer02SolidRounded,
  BulkRounded: IconPeerToPeer02BulkRounded,
  StrokeSharp: IconPeerToPeer02StrokeSharp,
  SolidSharp: IconPeerToPeer02SolidSharp,
};