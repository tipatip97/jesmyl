import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 6C22 7 21 9 17 9C13 9 12 7 12 6C12 7 11 9 7 9C3 9 2 7 2 6',
  d2: 'M10 3.5C9.66667 3 8.5 2 7 2M14 3.5C14.3333 3 15.5 2 17 2',
  d3: 'M4 9V10C4 11.3203 4.26603 12.6198 4.56009 13.8995C5.0994 16.2464 5.36933 19.5805 4 22M20 9V10C20 11.3203 19.734 12.6198 19.4399 13.8995C18.9006 16.2464 18.6307 19.5805 20 22',
  d4: 'M16 19C14.515 20.179 13.644 20.369 12.3229 19.2824C12.1326 19.1258 11.8582 19.115 11.6593 19.2605C10.2643 20.2819 9.39943 20.2911 8 19',
  d5: 'M16 14C14.515 15.179 13.644 15.369 12.3229 14.2824C12.1326 14.1258 11.8582 14.115 11.6593 14.2605C10.2643 15.2819 9.39943 15.2911 8 14',
  d6: 'M12 14V12',
  d7: 'M12 6C12 7 13 9 17 9C18.2894 9 19.2671 8.79218 20 8.47703V9V10C20 11.3203 19.734 12.6198 19.4399 13.8995C18.9006 16.2464 18.6307 19.5805 20 22H4C5.36933 19.5805 5.0994 16.2464 4.56009 13.8995C4.26603 12.6198 4 11.3203 4 10V9V8.47703C4.73293 8.79218 5.7106 9 7 9C11 9 12 7 12 6Z',
  d8: 'M16 19C14.515 20.179 13.644 20.369 12.3229 19.2824C12.1326 19.1258 11.8582 19.115 11.6593 19.2605C10.2643 20.2819 9.39943 20.2911 8 19M16 14C14.515 15.179 13.644 15.369 12.3229 14.2824C12.1326 14.1258 11.8582 14.115 11.6593 14.2605C10.2643 15.2819 9.39943 15.2911 8 14M12 14V12',
  d9: 'M2 5.125C2.55228 5.125 3 5.57272 3 6.125C3 6.31888 3.1109 6.79071 3.64018 7.23178C4.16242 7.66698 5.16267 8.125 7 8.125C8.83733 8.125 9.83758 7.66698 10.3598 7.23178C10.8891 6.79071 11 6.31888 11 6.125C11 5.57272 11.4477 5.125 12 5.125C12.5523 5.125 13 5.57272 13 6.125C13 6.31888 13.1109 6.79071 13.6402 7.23178C14.1624 7.66698 15.1627 8.125 17 8.125C18.8373 8.125 19.8376 7.66698 20.3598 7.23178C20.8891 6.79071 21 6.31888 21 6.125C21 5.57272 21.4477 5.125 22 5.125C22.5523 5.125 23 5.57272 23 6.125C23 6.93112 22.6109 7.95929 21.6402 8.76822C20.6624 9.58302 19.1627 10.125 17 10.125C14.8373 10.125 13.3376 9.58302 12.3598 8.76822C12.2296 8.65967 12.1098 8.54718 12 8.43181C11.8902 8.54718 11.7704 8.65967 11.6402 8.76822C10.6624 9.58302 9.16267 10.125 7 10.125C4.83733 10.125 3.33758 9.58302 2.35982 8.76822C1.3891 7.95929 1 6.93112 1 6.125C1 5.57272 1.44772 5.125 2 5.125Z',
  d10: 'M6 2.125C6 1.57272 6.44772 1.125 7 1.125C7.97322 1.125 8.81619 1.44852 9.452 1.83001C10.0732 2.20274 10.5676 2.67369 10.8321 3.0703C11.1384 3.52983 11.0142 4.1507 10.5547 4.45705C10.0952 4.7634 9.4743 4.63923 9.16795 4.1797C9.09902 4.07631 8.84344 3.79726 8.423 3.54499C8.01715 3.30148 7.52678 3.125 7 3.125C6.44772 3.125 6 2.67728 6 2.125ZM15.577 3.54499C15.1566 3.79726 14.901 4.07631 14.8321 4.1797C14.5257 4.63923 13.9048 4.7634 13.4453 4.45705C12.9858 4.1507 12.8616 3.52983 13.1679 3.0703C13.4324 2.67369 13.9268 2.20274 14.548 1.83001C15.1838 1.44852 16.0268 1.125 17 1.125C17.5523 1.125 18 1.57272 18 2.125C18 2.67728 17.5523 3.125 17 3.125C16.4732 3.125 15.9829 3.30148 15.577 3.54499Z',
  d11: 'M20 8.37606C20.4142 8.37606 20.75 8.71185 20.75 9.12606V10.1261C20.75 11.5389 20.4655 12.9111 20.1709 14.1935C19.7541 16.0072 19.5233 18.356 20.0761 20.3409L20.0869 20.3797C20.1879 20.7425 20.2801 21.0734 20.3233 21.3375C20.3621 21.5754 20.4122 22.0129 20.1318 22.3822C19.8631 22.7358 19.4642 22.8159 19.2194 22.8458C18.9712 22.8762 18.6569 22.8761 18.3261 22.8761H5.67391C5.34315 22.8761 5.02884 22.8762 4.78064 22.8458C4.5358 22.8159 4.13687 22.7358 3.86823 22.3822C3.58778 22.0129 3.63786 21.5754 3.67675 21.3375C3.7199 21.0734 3.81207 20.7425 3.91314 20.3797L3.92394 20.3409C4.47666 18.356 4.24591 16.0072 3.82914 14.1935C3.53446 12.9111 3.25 11.5389 3.25 10.1261V9.12606C3.25 8.71185 3.58579 8.37606 4 8.37606C8.13623 10.208 11.0348 8.25065 11.967 7.04297C13.8217 9.69251 18.0951 9.03567 20 8.37606ZM15.5337 18.5376C15.8581 18.2801 16.3298 18.3343 16.5874 18.6587C16.8449 18.9831 16.7908 19.4549 16.4664 19.7124C15.7123 20.3111 14.9767 20.7788 14.1775 20.8618C13.4175 20.9408 12.7442 20.6634 12.0883 20.1761C12.0174 20.1234 11.9208 20.1209 11.8478 20.1704C11.1954 20.6121 10.5276 20.9123 9.78969 20.8713C8.95739 20.8251 8.22801 20.3558 7.49145 19.6763C7.187 19.3954 7.16789 18.9209 7.44876 18.6165C7.72963 18.312 8.20412 18.2929 8.50856 18.5738C9.17142 19.1853 9.57417 19.357 9.87291 19.3736C10.1698 19.3901 10.5551 19.2645 11.2163 18.7804C11.6983 18.4275 12.351 18.4594 12.7994 18.8282C13.3873 19.3118 13.7391 19.3993 14.0225 19.3698C14.3603 19.3348 14.8028 19.1179 15.5337 18.5376ZM12 11.375C11.5858 11.375 11.25 11.7108 11.25 12.125V13.7153C11.25 13.7411 11.2372 13.7651 11.2163 13.7804C10.5551 14.2645 10.1698 14.3901 9.87291 14.3736C9.57417 14.357 9.17142 14.1853 8.50856 13.5738C8.20412 13.2929 7.72963 13.312 7.44876 13.6165C7.16789 13.9209 7.187 14.3954 7.49145 14.6763C8.22801 15.3558 8.95739 15.8251 9.78969 15.8713C10.5276 15.9123 11.1954 15.6121 11.8478 15.1704C11.9208 15.1209 12.0174 15.1234 12.0883 15.1761C12.7442 15.6634 13.4175 15.9408 14.1775 15.8618C14.9767 15.7788 15.7123 15.3111 16.4664 14.7124C16.7908 14.4549 16.8449 13.9831 16.5874 13.6587C16.3298 13.3343 15.8581 13.2801 15.5337 13.5376C14.8028 14.1179 14.3603 14.3348 14.0225 14.3698C13.7391 14.3993 13.3873 14.3118 12.7994 13.8282C12.7689 13.8031 12.75 13.7663 12.75 13.7269V12.125C12.75 11.7108 12.4142 11.375 12 11.375Z',
  d12: 'M20 8.37606C20.4142 8.37606 20.75 8.71185 20.75 9.12606V10.1261C20.75 11.5389 20.4655 12.9111 20.1709 14.1935C19.7541 16.0072 19.5233 18.356 20.0761 20.3409L20.0869 20.3797C20.1879 20.7425 20.2801 21.0734 20.3233 21.3375C20.3621 21.5754 20.4122 22.0129 20.1318 22.3822C19.8631 22.7358 19.4642 22.8159 19.2194 22.8458C18.9712 22.8762 18.6569 22.8761 18.3261 22.8761H5.67391C5.34315 22.8761 5.02884 22.8762 4.78064 22.8458C4.5358 22.8159 4.13687 22.7358 3.86823 22.3822C3.58778 22.0129 3.63786 21.5754 3.67675 21.3375C3.7199 21.0734 3.81207 20.7425 3.91314 20.3797L3.92394 20.3409C4.47666 18.356 4.24591 16.0072 3.82914 14.1935C3.53446 12.9111 3.25 11.5389 3.25 10.1261V9.12606C3.25 8.71185 3.58579 8.37606 4 8.37606C8.13623 10.208 11.0348 8.25065 11.967 7.04297C13.8217 9.69251 18.0951 9.03567 20 8.37606Z',
  d13: 'M12 11.375C11.5858 11.375 11.25 11.7108 11.25 12.125V13.7153C11.25 13.7411 11.2372 13.7651 11.2163 13.7804C10.5551 14.2645 10.1698 14.3901 9.87291 14.3736C9.57417 14.357 9.17142 14.1853 8.50856 13.5738C8.20412 13.2929 7.72963 13.312 7.44876 13.6165C7.16789 13.9209 7.187 14.3954 7.49145 14.6763C8.22802 15.3558 8.95739 15.8251 9.78969 15.8713C10.5276 15.9123 11.1954 15.6121 11.8478 15.1704C11.9208 15.1209 12.0174 15.1234 12.0883 15.1761C12.7442 15.6634 13.4175 15.9408 14.1775 15.8618C14.9767 15.7788 15.7123 15.3111 16.4664 14.7124C16.7908 14.4549 16.8449 13.9831 16.5874 13.6587C16.3298 13.3343 15.8581 13.2801 15.5337 13.5376C14.8028 14.1179 14.3603 14.3348 14.0225 14.3698C13.7391 14.3993 13.3873 14.3118 12.7994 13.8282C12.7689 13.8031 12.75 13.7663 12.75 13.7269V12.125C12.75 11.7108 12.4142 11.375 12 11.375ZM16.5874 18.6587C16.3298 18.3343 15.8581 18.2801 15.5337 18.5376C14.8028 19.1179 14.3603 19.3348 14.0225 19.3698C13.7391 19.3993 13.3873 19.3118 12.7994 18.8282C12.351 18.4594 11.6983 18.4275 11.2163 18.7804C10.5551 19.2645 10.1698 19.3901 9.87291 19.3736C9.57417 19.357 9.17142 19.1853 8.50856 18.5738C8.20412 18.2929 7.72963 18.312 7.44876 18.6165C7.16789 18.9209 7.187 19.3954 7.49145 19.6763C8.22802 20.3558 8.95739 20.8251 9.78969 20.8713C10.5276 20.9123 11.1954 20.6121 11.8478 20.1704C11.9208 20.1209 12.0174 20.1234 12.0883 20.1761C12.7442 20.6634 13.4175 20.9408 14.1775 20.8618C14.9767 20.7788 15.7123 20.3111 16.4664 19.7124C16.7908 19.4549 16.8449 18.9831 16.5874 18.6587Z',
  d14: 'M16 19C14.515 20.355 13.3211 20.2489 12 19C10.6049 20.1739 9.39943 20.4838 8 19',
  d15: 'M16 14C14.515 15.355 13.3211 15.2489 12 14C10.6049 15.1739 9.39943 15.4838 8 14',
  d16: 'M9.452 1.95501C10.0732 2.32774 10.5676 2.79869 10.8321 3.1953L9.16795 4.3047C9.09902 4.20131 8.84344 3.92226 8.423 3.66999C8.01715 3.42648 7.52678 3.25 7 3.25V1.25C7.97322 1.25 8.81619 1.57352 9.452 1.95501ZM15.577 3.66999C15.1566 3.92226 14.901 4.20131 14.8321 4.3047L13.1679 3.1953C13.4324 2.79869 13.9268 2.32774 14.548 1.95501C15.1838 1.57352 16.0268 1.25 17 1.25V3.25C16.4732 3.25 15.9829 3.42648 15.577 3.66999Z',
  d17: 'M13 6.00012C13 5.44784 12.5523 5.00012 12 5.00012C11.4477 5.00012 11 5.44784 11 6.00012C11 6.194 10.8891 6.66583 10.3598 7.1069C9.83758 7.5421 8.83733 8.00012 7 8.00012C5.16267 8.00012 4.16242 7.5421 3.64018 7.1069C3.1109 6.66583 3 6.194 3 6.00012H1C1 6.80625 1.3891 7.83441 2.35982 8.64334C2.61899 8.85932 2.91485 9.05614 3.25 9.22876V9.79054C3.25 11.2249 3.53384 12.6185 3.82851 13.9233C4.35919 16.273 4.5725 19.428 3.34458 21.6355C3.21536 21.8678 3.21876 22.1512 3.3535 22.3803C3.48823 22.6094 3.73419 22.7501 4 22.7501H20C20.2658 22.7501 20.5118 22.6094 20.6465 22.3803C20.7812 22.1512 20.7846 21.8678 20.6554 21.6355C19.4275 19.428 19.6408 16.273 20.1715 13.9233C20.4662 12.6185 20.75 11.2249 20.75 9.79054V9.22876C21.0852 9.05614 21.381 8.85932 21.6402 8.64334C22.6109 7.83441 23 6.80625 23 6.00012H21C21 6.194 20.8891 6.66583 20.3598 7.1069C19.8376 7.5421 18.8373 8.00012 17 8.00012C15.1627 8.00012 14.1624 7.5421 13.6402 7.1069C13.1109 6.66583 13 6.194 13 6.00012ZM12.5159 17.4553L12.0298 16.9957L11.5178 17.4265C10.8541 17.985 10.3603 18.2243 9.95775 18.2483C9.60471 18.2693 9.15499 18.1312 8.54632 17.4858L7.45508 18.5149C8.24583 19.3534 9.09857 19.8021 10.0469 19.7457C10.7439 19.7042 11.3853 19.3927 11.9793 18.968C12.5695 19.419 13.2114 19.7121 13.9239 19.7267C14.8439 19.7455 15.6928 19.2966 16.5062 18.5544L15.4952 17.4463C14.8236 18.0591 14.333 18.2347 13.9546 18.227C13.5722 18.2192 13.1141 18.0208 12.5159 17.4553ZM11.25 12.6417V11.0001H12.75V12.6642C13.236 13.0707 13.6237 13.2202 13.9546 13.227C14.333 13.2347 14.8236 13.0591 15.4952 12.4463L16.5062 13.5544C15.6928 14.2966 14.8439 14.7455 13.9239 14.7267C13.2114 14.7121 12.5695 14.419 11.9793 13.968C11.3853 14.3927 10.7439 14.7042 10.0469 14.7457C9.09857 14.8021 8.24583 14.3534 7.45508 13.5149L8.54632 12.4858C9.15499 13.1312 9.60471 13.2693 9.95775 13.2483C10.3042 13.2277 10.7182 13.0475 11.25 12.6417Z',
} as const;

