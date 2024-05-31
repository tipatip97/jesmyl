import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.25345 4.19584L4.02558 4.90813C3.03739 5.48137 2.54329 5.768 2.27164 6.24483C2 6.72165 2 7.30233 2 8.46368V16.6283C2 18.1542 2 18.9172 2.34226 19.3418C2.57001 19.6244 2.88916 19.8143 3.242 19.8773C3.77226 19.9719 4.42148 19.5953 5.71987 18.8421C6.60156 18.3306 7.45011 17.7994 8.50487 17.9435C8.98466 18.009 9.44231 18.2366 10.3576 18.6917L14.1715 20.588C14.9964 20.9982 15.004 21 15.9214 21H18C19.8856 21 20.8284 21 21.4142 20.4013C22 19.8026 22 18.8389 22 16.9117V10.1715C22 8.24423 22 7.2806 21.4142 6.68188C20.8284 6.08316 19.8856 6.08316 18 6.08316H15.9214C15.004 6.08316 14.9964 6.08139 14.1715 5.6712L10.8399 4.01463C9.44884 3.32297 8.75332 2.97714 8.01238 3.00117C7.27143 3.02521 6.59877 3.41542 5.25345 4.19584Z',
  d2: 'M15 6.5V20.5',
  d3: 'M8 3.5V17.5',
  d4: 'M4.02558 4.92014L5.25345 4.20329C6.59837 3.41809 7.27104 3.02538 8.01172 3.00098V18.019C7.22327 18.0628 6.54023 18.463 5.84341 18.8712L5.71986 18.9435C4.4215 19.7015 3.77226 20.0806 3.242 19.9853C2.88916 19.922 2.57001 19.7308 2.34226 19.4464C2 19.0191 2 18.2512 2 16.7155V8.4985C2 7.3297 2 6.7453 2.27164 6.26542C2.54329 5.78553 3.03739 5.49707 4.02558 4.92014Z',
  d5: 'M20.5 20.9998L14.9993 20.9995L15.0859 6.10272H18C19.8856 6.10272 20.8284 6.10272 21.4142 6.70528C22 7.30784 22 8.27765 22 10.2173V19.4998C22 20.3282 21.3284 20.9998 20.5 20.9998Z',
  d6: 'M7.25 2.918C7.25 2.71167 7.25 2.6085 7.19842 2.53231C7.15658 2.47053 7.0775 2.41888 7.0041 2.40543C6.9136 2.38884 6.82783 2.42651 6.65628 2.50186C6.61935 2.51808 6.5823 2.53479 6.54509 2.55197C6.08426 2.76481 5.55432 3.07224 4.90724 3.44762L4.90724 3.44762L3.6187 4.1951L3.61869 4.1951C3.15062 4.46661 2.75247 4.69756 2.44084 4.92259C2.10848 5.16259 1.82705 5.42809 1.61998 5.79158C1.4134 6.15419 1.32728 6.53282 1.28746 6.94312C1.24997 7.32949 1.24999 7.79583 1.25 8.34697V8.34701V8.34704V16.5861V16.5861V16.5861C1.24999 17.3152 1.24998 17.918 1.29639 18.3895C1.34327 18.8656 1.44676 19.3439 1.75833 19.7305C2.09802 20.1519 2.57688 20.4384 3.11024 20.5336C3.60335 20.6216 4.0707 20.4737 4.5015 20.2792C4.92742 20.0869 5.49919 19.7552 6.11822 19.3961C6.40134 19.2318 6.6546 19.0849 6.89091 18.9628C7.07195 18.8693 7.16247 18.8225 7.20624 18.7506C7.25 18.6788 7.25 18.5842 7.25 18.395V17.918C7.25 17.5038 7.58579 17.168 8 17.168C8.41421 17.168 8.75 17.5038 8.75 17.918V18.2664C8.75 18.469 8.75 18.5703 8.7977 18.6444C8.84539 18.7185 8.94451 18.7637 9.14275 18.854C9.36402 18.9548 9.64479 19.0928 10.0237 19.2812L13.8376 21.1776C14.0293 21.2731 14.25 21.1322 14.25 20.918C14.25 20.5038 14.5858 20.168 15 20.168C15.4142 20.168 15.75 20.5038 15.75 20.918V21.5585C15.75 21.619 15.799 21.6681 15.8595 21.668L18.0529 21.668C18.9506 21.668 19.7008 21.6681 20.2966 21.5862C20.9275 21.4995 21.4955 21.3086 21.9503 20.8438C22.4028 20.3813 22.5866 19.8074 22.6704 19.1705C22.7501 18.5648 22.75 17.8009 22.75 16.8809V10.0382C22.75 9.11827 22.7501 8.3544 22.6704 7.74867C22.5866 7.11179 22.4028 6.5379 21.9503 6.07538C21.4955 5.61057 20.9275 5.41967 20.2966 5.33299C19.7008 5.25111 18.9506 5.25113 18.0529 5.25116L15.9214 5.25116C15.8268 5.25116 15.75 5.32771 15.75 5.42224V5.918C15.75 6.33222 15.4142 6.668 15 6.668C14.5858 6.668 14.25 6.33222 14.25 5.918V5.16239C14.25 4.98154 14.25 4.89111 14.205 4.81851C14.16 4.74591 14.0791 4.70565 13.9171 4.62513L11.1426 3.24554L11.1425 3.24553C10.4736 2.91288 9.92553 2.64037 9.45232 2.45779C9.43389 2.45068 9.4155 2.44368 9.39715 2.43678C9.15786 2.34687 9.03822 2.30192 8.92442 2.35437C8.89519 2.36784 8.86202 2.39081 8.83913 2.41344C8.75 2.50152 8.75 2.64034 8.75 2.918C8.75 3.33222 8.41421 3.668 8 3.668C7.58579 3.668 7.25 3.33222 7.25 2.918ZM8.75 5.918C8.75 5.50379 8.41421 5.168 8 5.168C7.58579 5.168 7.25 5.50379 7.25 5.918V6.918C7.25 7.33222 7.58579 7.668 8 7.668C8.41421 7.668 8.75 7.33222 8.75 6.918V5.918ZM15.75 8.918C15.75 8.50379 15.4142 8.168 15 8.168C14.5858 8.168 14.25 8.50379 14.25 8.918V9.918C14.25 10.3322 14.5858 10.668 15 10.668C15.4142 10.668 15.75 10.3322 15.75 9.918V8.918ZM8.75 9.918C8.75 9.50379 8.41421 9.168 8 9.168C7.58579 9.168 7.25 9.50379 7.25 9.918V10.918C7.25 11.3322 7.58579 11.668 8 11.668C8.41421 11.668 8.75 11.3322 8.75 10.918V9.918ZM15.75 12.918C15.75 12.5038 15.4142 12.168 15 12.168C14.5858 12.168 14.25 12.5038 14.25 12.918V13.918C14.25 14.3322 14.5858 14.668 15 14.668C15.4142 14.668 15.75 14.3322 15.75 13.918V12.918ZM8.75 13.918C8.75 13.5038 8.41421 13.168 8 13.168C7.58579 13.168 7.25 13.5038 7.25 13.918V14.918C7.25 15.3322 7.58579 15.668 8 15.668C8.41421 15.668 8.75 15.3322 8.75 14.918V13.918ZM15.75 16.918C15.75 16.5038 15.4142 16.168 15 16.168C14.5858 16.168 14.25 16.5038 14.25 16.918V17.918C14.25 18.3322 14.5858 18.668 15 18.668C15.4142 18.668 15.75 18.3322 15.75 17.918V16.918Z',
  d7: 'M7.25 2.918C7.25 2.71167 7.25 2.6085 7.19842 2.53231C7.15658 2.47053 7.0775 2.41889 7.0041 2.40543C6.9136 2.38884 6.82783 2.42651 6.65628 2.50186C6.61935 2.51808 6.5823 2.53479 6.54509 2.55197C6.08426 2.76481 5.55432 3.07224 4.90724 3.44762L3.6187 4.1951C3.15062 4.46661 2.75247 4.69756 2.44084 4.92259C2.10848 5.16259 1.82705 5.42809 1.61998 5.79158C1.4134 6.15419 1.32728 6.53282 1.28746 6.94312C1.24997 7.32949 1.24999 7.79583 1.25 8.34697V16.5861C1.24999 17.3151 1.24998 17.918 1.29639 18.3895C1.34327 18.8656 1.44676 19.3439 1.75833 19.7305C2.09802 20.1519 2.57688 20.4384 3.11024 20.5336C3.60335 20.6216 4.0707 20.4737 4.5015 20.2792C4.92742 20.0869 5.49919 19.7552 6.11822 19.3961C6.40134 19.2318 6.6546 19.0849 6.89091 18.9628C7.07195 18.8693 7.16247 18.8225 7.20624 18.7506C7.25 18.6788 7.25 18.5842 7.25 18.395V17.918C7.25 17.5038 7.58579 17.168 8 17.168C8.41422 17.168 8.75 17.5038 8.75 17.918V18.2664C8.75 18.469 8.75 18.5703 8.7977 18.6444C8.84539 18.7185 8.94451 18.7637 9.14275 18.854C9.36402 18.9548 9.6448 19.0928 10.0237 19.2812L13.8376 21.1776C14.0293 21.2731 14.25 21.1322 14.25 20.918C14.25 20.5038 14.5858 20.168 15 20.168C15.4142 20.168 15.75 20.5038 15.75 20.918V21.5585C15.75 21.619 15.799 21.6681 15.8595 21.668L18.0529 21.668C18.9506 21.668 19.7008 21.6681 20.2966 21.5862C20.9275 21.4995 21.4955 21.3086 21.9503 20.8438C22.4028 20.3813 22.5866 19.8074 22.6704 19.1705C22.7501 18.5648 22.75 17.8009 22.75 16.8809V10.0382C22.75 9.11827 22.7501 8.3544 22.6704 7.74867C22.5866 7.11179 22.4028 6.5379 21.9503 6.07538C21.4955 5.61057 20.9275 5.41967 20.2966 5.33299C19.7008 5.25111 18.9506 5.25113 18.0529 5.25116L15.9214 5.25116C15.8268 5.25116 15.75 5.32771 15.75 5.42224V5.918C15.75 6.33222 15.4142 6.668 15 6.668C14.5858 6.668 14.25 6.33222 14.25 5.918V5.16239C14.25 4.98154 14.25 4.89111 14.205 4.81851C14.16 4.74591 14.0791 4.70565 13.9171 4.62513L11.1426 3.24554C10.4736 2.91289 9.92553 2.64037 9.45232 2.45779C9.43389 2.45068 9.4155 2.44368 9.39715 2.43678C9.15787 2.34687 9.03822 2.30192 8.92442 2.35437C8.89519 2.36784 8.86203 2.39081 8.83913 2.41344C8.75 2.50152 8.75 2.64034 8.75 2.918C8.75 3.33222 8.41422 3.668 8 3.668C7.58579 3.668 7.25 3.33222 7.25 2.918ZM8.75 5.918C8.75 5.50379 8.41422 5.168 8 5.168C7.58579 5.168 7.25 5.50379 7.25 5.918V6.918C7.25 7.33222 7.58579 7.668 8 7.668C8.41422 7.668 8.75 7.33222 8.75 6.918V5.918ZM15.75 8.918C15.75 8.50379 15.4142 8.168 15 8.168C14.5858 8.168 14.25 8.50379 14.25 8.918V9.918C14.25 10.3322 14.5858 10.668 15 10.668C15.4142 10.668 15.75 10.3322 15.75 9.918V8.918ZM8.75 9.918C8.75 9.50379 8.41422 9.168 8 9.168C7.58579 9.168 7.25 9.50379 7.25 9.918V10.918C7.25 11.3322 7.58579 11.668 8 11.668C8.41422 11.668 8.75 11.3322 8.75 10.918V9.918ZM15.75 12.918C15.75 12.5038 15.4142 12.168 15 12.168C14.5858 12.168 14.25 12.5038 14.25 12.918V13.918C14.25 14.3322 14.5858 14.668 15 14.668C15.4142 14.668 15.75 14.3322 15.75 13.918V12.918ZM8.75 13.918C8.75 13.5038 8.41422 13.168 8 13.168C7.58579 13.168 7.25 13.5038 7.25 13.918V14.918C7.25 15.3322 7.58579 15.668 8 15.668C8.41422 15.668 8.75 15.3322 8.75 14.918V13.918ZM15.75 16.918C15.75 16.5038 15.4142 16.168 15 16.168C14.5858 16.168 14.25 16.5038 14.25 16.918V17.918C14.25 18.3322 14.5858 18.668 15 18.668C15.4142 18.668 15.75 18.3322 15.75 17.918V16.918Z',
  d8: 'M8.75 17.918C8.75 17.5038 8.41421 17.168 8 17.168V15.668C8.41421 15.668 8.75 15.3322 8.75 14.918V13.918C8.75 13.5038 8.41421 13.168 8 13.168V11.668C8.41421 11.668 8.75 11.3322 8.75 10.918V9.918C8.75 9.50379 8.41421 9.168 8 9.168V7.668C8.41421 7.668 8.75 7.33222 8.75 6.918V5.918C8.75 5.50379 8.41421 5.168 8 5.168V3.668C8.41421 3.668 8.75 3.33222 8.75 2.918C8.75 2.64034 8.75 2.50152 8.83913 2.41344C8.86202 2.39081 8.89519 2.36784 8.92442 2.35437C9.03822 2.30192 9.15786 2.34687 9.39715 2.43678L9.45232 2.45779C9.92553 2.64037 10.4736 2.91289 11.1426 3.24554L13.9171 4.62513C14.0791 4.70565 14.16 4.74591 14.205 4.81851C14.25 4.89111 14.25 4.98154 14.25 5.16239V5.918C14.25 6.33222 14.5858 6.668 15 6.668V8.168C14.5858 8.168 14.25 8.50379 14.25 8.918V9.918C14.25 10.3322 14.5858 10.668 15 10.668V12.168C14.5858 12.168 14.25 12.5038 14.25 12.918V13.918C14.25 14.3322 14.5858 14.668 15 14.668V16.168C14.5858 16.168 14.25 16.5038 14.25 16.918V17.918C14.25 18.3322 14.5858 18.668 15 18.668V20.168C14.5858 20.168 14.25 20.5038 14.25 20.918C14.25 21.1322 14.0293 21.2731 13.8376 21.1776L10.0237 19.2812C9.64479 19.0928 9.36402 18.9548 9.14275 18.854C8.94451 18.7637 8.84539 18.7185 8.7977 18.6444C8.75 18.5703 8.75 18.469 8.75 18.2664V17.918Z',
  d9: 'M8.01175 3.00098L2 6.08297V20L8.01175 18L15 20.9998H22V6H15L8.01175 3.00098Z',
  d10: 'M7.25 2.29703L1.65785 5.16391C1.40747 5.29226 1.25 5.54996 1.25 5.83131L1.25 20.0002C1.25 20.2412 1.36582 20.4675 1.56129 20.6085C1.75676 20.7495 2.00807 20.7879 2.23675 20.7118L7.25 19.044V16.2814H8.75V19.1333L14.25 21.4942V19.2814H15.75V21.75H22C22.4142 21.75 22.75 21.4142 22.75 21V5.74835C22.75 5.33413 22.4142 4.99835 22 4.99835H15.75V6.4671H14.25V4.61034L8.75 2.25V3.4671H7.25V2.29703ZM8.75 7.46895V5.03145H7.25V7.46895H8.75ZM8.75 11.2189V8.78145H7.25V11.2189H8.75ZM8.75 14.9689V12.5314H7.25V14.9689H8.75ZM15.75 8.03145V10.4689H14.25V8.03145H15.75ZM15.75 11.7814V14.2189H14.25V11.7814H15.75ZM15.75 15.5314V17.9689H14.25V15.5314H15.75Z',
} as const;

