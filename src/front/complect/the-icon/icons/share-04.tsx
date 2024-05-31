import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.0257 2.99988C6.5113 3.49884 3 7.32559 3 11.9723C3 16.9581 7.04239 20.9999 12.0289 20.9999C16.668 20.9999 20.4898 17.5018 21 12.9999',
  d2: 'M20.9995 6.02517L20 6.02264C16.2634 6.01319 14.3951 6.00847 13.0817 6.95254C12.6452 7.26627 12.2622 7.64832 11.9474 8.084C11 9.39503 11 11.2633 11 14.9999M20.9995 6.02517C21.0062 5.86254 20.9481 5.69894 20.8251 5.55321C20.0599 4.64674 18.0711 2.99988 18.0711 2.99988M20.9995 6.02517C20.9934 6.171 20.9352 6.31604 20.8249 6.44669C20.0596 7.35298 18.0711 8.99988 18.0711 8.99988',
  d3: 'M12.0197 2.89023C12.0803 3.43917 11.6845 3.93336 11.1356 3.99403C7.1221 4.43763 4 7.84133 4 11.9725C4 16.4059 7.59453 20.0001 12.0289 20.0001C16.1536 20.0001 19.5528 16.8896 20.0064 12.8875C20.0685 12.3387 20.5638 11.9443 21.1126 12.0064C21.6614 12.0686 22.0558 12.5639 21.9936 13.1127C21.4268 18.1145 17.1823 22.0001 12.0289 22.0001C6.49024 22.0001 2 17.5107 2 11.9725C2 6.81028 5.9005 2.56047 10.9159 2.00614C11.4648 1.94547 11.959 2.34129 12.0197 2.89023Z',
  d4: 'M19.6081 3.0356C20.2431 3.57591 21.1096 4.34216 21.5887 4.90981C21.8534 5.22341 22.0164 5.62635 21.9981 6.06819C21.9818 6.4611 21.8247 6.81367 21.5885 7.09349C21.1094 7.66081 20.2432 8.42695 19.6084 8.96737C19.431 9.1183 19.2098 9.31028 19.0063 9.43653C18.8059 9.56081 18.3173 9.81455 17.7543 9.55444C17.1881 9.29288 17.0667 8.75128 17.0323 8.52111C16.9991 8.29937 16.9993 8.02807 16.9995 7.80097C16.9997 7.54937 16.9995 7.29778 16.9995 7.04618C16.5298 7.0616 16.1128 7.08652 15.7364 7.12615C14.7227 7.23289 14.1227 7.43709 13.6649 7.76617C13.3157 8.01715 13.0093 8.3228 12.7574 8.67134C12.4272 9.12833 12.2215 9.72778 12.1122 10.7412C12.0009 11.7732 11.9995 13.1111 11.9995 15.0015C11.9995 15.5538 11.5518 16.0015 10.9995 16.0015C10.4472 16.0015 9.9995 15.5538 9.9995 15.0015C9.99949 13.513 9.9638 12.0092 10.1237 10.5268C10.2512 9.34416 10.5192 8.35396 11.1364 7.49992C11.5142 6.97711 11.9738 6.51864 12.4976 6.14216C13.3532 5.52717 14.344 5.2617 15.527 5.13714C15.9724 5.09025 16.4617 5.06203 16.9995 5.04532C16.9995 4.76427 16.9997 4.48322 16.9995 4.20217C16.9993 3.97514 16.9991 3.70389 17.0323 3.48217C17.0667 3.25197 17.1882 2.71049 17.7542 2.44894C18.3171 2.18882 18.8057 2.44238 19.0061 2.56664C19.2096 2.69285 19.4308 2.88476 19.6081 3.0356Z',
  d5: 'M21 12C21 16.9705 16.9706 21 12 21C7.02944 21 3 16.9705 3 12C3 7.02943 7.02944 3 12 3',
  d6: 'M17.9997 3.99048L20.9998 7.0002L18.0095 10.0084M11.0059 15.0002V7.03753C11.0059 7.03203 11.0103 7.02756 11.0158 7.02753L15.9558 7.0002H20.3968',
  d7: 'M12 3.99988C7.58172 3.99988 4 7.5816 4 11.9999C4 16.4182 7.58172 19.9999 12 19.9999C16.4183 19.9999 20 16.4182 20 11.9999H22C22 17.5227 17.5228 21.9999 12 21.9999C6.47715 21.9999 2 17.5227 2 11.9999C2 6.47703 6.47715 1.99988 12 1.99988V3.99988Z',
  d8: 'M18.293 3.29285L22.0002 6.99995L18.293 10.7071L16.8788 9.29285L18.1662 8.00546L11.5859 8.02044V15H9.58594V7.02272C9.58594 6.47132 10.0323 6.02397 10.5837 6.02272L18.1772 6.00543L16.8788 4.70706L18.293 3.29285Z',
} as const;

export const IconShare04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-04-stroke-rounded IconShare04StrokeRounded"
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

export const IconShare04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-04-duotone-rounded IconShare04DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="11.9999" 
        r="9" 
        fill="var(--icon-fill)"></circle>
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

export const IconShare04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-04-twotone-rounded IconShare04TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShare04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-04-solid-rounded IconShare04SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-04-bulk-rounded IconShare04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-04-stroke-sharp IconShare04StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-04-solid-sharp IconShare04SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfShare04: TheIconSelfPack = {
  name: 'Share04',
  StrokeRounded: IconShare04StrokeRounded,
  DuotoneRounded: IconShare04DuotoneRounded,
  TwotoneRounded: IconShare04TwotoneRounded,
  SolidRounded: IconShare04SolidRounded,
  BulkRounded: IconShare04BulkRounded,
  StrokeSharp: IconShare04StrokeSharp,
  SolidSharp: IconShare04SolidSharp,
};