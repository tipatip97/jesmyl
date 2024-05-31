import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 15.7501C2 15.7501 3.79534 15 7 15C12 15 16 18 22 18',
  d2: 'M2 21H22',
  d3: 'M12.594 3.22761C9.74838 4.04368 7.89871 6.85224 8.0043 9.87504C8.02623 10.5029 8.03719 10.8168 8.30546 10.9556C8.57373 11.0944 8.85218 10.8977 9.40908 10.5041L10.6506 9.6268C10.8371 9.49503 11.0585 9.43155 11.2815 9.44587L14.1977 9.63321L16.6357 7.91042C16.8222 7.77865 17.0435 7.71517 17.2666 7.7295L18.7879 7.82723C19.4407 7.86916 19.7671 7.89013 19.9291 7.63883C20.0912 7.38753 19.9594 7.11583 19.6959 6.57242C18.3856 3.86989 15.4553 2.40707 12.594 3.22761Z',
  d4: 'M14.5 9.5L16.5 17M12.2857 3L12 2',
  d5: 'M7.21376 15C9.68351 15 11.9116 15.6683 14.1116 16.3282C16.2877 16.9808 18.4647 17.632 21.0002 17.7723C21.4843 17.7991 21.7264 17.8125 21.8632 17.9571C22 18.1017 22 18.3344 22 18.8V21C22 21.4714 22 21.7071 21.8536 21.8536C21.7071 22 21.4714 22 21 22H3C2.5286 22 2.29289 22 2.14645 21.8536C2 21.7071 2 21.4714 2 21V16.467C2 16.1177 2 15.943 2.10198 15.8089C2.20397 15.6747 2.36284 15.6307 2.68059 15.5425C2.91946 15.4762 3.16075 15.4176 3.40538 15.3665C4.2906 15.1815 5.5763 15 7.21376 15Z',
  d6: 'M11.7252 1.78873C12.2563 1.63701 12.8098 1.9445 12.9615 2.47554C13.0462 2.77214 13.1117 2.83104 13.4222 2.79478C16.4119 2.44567 19.258 4.12751 20.5957 6.8864C20.7243 7.15108 20.8591 7.41727 20.9368 7.70233C21.0315 8.0496 21.0501 8.49578 20.7695 8.93102C20.4672 9.39989 20.009 9.54651 19.6558 9.58681C19.3809 9.61818 19.0548 9.59695 18.7789 9.579L17.3525 9.48734C17.2128 9.47837 17.2103 9.47908 17.096 9.55985L15.8549 10.4369C15.745 10.5146 15.69 10.5534 15.6686 10.6124C15.6472 10.6714 15.6646 10.7365 15.6993 10.8666L16.7485 14.8012C16.8302 15.1077 16.8711 15.2609 16.7868 15.3426C16.7024 15.4243 16.5506 15.3787 16.2468 15.2873L15.0036 14.9136C14.6901 14.8193 14.6809 14.8098 14.5966 14.4936L13.8343 11.6351C13.7986 11.5011 13.7807 11.434 13.7309 11.3932C13.6811 11.3523 13.6119 11.3479 13.4735 11.339L11.3675 11.2037C11.2278 11.1947 11.2253 11.1955 11.111 11.2762L9.93975 12.1039C9.7038 12.2709 9.42921 12.4653 9.17364 12.5851C8.85041 12.7367 8.3631 12.8617 7.84583 12.594C7.3649 12.3451 7.16619 11.9229 7.08662 11.5674C7.02016 11.2705 7.01525 10.963 7.00487 10.6602C6.90357 7.76018 8.38827 4.98261 10.8664 3.61594C11.166 3.45066 11.1277 3.33753 11.0384 3.02498C10.8867 2.49394 11.1942 1.94046 11.7252 1.78873Z',
  d7: 'M7.21351 15C9.68327 15 11.9114 15.6683 14.1114 16.3282C16.2875 16.9808 18.4644 17.632 21 17.7723C21.4841 17.7991 21.7261 17.8125 21.8629 17.9571C21.9998 18.1017 21.9998 18.3344 21.9998 18.8V21C21.9998 21.4714 21.9998 21.7071 21.8533 21.8536C21.7069 22 21.4712 22 20.9998 22H2.99976C2.52835 22 2.29265 22 2.1462 21.8536C1.99976 21.7071 1.99976 21.4714 1.99976 21V16.467C1.99976 16.1177 1.99976 15.943 2.10174 15.8089C2.20372 15.6747 2.3626 15.6307 2.68034 15.5425C2.91922 15.4762 3.16051 15.4176 3.40514 15.3665C4.29036 15.1815 5.57606 15 7.21351 15Z',
  d8: 'M2 16.2501C2 16.2501 3.79534 15.5 7 15.5C12 15.5 16 18.5 22 18.5',
  d9: 'M2 21.5H22',
  d10: 'M11.999 2.5L12.449 4M16.499 17.5L14.3118 10.2093',
  d11: 'M8.17246 11.4885L19.9882 8.00875C18.8587 3.44885 13.5783 3.2731 11.8983 4.17836C7.97428 5.59469 7.75129 9.64196 8.17246 11.4885Z',
  d12: 'M22 17.5086H22.75V22.0002H1.25V15.5129C1.25 15.5129 2.68764 15.005 3.13657 14.9061C4.03459 14.7082 5.33888 14.5142 7 14.5142C9.50546 14.5142 11.7658 15.2289 13.9976 15.9345L14.3508 16.0461C16.7227 16.7937 19.1259 17.5086 22 17.5086Z',
  d13: 'M20.7255 7.61343C19.7579 3.84873 16.2267 2.4415 13.215 2.86033L12.9567 2L11.041 2.57362L11.2913 3.40694C10.0839 3.93751 9.02461 4.79344 8.29088 5.94222C7.36405 7.39336 6.98925 9.2611 7.43085 11.4199L7.59412 12.218L13.4253 10.5077L14.645 14.5659L14.8018 14.6154C15.5238 14.8429 16.2312 15.0614 16.9402 15.255L15.3442 9.94493L20.9055 8.31383L20.7255 7.61343Z',
} as const;

export const IconBeachStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beach-stroke-rounded IconBeachStrokeRounded"
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

export const IconBeachDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beach-duotone-rounded IconBeachDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconBeachTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beach-twotone-rounded IconBeachTwotoneRounded"
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

export const IconBeachSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beach-solid-rounded IconBeachSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBeachBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beach-bulk-rounded IconBeachBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBeachStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beach-stroke-sharp IconBeachStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBeachSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beach-solid-sharp IconBeachSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBeach: TheIconSelfPack = {
  name: 'Beach',
  StrokeRounded: IconBeachStrokeRounded,
  DuotoneRounded: IconBeachDuotoneRounded,
  TwotoneRounded: IconBeachTwotoneRounded,
  SolidRounded: IconBeachSolidRounded,
  BulkRounded: IconBeachBulkRounded,
  StrokeSharp: IconBeachStrokeSharp,
  SolidSharp: IconBeachSolidSharp,
};