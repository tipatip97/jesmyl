import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 19.5C2 18.3215 2 17.7322 2.43934 17.3661C2.87868 17 3.58579 17 5 17C6.41421 17 7.12132 17 7.56066 17.3661C8 17.7322 8 18.3215 8 19.5C8 20.6785 8 21.2678 7.56066 21.6339C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.6339C2 21.2678 2 20.6785 2 19.5Z',
  d2: 'M16 19.5C16 18.3215 16 17.7322 16.4393 17.3661C16.8787 17 17.5858 17 19 17C20.4142 17 21.1213 17 21.5607 17.3661C22 17.7322 22 18.3215 22 19.5C22 20.6785 22 21.2678 21.5607 21.6339C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.6339C16 21.2678 16 20.6785 16 19.5Z',
  d3: 'M19 17C19 13.6907 18.2562 13 14.6923 13H9.30769C5.74379 13 5 13.6907 5 17',
  d4: 'M12 10H12.5625C14.1425 10 14.9325 10 15.5 9.62549C15.7457 9.46336 15.9566 9.25502 16.1208 9.01238C16.5 8.45188 16.5 7.67163 16.5 6.11111C16.5 5.1748 16.5 4.70665 16.2725 4.37035C16.174 4.22476 16.0474 4.09976 15.9 4.00249C15.5595 3.77778 15.0855 3.77778 14.1375 3.77778H12.6425C12.5126 3.77778 12.4476 3.77778 12.3879 3.76912C12.1645 3.73672 11.9647 3.61544 11.8358 3.43402C11.8014 3.38555 11.7726 3.32861 11.715 3.21472C11.4788 2.74826 11.263 2.27872 10.7397 2.08489C10.5105 2 10.2486 2 9.72492 2C8.90751 2 8.4988 2 8.19213 2.16903C7.97352 2.28952 7.79314 2.46767 7.67114 2.68358C7.5 2.98647 7.5 3.39013 7.5 4.19745V5.55556C7.5 7.65069 7.5 8.69825 8.15901 9.34913C8.81802 10 9.87868 10 12 10Z',
  d5: 'M5.04283 16.2501C5.71342 16.2501 6.27896 16.2501 6.72942 16.3006C7.1991 16.3532 7.65703 16.4703 8.04081 16.7901C8.44434 17.1263 8.61268 17.5576 8.68552 18.0091C8.75015 18.4097 8.75008 18.9034 8.75001 19.4461L8.75001 19.5001L8.75001 19.5541C8.75008 20.0968 8.75015 20.5906 8.68552 20.9912C8.61268 21.4427 8.44434 21.8739 8.04081 22.2102C7.65703 22.53 7.1991 22.6471 6.72942 22.6997C6.27895 22.7502 5.71341 22.7501 5.04281 22.7501H5.0428H4.95722H4.95721C4.28661 22.7501 3.72107 22.7502 3.27059 22.6997C2.80092 22.6471 2.34298 22.53 1.95921 22.2102C1.55568 21.8739 1.38734 21.4427 1.3145 20.9912C1.24987 20.5906 1.24993 20.0968 1.25 19.5541L1.25 19.5541L1.25001 19.5001L1.25 19.4461L1.25 19.4461C1.24993 18.9034 1.24987 18.4097 1.3145 18.0091C1.38734 17.5576 1.55568 17.1263 1.95921 16.7901C2.34298 16.4703 2.80092 16.3532 3.27059 16.3006C3.72106 16.2501 4.2866 16.2501 4.95719 16.2501H4.95722H5.0428H5.04283Z',
  d6: 'M19.0428 16.2501C19.7134 16.2501 20.279 16.2501 20.7294 16.3006C21.1991 16.3532 21.657 16.4703 22.0408 16.7901C22.4443 17.1263 22.6127 17.5576 22.6855 18.0091C22.7501 18.4097 22.7501 18.9034 22.75 19.4462L22.75 19.5001L22.75 19.5541C22.7501 20.0968 22.7501 20.5906 22.6855 20.9912C22.6127 21.4427 22.4443 21.8739 22.0408 22.2102C21.657 22.53 21.1991 22.6471 20.7294 22.6997C20.279 22.7502 19.7134 22.7501 19.0428 22.7501H19.0428H18.9572H18.9572C18.2866 22.7501 17.7211 22.7502 17.2706 22.6997C16.8009 22.6471 16.343 22.53 15.9592 22.2102C15.5557 21.8739 15.3873 21.4427 15.3145 20.9912C15.2499 20.5906 15.2499 20.0968 15.25 19.5541L15.25 19.5541L15.25 19.5001L15.25 19.4461L15.25 19.4461C15.2499 18.9034 15.2499 18.4097 15.3145 18.0091C15.3873 17.5576 15.5557 17.1263 15.9592 16.7901C16.343 16.4703 16.8009 16.3532 17.2706 16.3006C17.7211 16.2501 18.2866 16.2501 18.9572 16.2501H18.9572H19.0428H19.0428Z',
  d7: 'M6.93122 12.1799C7.60198 12.0431 8.39678 12.0001 9.30769 12.0001H14.6923C15.6032 12.0001 16.398 12.0431 17.0688 12.1799C17.7469 12.3183 18.3673 12.566 18.8631 13.0263C19.8489 13.9418 20 15.3795 20 17.0001C20 17.5524 19.5523 18.0001 19 18.0001C18.4477 18.0001 18 17.5524 18 17.0001C18 15.3114 17.7792 14.7491 17.5022 14.4919C17.3665 14.3659 17.1327 14.2342 16.669 14.1396C16.198 14.0435 15.5633 14.0001 14.6923 14.0001H9.30769C8.43665 14.0001 7.80202 14.0435 7.33097 14.1396C6.86731 14.2342 6.63353 14.3659 6.49784 14.4919C6.22083 14.7491 6 15.3114 6 17.0001C6 17.5524 5.55228 18.0001 5 18.0001C4.44772 18.0001 4 17.5524 4 17.0001C4 15.3795 4.15107 13.9418 5.13693 13.0263C5.63267 12.566 6.25308 12.3183 6.93122 12.1799Z',
  d8: 'M11.0002 1.38166C11.7884 1.67359 12.1334 2.37033 12.338 2.78357C12.3763 2.865 12.4909 3.02786 12.6425 3.02786L14.1728 3.02786C14.6166 3.02784 15.0042 3.02782 15.3216 3.05971C15.6594 3.09365 15.9996 3.16971 16.3131 3.37659C16.5423 3.52784 16.7397 3.72262 16.8937 3.95018C17.1051 4.26261 17.183 4.6025 17.2176 4.93897C17.25 5.25385 17.25 5.63788 17.25 6.07535L17.25 6.15055C17.25 6.89732 17.25 7.51488 17.1987 8.01368C17.145 8.53422 17.0292 9.00818 16.742 9.43272C16.5224 9.75733 16.2406 10.0354 15.9131 10.2515C15.4862 10.5333 15.0102 10.6468 14.4859 10.6995C13.9823 10.7501 13.3583 10.7501 12.6012 10.7501H12.6011H11.9476H11.9476C10.9315 10.7501 10.0946 10.7501 9.43242 10.6622C8.73823 10.57 8.12442 10.3692 7.63199 9.88282C7.13826 9.3952 6.93316 8.7852 6.83923 8.09518C6.74995 7.43932 6.74997 6.61113 6.75 5.60904V5.60901L6.75 4.19754L6.75 4.16672V4.16669C6.74998 3.7894 6.74997 3.4581 6.77436 3.18476C6.80033 2.89381 6.85841 2.59746 7.01817 2.31471C7.20905 1.97689 7.49054 1.69943 7.8301 1.51227C8.11323 1.35622 8.40965 1.29948 8.70195 1.27404C8.97747 1.25005 9.43647 1.24996 9.81926 1.24998C10.2477 1.24928 10.641 1.24863 11.0002 1.38166Z',
  d9: 'M9.30776 12C8.39685 12 7.60205 12.043 6.93129 12.1798C6.25314 12.3181 5.63274 12.5659 5.137 13.0262C4.30482 13.7989 4.06745 14.9438 4.01367 16.2567C4.29994 16.25 4.61492 16.25 4.95727 16.25H5.0429C5.3975 16.25 5.72274 16.25 6.01711 16.2574C6.0739 15.1353 6.26626 14.7069 6.4979 14.4918C6.6336 14.3658 6.86738 14.234 7.33104 14.1394C7.80209 14.0434 8.43672 14 9.30776 14H14.6924C15.5634 14 16.198 14.0434 16.6691 14.1394C17.1328 14.234 17.3665 14.3658 17.5022 14.4918C17.7339 14.7069 17.9262 15.1353 17.983 16.2574C18.2774 16.25 18.6027 16.25 18.9573 16.25H19.0429C19.3852 16.25 19.7002 16.25 19.9865 16.2567C19.9327 14.9438 19.6953 13.7989 18.8631 13.0262C18.3674 12.5659 17.747 12.3181 17.0688 12.1798C16.3981 12.043 15.6033 12 14.6924 12H9.30776Z',
  d10: 'M8 22V17H2V22H8Z',
  d11: 'M22 22V17H16V22H22Z',
  d12: 'M5 13V12.25C4.80105 12.25 4.61025 12.329 4.4696 12.4697C4.32894 12.6104 4.24994 12.8013 4.25 13.0002L5 13ZM19.0011 13H19.7511C19.7511 12.5858 19.4153 12.25 19.0011 12.25V13ZM4.25112 17.0002C4.25123 17.4144 4.58711 17.7501 5.00133 17.75C5.41554 17.7499 5.75123 17.414 5.75112 16.9998L4.25112 17.0002ZM5 13.75H19.0011V12.25H5V13.75ZM4.25 13.0002L4.25112 17.0002L5.75112 16.9998L5.75 12.9998L4.25 13.0002ZM18.2511 13V17H19.7511V13H18.2511Z',
  d13: 'M7.5 2V1.25C7.08579 1.25 6.75 1.58579 6.75 2H7.5ZM7.5 10H6.75C6.75 10.4142 7.08579 10.75 7.5 10.75V10ZM16.5 10V10.75C16.9142 10.75 17.25 10.4142 17.25 10H16.5ZM16.5 4H17.25C17.25 3.58579 16.9142 3.25 16.5 3.25V4ZM12.5 4L11.9697 4.53033L12.1893 4.75H12.5V4ZM10.5 2L11.0303 1.46967L10.8107 1.25H10.5V2ZM6.75 2V10H8.25V2H6.75ZM7.5 10.75H16.5V9.25H7.5V10.75ZM17.25 10V4H15.75V10H17.25ZM16.5 3.25H12.5V4.75H16.5V3.25ZM13.0303 3.46967L11.0303 1.46967L9.96967 2.53033L11.9697 4.53033L13.0303 3.46967ZM10.5 1.25H7.5V2.75H10.5V1.25Z',
  d14: 'M1.25 17C1.25 16.5858 1.58579 16.25 2 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17V22C8.75 22.4142 8.41421 22.75 8 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V17Z',
  d15: 'M15.25 17C15.25 16.5858 15.5858 16.25 16 16.25H22C22.4142 16.25 22.75 16.5858 22.75 17V22C22.75 22.4142 22.4142 22.75 22 22.75H16C15.5858 22.75 15.25 22.4142 15.25 22V17Z',
  d16: 'M4.29279 12.293C4.48034 12.1054 4.73474 12 5 12H19.0011C19.5534 12 20.0011 12.4477 20.0011 13V17H18.0011V14H6.00028L6.00112 16.9997L4.00112 17.0003L4 13.0003C3.99993 12.735 4.10525 12.4806 4.29279 12.293Z',
  d17: 'M6.75 2C6.75 1.58579 7.08579 1.25 7.5 1.25H10.8107L12.8107 3.25H16.5C16.9142 3.25 17.25 3.58579 17.25 4V10C17.25 10.4142 16.9142 10.75 16.5 10.75H7.5C7.08579 10.75 6.75 10.4142 6.75 10V2Z',
} as const;

export const IconStructureFolderStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-stroke-rounded IconStructureFolderStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconStructureFolderDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-duotone-rounded IconStructureFolderDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconStructureFolderTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-twotone-rounded IconStructureFolderTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFolderSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-solid-rounded IconStructureFolderSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFolderBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-bulk-rounded IconStructureFolderBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFolderStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-stroke-sharp IconStructureFolderStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFolderSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-folder-solid-sharp IconStructureFolderSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStructureFolder: TheIconSelfPack = {
  name: 'StructureFolder',
  StrokeRounded: IconStructureFolderStrokeRounded,
  DuotoneRounded: IconStructureFolderDuotoneRounded,
  TwotoneRounded: IconStructureFolderTwotoneRounded,
  SolidRounded: IconStructureFolderSolidRounded,
  BulkRounded: IconStructureFolderBulkRounded,
  StrokeSharp: IconStructureFolderStrokeSharp,
  SolidSharp: IconStructureFolderSolidSharp,
};