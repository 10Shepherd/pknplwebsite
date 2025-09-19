<template>
  <div class="get-started">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1
          class="page-title"
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ duration: 800, delay: 200 }"
        >
          MS-CIT New Center Registration Process
        </h1>
        <p
          class="page-subtitle"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600, delay: 400 }"
        >
          Follow our step-by-step process to get your MS-CIT center registered and operational
        </p>
      </div>
    </section>

    <!-- Main Content Area -->
    <section class="main-content">
      <div class="container">
        <div class="content-grid">
          <!-- Sidebar Navigation -->
          <aside
            class="sidebar"
            v-motion
            :initial="{ x: -50, opacity: 0 }"
            :enter="{ x: 0, opacity: 1 }"
            :transition="{ duration: 800, delay: 300 }"
          >
            <div class="sidebar-header">
              <h3>Important Instructions</h3>
            </div>

            <nav class="sidebar-nav">
              <ul class="nav-list">
                <li
                  v-for="(item, index) in sidebarItems"
                  :key="index"
                  class="nav-item"
                  :class="{ active: activeSection === item.id }"
                  @click="setActiveSection(item.id)"
                  v-motion
                  :initial="{ x: -30, opacity: 0 }"
                  :enter="{ x: 0, opacity: 1 }"
                  :transition="{ duration: 500, delay: 400 + index * 100 }"
                >
                  <span class="nav-icon">{{ item.icon }}</span>
                  {{ item.title }}
                </li>
              </ul>
            </nav>
          </aside>

          <!-- Content Area -->
          <main
            class="content-area"
            v-motion
            :initial="{ x: 50, opacity: 0 }"
            :enter="{ x: 0, opacity: 1 }"
            :transition="{ duration: 800, delay: 500 }"
          >
            <!-- Important Note Banner -->
            <div class="important-note">
              <h3>Important Note:</h3>
              <ul>
                <li>
                  If any applicant organization is running competitive courses then such
                  applications will not be considered for MS-CIT New Center Registration Process
                  2024.
                </li>
                <li>
                  If any Applicant Organization’s owner or center coordinator is directly /
                  indirectly running competitive courses then such application/center will not be
                  considered in any case. If any such case is found at any stage, then such center’s
                  authorization will be terminated immediately without giving any prior notice.
                </li>
                <li>
                  Applicant Organizations who are running any competitive courses or involved in any
                  malpractices then such Applicant Organization are not eligible for MS-CIT New
                  Center Registration Process.
                </li>
                <li>
                  Concerned ALC has to utilize the Security Deposit within the same year. If any ALC
                  fails to utilize the Security Deposit within stipulated time then MKCL will
                  forfeit the remaining security deposit amount. Also, unutilized Security Deposited
                  amount will not be carry forwarded to next year in any condition.
                </li>
                <li>
                  <h3>
                    If Applicant Organization is applying under any Franchisee or chain or similar
                    such type of common brand of network, then following conditions will apply:
                  </h3>
                </li>

                <li style="list-style-type: disc; margin-left: 20px">
                  MKCL will check the existing number of ALCs already registered under any
                  Franchisee or chain or similar such type of common brand of network.
                </li>
                <li style="list-style-type: disc; margin-left: 20px">
                  Maximum 10 (Ten) ALCs will be allowed under any Franchisee or chain or similar
                  such type of common brand of network.
                </li>
                <li style="list-style-type: disc; margin-left: 20px">
                  Accordingly, MKCL will allow AOs Application by checking above number ALC
                  conditions.
                </li>
                <li style="list-style-type: disc; margin-left: 20px">
                  If MKCL has taken any action against any specific Franchisee ALC/AO in past, then
                  will not consider fresh application of any AO under such Franchisee or chain or
                  similar such type of common brand of network.
                </li>
                <li>
                  <h3>Ownership Transfer</h3>
                </li>
                <li style="list-style-type: disc; margin-left: 20px">
                  Please note that MKCL MS-CIT ALC Authorization is non-transferable. So, ALC cannot
                  sale or transfer or give the rights MKCL MS-CIT ALC Authorization of to any other
                  Person or Organization.
                </li>
                <li style="list-style-type: disc; margin-left: 20px">
                  That means, if any Applicant Organization become ALC then they will not be able to
                  transfer MS-CIT ALC Authorization to other party to any condition.
                </li>
              </ul>
            </div>

            <!-- Dynamic Content Based on Active Section -->
            <div class="content-area">
              <!-- Project Overview Section -->
              <div v-if="activeSection === 'instruction-overview'" class="section-wrapper">
                <h2>Instructions</h2>
                <div class="content-card">
                  <h3>🚀 Important Instructions for Applicant Organization (AO)</h3>
                  <div class="content-card">
                    <div class="content-card">
                      <ul>
                        <li>
                          Applicant Organization (AO) should read all the instructions and process
                          details before applying for MS-CIT Center Registration Process 2024
                        </li>
                      </ul>
                    </div>
                    <div class="content-card">
                      <li>MKCL has finalized the Open Area list based on the following factors:</li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        Existing MKCL Centers presence in that area
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        Existing MKCL Centers business catchment area
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        Business potential of that area
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        Requirement of a specific area
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        Please note that, in some Open Area cases, we have kept the complete City /
                        Town / Tehsil as Open Area. But, we will allow the center at only Specific
                        Locations depending upon the Business Potential of that area. If Applicant
                        Organization applies from a particular City / Town / Tehsil then we will
                        analyze the local business situation and also we will check our existing
                        ALCs location in that area and accordingly we will decide the further course
                        of action. In this case, we will also reject the application if it is not
                        satisfying the required criteria.
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        Please note that, applying from Open Area does not mean that Applicant
                        Organization’s application is considered for further process. We will check
                        the Business Potential of that area with reference to our existing ALCs and
                        accordingly we will accept/reject the application.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        Applicant Organization (AO) has to apply for MS-CIT Registration Process
                        (NCR) from Open Area only. (as the Open Area list published by MKCL from
                        time to time).
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        If AO will apply from any other Area which is not an Open Area (as published
                        by MKCL) then AO’s application will not be considered in any case.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        Applicant Organizations (AO) request to add any additional Open Area will
                        not be considered in any condition. MKCL has finalized the Open Area list
                        based on market potential in that specific area.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        If Applicant Organization (AO) got MKCL recommendation for the proposed AO
                        location then it does not mean that they become MKCLs Authorized Learning
                        Center (ALC).
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        MKCL has finalized the Open Area list & their recommendation based on market
                        potential in specific area. MKCL reserves the right to add/edit/delete Open
                        Area from time to time without giving any reason or intimation.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        In the case of Educational Institute, AO has to apply with their
                        School/College/Institute name only. Also, they have to mark their actual
                        location in Schools/Colleges/Institute premises only.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        In the case of Educational Institute, AO has to apply with their
                        School/College/Institute name only. Also, they have to mark their actual
                        location in Schools/Colleges/Institute premises only.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        If any Applicant Organization (AO) tries to contact directly or indirectly
                        to MKCL by email, letter, telephone, social media, etc. then we will reject
                        the application of that Applicant Organization (AO) without giving any
                        reason. AO should contact the appropriate network partner as allocated by
                        MKCL.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        Applicant Organization (AO) has to complete the registration process within
                        schedule as stipulated by MKCL. If any Applicant Organization (AO) will not
                        complete the process within schedule, then we will not consider their
                        application for further process in any case.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        It is the responsibility of the Applicant Organization (AO) to visit the
                        portal & log in and keep updated themselves about the process and schedule.
                        Also, AO has to check their email, SMS, and WhatsApp communication on
                        regular basis. MKCL will not make any separate calls to AO to share the
                        schedule and other details.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        MKCL will do the communication to AO only on their registered email ID and
                        mobile number.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        AO has to attend the Orientation Meeting (Online/Offline) to understand the
                        details of the offerings & processes. Only one person from AO should attend
                        this Orientation Meeting (if the meeting is scheduled in presence).
                        Orientation Meetings will take place at the district/regional level.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        AO has to follow the schedule of the OnCeT Examination strictly, if any AO
                        fails to attempt/pass OnCeT Examination then we will not provide any further
                        chance to the candidate.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        For OnCeT and the interview process, we may do the recording through CCTV or
                        camera and keep the record for future reference.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        OnCeT and Process schedule will be available on the website only. If AO does
                        not receive any mail/communication from MKCL then AO should visit the
                        website for schedule and guidelines. It is the responsibility of the AO to
                        take the schedule from the website and follow it.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>If more than one AO has applied from the same location/area then</li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        MKCL will rank the AOs based on Total Score. AO having the highest Total
                        Score will be eligible for further process.
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        If the Total Score is same then we will apply the following logic:
                      </li>
                      <li style="list-style-type: disc; margin-left: 60px">
                        AO having the highest OnCeT score in Learning Facilitator’s Exam will be
                        eligible for further process.
                      </li>
                      <li style="list-style-type: disc; margin-left: 60px">
                        If still there is a tie, then AO having the highest OnCeT score in Center
                        Coordinator Exam will be eligible for further process.
                      </li>
                      <li style="list-style-type: disc; margin-left: 60px">
                        If still, there is a tie then AO having the highest interview score will be
                        eligible for further process.
                      </li>
                      <li style="list-style-type: disc; margin-left: 60px">
                        If still there is a tie, then AO will be selected through Lucky Draw System.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        If the same Learning Facilitator (Faculty) is registered from more than one
                        AO then MKCL will cancel the application of concerned AOs. Also, these AOs
                        will not be eligible for further process.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        MKCL will communicate with the eligible AOs to prepare the center setup. If
                        any AO will prepare the setup before our communication then we will not be
                        responsible for any financial or other investment loss.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        If an eligible AO’s center setup is not as per the norms specified by MKCL
                        at the time of center visit as per the schedule, then we will reject the
                        application of AO from this process. In this case, MKCL will not be
                        responsible for any financial or other investment loss.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        If the location provided by the AO at the time of application is different
                        from the location at the time of center visit, then we will not give the
                        authorization to such AO. In this case also, MKCL will not be responsible
                        for any financial or other investment loss.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        Authorization as MS-CIT ALC shall be given subject to completion of all the
                        prescribed procedural formalities and submission of all the requisite
                        documents.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        Once MKCL gives final approval for a specific AO to become ALC at a specific
                        location, then that ALC will not be able to change the location for the next
                        3 consecutive years i.e. No location change is allowed for three years in
                        any condition. Also, Owner change is not allowed for 2 consecutive years in
                        any condition.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        If any ALC will change the location within 3 years then that ALC’s
                        Authorization may be cancelled with immediate effect.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        MKCL will not refund any amount (such as Processing fee, Registration Fee,
                        Security Deposit, etc.) in case AO become Authorized Learning Center (ALC).
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        In case AO got rejected in between the MS-CIT New Center Registration
                        Process, then their applicable refund will be processed by March 31, 2024.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        Those Applicant Organization (AO) who will become ALC for the year 2024-
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        Their authorization will be valid for the period of 1st January 2024 to 31st
                        December 2024, irrespective of the center registration in any month of the
                        year 2023 or 2024.
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        Eligible ALC has to apply for renewal for the year 2024 by paying requisite
                        fees as communicated by MKCL from time to time.
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        ALC will be able to enroll admissions from January 2024 month onwards.
                      </li>
                    </div>
                    <div class="content-card">
                      <li>
                        MKCL reserves the right of granting and/or rejecting authorization to any
                        applicant/s, without assigning any reason/s whatsoever to anyone.
                      </li>
                    </div>

                    <div class="content-card">
                      <h3 style="list-style-type: disc; margin-left: 100px">
                        Terms and Conditions for Applicant Organization (AO)
                      </h3>
                      <p>We, Applicant Organization (AO) understand and agree that –</p>
                    </div>
                    <div class="content-card">
                      <li>
                        The location of the proposed center shall be fixed only in the specific
                        location as selected by us and the selected location shall not be changed by
                        us anytime during, and after the ‘Network Partner /Center Registration
                        Process. We will not have any objection in case of rejection based on
                        location or any other reason.
                      </li>
                      <li>
                        To visit the website on regular basis to know about
                        information/guidelines/norms/schedules prescribed by MKCL on the website
                        from time to time.
                      </li>
                      <li>
                        MKCL will use contact & other details for any promotional or
                        business-related activities.
                      </li>
                      <li>MKCL reserves the right —</li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        to modify the terms and conditions of the Network Partner /Center
                        Registration Process without any prior notice and MKCL shall not be liable
                        to anyone for any such modification/s;
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        to discontinue/postpone the Network Partner/Center Registration Process (or
                        any part thereof) with/without prior notice and MKCL shall not be liable to
                        anyone for any such discontinuation/postponement;
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        of granting and/or rejecting authorization to any applicant/s, without
                        assigning any reason/s whatsoever to anyone.
                      </li>
                      <li>In case we are granted authorization:</li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        We are responsible for maintaining the confidentiality of the password and
                        login account given by MKCL and fully responsible for all activities that
                        occur thereunder;
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        We shall abide by the various Rules, Regulations, Code of Conduct,
                        Guidelines, Communications, and Norms issued and specified by MKCL from time
                        to time.
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        We cannot run any competitive course also we will not do any undercutting in
                        fees or clubbing of courses. If we involve in doing any such malpractice
                        then our authorization will get cancelled/terminated immediately without any
                        prior notice.
                      </li>
                      <li>
                        All the disputes or differences, if any, before and/or after authorization
                        (if granted) shall be referred to the courts in Pune, which shall be the
                        courts having the jurisdiction to entertain and try the same.
                      </li>
                    </div>

                    <div class="content-card">
                      <h3>Important Note:</h3>
                      <li>
                        <h4>
                          If any Applicant Organization’s Owner or Center Coordinator is directly /
                          indirectly running competitive courses equivalent to MS-CIT, then such
                          application/center will not be considered in any case. If any such case is
                          found at any stage, then such center’s authorization will be terminated
                          immediately without giving any prior notice.
                        </h4>
                      </li>
                      <li>
                        <h4>
                          Center Coordinator and Learning Facilitator who are working at existing
                          ALC are not eligible to register for OnCeT Examination.
                        </h4>
                      </li>
                    </div>

                    <div class="content-card">
                      <p>
                        In case of any rejection / incomplete application, MKCL will process the
                        refund to AO (if applicable) in the month of March 2024 only. MKCL will not
                        process the refund during the MS-CIT New Center Registration process before
                        March 2024 month in any condition. AO’s SOLAR Advance Account:
                      </p>
                    </div>
                    <div class="content-card">
                      <li style="list-style-type: disc; margin-left: 30px">
                        AO has to make the payment to MKCL by using their SOLAR Advance Account
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        First AO has to add the requisite amount in their SOLAR Advance Account
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        AO has to keep on checking the amount status in their SOLAR Advance Account
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        During the process or after completion of process if any amount is not
                        utilized through AO’s SOLAR Advance Account then AO can take the refund in
                        their bank account.
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        AO has to follow the SOLAR Advance refund process as mentioned on the
                        website
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        MKCL will process the SOLAR Advance refund to AO (if applicable) in the
                        month of March 2024 only
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        MKCL will not process the SOLAR Advance refund before March 2024.
                      </li>
                      <li style="list-style-type: disc; margin-left: 30px">
                        In case any amount is pending in AO’s SOLAR Advance Account and they have
                        not taken the refund on or before March 2024, then MKCL will forfeit such
                        amount without giving any intimation.
                      </li>
                    </div>
                  </div>

                  <div class="cta-section">
                    <h3>Ready to Begin?</h3>
                    <p>Start your project by scheduling a consultation with our team.</p>
                    <button class="cta-button">Schedule Consultation</button>
                  </div>
                </div>
              </div>

              <!-- Important Dates Section -->
              <div v-else-if="activeSection === 'important-dates'" class="section-wrapper">
                <h2>Important Dates & Timeline</h2>
                <div class="content-card">
                  <h3>📅 Activity Details</h3>

                  <div class="timeline">
                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Notification by MKCL</h4>
                        <p>Notification by MKCL for new centre registration</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>
                          Applicant Organization (AO) will apply online by providing basic details
                          e-mail ID, Mobile No., etc.
                        </h4>
                        <p>Application filling by Applicant for New centre</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">Week 4-6</div>
                      <div class="timeline-content">
                        <h4>Receiving SOLAR Login ID'S</h4>
                        <p>
                          AO will get SOLAR login id and password by clicking on the activation link
                          received on email & OTP on Mobile number
                        </p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Selection of EOI & TP</h4>
                        <p>AO will submit EOI & Select TP on SOLAR Login</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Location Detail filling</h4>
                        <p>AO will provide the basic location details along with Geolocation</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Location Recommendation by TP</h4>
                        <p>
                          TP will recommend if the ao needs to move to a better location depending
                          on availability
                        </p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Location Recommendation by LLC</h4>
                        <p>
                          LLC will recommend if the ao needs to move to a better location depending
                          on availability
                        </p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Registration & Processing Fee submission</h4>
                        <p>AO will transfer the registration & processing fee of Rs. 13000/-</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Orientation Meeting</h4>
                        <p>AO will attend the Orientation Meeting</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Registration for OnCeT Examination</h4>
                        <p>
                          Learning Facilitator (Faculty) & Center Coordinator Registration for OnCeT
                          Examination
                        </p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>OnCeT Examination for Faculty & Center Coordinator</h4>
                        <p>
                          OnCeT Examination for Faculty & Center Coordinator at District location
                        </p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Center Coordinator Interview</h4>
                        <p>
                          The Center Coordinator will appear for an Interview at the District
                          location
                        </p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Shortlisting of AO</h4>
                        <p>Shortlisting of AO based on OnCeT & Interview score</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Security Deposit Fee submission</h4>
                        <p>AO will transfer Security Deposit Fee</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Preparation of Center setup</h4>
                        <p>Preparation of Center setup at the specified location</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Submission of Important Details & Documents</h4>
                        <p>Submit HR, Infra, and other details with the required Documents</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>Uploading IT setup</h4>
                        <p>Upload IT setup through WORM software</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>LLC visit</h4>
                        <p>LLC visit at Center Location</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>LLC Recommendation</h4>
                        <p>LLC Final Recommendation</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>RLC Recommendation</h4>
                        <p>RLC Final Recommendation</p>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-date">TBD 2025</div>
                      <div class="timeline-content">
                        <h4>MKCL Approval</h4>
                        <p>MKCL Approval</p>
                      </div>
                    </div>
                  </div>

                  <div class="important-dates-list">
                    <h4>🔔 Key Deadlines</h4>
                    <ul>
                      <li><strong>N/A:</strong> TBD 2025</li>
                      <li><strong>N/A:</strong> TBD 2025</li>
                      <li><strong>N/A:</strong> TBD 2025</li>
                      <li><strong>N/A:</strong> TBD 2025</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Technical Requirements Section -->
              <div v-else-if="activeSection === 'technical-requirements'" class="section-wrapper">
                <h2>Technical Requirements</h2>
                <div class="content-card">
                  <h3>💻 What You Need to Provide</h3>

                  <div class="requirements-section">
                    <h4>🌐 Minimum IT Infrastructure</h4>
                    <ul class="requirement-list">
                      <li>Minimum Lab setup :1 Server + 10 Clients</li>
                      <li>Xtenda Setup is not allowed</li>
                    </ul>
                  </div>

                  <div class="requirements-section">
                    <h4>🌐 Minimum Server Configuration</h4>
                    <ul class="requirement-list">
                      <li>Intel i5 6th Generation with 8 GB RAM</li>
                      <li>1 TB SSD Hard disk (Only for Server)</li>
                      <li>Integrated Graphics</li>
                      <li>NIC card / WIFI</li>
                      <li>3 USB ports</li>
                      <li>Windows 10(64-bit) Enterprise Edition with Service Pack 1</li>
                      <li>Antivirus</li>
                      <li>Quantity required percenter (minimum): 1 Desktop/Laptop</li>
                      <li>Minimum 50 Mbps Internet connection</li>
                      <h5>
                        The above-mentioned server can support up to 20 Clients. If the number of
                        Clients is more, then the server CPU and RAM should be increased
                        proportionately
                      </h5>
                    </ul>
                  </div>

                  <div class="requirements-section">
                    <h4>🌐 Minimum Client Configuration</h4>
                    <ul class="requirement-list">
                      <li>Intel i5 6th Generation with 4 GB RAM</li>
                      <li>256 GB SSD Hard disks</li>
                      <li>NIC card / WIFI</li>
                      <li>Keyboard and Mouse</li>
                      <li>Headphone with Mic</li>
                      <li>One Web Camera / integrated Camera</li>
                      <li>3 USB ports</li>
                      <li>Minimum 14inch SVGA Monitor or above</li>
                      <li>Windows 10 Enterprise (64-bit)</li>
                      <li>Antivirus</li>
                      <li>Quantity required per center (minimum): 10 Desktops/Laptops*</li>
                      <p>Laptops are preferable because:</p>
                      <li style="list-style-type: disc; margin-left: 40px">Consume less power</li>
                      <li style="list-style-type: disc; margin-left: 40px">Require less space</li>
                      <li style="list-style-type: disc; margin-left: 40px">Easy to maintain</li>
                      <li style="list-style-type: disc; margin-left: 40px">
                        Minimum 3-4 hours of power backup available in case of power failure
                      </li>
                      <li style="list-style-type: disc; margin-left: 40px">Inbuilt Web camera</li>
                      <li style="list-style-type: disc; margin-left: 40px">Easy to move</li>
                      <li style="list-style-type: disc; margin-left: 40px">WiFi connectivity</li>
                    </ul>
                  </div>

                  <div class="requirements-section">
                    <h4>🌐 Peripherals</h4>
                    <ul class="requirement-list">
                      <li>Printer – minimum 600 dpi resolution</li>
                      <li>Scanner – minimum 600 dpi resolution</li>
                      <li>Bio Metric Device (minimum 1)</li>
                      <li>Power Backup for all Computers</li>
                      <li style="list-style-type: disc; margin-left: 40px">UPS or</li>
                      <li style="list-style-type: disc; margin-left: 40px">
                        Inverter with Battery backup(Compulsory)
                      </li>
                      <li style="list-style-type: disc; margin-left: 40px">DG Set (Optional)</li>
                      <li>CCTV (Compulsory)</li>
                      <li>Projector or LCD Display (Optional)</li>
                      <li>Speakers (Optional)</li>
                    </ul>
                  </div>

                  <div class="requirements-section">
                    <h4>🌐 Peripherals</h4>
                    <ul class="requirement-list">
                      <p>
                        LAN 10/100/1000 Mbps Network Switch (Server and all Laptops should be
                        connected to this Network Switch) or Wifi Access Point – 300 Mbps, 802.11n
                      </p>
                      <p>
                        Electrical and LAN wiring should run perpendicular to each other. If they
                        are parallel to each other, then a distance of 2 feet should be maintained
                        between them to avoid interference
                      </p>
                    </ul>
                  </div>

                  <div class="requirements-section">
                    <h4>🛜 Internet</h4>
                    <ul class="requirement-list">
                      <p>
                        Minimum 50 Mbps Broadband Connection (wired / wireless) (Server and all
                        Laptops should be able to connect to the Internet by using Internet
                        Connection Sharing or Proxy Server)
                      </p>
                    </ul>
                  </div>

                  <div class="requirements-section">
                    <h4>🌐 License Policy:</h4>
                    <ul class="requirement-list">
                      <p>MKCL will provide the following licenses to ALCs:</p>
                      <li style="list-style-type: disc; margin-left: 40px">
                        Windows 10 64 Enterprise Edition with Service Pack – 1 Server
                      </li>
                      <li style="list-style-type: disc; margin-left: 40px">
                        Windows 10 Enterprise (64-bit) – 10 Clients
                      </li>
                      <li style="list-style-type: disc; margin-left: 40px">
                        MS-Office 2019 (64-bit) Standard Edition – 11 (1 Server + 10 clients)
                      </li>
                      <p>For additional licenses, ALC has to arrange on their own.</p>
                      <p>
                        ALC has to use Microsoft Licenses provided by MKCL for the courses offered
                        by MKCL only.
                      </p>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Consultation Guidelines Section -->
              <div
                v-else-if="activeSection === 'OnCeT&interview-guidelines'"
                class="section-wrapper"
              >
                <h2>Consultation Guidelines</h2>
                <div class="content-card">
                  <h3>🤝 OnCeT Guidelines</h3>

                  <div class="consultation-steps">
                    <div class="step-card">
                      <div class="step-number">1</div>
                      <div class="step-content">
                        <h4>Total Score</h4>
                        <p>OnCeT Score of Learning Facilitator 20/50</p>
                        <p>OnCeT Score of Center Coordinator 20/50</p>
                        <p>Interview Score 12/30</p>
                      </div>
                    </div>

                    <div class="step-card">
                      <div class="step-number">2</div>
                      <div class="step-content">
                        <h4>Discovery Session</h4>
                        <p>We'll discuss your goals, requirements, and project scope</p>
                      </div>
                    </div>

                    <div class="step-card">
                      <div class="step-number">3</div>
                      <div class="step-content">
                        <h4>Proposal & Quote</h4>
                        <p>Receive a detailed project proposal with timeline and pricing</p>
                      </div>
                    </div>

                    <div class="step-card">
                      <div class="step-number">4</div>
                      <div class="step-content">
                        <h4>Project Agreement</h4>
                        <p>Sign the agreement and begin the development process</p>
                      </div>
                    </div>
                  </div>

                  <div class="consultation-tips">
                    <h4>💡 Preparation Tips</h4>
                    <ul>
                      <li>Have your business goals and objectives clear</li>
                      <li>Gather examples of websites you admire</li>
                      <li>Prepare a list of required features and functionality</li>
                      <li>Know your target audience and market</li>
                      <li>Have your budget range in mind</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Benefits & Packages Section -->
              <div v-else-if="activeSection === 'benefits-packages'" class="section-wrapper">
                <h2>Benefits & Packages</h2>
                <div class="content-card">
                  <h3>✨ Choose Your Package</h3>

                  <div class="packages-grid">
                    <div class="package-card starter">
                      <div class="package-header">
                        <h4>Starter Package</h4>
                        <div class="package-price">$2,999</div>
                      </div>
                      <ul class="package-features">
                        <li>✅ 5-page responsive website</li>
                        <li>✅ Modern design & animations</li>
                        <li>✅ Mobile optimization</li>
                        <li>✅ Basic SEO setup</li>
                        <li>✅ Contact form integration</li>
                        <li>✅ 30 days support</li>
                      </ul>
                      <button class="package-button">Choose Starter</button>
                    </div>

                    <div class="package-card professional popular">
                      <div class="package-badge">Most Popular</div>
                      <div class="package-header">
                        <h4>Professional Package</h4>
                        <div class="package-price">$4,999</div>
                      </div>
                      <ul class="package-features">
                        <li>✅ 10-page responsive website</li>
                        <li>✅ Custom animations & interactions</li>
                        <li>✅ Advanced SEO optimization</li>
                        <li>✅ Blog/News section</li>
                        <li>✅ Social media integration</li>
                        <li>✅ Google Analytics setup</li>
                        <li>✅ 90 days support</li>
                      </ul>
                      <button class="package-button">Choose Professional</button>
                    </div>

                    <div class="package-card enterprise">
                      <div class="package-header">
                        <h4>Enterprise Package</h4>
                        <div class="package-price">$8,999</div>
                      </div>
                      <ul class="package-features">
                        <li>✅ Unlimited pages</li>
                        <li>✅ E-commerce functionality</li>
                        <li>✅ Custom dashboard</li>
                        <li>✅ Advanced integrations</li>
                        <li>✅ Multi-language support</li>
                        <li>✅ Premium hosting included</li>
                        <li>✅ 1 year support</li>
                      </ul>
                      <button class="package-button">Choose Enterprise</button>
                    </div>
                  </div>

                  <div class="additional-benefits">
                    <h4>🎁 Additional Benefits</h4>
                    <div class="benefits-grid">
                      <div class="benefit-item">
                        <span class="benefit-icon">🚀</span>
                        <div>
                          <h5>Fast Delivery</h5>
                          <p>Most projects completed within 6-8 weeks</p>
                        </div>
                      </div>
                      <div class="benefit-item">
                        <span class="benefit-icon">🔒</span>
                        <div>
                          <h5>Security First</h5>
                          <p>SSL certificates and security best practices included</p>
                        </div>
                      </div>
                      <div class="benefit-item">
                        <span class="benefit-icon">📈</span>
                        <div>
                          <h5>SEO Ready</h5>
                          <p>Optimized for search engines from day one</p>
                        </div>
                      </div>
                      <div class="benefit-item">
                        <span class="benefit-icon">🎯</span>
                        <div>
                          <h5>Performance Focused</h5>
                          <p>Fast loading times and optimal user experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contact Details Section -->
              <div v-else-if="activeSection === 'contact-details'" class="section-wrapper">
                <h2>Contact Details</h2>
                <div class="content-card">
                  <h3>📞 Get in Touch</h3>

                  <div class="contact-methods">
                    <div class="contact-item">
                      <div class="contact-icon">📧</div>
                      <div class="contact-info">
                        <h4>Email</h4>
                        <p>connect@parthinfo.com</p>
                        <p>support@parthinfo.com</p>
                      </div>
                    </div>

                    <div class="contact-item">
                      <div class="contact-icon">📱</div>
                      <div class="contact-info">
                        <h4>Phone</h4>
                        <p>+91 9820313212, 7738146959, 8384858685</p>
                        <p>Available: Mon-Fri, 9 AM - 6 PM IST</p>
                      </div>
                    </div>

                    <div class="contact-item">
                      <div class="contact-icon">📍</div>
                      <div class="contact-info">
                        <h4>Office</h4>
                        <p>Plot No. 20, Sector 17, Airoli</p>
                        <p>Navi Mumbai, Maharashtra 400708</p>
                      </div>
                    </div>
                  </div>

                  <div class="contact-form-section">
                    <h4>📝 Quick Contact Form</h4>
                    <form class="contact-form">
                      <div class="form-row">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                      </div>
                      <div class="form-row">
                        <input type="tel" placeholder="Phone Number" />
                        <input type="text" placeholder="Subject" />
                      </div>
                      <textarea placeholder="Tell us about your project..." rows="4"></textarea>
                      <button type="submit" class="submit-button">Send Message</button>
                    </form>
                  </div>

                  <div class="response-times">
                    <h4>⏱️ Response Times</h4>
                    <div class="response-grid">
                      <div class="response-item"><strong>Email:</strong> Within 24 hours</div>
                      <div class="response-item">
                        <strong>Phone:</strong> Immediate during business hours
                      </div>
                      <div class="response-item">
                        <strong>Consultation:</strong> Scheduled within 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Reactive data
