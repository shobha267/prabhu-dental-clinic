/**
 * Prabhu Dental Clinic - Main Interactive Logic
 * Location: Saraswathipuram, Mysore
 * Featuring:
 * - Active Oval Pill Header Navigation with Instant Click Highlight
 * - Dynamic English & Kannada Bilingual System
 * - Live Clinic Status in both languages
 * - Interactive Form Prototype & Photo Lightbox
 */

let currentLang = 'en';

// Comprehensive Bilingual Translation Dictionary
const translations = {
  en: {
    // Top Bar
    "topbar.address": "388, 5th Cross, 14th Main, Near Bus Stop, Saraswathipuram, Mysore",
    "lang.choose": "Language / ಭಾಷೆ:",

    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.doctors": "Our Doctors",
    "nav.specialities": "Specialities",
    "nav.team": "Our Team",
    "nav.legacy": "Clinic Legacy",
    "nav.gallery": "Gallery",
    "nav.appointment": "Appointment",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.book_cta": "Book Appointment",

    // Brand
    "brand.clinic_name": "Prabhu Dental Clinic",
    "brand.clinic_name_caps": "PRABHU DENTAL CLINIC",

    // Hero Section
    "hero.pill": "Orthodontics & Periodontistry Clinic &bull; Saraswathipuram, Mysore",
    "hero.title": 'PRABHU <span class="brand-red">DENTAL CLINIC</span>',
    "hero.specialty": "Orthodontics &amp; Periodontistry Clinic",
    "hero.desc": "Saraswathipuram, Mysore. Owned by husband and wife duo Dr. Mahesh H.V. M.D.S. (Periodontist &amp; Implantologist) and Dr. Ramya K.S. M.D.S. (Orthodontist and Dentofacial Orthopaedist). Continuing a legacy of dedicated dental care since 2012.",
    "hero.btn_appointment": "BOOK AN APPOINTMENT",
    "hero.btn_directions": "GET DIRECTIONS",
    "hero.stat1_label": "Continuing clinic legacy with Dr. M.G. Prabhu's blessings",
    "hero.stat2_label": "Periodontist &amp; Orthodontist Duo",
    "hero.stat3_num": "Claimed",
    "hero.stat3_label": "Claimed Clinic Profile in Saraswathipuram",
    "hero.caption_title": "Prabhu Dental Clinic",
    "hero.caption_sub": "388, 5th Cross, 14th Main, Saraswathipuram, Mysore",
    "hero.verified_badge": "Clinic Exterior",
    "hero.badge_loc_title": "Saraswathipuram",
    "hero.badge_loc_sub": "Near Bus Stop, Mysore",
    "hero.badge_timing_title": "Monday – Saturday",
    "hero.badge_timing_sub": "10 AM–1 PM &bull; 5 PM–9 PM",
    "hero.badge_sparkle": "Specialist Care Duo",

    // About Section
    "about.tag": "About Prabhu Dental Clinic",
    "about.title": "Continuing a Legacy of Dental Care Since 2012",
    "about.subtitle": "Dedicated patient care, ethical practice, and continuous clinical betterment in Saraswathipuram, Mysore.",
    "about.flow_title": "Clinical Lineage & Evolution Path",
    "about.quote": '"Clinic is owned by husband and wife duo <strong>Dr. Mahesh H.V. M.D.S. (Periodontist &amp; Implantologist)</strong> and <strong>Dr. Ramya K.S. M.D.S. (Orthodontist and dentofacial orthopaedist)</strong>. With the blessings of <strong>Dr. M.G. Prabhu</strong>, Dr. Mahesh and Dr. Ramya have taken over the clinic from him in the year <strong>2012</strong> and are while continuing the same good work aiming for further betterment and upgradation of the clinic in all ways for the benefit of the patients."',
    "about.pillar1_title": "Dr. Mahesh H.V. &amp; Dr. Ramya K.S.",
    "about.pillar1_desc": "Husband and wife specialist duo owning and leading the clinic with specialized postgraduate expertise.",
    "about.pillar2_title": "Blessings of Dr. M.G. Prabhu",
    "about.pillar2_desc": "Carrying forward the honored legacy and trust established by Dr. M.G. Prabhu in Mysore.",
    "about.pillar3_title": "Taken Over in the Year 2012",
    "about.pillar3_desc": "Continuing the same good work while actively steering the clinic towards continuous progress.",
    "about.pillar4_title": "Betterment, Upgradation &amp; Patient Benefit",
    "about.pillar4_desc": "Aiming for further betterment and upgradation of the clinic in all ways for the benefit of the patients.",

    // Doctors Section
    "doctors.tag": "Specialist Clinicians",
    "doctors.title": "Our Doctors",
    "doctors.subtitle": "Husband and wife specialist team heading Prabhu Dental Clinic.",
    "doctors.co_owner": "Clinic Co-Owner",
    "doctors.spec_label": "Specialisation",
    "doctors.mahesh_spec": "Periodontist &amp; Implantologist",
    "doctors.ramya_spec": "Orthodontist and Dentofacial Orthopaedist",
    "doctors.consult_label": "Consultations:",
    "doctors.consult_days": "Monday – Saturday",
    "doctors.btn_consult": "Request Consult",

    // Specialities Section
    "spec.tag": "Clinical Scope",
    "spec.title": "Specialities",
    "spec.subtitle": "Key dental specialities offered at Prabhu Dental Clinic by our doctors and specialist support team.",
    "spec.ortho_title": "Orthodontics",
    "spec.ortho_desc": "Specialised field focused on teeth alignment, dental corrections, and dentofacial orthopaedics.",
    "spec.ortho_lead": "Led by Dr. Ramya K.S. (M.D.S.)",
    "spec.perio_title": "Periodontistry",
    "spec.perio_desc": "Specialised care dedicated to the prevention, diagnosis, and treatment of periodontal (gum) conditions.",
    "spec.perio_lead": "Led by Dr. Mahesh H.V. (M.D.S.)",
    "spec.implant_title": "Implantology",
    "spec.implant_desc": "Specialised dental implant treatments for the restoration and replacement of teeth.",
    "spec.implant_lead": "Led by Dr. Mahesh H.V. (M.D.S.)",
    "spec.surg_title": "Oral Surgery",
    "spec.surg_desc": "Specialist oral surgical care provided by our experienced specialist support team.",
    "spec.prostho_title": "Prosthodontics",
    "spec.prostho_desc": "Specialist prosthetic dental solutions and tooth restoration by experienced specialists.",
    "spec.pedia_title": "Pediatric Dentistry",
    "spec.pedia_desc": "Specialist dental care tailored specifically for children and young growing teeth.",
    "spec.specialist_support": "Specialist Support",

    // Team Section
    "team.tag": "Clinical Team",
    "team.title": "Our Team",
    "team.subtitle": "Associate Dental Surgeon, experienced specialist panel, and medical emergency tie-ups.",
    "team.associate_role": "Associate Dental Surgeon",
    "team.associate_deg": "B.D.S. &bull; Associate Dental Surgeon",
    "team.associate_bio": '"She has graduated in the year 2011 and is associated with us since 2013. She is a friendly and caring professional who regularly attends dental courses to keep abreast with latest developments in the field of dentistry."',
    "team.panel_title": "Specialist Care Panel",
    "team.panel_desc": "The clinic also has its own team of experienced specialists to fulfill the dental treatment needs of our patients:",
    "team.surg_sub": "Specialist surgical dental support.",
    "team.prostho_sub": "Specialist tooth restoration and prosthetics.",
    "team.pedia_sub": "Specialist dental care for children.",
    "team.emergency_title": "Medical Emergency Handling",
    "team.emergency_desc": '"Also associated with the clinic is a physician to handle emergencies, and the clinic is tied up with a nearby nursing home to handle medical emergencies."',

    // Legacy Section
    "legacy.tag": "Historical Lineage",
    "legacy.title": "Clinic Legacy",
    "legacy.subtitle": "A visual timeline of trusted dental care in Saraswathipuram, Mysore.",
    "legacy.step1_badge": "Origin",
    "legacy.step1_desc": "The established clinical foundation and dental practice that laid the bedrock of patient care in Saraswathipuram.",
    "legacy.step2_badge": "Heritage",
    "legacy.step2_title": "Clinic Legacy",
    "legacy.step2_desc": "A respected heritage of trusted care and dental service built over time within the Mysore community.",
    "legacy.step3_badge": "Milestone",
    "legacy.step3_desc": "With the blessings of Dr. M.G. Prabhu, Dr. Mahesh and Dr. Ramya took over the clinic from him in the year 2012.",
    "legacy.step4_badge": "Leadership",
    "legacy.step4_desc": "Husband and wife specialist duo leading Periodontistry, Implantology, Orthodontics, and Dentofacial Orthopaedics.",
    "legacy.step5_badge": "Present & Future",
    "legacy.step5_title": "Continuing and Upgrading the Clinic",
    "legacy.step5_desc": "Continuing the same good work aiming for further betterment and upgradation of the clinic in all ways for the benefit of the patients.",

    // Gallery Section
    "gallery.tag": "Visual Overview",
    "gallery.title": "Gallery",
    "gallery.subtitle": "Featuring the actual clinic exterior photograph and clearly designated placeholders for upcoming client-provided clinic images.",
    "gallery.btn_view": "View Full Size",
    "gallery.item1_tag": "Real Photo",
    "gallery.item1_title": "Clinic Exterior",
    "gallery.item1_desc": "Actual exterior view of Prabhu Dental Clinic premises and signboard at 388, 5th Cross, 14th Main, Saraswathipuram, Mysore.",
    "gallery.item2_tag": "Facility",
    "gallery.item2_title": "Clinic Interior",
    "gallery.item2_desc": "Spotless interior corridor, welcoming consultation pathways, and modern clinic architecture.",
    "gallery.item3_tag": "Front Desk",
    "gallery.item3_title": "Reception",
    "gallery.item3_desc": "Patient greeting desk and comfortable consultation waiting lounge.",
    "gallery.item4_tag": "Clinical Area",
    "gallery.item4_title": "Treatment Room",
    "gallery.item4_desc": "Ergonomic dental operatory suite equipped for orthodontic and periodontal clinical procedures.",
    "gallery.item5_tag": "Clinicians",
    "gallery.item5_title": "Doctors",
    "gallery.item5_desc": "Doctor consultation desk and clinical discussion environment for patient evaluations.",
    "gallery.item6_tag": "Staff",
    "gallery.item6_title": "Team",
    "gallery.item6_desc": "Cohesive dental team and clinical specialists assisting with care.",
    "gallery.item7_tag": "Technology",
    "gallery.item7_title": "Equipment",
    "gallery.item7_desc": "Sterilized instrumentation and modern dental equipment supporting patient treatments.",

    // Appointment Section
    "app.tag": "Consultation Request",
    "app.title": "Appointment",
    "app.subtitle": "Frontend appointment request prototype for Prabhu Dental Clinic, Saraswathipuram, Mysore.",
    "app.plan_title": "Plan Your Clinic Visit",
    "app.plan_desc": "Fill out the request form with your preferred consultation date and dental concern.",
    "app.benefit1": "Consultations with Dr. Mahesh H.V. (MDS) or Dr. Ramya K.S. (MDS)",
    "app.benefit2": "Morning Session (10:00 AM – 01:00 PM)",
    "app.benefit3": "Evening Session (05:00 PM – 09:00 PM)",
    "app.benefit4": "Convenient location near Bus Stop, Saraswathipuram, Mysore",
    "app.timings_heading": "Clinic Timings",
    "app.timings_schedule": "Monday – Saturday:<br>10:00 AM – 01:00 PM<br>05:00 PM – 09:00 PM",
    "app.label_name": "Patient Name",
    "app.ph_name": "Patient full name",
    "app.label_mobile": "Mobile Number",
    "app.ph_mobile": "Mobile number",
    "app.label_date": "Preferred Date",
    "app.label_time": "Preferred Time",
    "app.opt_time_select": "Select preferred session...",
    "app.opt_time_morning": "10:00 AM - 01:00 PM (Morning Session)",
    "app.opt_time_evening": "05:00 PM - 09:00 PM (Evening Session)",
    "app.label_reason": "Reason for Visit",
    "app.opt_reason_select": "Select specialty or reason...",
    "app.opt_general": "General Dental Consultation",
    "app.label_msg": "Message",
    "app.ph_msg": "Write any specific query or note...",
    "app.btn_submit": "REQUEST APPOINTMENT",
    "app.form_note": "This is a frontend prototype. No real appointment booking or payment is processed.",
    "app.success_title": "Thank you. Your appointment request has been received.",
    "app.success_desc": "This is a prototype demonstration. Your requested details have been recorded for frontend presentation.",
    "app.btn_reset": "Submit Another Request",
    "app.modal_title": "Appointment Request Received!",
    "app.modal_subtitle": "Thank you for contacting Prabhu Dental Clinic. Your visit request has been recorded for our presentation prototype.",
    "app.modal_note": "This is a frontend demonstration prototype. No actual booking or payment was processed.",
    "app.modal_btn_close": "Close Window",

    // Location & Contact Section
    "loc.tag": "Find Prabhu Dental Clinic",
    "loc.title": "Location",
    "loc.subtitle": "Centrally situated in Saraswathipuram, Mysore.",
    "loc.label_address": "Address:",
    "loc.full_address": "388, 5th Cross, 14th Main,<br>Near Bus Stop,<br>Saraswathipuram, Saraswatipuram.,<br>Mysore",
    "loc.timings_title": "Clinic Timings",
    "loc.days": "MONDAY – SATURDAY",
    "loc.hours": "10:00 AM – 01:00 PM<br>05:00 PM – 09:00 PM",
    "loc.landmark": "Near Bus Stop, Saraswathipuram, Mysore",
    "loc.btn_directions": "GET DIRECTIONS",

    // Contact Section
    "contact.tag": "Direct Information",
    "contact.title": "Contact",
    "contact.subtitle": "Prabhu Dental Clinic, Saraswathipuram, Mysore.",
    "contact.details_title": "Contact Details",
    "contact.phone_label": "Phone:",
    "contact.email_label": "Email:",
    "contact.to_be_provided": "[To be provided by client]",

    // Footer
    "footer.nav_title": "Navigation",
    "footer.address_timings": "Clinic Address &amp; Timings",
    "footer.rights": "All rights reserved.",
    "footer.draft": "Local Presentation Draft",

    // Mobile Actions
    "mobile.book_visit": "Book Visit",
    "mobile.directions": "Directions"
  },

  kn: {
    // Top Bar
    "topbar.address": "388, 5ನೇ ಕ್ರಾಸ್, 14ನೇ ಮುಖ್ಯರಸ್ತೆ, ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "lang.choose": "ಭಾಷೆ / Language:",

    // Navigation
    "nav.home": "ಮುಖಪುಟ",
    "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
    "nav.doctors": "ನಮ್ಮ ವೈದ್ಯರು",
    "nav.specialities": "ವಿಶೇಷತೆಗಳು",
    "nav.team": "ನಮ್ಮ ತಂಡ",
    "nav.legacy": "ಕ್ಲಿನಿಕ್ ಇತಿಹಾಸ",
    "nav.gallery": "ಗ್ಯಾಲರಿ",
    "nav.appointment": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್",
    "nav.location": "ಸ್ಥಳ & ವಿಳಾಸ",
    "nav.contact": "ಸಂಪರ್ಕ",
    "nav.book_cta": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",

    // Brand
    "brand.clinic_name": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್",
    "brand.clinic_name_caps": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್",

    // Hero Section
    "hero.pill": "ಆರ್ಥೊಡಾಂಟಿಕ್ಸ್ ಮತ್ತು ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ರಿ ಕ್ಲಿನಿಕ್ &bull; ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "hero.title": 'ಪ್ರಭು <span class="brand-red">ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್</span>',
    "hero.specialty": "ಆರ್ಥೊಡಾಂಟಿಕ್ಸ್ ಮತ್ತು ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ರಿ ಕ್ಲಿನಿಕ್",
    "hero.desc": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು. ದಂಪತಿಗಳಾದ ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. M.D.S. (ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಇಂಪ್ಲಾಂಟಾಲಜಿಸ್ಟ್) ಹಾಗೂ ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್. M.D.S. (ಆರ್ಥೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಡೆಂಟೊಫೇಶಿಯಲ್ ಆರ್ಥೋಪೀಡಿಸ್ಟ್) ಅವರ ಮಾಲೀಕತ್ವದಲ್ಲಿದೆ. 2012 ರಿಂದ ದಂತ ಆರೈಕೆಯ ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸಿಕೊಂಡು ಬರುತ್ತಿದೆ.",
    "hero.btn_appointment": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
    "hero.btn_directions": "ದಾರಿ ನಕ್ಷೆ ನೋಡಿ",
    "hero.stat1_label": "ಡಾ. ಎಂ.ಜಿ. ಪ್ರಭು ಅವರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ ಮುಂದುವರಿದ ಸೇವೆ",
    "hero.stat2_label": "ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಆರ್ಥೊಡಾಂಟಿಸ್ಟ್ ತಜ್ಞ ದಂಪತಿಗಳು",
    "hero.stat3_num": "ಪರಿಶೀಲಿತ",
    "hero.stat3_label": "ಸರಸ್ವತಿಪುರಂನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ಕ್ಲಿನಿಕ್ ಪ್ರೊಫೈಲ್",
    "hero.caption_title": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್",
    "hero.caption_sub": "388, 5ನೇ ಕ್ರಾಸ್, 14ನೇ ಮುಖ್ಯರಸ್ತೆ, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "hero.verified_badge": "ಕ್ಲಿನಿಕ್ ಮುಂಭಾಗ",
    "hero.badge_loc_title": "ಸರಸ್ವತಿಪುರಂ",
    "hero.badge_loc_sub": "ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಮೈಸೂರು",
    "hero.badge_timing_title": "ಸೋಮವಾರ – ಶನಿವಾರ",
    "hero.badge_timing_sub": "ಬೆಳಿಗ್ಗೆ 10–1 &bull; ಸಂಜೆ 5–9",
    "hero.badge_sparkle": "ತಜ್ಞ ವೈದ್ಯ ದಂಪತಿ",

    // About Section
    "about.tag": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ ಬಗ್ಗೆ",
    "about.title": "2012 ರಿಂದ ದಂತ ಆರೈಕೆಯ ಪರಂಪರೆಯನ್ನು ಮುಂದುವರಿಸಿಕೊಂಡು ಬರುತ್ತಿದ್ದೇವೆ",
    "about.subtitle": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರಿನಲ್ಲಿ ಸಮರ್ಪಿತ ರೋಗಿ ಆರೈಕೆ, ನೈತಿಕ ಸೇವೆ ಮತ್ತು ನಿರಂತರ ಸುಧಾರಣೆ.",
    "about.flow_title": "ಕ್ಲಿನಿಕ್ ಇತಿಹಾಸ ಮತ್ತು ವಿಕಾಸ ಪಥ",
    "about.quote": '"ಈ ಕ್ಲಿನಿಕ್ ದಂಪತಿಗಳಾದ <strong>ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. M.D.S. (ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಇಂಪ್ಲಾಂಟಾಲಜಿಸ್ಟ್)</strong> ಹಾಗೂ <strong>ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್. M.D.S. (ಆರ್ಥೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಡೆಂಟೊಫೇಶಿಯಲ್ ಆರ್ಥೋಪೀಡಿಸ್ಟ್)</strong> ಅವರ ಮಾಲೀಕತ್ವದಲ್ಲಿದೆ. <strong>ಡಾ. ಎಂ.ಜಿ. ಪ್ರಭು</strong> ಅವರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ, ಡಾ. ಮಹೇಶ್ ಮತ್ತು ಡಾ. ರಮ್ಯಾ ಅವರು <strong>2012</strong> ರಲ್ಲಿ ಅವರಿಂದ ಕ್ಲಿನಿಕ್ ಅನ್ನು ವಹಿಸಿಕೊಂಡಿದ್ದು, ಅದೇ ಉತ್ತಮ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸುತ್ತಾ ರೋಗಿಗಳ ಹಿತದೃಷ್ಟಿಯಿಂದ ಕ್ಲಿನಿಕ್‌ನ ಸರ್ವಾಂಗೀಣ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಸುಧಾರಣೆಗೆ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ."',
    "about.pillar1_title": "ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. &amp; ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್.",
    "about.pillar1_desc": "ವಿಶೇಷ ಸ್ನಾತಕೋತ್ತರ ನೈಪುಣ್ಯತೆಯೊಂದಿಗೆ ಕ್ಲಿನಿಕ್ ಮುನ್ನಡೆಸುತ್ತಿರುವ ತಜ್ಞ ದಂಪತಿಗಳು.",
    "about.pillar2_title": "ಡಾ. ಎಂ.ಜಿ. ಪ್ರಭು ಅವರ ಆಶೀರ್ವಾದ",
    "about.pillar2_desc": "ಮೈಸೂರಿನಲ್ಲಿ ಡಾ. ಎಂ.ಜಿ. ಪ್ರಭು ಅವರು ಸ್ಥಾಪಿಸಿದ ವಿಶ್ವಾಸಾರ್ಹ ಪರಂಪರೆಯನ್ನು ಮುಂದುವರಿಸುವುದು.",
    "about.pillar3_title": "2012 ರಲ್ಲಿ ಅಧಿಕಾರ ಸ್ವೀಕಾರ",
    "about.pillar3_desc": "ಉತ್ತಮ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸುತ್ತಾ ಕ್ಲಿನಿಕ್ ಅನ್ನು ನಿರಂತರ ಪ್ರಗತಿಯತ್ತ ಕೊಂಡೊಯ್ಯುವುದು.",
    "about.pillar4_title": "ಸುಧಾರಣೆ, ಉನ್ನತೀಕರಣ ಮತ್ತು ರೋಗಿಗಳ ಹಿತ",
    "about.pillar4_desc": "ರೋಗಿಗಳ ಗರಿಷ್ಠ ಪ್ರಯೋಜನಕ್ಕಾಗಿ ಕ್ಲಿನಿಕ್‌ನ ಎಲ್ಲಾ ವಿಭಾಗಗಳ ಆಧುನೀಕರಣ ಮತ್ತು ಗುಣಮಟ್ಟ ಹೆಚ್ಚಳ.",

    // Doctors Section
    "doctors.tag": "ತಜ್ಞ ವೈದ್ಯರು",
    "doctors.title": "ನಮ್ಮ ವೈದ್ಯರು",
    "doctors.subtitle": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ ಅನ್ನು ಮುನ್ನಡೆಸುತ್ತಿರುವ ತಜ್ಞ ದಂಪತಿಗಳ ತಂಡ.",
    "doctors.co_owner": "ಕ್ಲಿನಿಕ್ ಸಹ-ಮಾಲೀಕರು",
    "doctors.spec_label": "ವಿಶೇಷತೆ",
    "doctors.mahesh_spec": "ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಇಂಪ್ಲಾಂಟಾಲಜಿಸ್ಟ್",
    "doctors.ramya_spec": "ಆರ್ಥೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಡೆಂಟೊಫೇಶಿಯಲ್ ಆರ್ಥೋಪೀಡಿಸ್ಟ್",
    "doctors.consult_label": "ಸಮಾಲೋಚನೆ:",
    "doctors.consult_days": "ಸೋಮವಾರ – ಶನಿವಾರ",
    "doctors.btn_consult": "ಸಮಾಲೋಚನೆ ಪಡೆಯಿರಿ",

    // Specialities Section
    "spec.tag": "ಚಿಕಿತ್ಸಾ ವಿಭಾಗಗಳು",
    "spec.title": "ವಿಶೇಷ ಚಿಕಿತ್ಸೆಗಳು",
    "spec.subtitle": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್‌ನಲ್ಲಿ ನಮ್ಮ ವೈದ್ಯರು ಮತ್ತು ಪರಿಣಿತ ತಂಡದಿಂದ ಒದಗಿಸಲಾಗುವ ಪ್ರಮುಖ ದಂತ ಚಿಕಿತ್ಸೆಗಳು.",
    "spec.ortho_title": "ಆರ್ಥೊಡಾಂಟಿಕ್ಸ್",
    "spec.ortho_desc": "ಹಲ್ಲುಗಳ ಜೋಡಣೆ, ದಂತ ತಿದ್ದುಪಡಿ ಮತ್ತು ಡೆಂಟೊಫೇಶಿಯಲ್ ಆರ್ಥೋಪೀಡಿಕ್ಸ್ ಚಿಕಿತ್ಸೆ.",
    "spec.ortho_lead": "ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್. (M.D.S.) ಅವರ ನೇತೃತ್ವದಲ್ಲಿ",
    "spec.perio_title": "ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ರಿ",
    "spec.perio_desc": "ವಸಡುಗಳ ಆರೋಗ್ಯ ರಕ್ಷಣೆ, ರೋಗ ನಿರ್ಣಯ ಮತ್ತು ವಸಡು ಕಾಯಿಲೆಗಳ ಚಿಕಿತ್ಸೆ.",
    "spec.perio_lead": "ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. (M.D.S.) ಅವರ ನೇತೃತ್ವದಲ್ಲಿ",
    "spec.implant_title": "ಇಂಪ್ಲಾಂಟಾಲಜಿ",
    "spec.implant_desc": "ಕಳೆದುಹೋದ ಹಲ್ಲುಗಳ ಬದಲಿಗಾಗಿ ಸುಧಾರಿತ ದಂತ ಇಂಪ್ಲಾಂಟ್ ಚಿಕಿತ್ಸೆಗಳು.",
    "spec.implant_lead": "ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. (M.D.S.) ಅವರ ನೇತೃತ್ವದಲ್ಲಿ",
    "spec.surg_title": "ಓರಲ್ ಸರ್ಜರಿ",
    "spec.surg_desc": "ಅನುಭವಿ ತಜ್ಞರ ತಂಡದಿಂದ ಒದಗಿಸಲಾಗುವ ಬಾಯಿ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಆರೈಕೆ.",
    "spec.prostho_title": "ಪ್ರಾಸ್ಥೊಡಾಂಟಿಕ್ಸ್",
    "spec.prostho_desc": "ಕೃತಕ ಹಲ್ಲುಗಳ ಜೋಡಣೆ ಮತ್ತು ದಂತ ಪುನರ್ನಿರ್ಮಾಣ ಚಿಕಿತ್ಸೆಗಳು.",
    "spec.pedia_title": "ಪೀಡಿಯಾಟ್ರಿಕ್ ಡೆಂಟಿಸ್ಟ್ರಿ",
    "spec.pedia_desc": "ಮಕ್ಕಳ ಮತ್ತು ಎಳೆಯ ಹಲ್ಲುಗಳ ವಿಶೇಷ ರಕ್ಷಣೆ ಹಾಗೂ ಚಿಕಿತ್ಸೆ.",
    "spec.specialist_support": "ತಜ್ಞರ ಸಹಯೋಗ",

    // Team Section
    "team.tag": "ಚಿಕಿತ್ಸಾ ತಂಡ",
    "team.title": "ನಮ್ಮ ತಂಡ",
    "team.subtitle": "ಸಹಾಯಕ ದಂತ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕಿ, ಅನುಭವಿ ತಜ್ಞರ ಸಮಿತಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ತುರ್ತು ಸೌಲಭ್ಯ.",
    "team.associate_role": "ಸಹಾಯಕ ದಂತ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕಿ",
    "team.associate_deg": "B.D.S. &bull; ಸಹಾಯಕ ದಂತ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕಿ",
    "team.associate_bio": '"ಅವರು 2011 ರಲ್ಲಿ ಪದವಿ ಪಡೆದಿದ್ದು, 2013 ರಿಂದ ನಮ್ಮೊಂದಿಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದ್ದಾರೆ. ರೋಗಿ ಸ್ನೇಹಿ ವೃತ್ತಿಪರರಾಗಿದ್ದು, ದಂತವೈದ್ಯಕೀಯ ಕ್ಷೇತ್ರದ ಇತ್ತೀಚಿನ ಬೆಳವಣಿಗೆಗಳ ಬಗ್ಗೆ ನಿರಂತರವಾಗಿ ತರಬೇತಿ ಪಡೆಯುತ್ತಿದ್ದಾರೆ."',
    "team.panel_title": "ತಜ್ಞರ ಸಮಿತಿ",
    "team.panel_desc": "ನಮ್ಮ ರೋಗಿಗಳ ಎಲ್ಲಾ ದಂತ ಚಿಕಿತ್ಸಾ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸಲು ಕ್ಲಿನಿಕ್ ತನ್ನದೇ ಆದ ಅನುಭವಿ ತಜ್ಞರ ತಂಡವನ್ನು ಹೊಂದಿದೆ:",
    "team.surg_sub": "ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ದಂತ ಆರೈಕೆ.",
    "team.prostho_sub": "ಹಲ್ಲುಗಳ ಪುನರ್ನಿರ್ಮಾಣ ಮತ್ತು ಪ್ರಾಸ್ಥೆಟಿಕ್ಸ್.",
    "team.pedia_sub": "ಮಕ್ಕಳ ವಿಶೇಷ ದಂತ ರಕ್ಷಣೆ.",
    "team.emergency_title": "ವೈದ್ಯಕೀಯ ತುರ್ತು ಸೇವೆ",
    "team.emergency_desc": '"ತುರ್ತು ಸಂದರ್ಭಗಳನ್ನು ನಿಭಾಯಿಸಲು ಕ್ಲಿನಿಕ್‌ನೊಂದಿಗೆ ವೈದ್ಯರೊಬ್ಬರು ಸಂಪರ್ಕದಲ್ಲಿದ್ದಾರೆ, ಮತ್ತು ವೈದ್ಯಕೀಯ ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳನ್ನು ನಿಭಾಯಿಸಲು ಹತ್ತಿರದ ನರ್ಸಿಂಗ್ ಹೋಮ್‌ನೊಂದಿಗೆ ಒಪ್ಪಂದ ಮಾಡಿಕೊಳ್ಳಲಾಗಿದೆ."',

    // Legacy Section
    "legacy.tag": "ಪರಂಪರೆ ಮತ್ತು ಇತಿಹಾಸ",
    "legacy.title": "ಕ್ಲಿನಿಕ್ ಪರಂಪರೆ",
    "legacy.subtitle": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರಿನಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ದಂತ ಸೇವೆಯ ಸುವರ್ಣ ಹೆಜ್ಜೆಗಳು.",
    "legacy.step1_badge": "ಮೂಲ ಸ್ಥಾಪನೆ",
    "legacy.step1_desc": "ಸರಸ್ವತಿಪುರಂನಲ್ಲಿ ರೋಗಿಗಳ ಸೇವೆಯ ಭದ್ರ ಬುನಾದಿಯನ್ನು ಹಾಕಿದ ಪ್ರತಿಷ್ಠಿತ ದಂತ ಕ್ಲಿನಿಕ್.",
    "legacy.step2_badge": "ಪರಂಪರೆ",
    "legacy.step2_title": "ಕ್ಲಿನಿಕ್ ಪರಂಪರೆ",
    "legacy.step2_desc": "ಮೈಸೂರಿನ ಜನತೆಯ ನಡುವೆ ದಶಕಗಳಿಂದ ಬೆಳೆದುಬಂದ ವಿಶ್ವಾಸಾರ್ಹ ದಂತ ಸೇವಾ ಪರಂಪರೆ.",
    "legacy.step3_badge": "ಮೈಲಿಗಲ್ಲು",
    "legacy.step3_desc": "ಡಾ. ಎಂ.ಜಿ. ಪ್ರಭು ಅವರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ, ಡಾ. ಮಹೇಶ್ ಮತ್ತು ಡಾ. ರಮ್ಯಾ ಅವರು 2012 ರಲ್ಲಿ ಕ್ಲಿನಿಕ್ ಅನ್ನು ವಹಿಸಿಕೊಂಡರು.",
    "legacy.step4_badge": "ನಾಯಕತ್ವ",
    "legacy.step4_desc": "ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ರಿ, ಇಂಪ್ಲಾಂಟಾಲಜಿ, ಆರ್ಥೊಡಾಂಟಿಕ್ಸ್ ಮತ್ತು ಡೆಂಟೊಫೇಶಿಯಲ್ ಆರ್ಥೋಪೀಡಿಕ್ಸ್ ಮುನ್ನಡೆಸುತ್ತಿರುವ ತಜ್ಞ ದಂಪತಿಗಳು.",
    "legacy.step5_badge": "ಪ್ರಸ್ತುತ ಮತ್ತು ಭವಿಷ್ಯ",
    "legacy.step5_title": "ಕ್ಲಿನಿಕ್‌ನ ನಿರಂತರ ಉನ್ನತೀಕರಣ",
    "legacy.step5_desc": "ಅದೇ ಉತ್ತಮ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸುತ್ತಾ ರೋಗಿಗಳ ಅನುಕೂಲಕ್ಕಾಗಿ ಕ್ಲಿನಿಕ್‌ನ ನಿರಂತರ ಸುಧಾರಣೆ ಮತ್ತು ಉನ್ನತೀಕರಣ.",

    // Gallery Section
    "gallery.tag": "ಕ್ಲಿನಿಕ್ ಚಿತ್ರಣ",
    "gallery.title": "ಗ್ಯಾಲರಿ",
    "gallery.subtitle": "ಕ್ಲಿನಿಕ್‌ನ ನೈಜ ಮುಂಭಾಗದ ಛಾಯಾಚಿತ್ರ ಮತ್ತು ಒಳಾಂಗಣ ಸೌಲಭ್ಯಗಳ ನೋಟ.",
    "gallery.btn_view": "ದೊಡ್ಡದಾಗಿ ನೋಡಿ",
    "gallery.item1_tag": "ನೈಜ ಚಿತ್ರ",
    "gallery.item1_title": "ಕ್ಲಿನಿಕ್ ಮುಂಭಾಗ",
    "gallery.item1_desc": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರಿನ 388, 5ನೇ ಕ್ರಾಸ್, 14ನೇ ಮುಖ್ಯರಸ್ತೆಯಲ್ಲಿರುವ ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್‌ನ ನೈಜ ನೋಟ ಮತ್ತು ಬೋರ್ಡ್.",
    "gallery.item2_tag": "ಸೌಲಭ್ಯ",
    "gallery.item2_title": "ಕ್ಲಿನಿಕ್ ಒಳಾಂಗಣ",
    "gallery.item2_desc": "ಸ್ವಚ್ಛ ಮತ್ತು ಆಹ್ಲಾದಕರ ಒಳಾಂಗಣ ಕಾರಿಡಾರ್ ಹಾಗೂ ತಪಾಸಣಾ ಕೊಠಡಿಗಳು.",
    "gallery.item3_tag": "ಸ್ವಾಗತ ವಿಭಾಗ",
    "gallery.item3_title": "ಸ್ವಾಗತ ಕೌಂಟರ್",
    "gallery.item3_desc": "ರೋಗಿಗಳನ್ನು ಸ್ವಾಗತಿಸುವ ಡೆಸ್ಕ್ ಮತ್ತು ಆರಾಮದಾಯಕ ಕಾಯುವ ಕೋಣೆ.",
    "gallery.item4_tag": "ಚಿಕಿತ್ಸಾ ವಿಭಾಗ",
    "gallery.item4_title": "ಚಿಕಿತ್ಸಾ ಕೊಠಡಿ",
    "gallery.item4_desc": "ಆರ್ಥೊಡಾಂಟಿಕ್ ಮತ್ತು ಪಿರಿಯೊಡಾಂಟಲ್ ಚಿಕಿತ್ಸೆಗಳಿಗಾಗಿ ಸಜ್ಜುಗೊಂಡ ಸುಧಾರಿತ ಡೆಂಟಲ್ ಚೇರ್ ಮತ್ತು ಸೌಲಭ್ಯ.",
    "gallery.item5_tag": "ವೈದ್ಯರು",
    "gallery.item5_title": "ವೈದ್ಯರ ಕೊಠಡಿ",
    "gallery.item5_desc": "ರೋಗಿಗಳ ತಪಾಸಣೆ ಮತ್ತು ಚಿಕಿತ್ಸಾ ಚರ್ಚೆಗಾಗಿ ವೈದ್ಯರ ಕೊಠಡಿ.",
    "gallery.item6_tag": "ಸಿಬ್ಬಂದಿ",
    "gallery.item6_title": "ದಂತವೈದ್ಯಕೀಯ ತಂಡ",
    "gallery.item6_desc": "ಉತ್ತಮ ಸೇವೆ ನೀಡುವ ಸಮರ್ಪಿತ ದಂತವೈದ್ಯರು ಮತ್ತು ಸಹಾಯಕ ಸಿಬ್ಬಂದಿ.",
    "gallery.item7_tag": "ತಂತ್ರಜ್ಞಾನ",
    "gallery.item7_title": "ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳು",
    "gallery.item7_desc": "ಕ್ರಿಮಿನಾಶಕ ಉಪಕರಣಗಳು ಮತ್ತು ರೋಗಿಗಳ ಚಿಕಿತ್ಸೆಗೆ ಪೂರಕವಾದ ಸುಧಾರಿತ ಯಂತ್ರೋಪಕರಣಗಳು.",

    // Appointment Section
    "app.tag": "ಸಮಾಲೋಚನೆ ವಿನಂತಿ",
    "app.title": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್",
    "app.subtitle": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು - ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸುವಿಕೆ.",
    "app.plan_title": "ನಿಮ್ಮ ಭೇಟಿಯನ್ನು ಯೋಜಿಸಿ",
    "app.plan_desc": "ನಿಮ್ಮ ಅಪೇಕ್ಷಿತ ದಿನಾಂಕ ಮತ್ತು ದಂತ ಸಮಸ್ಯೆಯನ್ನು ನಮೂದಿಸಿ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ.",
    "app.benefit1": "ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. (MDS) ಅಥವಾ ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್. (MDS) ಅವರೊಂದಿಗೆ ಸಮಾಲೋಚನೆ",
    "app.benefit2": "ಬೆಳಗಿನ ಅವಧಿ (10:00 AM – 01:00 PM)",
    "app.benefit3": "ಸಂಜೆಯ ಅವಧಿ (05:00 PM – 09:00 PM)",
    "app.benefit4": "ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದಾದ ಸ್ಥಳ, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "app.timings_heading": "ಕ್ಲಿನಿಕ್ ಸಮಯ",
    "app.timings_schedule": "ಸೋಮವಾರ – ಶನಿವಾರ:<br>ಬೆಳಿಗ್ಗೆ 10:00 – ಮಧ್ಯಾಹ್ನ 01:00<br>ಸಂಜೆ 05:00 – ರಾತ್ರಿ 09:00",
    "app.label_name": "ರೋಗಿಯ ಹೆಸರು",
    "app.ph_name": "ರೋಗಿಯ ಪೂರ್ಣ ಹೆಸರು",
    "app.label_mobile": "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    "app.ph_mobile": "10 ಅಂಕಿಗಳ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    "app.label_date": "ಅಪೇಕ್ಷಿತ ದಿನಾಂಕ",
    "app.label_time": "ಅಪೇಕ್ಷಿತ ಸಮಯ",
    "app.opt_time_select": "ಅಪೇಕ್ಷಿತ ಅವಧಿಯನ್ನು ಆರಿಸಿ...",
    "app.opt_time_morning": "ಬೆಳಿಗ್ಗೆ 10:00 – ಮಧ್ಯಾಹ್ನ 01:00 (ಬೆಳಗಿನ ಅವಧಿ)",
    "app.opt_time_evening": "ಸಂಜೆ 05:00 – ರಾತ್ರಿ 09:00 (ಸಂಜೆಯ ಅವಧಿ)",
    "app.label_reason": "ಭೇಟಿಯ ಉದ್ದೇಶ / ಚಿಕಿತ್ಸೆ",
    "app.opt_reason_select": "ವಿಶೇಷತೆ ಅಥವಾ ಸಮಸ್ಯೆಯನ್ನು ಆರಿಸಿ...",
    "app.opt_general": "ಸಾಮಾನ್ಯ ದಂತ ಸಮಾಲೋಚನೆ",
    "app.label_msg": "ಸಂದೇಶ",
    "app.ph_msg": "ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಮಾಹಿತಿ ಅಥವಾ ಟಿಪ್ಪಣಿ ಬರೆಯಿರಿ...",
    "app.btn_submit": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕೋರಿಕೆ ಸಲ್ಲಿಸಿ",
    "app.form_note": "ಇದು ಮುಂಗಡ ಪ್ರದರ್ಶನ ಮಾದರಿಯಾಗಿದೆ. ಯಾವುದೇ ಪಾವತಿ ಅಥವಾ ನೈಜ ಬುಕಿಂಗ್ ಪ್ರಕ್ರಿಯೆಯಲ್ಲ.",
    "app.success_title": "ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕೋರಿಕೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ.",
    "app.success_desc": "ಇದು ಪ್ರದರ್ಶನ ಮಾದರಿಯಾಗಿದೆ. ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ದಾಖಲಿಸಲಾಗಿದೆ.",
    "app.btn_reset": "ಮತ್ತೊಂದು ಕೋರಿಕೆ ಸಲ್ಲಿಸಿ",
    "app.modal_title": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕೋರಿಕೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ!",
    "app.modal_subtitle": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಭೇಟಿಯ ಕೋರಿಕೆಯನ್ನು ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ದಾಖಲಿಸಲಾಗಿದೆ.",
    "app.modal_note": "ಇದು ಮುಂಗಡ ಪ್ರದರ್ಶನ ಮಾದರಿಯಾಗಿದೆ. ಯಾವುದೇ ನೈಜ ಬುಕಿಂಗ್ ಅಥವಾ ಪಾವತಿ ಪ್ರಕ್ರಿಯೆಯಲ್ಲ.",
    "app.modal_btn_close": "ಕಿಟಕಿ ಮುಚ್ಚಿ",

    // Location & Contact Section
    "loc.tag": "ಕ್ಲಿನಿಕ್ ವಿಳಾಸ",
    "loc.title": "ಸ್ಥಳ &amp; ವಿಳಾಸ",
    "loc.subtitle": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರಿನ ಕೇಂದ್ರ ಸ್ಥಳದಲ್ಲಿದೆ.",
    "loc.label_address": "ವಿಳಾಸ:",
    "loc.full_address": "388, 5ನೇ ಕ್ರಾಸ್, 14ನೇ ಮುಖ್ಯರಸ್ತೆ,<br>ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ,<br>ಸರಸ್ವತಿಪುರಂ, ಸರಸ್ವತೀಪುರಂ.,<br>ಮೈಸೂರು",
    "loc.timings_title": "ಕ್ಲಿನಿಕ್ ಸಮಯ",
    "loc.days": "ಸೋಮವಾರ – ಶನಿವಾರ",
    "loc.hours": "ಬೆಳಿಗ್ಗೆ 10:00 – ಮಧ್ಯಾಹ್ನ 01:00<br>ಸಂಜೆ 05:00 – ರಾತ್ರಿ 09:00",
    "loc.landmark": "ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "loc.btn_directions": "ದಾರಿ ನಕ್ಷೆ ನೋಡಿ",

    // Contact Section
    "contact.tag": "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    "contact.title": "ಸಂಪರ್ಕ",
    "contact.subtitle": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು.",
    "contact.details_title": "ಸಂಪರ್ಕ ವಿವರಗಳು",
    "contact.phone_label": "ದೂರವಾಣಿ:",
    "contact.email_label": "ಇಮೇಲ್:",
    "contact.to_be_provided": "[ಗ್ರಾಹಕರಿಂದ ಒದಗಿಸಬೇಕಾಗಿದೆ]",

    // Footer
    "footer.nav_title": "ಪುಟಗಳು",
    "footer.address_timings": "ಕ್ಲಿನಿಕ್ ವಿಳಾಸ ಮತ್ತು ಸಮಯ",
    "footer.rights": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    "footer.draft": "ಸ್ಥಳೀಯ ಪ್ರಸ್ತುತಿ ಮಾದರಿ",

    // Mobile Actions
    "mobile.book_visit": "ಬುಕ್ ಮಾಡಿ",
    "mobile.directions": "ದಾರಿ ನಕ್ಷೆ"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initLanguageSwitcher();
  initStickyNavbar();
  initMobileMenu();
  initLiveClinicStatus();
  initAppointmentForm();
  initLightbox();
  initDateConstraints();
  initScrollReveal();
  initMouseParallax();
  initTimelineProgress();
});

