import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 7.59199C9 9.31999 10.5 5 19 5',
  d2: 'M2 12C11 12 13 5.49859 18 5',
  d3: 'M18 19.88C12.7189 21.1446 6.44444 12 2 12',
  d4: 'M4 18C10.5 18 14.6857 10 21 10',
  d5: 'M21.8 10C21.4092 8.07481 20.4653 6.35045 19.1414 5C17.3265 3.14864 14.7974 2 12 2C8.05704 2 4.64707 4.28203 3.0188 7.59739C6.15534 8.49551 8.06158 7.73866 10.3881 6.81494C12.2686 6.06829 14.4238 5.21261 17.7252 5.0338C15.8073 5.31475 14.322 6.48265 12.6668 7.78414C10.178 9.74106 7.30507 12 2 12C3.97759 12 6.3175 13.8105 8.77101 15.709C8.99035 15.8787 9.21059 16.0491 9.43157 16.219C7.76421 17.2474 6.00883 17.9895 4.04172 17.9999C4.02456 18 4.01428 18.0195 4.02442 18.0333C5.85031 20.4433 8.74336 22 12 22C14.35 22 16.5106 21.1894 18.2176 19.8326L18 19.88C15.2788 20.5316 12.2939 18.4196 9.43157 16.219C10.5229 15.5458 11.5766 14.75 12.6272 13.9565C15.2559 11.9711 17.8657 10 21 10H21.8ZM17.7252 5.0338C17.8302 5.02812 17.9363 5.02311 18.0436 5.01882C18.015 5.00648 17.9832 5.00162 17.9522 5.00496C17.8759 5.01319 17.8002 5.02281 17.7252 5.0338Z',
  d6: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d7: 'M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z',
  d8: 'M6.9797 8.90564C5.71342 9.08926 4.3514 9.02176 2.72351 8.55293C2.19279 8.40009 1.88647 7.84595 2.03932 7.31524C2.19216 6.78453 2.7463 6.4782 3.27701 6.63105C4.64912 7.02622 5.7246 7.06672 6.69269 6.92634C7.68257 6.7828 8.60145 6.44599 9.6954 6.01391C9.80417 5.97095 9.91404 5.92732 10.0252 5.88318C12.1614 5.0348 14.7669 4 19.0003 4C19.5525 4 20.0003 4.44772 20.0003 5C20.0003 5.55228 19.5525 6 19.0003 6C15.1521 6 12.84 6.91772 10.7513 7.74679C10.6437 7.7895 10.5367 7.83197 10.4301 7.87407C9.33657 8.30599 8.22419 8.72518 6.9797 8.90564Z',
  d9: 'M18.9951 4.90085C19.0499 5.45041 18.6488 5.94034 18.0992 5.99514C17.069 6.09787 16.1623 6.50924 15.2065 7.13915C14.5749 7.55544 13.985 8.0198 13.3344 8.53191C12.951 8.83372 12.5465 9.15211 12.1 9.48702C9.75232 11.248 6.79472 13.0001 2 13.0001C1.44772 13.0001 1 12.5524 1 12.0001C1 11.4478 1.44772 11.0001 2 11.0001C6.20528 11.0001 8.74768 9.50146 10.9 7.88708C11.2605 7.61661 11.6277 7.32816 11.9975 7.03769C12.7003 6.48564 13.4124 5.92629 14.106 5.46919C15.2127 4.73986 16.431 4.15157 17.9008 4.00501C18.4503 3.95021 18.9403 4.35129 18.9951 4.90085Z',
  d10: 'M13.4603 20.0819C14.9591 20.8092 16.5923 21.2453 18.2327 20.8525C18.7698 20.7238 19.1009 20.1842 18.9723 19.6471C18.8437 19.11 18.304 18.7788 17.7669 18.9074C16.7667 19.147 15.6352 18.9142 14.3333 18.2826C13.0324 17.6513 11.6843 16.6829 10.2933 15.6197C9.99931 15.395 9.70247 15.1653 9.40419 14.9345C8.32393 14.0985 7.22475 13.2478 6.17496 12.5693C4.85415 11.7155 3.41894 11 1.99977 11C1.44749 11 0.999771 11.4477 0.999771 12C0.999771 12.5523 1.44749 13 1.99977 13C2.80283 13 3.81859 13.4276 5.08926 14.2489C6.06058 14.8768 7.06807 15.6562 8.13683 16.483C8.4455 16.7218 8.75927 16.9645 9.07876 17.2087C10.4721 18.2737 11.9605 19.3542 13.4603 20.0819Z',
  d11: 'M13.1003 14.8524C10.5289 16.7946 7.60908 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C6.85719 17 9.25945 15.2468 11.967 13.202C12.026 13.1575 12.0851 13.1127 12.1445 13.0679C14.6774 11.1535 17.5267 9 21 9C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11C18.2404 11 15.8915 12.7444 13.1723 14.798L13.1003 14.8524Z',
  d12: 'M2.72374 8.55293C4.35163 9.02176 5.71365 9.08926 6.97993 8.90564C8.22442 8.72518 9.3368 8.30599 10.4303 7.87407C10.5367 7.83207 10.6434 7.7897 10.7508 7.7471L10.7516 7.74679L10.7517 7.74674L10.7522 7.74654C10.9772 7.65722 11.2048 7.56687 11.4367 7.47675C11.2566 7.61661 11.0776 7.75402 10.9002 7.88708C8.75172 9.49859 6.21452 10.9948 2.02258 11.0001L2 11C1.44772 11 1 11.4477 1 12C1 12.4434 1.28856 12.8194 1.68812 12.9504C1.78632 12.9826 1.89124 13.0001 2.00023 13.0001L2.01743 13.0001C2.81774 13.0062 3.82799 13.4335 5.08949 14.2489C5.9026 14.7745 6.74106 15.4063 7.61959 16.0832C6.45868 16.6512 5.27471 17 4.00023 17C3.44794 17 3.00023 17.4477 3.00023 18C3.00023 18.5523 3.44794 19 4.00023 19C5.97497 19 7.74336 18.3397 9.36124 17.4236C10.6725 18.4173 12.0615 19.4031 13.4605 20.0819C14.9593 20.8092 16.5926 21.2453 18.2329 20.8525C18.77 20.7238 19.1011 20.1842 18.9725 19.6471C18.8439 19.11 18.3042 18.7788 17.7671 18.9074C16.7669 19.147 15.6354 18.9142 14.3336 18.2826C13.3062 17.7841 12.2493 17.0752 11.1651 16.2755C11.8339 15.8091 12.4775 15.323 13.1005 14.8524L13.1725 14.798C15.8917 12.7444 18.2406 11 21.0002 11C21.5525 11 22.0002 10.5523 22.0002 10C22.0002 9.44772 21.5525 9 21.0002 9C17.5269 9 14.6776 11.1535 12.1447 13.0679L12.1447 13.0679L11.9672 13.202C11.1173 13.8439 10.2975 14.457 9.4842 14.9962C9.45762 14.9757 9.43103 14.9551 9.40442 14.9345C8.32416 14.0985 7.22498 13.2478 6.17519 12.5693L6.0919 12.5157C8.6317 11.8738 10.5065 10.6825 12.1003 9.48702C12.5468 9.15211 12.9512 8.83373 13.3346 8.53193L13.3346 8.53192L13.3346 8.53191L13.3346 8.5319C13.9852 8.01979 14.5751 7.55543 15.2068 7.13915C16.0779 6.56507 16.9081 6.17251 17.8283 6.02967C18.2029 6.01029 18.5931 6 19.0005 6C19.5528 6 20.0005 5.55228 20.0005 5C20.0005 4.44772 19.5528 4 19.0005 4C18.7152 4 18.4373 4.0047 18.1664 4.01373C18.0807 3.99933 17.9917 3.99597 17.901 4.00501C17.8085 4.01423 17.717 4.02521 17.6264 4.03786C14.1845 4.23142 11.9203 5.13064 10.0254 5.88318C9.91427 5.92732 9.8044 5.97095 9.69563 6.01391C8.60168 6.44599 7.6828 6.7828 6.69292 6.92634C5.72483 7.06672 4.64934 7.02622 3.27724 6.63105C2.74652 6.4782 2.19239 6.78453 2.03955 7.31524C1.8867 7.84595 2.19302 8.40009 2.72374 8.55293Z',
  d13: 'M4 18C10.5 18 15.6857 10 22 10',
  d14: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 3.20455C8.98573 3.20455 6.32562 4.72083 4.74078 7.03226C5.51321 7.14583 6.18586 7.13251 6.81248 7.04165C7.77987 6.90137 8.67786 6.57222 9.74695 6.14996C9.85324 6.10798 9.96062 6.06533 10.0692 6.0222C11.69 5.37853 13.5872 4.62506 16.2905 4.32022C15.0214 3.60963 13.558 3.20455 12 3.20455ZM3.26186 10.9904C3.34727 10.243 3.52639 9.52395 3.78717 8.84545C5.01156 9.10542 6.0834 9.12236 7.09297 8.97597C8.30917 8.79961 9.39627 8.38995 10.465 7.96785C10.5691 7.9267 10.6737 7.88519 10.7789 7.84345C10.9994 7.75591 11.2225 7.66736 11.4498 7.57903C11.2736 7.71585 11.0985 7.85027 10.925 7.98043C9.00423 9.42113 6.76558 10.7675 3.26186 10.9904ZM4.67393 16.8688C3.95186 15.7845 3.46411 14.5307 3.283 13.1799C3.85474 13.3779 4.5062 13.7195 5.24609 14.1978C6.05494 14.7206 6.88945 15.351 7.7648 16.026C6.74274 16.4875 5.72163 16.7944 4.67393 16.8688ZM6.19967 18.612C7.74797 19.9713 9.77774 20.7955 12 20.7955C12.9147 20.7955 13.7967 20.6558 14.626 20.3967C14.2185 20.2575 13.818 20.088 13.4268 19.8982C12.0856 19.2475 10.7537 18.3079 9.49374 17.3556C8.44062 17.9063 7.34358 18.3566 6.19967 18.612ZM11.329 16.2851C12.3377 17.0229 13.322 17.6749 14.2801 18.1398C15.5523 18.7571 16.6581 18.9845 17.6356 18.7505L17.6361 18.7526C19.5671 17.1392 20.7955 14.7131 20.7955 12C20.7955 11.6973 20.7802 11.3981 20.7503 11.1032C19.7612 11.2567 18.772 11.6223 17.7569 12.1383C16.3946 12.8307 15.0499 13.7586 13.6325 14.7367L13.5224 14.8127C12.8144 15.3014 12.0837 15.8057 11.329 16.2851ZM20.3371 9.19011C19.9531 8.05034 19.3419 7.01505 18.5574 6.13807C18.2606 6.14168 17.9733 6.15095 17.6948 6.16535C16.7959 6.30505 15.9847 6.68863 15.1337 7.2495C14.5163 7.65633 13.9398 8.11013 13.3041 8.61061C12.9294 8.90551 12.5341 9.21675 12.0978 9.54401C10.5402 10.7123 8.70788 11.8766 6.22564 12.5039L6.30712 12.5563C7.33305 13.2195 8.40725 14.0508 9.46296 14.8678C9.52759 14.9178 9.59241 14.968 9.65688 15.0178C10.5805 14.4619 11.5184 13.8208 12.4903 13.1502L12.5774 13.0901C13.954 12.14 15.391 11.1482 16.8714 10.3958C17.9678 9.83858 19.1215 9.39434 20.3371 9.19011Z',
};

export const IconSiriStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="siri-stroke-rounded IconSiriStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSiriDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="siri-duotone-rounded IconSiriDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSiriTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="siri-twotone-rounded IconSiriTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="0.5" 
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
        opacity="var(--icon-opacity)" 
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

export const IconSiriSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="siri-solid-rounded IconSiriSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSiriBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="siri-bulk-rounded IconSiriBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSiriStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="siri-stroke-sharp IconSiriStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSiriSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="siri-solid-sharp IconSiriSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSiri: TheIconSelfPack = {
  name: 'Siri',
  StrokeRounded: IconSiriStrokeRounded,
  DuotoneRounded: IconSiriDuotoneRounded,
  TwotoneRounded: IconSiriTwotoneRounded,
  SolidRounded: IconSiriSolidRounded,
  BulkRounded: IconSiriBulkRounded,
  StrokeSharp: IconSiriStrokeSharp,
  SolidSharp: IconSiriSolidSharp,
};