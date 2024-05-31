import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 20V22M18 20V22',
  d2: 'M3 14V8C3 5.17157 3 3.75736 3.93037 2.87868C4.86073 2 6.35814 2 9.35294 2H14.6471C17.6419 2 19.1393 2 20.0696 2.87868C21 3.75736 21 5.17157 21 8V14C21 16.8284 21 18.2426 20.0696 19.1213C19.1393 20 17.6419 20 14.6471 20H9.35294C6.35814 20 4.86073 20 3.93037 19.1213C3 18.2426 3 16.8284 3 14Z',
  d3: 'M12 20V2',
  d4: 'M3 14H12',
  d5: 'M3 8H12',
  d6: 'M15 11.5V10.5',
  d7: 'M21 8V14V14C21 16.8284 21 18.2426 20.0696 19.1213C19.1393 20 17.6419 20 14.6471 20H12V14V8V2H14.6471C17.6419 2 19.1393 2 20.0696 2.87868C21 3.75736 21 5.17157 21 7.99998V8Z',
  d8: 'M6 18.875C6.55228 18.875 7 19.3227 7 19.875V21.875C7 22.4273 6.55228 22.875 6 22.875C5.44772 22.875 5 22.4273 5 21.875V19.875C5 19.3227 5.44772 18.875 6 18.875ZM18 18.875C18.5523 18.875 19 19.3227 19 19.875V21.875C19 22.4273 18.5523 22.875 18 22.875C17.4477 22.875 17 22.4273 17 21.875V19.875C17 19.3227 17.4477 18.875 18 18.875Z',
  d9: 'M14.647 1.125H9.35301C7.94929 1.12497 6.80293 1.12495 5.89799 1.23986C4.95628 1.35943 4.12925 1.61831 3.46266 2.24788C2.78819 2.88487 2.50341 3.68789 2.37313 4.60307C2.24993 5.46847 2.24996 6.56052 2.25 7.8779L2.25 13.8722C2.24996 15.1896 2.24993 16.2815 2.37313 17.1469C2.50341 18.0621 2.78819 18.8651 3.46266 19.5021C4.12925 20.1317 4.95628 20.3906 5.89799 20.5101C6.80293 20.6251 7.94925 20.625 9.35296 20.625H14.647C16.0507 20.625 17.1971 20.6251 18.102 20.5101C19.0437 20.3906 19.8708 20.1317 20.5374 19.5021C21.2118 18.8651 21.4966 18.0621 21.6269 17.1469C21.7501 16.2815 21.75 15.1896 21.75 13.8722V7.87787C21.75 6.56051 21.7501 5.46846 21.6269 4.60307C21.4966 3.68789 21.2118 2.88487 20.5374 2.24788C19.8708 1.61831 19.0437 1.35943 18.102 1.23986C17.1971 1.12495 16.0507 1.12497 14.647 1.125ZM4.80176 3.6655C5.04227 3.43835 5.39879 3.26888 6.14382 3.17427C6.91145 3.0768 7.93328 3.07495 9.41932 3.07495H10.4002C10.683 3.07495 10.8244 3.07495 10.9123 3.16282C11.0002 3.25069 11.0002 3.39211 11.0002 3.67495V6.27488C11.0002 6.55772 11.0002 6.69914 10.9123 6.78701C10.8244 6.87488 10.683 6.87488 10.4002 6.87488L4.80735 6.87488C4.52135 6.87488 4.37836 6.87488 4.29011 6.78466C4.20185 6.69444 4.20497 6.55308 4.21119 6.27036C4.22344 5.7141 4.24929 5.26114 4.30386 4.87784C4.40035 4.19999 4.56912 3.88522 4.80176 3.6655ZM10.9123 8.96274C11.0002 9.05061 11.0002 9.19203 11.0002 9.47488V12.2749C11.0002 12.5577 11.0002 12.6991 10.9123 12.787C10.8244 12.8749 10.683 12.8749 10.4002 12.8749H4.8002C4.51736 12.8749 4.37594 12.8749 4.28807 12.787C4.2002 12.6991 4.2002 12.5577 4.2002 12.2749L4.2002 9.47487C4.2002 9.19203 4.2002 9.05061 4.28807 8.96274C4.37594 8.87488 4.51736 8.87488 4.8002 8.87488L10.4002 8.87488C10.683 8.87488 10.8244 8.87488 10.9123 8.96274ZM4.21119 15.4794C4.22343 16.0357 4.24929 16.4887 4.30386 16.8721C4.40035 17.5499 4.56913 17.8647 4.80176 18.0844C5.04227 18.3116 5.39879 18.481 6.14382 18.5756C6.91145 18.6731 7.93328 18.675 9.41932 18.675H10.4002C10.683 18.675 10.8244 18.675 10.9123 18.5871C11.0002 18.4992 11.0002 18.3578 11.0002 18.075V15.4749C11.0002 15.192 11.0002 15.0506 10.9123 14.9627C10.8244 14.8749 10.683 14.8749 10.4002 14.8749H4.80735C4.52135 14.8749 4.37836 14.8749 4.2901 14.9651C4.20185 15.0553 4.20496 15.1967 4.21119 15.4794ZM16 10.375C16 9.82271 15.5523 9.375 15 9.375C14.4477 9.375 14 9.82271 14 10.375V11.375C14 11.9273 14.4477 12.375 15 12.375C15.5523 12.375 16 11.9273 16 11.375V10.375Z',
  d10: 'M9.35301 1.125H14.647C16.0507 1.12497 17.1971 1.12495 18.102 1.23986C19.0437 1.35943 19.8708 1.61831 20.5374 2.24788C21.2118 2.88488 21.4966 3.68789 21.6269 4.60307C21.7501 5.46846 21.75 6.56051 21.75 7.87787V13.8722C21.75 15.1896 21.7501 16.2815 21.6269 17.1469C21.4966 18.0621 21.2118 18.8651 20.5374 19.5021C19.8708 20.1317 19.0437 20.3906 18.102 20.5101C17.1971 20.6251 16.0507 20.625 14.647 20.625H9.35296C7.94925 20.625 6.80292 20.6251 5.89799 20.5101C4.95628 20.3906 4.12925 20.1317 3.46266 19.5021C2.78819 18.8651 2.50341 18.0621 2.37313 17.1469C2.24993 16.2815 2.24996 15.1896 2.25 13.8722V7.8779C2.24996 6.56052 2.24993 5.46847 2.37313 4.60307C2.50341 3.68789 2.78819 2.88488 3.46266 2.24788C4.12925 1.61831 4.95628 1.35943 5.89799 1.23986C6.80293 1.12495 7.94929 1.12497 9.35301 1.125ZM6.14382 3.17428C5.39878 3.26888 5.04227 3.43836 4.80176 3.6655C4.56912 3.88522 4.40035 4.19999 4.30386 4.87784C4.24929 5.26113 4.22343 5.7141 4.21119 6.27036C4.20497 6.55308 4.20185 6.69444 4.2901 6.78466C4.37836 6.87488 4.52135 6.87488 4.80735 6.87488H10.4002C10.683 6.87488 10.8244 6.87488 10.9123 6.78701C11.0002 6.69914 11.0002 6.55772 11.0002 6.27488V3.67495C11.0002 3.39211 11.0002 3.25069 10.9123 3.16282C10.8244 3.07495 10.683 3.07495 10.4002 3.07495H9.41932C7.93328 3.07495 6.91145 3.0768 6.14382 3.17428ZM11.0002 9.47488C11.0002 9.19203 11.0002 9.05061 10.9123 8.96274C10.8244 8.87488 10.683 8.87488 10.4002 8.87488H4.8002C4.51736 8.87488 4.37593 8.87488 4.28807 8.96274C4.2002 9.05061 4.2002 9.19203 4.2002 9.47487V12.2749C4.2002 12.5577 4.2002 12.6991 4.28807 12.787C4.37593 12.8749 4.51736 12.8749 4.8002 12.8749H10.4002C10.683 12.8749 10.8244 12.8749 10.9123 12.787C11.0002 12.6991 11.0002 12.5577 11.0002 12.2749V9.47488ZM4.30386 16.8721C4.24929 16.4887 4.22343 16.0357 4.21119 15.4794C4.20496 15.1967 4.20185 15.0553 4.2901 14.9651C4.37835 14.8749 4.52135 14.8749 4.80735 14.8749H10.4002C10.683 14.8749 10.8244 14.8749 10.9123 14.9627C11.0002 15.0506 11.0002 15.192 11.0002 15.4749V18.075C11.0002 18.3578 11.0002 18.4992 10.9123 18.5871C10.8244 18.675 10.683 18.675 10.4002 18.675H9.41932C7.93328 18.675 6.91145 18.6731 6.14382 18.5756C5.39878 18.481 5.04227 18.3116 4.80176 18.0844C4.56912 17.8647 4.40035 17.5499 4.30386 16.8721Z',
  d11: 'M9.35296 20.625C7.94925 20.625 6.80292 20.6251 5.89799 20.5101C4.95628 20.3906 4.12925 20.1317 3.46266 19.5021C2.78819 18.8651 2.50341 18.0621 2.37313 17.1469C2.24993 16.2815 2.24996 15.1896 2.25 13.8722V13.8722V7.8779V7.87786C2.24996 6.5605 2.24993 5.46846 2.37313 4.60307C2.50341 3.68789 2.78819 2.88488 3.46266 2.24788C4.12925 1.61831 4.95628 1.35943 5.89799 1.23986C6.80293 1.12495 7.94929 1.12497 9.35301 1.125H11.0002V3.07654C9.19841 3.08129 6.72819 3.10007 6.14382 3.17428C5.39878 3.26888 5.04227 3.43836 4.80176 3.6655C4.56912 3.88522 4.40035 4.19999 4.30386 4.87784C4.24929 5.26113 4.22343 5.7141 4.21119 6.27036C4.20497 6.55308 4.20185 6.69444 4.2901 6.78466C4.37836 6.87488 4.52135 6.87488 4.80735 6.87488H11.0002V8.87488H4.8002C4.51736 8.87488 4.37593 8.87488 4.28807 8.96274C4.2002 9.05061 4.2002 9.19203 4.2002 9.47487V12.2749C4.2002 12.5577 4.2002 12.6991 4.28807 12.787C4.37593 12.8749 4.51736 12.8749 4.8002 12.8749H11.0002V14.8749H4.80735C4.52135 14.8749 4.37835 14.8749 4.2901 14.9651C4.20185 15.0553 4.20496 15.1967 4.21119 15.4794C4.22343 16.0357 4.24929 16.4887 4.30386 16.8721C4.40035 17.5499 4.56912 17.8647 4.80176 18.0844C5.04227 18.3116 5.39878 18.481 6.14382 18.5756C6.91145 18.6731 7.93328 18.675 9.41932 18.675H11.0002V20.625H9.35296Z',
  d12: 'M15 9.375C15.5523 9.375 16 9.82272 16 10.375V11.375C16 11.9273 15.5523 12.375 15 12.375C14.4477 12.375 14 11.9273 14 11.375V10.375C14 9.82272 14.4477 9.375 15 9.375Z',
  d13: 'M5 20.3359C5.28559 20.4148 5.58547 20.4698 5.89799 20.5095C6.23214 20.5519 6.59921 20.5787 7 20.5955V21.8743C7 22.4266 6.55228 22.8743 6 22.8743C5.44772 22.8743 5 22.4266 5 21.8743V20.3359Z',
  d14: 'M19 20.3359V21.8743C19 22.4266 18.5523 22.8743 18 22.8743C17.4477 22.8743 17 22.4266 17 21.8743V20.5955C17.4008 20.5787 17.7679 20.5519 18.102 20.5095C18.4145 20.4698 18.7144 20.4148 19 20.3359Z',
  d15: 'M6 19V22M18 19V22',
  d16: 'M21 2H3V19H21V2Z',
  d17: 'M12 19V2',
  d18: 'M3 13H12M3 8H12',
  d19: 'M15 12V9',
  d20: 'M5 22.25V19.25H7V22.25H5ZM17 22.25V19.25H19V22.25H17Z',
  d21: 'M3.225 1.75C2.68652 1.75 2.25 2.18593 2.25 2.72368L2.25 19.2763C2.25 19.8141 2.68652 20.25 3.225 20.25L20.775 20.25C21.3135 20.25 21.75 19.8141 21.75 19.2763L21.75 2.72368C21.75 2.18593 21.3135 1.75 20.775 1.75L3.225 1.75ZM4.19922 14.2499L4.19922 18.3025H11.9992L11.9992 14.2499H4.19922ZM4.19922 3.69727V7.7499L11.9992 7.7499L11.9992 3.69727H4.19922ZM11.9992 12.7499H4.19922L4.19922 9.2499L11.9992 9.2499V12.7499ZM15.75 12.5V9.5H14.25V12.5H15.75Z',
} as const;

export const IconWardrobe01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-01-stroke-rounded IconWardrobe01StrokeRounded"
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

export const IconWardrobe01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-01-duotone-rounded IconWardrobe01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconWardrobe01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-01-twotone-rounded IconWardrobe01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconWardrobe01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-01-solid-rounded IconWardrobe01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconWardrobe01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-01-bulk-rounded IconWardrobe01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWardrobe01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-01-stroke-sharp IconWardrobe01StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWardrobe01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-01-solid-sharp IconWardrobe01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWardrobe01: TheIconSelfPack = {
  name: 'Wardrobe01',
  StrokeRounded: IconWardrobe01StrokeRounded,
  DuotoneRounded: IconWardrobe01DuotoneRounded,
  TwotoneRounded: IconWardrobe01TwotoneRounded,
  SolidRounded: IconWardrobe01SolidRounded,
  BulkRounded: IconWardrobe01BulkRounded,
  StrokeSharp: IconWardrobe01StrokeSharp,
  SolidSharp: IconWardrobe01SolidSharp,
};