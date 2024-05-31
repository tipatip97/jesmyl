import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 4H8C6.58579 4 5.87868 4 5.43934 4.43934C5 4.87868 5 5.58579 5 7V17C5 18.4142 5 19.1213 5.43934 19.5607C5.87868 20 6.58579 20 8 20H16C17.4142 20 18.1213 20 18.5607 19.5607C19 19.1213 19 18.4142 19 17V7C19 5.58579 19 4.87868 18.5607 4.43934C18.1213 4 17.4142 4 16 4Z',
  d2: 'M9.38664 11.3202C8.24404 9.27033 9.87734 8.37134 11.1311 7.4973C11.6067 7.16578 11.8444 7.00002 11.9986 7C12.1529 6.99998 12.3907 7.16572 12.8664 7.49718C14.1208 8.37135 15.7559 9.27044 14.614 11.3209C14.4138 11.6804 14.3137 11.8602 14.2804 11.9887C14.2471 12.1172 14.247 12.2672 14.2469 12.5674L14.2454 15.978C14.2452 16.4598 14.2451 16.7007 14.0987 16.8503C13.9523 17 13.7167 17 13.2454 17H10.7543C10.2829 17 10.0472 17 9.90072 16.8503C9.75428 16.7005 9.75428 16.4596 9.75428 15.9776V12.5684C9.75428 12.2678 9.75428 12.1175 9.72092 11.9888C9.68757 11.8601 9.58726 11.6801 9.38664 11.3202Z',
  d3: 'M14 4V2',
  d4: 'M18 4V2',
  d5: 'M10 4V2',
  d6: 'M6 4V2',
  d7: 'M14 22V20',
  d8: 'M18 22V20',
  d9: 'M10 22V20',
  d10: 'M6 22V20',
  d11: 'M8 4H16C17.4142 4 18.1213 4 18.5607 4.43934C19 4.87868 19 5.58579 19 7V17C19 18.4142 19 19.1213 18.5607 19.5607C18.1213 20 17.4142 20 16 20H8C6.58579 20 5.87868 20 5.43934 19.5607C5 19.1213 5 18.4142 5 17V7C5 5.58579 5 4.87868 5.43934 4.43934C5.87868 4 6.58579 4 8 4ZM10.8578 7.6854C9.65816 8.50565 8.32566 9.41676 9.38664 11.3202C9.58726 11.6801 9.68757 11.8601 9.72092 11.9888C9.75428 12.1175 9.75428 12.2678 9.75428 12.5684V15.9776C9.75428 16.4596 9.75428 16.7005 9.90072 16.8503C10.0472 17 10.2829 17 10.7543 17H13.2454C13.7167 17 13.9523 17 14.0987 16.8503C14.2451 16.7007 14.2452 16.4598 14.2454 15.978L14.2469 12.5674C14.247 12.2673 14.2471 12.1172 14.2804 11.9887C14.3137 11.8602 14.4138 11.6804 14.614 11.3209C15.6741 9.41728 14.3408 8.50602 13.1405 7.68576C13.048 7.6225 12.9562 7.55977 12.8664 7.49718C12.3907 7.16572 12.1529 6.99998 11.9986 7C11.8444 7.00002 11.6067 7.16578 11.1311 7.4973C11.0415 7.55973 10.95 7.6223 10.8578 7.6854Z',
  d12: 'M8.00001 3.25L7.95063 3.24999H7.95058C7.28574 3.24996 6.71289 3.24993 6.25416 3.3116C5.76252 3.3777 5.29126 3.52676 4.90901 3.90901C4.52677 4.29125 4.37771 4.76252 4.31161 5.25415C4.24994 5.71288 4.24997 6.2857 4.25 6.95053V6.95057V6.95062L4.25001 7L4.25 17.0494V17.0494V17.0495C4.24997 17.7143 4.24994 18.2871 4.31161 18.7458C4.37771 19.2375 4.52677 19.7087 4.90902 20.091C5.29126 20.4732 5.76252 20.6223 6.25416 20.6884C6.71291 20.7501 7.28577 20.75 7.95064 20.75H16.0494C16.7142 20.75 17.2871 20.7501 17.7458 20.6884C18.2375 20.6223 18.7087 20.4732 19.091 20.091C19.4732 19.7087 19.6223 19.2375 19.6884 18.7458C19.7501 18.2871 19.75 17.7142 19.75 17.0494V17.0494V17.0494V6.95063V6.95062V6.95061C19.75 6.28575 19.7501 5.71289 19.6884 5.25415C19.6223 4.76252 19.4732 4.29125 19.091 3.90901C18.7087 3.52676 18.2375 3.3777 17.7458 3.3116C17.2871 3.24993 16.7143 3.24996 16.0494 3.24999H16.0494L8.00001 3.25ZM10.6674 7.25394C9.26785 8.15621 7.71327 9.15843 8.95108 11.2522L8.95108 11.2522C9.18514 11.6481 9.30217 11.8461 9.34108 11.9876C9.37999 12.1292 9.37999 12.2945 9.37999 12.6252V16.3753C9.37999 16.9055 9.37999 17.1706 9.55084 17.3353C9.7217 17.5 9.99668 17.5 10.5467 17.5H13.453C14.0028 17.5 14.2777 17.5 14.4485 17.3354C14.6193 17.1708 14.6195 16.9058 14.6197 16.3758L14.6213 12.6241C14.6215 12.294 14.6216 12.1289 14.6604 11.9875C14.6993 11.8462 14.8161 11.6484 15.0497 11.2529C16.2865 9.15899 14.7309 8.15662 13.3306 7.25434C13.2226 7.18475 13.1156 7.11575 13.0108 7.04689C12.4558 6.68229 12.1783 6.49998 11.9984 6.5C11.8185 6.50002 11.5411 6.68235 10.9863 7.04703C10.8818 7.11571 10.7751 7.18453 10.6674 7.25394Z',
  d13: 'M6 1.25C6.41421 1.25 6.75 1.58579 6.75 2V4C6.75 4.41421 6.41421 4.75 6 4.75C5.58579 4.75 5.25 4.41421 5.25 4V2C5.25 1.58579 5.58579 1.25 6 1.25ZM10 1.25C10.4142 1.25 10.75 1.58579 10.75 2V4C10.75 4.41421 10.4142 4.75 10 4.75C9.58579 4.75 9.25 4.41421 9.25 4V2C9.25 1.58579 9.58579 1.25 10 1.25ZM14 1.25C14.4142 1.25 14.75 1.58579 14.75 2V4C14.75 4.41421 14.4142 4.75 14 4.75C13.5858 4.75 13.25 4.41421 13.25 4V2C13.25 1.58579 13.5858 1.25 14 1.25ZM18 1.25C18.4142 1.25 18.75 1.58579 18.75 2V4C18.75 4.41421 18.4142 4.75 18 4.75C17.5858 4.75 17.25 4.41421 17.25 4V2C17.25 1.58579 17.5858 1.25 18 1.25Z',
  d14: 'M6 19.25C6.41421 19.25 6.75 19.5858 6.75 20V22C6.75 22.4142 6.41421 22.75 6 22.75C5.58579 22.75 5.25 22.4142 5.25 22V20C5.25 19.5858 5.58579 19.25 6 19.25ZM10 19.25C10.4142 19.25 10.75 19.5858 10.75 20V22C10.75 22.4142 10.4142 22.75 10 22.75C9.58579 22.75 9.25 22.4142 9.25 22V20C9.25 19.5858 9.58579 19.25 10 19.25ZM14 19.25C14.4142 19.25 14.75 19.5858 14.75 20V22C14.75 22.4142 14.4142 22.75 14 22.75C13.5858 22.75 13.25 22.4142 13.25 22V20C13.25 19.5858 13.5858 19.25 14 19.25ZM18 19.25C18.4142 19.25 18.75 19.5858 18.75 20V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V20C17.25 19.5858 17.5858 19.25 18 19.25Z',
  d15: 'M7.95063 3.25L8 3.25L16.0494 3.25H16.0494C16.7143 3.24996 17.2871 3.24993 17.7458 3.31161C18.2375 3.37771 18.7087 3.52677 19.091 3.90901C19.4732 4.29126 19.6223 4.76252 19.6884 5.25416C19.7501 5.7129 19.75 6.28576 19.75 6.95062V6.95064V17.0494V17.0494C19.75 17.7142 19.7501 18.2871 19.6884 18.7458C19.6223 19.2375 19.4732 19.7087 19.091 20.091C18.7087 20.4732 18.2375 20.6223 17.7458 20.6884C17.2871 20.7501 16.7142 20.75 16.0494 20.75H7.95064C7.28577 20.75 6.71291 20.7501 6.25416 20.6884C5.76252 20.6223 5.29126 20.4732 4.90901 20.091C4.52677 19.7087 4.37771 19.2375 4.31161 18.7458C4.24993 18.2871 4.24996 17.7143 4.25 17.0494V17.0494L4.25 7L4.25 6.95063V6.95058C4.24996 6.28574 4.24993 5.71289 4.31161 5.25416C4.37771 4.76252 4.52677 4.29126 4.90901 3.90901C5.29126 3.52677 5.76252 3.37771 6.25416 3.31161C6.71289 3.24993 7.28574 3.24996 7.95058 3.25H7.95063Z',
  d16: 'M8.95108 11.2522C7.61805 8.99736 9.52356 8.00847 10.9863 7.04703C11.5411 6.68235 11.8185 6.50002 11.9984 6.5C12.1783 6.49998 12.4558 6.68229 13.0108 7.04689C14.4743 8.00849 16.3819 8.99748 15.0497 11.2529C14.8161 11.6484 14.6993 11.8462 14.6604 11.9875C14.6216 12.1289 14.6215 12.294 14.6213 12.6241L14.6197 16.3758C14.6195 16.9058 14.6193 17.1708 14.4485 17.3354C14.2777 17.5 14.0028 17.5 13.453 17.5H10.5467C9.99668 17.5 9.7217 17.5 9.55084 17.3353C9.37999 17.1706 9.37999 16.9055 9.37999 16.3753V12.6252C9.37999 12.2945 9.37999 12.1292 9.34108 11.9876C9.30217 11.8461 9.18514 11.6481 8.95108 11.2522Z',
  d17: 'M6.75 20.7318C6.57259 20.7227 6.40704 20.709 6.25416 20.6884C5.90036 20.6408 5.55711 20.5503 5.25 20.3608V22C5.25 22.4142 5.58579 22.75 6 22.75C6.41421 22.75 6.75 22.4142 6.75 22V20.7318ZM10.75 20.75H9.25V22C9.25 22.4142 9.58579 22.75 10 22.75C10.4142 22.75 10.75 22.4142 10.75 22V20.75ZM14.75 20.75H13.25V22C13.25 22.4142 13.5858 22.75 14 22.75C14.4142 22.75 14.75 22.4142 14.75 22V20.75ZM18.75 20.3608C18.4429 20.5503 18.0996 20.6408 17.7458 20.6884C17.593 20.709 17.4274 20.7227 17.25 20.7318V22C17.25 22.4142 17.5858 22.75 18 22.75C18.4142 22.75 18.75 22.4142 18.75 22V20.3608ZM17.25 3.26822C17.4274 3.27735 17.593 3.29105 17.7458 3.31161C18.0996 3.35918 18.4429 3.4497 18.75 3.63918V2C18.75 1.58579 18.4142 1.25 18 1.25C17.5858 1.25 17.25 1.58579 17.25 2V3.26822ZM13.25 3.25L14.75 3.25V2C14.75 1.58579 14.4142 1.25 14 1.25C13.5858 1.25 13.25 1.58579 13.25 2V3.25ZM9.25 3.25L10.75 3.25V2C10.75 1.58579 10.4142 1.25 10 1.25C9.58579 1.25 9.25 1.58579 9.25 2V3.25ZM5.25 3.63918C5.55711 3.44971 5.90036 3.35918 6.25416 3.31161C6.40704 3.29106 6.57259 3.27735 6.75 3.26822V2C6.75 1.58579 6.41421 1.25 6 1.25C5.58579 1.25 5.25 1.58579 5.25 2V3.63918Z',
  d18: 'M19 4H5V20H19V4Z',
  d19: 'M9.38664 11.3202C8.24404 9.27033 9.87734 8.37134 11.1311 7.4973L11.9986 7L12.8664 7.49718C14.1208 8.37135 15.7559 9.27044 14.614 11.3209C14.4138 11.6804 14.3137 11.8602 14.2804 11.9887C14.2471 12.1172 14.247 12.2672 14.2469 12.5674L14.2454 17L9.75428 16.9996V12.5684C9.75428 12.2678 9.75428 12.1175 9.72092 11.9888C9.68757 11.8601 9.58726 11.6801 9.38664 11.3202L9.38664 11.3202Z',
  d20: 'M14.75 22.4998V20.7498H17.25V22.4998H18.75V20.7498H19C19.4142 20.7498 19.75 20.414 19.75 19.9998V3.99976C19.75 3.58554 19.4142 3.24976 19 3.24976H18.75V1.49976H17.25V3.24976H14.75V1.49976H13.25V3.24976H10.75V1.49976H9.25V3.24976H6.75V1.49976H5.25V3.24976H5C4.80109 3.24976 4.61032 3.32877 4.46967 3.46943C4.32902 3.61008 4.25 3.80084 4.25 3.99976V19.9998C4.25 20.414 4.58579 20.7498 5 20.7498H5.25V22.4998H6.75V20.7498H9.25V22.4998H10.75V20.7498H13.25V22.4998H14.75ZM10.8578 7.68515C9.65816 8.5054 8.32566 9.41652 9.38664 11.3199C9.58726 11.6798 9.68757 11.8598 9.72092 11.9885C9.75428 12.1172 9.75428 12.2675 9.75428 12.5681V16.9993L14.2454 16.9998L14.2469 12.5671C14.247 12.267 14.2471 12.1169 14.2804 11.9884C14.3137 11.8599 14.4138 11.6802 14.614 11.3206C15.6741 9.41704 14.3408 8.50577 13.1405 7.68552C13.048 7.62225 12.9562 7.55953 12.8664 7.49693L11.9986 6.99976L11.1311 7.49705C11.0415 7.55949 10.95 7.62205 10.8578 7.68515Z',
} as const;

export const IconPrayerRug02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prayer-rug-02-stroke-rounded IconPrayerRug02StrokeRounded"
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrayerRug02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prayer-rug-02-duotone-rounded IconPrayerRug02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrayerRug02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prayer-rug-02-twotone-rounded IconPrayerRug02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrayerRug02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prayer-rug-02-solid-rounded IconPrayerRug02SolidRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrayerRug02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prayer-rug-02-bulk-rounded IconPrayerRug02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconPrayerRug02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prayer-rug-02-stroke-sharp IconPrayerRug02StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconPrayerRug02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prayer-rug-02-solid-sharp IconPrayerRug02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPrayerRug02: TheIconSelfPack = {
  name: 'PrayerRug02',
  StrokeRounded: IconPrayerRug02StrokeRounded,
  DuotoneRounded: IconPrayerRug02DuotoneRounded,
  TwotoneRounded: IconPrayerRug02TwotoneRounded,
  SolidRounded: IconPrayerRug02SolidRounded,
  BulkRounded: IconPrayerRug02BulkRounded,
  StrokeSharp: IconPrayerRug02StrokeSharp,
  SolidSharp: IconPrayerRug02SolidSharp,
};