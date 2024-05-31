import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7',
  d2: 'M15.5 12L16.4199 12.7929C16.8066 13.1262 17 13.2929 17 13.5C17 13.7071 16.8066 13.8738 16.4199 14.2071L15.5 15',
  d3: 'M8.5 12L7.58009 12.7929C7.19337 13.1262 7 13.2929 7 13.5C7 13.7071 7.19336 13.8738 7.58009 14.2071L8.5 15',
  d4: 'M13 11L11 16',
  d5: 'M12 21H13.25C16.7612 21 18.5167 21 19.7779 20.1573C20.3238 19.7926 20.7926 19.3238 21.1573 18.7779C22 17.5167 22 15.7612 22 12.25C22 10.1433 22 9.08996 21.4944 8.33329C21.2755 8.00572 20.9943 7.72447 20.6667 7.50559C19.91 7 18.8567 7 16.75 7H12L11.3666 5.73313C10.8418 4.68358 10.3622 3.62712 9.19926 3.19101C8.6899 3 8.10802 3 6.94427 3C5.1278 3 4.21956 3 3.53806 3.38032C3.05227 3.65142 2.65142 4.05227 2.38032 4.53806C2 5.21956 2 6.1278 2 7.94427V11C2 15.714 2 18.0711 3.46447 19.5355C4.92893 21 7.28595 21 12 21Z',
  d6: 'M12.4635 6.25008L11.9425 5.20644C11.4704 4.2513 10.8581 3.01213 9.4626 2.48884C8.82373 2.24927 8.11205 2.24958 7.08264 2.25004C6.2039 2.25003 5.32205 2.25006 4.7497 2.30052C4.15996 2.3525 3.64388 2.46246 3.17258 2.72548C2.56533 3.06435 2.06428 3.56541 1.7254 4.17266C1.46238 4.64396 1.35242 5.16004 1.30044 5.74978C1.24998 6.32212 1.24999 7.03085 1.25 7.90958V7.90959V11.0575V11.0575C1.24999 13.3659 1.24998 15.1749 1.43975 16.5864C1.63399 18.0311 2.03933 19.1711 2.93414 20.0659C3.82895 20.9608 4.96897 21.3661 6.41371 21.5603C7.82519 21.7501 9.63423 21.7501 11.9426 21.7501H13.2923C15.012 21.7501 16.3602 21.7501 17.4336 21.6409C18.5283 21.5295 19.4202 21.2984 20.1945 20.781C20.8224 20.3615 21.3614 19.8225 21.781 19.1946C22.2983 18.4203 22.5295 17.5284 22.6408 16.4337C22.75 15.3603 22.75 14.0121 22.75 12.2923C22.75 11.2733 22.75 10.3689 22.683 9.70956C22.6137 9.029 22.4669 8.4388 22.118 7.91669C21.8444 7.50723 21.4929 7.15566 21.0834 6.88207C20.5613 6.53321 19.9711 6.38636 19.2905 6.31713C18.6312 6.25006 17.8095 6.25007 16.7905 6.25008H16.7904L12.4635 6.25008ZM15.5103 12.5682C15.1966 12.2978 15.1615 11.8242 15.4319 11.5105C15.7023 11.1967 16.1759 11.1616 16.4897 11.432L17.4096 12.2249L17.4373 12.2489C17.6061 12.3942 17.7854 12.5487 17.9166 12.6968C18.0648 12.8643 18.25 13.1301 18.25 13.5001C18.25 13.8702 18.0648 14.136 17.9166 14.3035C17.7854 14.4516 17.6061 14.606 17.4374 14.7514L17.4373 14.7514L17.4096 14.7753L16.4897 15.5682C16.1759 15.8387 15.7023 15.8035 15.4319 15.4898C15.1615 15.176 15.1966 14.7025 15.5103 14.432L16.4302 13.6391C16.4914 13.5864 16.5442 13.5409 16.5907 13.5001C16.5442 13.4593 16.4914 13.4139 16.4302 13.3611L15.5103 12.5682ZM9.0681 11.5105C9.33853 11.8242 9.30341 12.2978 8.98966 12.5682L8.06975 13.3611C8.00858 13.4139 7.95583 13.4593 7.90931 13.5001C7.95583 13.5409 8.00858 13.5864 8.06975 13.6391L8.98966 14.432C9.30341 14.7025 9.33853 15.176 9.0681 15.4898C8.79767 15.8035 8.32409 15.8387 8.01034 15.5682L7.09044 14.7753L7.06265 14.7514C6.89388 14.606 6.71456 14.4516 6.58344 14.3035C6.43518 14.136 6.25 13.8702 6.25 13.5001C6.25 13.1301 6.43518 12.8643 6.58344 12.6968C6.71456 12.5487 6.89388 12.3942 7.06265 12.2489L7.09044 12.2249L8.01034 11.432C8.32409 11.1616 8.79767 11.1967 9.0681 11.5105ZM13.6966 11.2786C13.8504 10.894 13.6633 10.4576 13.2787 10.3037C12.8942 10.1499 12.4577 10.3369 12.3038 10.7215L10.3038 15.7215C10.15 16.1061 10.3371 16.5426 10.7217 16.6964C11.1062 16.8503 11.5427 16.6632 11.6966 16.2786L13.6966 11.2786Z',
  d7: 'M11.9425 5.20644L12.4635 6.25008L16.7904 6.25008H16.7905C17.8095 6.25007 18.6312 6.25006 19.2905 6.31713C19.9711 6.38636 20.5613 6.53321 21.0834 6.88207C21.4929 7.15566 21.8444 7.50723 22.118 7.91669C22.4669 8.4388 22.6137 9.029 22.683 9.70956C22.75 10.3689 22.75 11.2733 22.75 12.2923C22.75 14.0121 22.75 15.3603 22.6408 16.4337C22.5295 17.5284 22.2983 18.4203 21.781 19.1946C21.3614 19.8225 20.8224 20.3615 20.1945 20.781C19.4202 21.2984 18.5283 21.5295 17.4336 21.6409C16.3602 21.7501 15.012 21.7501 13.2923 21.7501H11.9426C9.63423 21.7501 7.82519 21.7501 6.41371 21.5603C4.96897 21.3661 3.82895 20.9608 2.93414 20.0659C2.03933 19.1711 1.63399 18.0311 1.43975 16.5864C1.24998 15.1749 1.24999 13.3659 1.25 11.0575V11.0575V7.90959V7.90958C1.24999 7.03085 1.24998 6.32212 1.30044 5.74978C1.35242 5.16004 1.46238 4.64396 1.7254 4.17266C2.06428 3.56541 2.56533 3.06435 3.17258 2.72548C3.64388 2.46246 4.15996 2.3525 4.7497 2.30052C5.32205 2.25006 6.2039 2.25003 7.08264 2.25004C8.11205 2.24958 8.82373 2.24927 9.4626 2.48884C10.8581 3.01213 11.4704 4.2513 11.9425 5.20644Z',
  d8: 'M15.4319 11.5104C15.1615 11.8241 15.1966 12.2977 15.5103 12.5681L16.4302 13.361C16.4914 13.4137 16.5442 13.4592 16.5907 13.5C16.5442 13.5408 16.4914 13.5863 16.4302 13.639L15.5103 14.4319C15.1966 14.7023 15.1615 15.1759 15.4319 15.4897C15.7023 15.8034 16.1759 15.8385 16.4897 15.5681L17.4096 14.7752C17.4188 14.7673 17.4281 14.7593 17.4373 14.7513C17.6061 14.6059 17.7854 14.4515 17.9166 14.3033C18.0648 14.1359 18.25 13.8701 18.25 13.5C18.25 13.13 18.0648 12.8642 17.9166 12.6967C17.7854 12.5486 17.6061 12.3941 17.4373 12.2487C17.4281 12.2407 17.4188 12.2328 17.4096 12.2248C17.4096 12.2248 17.4096 12.2248 17.4096 12.2248L16.4897 11.4319C16.1759 11.1615 15.7023 11.1966 15.4319 11.5104Z',
  d9: 'M9.0681 11.5104C9.33853 11.8241 9.30341 12.2977 8.98966 12.5681L8.06975 13.361C8.00858 13.4137 7.95583 13.4592 7.90931 13.5C7.95583 13.5408 8.00858 13.5863 8.06975 13.639L8.98966 14.4319C9.30341 14.7023 9.33853 15.1759 9.0681 15.4897C8.79767 15.8034 8.32409 15.8385 8.01034 15.5681L7.09044 14.7752C7.08121 14.7673 7.07195 14.7593 7.06265 14.7513C6.89388 14.6059 6.71456 14.4515 6.58344 14.3033C6.43518 14.1359 6.25 13.8701 6.25 13.5C6.25 13.13 6.43518 12.8642 6.58344 12.6967C6.71456 12.5486 6.89388 12.3941 7.06265 12.2487C7.07195 12.2407 7.08121 12.2328 7.09044 12.2248C7.09044 12.2248 7.09044 12.2248 7.09044 12.2248L8.01034 11.4319C8.32409 11.1615 8.79767 11.1966 9.0681 11.5104Z',
  d10: 'M13.2787 10.3038C13.6633 10.4577 13.8504 10.8942 13.6966 11.2787L11.6966 16.2787C11.5427 16.6633 11.1062 16.8504 10.7217 16.6966C10.3371 16.5427 10.15 16.1062 10.3038 15.7217L12.3038 10.7217C12.4577 10.3371 12.8942 10.15 13.2787 10.3038Z',
  d11: 'M15 12L17 14L15 16',
  d12: 'M9 12L7 14L9 16',
  d13: 'M13 11L11 17',
  d14: 'M6.98656 6.99543H11.9984M11.9984 6.99543H21.99C21.9955 6.99543 22 6.99991 22 7.00543V20.99C22 20.9955 21.9955 21 21.99 21L2.01042 20.9457C2.00491 20.9457 2.00044 20.9412 2.00044 20.9357L2 3.00999C2 3.00447 2.00448 3 2.01001 3H8.99515L11.9984 6.99543Z',
  d15: 'M2 2.25C1.80109 2.25 1.61032 2.32902 1.46967 2.46967C1.32902 2.61032 1.25 2.80109 1.25 3V21C1.25 21.4142 1.58579 21.75 2 21.75H22C22.4142 21.75 22.75 21.4142 22.75 21V7C22.75 6.58579 22.4142 6.25 22 6.25H12.375L9.375 2.25001L2 2.25ZM14.4688 12.5304L15.9384 14.0001L14.4688 15.4697L15.5294 16.5304L18.0597 14.0001L15.5294 11.4697L14.4688 12.5304ZM8.46978 11.4697L9.53044 12.5304L8.06077 14.0001L9.53044 15.4697L8.46978 16.5304L5.93945 14.0001L8.46978 11.4697ZM12.2891 10.7627L10.2891 16.7627L11.7121 17.237L13.7121 11.237L12.2891 10.7627Z',
} as const;

export const IconCodeFolderStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-folder-stroke-rounded IconCodeFolderStrokeRounded"
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

export const IconCodeFolderDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-folder-duotone-rounded IconCodeFolderDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCodeFolderTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-folder-twotone-rounded IconCodeFolderTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconCodeFolderSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-folder-solid-rounded IconCodeFolderSolidRounded"
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

export const IconCodeFolderBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-folder-bulk-rounded IconCodeFolderBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconCodeFolderStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-folder-stroke-sharp IconCodeFolderStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconCodeFolderSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-folder-solid-sharp IconCodeFolderSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCodeFolder: TheIconSelfPack = {
  name: 'CodeFolder',
  StrokeRounded: IconCodeFolderStrokeRounded,
  DuotoneRounded: IconCodeFolderDuotoneRounded,
  TwotoneRounded: IconCodeFolderTwotoneRounded,
  SolidRounded: IconCodeFolderSolidRounded,
  BulkRounded: IconCodeFolderBulkRounded,
  StrokeSharp: IconCodeFolderStrokeSharp,
  SolidSharp: IconCodeFolderSolidSharp,
};