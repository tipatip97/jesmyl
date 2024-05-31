import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 12C6 9.17157 6 7.75736 6.87868 6.87868C7.75736 6 9.17157 6 12 6C14.8284 6 16.2426 6 17.1213 6.87868C18 7.75736 18 9.17157 18 12C18 14.8284 18 16.2426 17.1213 17.1213C16.2426 18 14.8284 18 12 18C9.17157 18 7.75736 18 6.87868 17.1213C6 16.2426 6 14.8284 6 12Z',
  d2: 'M16 6L15.7276 4.91043C15.3931 3.5724 15.2258 2.90339 14.7499 2.49004C14.6973 2.44433 14.6423 2.40141 14.5852 2.36145C14.0688 2 13.3792 2 12 2C10.6208 2 9.93119 2 9.41476 2.36145C9.35765 2.40141 9.30268 2.44433 9.25006 2.49004C8.77415 2.90339 8.6069 3.5724 8.27239 4.91043L8 6',
  d3: 'M8 18L8.27239 19.0896C8.6069 20.4276 8.77415 21.0966 9.25006 21.51C9.30268 21.5557 9.35765 21.5986 9.41476 21.6386C9.93119 22 10.6208 22 12 22C13.3792 22 14.0688 22 14.5852 21.6386C14.6423 21.5986 14.6973 21.5557 14.7499 21.51C15.2258 21.0966 15.3931 20.4276 15.7276 19.0896L16 18',
  d4: 'M12 10V12.005L13 13',
  d5: 'M12.0513 1.25001C12.6972 1.24998 13.2614 1.24995 13.7261 1.30124C14.2262 1.35644 14.7118 1.47932 15.1589 1.79219C15.6732 2.15219 16.013 2.67118 16.2297 3.256C16.3921 3.69411 16.5288 4.24115 16.6853 4.86739L16.698 4.91791L16.9213 5.81133C16.4703 5.57396 15.9593 5.44283 15.3917 5.36652C15.1854 5.33878 14.9657 5.31764 14.7323 5.30154C14.5739 4.66885 14.4679 4.25742 14.3543 3.951C14.211 3.5642 14.1259 3.50722 14.0377 3.44819L14.0377 3.44818C14.0292 3.44249 14.0207 3.43677 14.0121 3.43074C13.9426 3.38216 13.8252 3.32432 13.5067 3.28916C13.1648 3.25143 12.7121 3.25002 12.0002 3.25002C11.2883 3.25002 10.8356 3.25143 10.4938 3.28916C10.1752 3.32432 10.0578 3.38216 9.98837 3.43074C9.97974 3.43678 9.97121 3.44249 9.9627 3.44819C9.87453 3.50723 9.78944 3.5642 9.64609 3.951C9.53254 4.25741 9.42652 4.66884 9.26813 5.3015C9.03454 5.31762 8.81471 5.33876 8.60822 5.36652C8.04089 5.4428 7.53006 5.57385 7.07918 5.81104L7.30246 4.91791L7.31484 4.86839C7.47147 4.24173 7.60828 3.69434 7.77073 3.256C7.98746 2.67118 8.32719 2.15219 8.84157 1.79219C9.2886 1.47932 9.77418 1.35644 10.2743 1.30124C10.74 1.24984 11.3136 1.24992 11.9543 1.25001L12.0513 1.25001H12.0513ZM7.0791 18.1889L7.30246 19.0824L7.31487 19.132L7.31488 19.132C7.47149 19.7586 7.6083 20.306 7.77073 20.7443C7.98746 21.3291 8.32719 21.8481 8.84157 22.2081C9.2886 22.5209 9.77418 22.6438 10.2743 22.699C10.739 22.7503 11.3032 22.7503 11.9491 22.7503H11.9492H11.9492L12.0002 22.7503L12.0513 22.7503H12.0513H12.0513C12.6972 22.7503 13.2614 22.7503 13.7261 22.699C14.2262 22.6438 14.7118 22.5209 15.1589 22.2081C15.6732 21.8481 16.013 21.3291 16.2297 20.7443C16.3921 20.3059 16.5289 19.7586 16.6856 19.132L16.6856 19.1319L16.6856 19.1319L16.6856 19.1319L16.9214 18.1886C16.4704 18.426 15.9593 18.5572 15.3917 18.6335C15.1854 18.6612 14.9658 18.6824 14.7324 18.6985C14.5739 19.3313 14.4679 19.7428 14.3543 20.0493C14.211 20.4361 14.1259 20.493 14.0377 20.5521C14.0335 20.5549 14.0293 20.5577 14.0251 20.5606C14.0208 20.5635 14.0164 20.5665 14.0121 20.5695C13.9426 20.6181 13.8252 20.6759 13.5067 20.7111C13.1648 20.7488 12.7121 20.7503 12.0002 20.7503C11.2883 20.7503 10.8356 20.7488 10.4938 20.7111C10.1752 20.6759 10.0578 20.6181 9.98836 20.5695C9.97981 20.5635 9.97134 20.5579 9.96289 20.5522L9.9627 20.5521C9.87453 20.493 9.78944 20.4361 9.64609 20.0493C9.53252 19.7428 9.42649 19.3313 9.26806 18.6985C9.0345 18.6824 8.81469 18.6612 8.60822 18.6335C8.04086 18.5572 7.53001 18.4261 7.0791 18.1889Z',
  d6: 'M12.0549 5.25H12.0549H12.0549H11.9451H11.9451H11.9451C10.5775 5.24998 9.47521 5.24996 8.60825 5.36652C7.70814 5.48754 6.95027 5.74643 6.34835 6.34835C5.74643 6.95027 5.48754 7.70814 5.36652 8.60825C5.24996 9.47521 5.24998 10.5775 5.25 11.9451V11.9451V11.9451V12.0549V12.0549V12.0549C5.24998 13.4225 5.24996 14.5248 5.36652 15.3918C5.48754 16.2919 5.74643 17.0497 6.34835 17.6517C6.95027 18.2536 7.70814 18.5125 8.60825 18.6335C9.47522 18.75 10.5775 18.75 11.9451 18.75H11.9451H11.9451H12.0549H12.0549H12.0549C13.4225 18.75 14.5248 18.75 15.3918 18.6335C16.2919 18.5125 17.0497 18.2536 17.6517 17.6517C18.2536 17.0497 18.5125 16.2919 18.6335 15.3918C18.75 14.5248 18.75 13.4225 18.75 12.0549V12.0549V12.0549V11.9451V11.9451V11.9451C18.75 10.5775 18.75 9.47522 18.6335 8.60825C18.5125 7.70814 18.2536 6.95027 17.6517 6.34835C17.0497 5.74643 16.2919 5.48754 15.3918 5.36652C14.5248 5.24996 13.4225 5.24998 12.0549 5.25ZM13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V12.005C11 12.2711 11.1061 12.5262 11.2947 12.7139L12.2947 13.7089C12.6862 14.0984 13.3193 14.0968 13.7089 13.7053C14.0984 13.3138 14.0968 12.6807 13.7053 12.2911L13 11.5893V10Z',
  d7: 'M12.0549 5.25C13.4225 5.24998 14.5248 5.24996 15.3918 5.36652C16.2919 5.48754 17.0497 5.74643 17.6517 6.34835C18.2536 6.95027 18.5125 7.70814 18.6335 8.60825C18.75 9.47522 18.75 10.5775 18.75 11.9451V11.9451V12.0549V12.0549C18.75 13.4225 18.75 14.5248 18.6335 15.3918C18.5125 16.2919 18.2536 17.0497 17.6517 17.6517C17.0497 18.2536 16.2919 18.5125 15.3918 18.6335C14.5248 18.75 13.4225 18.75 12.0549 18.75H12.0549H11.9451H11.9451C10.5775 18.75 9.47522 18.75 8.60825 18.6335C7.70814 18.5125 6.95027 18.2536 6.34835 17.6517C5.74643 17.0497 5.48754 16.2919 5.36652 15.3918C5.24996 14.5248 5.24998 13.4225 5.25 12.0549V12.0549V11.9451V11.9451C5.24998 10.5775 5.24996 9.47521 5.36652 8.60825C5.48754 7.70814 5.74643 6.95027 6.34835 6.34835C6.95027 5.74643 7.70814 5.48754 8.60825 5.36652C9.47521 5.24996 10.5775 5.24998 11.9451 5.25H11.9451H12.0549H12.0549Z',
  d8: 'M12 9C12.5523 9 13 9.44772 13 10V11.5893L13.7053 12.2911C14.0968 12.6807 14.0984 13.3138 13.7089 13.7053C13.3193 14.0968 12.6862 14.0984 12.2947 13.7089L11.2947 12.7139C11.106 12.5262 11 12.2711 11 12.005V10C11 9.44772 11.4477 9 12 9Z',
  d9: 'M18 6V18H6V6H18Z',
  d10: 'M16 6.00003L15 2L9 2.00004L8 6.00003',
  d11: 'M16 18L15 22L9 22L8 18',
  d12: 'M12 9V12.005L13.5 13.5',
  d13: 'M15.5847 1.25L16.7267 5.81813L15.2715 6.18193L14.4135 2.75001L9.58467 2.75004L8.7267 6.18194L7.27148 5.81813L8.41351 1.25005L15.5847 1.25Z',
  d14: 'M15.5847 22.75L16.7267 18.1819L15.2715 17.8181L14.4135 21.25L9.58467 21.25L8.7267 17.8181L7.27148 18.1819L8.41351 22.75L15.5847 22.75Z',
  d15: 'M6 5.25C5.58579 5.25 5.25 5.58579 5.25 6V18C5.25 18.4142 5.58579 18.75 6 18.75H18C18.4142 18.75 18.75 18.4142 18.75 18V6C18.75 5.58579 18.4142 5.25 18 5.25H6ZM13 9V11.5898L14.2059 12.7917L12.7941 14.2083L11 12.4202V9H13Z',
} as const;

export const IconWatch02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-02-stroke-rounded IconWatch02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWatch02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-02-duotone-rounded IconWatch02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWatch02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-02-twotone-rounded IconWatch02TwotoneRounded"
    >
      <path 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWatch02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-02-solid-rounded IconWatch02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWatch02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-02-bulk-rounded IconWatch02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWatch02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-02-stroke-sharp IconWatch02StrokeSharp"
    >
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
      />
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
    </TheIconWrapper>
  );
};

export const IconWatch02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-02-solid-sharp IconWatch02SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWatch02: TheIconSelfPack = {
  name: 'Watch02',
  StrokeRounded: IconWatch02StrokeRounded,
  DuotoneRounded: IconWatch02DuotoneRounded,
  TwotoneRounded: IconWatch02TwotoneRounded,
  SolidRounded: IconWatch02SolidRounded,
  BulkRounded: IconWatch02BulkRounded,
  StrokeSharp: IconWatch02StrokeSharp,
  SolidSharp: IconWatch02SolidSharp,
};