export const IconMapingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maping-stroke-rounded IconMapingStrokeRounded"
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
        strokeDasharray="1 3" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeDasharray="1 3" 
      />
    </TheIconWrapper>
  );
};

export const IconMapingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maping-duotone-rounded IconMapingDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
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
        strokeDasharray="1 3" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeDasharray="1 3" 
      />
    </TheIconWrapper>
  );
};

export const IconMapingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maping-twotone-rounded IconMapingTwotoneRounded"
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
        strokeDasharray="1 3" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeDasharray="1 3" 
      />
    </TheIconWrapper>
  );
};

export const IconMapingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maping-solid-rounded IconMapingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maping-bulk-rounded IconMapingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maping-stroke-sharp IconMapingStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
        strokeDasharray="1 3" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
        strokeDasharray="1 3" 
      />
    </TheIconWrapper>
  );
};

export const IconMapingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maping-solid-sharp IconMapingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMaping: TheIconSelfPack = {
  name: 'Maping',
  StrokeRounded: IconMapingStrokeRounded,
  DuotoneRounded: IconMapingDuotoneRounded,
  TwotoneRounded: IconMapingTwotoneRounded,
  SolidRounded: IconMapingSolidRounded,
  BulkRounded: IconMapingBulkRounded,
  StrokeSharp: IconMapingStrokeSharp,
  SolidSharp: IconMapingSolidSharp,
};