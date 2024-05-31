import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.69406 3.61971C10.8161 2.53268 11.3771 1.98917 12.0634 2.00004C12.7496 2.01091 13.2931 2.57192 14.3802 3.69394C15.4672 4.81596 16.0107 5.37697 15.9998 6.06324C15.989 6.7495 15.428 7.29302 14.3059 8.38004C13.1839 9.46707 12.6229 10.0106 11.9366 9.99972C11.2504 9.98885 10.7069 9.42784 9.61983 8.30581C8.5328 7.18379 7.98929 6.62278 8.00016 5.93652C8.01103 5.25025 8.57204 4.70674 9.69406 3.61971Z',
  d2: 'M7 13.4999C7 14.8806 5.88071 15.9999 4.5 15.9999C3.11929 15.9999 2 14.8806 2 13.4999C2 12.1192 3.11929 10.9999 4.5 10.9999C5.88071 10.9999 7 12.1192 7 13.4999Z',
  d3: 'M22 13.4999C22 12.1192 20.8807 10.9999 19.5 10.9999C18.1193 10.9999 17 12.1192 17 13.4999C17 14.8806 18.1193 15.9999 19.5 15.9999C20.8807 15.9999 22 14.8806 22 13.4999Z',
  d4: 'M12 9.99988L12 16.9999',
  d5: 'M9.5 8.49988L6.5 11.4999',
  d6: 'M14.5 8.49988L17.5 11.4999',
  d7: 'M9.5 19.3999C9.5 18.2685 9.5 17.7028 9.85147 17.3513C10.2029 16.9999 10.7686 16.9999 11.9 16.9999H12.1C13.2314 16.9999 13.7971 16.9999 14.1485 17.3513C14.5 17.7028 14.5 18.2685 14.5 19.3999V19.5999C14.5 20.7312 14.5 21.2969 14.1485 21.6484C13.7971 21.9999 13.2314 21.9999 12.1 21.9999H11.9C10.7686 21.9999 10.2029 21.9999 9.85147 21.6484C9.5 21.2969 9.5 20.7312 9.5 19.5999V19.3999Z',
  d8: 'M12 9C12.5523 9 13 9.44772 13 10L13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17L11 10C11 9.44772 11.4477 9 12 9Z',
  d9: 'M10.2071 7.79289C10.5976 8.18342 10.5976 8.81658 10.2071 9.20711L7.20711 12.2071C6.81658 12.5976 6.18342 12.5976 5.79289 12.2071C5.40237 11.8166 5.40237 11.1834 5.79289 10.7929L8.79289 7.79289C9.18342 7.40237 9.81658 7.40237 10.2071 7.79289Z',
  d10: 'M13.7929 7.79289C14.1834 7.40237 14.8166 7.40237 15.2071 7.79289L18.2071 10.7929C18.5976 11.1834 18.5976 11.8166 18.2071 12.2071C17.8166 12.5976 17.1834 12.5976 16.7929 12.2071L13.7929 9.20711C13.4024 8.81658 13.4024 8.18342 13.7929 7.79289Z',
  d11: 'M10.5967 1.79489C11.0305 1.47465 11.5022 1.24118 12.0752 1.25026C12.6483 1.25933 13.1124 1.50763 13.5358 1.84145C13.9331 2.15469 14.4403 2.67821 14.9539 3.20836L14.9539 3.20837C15.4675 3.73846 15.9046 4.18963 16.2051 4.59669C16.5254 5.03049 16.7588 5.50222 16.7497 6.07524C16.7407 6.64826 16.4924 7.11236 16.1586 7.5358C15.8453 7.93314 15.3941 8.37024 14.864 8.88381C14.3339 9.39742 13.8104 9.90462 13.4033 10.2051C12.9695 10.5254 12.4978 10.7588 11.9248 10.7497C11.3517 10.7407 10.8876 10.4924 10.4642 10.1586C10.0669 9.84532 9.62976 9.3941 9.1162 8.86396C8.60258 8.33386 8.09539 7.81038 7.79489 7.40332C7.47465 6.96952 7.24118 6.49779 7.25026 5.92476C7.25933 5.35174 7.50763 4.88764 7.84145 4.4642C8.15469 4.06686 8.64206 3.59473 9.1722 3.08117C9.7023 2.56756 10.1896 2.09539 10.5967 1.79489Z',
  d12: 'M1.25 13.5C1.25 11.7051 2.70507 10.25 4.5 10.25C6.29493 10.25 7.75 11.7051 7.75 13.5C7.75 15.2949 6.29493 16.75 4.5 16.75C2.70507 16.75 1.25 15.2949 1.25 13.5Z',
  d13: 'M16.25 13.5C16.25 15.2949 17.7051 16.75 19.5 16.75C21.2949 16.75 22.75 15.2949 22.75 13.5C22.75 11.7051 21.2949 10.25 19.5 10.25C17.7051 10.25 16.25 11.7051 16.25 13.5Z',
  d14: 'M11.853 16.25L11.9 16.25H12.1L12.147 16.25C12.6723 16.25 13.1395 16.2499 13.5167 16.3006C13.9266 16.3557 14.3406 16.4828 14.6789 16.8211C15.0172 17.1595 15.1443 17.5734 15.1994 17.9833C15.2501 18.3605 15.2501 18.8277 15.25 19.353V19.353L15.25 19.4V19.6L15.25 19.647V19.647C15.2501 20.1723 15.2501 20.6395 15.1994 21.0167C15.1443 21.4266 15.0172 21.8406 14.6789 22.1789C14.3406 22.5172 13.9266 22.6443 13.5167 22.6994C13.1395 22.7501 12.6723 22.7501 12.147 22.75H12.147L12.1 22.75H11.9L11.853 22.75H11.853C11.3277 22.7501 10.8605 22.7501 10.4833 22.6994C10.0734 22.6443 9.65946 22.5172 9.32115 22.1789C8.98283 21.8406 8.85574 21.4266 8.80063 21.0167C8.74992 20.6395 8.74996 20.1723 8.75 19.647L8.75001 19.6V19.4L8.75 19.353C8.74996 18.8277 8.74992 18.3605 8.80063 17.9833C8.85574 17.5734 8.98283 17.1595 9.32115 16.8211C9.65946 16.4828 10.0734 16.3557 10.4833 16.3006C10.8605 16.2499 11.3277 16.25 11.853 16.25Z',
  d15: 'M8.43505 8.15234L5.98047 10.6069C6.5874 10.9179 7.08369 11.4142 7.39468 12.0211L9.82809 9.58773C9.60674 9.37101 9.37108 9.12774 9.11665 8.8651C8.88172 8.62263 8.64813 8.38154 8.43505 8.15234Z',
  d16: 'M11.0005 10.5113L11.0005 16.2611C11.2608 16.2511 11.5473 16.2511 11.8535 16.2512H12.1474C12.4536 16.2511 12.7401 16.2511 13.0005 16.2611L13.0005 10.4674C12.6771 10.645 12.3259 10.7572 11.9252 10.7509C11.583 10.7455 11.2796 10.6547 11.0005 10.5113Z',
  d17: 'M14.1517 9.56656L16.6062 12.0211C16.9172 11.4142 17.4135 10.9179 18.0204 10.6069L15.587 8.17352C15.3703 8.39486 15.1271 8.6305 14.8645 8.88491C14.622 9.11984 14.3809 9.35348 14.1517 9.56656Z',
  d18: 'M12 10.0001L16 6.00012L12 2.00012L8 6.00012L12 10.0001Z',
  d19: 'M14.5 22V17H9.5V22H14.5Z',
  d20: 'M11.4697 1.46967C11.7626 1.17678 12.2374 1.17678 12.5303 1.46967L16.5303 5.46967C16.8232 5.76256 16.8232 6.23744 16.5303 6.53033L12.5303 10.5303C12.2374 10.8232 11.7626 10.8232 11.4697 10.5303L7.46967 6.53033C7.17678 6.23744 7.17678 5.76256 7.46967 5.46967L11.4697 1.46967Z',
  d21: 'M8.75 17C8.75 16.5858 9.08579 16.25 9.5 16.25H14.5C14.9142 16.25 15.25 16.5858 15.25 17V22C15.25 22.4142 14.9142 22.75 14.5 22.75H9.5C9.08579 22.75 8.75 22.4142 8.75 22V17Z',
  d22: 'M1.25 13.4998C1.25 11.7048 2.70507 10.2498 4.5 10.2498C6.29493 10.2498 7.75 11.7048 7.75 13.4998C7.75 15.2947 6.29493 16.7498 4.5 16.7498C2.70507 16.7498 1.25 15.2947 1.25 13.4998Z',
  d23: 'M16.25 13.4998C16.25 15.2947 17.7051 16.7498 19.5 16.7498C21.2949 16.7498 22.75 15.2947 22.75 13.4998C22.75 11.7048 21.2949 10.2498 19.5 10.2498C17.7051 10.2498 16.25 11.7048 16.25 13.4998Z',
  d24: 'M11 16.9998L11 9.99976L13 9.99976L13 16.9998L11 16.9998Z',
  d25: 'M5.79297 10.7927L8.79297 7.79272L10.2072 9.20694L7.20718 12.2069L5.79297 10.7927Z',
  d26: 'M16.793 12.2069L13.793 9.20694L15.2072 7.79272L18.2072 10.7927L16.793 12.2069Z',
} as const;