/**
 * 1. Bilingual Language Switcher (English <-> Kannada)
 */
function initLanguageSwitcher() {
  const savedLang = localStorage.getItem('prabhu_clinic_lang') || 'en';
  setLanguage(savedLang);

  document.querySelectorAll('.js-lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('prabhu_clinic_lang', lang);
  document.documentElement.lang = lang;

  if (lang === 'kn') {
    document.body.classList.add('lang-kn');
  } else {
    document.body.classList.remove('lang-kn');
  }

  // Update active state of language buttons (both desktop and mobile)
  document.querySelectorAll('.js-lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  // Translate all [data-i18n] text or HTML content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Translate placeholders for inputs
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Refresh live clinic status text with active language
  if (typeof window.refreshClinicStatus === 'function') {
    window.refreshClinicStatus();
  }
}

/**
 * 2. Live Clinic Open / Closed Status Calculation
 * Monday - Saturday:
 * - Shift 1: 10:00 AM to 01:00 PM (10:00 - 13:00)
 * - Shift 2: 05:00 PM to 09:00 PM (17:00 - 21:00)
 * Sunday: Closed
 */
function initLiveClinicStatus() {
  const statusBadges = document.querySelectorAll('.js-live-status');
  if (!statusBadges.length) return;

  function updateStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;

    const mMorningStart = 10 * 60; // 10:00 AM -> 600
    const mMorningEnd = 13 * 60;   // 01:00 PM -> 780
    const mEveningStart = 17 * 60; // 05:00 PM -> 1020
    const mEveningEnd = 21 * 60;   // 09:00 PM -> 1260

    let statusText = '';
    let badgeClass = 'closed';

    if (day === 0) {
      // Sunday
      badgeClass = 'closed';
      statusText = currentLang === 'kn'
        ? 'ಇಂದು ಮುಚ್ಚಿದೆ (ಭಾನುವಾರ) • ಸೋಮವಾರ ಬೆಳಿಗ್ಗೆ 10:00 ಕ್ಕೆ ತೆರೆಯುತ್ತದೆ'
        : 'Closed Today (Sunday) • Opens Mon 10:00 AM';
    } else {
      // Monday to Saturday
      if (currentTimeInMinutes >= mMorningStart && currentTimeInMinutes < mMorningEnd) {
        badgeClass = 'open';
        statusText = currentLang === 'kn'
          ? 'ತೆರೆದಿದೆ • ಬೆಳಗಿನ ಅವಧಿ ಮಧ್ಯಾಹ್ನ 1:00 ರವರೆಗೆ'
          : 'Open Now • Morning Session until 1:00 PM';
      } else if (currentTimeInMinutes >= mEveningStart && currentTimeInMinutes < mEveningEnd) {
        badgeClass = 'open';
        statusText = currentLang === 'kn'
          ? 'ತೆರೆದಿದೆ • ಸಂಜೆಯ ಅವಧಿ ರಾತ್ರಿ 9:00 ರವರೆಗೆ'
          : 'Open Now • Evening Session until 9:00 PM';
      } else if (currentTimeInMinutes < mMorningStart) {
        badgeClass = 'closed';
        statusText = currentLang === 'kn'
          ? 'ಈಗ ಮುಚ್ಚಿದೆ • ಇಂದು ಬೆಳಿಗ್ಗೆ 10:00 ಕ್ಕೆ ತೆರೆಯುತ್ತದೆ'
          : 'Closed Now • Opens Today at 10:00 AM';
      } else if (currentTimeInMinutes >= mMorningEnd && currentTimeInMinutes < mEveningStart) {
        badgeClass = 'closed';
        statusText = currentLang === 'kn'
          ? 'ಮಧ್ಯಾಹ್ನದ ವಿರಾಮ • ಇಂದು ಸಂಜೆ 5:00 ಕ್ಕೆ ಪುನಃ ತೆರೆಯುತ್ತದೆ'
          : 'Afternoon Break • Reopens Today at 5:00 PM';
      } else {
        badgeClass = 'closed';
        if (day === 6) {
          statusText = currentLang === 'kn'
            ? 'ಇಂದಿನ ಸೇವೆ ಮುಕ್ತಾಯ • ಸೋಮವಾರ ಬೆಳಿಗ್ಗೆ 10:00 ಕ್ಕೆ ತೆರೆಯುತ್ತದೆ'
            : 'Closed for the Day • Opens Monday at 10:00 AM';
        } else {
          statusText = currentLang === 'kn'
            ? 'ಇಂದಿನ ಸೇವೆ ಮುಕ್ತಾಯ • ನಾಳೆ ಬೆಳಿಗ್ಗೆ 10:00 ಕ್ಕೆ ತೆರೆಯುತ್ತದೆ'
            : 'Closed for the Day • Opens Tomorrow at 10:00 AM';
        }
      }
    }

    statusBadges.forEach(badge => {
      badge.className = `status-badge ${badgeClass} js-live-status`;
      badge.innerHTML = `<span class="status-dot"></span><span>${statusText}</span>`;
    });
  }

  window.refreshClinicStatus = updateStatus;
  updateStatus();
  setInterval(updateStatus, 60000);
}

/**
 * 3. Sticky Navbar & Active Section Highlighting
 * Oval Pill navigation items with instant highlight on click and dynamic scrollspy
 */
function initStickyNavbar() {
  const header = document.querySelector('.main-header');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link[href^="#"]');
  const sections = document.querySelectorAll('section[id]');
  let isManualScrolling = false;
  let scrollTimeout = null;

  // Immediate highlight when user clicks an oval nav link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetHref = link.getAttribute('href');
      if (!targetHref || targetHref === '#') return;

      const targetSection = document.querySelector(targetHref);
      if (targetSection) {
        e.preventDefault();

        // Highlight clicked oval immediately
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        isManualScrolling = true;
        clearTimeout(scrollTimeout);

        const navHeight = header ? header.offsetHeight : 80;
        const targetTop = targetSection.getBoundingClientRect().top + window.scrollY - navHeight + 5;

        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });

        // Resume scrollspy after smooth scroll ends
        scrollTimeout = setTimeout(() => {
          isManualScrolling = false;
        }, 800);
      }
    });
  });

  // Dynamic ScrollSpy
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (isManualScrolling) return;

    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        const matches = link.getAttribute('href') === `#${currentId}`;
        link.classList.toggle('active', matches);
      });
    }
  }, { passive: true });
}

