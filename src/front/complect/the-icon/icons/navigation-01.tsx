import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z',
  d2: 'M2.00019 12.0504C1.96622 11.0147 6.45448 8.57937 6.87722 9.06275C7.3566 9.61089 6.21047 11.2397 5.95232 11.7584C5.79708 12.0703 5.80134 12.2056 5.97785 12.5172C6.77726 13.9283 7.17382 14.6313 6.92737 14.9352C6.53453 15.4197 2.03334 13.0611 2.00019 12.0504Z',
  d3: 'M11.9496 21.9998C12.9853 22.0338 15.4206 17.5455 14.9373 17.1228C14.3891 16.6434 12.7603 17.7895 12.2416 18.0477C11.9297 18.2029 11.7944 18.1987 11.4828 18.0221C10.0717 17.2227 9.36869 16.8262 9.06478 17.0726C8.58035 17.4655 10.9389 21.9667 11.9496 21.9998Z',
  d4: 'M21.9998 12.0504C22.0338 11.0147 17.5455 8.57937 17.1228 9.06275C16.6434 9.61089 17.7895 11.2397 18.0477 11.7584C18.2029 12.0703 18.1987 12.2056 18.0221 12.5172C17.2227 13.9283 16.8262 14.6313 17.0726 14.9352C17.4655 15.4197 21.9667 13.0611 21.9998 12.0504Z',
  d5: 'M11.9496 2.00019C12.9853 1.96622 15.4206 6.45448 14.9373 6.87722C14.3891 7.3566 12.7603 6.21047 12.2416 5.95232C11.9297 5.79708 11.7944 5.80134 11.4828 5.97785C10.0717 6.77726 9.36869 7.17382 9.06478 6.92737C8.58035 6.53453 10.9389 2.03334 11.9496 2.00019Z',
  d6: 'M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12Z',
  d7: 'M15.7363 6.86432C15.7141 7.01177 15.6472 7.25267 15.431 7.44179C15.0302 7.79226 14.5301 7.76593 14.2211 7.7087C13.8865 7.64671 13.5453 7.50709 13.2544 7.36778C12.9557 7.22473 12.1222 6.75084 11.8846 6.61261C11.2086 6.9956 10.5864 7.34769 10.1556 7.53349C9.93778 7.62745 9.69769 7.71297 9.45796 7.7405C9.20606 7.76943 8.87753 7.74113 8.59239 7.50991C8.36324 7.32409 8.29096 7.0781 8.26644 6.93093C8.24081 6.77711 8.24927 6.62888 8.26399 6.51116C8.29383 6.27259 8.37017 6.00613 8.46186 5.74661C8.64866 5.21784 8.94978 4.57802 9.29103 3.96439C9.63215 3.35101 10.0312 2.73161 10.4249 2.25262C10.6205 2.0146 10.8318 1.79027 11.0497 1.61753C11.2453 1.46255 11.5518 1.26284 11.925 1.2506C12.309 1.238 12.6308 1.42613 12.8374 1.57694C13.0654 1.74339 13.2854 1.9635 13.488 2.19714C13.8958 2.66748 14.3089 3.28168 14.6621 3.89161C15.0156 4.50218 15.3283 5.14166 15.5238 5.67306C15.6199 5.9341 15.7002 6.20212 15.7332 6.44307C15.7495 6.56224 15.7596 6.71046 15.7363 6.86432Z',
  d8: 'M15.7363 17.1357C15.7141 16.9882 15.6472 16.7473 15.431 16.5582C15.0302 16.2077 14.5301 16.2341 14.2211 16.2913C13.8865 16.3533 13.5453 16.4929 13.2544 16.6322C12.9557 16.7753 12.1222 17.2492 11.8846 17.3874C11.2086 17.0044 10.5864 16.6523 10.1556 16.4665C9.93778 16.3726 9.69769 16.287 9.45796 16.2595C9.20606 16.2306 8.87753 16.2589 8.59239 16.4901C8.36324 16.6759 8.29096 16.9219 8.26644 17.0691C8.24081 17.2229 8.24927 17.3711 8.26399 17.4888C8.29383 17.7274 8.37017 17.9939 8.46186 18.2534C8.64866 18.7822 8.94978 19.422 9.29103 20.0356C9.63215 20.649 10.0312 21.2684 10.4249 21.7474C10.6205 21.9854 10.8318 22.2097 11.0497 22.3825C11.2453 22.5375 11.5518 22.7372 11.925 22.7494C12.309 22.762 12.6308 22.5739 12.8374 22.4231C13.0654 22.2566 13.2854 22.0365 13.488 21.8029C13.8958 21.3325 14.3089 20.7183 14.6621 20.1084C15.0156 19.4978 15.3283 18.8583 15.5238 18.3269C15.6199 18.0659 15.7002 17.7979 15.7332 17.5569C15.7495 17.4378 15.7596 17.2895 15.7363 17.1357Z',
  d9: 'M17.1357 15.7363C16.9882 15.7141 16.7473 15.6472 16.5582 15.431C16.2077 15.0302 16.2341 14.5301 16.2913 14.2211C16.3533 13.8865 16.4929 13.5453 16.6322 13.2544C16.7753 12.9557 17.2492 12.1222 17.3874 11.8846C17.0044 11.2086 16.6523 10.5864 16.4665 10.1556C16.3726 9.93778 16.287 9.69769 16.2595 9.45795C16.2306 9.20606 16.2589 8.87753 16.4901 8.59239C16.6759 8.36324 16.9219 8.29096 17.0691 8.26644C17.2229 8.24081 17.3711 8.24927 17.4888 8.26399C17.7274 8.29383 17.9939 8.37017 18.2534 8.46186C18.7822 8.64866 19.422 8.94978 20.0356 9.29103C20.649 9.63215 21.2684 10.0312 21.7474 10.4249C21.9854 10.6205 22.2097 10.8318 22.3825 11.0497C22.5375 11.2453 22.7372 11.5518 22.7494 11.925C22.762 12.309 22.5739 12.6308 22.4231 12.8374C22.2566 13.0654 22.0365 13.2854 21.8029 13.488C21.3325 13.8958 20.7183 14.3089 20.1084 14.6621C19.4978 15.0156 18.8583 15.3283 18.3269 15.5238C18.0659 15.6199 17.7979 15.7002 17.5569 15.7332C17.4378 15.7495 17.2895 15.7596 17.1357 15.7363Z',
  d10: 'M6.86432 15.7363C7.01177 15.7141 7.25267 15.6472 7.44179 15.431C7.79226 15.0302 7.76593 14.5301 7.7087 14.2211C7.64671 13.8865 7.50709 13.5453 7.36778 13.2544C7.22473 12.9557 6.75084 12.1222 6.61261 11.8846C6.9956 11.2086 7.34769 10.5864 7.53349 10.1556C7.62745 9.93778 7.71297 9.69769 7.7405 9.45796C7.76943 9.20606 7.74113 8.87753 7.50991 8.59239C7.32409 8.36324 7.0781 8.29096 6.93093 8.26644C6.77711 8.24081 6.62888 8.24927 6.51116 8.26399C6.27259 8.29383 6.00613 8.37017 5.74661 8.46186C5.21784 8.64866 4.57802 8.94978 3.96439 9.29103C3.35101 9.63215 2.73161 10.0312 2.25262 10.4249C2.0146 10.6205 1.79027 10.8318 1.61753 11.0497C1.46255 11.2453 1.26284 11.5518 1.2506 11.925C1.238 12.309 1.42613 12.6308 1.57694 12.8374C1.74339 13.0654 1.96349 13.2854 2.19714 13.488C2.66748 13.8958 3.28168 14.3089 3.89161 14.6621C4.50218 15.0156 5.14166 15.3283 5.67306 15.5238C5.9341 15.6199 6.20212 15.7002 6.44307 15.7332C6.56224 15.7495 6.71046 15.7596 6.86432 15.7363Z',
  d11: 'M13.9994 12.0085C13.9994 13.114 13.1039 14.0102 11.9992 14.0102C10.8945 14.0102 9.99902 13.114 9.99902 12.0085C9.99902 10.903 10.8945 10.0068 11.9992 10.0068C13.1039 10.0068 13.9994 10.903 13.9994 12.0085Z',
  d12: 'M5.99588 12.0139L6.99475 9.02983C6.99771 9.02097 6.98801 9.01324 6.98005 9.01811L2.00576 11.9491C1.99931 11.9531 1.9994 11.9625 2.00593 11.9663L6.98231 14.9978C6.99029 15.0025 6.99979 14.9948 6.99684 14.986L5.99588 12.0139Z',
  d13: 'M18.0012 12.0139L17.0023 9.02983C16.9994 9.02097 17.0091 9.01324 17.017 9.01811L21.9913 11.9491C21.9978 11.9531 21.9977 11.9625 21.9911 11.9663L17.0148 14.9978C17.0068 15.0025 16.9973 14.9948 17.0002 14.986L18.0012 12.0139Z',
  d14: 'M11.9932 18.0163L14.9751 17.0167C14.9839 17.0137 14.9916 17.0234 14.9868 17.0314L11.9528 22.003C11.9488 22.0095 11.9394 22.0094 11.9356 22.0029L9.01142 17.0292C9.00675 17.0212 9.01449 17.0117 9.02325 17.0146L11.9932 18.0163Z',
  d15: 'M12.0059 5.99694L9.02396 6.99653C9.01511 6.9995 9.00738 6.98979 9.01225 6.98182L11.9535 2.01749C11.9574 2.01103 11.9668 2.01112 11.9707 2.01765L14.9876 6.98408C14.9923 6.99207 14.9845 7.00158 14.9758 6.99862L12.0059 5.99694Z',
  d16: 'M11.9437 1.25002C12.2071 1.24805 12.4523 1.38446 12.5895 1.60936L15.6402 6.60936C15.8042 6.87816 15.7829 7.22077 15.5868 7.46712C15.3907 7.71347 15.0616 7.81109 14.7628 7.71151L12 6.79057L9.23718 7.71151C8.9404 7.81044 8.61339 7.71477 8.41674 7.47148C8.22008 7.2282 8.19508 6.88841 8.35401 6.61896L11.3033 1.61896C11.4371 1.39204 11.6802 1.25199 11.9437 1.25002Z',
  d17: 'M15.5868 16.5329C15.7829 16.7793 15.8042 17.1219 15.6402 17.3907L12.5895 22.3907C12.4523 22.6156 12.2071 22.752 11.9437 22.75C11.6802 22.7481 11.4371 22.608 11.3033 22.3811L8.35401 17.3811C8.19508 17.1116 8.22008 16.7718 8.41674 16.5286C8.61339 16.2853 8.9404 16.1896 9.23718 16.2885L12 17.2095L14.7628 16.2885C15.0616 16.189 15.3907 16.2866 15.5868 16.5329Z',
  d18: 'M16.5266 8.41674C16.7699 8.22008 17.1097 8.19508 17.3791 8.35401L22.3791 11.3033C22.606 11.4371 22.7461 11.6802 22.7481 11.9437C22.75 12.2071 22.6136 12.4523 22.3887 12.5895L17.3887 15.6402C17.1199 15.8042 16.7773 15.7829 16.531 15.5868C16.2846 15.3907 16.187 15.0616 16.2866 14.7628L17.2075 12L16.2866 9.23718C16.1877 8.9404 16.2833 8.61339 16.5266 8.41674Z',
  d19: 'M7.46953 8.41674C7.71282 8.61339 7.80848 8.9404 7.70956 9.23718L6.78862 12L7.70956 14.7628C7.80913 15.0616 7.71151 15.3907 7.46517 15.5868C7.21882 15.7829 6.8762 15.8042 6.60741 15.6402L1.60741 12.5895C1.38251 12.4523 1.2461 12.2071 1.24807 11.9437C1.25003 11.6802 1.39009 11.4371 1.61701 11.3033L6.61701 8.35401C6.88645 8.19508 7.22625 8.22008 7.46953 8.41674Z',
} as const;

export const IconNavigation01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-01-stroke-rounded IconNavigation01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNavigation01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-01-duotone-rounded IconNavigation01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNavigation01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-01-twotone-rounded IconNavigation01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNavigation01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-01-solid-rounded IconNavigation01SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconNavigation01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-01-bulk-rounded IconNavigation01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNavigation01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-01-stroke-sharp IconNavigation01StrokeSharp"
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNavigation01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-01-solid-sharp IconNavigation01SolidSharp"
    >
      <path 
        d={d.d6} 
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

export const iconPackOfNavigation01: TheIconSelfPack = {
  name: 'Navigation01',
  StrokeRounded: IconNavigation01StrokeRounded,
  DuotoneRounded: IconNavigation01DuotoneRounded,
  TwotoneRounded: IconNavigation01TwotoneRounded,
  SolidRounded: IconNavigation01SolidRounded,
  BulkRounded: IconNavigation01BulkRounded,
  StrokeSharp: IconNavigation01StrokeSharp,
  SolidSharp: IconNavigation01SolidSharp,
};