import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.4975 2H10.5025C8.88452 2 8.07552 2 7.52387 2.48909C6.38066 3.50265 6.52582 6.17233 6.3215 7.63432C6.21198 8.41794 5.55547 9 4.78113 9C4.42436 9 4.11241 9.24911 4.02908 9.60373C3.32919 12.5822 1.93142 18.3709 4.41467 20.8575C5.55563 22 7.06507 22 10.0839 22H13.9161C16.9349 22 18.4444 22 19.5853 20.8575C22.0686 18.3709 20.6708 12.5822 19.9709 9.60372C19.8876 9.24911 19.5756 9 19.2189 9C18.4445 9 17.788 8.41793 17.6785 7.63431C17.4742 6.17232 17.6194 3.50267 16.4762 2.4891C15.9246 2 15.1156 2 13.4975 2Z',
  d2: 'M5 14H3.5M5 18H3.5',
  d3: 'M20.5 14H19M20.5 18H19',
  d4: 'M9.58056 13.5806C10.3546 12.8065 13.6454 12.8065 14.4194 13.5806C15.1935 14.3546 15.1935 17.6454 14.4194 18.4194C13.6454 19.1935 10.3546 19.1935 9.58056 18.4194C8.80648 17.6454 8.80648 14.3546 9.58056 13.5806Z',
  d5: 'M15 2C15 3.65685 13.6569 5 12 5C10.3431 5 9 3.65685 9 2',
  d6: 'M7.52387 2.48904C7.98067 2.08404 8.61395 2.01441 9.73694 2.00244C9.32387 2.03509 8.99472 2.38497 9.10533 2.79079C9.45235 4.06394 10.6169 4.99996 12 4.99996C13.3831 4.99996 14.5477 4.06394 14.8947 2.79079C15.0053 2.38496 14.6761 2.03508 14.2631 2.00244C15.3861 2.01441 16.0194 2.08404 16.4762 2.48905C17.3496 3.2634 17.471 5.00435 17.5707 6.43492C17.6016 6.87687 17.6303 7.28921 17.6785 7.63426C17.788 8.41789 18.4445 8.99996 19.2189 8.99996C19.5756 8.99996 19.8876 9.24906 19.9709 9.60368L19.996 9.71044C20.7033 12.7185 22.0392 18.4003 19.5853 20.8575C18.4444 22 16.9349 22 13.9161 22H10.0839C7.06507 22 5.55563 22 4.41467 20.8575C1.96076 18.4003 3.2967 12.7185 4.00398 9.71044L4.02908 9.60369C4.11241 9.24907 4.42436 8.99996 4.78113 8.99996C5.55547 8.99996 6.21198 8.4179 6.3215 7.63427C6.36972 7.28922 6.39848 6.87688 6.4293 6.43492C6.52907 5.00434 6.65048 3.26338 7.52387 2.48904ZM14.4194 18.4194C15.1935 17.6454 15.1935 14.3546 14.4194 13.5806C13.6454 12.8065 10.3546 12.8065 9.58056 13.5806C8.80648 14.3546 8.80648 17.6454 9.58056 18.4194C10.3546 19.1935 13.6454 19.1935 14.4194 18.4194Z',
  d7: 'M12 5C13.3831 5 14.5477 4.06398 14.8947 2.79083C15.0109 2.36455 14.6418 2 14.2 2H9.8C9.35817 2 8.98914 2.36455 9.10533 2.79083C9.45235 4.06398 10.6169 5 12 5Z',
  d8: 'M10.1109 14.1109C10.148 14.0738 10.3221 13.9663 10.7192 13.8768C11.0833 13.7948 11.5345 13.75 12 13.75C12.4655 13.75 12.9167 13.7948 13.2808 13.8768C13.6779 13.9663 13.852 14.0738 13.8891 14.1109C13.9262 14.148 14.0337 14.3221 14.1232 14.7192C14.2052 15.0833 14.25 15.5346 14.25 16C14.25 16.4655 14.2052 16.9167 14.1232 17.2808C14.0337 17.6779 13.9262 17.852 13.8891 17.8891C13.852 17.9262 13.6779 18.0337 13.2808 18.1232C12.9167 18.2052 12.4655 18.25 12 18.25C11.5345 18.25 11.0833 18.2052 10.7192 18.1232C10.3221 18.0337 10.148 17.9262 10.1109 17.8891C10.0738 17.852 9.96627 17.6779 9.8768 17.2808C9.79475 16.9167 9.75 16.4655 9.75 16C9.75 15.5346 9.79475 15.0833 9.8768 14.7192C9.96627 14.3221 10.0738 14.148 10.1109 14.1109Z',
  d9: 'M15.4829 1.31732C14.9612 1.24995 14.3137 1.24997 13.5458 1.25H10.4544C9.68652 1.24997 9.03903 1.24995 8.51732 1.31731C7.9624 1.38897 7.45674 1.54633 7.02637 1.92789C6.2286 2.63519 5.95937 3.81766 5.82742 4.793C5.75767 5.30864 5.71955 5.83379 5.68668 6.30382C5.65497 6.75808 5.62327 7.21215 5.57877 7.53051C5.51931 7.95602 5.16905 8.25 4.78118 8.25C4.06908 8.25 3.43157 8.868 3.27027 9.55444C3.0911 10.3163 2.86735 11.2676 2.6751 12.3045C2.61588 12.6239 2.58627 12.7836 2.67623 12.8918C2.76619 13 2.93066 13 3.2596 13H4C4.55228 13 5 13.4477 5 14C5 14.5523 4.55228 15 4 15H2.67683C2.58927 15 2.54549 15 2.50796 15.0099C2.41084 15.0354 2.33046 15.1112 2.2992 15.2066C2.28712 15.2435 2.2846 15.2859 2.27957 15.3706C2.25883 15.7197 2.24787 16.0743 2.25034 16.4297C2.25218 16.6937 2.2531 16.8257 2.34084 16.9129C2.42858 17 2.56469 17 2.83692 17H4C4.55228 17 5 17.4477 5 18C5 18.5523 4.55228 19 4 19H3.35328C2.98511 19 2.80103 19 2.71186 19.1326C2.6227 19.2651 2.68777 19.425 2.8179 19.7446C3.06733 20.3573 3.41356 20.9164 3.88404 21.3875C4.59473 22.0991 5.41837 22.4373 6.42726 22.5979C7.38351 22.7501 8.56543 22.75 10.023 22.75H13.9771C15.4347 22.75 16.6166 22.7501 17.5728 22.5979C18.5817 22.4373 19.4054 22.0991 20.1161 21.3875C20.5865 20.9164 20.9328 20.3573 21.1822 19.7446C21.3123 19.425 21.3774 19.2651 21.2882 19.1326C21.1991 19 21.015 19 20.6468 19H20C19.4477 19 19 18.5523 19 18C19 17.4477 19.4477 17 20 17H21.1632C21.4354 17 21.5715 17 21.6593 16.9129C21.747 16.8257 21.7479 16.6937 21.7498 16.4297C21.7522 16.0743 21.7413 15.7197 21.7205 15.3706C21.7155 15.2859 21.713 15.2435 21.7009 15.2066C21.6696 15.1112 21.5893 15.0354 21.4921 15.0099C21.4546 15 21.4108 15 21.3233 15H20C19.4477 15 19 14.5523 19 14C19 13.4477 19.4477 13 20 13H20.7405C21.0694 13 21.2339 13 21.3239 12.8918C21.4138 12.7836 21.3842 12.6239 21.325 12.3045C21.1328 11.2677 20.909 10.3163 20.7299 9.55452C20.5686 8.86809 19.931 8.25 19.2189 8.25C18.8311 8.25 18.4808 7.95602 18.4214 7.53052C18.3769 7.21216 18.3452 6.75807 18.3135 6.30382C18.2806 5.8338 18.2425 5.30865 18.1728 4.79302C18.0408 3.81768 17.7716 2.63521 16.9738 1.92791C16.5435 1.54634 16.0378 1.38897 15.4829 1.31732ZM14.1094 2.79077C14.4794 2.79077 14.6645 2.79077 14.7509 2.94153C14.8374 3.09228 14.7553 3.23246 14.5913 3.51282C14.0708 4.40242 13.1052 4.99994 12.0001 4.99994C10.895 4.99994 9.9295 4.40242 9.40898 3.51282C9.24493 3.23246 9.16291 3.09228 9.24937 2.94153C9.33582 2.79077 9.52085 2.79077 9.8909 2.79077H14.1094ZM14.9498 13.0502C14.5998 12.7003 14.0723 12.5175 13.6105 12.4135C13.1157 12.302 12.5507 12.25 12 12.25C11.4493 12.25 10.8843 12.302 10.3895 12.4135C9.92767 12.5175 9.40017 12.7003 9.05023 13.0502C8.70029 13.4002 8.51754 13.9277 8.41348 14.3895C8.30201 14.8843 8.25 15.4493 8.25 16C8.25 16.5507 8.30201 17.1157 8.41348 17.6105C8.51754 18.0723 8.70029 18.5998 9.05023 18.9498C9.40017 19.2997 9.92767 19.4825 10.3895 19.5865C10.8843 19.698 11.4493 19.75 12 19.75C12.5507 19.75 13.1157 19.698 13.6105 19.5865C14.0723 19.4825 14.5998 19.2997 14.9498 18.9498C15.2997 18.5998 15.4825 18.0723 15.5865 17.6105C15.698 17.1157 15.75 16.5507 15.75 16C15.75 15.4493 15.698 14.8843 15.5865 14.3895C15.4825 13.9277 15.2997 13.4002 14.9498 13.0502Z',
  d10: 'M15.4829 1.31732C14.9612 1.24995 14.3137 1.24997 13.5458 1.25H10.4544C9.68652 1.24997 9.03903 1.24995 8.51732 1.31731C7.9624 1.38897 7.45674 1.54633 7.02637 1.92789C6.2286 2.63519 5.95937 3.81766 5.82742 4.793C5.75767 5.30864 5.71955 5.83379 5.68668 6.30382C5.65497 6.75808 5.62327 7.21215 5.57877 7.53051C5.51931 7.95602 5.16905 8.25 4.78118 8.25C4.06908 8.25 3.43157 8.868 3.27027 9.55444C2.92257 11.0328 2.407 13.225 2.27957 15.3706C2.1513 17.5304 2.39699 19.8984 3.88404 21.3875C4.59473 22.0991 5.41837 22.4373 6.42726 22.5979C7.38351 22.7501 8.56543 22.75 10.023 22.75H13.9771C15.4347 22.75 16.6166 22.7501 17.5728 22.5979C18.5817 22.4373 19.4054 22.0991 20.1161 21.3875C21.6031 19.8984 21.8488 17.5304 21.7205 15.3706C21.5931 13.2251 21.0776 11.0329 20.7299 9.55452C20.5686 8.86809 19.931 8.25 19.2189 8.25C18.8311 8.25 18.4808 7.95602 18.4214 7.53052C18.3769 7.21216 18.3452 6.75807 18.3135 6.30382C18.2806 5.8338 18.2425 5.30865 18.1728 4.79302C18.0408 3.81768 17.7716 2.63521 16.9738 1.92791C16.5435 1.54634 16.0378 1.38897 15.4829 1.31732ZM13.8476 2.79077C14.3404 2.79077 14.5868 2.79077 14.6986 3.00709C14.8104 3.22341 14.6901 3.39319 14.4494 3.73275C13.9059 4.4995 13.0115 4.99994 12.0001 4.99994C10.9888 4.99994 10.0943 4.4995 9.55088 3.73275C9.31021 3.39319 9.18988 3.22341 9.3017 3.00709C9.41352 2.79077 9.65992 2.79077 10.1527 2.79077H13.8476Z',
  d11: 'M21.4464 13H20C19.4477 13 19 13.4477 19 14C19 14.5523 19.4477 15 20 15H21.6948C21.6413 14.3258 21.5528 13.6513 21.4464 13ZM21.7337 17H20C19.4477 17 19 17.4477 19 18C19 18.5523 19.4477 19 20 19H21.4329C21.6077 18.3611 21.6992 17.6835 21.7337 17ZM2.56708 19H3.99996C4.55224 19 4.99996 18.5523 4.99996 18C4.99996 17.4477 4.55224 17 3.99996 17H2.26636C2.30081 17.6835 2.39233 18.3611 2.56708 19ZM2.30527 15H3.99996C4.55224 15 4.99996 14.5523 4.99996 14C4.99996 13.4477 4.55224 13 3.99996 13H2.55359C2.4472 13.6513 2.35869 14.3258 2.30527 15Z',
  d12: 'M10.7192 13.8768C10.3221 13.9663 10.148 14.0738 10.1109 14.1109C10.0738 14.148 9.96627 14.3221 9.8768 14.7192C9.79475 15.0833 9.75 15.5346 9.75 16C9.75 16.4655 9.79475 16.9167 9.8768 17.2808C9.96627 17.6779 10.0738 17.852 10.1109 17.8891C10.148 17.9262 10.3221 18.0337 10.7192 18.1232C11.0833 18.2052 11.5346 18.25 12 18.25C12.4655 18.25 12.9167 18.2052 13.2808 18.1232C13.6779 18.0337 13.852 17.9262 13.8891 17.8891C13.9262 17.852 14.0337 17.6779 14.1232 17.2808C14.2052 16.9167 14.25 16.4655 14.25 16C14.25 15.5346 14.2052 15.0833 14.1232 14.7192C14.0337 14.3221 13.9262 14.148 13.8891 14.1109C13.852 14.0738 13.6779 13.9663 13.2808 13.8768C12.9167 13.7948 12.4655 13.75 12 13.75C11.5346 13.75 11.0833 13.7948 10.7192 13.8768ZM13.6105 12.4135C14.0723 12.5175 14.5998 12.7003 14.9498 13.0502C15.2997 13.4002 15.4825 13.9277 15.5865 14.3895C15.698 14.8843 15.75 15.4493 15.75 16C15.75 16.5507 15.698 17.1157 15.5865 17.6105C15.4825 18.0723 15.2997 18.5998 14.9498 18.9498C14.5998 19.2997 14.0723 19.4825 13.6105 19.5865C13.1157 19.698 12.5507 19.75 12 19.75C11.4493 19.75 10.8843 19.698 10.3895 19.5865C9.92767 19.4825 9.40017 19.2997 9.05023 18.9498C8.70029 18.5998 8.51754 18.0723 8.41348 17.6105C8.30201 17.1157 8.25 16.5507 8.25 16C8.25 15.4493 8.30201 14.8843 8.41348 14.3895C8.51754 13.9277 8.70029 13.4002 9.05023 13.0502C9.40017 12.7003 9.92767 12.5175 10.3895 12.4135C10.8843 12.302 11.4493 12.25 12 12.25C12.5507 12.25 13.1157 12.302 13.6105 12.4135Z',
  d13: 'M4.48456 8.15168L3 9V22H21V9L19.5154 8.15168C18.2691 7.43951 17.5 6.11414 17.5 4.67871V2H6.5V4.67871C6.5 6.11414 5.73086 7.43951 4.48456 8.15168Z',
  d14: 'M6.5 13H3M6.5 17H3',
  d15: 'M21 13H17.5M21 17H17.5',
  d16: 'M15 12H9V18H15V12Z',
  d17: 'M9.75 17.25V12.75H14.25V17.25H9.75Z',
  d18: 'M18.25 4.67871C18.25 5.84499 18.8749 6.92186 19.8875 7.5005L21.75 8.56476V12.25H18.5V13.75H21.75V16.25H18.5V17.75H21.75V22.75H2.25V17.75H5.5V16.25H2.25V13.75H5.5V12.25H2.25V8.56476L4.11245 7.5005C5.12507 6.92186 5.75 5.84499 5.75 4.67871V1.25H18.25V4.67871ZM9.09375 2.75C9.42678 4.04392 10.6014 5 11.9992 5C13.3971 5 14.5717 4.04392 14.9047 2.75H9.09375ZM15.75 11.25H8.25V18.75H15.75V11.25Z',
} as const;

export const IconBulletproofVestStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulletproof-vest-stroke-rounded IconBulletproofVestStrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBulletproofVestDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulletproof-vest-duotone-rounded IconBulletproofVestDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBulletproofVestTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulletproof-vest-twotone-rounded IconBulletproofVestTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBulletproofVestSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulletproof-vest-solid-rounded IconBulletproofVestSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBulletproofVestBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulletproof-vest-bulk-rounded IconBulletproofVestBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBulletproofVestStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulletproof-vest-stroke-sharp IconBulletproofVestStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBulletproofVestSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulletproof-vest-solid-sharp IconBulletproofVestSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBulletproofVest: TheIconSelfPack = {
  name: 'BulletproofVest',
  StrokeRounded: IconBulletproofVestStrokeRounded,
  DuotoneRounded: IconBulletproofVestDuotoneRounded,
  TwotoneRounded: IconBulletproofVestTwotoneRounded,
  SolidRounded: IconBulletproofVestSolidRounded,
  BulkRounded: IconBulletproofVestBulkRounded,
  StrokeSharp: IconBulletproofVestStrokeSharp,
  SolidSharp: IconBulletproofVestSolidSharp,
};