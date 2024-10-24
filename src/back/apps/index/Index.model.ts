export const enum DeviceId {
  def = '',
  full = 'NO',
}

export interface SecretChatTextMessage {
  text: string;
  ts: number;
  senderDeviceId: DeviceId;
}

export interface SecretChatSecretMessage {
  messageOrOffline: SecretChatTextMessage | null;
  targetDeviceId: DeviceId;
}
