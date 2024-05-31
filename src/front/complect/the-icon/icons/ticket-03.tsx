import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 8.87895C21.9331 7.33687 21.7456 6.33298 21.2203 5.53884C20.9181 5.08196 20.5428 4.68459 20.1112 4.36468C18.9447 3.5 17.299 3.5 14.0078 3.5H9.99305C6.70178 3.5 5.05614 3.5 3.88962 4.36468C3.45805 4.68459 3.08267 5.08196 2.78047 5.53884C2.25526 6.33289 2.06776 7.33665 2.00083 8.87843C1.98938 9.14208 2.21648 9.34375 2.46531 9.34375C3.85109 9.34375 4.97449 10.533 4.97449 12C4.97449 13.467 3.85109 14.6562 2.46531 14.6562C2.21648 14.6562 1.98938 14.8579 2.00083 15.1216C2.06776 16.6634 2.25526 17.6671 2.78047 18.4612C3.08267 18.918 3.45805 19.3154 3.88962 19.6353C5.05614 20.5 6.70178 20.5 9.99306 20.5H14.0078C17.299 20.5 18.9447 20.5 20.1112 19.6353C20.5428 19.3154 20.9181 18.918 21.2203 18.4612C21.7456 17.667 21.9331 16.6631 22 15.1211V8.87895Z',
  d2: 'M13 12L17 12',
  d3: 'M9 16L17 16',
  d4: 'M9.94713 2.75C8.34042 2.74999 7.07164 2.74998 6.06138 2.86271C5.02568 2.97828 4.17492 3.21963 3.44301 3.76216C2.93986 4.13512 2.50435 4.5968 2.15493 5.12508C1.50973 6.10053 1.31938 7.28307 1.25153 8.8459C1.21912 9.59249 1.84811 10.0938 2.46531 10.0938C3.3972 10.0938 4.22449 10.9064 4.22449 12C4.22449 13.0936 3.3972 13.9062 2.46531 13.9062C1.84811 13.9062 1.21912 14.4075 1.25153 15.1541C1.31938 16.7169 1.50973 17.8995 2.15493 18.8749C2.50435 19.4032 2.93986 19.8649 3.44301 20.2378C4.17492 20.7804 5.02568 21.0217 6.06138 21.1373C7.07163 21.25 8.34039 21.25 9.94709 21.25H9.94718H14.0536H14.0537C15.6604 21.25 16.9292 21.25 17.9394 21.1373C18.9751 21.0217 19.8259 20.7804 20.5578 20.2378C21.0609 19.8649 21.4965 19.4032 21.8459 18.8749C22.4911 17.8994 22.6815 16.7167 22.7493 15.1536C22.7498 15.1427 22.75 15.1319 22.75 15.1211V8.87895C22.75 8.86811 22.7498 8.85727 22.7493 8.84643C22.6815 7.28333 22.4911 6.10064 21.8459 5.12508C21.4965 4.5968 21.0609 4.13512 20.5578 3.76216C19.8259 3.21963 18.9751 2.97828 17.9394 2.86271C16.9292 2.74998 15.6604 2.74999 14.0537 2.75H14.0537H9.94714H9.94713ZM12 12C12 12.5523 12.4477 13 13 13L17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11L13 11C12.4477 11 12 11.4477 12 12ZM9 17C8.44772 17 8 16.5523 8 16C8 15.4477 8.44771 15 9 15L17 15C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17L9 17Z',
  d5: 'M9.94713 2.75C8.34042 2.74999 7.07164 2.74998 6.06138 2.86271C5.02568 2.97828 4.17492 3.21963 3.44301 3.76216C2.93986 4.13512 2.50435 4.5968 2.15493 5.12508C1.50973 6.10053 1.31938 7.28307 1.25153 8.8459C1.21912 9.59249 1.84811 10.0938 2.46531 10.0938C3.3972 10.0938 4.22449 10.9064 4.22449 12C4.22449 13.0936 3.3972 13.9062 2.46531 13.9062C1.84811 13.9062 1.21912 14.4075 1.25153 15.1541C1.31938 16.7169 1.50973 17.8995 2.15493 18.8749C2.50435 19.4032 2.93986 19.8649 3.44301 20.2378C4.17492 20.7804 5.02568 21.0217 6.06138 21.1373C7.07163 21.25 8.34039 21.25 9.94709 21.25H9.94718H14.0536H14.0537C15.6604 21.25 16.9292 21.25 17.9394 21.1373C18.9751 21.0217 19.8259 20.7804 20.5578 20.2378C21.0609 19.8649 21.4965 19.4032 21.8459 18.8749C22.4911 17.8994 22.6815 16.7167 22.7493 15.1536C22.7498 15.1427 22.75 15.1319 22.75 15.1211V8.87895C22.75 8.86811 22.7498 8.85727 22.7493 8.84643C22.6815 7.28333 22.4911 6.10064 21.8459 5.12508C21.4965 4.5968 21.0609 4.13512 20.5578 3.76216C19.8259 3.21963 18.9751 2.97828 17.9394 2.86271C16.9292 2.74998 15.6604 2.74999 14.0537 2.75H14.0537H9.94714H9.94713Z',
  d6: 'M12 12C12 12.5523 12.4477 13 13 13L17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11L13 11C12.4477 11 12 11.4477 12 12Z',
  d7: 'M8 16C8 16.5523 8.44772 17 9 17L17 17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15L9 15C8.44772 15 8 15.4477 8 16Z',
  d8: 'M13.001 12H18.001',
  d9: 'M9.00098 16.0044H18.001',
  d10: 'M2.00897 3.5C2.00346 3.5 1.99899 3.50452 1.99902 3.51007L2.03471 9.51469C3.15904 9.51469 3.94968 9.59325 4.71383 10.8527C5.27092 11.7709 4.99209 12.9433 4.39313 13.6459C4.10957 13.9785 3.73648 14.2475 3.32042 14.3771C3.01838 14.4712 2.59774 14.5379 2.03471 14.5177V20.49C2.03471 20.4955 2.03916 20.5 2.04466 20.5H21.9553C21.9608 20.5 21.9653 20.4955 21.9653 20.49V9.51469L22.001 3.51007C22.001 3.50452 21.9965 3.5 21.991 3.5H2.00897Z',
  d11: 'M1.24805 3.5C1.24805 3.08579 1.58383 2.75 1.99805 2.75H21.9972C22.4114 2.75 22.7472 3.08579 22.7472 3.5V20.5C22.7472 20.9142 22.4114 21.25 21.9972 21.25H1.99805C1.58383 21.25 1.24805 20.9142 1.24805 20.5V13.75H2.47115C3.43765 13.75 4.22115 12.9665 4.22115 12C4.22115 11.0335 3.43765 10.25 2.47115 10.25H1.24805V3.5ZM17.998 11L12.998 11V13L17.998 13V11ZM8.99805 15L17.998 15V17L8.99805 17V15Z',
} as const;

export const IconTicket03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-03-stroke-rounded IconTicket03StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTicket03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-03-duotone-rounded IconTicket03DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTicket03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-03-twotone-rounded IconTicket03TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTicket03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-03-solid-rounded IconTicket03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTicket03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-03-bulk-rounded IconTicket03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTicket03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-03-stroke-sharp IconTicket03StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTicket03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ticket-03-solid-sharp IconTicket03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTicket03: TheIconSelfPack = {
  name: 'Ticket03',
  StrokeRounded: IconTicket03StrokeRounded,
  DuotoneRounded: IconTicket03DuotoneRounded,
  TwotoneRounded: IconTicket03TwotoneRounded,
  SolidRounded: IconTicket03SolidRounded,
  BulkRounded: IconTicket03BulkRounded,
  StrokeSharp: IconTicket03StrokeSharp,
  SolidSharp: IconTicket03SolidSharp,
};