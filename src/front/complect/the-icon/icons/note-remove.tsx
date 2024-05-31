import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 2V4M11 2V4M6 2V4',
  d2: 'M19.5 12.5V10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H11.5',
  d3: 'M21.5 15L18 18.5M18 18.5L14.5 22M18 18.5L21.5 22M18 18.5L14.5 15',
  d4: 'M7 15H11M7 10H15',
  d5: 'M2.5 10C2.5 6.70017 2.5 5.05025 3.52513 4.02513C4.55025 3 6.20017 3 9.5 3H12.5C15.7998 3 17.4497 3 18.4749 4.02513C19.5 5.05025 19.5 6.70017 19.5 10V15C19.5 18.2998 19.5 19.9497 18.4749 20.9749C17.4497 22 15.7998 22 12.5 22H9.5C6.20017 22 4.55025 22 3.52513 20.9749C2.5 19.9497 2.5 18.2998 2.5 15V10Z',
  d6: 'M7 15H11',
  d7: 'M7 10H15',
  d8: 'M5.875 1C6.42728 1 6.875 1.44772 6.875 2V4C6.875 4.55228 6.42728 5 5.875 5C5.32272 5 4.875 4.55228 4.875 4V2C4.875 1.44772 5.32272 1 5.875 1ZM10.875 1C11.4273 1 11.875 1.44772 11.875 2V4C11.875 4.55228 11.4273 5 10.875 5C10.3227 5 9.875 4.55228 9.875 4V2C9.875 1.44772 10.3227 1 10.875 1ZM15.875 1C16.4273 1 16.875 1.44772 16.875 2V4C16.875 4.55228 16.4273 5 15.875 5C15.3227 5 14.875 4.55228 14.875 4V2C14.875 1.44772 15.3227 1 15.875 1Z',
  d9: 'M12.4308 2.25H9.31926H9.31925C7.71667 2.24998 6.43769 2.24997 5.43462 2.38483C4.39835 2.52415 3.54494 2.81966 2.8698 3.4948C2.19466 4.16994 1.89915 5.02335 1.75983 6.05962C1.62497 7.06269 1.62498 8.34165 1.625 9.94422V9.94424V15.0558V15.0558C1.62498 16.6584 1.62497 17.9373 1.75983 18.9404C1.89915 19.9767 2.19466 20.8301 2.8698 21.5052C3.54494 22.1803 4.39835 22.4758 5.43462 22.6152C6.4377 22.75 7.71667 22.75 9.31926 22.75H11.4053L11.5014 22.7499C11.6584 22.7495 11.7369 22.7493 11.8259 22.6518C11.9148 22.5542 11.9049 22.4448 11.8852 22.2261C11.8208 21.5132 12.0615 20.778 12.6072 20.2322L13.9152 18.9243C14.1152 18.7243 14.2152 18.6243 14.2152 18.5C14.2152 18.3757 14.1152 18.2757 13.9152 18.0757L12.6072 16.7678C11.6309 15.7915 11.6309 14.2085 12.6072 13.2322C13.5835 12.2559 15.1665 12.2559 16.1428 13.2322L17.4507 14.5402L17.4507 14.5402C17.6507 14.7402 17.7507 14.8402 17.875 14.8402C17.9993 14.8402 18.0993 14.7402 18.2993 14.5402L19.6072 13.2322C19.681 13.1585 19.7581 13.0903 19.8383 13.0278L19.8383 13.0277C19.9889 12.9101 20.0643 12.8512 20.0946 12.789C20.125 12.7267 20.125 12.6471 20.125 12.488V9.94426C20.125 8.34167 20.125 7.0627 19.9902 6.05962C19.8508 5.02335 19.5553 4.16994 18.8802 3.4948C18.2051 2.81966 17.3517 2.52415 16.3154 2.38483C15.3123 2.24997 14.0333 2.24998 12.4308 2.25H12.4308ZM6.875 9.25C6.46079 9.25 6.125 9.58579 6.125 10C6.125 10.4142 6.46079 10.75 6.875 10.75H14.875C15.2892 10.75 15.625 10.4142 15.625 10C15.625 9.58579 15.2892 9.25 14.875 9.25H6.875ZM6.875 14.25C6.46079 14.25 6.125 14.5858 6.125 15C6.125 15.4142 6.46079 15.75 6.875 15.75H9.875C10.2892 15.75 10.625 15.4142 10.625 15C10.625 14.5858 10.2892 14.25 9.875 14.25H6.875Z',
  d10: 'M13.6679 14.2929C14.0584 13.9024 14.6916 13.9024 15.0821 14.2929L17.875 17.0858L20.6679 14.2929C21.0584 13.9024 21.6916 13.9024 22.0821 14.2929C22.4726 14.6834 22.4726 15.3166 22.0821 15.7071L19.2892 18.5L22.0821 21.2929C22.4726 21.6834 22.4726 22.3166 22.0821 22.7071C21.6916 23.0976 21.0584 23.0976 20.6679 22.7071L17.875 19.9142L15.0821 22.7071C14.6916 23.0976 14.0584 23.0976 13.6679 22.7071C13.2774 22.3166 13.2774 21.6834 13.6679 21.2929L16.4608 18.5L13.6679 15.7071C13.2774 15.3166 13.2774 14.6834 13.6679 14.2929Z',
  d11: 'M9.31926 2.25H12.4308C14.0333 2.24998 15.3123 2.24997 16.3154 2.38483C17.3517 2.52415 18.2051 2.81966 18.8802 3.4948C19.5553 4.16994 19.8508 5.02335 19.9902 6.05961C20.125 7.0627 20.125 8.34166 20.125 9.94426V12.488C20.125 12.6471 20.125 12.7267 20.0946 12.789C20.0643 12.8512 19.9889 12.9101 19.8383 13.0278C19.7581 13.0903 19.681 13.1585 19.6072 13.2322L18.2993 14.5402C18.0993 14.7402 17.9993 14.8402 17.875 14.8402C17.7507 14.8402 17.6507 14.7402 17.4507 14.5402L16.1428 13.2322C15.1665 12.2559 13.5835 12.2559 12.6072 13.2322C11.6309 14.2085 11.6309 15.7915 12.6072 16.7678L13.9152 18.0757C14.1152 18.2757 14.2152 18.3757 14.2152 18.5C14.2152 18.6243 14.1152 18.7243 13.9152 18.9243L12.6072 20.2322C12.0615 20.778 11.8208 21.5132 11.8852 22.2261C11.9049 22.4448 11.9148 22.5542 11.8259 22.6518C11.7369 22.7493 11.6584 22.7495 11.5014 22.7499C11.4709 22.75 11.4389 22.75 11.4053 22.75H9.31926C7.71667 22.75 6.4377 22.75 5.43462 22.6152C4.39835 22.4758 3.54494 22.1803 2.8698 21.5052C2.19466 20.8301 1.89915 19.9767 1.75983 18.9404C1.62497 17.9373 1.62498 16.6583 1.625 15.0558V9.94424C1.62498 8.34166 1.62497 7.06269 1.75983 6.05962C1.89915 5.02335 2.19466 4.16994 2.8698 3.4948C3.54494 2.81966 4.39835 2.52415 5.43462 2.38483C6.4377 2.24997 7.71668 2.24998 9.31926 2.25Z',
  d12: 'M6.125 10C6.125 9.58579 6.46079 9.25 6.875 9.25H14.875C15.2892 9.25 15.625 9.58579 15.625 10C15.625 10.4142 15.2892 10.75 14.875 10.75H6.875C6.46079 10.75 6.125 10.4142 6.125 10ZM6.125 15C6.125 14.5858 6.46079 14.25 6.875 14.25H9.875C10.2892 14.25 10.625 14.5858 10.625 15C10.625 15.4142 10.2892 15.75 9.875 15.75H6.875C6.46079 15.75 6.125 15.4142 6.125 15Z',
  d13: 'M16 2V6M11 2V6M6 2V6',
  d14: 'M20 12V4H2V22L12 22',
  d15: 'M22 15L18.5 18.5M18.5 18.5L15 22M18.5 18.5L22 22M18.5 18.5L15 15',
  d16: 'M7 16H11M7 11H15',
  d17: 'M19.9572 18.293L22.7501 15.5001L21.3359 14.0859L18.543 16.8788L15.7501 14.0859L14.3359 15.5001L17.1288 18.293L14.3359 21.0859L15.7501 22.5001L18.543 19.7072L21.3359 22.5001L22.7501 21.0859L19.9572 18.293Z',
  d18: 'M6.99985 2.99985H9.99985V1.49985H11.9998V2.99985H14.9998V1.49985H16.9998V2.99985H19.9998C20.4141 2.99985 20.7498 3.33563 20.7498 3.74985V12.5509L18.5431 14.7576L15.7502 11.9647L12.2147 15.5002L15.0076 18.2931L12.2147 21.086L13.6285 22.4998L1.99985 22.4998C1.58563 22.4998 1.24985 22.1641 1.24985 21.7498V3.74985C1.24985 3.33563 1.58563 2.99985 1.99985 2.99985H4.99985V1.49985H6.99985V2.99985ZM6.99985 10.4998H14.9998V8.99985H6.99985V10.4998ZM6.99985 15.4998H10.9998V13.9998H6.99985V15.4998Z',
} as const;

export const IconNoteRemoveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-remove-stroke-rounded IconNoteRemoveStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteRemoveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-remove-duotone-rounded IconNoteRemoveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteRemoveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-remove-twotone-rounded IconNoteRemoveTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteRemoveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-remove-solid-rounded IconNoteRemoveSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconNoteRemoveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-remove-bulk-rounded IconNoteRemoveBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteRemoveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-remove-stroke-sharp IconNoteRemoveStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteRemoveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-remove-solid-sharp IconNoteRemoveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNoteRemove: TheIconSelfPack = {
  name: 'NoteRemove',
  StrokeRounded: IconNoteRemoveStrokeRounded,
  DuotoneRounded: IconNoteRemoveDuotoneRounded,
  TwotoneRounded: IconNoteRemoveTwotoneRounded,
  SolidRounded: IconNoteRemoveSolidRounded,
  BulkRounded: IconNoteRemoveBulkRounded,
  StrokeSharp: IconNoteRemoveStrokeSharp,
  SolidSharp: IconNoteRemoveSolidSharp,
};