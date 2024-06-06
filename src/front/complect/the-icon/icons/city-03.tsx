import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 16.7033C13 15.7854 13 15.3265 13.2034 14.9292C13.4067 14.5319 13.7859 14.2501 14.5442 13.6866L15.0442 13.315C16.2239 12.4383 16.8138 12 17.5 12C18.1862 12 18.7761 12.4383 19.9558 13.315L20.4558 13.6866C21.2141 14.2501 21.5933 14.5319 21.7966 14.9292C22 15.3265 22 15.7854 22 16.7033V18.1782C22 19.9798 22 20.8806 21.4142 21.4403C20.8284 22 19.8856 22 18 22H13V16.7033Z',
  d2: 'M18 12.0002V5C18 2.518 17.482 2 15 2H11C8.518 2 8 2.518 8 5V22',
  d3: 'M3.5 16V22',
  d4: 'M2 22H20',
  d5: 'M12 6H14M12 9H14',
  d6: 'M17.5 22L17.5 20',
  d7: 'M13.2034 14.9292C13 15.3265 13 15.7854 13 16.7033V22L8 22V5C8 2.518 8.518 2 11 2H15C17.482 2 18 2.518 18 5V12.0798C17.8323 12.0266 17.6691 12 17.5 12C16.8138 12 16.2239 12.4383 15.0442 13.315L14.5442 13.6866C13.7859 14.2501 13.4067 14.5319 13.2034 14.9292Z',
  d8: 'M4.25 16.5962L4.25 22C4.25 22.4142 3.91421 22.75 3.5 22.75C3.08579 22.75 2.75 22.4142 2.75 22L2.75 16.5962C2.38201 16.4392 2.07239 16.1749 1.83934 15.8642C1.46151 15.3604 1.25 14.6989 1.25 14C1.25 13.3011 1.46151 12.6396 1.83934 12.1358C2.21734 11.6318 2.79679 11.25 3.5 11.25C4.20321 11.25 4.78266 11.6318 5.16066 12.1358C5.53849 12.6396 5.75 13.3011 5.75 14C5.75 14.6989 5.53849 15.3604 5.16066 15.8642C4.92761 16.1749 4.61799 16.4392 4.25 16.5962Z',
  d9: 'M1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H20C20.4142 21.25 20.75 21.5858 20.75 22C20.75 22.4142 20.4142 22.75 20 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22Z',
  d10: 'M17.5002 11.25C16.9787 11.25 16.5285 11.4224 16.0832 11.6788C15.6642 11.92 15.1921 12.2709 14.6316 12.6874L14.0729 13.1026C13.7144 13.369 13.4079 13.5967 13.1685 13.8089C12.9135 14.0349 12.6953 14.2762 12.536 14.5874C12.2483 15.1495 12.2491 15.7847 12.2501 16.5619L12.2502 22C12.2502 22.4142 12.586 22.75 13.0002 22.75H17.5C16.9477 22.75 16.5 22.3023 16.5 21.75V19.75C16.5 19.1977 16.9477 18.75 17.5 18.75C18.0523 18.75 18.5 19.1977 18.5 19.75V21.75C18.5 22.3023 18.0523 22.75 17.5 22.75H18.0503H18.0504C18.9505 22.75 19.6978 22.75 20.2903 22.6739C20.9121 22.5941 21.476 22.4188 21.9326 21.9826C22.3939 21.5418 22.5839 20.9894 22.6697 20.3795C22.7503 19.8067 22.7503 19.0868 22.7502 18.2317L22.7504 16.5619C22.7514 15.7847 22.7522 15.1495 22.4645 14.5874C22.3052 14.2762 22.0869 14.0349 21.832 13.8089C21.5926 13.5967 21.2861 13.369 20.9275 13.1026L20.3689 12.6874L20.3689 12.6874L20.3688 12.6874C19.8084 12.2709 19.3363 11.92 18.9173 11.6788C18.472 11.4224 18.0218 11.25 17.5002 11.25Z',
  d11: 'M17.5002 10C16.6812 10 16.0123 10.2773 15.4596 10.5955C14.9765 10.8736 14.4544 11.2616 13.9293 11.6519C13.909 11.6673 13.8854 11.6851 13.859 11.7051C13.4756 11.9947 12.4946 12.7359 12.3394 12.8734C12.0178 13.1584 11.6786 13.5191 11.4233 14.0178C10.9948 14.8549 10.9977 15.7655 10.9998 16.4557L11.0001 16.5628L11.0002 22.15C11.0002 22.4328 11.0002 22.5743 10.9124 22.6621C10.8245 22.75 10.6831 22.75 10.4002 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22L7.25 5C7.25 4.36327 7.28223 3.80099 7.38719 3.32323C7.49401 2.83699 7.68612 2.39173 8.03892 2.03892C8.39172 1.68612 8.83699 1.49401 9.32323 1.38719C9.80098 1.28224 10.3633 1.25 11 1.25H15C15.6367 1.25 16.199 1.28224 16.6768 1.38719C17.163 1.49401 17.6083 1.68612 17.9611 2.03892C18.3139 2.39173 18.506 2.83699 18.6128 3.32323C18.7178 3.80099 18.75 4.36327 18.75 5V9.36889C18.75 9.7363 18.75 9.92001 18.6493 10.0095C18.5485 10.099 18.3395 10.0743 17.9214 10.0248C17.7856 10.0087 17.6453 10 17.5002 10ZM12 4.25C11.5858 4.25 11.25 4.58579 11.25 5C11.25 5.41422 11.5858 5.75 12 5.75H14C14.4142 5.75 14.75 5.41422 14.75 5C14.75 4.58579 14.4142 4.25 14 4.25H12ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41422 11.5858 8.75 12 8.75H14C14.4142 8.75 14.75 8.41422 14.75 8C14.75 7.58579 14.4142 7.25 14 7.25H12Z',
  d12: 'M3.5 15.25C3.91421 15.25 4.25 15.5858 4.25 16V22C4.25 22.4142 3.91421 22.75 3.5 22.75C3.08579 22.75 2.75 22.4142 2.75 22V16C2.75 15.5858 3.08579 15.25 3.5 15.25Z',
  d13: 'M1.83934 12.1358C2.21734 11.6318 2.79679 11.25 3.5 11.25C4.20321 11.25 4.78266 11.6318 5.16066 12.1358C5.53849 12.6396 5.75 13.3011 5.75 14C5.75 14.6989 5.53849 15.3604 5.16066 15.8642C4.78266 16.3682 4.20321 16.75 3.5 16.75C2.79679 16.75 2.21734 16.3682 1.83934 15.8642C1.46151 15.3604 1.25 14.6989 1.25 14C1.25 13.3011 1.46151 12.6396 1.83934 12.1358Z',
  d14: 'M15.4596 10.5955C16.0123 10.2773 16.6812 10 17.5002 10C17.6453 10 17.7856 10.0087 17.9214 10.0248C18.3395 10.0743 18.5485 10.099 18.6493 10.0095C18.75 9.92001 18.75 9.7363 18.75 9.36889V5C18.75 4.36327 18.7178 3.80098 18.6128 3.32323C18.506 2.83699 18.3139 2.39172 17.9611 2.03892C17.6083 1.68612 17.163 1.49401 16.6768 1.38719C16.199 1.28223 15.6367 1.25 15 1.25H11C10.3633 1.25 9.80098 1.28223 9.32323 1.38719C8.83699 1.494 8.39172 1.68612 8.03892 2.03892C7.68612 2.39172 7.49401 2.83699 7.38719 3.32323C7.28223 3.80098 7.25 4.36327 7.25 5V22C7.25 22.4142 7.58579 22.75 8 22.75H10.4002C10.6831 22.75 10.8245 22.75 10.9124 22.6621C11.0002 22.5743 11.0002 22.4328 11.0002 22.15L11.0001 16.5628L10.9998 16.4557C10.9977 15.7655 10.9948 14.8549 11.4233 14.0178C11.6786 13.5191 12.0178 13.1584 12.3394 12.8734C12.5053 12.7264 13.6148 11.8896 13.9293 11.6519C14.4544 11.2616 14.9765 10.8736 15.4596 10.5955Z',
  d15: 'M11.25 5C11.25 4.58579 11.5858 4.25 12 4.25H14C14.4142 4.25 14.75 4.58579 14.75 5C14.75 5.41421 14.4142 5.75 14 5.75H12C11.5858 5.75 11.25 5.41421 11.25 5ZM11.25 8C11.25 7.58579 11.5858 7.25 12 7.25H14C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H12C11.5858 8.75 11.25 8.41421 11.25 8Z',
  d16: 'M17.4749 12.0003V2L7.49243 2.00004V22.0001',
  d17: 'M3.49957 16C4.32655 16 4.99695 15.1046 4.99695 14C4.99695 12.8954 4.32655 12 3.49957 12C2.6726 12 2.0022 12.8954 2.0022 14C2.0022 15.1046 2.6726 16 3.49957 16Z',
  d18: 'M3.49976 16V22',
  d19: 'M2.0022 22H20.0022',
  d20: 'M10.4875 6H14.4806M10.4875 9H14.4806',
  d21: 'M17.5022 22V18',
  d22: 'M12.9949 21.4311V14.9845L17.4536 11.9668L21.9978 14.9845V21.9967H19.6209',
  d23: 'M2.75 16.5962V22H4.25V16.5962C4.61799 16.4392 4.92761 16.1749 5.16066 15.8642C5.53849 15.3604 5.75 14.6989 5.75 14C5.75 13.3011 5.53849 12.6396 5.16066 12.1358C4.78266 11.6318 4.20321 11.25 3.5 11.25C2.79679 11.25 2.21734 11.6318 1.83934 12.1358C1.46151 12.6396 1.25 13.3011 1.25 14C1.25 14.6989 1.46151 15.3604 1.83934 15.8642C2.07239 16.1749 2.38201 16.4392 2.75 16.5962Z',
  d24: 'M20 22.75H2V20.75H20V22.75Z',
  d25: 'M17.4993 9.29612L18.25 9.79659V1.99998C18.25 1.80106 18.171 1.6103 18.0303 1.46964C17.8897 1.32899 17.6989 1.24998 17.5 1.24998L7.5 1.25002C7.08578 1.25002 6.75 1.58581 6.75 2.00002L6.75 22C6.75 22.4142 7.08579 22.75 7.5 22.75H10.7493L10.748 13.796L17.4993 9.29612ZM10.5 6.75022L14.5 6.75022V5.25022H10.5V6.75022ZM10.5 9.75022L14.5 9.75022V8.25022L10.5 8.25022V9.75022Z',
  d26: 'M22.749 14.5986L17.4991 11.0987L12.248 14.5986L12.2491 22.75H22.749V14.5986ZM18.25 22V18H16.75V22L18.25 22Z',
} as const;

