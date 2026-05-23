import {
  Users,
  DollarSign,
  History,
  FileText,
  BarChart3,
  Search,
  Bell,
  AlertTriangle,
  FileCheck2,
  Check,
  ChevronDown,
  HardHat,
  Clock4,
} from "lucide-react";
import type { ReactNode } from "react";

type Segment = { value: number; color: string };

function Donut({
  size = 86,
  thickness = 10,
  center,
  segments,
}: {
  size?: number;
  thickness?: number;
  center: ReactNode;
  segments: Segment[];
}) {
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  let offset = 0;
  return (
    <div className="hd-donut" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#e7eaee"
          strokeWidth={thickness}
        />
        {segments.map((s, i) => {
          const dash = (s.value / total) * c;
          const el = (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth={thickness}
              strokeLinecap="butt"
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={-offset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          );
          offset += dash;
          return el;
        })}
      </svg>
      <div className="hd-donut-center">{center}</div>
    </div>
  );
}

export function HeroDashboard() {
  return (
    <div
      className="hero-dashboard"
      role="img"
      aria-label="Greenshades dashboard interface showing employee counts across multiple states, live payroll totals, multi-state tax filings ready, and floating notifications for certified payroll filed, blended overtime resolved, and payroll completed for a specialty contractor."
    >
      <div className="hd-window">
        {/* ─── Top nav ─── */}
        <nav className="hd-topnav">
          <div className="hd-logo">G</div>
          <div className="hd-tabs">
            <span className="hd-tab hd-tab-active">
              <Users size={11} strokeWidth={2} /> Employees
            </span>
            <span className="hd-tab">
              <DollarSign size={11} strokeWidth={2} /> Payroll
            </span>
            <span className="hd-tab">
              <History size={11} strokeWidth={2} /> Pay History
            </span>
            <span className="hd-tab">
              <FileText size={11} strokeWidth={2} /> Tax Filing
            </span>
            <span className="hd-tab">
              <BarChart3 size={11} strokeWidth={2} /> Reports
            </span>
          </div>
          <div className="hd-nav-right">
            <div className="hd-search">
              <span>Search…</span>
              <Search size={10} strokeWidth={2.5} />
            </div>
            <Bell size={12} strokeWidth={2} />
            <div className="hd-avatar" />
          </div>
        </nav>

        {/* ─── Body grid (3 col × 2 row) ─── */}
        <div className="hd-body">
          {/* Numbers at a Glance — top, spans 2 cols */}
          <div className="hd-card hd-card-numbers">
            <div className="hd-card-title">
              Numbers at a Glance
              <ChevronDown size={10} className="hd-chev" strokeWidth={2} />
            </div>
            <div className="hd-stats">
              <div className="hd-stat">
                <div className="hd-stat-num">248</div>
                <div className="hd-stat-label">Active employees</div>
                <div className="hd-stat-delta">+12 this period</div>
              </div>
              <div className="hd-stat hd-stat-divider">
                <div className="hd-stat-num">14</div>
                <div className="hd-stat-label">States active</div>
                <div className="hd-stat-delta">47 jurisdictions</div>
              </div>
              <div className="hd-stat hd-stat-divider">
                <div className="hd-stat-num">83</div>
                <div className="hd-stat-label">Clocked in now</div>
                <div className="hd-stat-delta">32 crews on-site</div>
              </div>
            </div>
          </div>

          {/* Pay History donut — top right */}
          <div className="hd-card">
            <div className="hd-card-title">
              <DollarSign size={11} strokeWidth={2} /> Employee Pay History
              <ChevronDown size={10} className="hd-chev" strokeWidth={2} />
            </div>
            <div className="hd-card-subtitle">Mar 1 – Mar 14, 2026</div>
            <div className="hd-chart-row">
              <Donut
                size={88}
                thickness={11}
                center={<div className="hd-donut-money">$1.37M</div>}
                segments={[
                  { value: 892, color: "#10b981" },
                  { value: 178, color: "#7c3aed" },
                  { value: 134, color: "#f97316" },
                  { value: 108, color: "#f5c842" },
                  { value: 62, color: "#94a3b8" },
                ]}
              />
              <ul className="hd-paylist">
                <li>
                  <span className="hd-sq" style={{ background: "#10b981" }} />
                  Gross Pay <span className="hd-legend-n">$892,450</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#7c3aed" }} />
                  Employee Tax
                  <span className="hd-legend-n">$178,490</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#f97316" }} />
                  Benefits <span className="hd-legend-n">$134,200</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#f5c842" }} />
                  Employer Tax
                  <span className="hd-legend-n">$108,630</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Warnings — bottom left */}
          <div className="hd-card">
            <div className="hd-card-title">
              <AlertTriangle size={11} strokeWidth={2} /> Warnings
              <ChevronDown size={10} className="hd-chev" strokeWidth={2} />
            </div>
            <ul className="hd-list">
              <li className="hd-row">
                <span className="hd-dot hd-dot-red" />
                <span>
                  <strong>Critical:</strong> 2 job sites in TX missing
                  full address.
                </span>
              </li>
              <li className="hd-row">
                <span className="hd-dot hd-dot-pink" />
                <span>
                  <strong>Critical:</strong> Duplicate SSN flagged on 2
                  new hires.
                </span>
              </li>
              <li className="hd-row">
                <span className="hd-dot hd-dot-yellow" />
                <span>
                  <strong>Moderate:</strong> 6 technicians missing I-9
                  completion.
                </span>
              </li>
              <li className="hd-row">
                <span className="hd-dot hd-dot-orange" />
                <span>
                  <strong>Past Due:</strong> 3 invoices · $4,812 outstanding.
                </span>
              </li>
            </ul>
          </div>

          {/* Tax Filing Ready — bottom middle */}
          <div className="hd-card hd-card-tax">
            <div className="hd-card-title">
              <FileCheck2 size={11} strokeWidth={2} /> Tax Filing Ready
            </div>
            <div className="hd-tax-body">
              <div className="hd-tax-icon">
                <FileCheck2 size={16} strokeWidth={1.8} />
              </div>
              <div className="hd-tax-text">
                <div className="hd-tax-headline">
                  Multi-state withholdings calculated
                </div>
                <div className="hd-pill">
                  <span className="hd-pill-dot hd-pill-dot-green" />
                  47 / 47 jurisdictions filed
                </div>
              </div>
            </div>
            <div className="hd-tax-foot">
              FL · GA · AL · NC · SC · TN +9 more
            </div>
          </div>

          {/* Employees donut — bottom right */}
          <div className="hd-card">
            <div className="hd-card-title">
              <Users size={11} strokeWidth={2} /> Employee Mix
              <ChevronDown size={10} className="hd-chev" strokeWidth={2} />
            </div>
            <div className="hd-card-subtitle">By employment type</div>
            <div className="hd-chart-row">
              <Donut
                size={76}
                thickness={10}
                center={<div className="hd-donut-num">248</div>}
                segments={[
                  { value: 182, color: "#10b981" },
                  { value: 34, color: "#f5c842" },
                  { value: 18, color: "#f97316" },
                  { value: 14, color: "#7c3aed" },
                ]}
              />
              <ul className="hd-legend hd-legend-compact">
                <li>
                  <span className="hd-sq" style={{ background: "#10b981" }} />
                  FT Regular
                  <span className="hd-legend-n">182</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#f5c842" }} />
                  PT Regular
                  <span className="hd-legend-n">34</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#f97316" }} />
                  FT Seasonal
                  <span className="hd-legend-n">18</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#7c3aed" }} />
                  PT Seasonal
                  <span className="hd-legend-n">14</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Floating callouts (trade-flavored) ─── */}

      {/* Top-left: certified payroll for a prevailing-wage / Davis-Bacon job */}
      <div className="hd-float hd-float-tl">
        <div className="hd-float-icon hd-float-icon-warn">
          <HardHat size={14} strokeWidth={2} />
        </div>
        <div className="hd-float-body">
          <div className="hd-float-title">Certified Payroll Filed</div>
          <div className="hd-float-text">
            WH-347 submitted for Riverside Bridge electrical retrofit
          </div>
          <div className="hd-float-pill">
            <span className="hd-pill-dot hd-pill-dot-yellow" />
            5 prevailing-wage jobs active
          </div>
        </div>
      </div>

      {/* Top-right: blended OT across multi-rate field crews */}
      <div className="hd-float hd-float-tr">
        <div className="hd-float-icon hd-float-icon-money">
          <Clock4 size={14} strokeWidth={2.2} />
        </div>
        <div className="hd-float-body">
          <div className="hd-float-title">Blended OT Resolved</div>
          <div className="hd-float-text">
            Multi-rate overtime calculated across HVAC + service crews
          </div>
          <div className="hd-float-pill">
            <span className="hd-pill-dot hd-pill-dot-green" />
            $12,840 reconciled · 14 techs
          </div>
        </div>
      </div>

      {/* Bottom-right: pay run complete with mobile field delivery */}
      <div className="hd-float hd-float-br">
        <div className="hd-float-icon hd-float-icon-check">
          <Check size={16} strokeWidth={3} />
        </div>
        <div className="hd-float-body">
          <div className="hd-float-title">Payroll Complete</div>
          <div className="hd-float-text">
            248 / 248 paid across 4 pay schedules
          </div>
          <div className="hd-float-pill">
            <span className="hd-pill-dot hd-pill-dot-green" />
            Mobile pay stubs delivered to field
          </div>
        </div>
      </div>
    </div>
  );
}