const activeSection = ref('instruction-overview')

// Sidebar navigation items
const sidebarItems = [
  { id: 'instruction-overview', title: 'Instruction Overview', icon: '📋' },
  { id: 'important-dates', title: 'Important Dates', icon: '📅' },
  { id: 'technical-requirements', title: 'Technical Requirements', icon: '💻' },
  { id: 'OnCeT&interview-guidelines', title: 'OnCeT & Interview Guidelines', icon: '🤝' },
  { id: 'benefits-packages', title: 'Benefits & Packages', icon: '✨' },
  { id: 'contact-details', title: 'Contact Details', icon: '📞' },
]

// Methods
const setActiveSection = (sectionId: string) => {
  activeSection.value = sectionId
  console.log('Active section changed to:', sectionId)
}
</script>

<style scoped>
/* CSS Variables - inherit from main.css */
.get-started {
  min-height: 100vh;
  padding-top: 5rem;
}

.page-header {
  background: linear-gradient(135deg, var(--primary-white) 0%, var(--off-white) 100%);
  padding: 3rem 0;
  text-align: center;
}

.page-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.main-content {
  padding: 2rem 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;
}

/* Sidebar Styles */
.sidebar {
  position: sticky;
  top: 6rem;
  background: var(--primary-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-medium);
  overflow: hidden;
}

