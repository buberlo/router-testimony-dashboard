export type ISODateString = string;

export type DeviceKind =
  | "phone"
  | "laptop"
  | "tablet"
  | "tv"
  | "router"
  | "iot"
  | "unknown";

export type ConnectionQuality = "poor" | "fair" | "good" | "excellent";

export type NetworkEventType =
  | "connect"
  | "disconnect"
  | "upload"
  | "download"
  | "peak"
  | "idle";

export type CredibilityLabel =
  | "reliable"
  | "questionable"
  | "suspicious"
  | "unreliable";

export type ClueType = "bandwidth" | "battery" | "connection" | "conflict";

export type Severity = "low" | "medium" | "high";

export interface Device {
  id: string;
  name: string;
  kind: DeviceKind;
  ip: string;
  mac: string;
  online: boolean;
  lastSeen: ISODateString;
  batteryLevel?: number;
  batteryCapacity?: number;
}

export interface NetworkEvent {
  id: string;
  deviceId: string;
  timestamp: ISODateString;
  type: NetworkEventType;
  bytesUp: number;
  bytesDown: number;
  bandwidthMbps?: number;
  batteryLevel?: number;
  connectionQuality?: ConnectionQuality;
  note?: string;
}

export interface CredibilityFactor {
  name: string;
  delta: number;
  description: string;
}

export interface CredibilityAssessment {
  deviceId: string;
  score: number;
  label: CredibilityLabel;
  summary: string;
  factors: CredibilityFactor[];
}

export interface TestimonyStatement {
  id: string;
  text: string;
  eventIds: string[];
  confidence: number;
}

export interface Witness {
  device: Device;
  timeline: NetworkEvent[];
  testimony: TestimonyStatement[];
  credibility: CredibilityAssessment;
}

export interface Clue {
  id: string;
  type: ClueType;
  severity: Severity;
  title: string;
  description: string;
  deviceIds: string[];
  eventIds: string[];
  confidence: number;
}

export interface Bribe {
  id: string;
  label: string;
  description: string;
  targetDeviceIds: string[];
  fakeBandwidthMbps: number;
  durationMinutes: number;
  startOffsetMinutes?: number;
  applied: boolean;
  conflictingStatement?: string;
}

export interface TranscriptSection {
  heading: string;
  body: string[];
}

export interface Transcript {
  caseTitle: string;
  caseNumber: string;
  generatedAt: ISODateString;
  summary: string;
  witnesses: Witness[];
  clues: Clue[];
  bribes: Bribe[];
  sections: TranscriptSection[];
  verdict?: string;
}

export interface DashboardData {
  devices: Device[];
  events: NetworkEvent[];
  witnesses: Witness[];
  clues: Clue[];
  bribes: Bribe[];
  transcript: Transcript;
}