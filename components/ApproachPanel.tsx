"use client";

export default function ApproachPanel() {
  return (
    <section id="approach" className="section bg-navy-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <div className="text-sm font-semibold text-burgundy-700 tracking-wide uppercase mb-4">
              Investment Approach
            </div>
            <h2 className="text-h2 text-navy-900 mb-6">
              Partnership-Driven Capital
            </h2>
            <p className="text-body-lg text-slate mb-8">
              We take a hands-on approach to value creation, working closely with management teams 
              to accelerate growth, optimize operations, and prepare for successful exits.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-h4 text-navy-900 mb-3">Due Diligence Process</h3>
                <p className="text-slate leading-relaxed">
                  Our technical team conducts comprehensive technical, market, and financial due diligence. 
                  We typically complete diligence within 4-6 weeks and provide detailed feedback regardless of outcome.
                </p>
              </div>
              
              <div>
                <h3 className="text-h4 text-navy-900 mb-3">Post-Investment Support</h3>
                <p className="text-slate leading-relaxed">
                  Portfolio companies receive dedicated support across go-to-market strategy, talent acquisition, 
                  customer introductions, and follow-on fundraising. We maintain regular board participation and quarterly business reviews.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Value Add */}
          <div>
            <div className="card p-8 mb-6">
              <h3 className="text-h3 text-navy-900 mb-6">How We Add Value</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-burgundy-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-burgundy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Strategic Planning</h4>
                    <p className="text-sm text-slate">
                      Quarterly strategic reviews, annual planning sessions, and ongoing advisory on key business decisions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-burgundy-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-burgundy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Talent Network</h4>
                    <p className="text-sm text-slate">
                      Access to our network of 500+ executives, engineers, and advisors for hiring and advisory roles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-burgundy-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-burgundy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Customer Introductions</h4>
                    <p className="text-sm text-slate">
                      Warm introductions to Fortune 500 companies, government agencies, and other potential customers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-burgundy-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-burgundy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Follow-On Capital</h4>
                    <p className="text-sm text-slate">
                      Reserved capital for follow-on investments and introductions to later-stage investors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Timeline */}
            <div className="card p-6">
              <h4 className="font-semibold text-navy-900 mb-4">Typical Investment Timeline</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate">Initial Meeting</span>
                  <span className="font-semibold text-navy-900">Week 1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Due Diligence</span>
                  <span className="font-semibold text-navy-900">Weeks 2-6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Partner Meeting</span>
                  <span className="font-semibold text-navy-900">Week 7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Term Sheet</span>
                  <span className="font-semibold text-navy-900">Week 8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Closing</span>
                  <span className="font-semibold text-navy-900">Weeks 10-12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
