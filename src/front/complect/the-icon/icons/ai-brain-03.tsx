import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 16.5001C4 18.1569 5.34315 19.5001 7 19.5001C7 20.8808 8.11929 22.0001 9.5 22.0001C10.8807 22.0001 12 20.8808 12 19.5001C12 20.8808 13.1193 22 14.5 22C15.8807 22 17 20.8807 17 19.5C18.6569 19.5 20 18.1569 20 16.5C20 15.9313 19.8418 15.3996 19.567 14.9465C20.9527 14.6814 22 13.463 22 12C22 10.537 20.9527 9.31855 19.567 9.0535C19.8418 8.60037 20 8.06866 20 7.5C20 5.84315 18.6569 4.5 17 4.5C17 3.11929 15.8807 2 14.5 2C13.1193 2 12 3.11938 12 4.50009C12 3.11938 10.8807 2.00009 9.5 2.00009C8.11929 2.00009 7 3.11938 7 4.50009C5.34315 4.50009 4 5.84324 4 7.50009C4 8.06876 4.15822 8.60046 4.43304 9.05359C3.04727 9.31865 2 10.5371 2 12.0001C2 13.4631 3.04727 14.6815 4.43304 14.9466C4.15822 15.3997 4 15.9314 4 16.5001Z',
  d2: 'M7.5 14.5L9.34189 8.97434C9.43631 8.69107 9.7014 8.5 10 8.5C10.2986 8.5 10.5637 8.69107 10.6581 8.97434L12.5 14.5M15.5 8.5V14.5M8.5 12.5H11.5',
  d3: 'M9.5 22.7501C10.5052 22.7501 11.4039 22.2937 12 21.5769C12.5962 22.2937 13.4948 22.75 14.5 22.75C16.0585 22.75 17.3608 21.653 17.6768 20.1891C19.4248 19.8705 20.75 18.34 20.75 16.5C20.75 16.1174 20.6925 15.7476 20.5856 15.399C21.8641 14.8017 22.75 13.5048 22.75 12C22.75 10.4952 21.8641 9.19833 20.5856 8.60095C20.6925 8.25245 20.75 7.88261 20.75 7.5C20.75 5.66001 19.4248 4.12953 17.6768 3.81092C17.3608 2.34698 16.0585 1.25 14.5 1.25C13.4948 1.25 12.5961 1.70641 12 2.42329C11.4038 1.70645 10.5052 1.25009 9.5 1.25009C7.94152 1.25009 6.63925 2.34707 6.3232 3.81101C4.57518 4.12963 3.25 5.66011 3.25 7.50009C3.25 7.8827 3.30751 8.25255 3.41442 8.60105C2.13588 9.19842 1.25 10.4953 1.25 12.0001C1.25 13.5049 2.13588 14.8018 3.41442 15.3991C3.30751 15.7476 3.25 16.1175 3.25 16.5001C3.25 18.3401 4.57518 19.8706 6.3232 20.1892C6.63925 21.6531 7.94152 22.7501 9.5 22.7501ZM10.0002 7.75C9.37879 7.75 8.82709 8.14764 8.63058 8.73717L6.78869 14.2628C6.65771 14.6558 6.87008 15.0805 7.26303 15.2115C7.65599 15.3425 8.08073 15.1301 8.21172 14.7372L8.70744 13.25H11.293L11.7887 14.7372C11.9197 15.1301 12.3444 15.3425 12.7374 15.2115C13.1303 15.0805 13.3427 14.6558 13.2117 14.2628L11.3698 8.73717C11.1733 8.14764 10.6216 7.75 10.0002 7.75ZM10.0002 9.37171L10.793 11.75H9.20744L10.0002 9.37171ZM16.2502 8.5C16.2502 8.08579 15.9144 7.75 15.5002 7.75C15.086 7.75 14.7502 8.08579 14.7502 8.5V14.5C14.7502 14.9142 15.086 15.25 15.5002 15.25C15.9144 15.25 16.2502 14.9142 16.2502 14.5V8.5Z',
  d4: 'M12 21.5769C11.4039 22.2937 10.5052 22.7501 9.5 22.7501C7.94152 22.7501 6.63925 21.6531 6.3232 20.1892C4.57518 19.8706 3.25 18.3401 3.25 16.5001C3.25 16.1175 3.30751 15.7476 3.41442 15.3991C2.13588 14.8018 1.25 13.5049 1.25 12.0001C1.25 10.4953 2.13588 9.19842 3.41442 8.60105C3.30751 8.25255 3.25 7.8827 3.25 7.50009C3.25 5.66011 4.57518 4.12963 6.3232 3.81101C6.63925 2.34707 7.94152 1.25009 9.5 1.25009C10.5052 1.25009 11.4038 1.70645 12 2.42329C12.5961 1.70641 13.4948 1.25 14.5 1.25C16.0585 1.25 17.3608 2.34698 17.6768 3.81092C19.4248 4.12953 20.75 5.66001 20.75 7.5C20.75 7.88261 20.6925 8.25245 20.5856 8.60095C21.8641 9.19833 22.75 10.4952 22.75 12C22.75 13.5048 21.8641 14.8017 20.5856 15.399C20.6925 15.7476 20.75 16.1174 20.75 16.5C20.75 18.34 19.4248 19.8705 17.6768 20.1891C17.3608 21.653 16.0585 22.75 14.5 22.75C13.4948 22.75 12.5962 22.2937 12 21.5769Z',
  d5: 'M8.63058 8.73717C8.82709 8.14764 9.37879 7.75 10.0002 7.75C10.6216 7.75 11.1733 8.14764 11.3698 8.73717L13.2117 14.2628C13.3427 14.6558 13.1303 15.0805 12.7374 15.2115C12.3444 15.3425 11.9197 15.1301 11.7887 14.7372L11.293 13.25H8.70744L8.21172 14.7372C8.08073 15.1301 7.65599 15.3425 7.26303 15.2115C6.87008 15.0805 6.65771 14.6558 6.78869 14.2628L8.63058 8.73717ZM9.20744 11.75H10.793L10.0002 9.37171L9.20744 11.75ZM15.5002 7.75C15.9144 7.75 16.2502 8.08579 16.2502 8.5V14.5C16.2502 14.9142 15.9144 15.25 15.5002 15.25C15.086 15.25 14.7502 14.9142 14.7502 14.5V8.5C14.7502 8.08579 15.086 7.75 15.5002 7.75Z',
  d6: 'M8.25809 12.7324L10.0823 8.02714L11.9057 12.7324M8.25809 12.7324L7.30957 15.2083M8.25809 12.7324H11.9057M11.9057 12.7324L12.9196 15.2083M15.4768 7.73242V15.3572',
  d7: 'M9.5 22.7501C10.5052 22.7501 11.4039 22.2937 12 21.5769C12.5962 22.2937 13.4948 22.75 14.5 22.75C16.0585 22.75 17.3608 21.653 17.6768 20.1891C19.4248 19.8705 20.75 18.34 20.75 16.5C20.75 16.1174 20.6925 15.7476 20.5856 15.399C21.8641 14.8017 22.75 13.5048 22.75 12C22.75 10.4952 21.8641 9.19833 20.5856 8.60095C20.6925 8.25245 20.75 7.88261 20.75 7.5C20.75 5.66001 19.4248 4.12953 17.6768 3.81092C17.3608 2.34698 16.0585 1.25 14.5 1.25C13.4948 1.25 12.5961 1.70641 12 2.42329C11.4038 1.70645 10.5052 1.25009 9.5 1.25009C7.94152 1.25009 6.63925 2.34707 6.3232 3.81101C4.57518 4.12963 3.25 5.66011 3.25 7.50009C3.25 7.8827 3.30751 8.25255 3.41442 8.60105C2.13588 9.19842 1.25 10.4953 1.25 12.0001C1.25 13.5049 2.13588 14.8018 3.41442 15.3991C3.30751 15.7476 3.25 16.1175 3.25 16.5001C3.25 18.3401 4.57518 19.8706 6.3232 20.1892C6.63925 21.6531 7.94152 22.7501 9.5 22.7501ZM10.8731 7.75H9.26796L6.53125 14.9339L7.93298 15.4679L8.70169 13.45H11.4394L12.2081 15.4679L13.6098 14.9339L10.8731 7.75ZM10.868 11.95H9.27312L10.0705 9.85677L10.868 11.95ZM16.2491 15.25V7.75H14.7491V15.25H16.2491Z',
};

export const IconAiBrain03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-03-stroke-rounded IconAiBrain03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAiBrain03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-03-duotone-rounded IconAiBrain03DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconAiBrain03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-03-twotone-rounded IconAiBrain03TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconAiBrain03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-03-solid-rounded IconAiBrain03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiBrain03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-03-bulk-rounded IconAiBrain03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiBrain03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-03-stroke-sharp IconAiBrain03StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiBrain03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-brain-03-solid-sharp IconAiBrain03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiBrain03: TheIconSelfPack = {
  name: 'AiBrain03',
  StrokeRounded: IconAiBrain03StrokeRounded,
  DuotoneRounded: IconAiBrain03DuotoneRounded,
  TwotoneRounded: IconAiBrain03TwotoneRounded,
  SolidRounded: IconAiBrain03SolidRounded,
  BulkRounded: IconAiBrain03BulkRounded,
  StrokeSharp: IconAiBrain03StrokeSharp,
  SolidSharp: IconAiBrain03SolidSharp,
};