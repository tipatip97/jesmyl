import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.2892 21.9614H9.39111C6.14261 21.9614 4.51836 21.9614 3.50918 20.9363C2.5 19.9111 2.5 18.2612 2.5 14.9614V9.96139C2.5 6.66156 2.5 5.01165 3.50918 3.98653C4.51836 2.9614 6.14261 2.9614 9.39111 2.9614H12.3444C15.5929 2.9614 17.4907 3.01658 18.5 4.04171C19.5092 5.06683 19.5 6.66156 19.5 9.96139V11.1478',
  d2: 'M15.9453 2V4M10.9453 2V4M5.94531 2V4',
  d3: 'M7 15H11M7 10H15',
  d4: 'M20.7598 14.8785C19.8544 13.8641 19.3112 13.9245 18.7076 14.1056C18.2851 14.166 16.8365 15.8568 16.2329 16.3952C15.2419 17.3743 14.2464 18.3823 14.1807 18.5138C13.9931 18.8188 13.8186 19.3592 13.7341 19.963C13.5771 20.8688 13.3507 21.8885 13.6375 21.9759C13.9242 22.0632 14.7239 21.8954 15.6293 21.7625C16.2329 21.6538 16.6554 21.533 16.9572 21.3519C17.3797 21.0983 18.1644 20.2046 19.5164 18.8761C20.3644 17.9833 21.1823 17.3664 21.4238 16.7626C21.6652 15.8568 21.3031 15.3737 20.7598 14.8785Z',
  d5: 'M3.52511 4.02513C2.49998 5.05025 2.49998 6.70017 2.49998 10V15C2.49998 18.2998 2.49998 19.9497 3.52511 20.9749C4.55023 22 6.20015 22 9.49998 22H12.5L13.6179 21.8821C13.423 21.6872 13.4968 21.3422 13.6443 20.6523C13.6835 20.4689 13.7157 20.2805 13.7481 20.0912C13.8715 19.3698 13.9972 18.6352 14.5207 18.1117L17.8285 14.8039C18.1619 14.4705 18.3285 14.3039 18.5019 14.2037C18.8084 14.0268 19.1612 13.9651 19.5 14.0187V10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.49998C6.20015 3 4.55023 3 3.52511 4.02513Z',
  d6: 'M10.5 22H9.49998C6.20015 22 4.55023 22 3.52511 20.9749C2.49998 19.9497 2.49998 18.2998 2.49998 15V10C2.49998 6.70017 2.49998 5.05025 3.52511 4.02513C4.55023 3 6.20015 3 9.49998 3H12.5C15.7998 3 17.4497 3 18.4749 4.02513C19.5 5.05025 19.5 6.70017 19.5 10V11',
  d7: 'M16 2V4M11 2V4M5.99998 2V4',
  d8: 'M6.99998 15H11M6.99998 10H15',
  d9: 'M10.5 22H9.5C6.20017 22 4.55025 22 3.52513 20.9749C2.5 19.9497 2.5 18.2998 2.5 15V10C2.5 6.70017 2.5 5.05025 3.52513 4.02513C4.55025 3 6.20017 3 9.5 3H12.5C15.7998 3 17.4497 3 18.4749 4.02513C19.5 5.05025 19.5 6.70017 19.5 10V11',
  d10: 'M16 2V4M11 2V4M6 2V4',
  d11: 'M7 15H11',
  d12: 'M7 10H15',
  d13: 'M18.2751 14.3945C16.901 15.7938 14.2527 18.2926 14.2527 18.4675C14.0392 18.7642 13.853 19.3671 13.7281 20.2167C13.5712 21.0042 13.3833 21.6909 13.6032 21.8908C13.8231 22.0907 14.6509 21.9222 15.5269 21.7409C16.2264 21.666 16.876 21.4161 17.2008 21.1662C17.6755 20.7462 20.8983 17.493 21.2731 17.0682C21.5479 16.6934 21.5729 15.9937 21.333 15.5689C21.1981 15.2691 20.3487 14.4695 20.0739 14.2446C19.5742 13.9447 18.8747 13.8948 18.2751 14.3945Z',
  d14: 'M6 1.125C6.55228 1.125 7 1.57272 7 2.125V4.125C7 4.67728 6.55228 5.125 6 5.125C5.44772 5.125 5 4.67728 5 4.125V2.125C5 1.57272 5.44772 1.125 6 1.125ZM11 1.125C11.5523 1.125 12 1.57272 12 2.125V4.125C12 4.67728 11.5523 5.125 11 5.125C10.4477 5.125 10 4.67728 10 4.125V2.125C10 1.57272 10.4477 1.125 11 1.125ZM16 1.125C16.5523 1.125 17 1.57272 17 2.125V4.125C17 4.67728 16.5523 5.125 16 5.125C15.4477 5.125 15 4.67728 15 4.125V2.125C15 1.57272 15.4477 1.125 16 1.125Z',
  d15: 'M12.5558 2.375H9.44426H9.44425C7.84167 2.37498 6.56269 2.37497 5.55962 2.50983C4.52335 2.64915 3.66994 2.94466 2.9948 3.6198C2.31966 4.29494 2.02415 5.14835 1.88483 6.18462C1.74997 7.18769 1.74998 8.46665 1.75 10.0692V10.0692V15.1808V15.1808C1.74998 16.7834 1.74997 18.0623 1.88483 19.0654C2.02415 20.1017 2.31966 20.9551 2.9948 21.6302C3.66994 22.3053 4.52335 22.6008 5.55962 22.7402C6.5627 22.875 7.84167 22.875 9.44426 22.875H10.7878C10.8861 22.875 10.9727 22.875 11.0486 22.8737C11.1667 22.8716 11.2257 22.8705 11.3138 22.7559C11.4018 22.6414 11.3797 22.552 11.3355 22.3731C11.2408 21.9906 11.2433 21.6508 11.257 21.435C11.272 21.1997 11.3452 20.7858 11.3973 20.5014C11.4542 20.1907 11.5176 19.869 11.5554 19.6895C11.5952 19.4601 11.6482 19.1685 11.7251 18.8673C11.8859 18.2375 12.1944 17.3808 12.9295 16.6457L16.341 13.2339C16.5768 12.9968 16.9379 12.6335 17.3767 12.3802C18.0881 11.9694 18.9002 11.8092 19.6902 11.8994C19.9297 11.9267 20.0495 11.9404 20.1497 11.8509C20.25 11.7614 20.25 11.6649 20.25 11.4718V10.0693C20.25 8.46667 20.25 7.1877 20.1152 6.18462C19.9758 5.14835 19.6803 4.29494 19.0052 3.6198C18.3301 2.94466 17.4767 2.64915 16.4404 2.50983C15.4373 2.37497 14.1583 2.37498 12.5558 2.375H12.5558ZM7 9.375C6.58579 9.375 6.25 9.71079 6.25 10.125C6.25 10.5392 6.58579 10.875 7 10.875H15C15.4142 10.875 15.75 10.5392 15.75 10.125C15.75 9.71079 15.4142 9.375 15 9.375H7ZM7 14.375C6.58579 14.375 6.25 14.7108 6.25 15.125C6.25 15.5392 6.58579 15.875 7 15.875H11C11.4142 15.875 11.75 15.5392 11.75 15.125C11.75 14.7108 11.4142 14.375 11 14.375H7Z',
  d16: 'M18.1269 13.6792C18.8294 13.2736 19.695 13.2736 20.3976 13.6792C20.6592 13.8303 20.9533 14.1249 21.2264 14.3985C21.5001 14.6717 21.7947 14.9657 21.9457 15.2273C22.3513 15.9299 22.3513 16.7955 21.9457 17.4981C21.7947 17.7597 21.5599 17.994 21.2862 18.2671L17.9784 21.5749C17.513 22.0402 16.8913 22.3174 16.3865 22.4463C16.1345 22.5106 15.8813 22.5565 15.6516 22.5962C15.3456 22.6617 14.348 22.8547 14.0947 22.8708C13.8157 22.8886 13.4113 22.8612 13.0875 22.5374C12.7637 22.2137 12.7364 21.8092 12.7541 21.5302C12.7702 21.277 12.9632 20.2793 13.0288 19.9733C13.0684 19.7436 13.1143 19.4904 13.1786 19.2384C13.3075 18.7336 13.525 18.1717 13.9903 17.7064L17.3579 14.3387C17.631 14.065 17.8653 13.8303 18.1269 13.6792Z',
  d17: 'M9.44426 2.375H12.5558C14.1583 2.37498 15.4373 2.37497 16.4404 2.50983C17.4767 2.64915 18.3301 2.94466 19.0052 3.6198C19.6803 4.29494 19.9758 5.14835 20.1152 6.18461C20.25 7.1877 20.25 8.46666 20.25 10.0693V11.4718C20.25 11.6649 20.25 11.7614 20.1497 11.8509C20.0495 11.9404 19.9297 11.9267 19.6902 11.8994C18.9002 11.8092 18.0881 11.9694 17.3767 12.3802C16.9379 12.6335 16.5768 12.9968 16.341 13.2339L12.9295 16.6457C12.1944 17.3808 11.8859 18.2375 11.7251 18.8673C11.6482 19.1685 11.5952 19.4601 11.5554 19.6895C11.5176 19.869 11.4542 20.1907 11.3973 20.5014C11.3452 20.7858 11.272 21.1997 11.257 21.435C11.2433 21.6508 11.2408 21.9906 11.3355 22.3731C11.3797 22.552 11.4018 22.6414 11.3138 22.7559C11.2257 22.8705 11.1667 22.8716 11.0486 22.8737C10.9727 22.875 10.8861 22.875 10.7878 22.875H9.44426C7.84167 22.875 6.5627 22.875 5.55962 22.7402C4.52335 22.6008 3.66994 22.3053 2.9948 21.6302C2.31966 20.9551 2.02415 20.1017 1.88483 19.0654C1.74997 18.0623 1.74998 16.7833 1.75 15.1808V10.0692C1.74998 8.46666 1.74997 7.18769 1.88483 6.18462C2.02415 5.14835 2.31966 4.29494 2.9948 3.6198C3.66994 2.94466 4.52335 2.64915 5.55962 2.50983C6.5627 2.37497 7.84168 2.37498 9.44426 2.375Z',
  d18: 'M6.25 10.125C6.25 9.71079 6.58579 9.375 7 9.375H15C15.4142 9.375 15.75 9.71079 15.75 10.125C15.75 10.5392 15.4142 10.875 15 10.875H7C6.58579 10.875 6.25 10.5392 6.25 10.125ZM6.25 15.125C6.25 14.7108 6.58579 14.375 7 14.375H11C11.4142 14.375 11.75 14.7108 11.75 15.125C11.75 15.5392 11.4142 15.875 11 15.875H7C6.58579 15.875 6.25 15.5392 6.25 15.125Z',
  d19: 'M16 2V6M11 2V6M6 2V6',
  d20: 'M20 11V4H2V22H11',
  d21: 'M7 16H11M7 11H15',
  d22: 'M16.5017 21.4978H14.001V18.9978L19.4955 13.5049C19.4994 13.501 19.5058 13.501 19.5097 13.5049L21.9962 15.9907C22.0002 15.9946 22.0002 16.001 21.9962 16.0049L16.5017 21.4978Z',
  d23: 'M14.75 20V22.5H17.25L22.75 17L20.25 14.5L14.75 20Z',
  d24: 'M7 3H10V1.5H12V3H15V1.5H17V3H20C20.4142 3 20.75 3.33579 20.75 3.75V11.8783L13.25 19.3784V22.5L2 22.5C1.58579 22.5 1.25 22.1642 1.25 21.75V3.75C1.25 3.33579 1.58579 3 2 3H5V1.5H7V3ZM7 10.5H15V9H7V10.5ZM7 15.5H11V14H7V15.5Z',
};

export const IconNoteEditStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-edit-stroke-rounded IconNoteEditStrokeRounded"
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
        opacity="0.93" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteEditDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-edit-duotone-rounded IconNoteEditDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
      />
      <path 
        opacity="0.93" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteEditTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-edit-twotone-rounded IconNoteEditTwotoneRounded"
    >
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
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteEditSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-edit-solid-rounded IconNoteEditSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteEditBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-edit-bulk-rounded IconNoteEditBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteEditStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-edit-stroke-sharp IconNoteEditStrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconNoteEditSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-edit-solid-sharp IconNoteEditSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfNoteEdit: TheIconSelfPack = {
  name: 'NoteEdit',
  StrokeRounded: IconNoteEditStrokeRounded,
  DuotoneRounded: IconNoteEditDuotoneRounded,
  TwotoneRounded: IconNoteEditTwotoneRounded,
  SolidRounded: IconNoteEditSolidRounded,
  BulkRounded: IconNoteEditBulkRounded,
  StrokeSharp: IconNoteEditStrokeSharp,
  SolidSharp: IconNoteEditSolidSharp,
};