export const IconWorkflowSquare10StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-10-stroke-rounded IconWorkflowSquare10StrokeRounded"
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare10DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-10-duotone-rounded IconWorkflowSquare10DuotoneRounded"
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
        d={d.d3} 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare10TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-10-twotone-rounded IconWorkflowSquare10TwotoneRounded"
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare10SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-10-solid-rounded IconWorkflowSquare10SolidRounded"
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconWorkflowSquare10BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-10-bulk-rounded IconWorkflowSquare10BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconWorkflowSquare10StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-10-stroke-sharp IconWorkflowSquare10StrokeSharp"
    >
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
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare10SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-10-solid-sharp IconWorkflowSquare10SolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfWorkflowSquare10: TheIconSelfPack = {
  name: 'WorkflowSquare10',
  StrokeRounded: IconWorkflowSquare10StrokeRounded,
  DuotoneRounded: IconWorkflowSquare10DuotoneRounded,
  TwotoneRounded: IconWorkflowSquare10TwotoneRounded,
  SolidRounded: IconWorkflowSquare10SolidRounded,
  BulkRounded: IconWorkflowSquare10BulkRounded,
  StrokeSharp: IconWorkflowSquare10StrokeSharp,
  SolidSharp: IconWorkflowSquare10SolidSharp,
};