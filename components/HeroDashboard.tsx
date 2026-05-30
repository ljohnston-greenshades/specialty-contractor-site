import {
  LayoutDashboard,
  DollarSign,
  Users,
  Clock4,
  Globe2,
  ShieldCheck,
  HardHat,
  BarChart3,
  Settings,
  Search,
  Bell,
  ArrowUp,
  Check,
  HeartPulse,
  IdCard,
  Scale,
  FileCheck2,
  MapPin,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

type SidebarItem = { Icon: LucideIcon; label: string; active?: boolean };

const SIDEBAR: SidebarItem[] = [
  { Icon: LayoutDashboard, label: "Dashboard", active: true },
  { Icon: DollarSign, label: "Pay Runs" },
  { Icon: Users, label: "Employees" },
  { Icon: Clock4, label: "Time & Attendance" },
  { Icon: Globe2, label: "Tax Center" },
  { Icon: ShieldCheck, label: "Compliance" },
  { Icon: HardHat, label: "Job Costing" },
  { Icon: BarChart3, label: "Reports" },
];

// Last 12 pay periods (Oct 2025 → Mar 2026), $ thousands
const TREND_DATA = [720, 738, 760, 745, 780, 808, 830, 848, 866, 880, 878, 892];
const TREND_LABELS = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

const PAY_RUNS = [
  { id: "PR-2026-06", period: "Mar 1 – Mar 14", amount: "$892,450" },
  { id: "PR-2026-05", period: "Feb 15 – Feb 28", amount: "$878,210" },
  // Highlights unlimited pay runs — off-cycle for a rapid hire
  { id: "PR-2026-OFF", period: "Off-cycle · Onboarding", amount: "$4,820", offcycle: true },
  { id: "PR-2026-04", period: "Feb 1 – Feb 14", amount: "$864,500" },
];

const TILES: { Icon: LucideIcon; num: string; label: string }[] = [
  { Icon: Globe2, num: "14", label: "States active" },
  { Icon: Clock4, num: "83", label: "Clocked in now" },
  { Icon: HardHat, num: "5", label: "Prevailing-wage jobs" },
  { Icon: MapPin, num: "32", label: "Crews on-site" },
];

const COMPLIANCE: {
  Icon: LucideIcon;
  label: string;
  detail: string;
  tone: "ok" | "warn" | "neutral";
}[] = [
  { Icon: HeartPulse, label: "ACA", detail: "200 / 200 covered", tone: "ok" },
  { Icon: HardHat, label: "Certified Payroll", detail: "5 active jobs", tone: "warn" },
  { Icon: IdCard, label: "I-9 / E-Verify", detail: "All current", tone: "ok" },
  { Icon: Scale, label: "Garnishments", detail: "4 active orders", tone: "neutral" },
  { Icon: FileCheck2, label: "Workers Comp", detail: "Audit ready", tone: "ok" },
];

function AreaChart({ data }: { data: number[] }) {
  const w = 320;
  const h = 88;
  const pad = { l: 4, r: 4, t: 6, b: 4 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = innerW / (data.length - 1);
  const pts = data.map((v, i) => ({
    x: pad.l + i * stepX,
    y: pad.t + (1 - (v - min) / range) * innerH,
  }));
  const polyPoints = pts.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
  const last = pts[pts.length - 1];
  const first = pts[0];
  const bottom = pad.t + innerH;
  const areaPoints = `${first.x.toFixed(2)},${bottom} ${polyPoints} ${last.x.toFixed(2)},${bottom}`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="hd-chart-svg"
    >
      <defs>
        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill="url(#trendFill)" />
      <polyline
        points={polyPoints}
        fill="none"
        stroke="#059669"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx={last.x} cy={last.y} r="4.5" fill="#059669" fillOpacity="0.18" />
      <circle cx={last.x} cy={last.y} r="2.4" fill="#059669" />
    </svg>
  );
}

export function HeroDashboard() {
  return (
    <div
      className="hero-dashboard"
      role="img"
      aria-label="TradePay dashboard built on Greenshades — a payroll and HR cockpit for specialty contractors showing the current pay run total, active employees, multi-state tax filings, prevailing-wage projects, a payroll spend trend, recent pay runs including an off-cycle run, and a compliance strip covering ACA, certified payroll, I-9, garnishments, and workers comp."
    >
      <div className="hd-window">
        {/* ─── Sidebar ─── */}
        <aside className="hd-sidebar">
          <div className="hd-sidebar-logo">T</div>
          <div className="hd-sidebar-divider" />
          <nav className="hd-sidebar-nav">
            {SIDEBAR.map(({ Icon, label, active }) => (
              <span
                key={label}
                className={`hd-sidebar-btn${active ? " hd-sidebar-active" : ""}`}
                title={label}
              >
                <Icon size={14} strokeWidth={1.9} />
              </span>
            ))}
          </nav>
          <span className="hd-sidebar-btn hd-sidebar-bottom" title="Settings">
            <Settings size={14} strokeWidth={1.9} />
          </span>
        </aside>

        {/* ─── Main ─── */}
        <div className="hd-main">
          {/* Top bar */}
          <header className="hd-topbar">
            <div className="hd-search">
              <Search size={10} strokeWidth={2.5} />
              <span>Search employees, pay runs, jobs…</span>
            </div>
            <span className="hd-topbar-spacer" />
            <Bell size={12} strokeWidth={2} className="hd-topbar-icon" />
            <div className="hd-topbar-avatar" />
          </header>

          {/* Content */}
          <div className="hd-content">
            {/* Greeting */}
            <div className="hd-greeting">
              <div>
                <div className="hd-greeting-title">Welcome back, Maria</div>
                <div className="hd-greeting-sub">
                  Pay Period · Mar 1 – Mar 14, 2026
                </div>
              </div>
              <div className="hd-customize">
                <SlidersHorizontal size={10} strokeWidth={2} />
                Customize
              </div>
            </div>

            {/* KPI cards */}
            <div className="hd-kpis">
              <div className="hd-kpi">
                <div className="hd-kpi-label">Current pay run</div>
                <div className="hd-kpi-num">$892,450</div>
                <div className="hd-kpi-delta up">
                  <ArrowUp size={9} strokeWidth={2.8} />
                  5.2% vs last period
                </div>
              </div>
              <div className="hd-kpi">
                <div className="hd-kpi-label">Active employees</div>
                <div className="hd-kpi-num">248</div>
                <div className="hd-kpi-delta up">
                  <ArrowUp size={9} strokeWidth={2.8} />
                  +12 new hires
                </div>
              </div>
              <div className="hd-kpi">
                <div className="hd-kpi-label">Multi-state filings</div>
                <div className="hd-kpi-num">
                  47 <span className="hd-kpi-num-soft">/ 47</span>
                </div>
                <div className="hd-kpi-delta ok">
                  <Check size={9} strokeWidth={3} />
                  All jurisdictions current
                </div>
              </div>
            </div>

            {/* Stat tiles */}
            <div className="hd-tiles">
              {TILES.map(({ Icon, num, label }) => (
                <div className="hd-tile" key={label}>
                  <div className="hd-tile-icon">
                    <Icon size={12} strokeWidth={2} />
                  </div>
                  <div className="hd-tile-body">
                    <div className="hd-tile-num">{num}</div>
                    <div className="hd-tile-label">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Two-col: chart + recent pay runs */}
            <div className="hd-twocol">
              <div className="hd-card-flat hd-chart-card">
                <div className="hd-chart-header">
                  <div>
                    <div className="hd-card-h">Payroll spend</div>
                    <div className="hd-card-sub">Last 12 pay periods</div>
                  </div>
                  <div className="hd-chart-summary">
                    <div className="hd-chart-summary-num">$10.1M</div>
                    <div className="hd-chart-summary-delta">YTD</div>
                  </div>
                </div>
                <AreaChart data={TREND_DATA} />
                <div className="hd-chart-axis">
                  {TREND_LABELS.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </div>
              </div>

              <div className="hd-card-flat hd-payruns-card">
                <div className="hd-payruns-header">
                  <div className="hd-card-h">Recent pay runs</div>
                  <span className="hd-payruns-link">View all</span>
                </div>
                <div className="hd-payruns-table">
                  {PAY_RUNS.map((r) => (
                    <div
                      className={`hd-payrun-row${r.offcycle ? " hd-payrun-offcycle" : ""}`}
                      key={r.id}
                    >
                      <div className="hd-payrun-left">
                        <div className="hd-payrun-id">{r.id}</div>
                        <div className="hd-payrun-meta">{r.period}</div>
                      </div>
                      <div className="hd-payrun-right">
                        <div className="hd-payrun-amount">{r.amount}</div>
                        <div className="hd-payrun-status">
                          <Check size={8} strokeWidth={3} />
                          Posted
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compliance & Filings strip */}
            <div className="hd-card-flat hd-compliance-card">
              <div className="hd-card-h">
                <ShieldCheck size={11} strokeWidth={2} /> Compliance &amp; Filings
              </div>
              <div className="hd-compliance-grid">
                {COMPLIANCE.map(({ Icon, label, detail, tone }) => (
                  <div className="hd-status" key={label}>
                    <span className={`hd-status-icon hd-status-${tone}`}>
                      <Icon size={10} strokeWidth={2.2} />
                    </span>
                    <div className="hd-status-body">
                      <div className="hd-status-label">{label}</div>
                      <div className="hd-status-detail">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
