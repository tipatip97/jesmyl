import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 2.09084C12.8345 2.02383 12.1611 2 11.5 2C10.5753 2 9.66267 2.07762 8.7651 2.1882C6.32417 2.48893 4.43061 4.51965 4.24069 6.91118C4.10906 8.56832 4 10.268 4 12C4 13.732 4.10906 15.4317 4.24069 17.0888C4.43061 19.4803 6.32417 21.511 8.7651 21.8118C9.66267 21.9223 10.5753 22 11.5 22C12.4248 22 13.3374 21.9223 14.235 21.8118C16.6758 21.511 18.5695 19.4803 18.7594 17.0888C18.891 15.4317 19 13.732 19 12C19 11.3283 18.9836 10.6614 18.9558 10',
  d2: 'M11.5 2L11.5 11',
  d3: 'M18.5 11H4.5',
  d4: 'M8.76502 21.8118C6.32417 21.511 4.43047 19.4803 4.24061 17.0888C4.10903 15.4317 4 13.732 4 12C4 11.6654 4.00407 11.3321 4.01158 11H18.9884C18.9959 11.3321 19 11.6654 19 12C19 13.732 18.8909 15.4317 18.7593 17.0888C18.5694 19.4803 16.6758 21.511 14.2349 21.8118C13.3373 21.9223 12.4247 22 11.5 22C10.5752 22 9.6626 21.9223 8.76502 21.8118Z',
  d5: 'M21 5C21 3.20507 19.5449 1.75 17.75 1.75C15.9551 1.75 14.5 3.20507 14.5 5C14.5 6.79493 15.9551 8.25 17.75 8.25C19.5449 8.25 21 6.79493 21 5Z',
  d6: 'M13.2884 1.34369C12.6015 1.27405 11.9139 1.25 11.25 1.25C10.2993 1.25 9.37128 1.3303 8.47686 1.44126C5.64383 1.7927 3.45699 4.15593 3.23666 6.94946C3.10827 8.57698 3 10.2685 3 12C3 13.7315 3.10827 15.423 3.23666 17.0506C3.45699 19.8441 5.64397 22.2072 8.47695 22.5588C9.37126 22.6696 10.2993 22.75 11.25 22.75C12.2008 22.75 13.1289 22.6696 14.0233 22.5588C16.8561 22.2072 19.0432 19.8441 19.2634 17.0505C19.3918 15.423 19.5 13.7315 19.5 12C19.5 11.3277 19.4837 10.6622 19.4563 10.0045C19.4338 9.46522 18.9814 9.04641 18.4459 9.06904C17.9103 9.09167 17.4943 9.54717 17.5168 10.0864C17.5204 10.1757 17.449 10.25 17.3597 10.25H12.85C12.5672 10.25 12.4257 10.25 12.3379 10.1621C12.25 10.0743 12.25 9.93284 12.25 9.65V3.85574C12.25 3.55804 12.25 3.4092 12.3472 3.32003C12.4443 3.23087 12.5887 3.2433 12.8776 3.26815C12.9499 3.27437 13.022 3.28111 13.0939 3.28841C13.6273 3.34248 14.1032 2.95097 14.1569 2.41396C14.2106 1.87694 13.8218 1.39777 13.2884 1.34369ZM5.60026 10.25C5.30667 10.25 5.15988 10.25 5.0712 10.1568C4.98252 10.0636 4.98975 9.91803 5.00421 9.62695C5.04628 8.7805 5.10582 7.93975 5.17174 7.1042C5.32008 5.22337 6.80897 3.61746 8.71423 3.38111C9.01492 3.34381 9.31506 3.31076 9.61488 3.28363C9.90809 3.2571 10.0547 3.24383 10.1523 3.33305C10.25 3.42226 10.25 3.57236 10.25 3.87256V9.64998C10.25 9.93282 10.25 10.0742 10.1621 10.1621C10.0743 10.25 9.93284 10.25 9.65 10.25H5.60026Z',
  d7: 'M11.5 2V11',
  d8: 'M17.5 7.5C16.1193 7.5 15 6.38071 15 5C15 3.61929 16.1193 2.5 17.5 2.5C18.8807 2.5 20 3.61929 20 5C20 6.38071 18.8807 7.5 17.5 7.5Z',
  d9: 'M3.99572 11.0002C3.99572 12.7322 4.11732 15.4319 4.24883 17.089C4.4386 19.4805 6.3309 21.5112 8.77012 21.812C9.6671 21.9225 10.5791 22.0002 11.5031 22.0002C12.4273 22.0002 13.3392 21.9225 14.2362 21.812C16.6754 21.5112 18.5678 19.4805 18.7575 17.089C18.8721 15.6444 19.0758 12.9082 18.9782 11.0002M3.99572 11.0002C3.99572 9.26818 4.11732 8.56855 4.24883 6.91141C4.4386 4.51988 6.3309 2.48916 8.77012 2.18843C9.6671 2.07785 10.5791 2.00023 11.5031 2.00023C12.4273 2.00023 12.6105 1.9903 13.5074 2.10088M3.99572 11.0002H18.9782M18.9827 10.2569C18.9827 10.479 18.9812 10.7292 18.9782 11.0002',
  d10: 'M21.25 4.25C21.25 2.59315 19.9069 1.25 18.25 1.25C16.5931 1.25 15.25 2.59315 15.25 4.25C15.25 5.90685 16.5931 7.25 18.25 7.25C19.9069 7.25 21.25 5.90685 21.25 4.25Z',
  d11: 'M19.1359 8.66283C19.1837 9.43136 19.2208 10.2115 19.2385 11.0006C19.246 11.332 19.25 11.6651 19.25 12C19.25 13.7315 19.1417 15.423 19.0133 17.0505C18.793 19.8441 16.6061 22.2072 13.7731 22.5588C12.8788 22.6696 11.9507 22.75 11 22.75C10.0493 22.75 9.1211 22.6696 8.22679 22.5588C5.39383 22.2072 3.20699 19.8441 2.98666 17.0506C2.85827 15.423 2.75 13.7315 2.75 12C2.75 11.6651 2.75405 11.332 2.76149 11.0006C2.79257 9.61792 2.88304 8.263 2.98666 6.94946C3.20699 4.15593 5.39381 1.7927 8.22683 1.44126C9.12125 1.3303 10.0493 1.25 11 1.25C11.9507 1.25 12.8788 1.3303 13.7732 1.44126C14.0583 1.47663 14.3369 1.53238 14.6076 1.6069C14.2216 2.13793 13.9489 2.75663 13.825 3.4275C13.7299 3.40842 13.6337 3.39277 13.5363 3.38069C13.023 3.31701 12.5113 3.26571 12 3.23514V10.045H17.2656C17.2454 9.5695 17.2192 9.09593 17.1889 8.62417C17.5291 8.70642 17.8845 8.75 18.25 8.75C18.5532 8.75 18.8494 8.72001 19.1359 8.66283ZM10 10.045V3.2352C9.48907 3.26578 8.97771 3.31705 8.46472 3.38069C6.55947 3.61704 5.07059 5.22295 4.92225 7.10378C4.84551 8.07659 4.77737 9.05659 4.73543 10.045H10Z',
} as const;

