import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 3.5C17.7712 3.5 19.6569 3.5 20.8284 4.7448C22 5.98959 22 7.99306 22 12C22 16.0069 22 18.0104 20.8284 19.2552C19.6569 20.5 17.7712 20.5 14 20.5L10 20.5C6.22876 20.5 4.34315 20.5 3.17157 19.2552C2 18.0104 2 16.0069 2 12C2 7.99306 2 5.98959 3.17157 4.7448C4.34315 3.5 6.22876 3.5 10 3.5L14 3.5Z',
  d2: 'M5 15.4999C6.60865 13.3625 10.3539 13.2458 12 15.4999M10.249 10.25C10.249 11.2165 9.46552 12 8.49902 12C7.53253 12 6.74902 11.2165 6.74902 10.25C6.74902 9.2835 7.53253 8.5 8.49902 8.5C9.46552 8.5 10.249 9.2835 10.249 10.25Z',
  d3: 'M15 9.5L19 9.5',
  d4: 'M15 13.5H17',
  d5: 'M20.8284 4.7448C19.6569 3.5 17.7712 3.5 14 3.5H10C6.22876 3.5 4.34315 3.5 3.17157 4.7448C2 5.98959 2 7.99306 2 12C2 16.0069 2 18.0104 3.17157 19.2552C4.34315 20.5 6.22876 20.5 10 20.5H14C17.7712 20.5 19.6569 20.5 20.8284 19.2552C22 18.0104 22 16.0069 22 12C22 7.99306 22 5.98959 20.8284 4.7448ZM8.5 12C9.4665 12 10.25 11.2165 10.25 10.25C10.25 9.2835 9.4665 8.5 8.5 8.5C7.5335 8.5 6.75 9.2835 6.75 10.25C6.75 11.2165 7.5335 12 8.5 12Z',
  d6: 'M22.75 12.0537V12.0537V12.0538C22.75 14.0117 22.75 15.5532 22.5976 16.7576C22.4417 17.9901 22.1147 18.9829 21.3746 19.7692C20.6284 20.562 19.6762 20.9182 18.4951 21.0869C17.3529 21.25 15.8946 21.25 14.0595 21.25H9.94047C8.10537 21.25 6.6471 21.25 5.50485 21.0869C4.32381 20.9182 3.37155 20.562 2.62542 19.7692C1.88534 18.9829 1.55834 17.9901 1.40238 16.7576C1.24998 15.5532 1.24999 14.0116 1.25 12.0537V11.9463C1.24999 9.98836 1.24998 8.44685 1.40238 7.24244C1.55834 6.0099 1.88535 5.01711 2.62542 4.23077C3.37155 3.43801 4.32381 3.08185 5.50485 2.91314C6.64711 2.74997 8.10538 2.74998 9.94049 2.75H9.9405H14.0595H14.0595C15.8946 2.74998 17.3529 2.74997 18.4951 2.91314C19.6762 3.08185 20.6284 3.43801 21.3746 4.23077C22.1147 5.01711 22.4417 6.0099 22.5976 7.24244C22.75 8.44682 22.75 9.98829 22.75 11.9462V11.9462V11.9463V12.0537ZM10.75 9.22222C10.75 10.4495 9.74264 11.4444 8.5 11.4444C7.25736 11.4444 6.25 10.4495 6.25 9.22222C6.25 7.99492 7.25736 7 8.5 7C9.74264 7 10.75 7.99492 10.75 9.22222ZM5.78879 13.3787C5.71843 13.4252 5.63673 13.4766 5.54774 13.5325C4.74199 14.0391 3.33903 14.9212 4.35633 15.9981C4.90815 16.5822 5.52275 17 6.29543 17H10.7046C11.4773 17 12.0918 16.5822 12.6437 15.9981C13.661 14.9212 12.258 14.0391 11.4523 13.5325C11.3633 13.4766 11.2816 13.4252 11.2112 13.3787C9.55241 12.2812 7.44759 12.2812 5.78879 13.3787ZM15 8.75001C14.5857 8.75001 14.25 9.0858 14.25 9.50001C14.25 9.91423 14.5857 10.25 15 10.25H19C19.4142 10.25 19.75 9.91423 19.75 9.50001C19.75 9.0858 19.4142 8.75001 19 8.75001H15ZM15 12.75C14.5857 12.75 14.25 13.0858 14.25 13.5C14.25 13.9142 14.5857 14.25 15 14.25H17C17.4142 14.25 17.75 13.9142 17.75 13.5C17.75 13.0858 17.4142 12.75 17 12.75H15Z',
  d7: 'M22.75 12.0537C22.75 14.0117 22.75 15.5532 22.5976 16.7576C22.4417 17.9901 22.1147 18.9829 21.3746 19.7692C20.6284 20.562 19.6762 20.9182 18.4951 21.0869C17.3529 21.25 15.8946 21.25 14.0595 21.25L9.94047 21.25C8.10537 21.25 6.6471 21.25 5.50485 21.0869C4.32381 20.9182 3.37155 20.562 2.62542 19.7692C1.88534 18.9829 1.55834 17.9901 1.40238 16.7576C1.24998 15.5532 1.24999 14.0116 1.25 12.0537L1.25 11.9463C1.24999 9.98836 1.24998 8.44685 1.40238 7.24244C1.55834 6.0099 1.88535 5.01711 2.62542 4.23077C3.37155 3.43801 4.32381 3.08185 5.50485 2.91314C6.64711 2.74997 8.10538 2.74998 9.94049 2.75L9.9405 2.75L14.0595 2.75L14.0595 2.75C15.8946 2.74998 17.3529 2.74997 18.4951 2.91314C19.6762 3.08185 20.6284 3.43801 21.3746 4.23077C22.1147 5.01711 22.4417 6.0099 22.5976 7.24244C22.75 8.44685 22.75 9.98835 22.75 11.9463L22.75 12.0537Z',
  d8: 'M10.75 9.22222C10.75 10.4495 9.74264 11.4444 8.5 11.4444C7.25736 11.4444 6.25 10.4495 6.25 9.22222C6.25 7.99492 7.25736 7 8.5 7C9.74264 7 10.75 7.99492 10.75 9.22222Z',
  d9: 'M5.78879 13.3787C5.0814 13.8467 3.22668 14.8023 4.35633 15.9981C4.90815 16.5822 5.52275 17 6.29543 17H10.7046C11.4773 17 12.0918 16.5822 12.6437 15.9981C13.7733 14.8023 11.9186 13.8467 11.2112 13.3787C9.55241 12.2812 7.44759 12.2812 5.78879 13.3787Z',
  d10: 'M14.25 9.5C14.25 9.08579 14.5858 8.75 15 8.75H19C19.4142 8.75 19.75 9.08579 19.75 9.5C19.75 9.91421 19.4142 10.25 19 10.25H15C14.5858 10.25 14.25 9.91421 14.25 9.5Z',
  d11: 'M14.25 13.5C14.25 13.0858 14.5858 12.75 15 12.75H17C17.4142 12.75 17.75 13.0858 17.75 13.5C17.75 13.9142 17.4142 14.25 17 14.25H15C14.5858 14.25 14.25 13.9142 14.25 13.5Z',
  d12: 'M2 20.5H22V3.5H2V20.5Z',
  d13: 'M5 16C6.60865 13.8626 10.3539 13.746 12 16M10.249 10.25C10.249 11.2165 9.46552 12 8.49902 12C7.53253 12 6.74902 11.2165 6.74902 10.25C6.74902 9.2835 7.53253 8.5 8.49902 8.5C9.46552 8.5 10.249 9.2835 10.249 10.25Z',
  d14: 'M14 9.5H19M14 13.5H17',
  d15: 'M1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H22C22.4142 2.75 22.75 3.08579 22.75 3.5V20.5C22.75 20.9142 22.4142 21.25 22 21.25H2C1.58579 21.25 1.25 20.9142 1.25 20.5V3.5ZM6.00061 10.25C6.00061 8.86929 7.1199 7.75 8.50061 7.75C9.88132 7.75 11.0006 8.86929 11.0006 10.25C11.0006 11.6307 9.88132 12.75 8.50061 12.75C7.1199 12.75 6.00061 11.6307 6.00061 10.25ZM5.60082 16.451L4.40234 15.549C5.37151 14.2613 6.94823 13.6199 8.4794 13.6033C10.0146 13.5866 11.6141 14.1977 12.6073 15.5577L11.3959 16.4423L5.60082 16.451ZM14 10.2499H19V8.74988H14V10.2499ZM14 14.2499H17V12.7499H14V14.2499Z',
} as const;

export const IconStudentCardStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="student-card-stroke-rounded IconStudentCardStrokeRounded"
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

export const IconStudentCardDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="student-card-duotone-rounded IconStudentCardDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconStudentCardTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="student-card-twotone-rounded IconStudentCardTwotoneRounded"
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

export const IconStudentCardSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="student-card-solid-rounded IconStudentCardSolidRounded"
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

export const IconStudentCardBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="student-card-bulk-rounded IconStudentCardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconStudentCardStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="student-card-stroke-sharp IconStudentCardStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStudentCardSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="student-card-solid-sharp IconStudentCardSolidSharp"
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

export const iconPackOfStudentCard: TheIconSelfPack = {
  name: 'StudentCard',
  StrokeRounded: IconStudentCardStrokeRounded,
  DuotoneRounded: IconStudentCardDuotoneRounded,
  TwotoneRounded: IconStudentCardTwotoneRounded,
  SolidRounded: IconStudentCardSolidRounded,
  BulkRounded: IconStudentCardBulkRounded,
  StrokeSharp: IconStudentCardStrokeSharp,
  SolidSharp: IconStudentCardSolidSharp,
};