.sidebar-header {
  background: #f97316;
  color: white;
  padding: 1rem 1.5rem;
}

.sidebar-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid var(--light-gray);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-gray);
}

.nav-item:hover,
.nav-item.active {
  background: var(--light-gray);
  color: var(--accent-color);
  transform: translateX(5px);
}

.nav-item.active {
  background: #eff6ff;
  border-left: 4px solid var(--accent-color);
  font-weight: 600;
}

.nav-icon {
  font-size: 1.2rem;
}

/* Content Area Styles */
.content-area {
  background: var(--primary-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-light);
  overflow: hidden;
}

.important-note {
  background: #fee2e2;
  color: #991b1b;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-left: 4px solid #dc2626;
}

.important-note h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.important-note ul {
  margin: 0;
  padding-left: 1.5rem;
}

.important-note li {
  margin-bottom: 0.25rem;
}

.section-content {
  padding: 2rem;
}

/* Section Components Styles */
.section-wrapper h2 {
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
  margin-left: 1rem;
}

.content-card {
  background: var(--off-white);
  padding: 1rem;
  border-radius: var(--radius);
  margin-bottom: -1rem;
}

.content-card h3 {
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

/* Feature Grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-item {
  background: var(--primary-white);
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-light);
}

.feature-item h4 {
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

/* Timeline Styles */
.timeline {
  position: relative;
  padding-left: 2rem;
  margin: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--accent-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1rem;
  align-items: start;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.5rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  background: var(--accent-color);
  border-radius: 50%;
}

.timeline-date {
  font-weight: 600;
  color: var(--accent-color);
  font-size: 0.9rem;
}

.timeline-content h4 {
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

/* Requirements List */
.requirement-list {
  background: var(--primary-white);
  padding: 1rem;
  border-radius: var(--radius);
  margin: 1rem 0;
}

.requirement-list li {
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
}

/* Tech Stack */
.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tech-badge {
  background: var(--accent-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Consultation Steps */
.consultation-steps {
  display: grid;
  gap: 1rem;
  margin: 2rem 0;
}

.step-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--primary-white);
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-light);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--accent-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content h4 {
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

/* Packages Grid */
.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.package-card {
  background: var(--primary-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  position: relative;
}

.package-card.popular {
  transform: scale(1.05);
  border: 2px solid var(--accent-color);
}

.package-badge {
  background: var(--accent-color);
  color: white;
  padding: 0.5rem 1rem;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 0 0 0 var(--radius);
}

.package-header {
  padding: 2rem 1.5rem 1rem;
  text-align: center;
}

.package-header h4 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.package-price {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.package-features {
  padding: 0 1.5rem;
  list-style: none;
  margin: 0;
}

.package-features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--light-gray);
}

.package-button {
  width: 100%;
  padding: 1rem;
  background: var(--accent-color);
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1.5rem 0 0 0;
}

.package-button:hover {
  background: #1d4ed8;
}

/* Benefits Grid */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--primary-white);
  padding: 1rem;
  border-radius: var(--radius);
}

.benefit-icon {
  font-size: 1.5rem;
}

.benefit-item h5 {
  color: var(--text-dark);
  margin: 0 0 0.25rem 0;
}

.benefit-item p {
  color: var(--text-gray);
  margin: 0;
  font-size: 0.9rem;
}

/* Contact Styles */
.contact-methods {
  display: grid;
  gap: 1.5rem;
  margin: 2rem 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--primary-white);
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-light);
}

