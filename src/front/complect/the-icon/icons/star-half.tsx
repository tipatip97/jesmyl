import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2L12.0034 19.4032C11.643 19.4025 11.2835 19.4831 11.0123 19.6452L8.02261 21.4296C5.87285 22.71 4.58299 21.7623 5.14293 19.3125L5.85285 16.2175C5.98284 15.6327 5.75286 14.8161 5.33291 14.3927L2.85318 11.8925C1.38335 10.4206 1.86329 8.92853 3.90307 8.58575L7.09271 8.05143C7.63266 7.9607 8.27258 7.48687 8.51256 6.99288L10.2724 3.44418C10.7464 2.48314 11.3725 2.00174 12 2ZM12 2H12.0034M15 20.8437L15.9817 21.4296C18.1215 22.71 19.4214 21.7522 18.8614 19.3125L18.1515 16.2175C18.0215 15.6327 18.2515 14.8161 18.6714 14.3927L21.1512 11.8925C22.611 10.4206 22.1411 8.92853 20.1013 8.58575L16.9116 8.05143C16.3817 7.9607 15.7418 7.48687 15.5018 6.99288L15 5.98101',
  d2: 'M12.0034 19.4032L12 2C11.3725 2.00174 10.7464 2.48314 10.2724 3.44418L8.51256 6.99288C8.27258 7.48687 7.63266 7.9607 7.09271 8.05143L3.90307 8.58575C1.86329 8.92853 1.38335 10.4206 2.85318 11.8925L5.33291 14.3927C5.75286 14.8161 5.98284 15.6327 5.85285 16.2175L5.14293 19.3125C4.58299 21.7623 5.87285 22.71 8.02261 21.4296L11.0123 19.6452C11.2835 19.4831 11.643 19.4025 12.0034 19.4032Z',
  d3: 'M12 2L12.0034 19.4032C11.643 19.4025 11.2835 19.4831 11.0123 19.6452L8.02261 21.4296C5.87285 22.71 4.58299 21.7623 5.14293 19.3125L5.85285 16.2175C5.98284 15.6327 5.75286 14.8161 5.33291 14.3927L2.85318 11.8925C1.38335 10.4206 1.86329 8.92853 3.90307 8.58575L7.09271 8.05143C7.63266 7.9607 8.27258 7.48687 8.51256 6.99288L10.2724 3.44418C10.7464 2.48314 11.3725 2.00174 12 2ZM12 2H12.0034',
  d4: 'M15 20.8436L15.9817 21.4296C18.1215 22.7099 19.4214 21.7522 18.8614 19.3124L18.1515 16.2174C18.0215 15.6327 18.2515 14.8161 18.6714 14.3927L21.1512 11.8924C22.611 10.4205 22.1411 8.92847 20.1013 8.5857L16.9116 8.05138C16.3817 7.96065 15.7418 7.48682 15.5018 6.99282L15 5.98096',
  d5: 'M11.998 1.25001L12 1.25L12.0035 1.25C12.4177 1.25 12.7535 1.58579 12.7535 2V19.4031L8.40704 22.0736C7.27688 22.7467 6.03284 23.0433 5.12248 22.3742C4.21524 21.7073 4.11781 20.4318 4.41183 19.1454L5.12077 16.0547L5.1212 16.0528C5.24848 15.4978 4.9604 15.0669 4.80044 14.9209L2.32252 12.4225L2.32155 12.4215C1.49315 11.5915 1.03427 10.5704 1.3475 9.5879C1.661 8.60449 2.62668 8.03974 3.77882 7.84613L6.96847 7.31181C7.1646 7.28519 7.61362 7.11749 7.84066 6.65966L9.59979 3.11238C10.1265 2.04505 10.9512 1.25291 11.998 1.25001Z',
  d6: 'M14.6668 5.30909C15.0379 5.12507 15.4879 5.27672 15.672 5.64781L16.1765 6.66515C16.23 6.77535 16.357 6.93055 16.5471 7.07269C16.7369 7.21456 16.9204 7.29175 17.0372 7.31202L17.0382 7.31219L20.2252 7.84606C21.3781 8.0398 22.342 8.60525 22.6536 9.58926C22.9644 10.5704 22.5069 11.5906 21.6837 12.4206L19.204 14.9209C19.1058 15.0199 18.9958 15.2064 18.9268 15.4494C18.8582 15.6908 18.8522 15.9107 18.8832 16.0528L18.8837 16.0547L19.5925 19.1447C19.8874 20.4301 19.7851 21.7032 18.8785 22.3702C17.968 23.04 16.7255 22.7487 15.5967 22.0732L14.6157 21.4877C14.26 21.2754 14.1437 20.8149 14.356 20.4593C14.5683 20.1036 15.0288 19.9874 15.3844 20.1996L16.3662 20.7856C17.3771 21.3905 17.8551 21.2609 17.9896 21.162C18.1278 21.0603 18.3954 20.6347 18.1305 19.4803L17.4194 16.3802C17.321 15.9375 17.3652 15.4576 17.4838 15.0398C17.6023 14.6224 17.8172 14.189 18.139 13.8646L20.6187 11.3644C21.2553 10.7225 21.2928 10.2607 21.2236 10.0422C21.1553 9.82646 20.8639 9.47442 19.977 9.32539L16.7878 8.79113L16.7851 8.79068C16.3719 8.71994 15.9711 8.51489 15.6489 8.27407C15.3275 8.03375 15.0153 7.70613 14.8287 7.32363L14.3281 6.31422C14.1441 5.94313 14.2957 5.49312 14.6668 5.30909Z',
  d7: 'M14.667 5.3092C15.0381 5.12518 15.4881 5.27683 15.6721 5.64792L16.1766 6.66526C16.2301 6.77546 16.3571 6.93066 16.5472 7.0728C16.737 7.21467 16.9205 7.29186 17.0374 7.31213L17.0384 7.3123L20.2254 7.84617C21.3783 8.03991 22.3421 8.60536 22.6537 9.58937C22.9645 10.5705 22.507 11.5907 21.6838 12.4208L19.2041 14.921C19.1059 15.02 18.9959 15.2065 18.9269 15.4496C18.8584 15.6909 18.8523 15.9108 18.8834 16.0529L18.8838 16.0548L19.5926 19.1448C19.8876 20.4302 19.7852 21.7033 18.8786 22.3703C17.9681 23.0401 16.7256 22.7488 15.5968 22.0733L14.6158 21.4878C14.2601 21.2755 14.1439 20.8151 14.3562 20.4594C14.5684 20.1037 15.0289 19.9875 15.3846 20.1998L16.3663 20.7857C17.3772 21.3906 17.8552 21.261 17.9897 21.1621C18.1279 21.0604 18.3955 20.6348 18.1306 19.4804L17.4195 16.3803C17.3211 15.9376 17.3653 15.4577 17.4839 15.0399C17.6024 14.6226 17.8173 14.1891 18.1391 13.8647L20.6188 11.3645C21.2555 10.7226 21.293 10.2608 21.2237 10.0423C21.1554 9.82657 20.864 9.47453 19.9772 9.3255L16.7879 8.79124L16.7852 8.79079C16.3721 8.72005 15.9712 8.515 15.6491 8.27418C15.3276 8.03386 15.0154 7.70624 14.8288 7.32374L14.3282 6.31433C14.1442 5.94324 14.2959 5.49323 14.667 5.3092Z',
  d8: 'M14.5785 8.00329L14.9957 8.99795H21.99C21.9987 8.99795 22.0032 9.00829 21.9974 9.01473L16.9979 14.5022L19.492 21.9854C19.4949 21.994 19.4858 22.0017 19.4778 21.9974L14.57 19.3797M8.98316 8.99795H2.01003C2.00134 8.99795 1.99678 9.00827 2.00262 9.01471L6.98939 14.5149L4.52072 21.9878C4.51788 21.9964 4.52697 22.004 4.53495 21.9998L11.9842 18.0119V6.66556L12.0089 2.00912C12.0089 1.99819 11.994 1.99507 11.9897 2.0051L8.98316 8.99795Z',
  d9: 'M12.1965 1.27054C12.651 1.36384 12.9773 1.76386 12.9773 2.22785V18.4505L5.13036 22.6355C4.77746 22.8237 4.34549 22.7779 4.03992 22.5199C3.73436 22.2618 3.61687 21.8436 3.74335 21.4642L6.00554 14.6776L1.50417 9.72611C1.24396 9.43989 1.17707 9.02712 1.33356 8.67337C1.49005 8.31962 1.84047 8.09146 2.22729 8.09146H8.42378L11.1017 1.84289C11.2845 1.41641 11.742 1.17725 12.1965 1.27054Z',
  d10: 'M15.4112 7.7065L15.5762 8.09146H21.7727C22.1595 8.09146 22.5099 8.31962 22.6664 8.67337C22.8229 9.02712 22.756 9.43989 22.4958 9.72611L17.9945 14.6776L20.2567 21.4642C20.3831 21.8436 20.2656 22.2618 19.9601 22.5199C19.6545 22.7779 19.2225 22.8237 18.8696 22.6355L14.5 20.305V18.3421H14.9729L17.6277 19.758L15.7783 14.2098L19.5635 10.046H14.5V7.7065H15.4112Z',
} as const;

export const IconStarHalfStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-half-stroke-rounded IconStarHalfStrokeRounded"
    >
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

export const IconStarHalfDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-half-duotone-rounded IconStarHalfDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarHalfTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-half-twotone-rounded IconStarHalfTwotoneRounded"
    >
      <path 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarHalfSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-half-solid-rounded IconStarHalfSolidRounded"
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

export const IconStarHalfBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-half-bulk-rounded IconStarHalfBulkRounded"
    >
      <path 
        d={d.d7} 
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

export const IconStarHalfStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-half-stroke-sharp IconStarHalfStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStarHalfSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-half-solid-sharp IconStarHalfSolidSharp"
    >
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

export const iconPackOfStarHalf: TheIconSelfPack = {
  name: 'StarHalf',
  StrokeRounded: IconStarHalfStrokeRounded,
  DuotoneRounded: IconStarHalfDuotoneRounded,
  TwotoneRounded: IconStarHalfTwotoneRounded,
  SolidRounded: IconStarHalfSolidRounded,
  BulkRounded: IconStarHalfBulkRounded,
  StrokeSharp: IconStarHalfStrokeSharp,
  SolidSharp: IconStarHalfSolidSharp,
};