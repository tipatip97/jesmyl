import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 6L12 20',
  d2: 'M5.98056 3.28544C9.32175 3.9216 11.3131 5.25231 12 6.01628C12.6869 5.25231 14.6782 3.9216 18.0194 3.28544C19.7121 2.96315 20.5584 2.80201 21.2792 3.41964C22 4.03727 22 5.04022 22 7.04612V14.255C22 16.0891 22 17.0061 21.5374 17.5787C21.0748 18.1512 20.0564 18.3451 18.0194 18.733C16.2037 19.0787 14.7866 19.6295 13.7608 20.1831C12.7516 20.7277 12.247 21 12 21C11.753 21 11.2484 20.7277 10.2392 20.1831C9.21344 19.6295 7.79633 19.0787 5.98056 18.733C3.94365 18.3451 2.9252 18.1512 2.4626 17.5787C2 17.0061 2 16.0891 2 14.255V7.04612C2 5.04022 2 4.03727 2.72078 3.41964C3.44157 2.80201 4.2879 2.96315 5.98056 3.28544Z',
  d3: 'M6.05828 2.54073L6.12085 2.55281C8.10486 2.93579 9.66115 3.56394 10.7829 4.20569C11.0041 4.33221 11.1147 4.39547 11.1823 4.51235C11.25 4.62923 11.25 4.76522 11.25 5.0372L11.25 21.6298C11.25 21.718 11.1595 21.7765 11.0804 21.7379C10.7814 21.5921 10.3904 21.3782 9.9016 21.1108L9.88301 21.1006C8.92714 20.5776 7.58315 20.0447 5.84029 19.7082L5.79844 19.7001C4.81548 19.5104 4.02106 19.3571 3.41756 19.1752C2.81014 18.9922 2.2571 18.743 1.87922 18.2689C1.51611 17.8132 1.37649 17.2652 1.31225 16.6682C1.24998 16.0894 1.24999 15.3576 1.25001 14.4654L1.25 7.0525C1.24996 6.0869 1.24993 5.27474 1.34903 4.6294C1.45547 3.93629 1.6901 3.3299 2.23278 2.85844C2.76063 2.39987 3.34147 2.24577 3.99114 2.25009C4.57345 2.25396 5.26562 2.38764 6.05828 2.54073ZM12.8177 4.51235C12.8854 4.39547 12.9959 4.33221 13.2171 4.20569C14.3389 3.56394 15.8952 2.93579 17.8792 2.55281L17.9417 2.54072C18.7344 2.38764 19.4266 2.25396 20.0089 2.25009C20.6586 2.24577 21.2394 2.39987 21.7672 2.85844C22.3099 3.3299 22.5445 3.93629 22.651 4.6294C22.7501 5.27475 22.75 6.08693 22.75 7.05255L22.75 14.4654C22.75 15.3576 22.75 16.0894 22.6878 16.6682C22.6235 17.2652 22.4839 17.8132 22.1208 18.2689C21.7429 18.743 21.1899 18.9922 20.5825 19.1752C19.9789 19.3571 19.1844 19.5104 18.2014 19.7002L18.1597 19.7082C16.4169 20.0447 15.0729 20.5776 14.117 21.1006L14.0983 21.1109L14.0982 21.1109C13.6095 21.3783 13.2186 21.5922 12.9196 21.7379C12.8405 21.7765 12.75 21.718 12.75 21.6298L12.75 5.0372C12.75 4.76522 12.75 4.62923 12.8177 4.51235Z',
  d4: 'M6.12084 2.55281L6.05828 2.54073C5.26561 2.38764 4.57345 2.25396 3.99114 2.25009C3.34147 2.24577 2.76063 2.39987 2.23278 2.85844C1.6901 3.3299 1.45547 3.93629 1.34903 4.6294C1.24993 5.27474 1.24996 6.0869 1.25 7.0525L1.25001 14.4654C1.24999 15.3576 1.24997 16.0894 1.31225 16.6682C1.37649 17.2652 1.51611 17.8132 1.87922 18.2689C2.2571 18.743 2.81014 18.9922 3.41756 19.1752C4.02105 19.3571 4.81548 19.5104 5.79843 19.7001L5.84028 19.7082C7.58315 20.0447 8.92714 20.5776 9.883 21.1006L9.9016 21.1108C10.3904 21.3782 10.7814 21.5921 11.0804 21.7379C11.1595 21.7765 11.25 21.718 11.25 21.6298V5.0372C11.25 4.76522 11.25 4.62923 11.1823 4.51235C11.1147 4.39547 11.0041 4.33221 10.7829 4.20569C9.66115 3.56394 8.10485 2.93579 6.12084 2.55281Z',
  d5: 'M13.2171 4.20569C12.9959 4.33221 12.8853 4.39547 12.8177 4.51235C12.75 4.62923 12.75 4.76522 12.75 5.0372V21.6298C12.75 21.718 12.8405 21.7765 12.9196 21.7379C13.2186 21.5921 13.6095 21.3783 14.0983 21.1109L14.117 21.1006C15.0729 20.5776 16.4169 20.0447 18.1597 19.7082L18.2014 19.7002C19.1844 19.5104 19.9789 19.3571 20.5824 19.1752C21.1899 18.9922 21.7429 18.743 22.1208 18.2689C22.4839 17.8132 22.6235 17.2652 22.6877 16.6682C22.75 16.0894 22.75 15.3576 22.75 14.4654V7.05255C22.75 6.08693 22.7501 5.27475 22.651 4.6294C22.5445 3.93629 22.3099 3.3299 21.7672 2.85844C21.2394 2.39987 20.6585 2.24577 20.0089 2.25009C19.4266 2.25396 18.7344 2.38764 17.9417 2.54072L17.8792 2.55281C15.8952 2.93579 14.3389 3.56394 13.2171 4.20569Z',
  d6: 'M12.0006 6.38003L2.01102 3.50043C2.00458 3.49854 1.99805 3.50308 1.99805 3.50944V17.6632L12.05 20.5L22.0029 17.6466V3.56112C22.0029 3.55479 21.9965 3.55026 21.9901 3.55208L12.0006 6.38003ZM12.0006 6.38003L12.0484 20.0472',
  d7: 'M2.21658 2.28196C1.98942 2.21344 1.74322 2.25646 1.55275 2.39795C1.36228 2.53945 1.25 2.76273 1.25 3.00001L1.25 18.75L11.25 21.75L11.25 5.00671L2.21658 2.28196Z',
  d8: 'M12.75 5.00671L12.75 21.75L22.75 18.75V3.00001C22.75 2.76273 22.6377 2.53945 22.4472 2.39795C22.2568 2.25646 22.0106 2.21344 21.7834 2.28196L12.75 5.00671Z',
} as const;

export const IconBookOpen01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-01-stroke-rounded IconBookOpen01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-01-duotone-rounded IconBookOpen01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-01-twotone-rounded IconBookOpen01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-01-solid-rounded IconBookOpen01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-01-bulk-rounded IconBookOpen01BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-01-stroke-sharp IconBookOpen01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-01-solid-sharp IconBookOpen01SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookOpen01: TheIconSelfPack = {
  name: 'BookOpen01',
  StrokeRounded: IconBookOpen01StrokeRounded,
  DuotoneRounded: IconBookOpen01DuotoneRounded,
  TwotoneRounded: IconBookOpen01TwotoneRounded,
  SolidRounded: IconBookOpen01SolidRounded,
  BulkRounded: IconBookOpen01BulkRounded,
  StrokeSharp: IconBookOpen01StrokeSharp,
  SolidSharp: IconBookOpen01SolidSharp,
};