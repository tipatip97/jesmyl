import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 4.5H13V22H4V4.5Z',
  d2: 'M6 4L6.32918 3.34164C6.44315 3.1137 6.50014 2.99973 6.56517 2.90086C6.88933 2.40808 7.41449 2.08351 8.00021 2.01396C8.11773 2 8.24515 2 8.5 2C8.75485 2 8.88227 2 8.99979 2.01396C9.58551 2.08351 10.1107 2.40808 10.4348 2.90086C10.4999 2.99973 10.5568 3.1137 10.6708 3.34164L11 4',
  d3: 'M3 4.5H14',
  d4: 'M3 22H14',
  d5: 'M13 7.5H18C19.4142 7.5 20.1213 7.5 20.5607 7.96131C21 8.42261 21 9.16764 21 10.6577C21 11.6731 21 12.1808 20.7504 12.5763C20.5008 12.9719 20.057 13.1691 19.1694 13.5636L18.2829 13.9576C17.6912 14.2206 17.3953 14.3521 17.2289 14.6158C17.0625 14.8794 17.0625 15.2179 17.0625 15.8949C17.0625 16.8882 17.0625 17.3849 16.7696 17.6925C16.4767 18 16.0053 18 15.0625 18H13V7.5Z',
  d6: 'M4 3.75C3.58579 3.75 3.25 4.08579 3.25 4.5V22C3.25 22.4142 3.58579 22.75 4 22.75H13C13.4142 22.75 13.75 22.4142 13.75 22V4.5C13.75 4.08579 13.4142 3.75 13 3.75H4Z',
  d7: 'M11.2705 2.36104C10.7843 1.62458 9.99652 1.13952 9.11793 1.03557C8.71964 0.988442 8.28034 0.988497 7.88251 1.03557C7.00391 1.13952 6.21618 1.62458 5.72994 2.36104C5.55077 2.63241 5.40786 2.93148 5.26626 3.22779C5.2132 3.33882 5.16032 3.44947 5.10579 3.55813C5.07438 3.62071 5.05021 3.68501 5.03295 3.75009H3C2.44772 3.75009 2 4.1978 2 4.75009C2 5.30237 2.44772 5.75009 3 5.75009H14C14.5523 5.75009 15 5.30237 15 4.75009C15 4.1978 14.5523 3.75009 14 3.75009H11.9675C11.9502 3.68501 11.9261 3.62071 11.8946 3.55813C11.8401 3.44947 11.7872 3.33882 11.7342 3.22779C11.5926 2.93151 11.4497 2.63248 11.2705 2.36104ZM9.75466 3.75009C9.56615 3.38347 9.33997 3.0685 8.88208 3.01432C8.6384 2.98549 8.36204 2.98549 8.11836 3.01432C7.66046 3.0685 7.43428 3.38347 7.24578 3.75009H9.75466Z',
  d8: 'M2 22C2 21.4477 2.44772 21 3 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H3C2.44772 23 2 22.5523 2 22Z',
  d9: 'M19.5061 8.54785C19.1838 8.50235 18.7367 8.50001 18 8.50001H14V17H15.0625C15.2692 17 15.4649 17 15.6236 17C15.9803 17 16.0015 16.9799 16.0223 16.6242C16.0402 16.3165 16.0625 15.9215 16.0625 15.8556C16.0624 15.5512 16.0624 15.2522 16.0885 14.998C16.118 14.7114 16.1874 14.3924 16.3832 14.0821C16.717 13.5531 17.2908 13.3041 17.8399 13.0602C18.4564 12.7863 19.1113 12.5482 19.6942 12.2072C19.9048 12.084 19.949 11.991 19.9741 11.7472C20.0635 10.8775 20.0636 9.91581 19.9531 9.05036C19.9108 8.71867 19.8427 8.59536 19.5061 8.54785ZM19.7857 6.56749C20.3142 6.6421 20.8507 6.81582 21.2848 7.27166C21.7129 7.72113 21.8691 8.26535 21.937 8.79709C22.0001 9.29112 22.0001 9.90413 22 10.5975C22 11.1019 22.0028 11.5704 21.9636 11.9518C21.9237 12.3395 21.8335 12.7338 21.5961 13.11C21.3568 13.4892 21.0396 13.7373 20.7041 13.9335C20.4023 14.1101 20.0253 14.2776 19.6179 14.4586C19.4007 14.5551 18.1043 14.9476 18.0781 15.2027C18.0106 15.858 18.1016 16.5215 18.0178 17.1775C17.9683 17.5659 17.8486 18.0095 17.4937 18.3821C17.1328 18.7611 16.6919 18.8964 16.2996 18.9517C15.9411 19.0023 15.5043 19 15.0625 19H13C12.4477 19 12 18.5523 12 18V7.50001C12 6.94772 12.4477 6.50001 13 6.50001H18C18.6775 6.50001 19.2911 6.49767 19.7857 6.56749Z',
  d10: 'M9.11793 1.03557C9.99652 1.13952 10.7843 1.62458 11.2705 2.36104C11.5168 2.7341 11.6946 3.1595 11.8946 3.55812C12.1416 4.05029 11.9414 4.64876 11.4474 4.89484C10.9535 5.14092 10.3528 4.94143 10.1058 4.44927L9.77661 3.79333C9.58349 3.4085 9.35788 3.07062 8.88208 3.01432C8.6384 2.98549 8.36204 2.98549 8.11836 3.01432C7.64256 3.07062 7.41695 3.4085 7.22383 3.79333L6.89465 4.44927C6.64766 4.94143 6.04698 5.14092 5.55301 4.89484C5.05903 4.64876 4.8588 4.05029 5.10579 3.55812C5.30584 3.1595 5.48363 2.7341 5.72994 2.36104C6.21618 1.62458 7.00392 1.13952 7.88251 1.03557C8.28054 0.98847 8.71989 0.98847 9.11793 1.03557Z',
  d11: 'M2 4.75C2 4.19772 2.44772 3.75 3 3.75H14C14.5523 3.75 15 4.19772 15 4.75C15 5.30228 14.5523 5.75 14 5.75H3C2.44772 5.75 2 5.30228 2 4.75Z',
  d12: 'M19.5061 8.54785C19.1838 8.50235 18.7367 8.50001 18 8.50001H13.75V6.50001H18C18.6775 6.50001 19.2911 6.49767 19.7857 6.56749C20.3142 6.6421 20.8507 6.81582 21.2848 7.27166C21.7129 7.72113 21.8691 8.26535 21.937 8.79709C22.0001 9.2911 22.0001 9.90409 22 10.5975V10.5975C22 11.1019 22.0028 11.5704 21.9636 11.9518C21.9237 12.3395 21.8335 12.7338 21.5961 13.11C21.3568 13.4892 21.0396 13.7373 20.7041 13.9335C20.4023 14.1101 20.0253 14.2776 19.6179 14.4586L19.6179 14.4586C19.4007 14.5551 18.1043 14.9476 18.0781 15.2027C18.0106 15.858 18.1016 16.5215 18.0178 17.1775C17.9683 17.5659 17.8486 18.0095 17.4937 18.3821C17.1328 18.7611 16.6919 18.8964 16.2996 18.9517C15.9411 19.0023 15.5043 19 15.0625 19H13.75V17H15.0625H15.6236C15.9803 17 16.0015 16.9799 16.0223 16.6242C16.0402 16.3165 16.0625 15.9215 16.0625 15.8556C16.0624 15.5512 16.0624 15.2522 16.0885 14.998C16.118 14.7114 16.1874 14.3924 16.3832 14.0821C16.7121 13.561 17.2738 13.3115 17.8154 13.071L17.8399 13.0602C18.4564 12.7863 19.1113 12.5482 19.6942 12.2072C19.9048 12.084 19.949 11.991 19.9741 11.7472C20.0635 10.8775 20.0636 9.91581 19.9531 9.05036C19.9108 8.71867 19.8427 8.59536 19.5061 8.54785Z',
  d13: 'M5 4.5H14V22H5V4.5Z',
  d14: 'M7.5 4.5V2H11.5V4.5',
  d15: 'M3 4.5H16',
  d16: 'M3 22H16',
  d17: 'M14 7.5L21 7.50005V13L18 15V18H14',
  d18: 'M4.75 3.75C4.33579 3.75 4 4.08579 4 4.5V20.75H2.75V22.75H15.75V20.75H14.5V4.5C14.5 4.08579 14.1642 3.75 13.75 3.75H4.75Z',
  d19: 'M12 1.25H6.5V3.5H2.75V5.5H15.75V3.5H12V1.25ZM10.5 3.5V2.75H8V3.5H10.5Z',
  d20: 'M19.25 8.67004L13.25 8.67L13.25 6.75L20.25 6.75005C20.8023 6.75005 21.25 7.17986 21.25 7.71005V12.99C21.25 13.311 21.0829 13.6107 20.8047 13.7888L18.25 15.4238V17.79C18.25 18.3202 17.8023 18.75 17.25 18.75H13.25V16.83H16.25V14.91C16.25 14.589 16.4171 14.2893 16.6953 14.1112L19.25 12.4762V8.67004Z',
} as const;

export const IconFilmRoll01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-01-stroke-rounded IconFilmRoll01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilmRoll01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-01-duotone-rounded IconFilmRoll01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilmRoll01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-01-twotone-rounded IconFilmRoll01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilmRoll01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-01-solid-rounded IconFilmRoll01SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconFilmRoll01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-01-bulk-rounded IconFilmRoll01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilmRoll01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-01-stroke-sharp IconFilmRoll01StrokeSharp"
    >
      <path 
        d={d.d13} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilmRoll01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-roll-01-solid-sharp IconFilmRoll01SolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFilmRoll01: TheIconSelfPack = {
  name: 'FilmRoll01',
  StrokeRounded: IconFilmRoll01StrokeRounded,
  DuotoneRounded: IconFilmRoll01DuotoneRounded,
  TwotoneRounded: IconFilmRoll01TwotoneRounded,
  SolidRounded: IconFilmRoll01SolidRounded,
  BulkRounded: IconFilmRoll01BulkRounded,
  StrokeSharp: IconFilmRoll01StrokeSharp,
  SolidSharp: IconFilmRoll01SolidSharp,
};