export const IconMouseRightClick02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-02-stroke-rounded IconMouseRightClick02StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 20 2.5)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconMouseRightClick02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-02-duotone-rounded IconMouseRightClick02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 20 2.5)" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 20 2.5)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconMouseRightClick02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-02-twotone-rounded IconMouseRightClick02TwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 20 2.5)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconMouseRightClick02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-02-solid-rounded IconMouseRightClick02SolidRounded"
    >
      <path 
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

export const IconMouseRightClick02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-02-bulk-rounded IconMouseRightClick02BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-02-stroke-sharp IconMouseRightClick02StrokeSharp"
    >
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
    </TheIconWrapper>
  );
};

export const IconMouseRightClick02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-02-solid-sharp IconMouseRightClick02SolidSharp"
    >
      <path 
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

export const iconPackOfMouseRightClick02: TheIconSelfPack = {
  name: 'MouseRightClick02',
  StrokeRounded: IconMouseRightClick02StrokeRounded,
  DuotoneRounded: IconMouseRightClick02DuotoneRounded,
  TwotoneRounded: IconMouseRightClick02TwotoneRounded,
  SolidRounded: IconMouseRightClick02SolidRounded,
  BulkRounded: IconMouseRightClick02BulkRounded,
  StrokeSharp: IconMouseRightClick02StrokeSharp,
  SolidSharp: IconMouseRightClick02SolidSharp,
};