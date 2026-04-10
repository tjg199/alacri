"use client";
import { useEffect, useState } from "react";

const CALENDLY = "https://calendly.com/YOUR_LINK";

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
  :root {
    --navy: #0C447C; --navy-dark: #042C53; --amber: #EF9F27;
    --amber-light: #FAEEDA; --amber-dark: #854F0B; --white: #ffffff;
    --off-white: #F7F6F2; --text-primary: #0f1923; --text-secondary: #4a5568;
    --text-muted: #8a9ab0; --border: rgba(12,68,124,0.12); --border-strong: rgba(12,68,124,0.22);
  }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: var(--white); color: var(--text-primary); overflow-x: hidden; }
  a { text-decoration: none; }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
  @keyframes float3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
`;

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{styles}</style>

      {/* NAV */}
      <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:100,
        display:"flex",justifyContent:"space-between",alignItems:"center",
        padding:"1.1rem 3rem",background:"rgba(255,255,255,0.92)",
        backdropFilter:"blur(12px)",borderBottom:"1px solid var(--border)",
        boxShadow:scrolled?"0 2px 24px rgba(12,68,124,0.08)":"none",transition:"box-shadow 0.3s"
      }}>
        <a href="#" style={{fontSize:22,fontWeight:500,color:"var(--navy)",letterSpacing:"-0.5px"}}>
          alacri<span style={{color:"var(--amber)"}}>.</span>
        </a>
        <div style={{display:"flex",gap:"2rem",alignItems:"center"}}>
          <a href="#platform" style={{fontSize:14,color:"var(--text-secondary)"}}>Platform</a>
          <a href="#pricing" style={{fontSize:14,color:"var(--text-secondary)"}}>Pricing</a>
          <a href="#about" style={{fontSize:14,color:"var(--text-secondary)"}}>About</a>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
            background:"var(--navy)",color:"var(--white)",padding:"9px 20px",
            borderRadius:8,fontSize:14,fontWeight:500
          }}>Book a demo →</a>
        </div>
      </nav>

      {/* HERO */}
      <div style={{padding:"10rem 3rem 6rem",maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center"}}>
        <div>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"var(--amber-light)",color:"var(--amber-dark)",fontSize:12,fontWeight:500,padding:"5px 14px",borderRadius:99,marginBottom:"1.5rem"}}>
            <span style={{width:6,height:6,borderRadius:"50%",background:"var(--amber)",display:"inline-block",animation:"pulse 2s infinite"}}/>
            AI-native Workday AMS
          </div>
          <h1 style={{fontSize:"clamp(36px,4.5vw,56px)",fontWeight:300,lineHeight:1.08,letterSpacing:"-1.5px",color:"var(--navy-dark)",marginBottom:"1.25rem"}}>
            Workday support<br/>at <em style={{fontStyle:"normal",color:"var(--amber)"}}>twice the speed</em>,<br/>
            <strong style={{fontWeight:500,color:"var(--navy)"}}>half the cost.</strong>
          </h1>
          <p style={{fontSize:17,color:"var(--text-secondary)",lineHeight:1.65,marginBottom:"2rem",maxWidth:480}}>
            Alacri combines AI-powered automation with certified Workday experts — resolving tickets faster, testing smarter, and keeping your tenant healthy before problems reach your users.
          </p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{background:"var(--amber)",color:"var(--amber-dark)",padding:"10px 22px",borderRadius:8,fontSize:15,fontWeight:500}}>Book a demo →</a>
            <a href="#platform" style={{background:"transparent",color:"var(--navy)",border:"1px solid var(--border-strong)",padding:"10px 22px",borderRadius:8,fontSize:15}}>See how it works</a>
          </div>
        </div>
        <div style={{position:"relative",padding:"2rem"}}>
          <div style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:14,padding:"1.25rem 1.5rem",boxShadow:"0 8px 40px rgba(12,68,124,0.08)",animation:"float 4s ease-in-out infinite"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
              <span style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"var(--text-muted)"}}>#WD-2847</span>
              <span style={{fontSize:11,fontWeight:500,padding:"3px 10px",borderRadius:99,background:"#e8f5e9",color:"#2e7d32"}}>Resolved</span>
            </div>
            <div style={{fontSize:14,fontWeight:500,color:"var(--navy)",marginBottom:"0.5rem"}}>Payroll calculation error — CA employees</div>
            <div style={{fontSize:12,color:"var(--text-muted)",marginBottom:"1rem"}}>Submitted 47 minutes ago · HCM / Payroll</div>
            <div style={{background:"var(--off-white)",borderRadius:8,padding:"0.75rem",display:"flex",gap:10}}>
              <div style={{width:20,height:20,borderRadius:"50%",background:"var(--amber)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,flexShrink:0}}>⚡</div>
              <div style={{fontSize:12,color:"var(--text-secondary)",lineHeight:1.4}}>
                <strong style={{color:"var(--navy)"}}>AI suggestion:</strong> Override in earnings calculation rule — CA supplemental tax rate mismatch. Similar to #WD-2201 (resolved in 18 min).
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1rem",paddingTop:"1rem",borderTop:"1px solid var(--border)"}}>
              <span style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"var(--amber-dark)",fontWeight:500}}>↑ Resolved in 31 min</span>
            </div>
          </div>
          <div style={{position:"absolute",bottom:-20,left:-30,background:"var(--white)",border:"1px solid var(--border)",borderRadius:10,padding:"0.75rem 1rem",boxShadow:"0 4px 20px rgba(12,68,124,0.1)",animation:"float2 5s ease-in-out infinite"}}>
            <div style={{fontSize:22,fontWeight:500,color:"var(--amber)",lineHeight:1}}>60%</div>
            <div style={{fontSize:11,color:"var(--text-muted)",marginTop:2}}>Faster resolution</div>
          </div>
          <div style={{position:"absolute",top:10,right:-30,background:"var(--white)",border:"1px solid var(--border)",borderRadius:10,padding:"0.75rem 1rem",boxShadow:"0 4px 20px rgba(12,68,124,0.1)",animation:"float3 6s ease-in-out infinite"}}>
            <div style={{fontSize:22,fontWeight:500,color:"var(--amber)",lineHeight:1}}>$0</div>
            <div style={{fontSize:11,color:"var(--text-muted)",marginTop:2}}>Surprise overages</div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{background:"var(--navy-dark)",padding:"2.5rem 3rem"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"2rem"}}>
          {[["60","%","Faster ticket resolution"],["2","×","More tickets per consultant"],["50","%","Lower AMS cost on average"],["24","hr","Average resolution SLA"]].map(([n,u,l])=>(
            <div key={l} style={{textAlign:"center"}}>
              <div style={{fontSize:40,fontWeight:300,color:"var(--white)",letterSpacing:"-1px",lineHeight:1}}>{n}<strong style={{color:"var(--amber)",fontWeight:500}}>{u}</strong></div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.5)",marginTop:6}}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PLATFORM */}
      <section id="platform" style={{padding:"6rem 3rem"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:3,color:"var(--amber)",textTransform:"uppercase",marginBottom:"1rem"}}>The Platform</div>
          <h2 style={{fontSize:"clamp(28px,3vw,40px)",fontWeight:300,letterSpacing:"-1px",color:"var(--navy-dark)",marginBottom:"1rem",lineHeight:1.15}}>AI that works before <strong style={{fontWeight:500}}>your consultant does</strong></h2>
          <p style={{fontSize:17,color:"var(--text-secondary)",maxWidth:560,lineHeight:1.65,marginBottom:"3rem"}}>Our platform layers intelligence across every stage of AMS — so your team spends time on what only humans can do.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1.5px",background:"var(--border)",border:"1px solid var(--border)",borderRadius:16,overflow:"hidden"}}>
            {[
              ["01 / TRIAGE","AI triage & routing","Every ticket is instantly classified, complexity-estimated, and matched to prior resolutions before a consultant opens it.","Avg. triage time: <30 seconds"],
              ["02 / TESTING","Automated regression testing","Workday R1 and R2 updates tested automatically. Broken business processes surfaced before your users see them.","Covers 100% of critical processes"],
              ["03 / MONITORING","Proactive tenant monitoring","We watch your tenant 24/7 for payroll anomalies, integration failures, and security changes — and alert you first.","Always-on, no setup required"],
              ["04 / REPORTING","Natural language reporting","Ask any question in plain English and get Workday data back instantly. No training required for your teams.","No report-builder needed"],
            ].map(([num,title,desc,tag])=>(
              <div key={num} style={{background:"var(--white)",padding:"2rem"}}>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:"var(--amber)",marginBottom:"1.25rem",letterSpacing:2}}>{num}</div>
                <h3 style={{fontSize:18,fontWeight:500,color:"var(--navy)",marginBottom:"0.5rem"}}>{title}</h3>
                <p style={{fontSize:14,color:"var(--text-secondary)",lineHeight:1.6}}>{desc}</p>
                <span style={{display:"inline-block",marginTop:"1rem",fontSize:11,fontWeight:500,color:"var(--amber-dark)",background:"var(--amber-light)",padding:"3px 10px",borderRadius:99}}>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="about" style={{padding:"6rem 3rem",background:"var(--off-white)"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:3,color:"var(--amber)",textTransform:"uppercase",marginBottom:"1rem"}}>Why Alacri</div>
          <h2 style={{fontSize:"clamp(28px,3vw,40px)",fontWeight:300,letterSpacing:"-1px",color:"var(--navy-dark)",marginBottom:"1rem",lineHeight:1.15}}>Traditional AMS <strong style={{fontWeight:500}}>is broken.</strong></h2>
          <p style={{fontSize:17,color:"var(--text-secondary)",maxWidth:560,lineHeight:1.65,marginBottom:"3rem"}}>Legacy providers bill by the hour and move at consultant speed. We bill by outcomes and move at AI speed.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"}}>
            <div style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:16,padding:"2rem"}}>
              <h3 style={{fontSize:15,fontWeight:500,color:"var(--text-muted)",marginBottom:"1.5rem",paddingBottom:"1rem",borderBottom:"1px solid var(--border)"}}>Traditional AMS</h3>
              {[["5–10 day resolution times","Consultants manually triage and research each ticket from scratch."],["Manual regression testing","Every R1/R2 update requires weeks of manual testing sprints."],["Reactive support only","You file a ticket, they fix it. No one's watching your tenant."],["Knowledge walks out the door","High consultant turnover means starting over constantly."],["$25–60k/month for mid-market","Hourly billing with surprise overages."]].map(([v,d])=>(
                <div key={v} style={{display:"flex",gap:12,padding:"0.75rem 0",borderBottom:"1px solid var(--border)",fontSize:14,color:"var(--text-secondary)"}}>
                  <div style={{width:5,height:5,borderRadius:"50%",background:"var(--text-muted)",marginTop:7,flexShrink:0}}/>
                  <div><span style={{display:"block",fontWeight:500,color:"var(--text-primary)",marginBottom:2}}>{v}</span>{d}</div>
                </div>
              ))}
            </div>
            <div style={{background:"var(--navy-dark)",borderRadius:16,padding:"2rem"}}>
              <h3 style={{fontSize:15,fontWeight:500,color:"var(--amber)",marginBottom:"1.5rem",paddingBottom:"1rem",borderBottom:"1px solid rgba(255,255,255,0.1)"}}>Alacri</h3>
              {[["Same-day or next-day resolution","AI handles triage and suggestions instantly. Consultants close fast."],["Automated testing on every update","Your entire process library tested automatically. Every time."],["Proactive monitoring, 24/7","We catch issues before your users do. Always."],["AI continuity — knowledge never leaves","Every resolution trains the model. Smarter over time."],["$8–35k/month, outcome-based","Flat monthly pricing. No overages. No surprises."]].map(([v,d])=>(
                <div key={v} style={{display:"flex",gap:12,padding:"0.75rem 0",borderBottom:"1px solid rgba(255,255,255,0.08)",fontSize:14,color:"rgba(255,255,255,0.75)"}}>
                  <div style={{width:5,height:5,borderRadius:"50%",background:"var(--amber)",marginTop:7,flexShrink:0}}/>
                  <div><span style={{display:"block",fontWeight:500,color:"var(--white)",marginBottom:2}}>{v}</span>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{padding:"6rem 3rem"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:3,color:"var(--amber)",textTransform:"uppercase",marginBottom:"1rem"}}>Pricing</div>
          <h2 style={{fontSize:"clamp(28px,3vw,40px)",fontWeight:300,letterSpacing:"-1px",color:"var(--navy-dark)",marginBottom:"1rem",lineHeight:1.15}}>Simple, <strong style={{fontWeight:500}}>transparent pricing.</strong><br/>No hourly billing.</h2>
          <p style={{fontSize:17,color:"var(--text-secondary)",maxWidth:560,lineHeight:1.65,marginBottom:"3rem"}}>Every plan includes full access to the Alacri platform. You pay for outcomes, not consultant hours.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem"}}>
            {[
              {name:"Starter",price:"$8k",period:"/mo",featured:false,desc:"Up to 20 tickets/month. HCM focus. 2-business-day SLA.",features:["AI triage & routing","Resolution assist","Customer portal","2-business-day SLA","Certified HCM consultant"],cta:"Get started →"},
              {name:"Growth",price:"$18k",period:"/mo",featured:true,desc:"Up to 60 tickets/month. HCM + Payroll or Financials. 1-day SLA.",features:["Everything in Starter","Automated regression testing","Proactive monitoring","1-day SLA + 4hr critical","Multi-module consultants"],cta:"Book a demo →"},
              {name:"Enterprise",price:"$35k+",period:"/mo",featured:false,desc:"Unlimited tickets. Full Workday suite. Dedicated consultant pod.",features:["Everything in Growth","Natural language reporting","Dedicated consultant pod","Custom SLAs","Quarterly business reviews"],cta:"Talk to sales →"},
            ].map(({name,price,period,featured,desc,features,cta})=>(
              <div key={name} style={{border:featured?"2px solid var(--amber)":"1px solid var(--border)",borderRadius:16,padding:"2rem",background:"var(--white)",position:"relative"}}>
                {featured&&<div style={{position:"absolute",top:-13,left:"50%",transform:"translateX(-50%)",background:"var(--amber)",color:"var(--amber-dark)",fontSize:11,fontWeight:500,padding:"3px 14px",borderRadius:99,whiteSpace:"nowrap"}}>Most popular</div>}
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:13,fontWeight:500,color:"var(--text-muted)",letterSpacing:1,textTransform:"uppercase",marginBottom:"1rem"}}>{name}</div>
                <div style={{fontSize:44,fontWeight:300,color:"var(--navy-dark)",letterSpacing:"-2px",lineHeight:1,marginBottom:4}}>{price}<span style={{fontSize:16,fontWeight:400,color:"var(--text-muted)",letterSpacing:0}}>{period}</span></div>
                <div style={{fontSize:13,color:"var(--text-muted)",lineHeight:1.5,marginBottom:"1.5rem",paddingBottom:"1.5rem",borderBottom:"1px solid var(--border)"}}>{desc}</div>
                {features.map(f=>(
                  <div key={f} style={{display:"flex",gap:10,fontSize:13,color:"var(--text-secondary)",padding:"5px 0"}}>
                    <span style={{color:"var(--amber)",fontWeight:700}}>✓</span>{f}
                  </div>
                ))}
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{display:"block",textAlign:"center",marginTop:"1.5rem",background:featured?"var(--amber)":"transparent",color:featured?"var(--amber-dark)":"var(--navy)",border:featured?"none":"1px solid var(--border-strong)",padding:"9px 20px",borderRadius:8,fontSize:14,fontWeight:500}}>{cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{padding:"6rem 3rem",background:"var(--navy-dark)"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:3,color:"var(--amber)",textTransform:"uppercase",marginBottom:"1rem"}}>What customers say</div>
          <h2 style={{fontSize:"clamp(28px,3vw,40px)",fontWeight:300,letterSpacing:"-1px",color:"var(--white)",marginBottom:"1rem",lineHeight:1.15}}>{"Don't take our word for it."}</h2>
          <p style={{fontSize:17,color:"rgba(255,255,255,0.5)",maxWidth:560,lineHeight:1.65,marginBottom:"3rem"}}>Design partners across HCM, Payroll, and Financials — all with the same story.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem"}}>
            {[
              {q:"We were paying $28k/month with our previous AMS vendor and tickets took a week. Alacri resolved our last 12 tickets in under 24 hours. I genuinely didn't think that was possible.",name:"VP of HR Technology",role:"2,200-employee company · HCM + Payroll",i:"KM"},
              {q:"The regression testing alone paid for the subscription. Our R1 update used to take three weeks of manual testing. Alacri had a full report in two days, with three critical issues flagged.",name:"Director of HRIT",role:"4,500-employee company · Full suite",i:"SR"},
              {q:"We switched from a Big 4 AMS provider. Half the cost, faster response, and the AI actually knows our configuration. It references tickets from 6 months ago when suggesting fixes.",name:"Workday System Administrator",role:"1,100-employee company · HCM + Financials",i:"TL"},
            ].map(({q,name,role,i})=>(
              <div key={i} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:16,padding:"2rem"}}>
                <p style={{fontSize:15,color:"rgba(255,255,255,0.85)",lineHeight:1.65,fontStyle:"italic",marginBottom:"1.5rem"}}>"{q}"</p>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:40,height:40,borderRadius:"50%",background:"var(--amber)",color:"var(--amber-dark)",fontSize:14,fontWeight:500,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{i}</div>
                  <div>
                    <div style={{fontSize:14,fontWeight:500,color:"var(--white)"}}>{name}</div>
                    <div style={{fontSize:12,color:"rgba(255,255,255,0.4)"}}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"6rem 3rem",background:"var(--off-white)",textAlign:"center"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:3,color:"var(--amber)",textTransform:"uppercase",marginBottom:"1rem"}}>Get started</div>
          <h2 style={{fontSize:"clamp(28px,3vw,40px)",fontWeight:300,letterSpacing:"-1px",color:"var(--navy-dark)",marginBottom:"1rem",lineHeight:1.15,maxWidth:600,margin:"0 auto 1rem"}}>Ready to move <strong style={{fontWeight:500}}>at AI speed?</strong></h2>
          <p style={{fontSize:17,color:"var(--text-secondary)",maxWidth:520,lineHeight:1.65,margin:"0 auto 2rem"}}>Book a 30-minute demo and we'll show you exactly how Alacri would work for your Workday environment.</p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{background:"var(--amber)",color:"var(--amber-dark)",padding:"12px 28px",borderRadius:8,fontSize:16,fontWeight:500}}>Book a demo →</a>
            <a href="mailto:hello@alacri.com" style={{background:"transparent",color:"var(--navy)",border:"1px solid var(--border-strong)",padding:"12px 28px",borderRadius:8,fontSize:16}}>hello@alacri.com</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"var(--navy-dark)",padding:"3rem"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{fontSize:20,fontWeight:500,color:"var(--white)",letterSpacing:"-0.5px"}}>alacri<span style={{color:"var(--amber)"}}>.</span></div>
          <div style={{display:"flex",gap:"1.5rem"}}>
            {[["#platform","Platform"],["#pricing","Pricing"],["mailto:hello@alacri.com","Contact"],["#","Privacy"]].map(([href,label])=>(
              <a key={label} href={href} style={{fontSize:13,color:"rgba(255,255,255,0.4)"}}>{label}</a>
            ))}
          </div>
          <div style={{fontSize:12,color:"rgba(255,255,255,0.25)"}}>© 2026 Alacri. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