export const IconCity03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="city-03-stroke-rounded IconCity03StrokeRounded"
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
      <ellipse 
        cx="3.5" 
        cy="14" 
        rx="1.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
    </TheIconWrapper>
  );
};

export const IconCity03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="city-03-duotone-rounded IconCity03DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <ellipse 
        cx="3.5" 
        cy="14" 
        rx="1.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
    </TheIconWrapper>
  );
};

export const IconCity03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="city-03-twotone-rounded IconCity03TwotoneRounded"
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
      <ellipse 
        cx="3.5" 
        cy="14" 
        rx="1.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCity03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="city-03-solid-rounded IconCity03SolidRounded"
    >
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

export const IconCity03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="city-03-bulk-rounded IconCity03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
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

export const IconCity03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="city-03-stroke-sharp IconCity03StrokeSharp"
    >
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
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCity03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="city-03-solid-sharp IconCity03SolidSharp"
    >
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCity03: TheIconSelfPack = {
  name: 'City03',
  StrokeRounded: IconCity03StrokeRounded,
  DuotoneRounded: IconCity03DuotoneRounded,
  TwotoneRounded: IconCity03TwotoneRounded,
  SolidRounded: IconCity03SolidRounded,
  BulkRounded: IconCity03BulkRounded,
  StrokeSharp: IconCity03StrokeSharp,
  SolidSharp: IconCity03SolidSharp,
};