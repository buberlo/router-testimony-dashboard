"use client";

import type { Bribe, Device } from "@/lib/types";

interface BribePanelProps {
  bribes: Bribe[];
  devices?: Device[];
  activeBribeIds: string[];
  onToggleBribe: (id: string) => void;
}

function getDeviceName(devices: Device[], deviceId: string): string {
  return devices.find((device) => device.id === deviceId)?.name ?? deviceId;
}

function getFakeBandwidth(bribe: Bribe): number | undefined {
  return (bribe as { fakeBandwidthMbps?: number }).fakeBandwidthMbps;
}

function getConflictingStory(bribe: Bribe): string | undefined {
  const record = bribe as {
    conflictingStory?: string;
    conflictingStatement?: string;
  };

  return record.conflictingStory ?? record.conflictingStatement;
}

export default function BribePanel({
  bribes,
  devices = [],
  activeBribeIds,
  onToggleBribe,
}: BribePanelProps) {
  const activeCount = activeBribeIds.length;

  return (
    <section className="panel bribe-panel" aria-label="Fake bandwidth bribes">
      <header className="panel-header">
        <div>
          <h2 className="panel-title">Bribe Panel</h2>
          <p className="panel-subtitle">
            Toggle fake-bandwidth payments to make witnesses tell conflicting stories.
          </p>
        </div>
        <span className={`badge ${activeCount > 0 ? "badge-active" : "badge-muted"}`}>
          {activeCount} active
        </span>
      </header>

      {bribes.length === 0 ? (
        <p className="empty-state">No bribes available for this household.</p>
      ) : (
        <ul className="bribe-list">
          {bribes.map((bribe) => {
            const isActive = activeBribeIds.includes(bribe.id);
            const fakeBandwidth = getFakeBandwidth(bribe);
            const conflictingStory = getConflictingStory(bribe);

            return (
              <li key={bribe.id} className={`bribe-card ${isActive ? "active" : ""}`}>
                <label className="bribe-toggle">
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => onToggleBribe(bribe.id)}
                    aria-label={`Toggle bribe ${bribe.label}`}
                  />
                  <span className="toggle-track" aria-hidden="true" />
                </label>

                <div className="bribe-content">
                  <div className="bribe-title-row">
                    <h3 className="bribe-title">{bribe.label}</h3>
                    <span className="bribe-target">
                      {getDeviceName(devices, bribe.targetDeviceId)}
                    </span>
                  </div>

                  <p className="bribe-description">{bribe.description}</p>

                  <div className="bribe-meta">