import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 19L12 15L15 19M9 14H15',
  d2: 'M2 22V14C2 13.0572 2 12.5858 2.29289 12.2929C2.58579 12 3.05719 12 4 12H7C7.94281 12 8.41421 12 8.70711 12.2929C9 12.5858 9 13.0572 9 14V22',
  d3: 'M3 12V10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H6C6.94281 8 7.41421 8 7.70711 8.29289C8 8.58579 8 9.05719 8 10V12',
  d4: 'M4 8V5.5C4 5.03406 4 4.80109 4.07612 4.61732C4.17761 4.37229 4.37229 4.17761 4.61732 4.07612C4.80109 4 5.03406 4 5.5 4C5.96594 4 6.19891 4 6.38268 4.07612C6.62771 4.17761 6.82239 4.37229 6.92388 4.61732C7 4.80109 7 5.03406 7 5.5V8',
  d5: 'M15 22V14C15 13.0572 15 12.5858 15.2929 12.2929C15.5858 12 16.0572 12 17 12H20C20.9428 12 21.4142 12 21.7071 12.2929C22 12.5858 22 13.0572 22 14V22',
  d6: 'M2 22H22',
  d7: 'M5.5 4V2',
  d8: 'M16 12V10C16 9.05719 16 8.58579 16.2929 8.29289C16.5858 8 17.0572 8 18 8H19C19.9428 8 20.4142 8 20.7071 8.29289C21 8.58579 21 9.05719 21 10V12',
  d9: 'M17 8V5.5C17 5.03406 17 4.80109 17.0761 4.61732C17.1776 4.37229 17.3723 4.17761 17.6173 4.07612C17.8011 4 18.0341 4 18.5 4C18.9659 4 19.1989 4 19.3827 4.07612C19.6277 4.17761 19.8224 4.37229 19.9239 4.61732C20 4.80109 20 5.03406 20 5.5V8',
  d10: 'M18.5 4V2',
  d11: 'M5.5 22V20',
  d12: 'M18.5 22V20',
  d13: 'M4 5.5V8H7V5.5C7 5.03406 7 4.80109 6.92388 4.61732C6.82239 4.37229 6.62771 4.17761 6.38268 4.07612C6.19891 4 5.96594 4 5.5 4C5.03406 4 4.80109 4 4.61732 4.07612C4.37229 4.17761 4.17761 4.37229 4.07612 4.61732C4 4.80109 4 5.03406 4 5.5Z',
  d14: 'M17 5.5V8H20V5.5C20 5.03406 20 4.80109 19.9239 4.61732C19.8224 4.37229 19.6277 4.17761 19.3827 4.07612C19.1989 4 18.9659 4 18.5 4C18.0341 4 17.8011 4 17.6173 4.07612C17.3723 4.17761 17.1776 4.37229 17.0761 4.61732C17 4.80109 17 5.03406 17 5.5Z',
  d15: 'M12 15L9 19V14H15V19L12 15Z',
  d16: 'M2 14V22H9V14C9 13.0572 9 12.5858 8.70711 12.2929C8.41421 12 7.94281 12 7 12H4C3.05719 12 2.58579 12 2.29289 12.2929C2 12.5858 2 13.0572 2 14Z',
  d17: 'M15 14V22H22V14C22 13.0572 22 12.5858 21.7071 12.2929C21.4142 12 20.9428 12 20 12H17C16.0572 12 15.5858 12 15.2929 12.2929C15 12.5858 15 13.0572 15 14Z',
  d18: 'M18.5 1.25C18.9142 1.25 19.25 1.58579 19.25 2V4C19.25 4.41421 18.9142 4.75 18.5 4.75C18.0858 4.75 17.75 4.41421 17.75 4V2C17.75 1.58579 18.0858 1.25 18.5 1.25Z',
  d19: 'M20.0448 11.25H16.9553C16.5224 11.2499 16.1256 11.2499 15.8028 11.2933C15.4473 11.3411 15.0716 11.4535 14.7626 11.7626C14.4535 12.0716 14.3411 12.4473 14.2933 12.8028C14.2499 13.1256 14.25 13.5224 14.25 13.9553L14.25 21.75C14.25 22.2214 14.25 22.4571 14.3965 22.6036C14.5429 22.75 14.7786 22.75 15.25 22.75H21.75C22.2214 22.75 22.4571 22.75 22.6036 22.6036C22.75 22.4571 22.75 22.2214 22.75 21.75L22.75 13.9553V13.9552V13.9552C22.7501 13.5224 22.7501 13.1256 22.7067 12.8028C22.6589 12.4473 22.5465 12.0716 22.2374 11.7626C21.9284 11.4535 21.5527 11.3411 21.1972 11.2933C20.8744 11.2499 20.4776 11.2499 20.0448 11.25ZM19.25 20C19.25 19.5858 18.9142 19.25 18.5 19.25C18.0858 19.25 17.75 19.5858 17.75 20V22C17.75 22.4142 18.0858 22.75 18.5 22.75C18.9142 22.75 19.25 22.4142 19.25 22V20Z',
  d20: 'M17.9145 6.25001C17.5138 6.2499 17.0598 6.24978 16.6696 6.30224C16.608 6.31052 16.5772 6.31466 16.5643 6.31527C16.3904 6.32358 16.266 6.21485 16.2511 6.04136C16.25 6.02851 16.25 6.00436 16.25 5.95607V5.47825C16.25 5.264 16.25 5.0671 16.2613 4.90179C16.2734 4.72415 16.301 4.52881 16.3832 4.33031C16.5608 3.90151 16.9015 3.56083 17.3303 3.38321C17.5288 3.30099 17.7242 3.27338 17.9018 3.26126C18.0671 3.24998 18.2639 3.24999 18.4782 3.25H18.5218C18.736 3.24999 18.9329 3.24998 19.0982 3.26126C19.2759 3.27338 19.4712 3.30099 19.6697 3.38321C20.0985 3.56083 20.4392 3.90151 20.6168 4.33031C20.699 4.52881 20.7266 4.72415 20.7387 4.90179C20.75 5.06712 20.75 5.26396 20.75 5.47823L20.75 5.9561C20.75 6.00436 20.75 6.02849 20.7489 6.04133C20.734 6.21484 20.6096 6.32359 20.4357 6.31527C20.4228 6.31465 20.392 6.31051 20.3305 6.30224C19.9403 6.24978 19.4862 6.2499 19.0855 6.25001H17.9145Z',
  d21: 'M19.0448 7.25C19.4776 7.24995 19.8744 7.24991 20.1972 7.29331C20.5527 7.3411 20.9284 7.45355 21.2374 7.76257C21.5465 8.07159 21.6589 8.44732 21.7067 8.8028C21.7501 9.12561 21.7501 9.52245 21.75 9.95526C21.75 10.0041 21.75 10.0285 21.7489 10.0413C21.734 10.2148 21.6096 10.3236 21.4357 10.3153C21.4228 10.3146 21.392 10.3105 21.3305 10.3022C20.9403 10.2498 20.4862 10.2499 20.0855 10.25H16.9145C16.5138 10.2499 16.0598 10.2498 15.6696 10.3022C15.608 10.3105 15.5772 10.3146 15.5643 10.3153C15.3904 10.3236 15.266 10.2148 15.2511 10.0413C15.25 10.0285 15.25 10.0041 15.25 9.95526C15.25 9.52244 15.2499 9.12561 15.2933 8.8028C15.3411 8.44732 15.4535 8.07159 15.7626 7.76257C16.0716 7.45355 16.4473 7.3411 16.8028 7.29331C17.1256 7.24991 17.5224 7.24995 17.9553 7.25H19.0448Z',
  d22: 'M5.5 1.25C5.91421 1.25 6.25 1.58579 6.25 2V4C6.25 4.41421 5.91421 4.75 5.5 4.75C5.08579 4.75 4.75 4.41421 4.75 4V2C4.75 1.58579 5.08579 1.25 5.5 1.25Z',
  d23: 'M7.04475 11.25H3.95526C3.52244 11.2499 3.12561 11.2499 2.8028 11.2933C2.44732 11.3411 2.07159 11.4535 1.76257 11.7626C1.45355 12.0716 1.3411 12.4473 1.29331 12.8028C1.24991 13.1256 1.24995 13.5224 1.25 13.9553L1.25001 21.75C1.25001 22.2214 1.25001 22.4571 1.39645 22.6036C1.5429 22.75 1.7786 22.75 2.25001 22.75H8.75001C9.22141 22.75 9.45711 22.75 9.60356 22.6036C9.75001 22.4571 9.75001 22.2214 9.75001 21.75L9.75001 13.9553V13.9552V13.9552C9.75006 13.5224 9.75011 13.1256 9.70671 12.8028C9.65891 12.4473 9.54647 12.0716 9.23744 11.7626C8.92842 11.4535 8.55269 11.3411 8.19721 11.2933C7.8744 11.2499 7.47757 11.2499 7.04475 11.25ZM6.25 20C6.25 19.5858 5.91421 19.25 5.5 19.25C5.08579 19.25 4.75 19.5858 4.75 20V22C4.75 22.4142 5.08579 22.75 5.5 22.75C5.91421 22.75 6.25 22.4142 6.25 22V20Z',
  d24: 'M4.91452 6.25001C4.51384 6.2499 4.05978 6.24978 3.66957 6.30224C3.60799 6.31052 3.57719 6.31466 3.56431 6.31527C3.39038 6.32358 3.26605 6.21485 3.25111 6.04136C3.25 6.02851 3.25 6.00436 3.25 5.95607V5.47825C3.24999 5.264 3.24998 5.0671 3.26126 4.90179C3.27338 4.72415 3.30099 4.52881 3.38321 4.33031C3.56083 3.90151 3.90151 3.56083 4.33031 3.38321C4.52881 3.30099 4.72415 3.27338 4.90179 3.26126C5.06711 3.24998 5.26394 3.24999 5.4782 3.25H5.52176C5.73602 3.24999 5.9329 3.24998 6.09821 3.26126C6.27586 3.27338 6.4712 3.30099 6.6697 3.38321C7.0985 3.56083 7.43918 3.90151 7.61679 4.33031C7.69902 4.52881 7.72663 4.72415 7.73875 4.90179C7.75003 5.06712 7.75002 5.26396 7.75 5.47823L7.75 5.9561C7.75 6.00436 7.75 6.02849 7.7489 6.04133C7.73397 6.21484 7.60962 6.32359 7.43567 6.31527C7.4228 6.31465 7.39202 6.31051 7.33048 6.30224C6.94027 6.24978 6.48621 6.2499 6.08553 6.25001H4.91452Z',
  d25: 'M6.04476 7.25C6.47757 7.24995 6.8744 7.24991 7.19721 7.29331C7.55269 7.3411 7.92842 7.45355 8.23744 7.76257C8.54647 8.07159 8.65891 8.44732 8.70671 8.8028C8.75011 9.12561 8.75006 9.52245 8.75001 9.95526C8.75001 10.0041 8.75001 10.0285 8.7489 10.0413C8.73397 10.2148 8.60963 10.3236 8.43568 10.3153C8.42281 10.3146 8.39203 10.3105 8.33047 10.3022C7.94026 10.2498 7.4862 10.2499 7.08551 10.25H3.91451C3.51383 10.2499 3.05977 10.2498 2.66956 10.3022C2.60799 10.3105 2.5772 10.3146 2.56432 10.3153C2.39038 10.3236 2.26605 10.2148 2.25111 10.0413C2.25 10.0285 2.25 10.0041 2.25 9.95526C2.24995 9.52244 2.24991 9.12561 2.29331 8.8028C2.3411 8.44732 2.45355 8.07159 2.76257 7.76257C3.07159 7.45355 3.44732 7.3411 3.8028 7.29331C4.12561 7.24991 4.52244 7.24995 4.95526 7.25H6.04476Z',
  d26: 'M8.24998 14C8.24998 13.5858 8.58577 13.25 8.99998 13.25H15C15.4142 13.25 15.75 13.5858 15.75 14C15.75 14.4142 15.4142 14.75 15 14.75H12.75L15.6 18.55C15.8485 18.8814 15.7814 19.3515 15.45 19.6C15.1186 19.8485 14.6485 19.7814 14.4 19.45L12 16.25L9.59998 19.45C9.35145 19.7814 8.88135 19.8485 8.54998 19.6C8.21861 19.3515 8.15145 18.8814 8.39998 18.55L11.25 14.75H8.99998C8.58577 14.75 8.24998 14.4142 8.24998 14Z',
  d27: 'M1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22Z',
  d28: 'M16.9553 11.25H20.0448C20.4776 11.25 20.8744 11.2499 21.1972 11.2933C21.5527 11.3411 21.9284 11.4535 22.2374 11.7626C22.5465 12.0716 22.6589 12.4473 22.7067 12.8028C22.7501 13.1256 22.7501 13.5224 22.75 13.9553V13.9553L22.75 22.75H14.25L14.25 13.9553C14.25 13.5224 14.2499 13.1256 14.2933 12.8028C14.3411 12.4473 14.4535 12.0716 14.7626 11.7626C15.0716 11.4535 15.4473 11.3411 15.8028 11.2933C16.1256 11.2499 16.5224 11.25 16.9553 11.25Z',
  d29: 'M18.5 19.25C18.9142 19.25 19.25 19.5858 19.25 20V22C19.25 22.4142 18.9142 22.75 18.5 22.75C18.0858 22.75 17.75 22.4142 17.75 22V20C17.75 19.5858 18.0858 19.25 18.5 19.25Z',
  d30: 'M3.95526 11.25H7.04475C7.47757 11.25 7.8744 11.2499 8.19721 11.2933C8.55269 11.3411 8.92842 11.4535 9.23744 11.7626C9.54647 12.0716 9.65891 12.4473 9.70671 12.8028C9.75011 13.1256 9.75006 13.5224 9.75001 13.9553V13.9553L9.75001 22.75H1.25001L1.25 13.9553C1.24995 13.5224 1.24991 13.1256 1.29331 12.8028C1.3411 12.4473 1.45355 12.0716 1.76257 11.7626C2.07159 11.4535 2.44732 11.3411 2.8028 11.2933C3.12561 11.2499 3.52244 11.25 3.95526 11.25Z',
  d31: 'M9.75042 16.75L9.75042 19.25L12.0005 16.25L14.2504 19.2499L14.2504 16.7499L12.7505 14.75H14.2504V13.9553C14.2504 13.7058 14.2504 13.4683 14.2586 13.25H9.74219C9.75048 13.4683 9.75045 13.7058 9.75042 13.9552V14.75H11.2505L9.75042 16.75Z',
  d32: 'M5.5 19.25C5.91421 19.25 6.25 19.5858 6.25 20V22C6.25 22.4142 5.91421 22.75 5.5 22.75C5.08579 22.75 4.75 22.4142 4.75 22V20C4.75 19.5858 5.08579 19.25 5.5 19.25Z',
  d33: 'M4.75 3.27588C4.80176 3.26928 4.85246 3.26472 4.90179 3.26136C5.06711 3.25008 5.26394 3.25009 5.4782 3.2501H5.4782H5.52176H5.52176C5.73602 3.25009 5.9329 3.25008 6.09821 3.26136C6.14755 3.26472 6.19825 3.26928 6.25 3.27588V2.0001C6.25 1.58589 5.91421 1.2501 5.5 1.2501C5.08579 1.2501 4.75 1.58589 4.75 2.0001V3.27588ZM17.75 3.27588C17.8018 3.26928 17.8525 3.26472 17.9018 3.26136C18.0671 3.25008 18.2639 3.25009 18.4782 3.2501H18.5218C18.736 3.25009 18.9329 3.25008 19.0982 3.26136C19.1475 3.26472 19.1982 3.26928 19.25 3.27588V2.0001C19.25 1.58589 18.9142 1.2501 18.5 1.2501C18.0858 1.2501 17.75 1.58589 17.75 2.0001V3.27588Z',
  d34: 'M9.05725 19L12.0385 15L15.0198 19M9.05725 14H15.0198',
  d35: 'M3.09485 12V8H8.06367V12',
  d36: 'M4.0885 8V4H7.06979V8',
  d37: 'M5.57922 4V2',
  d38: 'M16.1017 12V8H21.1017V12',
  d39: 'M17.0074 8V4H19.9887V8',
  d40: 'M18.4982 4V2',
  d41: 'M5.57922 22V19',
  d42: 'M18.4982 22V19',
  d43: 'M14.9983 22V12.01C14.9983 12.0045 15.0028 12 15.0083 12H21.988C21.9935 12 21.9979 12.0045 21.9979 12.01V22H14.9983ZM14.9983 22H9.87479M9.00167 22V12.01C9.00167 12.0045 8.99722 12 8.99173 12H2.01201C2.00652 12 2.00208 12.0045 2.00208 12.01V22H9.00167ZM9.00167 22H14.1252',
  d44: 'M2 11.25C1.58579 11.25 1.25 11.5858 1.25 12L1.25 22.75L22.75 22.75V12C22.75 11.5858 22.4142 11.25 22 11.25H15C14.5858 11.25 14.25 11.5858 14.25 12L14.25 21.25H9.75L9.75 12C9.75 11.5858 9.41421 11.25 9 11.25L2 11.25ZM17.5 19V21.25H19.5V19L17.5 19ZM4.5 19V21.25H6.5L6.5 19H4.5Z',
  d45: 'M11.25 14.75H9.00002V13.25H15V14.75H12.75L15.6 18.55L14.4 19.45L12 16.25L9.60002 19.45L8.40002 18.55L11.25 14.75Z',
  d46: 'M6.25 2V4H4.75V2H6.25Z',
  d47: 'M2.25 10.25H8.75V8C8.75 7.58579 8.41421 7.25 8 7.25H3C2.58579 7.25 2.25 7.58579 2.25 8V10.25Z',
  d48: 'M15.25 10.25H21.75V8C21.75 7.58579 21.4142 7.25 21 7.25H16C15.5858 7.25 15.25 7.58579 15.25 8V10.25Z',
  d49: 'M7.75 6.25V4C7.75 3.58579 7.41421 3.25 7 3.25H6.25V1.25H4.75V3.25H4C3.58579 3.25 3.25 3.58579 3.25 4V6.25H7.75Z',
  d50: 'M20.75 6.25V4C20.75 3.58579 20.4142 3.25 20 3.25H19.25V1.25H17.75V3.25H17C16.5858 3.25 16.25 3.58579 16.25 4V6.25H20.75Z',
} as const;

export const IconTwinTowerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twin-tower-stroke-rounded IconTwinTowerStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTwinTowerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twin-tower-duotone-rounded IconTwinTowerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d17} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTwinTowerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twin-tower-twotone-rounded IconTwinTowerTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTwinTowerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twin-tower-solid-rounded IconTwinTowerSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconTwinTowerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twin-tower-bulk-rounded IconTwinTowerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTwinTowerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twin-tower-stroke-sharp IconTwinTowerStrokeSharp"
    >
      <path 
        d={d.d34} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d35} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d36} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d37} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d38} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d39} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d40} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d41} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d42} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d43} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTwinTowerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="twin-tower-solid-sharp IconTwinTowerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d44} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d45} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d46} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d47} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d48} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d49} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d50} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTwinTower: TheIconSelfPack = {
  name: 'TwinTower',
  StrokeRounded: IconTwinTowerStrokeRounded,
  DuotoneRounded: IconTwinTowerDuotoneRounded,
  TwotoneRounded: IconTwinTowerTwotoneRounded,
  SolidRounded: IconTwinTowerSolidRounded,
  BulkRounded: IconTwinTowerBulkRounded,
  StrokeSharp: IconTwinTowerStrokeSharp,
  SolidSharp: IconTwinTowerSolidSharp,
};