.contact-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.contact-info h4 {
  color: var(--text-dark);
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.contact-info p {
  color: var(--text-gray);
  margin: 0;
  font-size: 0.95rem;
}

/* Contact Form */
.contact-form-section {
  background: var(--primary-white);
  padding: 2rem;
  border-radius: var(--radius);
  margin: 2rem 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  padding: 0.75rem 1rem;
  border: 2px solid var(--medium-gray);
  border-radius: var(--radius);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.submit-button {
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.submit-button:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

/* Response Times */
.response-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.response-item {
  background: var(--primary-white);
  padding: 1rem;
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--shadow-light);
}

/* CTA Section */
.cta-section {
  background: var(--primary-white);
  padding: 2rem;
  border-radius: var(--radius);
  text-align: center;
  margin: 2rem 0;
  border: 2px solid var(--light-gray);
}

.cta-section h3 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.cta-section p {
  color: var(--text-gray);
  margin-bottom: 1.5rem;
}

.cta-button {
  background: var(--accent-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: var(--radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

/* Important Dates List */
.important-dates-list {
  background: var(--primary-white);
  padding: 1.5rem;
  border-radius: var(--radius);
  margin: 2rem 0;
}

.important-dates-list h4 {
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.important-dates-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.important-dates-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--light-gray);
}

.important-dates-list li:last-child {
  border-bottom: none;
}

.requirements-section {
  background: var(--primary-white);
  padding: 1.5rem;
  border-radius: var(--radius);
  margin: 1rem 0;
}

.requirements-section h4 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.consultation-tips {
  background: #f0f9ff;
  padding: 1.5rem;
  border-radius: var(--radius);
  margin: 2rem 0;
  border-left: 4px solid var(--accent-color);
}

.consultation-tips h4 {
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.consultation-tips ul {
  margin: 0;
  padding-left: 1.5rem;
}

.consultation-tips li {
  margin-bottom: 0.5rem;
  color: var(--text-gray);
}

.additional-benefits {
  background: var(--primary-white);
  padding: 2rem;
  border-radius: var(--radius);
  margin: 2rem 0;
}

.additional-benefits h4 {
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.3rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .sidebar {
    position: static;
    order: -1;
  }

  .nav-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
  }

  .nav-item {
    flex: 1;
    min-width: 200px;
    text-align: center;
    border-bottom: none;
    border-right: 1px solid var(--light-gray);
    padding: 1rem 0.5rem;
  }

  .nav-item:last-child {
    border-right: none;
  }

  .nav-item:hover,
  .nav-item.active {
    transform: none;
  }
}

@media (max-width: 768px) {
  .packages-grid {
    grid-template-columns: 1fr;
  }

  .package-card.popular {
    transform: none;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .response-grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .timeline-date {
    font-size: 0.8rem;
  }

  .nav-list {
    flex-direction: column;
  }

  .nav-item {
    min-width: auto;
    border-right: none;
    border-bottom: 1px solid var(--light-gray);
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .section-content {
    padding: 1rem;
  }

  .content-card {
    padding: 1rem;
  }

  .page-title {
    font-size: 1.8rem;
  }

  .contact-item {
    flex-direction: column;
    text-align: center;
  }

  .step-card {
    flex-direction: column;
    text-align: center;
  }

  .benefit-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
