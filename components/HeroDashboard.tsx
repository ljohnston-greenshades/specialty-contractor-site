import {
  Users,
  DollarSign,
  History,
  FileText,
  Calendar,
  BarChart3,
  Settings,
  Search,
  Bell,
  AlertTriangle,
  FileCheck2,
  Check,
  Heart,
  ChevronDown,
} from "lucide-react";
import type { ReactNode } from "react";

type Segment = { value: number; color: string };

function Donut({
  size = 80,
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
      aria-label="Greenshades dashboard interface showing employee counts, payroll totals, multi-state tax filings, ACA compliance, and floating notifications for completed payroll, blended overtime, and a newly onboarded state."
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
              <FileText size={11} strokeWidth={2} /> Tax Filing Center
            </span>
            <span className="hd-tab">
              <Calendar size={11} strokeWidth={2} /> Year-End Forms
            </span>
            <span className="hd-tab">
              <BarChart3 size={11} strokeWidth={2} /> Reports
            </span>
            <span className="hd-tab">
              <Settings size={11} strokeWidth={2} /> Settings
            </span>
          </div>
          <div className="hd-nav-right">
            <div className="hd-search">
              <span>Search an employee…</span>
              <Search size={10} strokeWidth={2.5} />
            </div>
            <Bell size={12} strokeWidth={2} />
            <div className="hd-avatar" />
          </div>
        </nav>

        {/* ─── Body grid ─── */}
        <div className="hd-body">
          {/* Warnings */}
          <div className="hd-card hd-card-warnings">
            <div className="hd-card-title">
              <AlertTriangle size={11} strokeWidth={2} /> Warnings Requiring
              Your Attention
              <ChevronDown size={10} className="hd-chev" strokeWidth={2} />
            </div>
            <ul className="hd-list">
              <li className="hd-row">
                <span className="hd-dot hd-dot-red" />
                <span>
                  <strong>Critical:</strong> 3 work locations in FL and TX do
                  not have a full address.
                </span>
              </li>
              <li className="hd-row">
                <span className="hd-dot hd-dot-pink" />
                <span>
                  <strong>Critical:</strong> The current unemployment wage base
                  for FL is entered as $2000.00…
                </span>
              </li>
              <li className="hd-row">
                <span className="hd-dot hd-dot-yellow" />
                <span>
                  <strong>Moderate:</strong> 6 employees are missing their
                  hire date.
                </span>
              </li>
              <li className="hd-row">
                <span className="hd-dot hd-dot-pink" />
                <span>
                  <strong>Critical:</strong> 2 recently added employees share
                  a duplicate SSN.
                </span>
              </li>
              <li className="hd-row">
                <span className="hd-dot hd-dot-orange" />
                <span>
                  <strong>Past Due Invoice:</strong> 3 invoices totaling
                  $4,812.00 are past due.
                </span>
              </li>
              <li className="hd-row">
                <span className="hd-dot hd-dot-red" />
                <span>
                  <strong>Critical:</strong> Employee ID EMP-0184 has an
                  invalid SSN.
                </span>
              </li>
            </ul>
          </div>

          {/* Numbers at a Glance */}
          <div className="hd-card hd-card-numbers">
            <div className="hd-card-title">
              Numbers at a Glance
              <ChevronDown size={10} className="hd-chev" strokeWidth={2} />
            </div>
            <div className="hd-stats">
              <div className="hd-stat">
                <div className="hd-stat-num">248</div>
                <div className="hd-stat-label">Total Active Employees</div>
                <div className="hd-stat-view">View</div>
              </div>
              <div className="hd-stat">
                <div className="hd-stat-num">12</div>
                <div className="hd-stat-label">Employees on PTO</div>
              </div>
              <div className="hd-stat">
                <div className="hd-stat-num">83</div>
                <div className="hd-stat-label">Employees Clocked-In</div>
                <div className="hd-stat-view">View</div>
              </div>
            </div>
          </div>

          {/* Things to Do */}
          <div className="hd-card">
            <div className="hd-card-title">
              <Check size={11} strokeWidth={2} /> Things to Do
              <ChevronDown size={10} className="hd-chev" strokeWidth={2} />
            </div>
            <ul className="hd-todo">
              <li>
                <span>
                  <strong>Employee Evaluations:</strong> 14 evaluations are
                  past due.
                </span>
                <span className="hd-view">View</span>
              </li>
              <li>
                <span>
                  <strong>Qualifying Life Events:</strong> 3 ready for review.
                </span>
                <span className="hd-view">View</span>
              </li>
              <li>
                <span>
                  <strong>Profile Changes:</strong> 8 changes need review.
                </span>
                <span className="hd-view">View</span>
              </li>
            </ul>
          </div>

          {/* Employees donut */}
          <div className="hd-card">
            <div className="hd-card-title">
              <Users size={11} strokeWidth={2} /> Employees
              <ChevronDown size={10} className="hd-chev" strokeWidth={2} />
            </div>
            <div className="hd-card-subtitle">By Employment Type</div>
            <div className="hd-chart-row">
              <Donut
                size={78}
                thickness={9}
                center={<div className="hd-donut-num">248</div>}
                segments={[
                  { value: 182, color: "#10b981" },
                  { value: 34, color: "#f5c842" },
                  { value: 18, color: "#f97316" },
                  { value: 14, color: "#7c3aed" },
                ]}
              />
              <ul className="hd-legend">
                <li>
                  <span className="hd-sq" style={{ background: "#10b981" }} />
                  Full Time Regular
                  <span className="hd-legend-n">182</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#f5c842" }} />
                  Part Time Regular
                  <span className="hd-legend-n">34</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#f97316" }} />
                  Full Time Temp
                  <span className="hd-legend-n">18</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#7c3aed" }} />
                  Part Time Temp
                  <span className="hd-legend-n">14</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pay History donut */}
          <div className="hd-card">
            <div className="hd-card-title">
              <DollarSign size={11} strokeWidth={2} /> Employee Pay History
              <ChevronDown size={10} className="hd-chev" strokeWidth={2} />
            </div>
            <div className="hd-chart-row">
              <Donut
                size={78}
                thickness={9}
                center={<div className="hd-donut-money">$1,376,610</div>}
                segments={[
                  { value: 892, color: "#10b981" },
                  { value: 134, color: "#f97316" },
                  { value: 108, color: "#f5c842" },
                  { value: 178, color: "#7c3aed" },
                  { value: 62, color: "#94a3b8" },
                ]}
              />
              <ul className="hd-paylist">
                <li className="hd-paylist-meta">
                  Check Date: <span>Mar 14, 2026</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#10b981" }} />
                  Gross Pay <span className="hd-legend-n">$892,450</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#f97316" }} />
                  Benefits <span className="hd-legend-n">$134,200</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#f5c842" }} />
                  Employer Taxes
                  <span className="hd-legend-n">$108,630</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#7c3aed" }} />
                  Employee Taxes
                  <span className="hd-legend-n">$178,490</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#94a3b8" }} />
                  Deductions <span className="hd-legend-n">$62,840</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tax Filing Ready */}
          <div className="hd-card hd-card-tax">
            <div className="hd-card-title">
              <FileCheck2 size={11} strokeWidth={2} /> Tax Filing Ready
            </div>
            <div className="hd-tax-body">
              <div className="hd-tax-icon">
                <FileCheck2 size={16} strokeWidth={1.8} />
              </div>
              <div className="hd-tax-text">
                Multi-state withholdings calculated
                <div className="hd-pill">
                  <span className="hd-pill-dot hd-pill-dot-green" />
                  14 / 14 jurisdictions filed
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="hd-card">
            <div className="hd-card-title">
              <Heart size={11} strokeWidth={2} /> Benefits
              <ChevronDown size={10} className="hd-chev" strokeWidth={2} />
            </div>
            <div className="hd-card-subtitle">ACA Compliance</div>
            <ul className="hd-list">
              <li className="hd-row">
                <span className="hd-dot hd-dot-red" />
                <span>
                  12 of 200 FT employees do not meet ACA qualifying offer
                  level. 94% compliant.
                </span>
              </li>
              <li className="hd-row">
                <span className="hd-dot hd-dot-green" />
                <span>3 employees need insurance offer within 30 days.</span>
              </li>
              <li className="hd-row">
                <span className="hd-dot hd-dot-blue" />
                <span>200 of 248 employees are FT under ACA.</span>
              </li>
            </ul>
            <div className="hd-view hd-view-center">View</div>
          </div>

          {/* Timesheets donut */}
          <div className="hd-card">
            <div className="hd-card-title">
              <Calendar size={11} strokeWidth={2} /> Timesheets
              <ChevronDown size={10} className="hd-chev" strokeWidth={2} />
            </div>
            <div className="hd-card-subtitle">
              Filter by: Pay Period 03/10/2026
            </div>
            <div className="hd-chart-row">
              <Donut
                size={68}
                thickness={9}
                center={<div className="hd-donut-num">248</div>}
                segments={[
                  { value: 42, color: "#94a3b8" },
                  { value: 68, color: "#f5c842" },
                  { value: 97, color: "#10b981" },
                  { value: 41, color: "#7c3aed" },
                ]}
              />
              <ul className="hd-legend hd-legend-compact">
                <li>
                  <span className="hd-sq" style={{ background: "#94a3b8" }} />
                  Not Started
                  <span className="hd-legend-n">42</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#f5c842" }} />
                  In Progress
                  <span className="hd-legend-n">68</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#10b981" }} />
                  Submitted
                  <span className="hd-legend-n">97</span>
                </li>
                <li>
                  <span className="hd-sq" style={{ background: "#7c3aed" }} />
                  Approved
                  <span className="hd-legend-n">41</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Floating callouts ─── */}
      <div className="hd-float hd-float-tl">
        <div className="hd-float-icon hd-float-icon-warn">
          <AlertTriangle size={14} strokeWidth={2} />
        </div>
        <div className="hd-float-body">
          <div className="hd-float-title">New State Onboarded</div>
          <div className="hd-float-text">
            Florida — tax, compliance, and payroll live
          </div>
          <div className="hd-float-pill">
            <span className="hd-pill-dot hd-pill-dot-yellow" /> 14 states active
          </div>
        </div>
      </div>

      <div className="hd-float hd-float-tr">
        <div className="hd-float-icon hd-float-icon-money">
          <DollarSign size={14} strokeWidth={2.5} />
        </div>
        <div className="hd-float-body">
          <div className="hd-float-title">Overtime Resolved</div>
          <div className="hd-float-text">
            Blended OT rates across 3 departments
          </div>
          <div className="hd-float-pill">
            <span className="hd-pill-dot hd-pill-dot-green" /> $12,840 calculated
          </div>
        </div>
      </div>

      <div className="hd-float hd-float-br">
        <div className="hd-float-icon hd-float-icon-check">
          <Check size={16} strokeWidth={3} />
        </div>
        <div className="hd-float-body">
          <div className="hd-float-title">Payroll Complete</div>
          <div className="hd-float-text">
            $892,450 across 4 pay schedules
          </div>
          <div className="hd-float-pill">
            <span className="hd-pill-dot hd-pill-dot-green" /> 248 / 248
            employees paid
          </div>
        </div>
      </div>
    </div>
  );
}
