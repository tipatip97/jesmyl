import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.36734 12.171L9.50123 14V4.25C9.50123 3.2835 10.2847 2.5 11.2512 2.5C12.2177 2.5 13.0012 3.2835 13.0012 4.25V9.5L15.9891 9.97757C17.9177 10.2669 18.8821 10.4115 19.5613 10.8184C20.6833 11.4906 21.4961 12.5 21.4961 13.9736C21.4961 15 21.2424 15.6886 20.6257 17.5387C20.2344 18.7127 20.0387 19.2996 19.7197 19.7643C19.1944 20.5293 18.4194 21.0878 17.5276 21.3442C16.9859 21.5 16.3672 21.5 15.1297 21.5H14.0808C12.4356 21.5 11.613 21.5 10.8807 21.1981C10.7494 21.144 10.621 21.0829 10.4962 21.0151C9.80014 20.6371 9.28143 19.9987 8.244 18.7219L4.8855 14.5883C4.36941 13.9531 4.36596 13.0441 4.87723 12.405C5.49174 11.6369 6.62046 11.5308 7.36734 12.171Z',
  d2: 'M20 4.5L16 4.5M20 4.5C20 5.06018 18.5057 6.10678 18 6.5M20 4.5C20 3.93982 18.5057 2.89322 18 2.5',
  d3: 'M2.5 4.5L6.5 4.5M2.5 4.5C2.5 3.93982 3.9943 2.89322 4.5 2.5M2.5 4.5C2.5 5.06018 3.9943 6.10678 4.5 6.5',
  d4: 'M8.87818 4.25C8.87818 2.86929 9.99747 1.75 11.3782 1.75C12.7589 1.75 13.8782 2.86929 13.8782 4.25V8.86036L16.2537 9.23982C17.1957 9.38112 17.9389 9.4926 18.5299 9.62099C19.1305 9.75147 19.6326 9.91078 20.0737 10.1751C21.3512 10.9404 22.373 12.1633 22.373 13.9736C22.373 15.0606 22.1106 15.8446 21.5957 17.3824C21.2418 18.4448 20.8446 19.6359 20.4649 20.1888C19.8411 21.0973 18.9209 21.7605 17.8618 22.065C17.2171 22.2504 16.4989 22.2503 15.3792 22.25L14.0496 22.25H14.0496C12.5572 22.2505 11.5932 22.2507 10.7218 21.8915C10.5659 21.8273 10.4135 21.7547 10.2652 21.6742C9.43697 21.2244 8.82933 20.4761 7.88853 19.3175L4.43037 15.0613C3.69173 14.1522 3.68681 12.8511 4.41853 11.9365C5.29802 10.8371 6.91345 10.6853 7.98239 11.6015L8.87818 12.3693V4.25Z',
  d5: 'M3.91657 7.0921C4.24356 7.34637 4.71476 7.28741 4.96902 6.96042C5.07556 6.82341 5.12707 6.66108 5.12695 6.5V5.49995L6.62695 5.49995C7.17924 5.49995 7.62695 5.05223 7.62695 4.49995C7.62695 3.94766 7.17924 3.49995 6.62695 3.49995H5.12695V2.5068C5.12853 2.34352 5.07705 2.17857 4.96902 2.03965C4.71476 1.71266 4.24356 1.6537 3.91657 1.90796C3.86452 1.94844 3.79443 2.00131 3.71171 2.0637L3.7117 2.06371C3.44398 2.26565 3.0439 2.56744 2.69444 2.87212C2.463 3.0739 2.22307 3.3025 2.03512 3.53496C1.94085 3.65156 1.8462 3.78548 1.77246 3.93173C1.70126 4.07295 1.62695 4.26987 1.62695 4.50003C1.62695 4.7302 1.70126 4.92712 1.77246 5.06834C1.8462 5.21459 1.94085 5.34851 2.03512 5.46511C2.22307 5.69756 2.463 5.92616 2.69444 6.12795C3.0439 6.43264 3.44398 6.73442 3.7117 6.93636C3.79442 6.99875 3.86452 7.05163 3.91657 7.0921Z',
  d6: 'M18.8373 7.0921C18.5103 7.34637 18.0391 7.28741 17.7849 6.96042C17.6783 6.82341 17.6268 6.66108 17.627 6.5V5.49995L16.127 5.49995C15.5747 5.49995 15.127 5.05223 15.127 4.49995C15.127 3.94766 15.5747 3.49995 16.127 3.49995H17.627V2.5068C17.6254 2.34352 17.6769 2.17857 17.7849 2.03965C18.0391 1.71266 18.5103 1.6537 18.8373 1.90796C18.8894 1.94844 18.9595 2.00131 19.0422 2.0637L19.0422 2.06371C19.3099 2.26565 19.71 2.56744 20.0595 2.87212C20.2909 3.0739 20.5308 3.3025 20.7188 3.53496C20.8131 3.65156 20.9077 3.78548 20.9814 3.93173C21.0526 4.07295 21.127 4.26987 21.127 4.50003C21.127 4.7302 21.0526 4.92712 20.9814 5.06834C20.9077 5.21459 20.8131 5.34851 20.7188 5.46511C20.5308 5.69756 20.2909 5.92616 20.0595 6.12795C19.71 6.43264 19.3099 6.73442 19.0422 6.93636C18.9595 6.99875 18.8894 7.05163 18.8373 7.0921Z',
  d7: 'M9.50514 14.5L9.01704 15.0694L10.2551 16.1307V14.5H9.50514ZM7.37124 12.671L7.85934 12.1015H7.85934L7.37124 12.671ZM4.88941 15.0883L5.51333 14.6721L5.49375 14.6428L5.47149 14.6154L4.88941 15.0883ZM9.5 22L8.87608 22.4162C9.0152 22.6247 9.24931 22.75 9.5 22.75V22ZM13.0051 10.4776H12.2551V11.2276H13.0051V10.4776ZM4.88114 12.905L4.29549 12.4365H4.29549L4.88114 12.905ZM9.99323 13.9306L7.85934 12.1015L6.88315 13.2404L9.01704 15.0694L9.99323 13.9306ZM4.26549 15.5045L8.87608 22.4162L10.1239 21.5838L5.51333 14.6721L4.26549 15.5045ZM10.2551 14.5V4.75H8.75514V14.5H10.2551ZM12.2551 4.75V10.4776H13.7551V4.75H12.2551ZM13.0051 11.2276H17.5V9.72758H13.0051V11.2276ZM17.5 21.25H9.5V22.75H17.5V21.25ZM11.2551 3.75C11.8074 3.75 12.2551 4.19772 12.2551 4.75H13.7551C13.7551 3.36929 12.6358 2.25 11.2551 2.25V3.75ZM10.2551 4.75C10.2551 4.19772 10.7029 3.75 11.2551 3.75V2.25C9.87442 2.25 8.75514 3.36929 8.75514 4.75H10.2551ZM4.29549 12.4365C3.56376 13.3511 3.56869 14.6522 4.30732 15.5613L5.47149 14.6154C5.17794 14.2541 5.17598 13.737 5.46679 13.3735L4.29549 12.4365ZM7.85934 12.1015C6.79041 11.1853 5.17497 11.3371 4.29549 12.4365L5.46679 13.3735C5.81632 12.9366 6.45833 12.8763 6.88315 13.2404L7.85934 12.1015ZM21.25 19V13.4776H19.75V19H21.25ZM17.5 22.75C19.5711 22.75 21.25 21.0711 21.25 19H19.75C19.75 20.2426 18.7426 21.25 17.5 21.25V22.75ZM17.5 11.2276C18.7426 11.2276 19.75 12.2349 19.75 13.4776H21.25C21.25 11.4065 19.5711 9.72758 17.5 9.72758V11.2276Z',
  d8: 'M15 4L19.3718 4M18 6L20 4C20 4 18.5057 2.39322 18 2',
  d9: 'M7.5 4L3.03999 4M4.5 2L2.5 4L4.5 6',
  d10: 'M9.50416 4.99988C9.50416 3.61917 10.6234 2.49988 12.0042 2.49988C13.3849 2.49988 14.5042 3.61917 14.5042 4.99988V9.97745H18.249C20.3201 9.97745 21.999 11.6564 21.999 13.7275V19.2499C21.999 21.3209 20.3201 22.9999 18.249 22.9999H10.249C9.99833 22.9999 9.76422 22.8746 9.6251 22.6661L5.03236 15.7812C4.31769 14.8736 4.32079 13.591 5.04451 12.6864C5.924 11.587 7.53943 11.4352 8.60836 12.3514L9.50416 13.1192V4.99988Z',
  d11: 'M18.7184 1.00012L17.4907 2.57897C17.6113 2.67276 17.8946 2.94464 18.2401 3.28955L15.6045 3.28955V5.28955L18.1903 5.28955L17.3974 6.08244L18.8116 7.49665L21.9996 4.30867L18.7184 1.00012Z',
  d12: 'M5.20665 0.999878L1.99985 4.20691L5.20696 7.41394L6.62117 5.99976L5.82828 5.20689H8.41406V3.20693H5.82828L6.62117 2.41406L5.20665 0.999878Z',
} as const;

export const IconDrag03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-03-stroke-rounded IconDrag03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDrag03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-03-duotone-rounded IconDrag03DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconDrag03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-03-twotone-rounded IconDrag03TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconDrag03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-03-solid-rounded IconDrag03SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconDrag03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-03-bulk-rounded IconDrag03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconDrag03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-03-stroke-sharp IconDrag03StrokeSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDrag03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-03-solid-sharp IconDrag03SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDrag03: TheIconSelfPack = {
  name: 'Drag03',
  StrokeRounded: IconDrag03StrokeRounded,
  DuotoneRounded: IconDrag03DuotoneRounded,
  TwotoneRounded: IconDrag03TwotoneRounded,
  SolidRounded: IconDrag03SolidRounded,
  BulkRounded: IconDrag03BulkRounded,
  StrokeSharp: IconDrag03StrokeSharp,
  SolidSharp: IconDrag03SolidSharp,
};