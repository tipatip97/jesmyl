import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 22V12.2757C7 11.1939 7 10.653 7.24458 10.1993C7.48915 9.74558 7.93843 9.45308 8.83697 8.86808L10.9185 7.51291C11.4437 7.17097 11.7063 7 12 7C12.2937 7 12.5563 7.17097 13.0815 7.51291L15.163 8.86808C16.0616 9.45308 16.5108 9.74558 16.7554 10.1993C17 10.653 17 11.1939 17 12.2757V22',
  d2: 'M12 13H12.009',
  d3: 'M20 22V17.1623C20 14.8707 19.0556 14.6852 17 14',
  d4: 'M4 22V17.1623C4 14.8707 4.94437 14.6852 7 14',
  d5: 'M2 22H22',
  d6: 'M12 7V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z',
  d7: 'M10 22L10 19C10 18.0572 10 17.5858 10.2929 17.2929C10.5858 17 11.0572 17 12 17C12.9428 17 13.4142 17 13.7071 17.2929C14 17.5858 14 18.0572 14 19V22',
  d8: 'M4 17.1623V22H7V14C4.94437 14.6852 4 14.8707 4 17.1623Z',
  d9: 'M20 17.1623V22H17V14C19.0556 14.6852 20 14.8707 20 17.1623Z',
  d10: 'M7 22V12.2757C7 11.1939 7 10.653 7.24458 10.1993C7.48915 9.74558 7.93842 9.45308 8.83697 8.86808L10.9185 7.51291C11.4437 7.17097 11.7063 7 12 7C12.2937 7 12.5563 7.17097 13.0815 7.51291L15.163 8.86808C16.0616 9.45308 16.5108 9.74558 16.7554 10.1993C17 10.653 17 11.1939 17 12.2757V22L14 22V19C14 18.0572 14 17.5858 13.7071 17.2929C13.4142 17 12.9428 17 12 17C11.0572 17 10.5858 17 10.2929 17.2929C10 17.5858 10 18.0572 10 19V22L7 22Z',
  d11: 'M16.5516 13.434C16.7262 12.9101 17.2926 12.6269 17.8165 12.8016C17.9147 12.8343 18.013 12.8667 18.1106 12.8989C18.498 13.0267 18.8757 13.1512 19.2045 13.2815C19.623 13.4472 20.0502 13.6543 20.4182 13.9666C21.2365 14.6611 21.5003 15.639 21.5003 16.9125V21.7503C21.5003 22.3026 21.0526 22.7503 20.5003 22.7503C19.948 22.7503 19.5003 22.3026 19.5003 21.7503V16.9125C19.5003 15.8945 19.2919 15.6339 19.124 15.4914C18.999 15.3853 18.8047 15.2743 18.468 15.1409C18.1989 15.0344 17.8948 14.934 17.5164 14.809C17.4116 14.7744 17.3011 14.738 17.184 14.699C16.6601 14.5243 16.3769 13.958 16.5516 13.434Z',
  d12: 'M7.49946 13.434C7.67411 13.958 7.39095 14.5243 6.86701 14.699C6.74997 14.738 6.63946 14.7744 6.53465 14.809C6.15623 14.934 5.85213 15.0344 5.58303 15.1409C5.24633 15.2743 5.05206 15.3853 4.92701 15.4914C4.75919 15.6339 4.55078 15.8945 4.55078 16.9125V21.7503C4.55078 22.3026 4.10307 22.7503 3.55078 22.7503C2.9985 22.7503 2.55078 22.3026 2.55078 21.7503V16.9125C2.55078 15.639 2.81456 14.6611 3.63283 13.9666C4.00083 13.6543 4.42808 13.4472 4.84659 13.2815C5.17537 13.1512 5.55302 13.0267 5.94049 12.8989C6.0381 12.8667 6.13633 12.8343 6.23455 12.8016C6.7585 12.6269 7.32482 12.9101 7.49946 13.434Z',
  d13: 'M1 21.75C1 21.1977 1.44772 20.75 2 20.75H22C22.5523 20.75 23 21.1977 23 21.75C23 22.3023 22.5523 22.75 22 22.75H2C1.44772 22.75 1 22.3023 1 21.75Z',
  d14: 'M16 5.73209H12.75V6.99988C12.75 7.41409 12.4142 7.74988 12 7.74988C11.5858 7.74988 11.25 7.41409 11.25 6.99988V2.97023L11.25 2.93579C11.2499 2.72925 11.2498 2.5067 11.2749 2.31898C11.3042 2.09966 11.3796 1.81926 11.6146 1.58285C12.0147 1.18033 12.572 1.23484 12.8489 1.2834C13.1892 1.34307 13.5552 1.47768 13.8857 1.62195C14.5559 1.9145 15.2453 2.32103 15.6135 2.54777C16.5707 3.13718 16.75 4.24513 16.75 4.98209C16.75 5.3963 16.4142 5.73209 16 5.73209Z',
  d15: 'M11.206 6.45977C11.4338 6.34383 11.6927 6.25 12 6.25C12.3073 6.25 12.5662 6.34383 12.794 6.45977C12.9983 6.56367 13.2244 6.71094 13.4635 6.86668L13.4636 6.86669L13.4636 6.86669L13.4636 6.86669L15.6002 8.25775C16.0257 8.53473 16.388 8.77062 16.6713 8.99592C16.9734 9.23613 17.2287 9.4967 17.4156 9.84338C17.6023 10.1896 17.6802 10.5468 17.7162 10.9322C17.75 11.2944 17.75 11.7299 17.75 12.2427V22C17.75 22.4142 17.4142 22.75 17 22.75H14.0034C14.4161 22.7482 14.75 22.4131 14.75 22L14.75 18.9553V18.9552C14.7501 18.5224 14.7501 18.1256 14.7067 17.8028C14.6589 17.4473 14.5465 17.0716 14.2374 16.7626C13.9284 16.4535 13.5527 16.3411 13.1972 16.2933C12.8744 16.2499 12.4776 16.25 12.0448 16.25H11.9553C11.5224 16.25 11.1256 16.2499 10.8028 16.2933C10.4473 16.3411 10.0716 16.4535 9.76257 16.7626C9.45355 17.0716 9.3411 17.4473 9.29331 17.8028C9.24991 18.1256 9.24995 18.5224 9.25 18.9553L9.25001 22C9.25001 22.4131 9.58395 22.7482 9.99659 22.75H7C6.58579 22.75 6.25 22.4142 6.25 22V12.2427V12.2427V12.2426C6.24999 11.7299 6.24997 11.2944 6.28383 10.9322C6.31984 10.5468 6.39774 10.1896 6.58439 9.84338C6.77129 9.4967 7.02665 9.23613 7.32871 8.99592C7.612 8.77062 7.97435 8.53473 8.39982 8.25774L10.5364 6.86669L10.5364 6.86669C10.7756 6.71095 11.0017 6.56368 11.206 6.45977ZM10.0034 22.75H13.9966C13.5839 22.7482 13.25 22.4131 13.25 22V19C13.25 18.5074 13.2484 18.2134 13.2201 18.0027C13.1975 17.8343 13.1578 17.8015 12.9973 17.7799C12.7866 17.7516 12.4926 17.75 12 17.75C11.5074 17.75 11.2134 17.7516 11.0027 17.7799C10.8422 17.8015 10.8026 17.8343 10.7799 18.0027C10.7516 18.2134 10.75 18.5074 10.75 19V22C10.75 22.4131 10.4161 22.7482 10.0034 22.75ZM11 13C11 12.4477 11.4457 12 11.9955 12H12.0045C12.5543 12 13 12.4477 13 13C13 13.5523 12.5543 14 12.0045 14H11.9955C11.4457 14 11 13.5523 11 13Z',
  d16: 'M11.206 6.45977C11.4338 6.34383 11.6927 6.25 12 6.25C12.3073 6.25 12.5662 6.34383 12.794 6.45977C12.9983 6.56368 13.2244 6.71095 13.4636 6.86669L13.4636 6.86669L15.6002 8.25775C16.0257 8.53473 16.388 8.77062 16.6713 8.99592C16.9734 9.23613 17.2287 9.4967 17.4156 9.84338C17.6023 10.1896 17.6802 10.5468 17.7162 10.9322C17.75 11.2944 17.75 11.7299 17.75 12.2427V22C17.75 22.4142 17.4142 22.75 17 22.75H7C6.58579 22.75 6.25 22.4142 6.25 22V12.2427V12.2427C6.24999 11.7299 6.24997 11.2944 6.28383 10.9322C6.31984 10.5468 6.39774 10.1896 6.58439 9.84338C6.77129 9.4967 7.02665 9.23613 7.32871 8.99592C7.612 8.77062 7.97435 8.53473 8.39982 8.25774L10.5364 6.86669L10.5364 6.86669C10.7756 6.71095 11.0017 6.56368 11.206 6.45977Z',
  d17: 'M16 5.73209H12.75V6.43786C12.5329 6.33223 12.2877 6.25 12 6.25C11.7124 6.25 11.4671 6.33222 11.25 6.43784V2.97023L11.25 2.93579C11.2499 2.72925 11.2498 2.5067 11.2749 2.31898C11.3042 2.09966 11.3796 1.81926 11.6146 1.58285C12.0147 1.18033 12.572 1.23484 12.8489 1.2834C13.1892 1.34307 13.5552 1.47768 13.8857 1.62195C14.5559 1.9145 15.2453 2.32103 15.6135 2.54777C16.5707 3.13718 16.75 4.24513 16.75 4.98209C16.75 5.3963 16.4142 5.73209 16 5.73209ZM6.25 12.7966C6.24485 12.7982 6.2397 12.7999 6.23455 12.8016C6.13644 12.8343 6.03833 12.8666 5.94084 12.8988L5.94049 12.8989C5.55302 13.0267 5.17537 13.1512 4.84659 13.2815C4.42808 13.4472 4.00083 13.6543 3.63283 13.9666C2.81456 14.6611 2.55078 15.639 2.55078 16.9125V21.7503C2.55078 22.3026 2.9985 22.7503 3.55078 22.7503C4.10307 22.7503 4.55078 22.3026 4.55078 21.7503V16.9125C4.55078 15.8945 4.75919 15.6339 4.92701 15.4914C5.05206 15.3853 5.24633 15.2743 5.58303 15.1409C5.78115 15.0625 5.99824 14.9874 6.25 14.9033V12.7966ZM17.75 14.8863C18.0236 14.9773 18.2566 15.0572 18.468 15.1409C18.8047 15.2743 18.999 15.3853 19.124 15.4914C19.2919 15.6339 19.5003 15.8945 19.5003 16.9125V21.7503C19.5003 22.3026 19.948 22.7503 20.5003 22.7503C21.0526 22.7503 21.5003 22.3026 21.5003 21.7503V16.9125C21.5003 15.639 21.2365 14.6611 20.4182 13.9666C20.0502 13.6543 19.623 13.4472 19.2045 13.2815C18.8757 13.1512 18.498 13.0267 18.1106 12.8989L18.1106 12.8989C18.013 12.8667 17.9147 12.8343 17.8165 12.8016C17.7944 12.7942 17.7722 12.7877 17.75 12.7819V14.8863Z',
  d18: 'M11 13C11 12.4477 11.4457 12 11.9955 12H12.0045C12.5543 12 13 12.4477 13 13C13 13.5523 12.5543 14 12.0045 14H11.9955C11.4457 14 11 13.5523 11 13Z',
  d19: 'M12.0448 16.25C12.4776 16.25 12.8744 16.2499 13.1972 16.2933C13.5527 16.3411 13.9284 16.4535 14.2374 16.7626C14.5465 17.0716 14.6589 17.4473 14.7067 17.8028C14.7501 18.1256 14.7501 18.5224 14.75 18.9552V18.9553L14.75 22C14.75 22.4142 14.4142 22.75 14 22.75C13.5858 22.75 13.25 22.4142 13.25 22V19C13.25 18.5074 13.2484 18.2134 13.2201 18.0027C13.1975 17.8343 13.1578 17.8015 12.9973 17.7799C12.7866 17.7516 12.4926 17.75 12 17.75C11.5074 17.75 11.2134 17.7516 11.0027 17.7799C10.8422 17.8015 10.8026 17.8343 10.7799 18.0027C10.7516 18.2134 10.75 18.5074 10.75 19L10.75 22C10.75 22.4142 10.4142 22.75 10 22.75C9.58579 22.75 9.25001 22.4142 9.25001 22L9.25 18.9553C9.24995 18.5224 9.24991 18.1256 9.29331 17.8028C9.3411 17.4473 9.45355 17.0716 9.76257 16.7626C10.0716 16.4535 10.4473 16.3411 10.8028 16.2933C11.1256 16.2499 11.5224 16.25 11.9553 16.25H12.0448Z',
  d20: 'M7 22V11L12 7L17 11V22',
  d21: 'M20.5 22V16L17.5 14.5',
  d22: 'M3.5 22V16L6.5 14.5',
  d23: 'M1 22H23',
  d24: 'M12 6.99999V4.9822M12 4.9822V2H16V4.9822H12Z',
  d25: 'M10 22V17H14V22',
  d26: 'M17.1646 13.4937L21.25 15.5364V22.7499H19.75V16.4634L16.4938 14.8353L17.1646 13.4937Z',
  d27: 'M7.50623 14.8353L4.25 16.4634V22.7499H2.75V15.5364L6.83541 13.4937L7.50623 14.8353Z',
  d28: 'M23 22.75H1V21.25H23V22.75Z',
  d29: 'M11.25 2C11.25 1.58579 11.5858 1.25 12 1.25H16C16.4142 1.25 16.75 1.58579 16.75 2V4.9822C16.75 5.39641 16.4142 5.7322 16 5.7322H12.75V7.74999H11.25V2Z',
  d30: 'M6.25 22V10.6396L12 6.03955L17.75 10.6396V22H14.75V17C14.75 16.5858 14.4142 16.25 14 16.25H10C9.58579 16.25 9.25 16.5858 9.25 17V22H6.25ZM10.75 22H13.25V17.75H10.75V22ZM11 12H13.009V14H11V12Z',
} as const;

export const IconSchool01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-01-stroke-rounded IconSchool01StrokeRounded"
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchool01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-01-duotone-rounded IconSchool01DuotoneRounded"
    >
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchool01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-01-twotone-rounded IconSchool01TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchool01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-01-solid-rounded IconSchool01SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSchool01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-01-bulk-rounded IconSchool01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSchool01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-01-stroke-sharp IconSchool01StrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchool01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-01-solid-sharp IconSchool01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSchool01: TheIconSelfPack = {
  name: 'School01',
  StrokeRounded: IconSchool01StrokeRounded,
  DuotoneRounded: IconSchool01DuotoneRounded,
  TwotoneRounded: IconSchool01TwotoneRounded,
  SolidRounded: IconSchool01SolidRounded,
  BulkRounded: IconSchool01BulkRounded,
  StrokeSharp: IconSchool01StrokeSharp,
  SolidSharp: IconSchool01SolidSharp,
};