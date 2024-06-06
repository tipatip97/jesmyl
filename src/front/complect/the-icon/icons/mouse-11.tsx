import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 5.5V2M12.5 12V9',
  d2: 'M12.5 22C18.5 22 20 17.49 20 12C20 6.50998 18.5 2 12.5 2C6.49993 2 5 6.50996 5 12C5 17.49 6.49993 22 12.5 22Z',
  d3: 'M14 7C14 6.53406 14 6.30109 13.9239 6.11732C13.8224 5.87229 13.6277 5.67761 13.3827 5.57612C13.1989 5.5 12.9659 5.5 12.5 5.5C12.0341 5.5 11.8011 5.5 11.6173 5.57612C11.3723 5.67761 11.1776 5.87229 11.0761 6.11732C11 6.30109 11 6.53406 11 7V7.5C11 7.96594 11 8.19891 11.0761 8.38268C11.1776 8.62771 11.3723 8.82239 11.6173 8.92388C11.8011 9 12.0341 9 12.5 9C12.9659 9 13.1989 9 13.3827 8.92388C13.6277 8.82239 13.8224 8.62771 13.9239 8.38268C14 8.19891 14 7.96594 14 7.5V7Z',
  d4: 'M5.5 12H19.5',
  d5: 'M12.5 22C6.49993 22 5 17.49 5 12H20C20 17.49 18.5 22 12.5 22Z',
  d6: 'M12.0218 4.75H12H11.9782H11.9782C11.7639 4.74999 11.5671 4.74998 11.4018 4.76126C11.2241 4.77338 11.0288 4.80099 10.8303 4.88321C10.4015 5.06083 10.0608 5.40151 9.88321 5.83031C9.80099 6.02881 9.77337 6.22415 9.76125 6.40179C9.74997 6.56712 9.74998 6.76396 9.75 6.97824V7.52176C9.74998 7.73604 9.74997 7.93289 9.76125 8.09821C9.77337 8.27585 9.80099 8.47119 9.88321 8.6697C10.0608 9.0985 10.4015 9.43918 10.8303 9.61679C11.0288 9.69901 11.2241 9.72663 11.4018 9.73875C11.5671 9.75003 11.764 9.75002 11.9782 9.75H12.0218C12.236 9.75002 12.4329 9.75003 12.5982 9.73875C12.7759 9.72663 12.9712 9.69901 13.1697 9.61679C13.5985 9.43918 13.9392 9.0985 14.1168 8.6697C14.199 8.47119 14.2266 8.27585 14.2387 8.09821C14.25 7.9329 14.25 7.73606 14.25 7.5218V7.52176V6.97825V6.9782C14.25 6.76394 14.25 6.56711 14.2387 6.40179C14.2266 6.22415 14.199 6.02881 14.1168 5.83031C13.9392 5.40151 13.5985 5.06083 13.1697 4.88321C12.9712 4.80099 12.7759 4.77338 12.5982 4.76126C12.4329 4.74998 12.2361 4.74999 12.0218 4.75H12.0218Z',
  d7: 'M12 1.25C8.79941 1.25 6.64401 2.48858 5.35163 4.58654C4.11376 6.59603 3.75 9.26561 3.75 12C3.75 14.7344 4.11376 17.404 5.35163 19.4135C6.64401 21.5114 8.79941 22.75 12 22.75C15.2005 22.75 17.3559 21.5114 18.6483 19.4135C19.8862 17.404 20.25 14.7344 20.25 12C20.25 9.26561 19.8862 6.59603 18.6483 4.58655C17.3559 2.48859 15.2005 1.25 12 1.25ZM10.9996 10.65C10.9996 10.9329 10.9996 11.0743 10.9118 11.1621C10.8239 11.25 10.6825 11.25 10.3996 11.25H6.31844C6.02654 11.25 5.88059 11.25 5.79182 11.1562C5.70306 11.0624 5.71097 10.9193 5.72679 10.6332C5.83922 8.59996 6.22368 6.87844 7.00087 5.61679C7.68376 4.50823 8.71458 3.68249 10.3387 3.35682C10.6328 3.29785 10.7799 3.26836 10.8898 3.35838C10.9996 3.4484 10.9996 3.60704 10.9996 3.92433V5.50003C10.9996 6.05232 11.4473 6.50003 11.9996 6.50003C12.5519 6.50003 12.9996 6.05232 12.9996 5.50003V3.92434C12.9996 3.60705 12.9996 3.44841 13.1095 3.35839C13.2193 3.26837 13.3664 3.29786 13.6605 3.35684C15.2846 3.68252 16.3154 4.50825 16.9983 5.6168C17.7755 6.87846 18.16 8.59998 18.2724 10.6332C18.2883 10.9193 18.2962 11.0624 18.2074 11.1562C18.1187 11.25 17.9727 11.25 17.6808 11.25H13.5996C13.3168 11.25 13.1754 11.25 13.0875 11.1621C12.9996 11.0743 12.9996 10.9329 12.9996 10.65V9.00003C12.9996 8.44775 12.5519 8.00003 11.9996 8.00003C11.4473 8.00003 10.9996 8.44775 10.9996 9.00003V10.65Z',
  d8: 'M14 5.5H11V9H14V5.5Z',
  d9: 'M5.35163 4.58654C6.64401 2.48858 8.79941 1.25 12 1.25C15.2005 1.25 17.3559 2.48859 18.6483 4.58655C19.8862 6.59603 20.25 9.26561 20.25 12C20.25 14.7344 19.8862 17.404 18.6483 19.4135C17.3559 21.5114 15.2005 22.75 12 22.75C8.79941 22.75 6.64401 21.5114 5.35163 19.4135C4.11376 17.404 3.75 14.7344 3.75 12C3.75 9.26561 4.11376 6.59603 5.35163 4.58654ZM7.00029 5.61667C6.17678 6.95351 5.79421 8.80667 5.70898 10.9999H10.999V9.49989H10.499C10.0848 9.49989 9.74904 9.1641 9.74904 8.74989V5.74989C9.74904 5.33567 10.0848 4.99989 10.499 4.99989H10.999V3.25586C8.98663 3.47338 7.77156 4.36464 7.00029 5.61667ZM18.2891 10.9999C18.2039 8.80669 17.8213 6.95353 16.9978 5.61668C16.2265 4.36466 15.0114 3.4734 12.999 3.25587V4.99989H13.499C13.9133 4.99989 14.249 5.33567 14.249 5.74989V8.74989C14.249 9.1641 13.9133 9.49989 13.499 9.49989H12.999V10.9999H18.2891Z',
} as const;

export const IconMouse11StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-11-stroke-rounded IconMouse11StrokeRounded"
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

export const IconMouse11DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-11-duotone-rounded IconMouse11DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconMouse11TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-11-twotone-rounded IconMouse11TwotoneRounded"
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

export const IconMouse11SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-11-solid-rounded IconMouse11SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconMouse11BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-11-bulk-rounded IconMouse11BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMouse11StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-11-stroke-sharp IconMouse11StrokeSharp"
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
        d={d.d8} 
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
    </TheIconWrapper>
  );
};

export const IconMouse11SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-11-solid-sharp IconMouse11SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouse11: TheIconSelfPack = {
  name: 'Mouse11',
  StrokeRounded: IconMouse11StrokeRounded,
  DuotoneRounded: IconMouse11DuotoneRounded,
  TwotoneRounded: IconMouse11TwotoneRounded,
  SolidRounded: IconMouse11SolidRounded,
  BulkRounded: IconMouse11BulkRounded,
  StrokeSharp: IconMouse11StrokeSharp,
  SolidSharp: IconMouse11SolidSharp,
};