export const IconBodyPartSixPackStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-six-pack-stroke-rounded IconBodyPartSixPackStrokeRounded"
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

export const IconBodyPartSixPackDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-six-pack-duotone-rounded IconBodyPartSixPackDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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

export const IconBodyPartSixPackTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-six-pack-twotone-rounded IconBodyPartSixPackTwotoneRounded"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBodyPartSixPackSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-six-pack-solid-rounded IconBodyPartSixPackSolidRounded"
    >
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

export const IconBodyPartSixPackBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-six-pack-bulk-rounded IconBodyPartSixPackBulkRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBodyPartSixPackStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-six-pack-stroke-sharp IconBodyPartSixPackStrokeSharp"
    >
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBodyPartSixPackSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-six-pack-solid-sharp IconBodyPartSixPackSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBodyPartSixPack: TheIconSelfPack = {
  name: 'BodyPartSixPack',
  StrokeRounded: IconBodyPartSixPackStrokeRounded,
  DuotoneRounded: IconBodyPartSixPackDuotoneRounded,
  TwotoneRounded: IconBodyPartSixPackTwotoneRounded,
  SolidRounded: IconBodyPartSixPackSolidRounded,
  BulkRounded: IconBodyPartSixPackBulkRounded,
  StrokeSharp: IconBodyPartSixPackStrokeSharp,
  SolidSharp: IconBodyPartSixPackSolidSharp,
};