/**
 * 4. Mobile Navigation Drawer
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link, .nav-menu .btn');

  if (!hamburger || !navMenu) return;

  function toggleMenu() {
    const isOpen = navMenu.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-open') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
      closeMenu();
    }
  });
}

/**
 * 5. Date Constraints for Appointment Form
 */
function initDateConstraints() {
  const dateInput = document.getElementById('preferredDate');
  if (!dateInput) return;

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');

  // Prevent past dates
  dateInput.min = `${yyyy}-${mm}-${dd}`;
}

/**
 * 6. Appointment Request Form Demonstration
 */
function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  const successBox = document.getElementById('appointmentSuccess');
  const resetBtn = document.getElementById('appointmentReset');

  if (!form || !successBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.patientName.value.trim();
    const phone = form.mobileNumber.value.trim();
    const date = form.preferredDate.value;
    const timeSlot = form.preferredTime.value;
    const reason = form.reasonForVisit.value;

    if (!name || !phone || !date || !timeSlot || !reason) {
      const alertMsg = currentLang === 'kn'
        ? 'ದಯವಿಟ್ಟು * ಗುರುತಿಸಲಾದ ಎಲ್ಲಾ ಅಗತ್ಯ ಮಾಹಿತಿಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ'
        : 'Please fill in all required fields marked with *';
      alert(alertMsg);
      return;
    }

    const phoneClean = phone.replace(/\D/g, '');
    if (phoneClean.length < 10) {
      const phoneMsg = currentLang === 'kn'
        ? 'ದಯವಿಟ್ಟು 10 ಅಂಕಿಗಳ ಸರಿಯಾದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.'
        : 'Please enter a valid 10-digit mobile number.';
      alert(phoneMsg);
      form.mobileNumber.focus();
      return;
    }

    // Sunday Check
    const selectedDateObj = new Date(date);
    if (selectedDateObj.getDay() === 0) {
      const sunMsg = currentLang === 'kn'
        ? 'ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ ಭಾನುವಾರಗಳಂದು ಮುಚ್ಚಿರುತ್ತದೆ. ದಯವಿಟ್ಟು ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗಿನ ದಿನಾಂಕವನ್ನು ಆರಿಸಿ.'
        : 'Prabhu Dental Clinic is closed on Sundays. Please select a date from Monday to Saturday.';
      alert(sunMsg);
      form.preferredDate.focus();
      return;
    }

    // Display confirmed state in inline box
    form.style.display = 'none';
    successBox.classList.add('is-visible');

    const summaryTarget = document.getElementById('confirmationSummary');
    const modalSummaryTarget = document.getElementById('modalSummaryContent');
    const modal = document.getElementById('appointmentSuccessModal');
    const btnModalClose = document.getElementById('btnModalClose');

    const summaryHtml = currentLang === 'kn'
      ? `<strong>ರೋಗಿಯ ಹೆಸರು:</strong> ${escapeHtml(name)}<br>
         <strong>ಮೊಬೈಲ್ ಸಂಖ್ಯೆ:</strong> ${escapeHtml(phone)}<br>
         <strong>ದಿನಾಂಕ & ಸಮಯ:</strong> ${escapeHtml(date)} (${escapeHtml(timeSlot)})<br>
         <strong>ವಿಶೇಷತೆ/ಉದ್ದೇಶ:</strong> ${escapeHtml(reason)}`
      : `<strong>Patient:</strong> ${escapeHtml(name)}<br>
         <strong>Mobile:</strong> ${escapeHtml(phone)}<br>
         <strong>Requested Date & Slot:</strong> ${escapeHtml(date)} (${escapeHtml(timeSlot)})<br>
         <strong>Specialty/Reason:</strong> ${escapeHtml(reason)}`;

    if (summaryTarget) {
      summaryTarget.innerHTML = summaryHtml;
    }

    if (modalSummaryTarget) {
      modalSummaryTarget.innerHTML = summaryHtml;
    }

    // Trigger celebratory confirmation modal
    if (modal) {
      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';

      const closeModal = () => {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      };

      btnModalClose?.addEventListener('click', closeModal, { once: true });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
    }

    successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  resetBtn?.addEventListener('click', () => {
    form.reset();
    form.style.display = 'block';
    successBox.classList.remove('is-visible');
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/**
 * 7. Lightbox Modal for Clinic Exterior Image
 */
function initLightbox() {
  const modal = document.getElementById('galleryModal');
  const trigger = document.querySelectorAll('.js-open-lightbox');
  const closeBtn = document.querySelector('.js-close-lightbox');
  const modalImg = modal?.querySelector('.lightbox-image-wrap img');
  const modalTitle = modal?.querySelector('.lightbox-modal-caption strong');
  const modalDesc = modal?.querySelector('.lightbox-modal-caption p');

  if (!modal) return;

  trigger.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const card = item.closest('.gallery-card');
      const imgSrc = item.getAttribute('data-img') || card?.querySelector('img')?.getAttribute('src');
      const title = item.getAttribute('data-title') || card?.querySelector('.gallery-item-title')?.textContent;
      const desc = item.getAttribute('data-desc') || card?.querySelector('.gallery-item-desc')?.textContent;

      if (modalImg && imgSrc) modalImg.src = imgSrc;
      if (modalTitle && title) modalTitle.textContent = title;
      if (modalDesc && desc) modalDesc.textContent = desc;

      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * 8. Professional Preloader Dismissal
 */
function initPreloader() {
  const preloader = document.getElementById('site-preloader');
  if (!preloader) return;

  function dismiss() {
    preloader.classList.add('is-loaded');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }

  // Dismiss swiftly on page load or fallback after 850ms
  if (document.readyState === 'complete') {
    setTimeout(dismiss, 350);
  } else {
    window.addEventListener('load', () => setTimeout(dismiss, 350));
    setTimeout(dismiss, 1200);
  }
}

/**
 * 9. Scroll Reveal Engine using IntersectionObserver
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * 10. Desktop & Tablet Dynamic Cursor Physics Engine for Floating Dental Characters & Badges
 * Features:
 * - Generous, clearly visible cursor parallax (up to 45px - 75px translation)
 * - Local proximity repulsion & buoyant curiosity: teeth rotate, gently drift away, scale, and glow when cursor nears
 * - Smooth lerp spring physics without jitter
 * - Interactive click & tap burst creating dancing sparkle stars
 * - 3D depth tilt & perspective
 */
function initMouseParallax() {
  // A. Hero Visual Stage 3D Card Tilt
  const stage = document.querySelector('.hero-visual-stage');
  const card = document.querySelector('.hero-image-card');
  const decorBadge = document.querySelector('.hero-decor-badge-sparkle');

  if (stage && card && window.innerWidth >= 992) {
    let stageTicking = false;
    stage.addEventListener('mousemove', (e) => {
      if (stageTicking) return;
      stageTicking = true;
      requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(y / rect.height) * 10;
        const rotateY = (x / rect.width) * 10;

        card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
        if (decorBadge) {
          decorBadge.style.transform = `translate(${(x * 0.06).toFixed(1)}px, ${(y * 0.06).toFixed(1)}px)`;
        }
        stageTicking = false;
      });
    });

    stage.addEventListener('mouseleave', () => {
      card.style.transform = '';
      if (decorBadge) decorBadge.style.transform = '';
    });
  }

  // B. Global Interactive Dental Floating Elements (Mouse Cursor Response & Interactive Physics)
  const floatDoms = Array.from(document.querySelectorAll('.js-dental-float'));
  if (!floatDoms.length) return;

  // Initialize per-item tracking state
  const items = floatDoms.map(el => ({
    el: el,
    depth: parseFloat(el.getAttribute('data-depth') || 0.12),
    scrollSpeed: parseFloat(el.getAttribute('data-scroll') || 0.05),
    x: 0,
    y: 0,
    rx: 0,
    ry: 0,
    rz: 0,
    scale: 1,
    targetX: 0,
    targetY: 0,
    targetRx: 0,
    targetRy: 0,
    targetRz: 0,
    targetScale: 1
  }));

  let cursorScreenX = window.innerWidth / 2;
  let cursorScreenY = window.innerHeight / 2;
  let normX = 0;
  let normY = 0;
  let scrollY = window.pageYOffset || document.documentElement.scrollTop;
  let isTicking = false;

  // Helper to trigger physics loop
  function requestUpdate() {
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(updateFloatPositions);
    }
  }

  // Track mouse coordinates across entire viewport
  function onPointerMove(e) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    cursorScreenX = clientX;
    cursorScreenY = clientY;

    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    normX = (clientX - halfW) / (halfW || 1); // -1 to 1
    normY = (clientY - halfH) / (halfH || 1); // -1 to 1

    requestUpdate();
  }

  window.addEventListener('mousemove', onPointerMove, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });

  window.addEventListener('scroll', () => {
    scrollY = window.pageYOffset || document.documentElement.scrollTop;
    requestUpdate();
  }, { passive: true });

  // Interactive Click & Tap Reaction (Jelly Bounce & Sparkle Stars Burst)
  floatDoms.forEach(el => {
    el.addEventListener('click', (e) => {
      const badge = el.querySelector('.dental-floating-character, .dental-floating-badge, .dental-mascot-ambient');
      if (badge) {
        badge.classList.remove('tooth-jelly-active');
        void badge.offsetWidth; // trigger reflow
        badge.classList.add('tooth-jelly-active');
      }
      spawnSparkleBurst(e.clientX, e.clientY);
    });
  });

  // Main animation frame physics step
  function updateFloatPositions() {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const radius = 260; // Cursor interaction proximity radius in pixels

    let needsNextFrame = false;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const el = item.el;
      const rect = el.getBoundingClientRect();

      // Viewport culling for 60fps silky smooth rendering
      if (rect.bottom < -160 || rect.top > winH + 160) continue;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // 1. Subtle Ambient Cursor Parallax (Micro-displacement: 3px to 6px)
      const baseX = normX * (item.depth * 40);
      const baseY = normY * (item.depth * 35);

      // 2. Cursor Proximity Repulsion & Soft Curiosity Physics
      const dx = cursorScreenX - centerX;
      const dy = cursorScreenY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let repelX = 0;
      let repelY = 0;
      let tiltX = 0;
      let tiltY = 0;
      let tiltZ = 0;
      let scaleBoost = 0;

      if (dist < radius) {
        const force = Math.pow(1 - dist / radius, 1.4);
        const safeDist = dist || 1;

        // Gentle buoyant micro-drift away from cursor
        repelX = -(dx / safeDist) * force * 6;
        repelY = -(dy / safeDist) * force * 6;

        // Micro 3D Tilt facing towards cursor
        tiltX = (dy / radius) * 3 * force;
        tiltY = -(dx / radius) * 3 * force;
        tiltZ = (dx / radius) * 2 * force;
        scaleBoost = force * 0.03;

        if (!el.classList.contains('is-cursor-near')) {
          el.classList.add('is-cursor-near');
        }
      } else {
        if (el.classList.contains('is-cursor-near')) {
          el.classList.remove('is-cursor-near');
        }
      }

      // 3. Subtle Scroll-linked Parallax
      const scrollDrift = (centerY - winH / 2) * item.scrollSpeed * -0.015;

      // 4. Set Targets
      item.targetX = baseX + repelX;
      item.targetY = baseY + repelY + scrollDrift;
      item.targetRx = tiltX + (normY * -3 * item.depth);
      item.targetRy = tiltY + (normX * 3 * item.depth);
      item.targetRz = tiltZ + (normX * -2 * item.depth);
      item.targetScale = 1 + scaleBoost;

      // 5. Smooth Spring Lerp Interpolation
      const lerp = 0.10;
      item.x += (item.targetX - item.x) * lerp;
      item.y += (item.targetY - item.y) * lerp;
      item.rx += (item.targetRx - item.rx) * lerp;
      item.ry += (item.targetRy - item.ry) * lerp;
      item.rz += (item.targetRz - item.rz) * lerp;
      item.scale += (item.targetScale - item.scale) * lerp;

      // Apply 3D Transform
      el.style.transform = `translate3d(${item.x.toFixed(2)}px, ${item.y.toFixed(2)}px, 0) perspective(800px) rotateX(${item.rx.toFixed(2)}deg) rotateY(${item.ry.toFixed(2)}deg) rotateZ(${item.rz.toFixed(2)}deg) scale(${item.scale.toFixed(3)})`;

      // Check if motion is still active
      const diff = Math.abs(item.targetX - item.x) + Math.abs(item.targetY - item.y) + Math.abs(item.targetScale - item.scale);
      if (diff > 0.05) {
        needsNextFrame = true;
      }
    }

    if (needsNextFrame) {
      requestAnimationFrame(updateFloatPositions);
    } else {
      isTicking = false;
    }
  }

  // Cheerful Sparkle Particle Spawner
  function spawnSparkleBurst(x, y) {
    if (!x || !y) return;
    const colors = ['#C82333', '#F87171', '#FF6B6B', '#FFD166', '#FFFFFF'];
    const chars = ['✦', '★', '✧', '•'];
    for (let i = 0; i < 7; i++) {
      const p = document.createElement('span');
      p.className = 'dental-cursor-sparkle';
      p.textContent = chars[Math.floor(Math.random() * chars.length)];
      p.style.color = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      const angle = (Math.PI * 2 / 7) * i + (Math.random() - 0.5) * 0.4;
      const dist = 38 + Math.random() * 45;
      p.style.setProperty('--dx', (Math.cos(angle) * dist).toFixed(1) + 'px');
      p.style.setProperty('--dy', (Math.sin(angle) * dist).toFixed(1) + 'px');
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 900);
    }
  }

  // Trigger initial frame calculation
  requestUpdate();
}

/**
 * 11. Dynamic Timeline Scroll Progress Fill
 */
function initTimelineProgress() {
  const timeline = document.querySelector('.legacy-timeline');
  const fill = document.getElementById('timelineProgressFill');
  if (!timeline || !fill) return;

  function updateFill() {
    const rect = timeline.getBoundingClientRect();
    const windowH = window.innerHeight;
    if (rect.top < windowH && rect.bottom > 0) {
      const visible = Math.max(0, Math.min(rect.height, windowH * 0.7 - rect.top));
      const percentage = Math.min(100, Math.max(0, (visible / rect.height) * 100));
      fill.style.height = `${percentage}%`;
    }
  }

  window.addEventListener('scroll', updateFill, { passive: true });
  updateFill();
}

