export type Locale = "en" | "am";

export const dictionaries = {
  en: {
    brand: "Mezgeb AI",
    brandShort: "Mezgeb",
    nav: {
      platform: "Platform",
      howItWorks: "How it works",
      useCases: "Use cases",
      faq: "FAQ",
      cta: "Discuss a pilot",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Document intelligence · Built for Ethiopian workflows",
      headline1: "Your documents hold the information.",
      headline2: "We make it usable.",
      body: "Mezgeb AI helps organizations turn paper archives and scanned documents into structured, searchable information — including documents written in Amharic, English, and both.",
      primaryCta: "Discuss a pilot",
      secondaryCta: "Explore how it works",
      caption:
        "From document capture to structured data, with validation where it matters.",
    },
    workbench: {
      disclaimer:
        "Illustrative samples · fictional institutional data · not production metrics",
      flow: "source → extract → validate → review",
      tabs: [
        "01 · Commercial & KYC",
        "02 · Waybill & Invoice",
        "03 · Clinical & Insurance",
      ],
      sourceDocument: "source document",
      extractedRecord: "extracted record · schema v2.4",
      checks: "checks",
      review: "review",
      fieldKey: "Field key",
      extractedNormalized: "Extracted & normalized",
      status: "Status",
      exportPreview: "export preview",
      officialStamp: "OFFICIAL STAMP",
      authorizedSignature: "Authorized signature",
      statuses: {
        verified: "Verified",
        normalized: "Normalized",
        rulePassed: "Rule passed",
        mathVerified: "Math verified",
        needsReview: "Needs review",
      },
      notes: {
        calendarNormalized: "Ethiopian calendar normalized",
        formatCheck: "Format check",
        sumMatches: "Sum matches line items",
        stampOverlap: "Stamp overlap detected",
        stampNearTotal: "Stamp near total line",
        multiRow: "Multi-row inventory table",
        tinCheck: "10-digit format check",
      },
    },
    problem: {
      eyebrow: "The information is already there",
      headline:
        "The problem isn't a lack of information. It's getting it out of the documents.",
      body1:
        "Important records often remain trapped in paper files, scanned PDFs, and inconsistent forms. Finding one field can mean opening a document, reading it manually, and entering the same information into another system.",
      body2:
        "At scale, that creates repetitive work, slower retrieval, and more opportunities for data-entry mistakes.",
      items: [
        {
          num: "01",
          title: "Information stays buried",
          copy: "Records are difficult to search, compare, and retrieve when their contents remain locked inside documents.",
        },
        {
          num: "02",
          title: "Manual work accumulates",
          copy: "Teams repeatedly read, copy, verify, and re-enter information that already exists on paper.",
        },
        {
          num: "03",
          title: "Every document is different",
          copy: "Layouts, scan quality, languages, and field formats make consistent extraction difficult.",
        },
      ],
    },
    platform: {
      eyebrow: "From documents to decisions",
      headline: "One workflow. From raw pages to usable records.",
      body: "Mezgeb AI is designed to help institutions move beyond storing scanned documents toward extracting, checking, and organizing the information inside them.",
      note: "This is the intended workflow and product approach — stages may be scoped differently depending on document types and institutional requirements.",
      stages: [
        {
          id: "01",
          stage: "Prepare",
          title: "Make documents ready to process",
          copy: "Prepare scanned pages and PDFs for downstream analysis, with attention to page quality, orientation, and document structure.",
        },
        {
          id: "02",
          stage: "Extract",
          title: "Turn pages into structured fields",
          copy: "Identify relevant information across forms and records, including mixed Amharic and English content, then organize it into a consistent structure.",
        },
        {
          id: "03",
          stage: "Validate",
          title: "Check before you rely on it",
          copy: "Apply field rules and consistency checks to help identify missing, inconsistent, or uncertain information that may need human review.",
        },
        {
          id: "04",
          stage: "Deliver",
          title: "Put extracted data to work",
          copy: "Organize approved results into structured records that can support search, reporting, exports, and downstream systems.",
        },
      ],
    },
    language: {
      eyebrow: "Designed around local document realities",
      headline: "Documents don't always fit a standard template.",
      body: "Ethiopian institutional records can combine Amharic, English, numbers, tables, stamps, and different page layouts. A useful document-intelligence workflow needs to account for that complexity instead of assuming every document follows the same format.",
      points: [
        "Amharic and English content",
        "Forms, tables, and multi-page records",
        "Different layouts and scan conditions",
        "Structured extraction with validation and human review where needed",
      ],
      close: "Start with the documents your team actually handles.",
      cta: "Discuss your document workflow",
      sampleLabel: "Mixed-language document · Illustrative",
    },
    useCases: {
      eyebrow: "Where document intelligence can help",
      headline: "Built for the work hidden inside your records.",
      body: "Different institutions handle different documents. The common challenge is turning those documents into information that teams can find, verify, and use.",
      note: "Use cases are illustrative. The appropriate workflow depends on document types, data quality, and institutional requirements.",
      items: [
        {
          category: "Financial services",
          title: "Make records easier to process",
          copy: "Support workflows involving applications, supporting documents, customer records, and other information-heavy files.",
        },
        {
          category: "Government and public services",
          title: "Bring structure to institutional archives",
          copy: "Help organize forms, administrative records, case files, and documents that need consistent retrieval and processing.",
        },
        {
          category: "Education",
          title: "Organize academic records",
          copy: "Explore structured extraction from student records, enrollment documents, transcripts, and institutional forms.",
        },
        {
          category: "Operations and administration",
          title: "Reduce repetitive document work",
          copy: "Turn recurring forms and internal records into structured information that can feed existing operational workflows.",
        },
      ],
    },
    trust: {
      eyebrow: "Useful data needs more than extraction",
      headline: "Extracting information is only half the job.",
      body1:
        "A field can be extracted and still be wrong. A document can be readable and still contain missing or inconsistent information.",
      body2:
        "Mezgeb AI's approach emphasizes structured outputs, validation rules, and review of cases that require attention — so teams can build a workflow around the information, not just the OCR result.",
      illustrative: "Illustrative interface",
      fieldReview: "Field review",
      flagged: "Flagged",
      needsReview: "Needs review",
      reason: "Stamp overlap detected on registered capital field.",
      ruleCheck: "Rule check",
      rules: [
        "TIN format check passed",
        "Line-item sum matches total",
        "Stamp occlusion on capital field",
      ],
      principles: [
        {
          title: "Structure",
          copy: "Organize extracted information into consistent fields and records.",
        },
        {
          title: "Validation",
          copy: "Check required fields and apply rules appropriate to the workflow.",
        },
        {
          title: "Human review",
          copy: "Flag information that needs a person to inspect or confirm it.",
        },
      ],
    },
    pilot: {
      eyebrow: "Start with a real workflow",
      headline: "Bring us a document problem worth solving.",
      body1:
        "You don't need to redesign your entire records process to begin. Start with one document type, one recurring task, and a clear definition of what a useful result looks like.",
      body2:
        "Mezgeb AI can work with your team to understand the documents, define the fields that matter, and scope a focused pilot.",
      supporting: "Tell us what your team processes today. We'll start there.",
      formTitle: "Discuss a pilot",
      formNote:
        "This form is for demonstration. Submissions are validated in the browser only and are not delivered to Mezgeb AI.",
      name: "Name",
      organization: "Organization",
      email: "Work email",
      message: "Document workflow",
      messagePlaceholder:
        "What documents do you process, and what would a useful result look like?",
      submit: "Discuss a pilot",
      validated: "Form validated locally.",
      validatedNote:
        "No message was sent. When a contact channel is available, you'll be able to reach the team from this page.",
      reset: "Reset form",
      steps: [
        {
          num: "01",
          title: "Understand",
          copy: "Identify the documents, current workflow, and main bottleneck.",
        },
        {
          num: "02",
          title: "Define",
          copy: "Agree on the information to extract, validation requirements, and how results will be evaluated.",
        },
        {
          num: "03",
          title: "Evaluate",
          copy: "Test a focused workflow against representative documents and review the results together.",
        },
      ],
      errors: {
        name: "Please enter your name.",
        organization: "Please enter your organization.",
        email: "Please enter a valid email.",
        message: "Please briefly describe your document workflow.",
      },
    },
    faq: {
      eyebrow: "FAQ",
      headline: "Questions worth answering early.",
      subheadline:
        "Clear expectations matter more than inflated promises — especially when documents vary.",
      items: [
        {
          q: "What is Mezgeb AI?",
          a: "Mezgeb AI is building document-intelligence workflows that help organizations transform paper documents and scanned files into structured, searchable information.",
        },
        {
          q: "What types of documents can it work with?",
          a: "Potential workflows include institutional forms, academic records, applications, administrative documents, and other structured or semi-structured records. Suitability depends on the document format, scan quality, and extraction requirements.",
        },
        {
          q: "Does it support Amharic documents?",
          a: "Amharic and mixed Amharic-English documents are central to our product direction. Performance depends on the document type and quality, so language and extraction requirements should be evaluated against representative samples.",
        },
        {
          q: "Can it handle handwritten documents?",
          a: "Handwriting can be substantially more challenging than clean printed text. We would assess handwriting requirements separately rather than assume the same results as printed documents.",
        },
        {
          q: "Can we start with one document type?",
          a: "Yes. A focused pilot around one recurring document workflow is a practical way to establish requirements and evaluate results before expanding to additional document types.",
        },
        {
          q: "How do we get started?",
          a: "Share the document types your team handles, what information you need from them, and where the current process becomes difficult. We can use that context to scope an initial discussion.",
        },
      ],
    },
    cta: {
      headline: "Your records are full of information. Let's make it useful.",
      body: "Tell us about the documents your team works with and the process you'd like to improve.",
      button: "Discuss a pilot",
      tagline: "Mezgeb AI · Document intelligence for Ethiopian workflows.",
    },
    footer: {
      tagline: "From documents to structured information.",
      navigation: "Navigation",
      contact: "Contact",
      contactBody:
        "Ready to explore a focused pilot around one document workflow?",
      copyright: "© 2026 Mezgeb AI. All rights reserved.",
    },
    lang: {
      en: "EN",
      am: "አማ",
      switchTo: "Language",
    },
  },
  am: {
    brand: "መዝገብ AI",
    brandShort: "መዝገብ",
    nav: {
      platform: "ስርዓቱ",
      howItWorks: "አሠራሩ",
      useCases: "የአገልግሎት ዘርፎች",
      faq: "ተደጋጋሚ ጥያቄዎች",
      cta: "ለሙከራ ትግበራ ያነጋግሩን",
      openMenu: "ምናሌ ክፈት",
      closeMenu: "ምናሌ ዝጋ",
    },
    hero: {
      eyebrow:
        "ዘመናዊ የሰነድ መረጃ ማቀናበሪያ · ለኢትዮጵያ ተቋማት የሥራ ሂደት የተገነባ",
      headline1: "መረጃው በሰነዶችዎ ውስጥ አለ።",
      headline2: "እኛ ለሥራ ዝግጁ እናደርገዋለን።",
      body: "መዝገብ AI ተቋማት በወረቀት የተከማቹ ማህደሮችን እና በስካነር የተነሱ (Scanned) ሰነዶችን ወደ ተደራጀ፣ በቀላሉ የሚፈለግ እና ለሲስተም ዝግጁ ወደሆነ ዲጂታል መረጃ እንዲቀይሩ ያግዛል — በአማርኛ፣ በእንግሊዝኛ እንዲሁም በሁለቱም ቋንቋዎች የተዘጋጁ ሰነዶችን ጨምሮ።",
      primaryCta: "ለሙከራ ትግበራ (Pilot) ያነጋግሩን",
      secondaryCta: "አሠራሩን ይመልከቱ",
      caption:
        "ከሰነድ ቅበላ እስከ ተደራጀ ዳታ — ወሳኝ በሆኑ ቦታዎች ሁሉ ከትክክለኛነት ማረጋገጫ ጋር።",
    },
    workbench: {
      disclaimer:
        "ለማሳያ የተዘጋጁ ናሙናዎች · ምናባዊ የተቋም መረጃ · የቀጥታ ምርት (Production) መለኪያ አይደለም",
      flow: "ምንጭ ሰነድ → መረጃ ነጥሎ ማውጣት → ማረጋገጥ → ማጣራት",
      tabs: [
        "01 · የንግድ ምዝገባ እና ደንበኛ ማጣራት (KYC)",
        "02 · የጭነት ሰነድ እና ደረሰኝ (Waybill & Invoice)",
        "03 · የሕክምና እና ኢንሹራንስ (Clinical & Insurance)",
      ],
      sourceDocument: "ምንጭ ሰነድ",
      extractedRecord: "ተለይቶ የወጣ መረጃ · Schema v2.4",
      checks: "የህግ ማረጋገጫዎች",
      review: "ማጣራት",
      fieldKey: "የመረጃ መለያ",
      extractedNormalized: "የወጣ እና ወጥ የተደረገ መረጃ",
      status: "ሁኔታ",
      exportPreview: "የወጪ ቅድመ እይታ",
      officialStamp: "ሕጋዊ ማህተም",
      authorizedSignature: "የተፈቀደ ፊርማ",
      statuses: {
        verified: "ተረጋግጧል",
        normalized: "ፎርማቱ ተስተካክሏል",
        rulePassed: "መስፈርቱን አሟልቷል",
        mathVerified: "ስሌቱ ተረጋግጧል",
        needsReview: "ማጣራት ይፈልጋል",
      },
      notes: {
        calendarNormalized: "የኢትዮጵያ የቀን አቆጣጠር ወደ ወጥ ፎርማት የተቀየረ",
        formatCheck: "የፎርማት ማረጋገጫ",
        sumMatches: "ድምሩ ከዝርዝር መስመሮች ጋር ይመሳከራል",
        stampOverlap: "የማህተም መደራረብ ተገኝቷል",
        stampNearTotal: "ማህተሙ በድምር መስመር አቅራቢያ ነው",
        multiRow: "ባለብዙ ረድፍ የዝርዝር ሰንጠረዥ",
        tinCheck: "የ10 አሃዝ ፎርማት ማረጋገጫ",
      },
    },
    problem: {
      eyebrow: "መረጃው ከወዲሁ በእጅዎ ላይ አለ",
      headline:
        "ችግሩ የመረጃ እጥረት አይደለም፤ መረጃውን ከሰነዶች ውስጥ ነጥሎ ማውጣት እንጂ።",
      body1:
        "ወሳኝ የተቋም መረጃዎች ብዙውን ጊዜ በወረቀት ፋይሎች፣ በስካነር በተነሱ PDF ሰነዶች እና ወጥ ባልሆኑ ቅጾች ውስጥ ተቆልፈው ይቀራሉ። አንድ ነጠላ መረጃ ለማግኘት ፋይሉን መክፈት፣ በዓይን ማንበብ እና ያንኑ መረጃ በድጋሚ ወደ ሌላ ሲስተም በእጅ መመዝገብ (Data entry) ይጠይቃል።",
      body2:
        "በከፍተኛ የሰነድ ብዛት ደረጃ ይህ አሠራር ተደጋጋሚ የሰው ኃይል ድካምን፣ የመረጃ አሰባሰብ መዘግየትን እና የአመዘጋገብ ስህተቶችን ያስከትላል።",
      items: [
        {
          num: "01",
          title: "መረጃ በፋይሎች ውስጥ ተቀብሮ ይቀራል",
          copy: "የሰነዶች ይዘት በወረቀት ወይም በምስል ደረጃ ብቻ ሲቀመጥ መረጃውን በፍጥነት ለመፈለግ፣ ለማመሳከር እና ለማውጣት አዳጋች ይሆናል።",
        },
        {
          num: "02",
          title: "አድካሚ የእጅ ሥራ ይበዛል",
          copy: "ባለሙያዎች በወረቀት ላይ ያለን መረጃ በተደጋጋሚ በማንበብ፣ በመገልበጥ፣ በማጣራት እና እንደገና ወደ ኮምፒውተር በመመዝገብ ውድ ጊዜያቸውን ያጠፋሉ።",
        },
        {
          num: "03",
          title: "የሰነዶች ቅርጽና ጥራት ይለያያል",
          copy: "የሰነዶች የገጽ አቀማመጥ፣ የስካን ጥራት፣ የቋንቋ ቅይጥ እና የቅጾች ልዩነት ወጥ የሆነ መረጃ ለማውጣት አስቸጋሪ ያደርገዋል።",
        },
      ],
    },
    platform: {
      eyebrow: "ከሰነዶች ወደ ውሳኔ",
      headline: "አንድ የተቀናጀ የሥራ ሂደት። ከጥሬ ገጾች ወደ ተደራጀ መረጃ።",
      body: "መዝገብ AI ተቋማት የተነሱ (Scanned) ሰነዶችን ከማከማቸት ባለፈ፣ በውስጣቸው ያለውን መረጃ ለይተው በማውጣት፣ ትክክለኛነቱን በማረጋገጥ እና በማደራጀት ለሥራ እንዲያውሉት ታስቦ የተገነባ ነው።",
      note: "ይህ የምርቱ አጠቃላይ የሥራ ሂደት ሲሆን፣ እንደ ሰነዶቹ ዓይነት እና እንደ ተቋሙ መስፈርት ደረጃዎቹ ሊስተካከሉ ይችላሉ።",
      stages: [
        {
          id: "01",
          stage: "ማዘጋጀት",
          title: "ሰነዶችን ለንባብና ለትንተና ዝግጁ ማድረግ",
          copy: "በስካነር የተነሱ ገጾችን እና PDF ፋይሎችን የገጽ ጥራት፣ አቀማመጥ እና የሰነድ መዋቅር በማስተካከል ለቀጣዩ ትንተና ማዘጋጀት።",
        },
        {
          id: "02",
          stage: "ነጥሎ ማውጣት",
          title: "ገጾችን ወደ ተደራጁ የመረጃ መስኮች (Fields) መቀየር",
          copy: "በቅጾች እና በማህደሮች ውስጥ የሚገኙ አስፈላጊ መረጃዎችን (የአማርኛ እና የእንግሊዝኛ ቅይጥ ጽሑፎችን ጨምሮ) በመለየት ወጥ ወደሆነ መዋቅር ማደራጀት።",
        },
        {
          id: "03",
          stage: "ማረጋገጥ",
          title: "መረጃውን ለሥራ ከማዋልዎ በፊት ትክክለኛነቱን መፈተሽ",
          copy: "የጎደሉ፣ እርስ በርስ የሚቃረኑ ወይም የባለሙያ ማጣራት የሚሹ መረጃዎችን ለመለየት የአሠራር ህጎችንና የሎጂክ ማረጋገጫዎችን መተግበር።",
        },
        {
          id: "04",
          stage: "ማስረከብ",
          title: "የተረጋገጠውን መረጃ ለሥራ ማዋል",
          copy: "የጸደቁ ውጤቶችን ለፍለጋ፣ ለሪፖርት፣ ለዳታ ዝውውር (Export) እና ከተቋሙ ነባር ሲስተሞች ጋር ለማስተሳሰር በሚያመች መልኩ ማደራጀት።",
        },
      ],
    },
    language: {
      eyebrow: "የሀገራችንን የሰነድ አሠራር ያገናዘበ",
      headline: "ሁሉም ሰነዶች አንድ ዓይነት ቅርጽ የላቸውም።",
      body: "የኢትዮጵያ ተቋማት ሰነዶች አማርኛን፣ እንግሊዝኛን፣ ቁጥሮችን፣ ሰንጠረዦችን፣ ማህተሞችን እና የተለያዩ የገጽ አቀማመጦችን አጣምረው ይይዛሉ። ውጤታማ የሰነድ ማቀናበሪያ ስርዓት ሁሉም ሰነድ ተመሳሳይ ቅጽ ይከተላል ብሎ ከመገመት ይልቅ ይህንን ነባራዊ ውስብስብነት ያገናዘበ መሆን አለበት።",
      points: [
        "የአማርኛ እና የእንግሊዝኛ ቅይጥ ይዘቶች",
        "ቅጾች፣ ሰንጠረዦች እና ባለብዙ ገጽ ማህደሮች",
        "የተለያዩ የገጽ አቀማመጦች እና የስካን ጥራት ደረጃዎች",
        "የተደራጀ መረጃ ማውጣት — አስፈላጊ በሆነ ቦታ ከህግ ማረጋገጫ እና ከባለሙያ ማጣራት ጋር",
      ],
      close: "ቡድንዎ በዕለት ተዕለት ሥራው በሚያስተናግዳቸው ሰነዶች ይጀምሩ።",
      cta: "ስለ ተቋምዎ የሰነድ ሥራ እንወያይ",
      sampleLabel: "የቋንቋ ቅይጥ ሰነድ · ለማሳያ",
    },
    useCases: {
      eyebrow: "ስርዓቱ የሚያግዝባቸው ዘርፎች",
      headline: "በማህደሮችዎ ውስጥ ለተደበቀው ሥራ የተገነባ።",
      body: "የተለያዩ ተቋማት የተለያዩ ሰነዶችን ያስተናግዳሉ፤ የሁሉም የጋራ ፈተና ግን ሰነዶቹን ባለሙያዎች በቀላሉ ሊያገኙት፣ ሊያጣሩት እና ሊጠቀሙበት ወደሚችሉት መረጃ መቀየር ነው።",
      note: "እነዚህ ዘርፎች ለማሳያ የቀረቡ ናቸው። ትክክለኛው የሥራ ሂደት የሚወሰነው በሰነዶቹ ዓይነት፣ በመረጃው ጥራት እና በተቋሙ መስፈርቶች ላይ ተመስርቶ ነው።",
      items: [
        {
          category: "የፋይናንስ ተቋማት",
          title: "የሰነድ ማጣራት ሂደትን ማቀላጠፍ",
          copy: "የብድርና የአገልግሎት ማመልከቻዎችን፣ ደጋፊ ሰነዶችን፣ የደንበኞች ማህደሮችን (KYC) እና ሌሎች ሰፊ መረጃ ያላቸውን ፋይሎች በፍጥነት ለማዘጋጀት ያግዛል።",
        },
        {
          category: "የመንግስት እና የሕዝብ አገልግሎቶች",
          title: "ለተቋማዊ ማህደሮች ወጥ መዋቅር መስጠት",
          copy: "ቅጾችን፣ የአስተዳደር መዝገቦችን፣ የጉዳይ ማህደሮችን (Case files) እና በቀላሉ መፈለግ የሚገባቸውን ሰነዶች በሥርዓት ለማደራጀት ይረዳል።",
        },
        {
          category: "የትምህርት ተቋማት",
          title: "የትምህርት መዝገቦችን ማደራጀት",
          copy: "ከተማሪዎች ማህደር፣ ከምዝገባ ሰነዶች፣ ከትራንስክሪፕቶች እና ከተቋማዊ ቅጾች ላይ የተደራጀ መረጃ ለይቶ ለማውጣት ያስችላል።",
        },
        {
          category: "ኦፕሬሽን እና አስተዳደር",
          title: "ተደጋጋሚ የሰነድ ሥራዎችን መቀነስ",
          copy: "ተደጋጋሚ ቅጾችን እና የውስጥ መዝገቦችን ነባር የሥራ ሂደቶችን ሊመግብ ወደሚችል የተደራጀ ዲጂታል መረጃ መቀየር።",
        },
      ],
    },
    trust: {
      eyebrow: "አስተማማኝ ዳታ ከንባብ ያለፈ ማረጋገጫ ይፈልጋል",
      headline: "መረጃውን ነጥሎ ማውጣት የሥራው ግማሽ ብቻ ነው።",
      body1:
        "አንድ መረጃ ከሰነድ ላይ ወጥቶም ስህተት ሊሆን ይችላል። አንድ ሰነድ በግልጽ የሚነበብ ሆኖም የጎደለ ወይም እርስ በርስ የሚቃረን መረጃ ሊይዝ ይችላል።",
      body2:
        "የመዝገብ AI አቀራረብ በተደራጀ ውጤት፣ በማረጋገጫ ህጎች (Validation rules) እና ትኩረት የሚሹ ጉዳዮችን በባለሙያ በማጣራት ላይ ያተኩራል — ስለዚህ ቡድንዎ በጥሬ የOCR ጽሑፍ ላይ ብቻ ሳይሆን በተረጋገጠ መረጃ ላይ የተመሰረተ የሥራ ሂደት መገንባት ይችላል።",
      illustrative: "ለማሳያ የቀረበ በይነገጽ",
      fieldReview: "የመረጃ ማጣራት",
      flagged: "ትኩረት የሚሻ",
      needsReview: "ማጣራት ይፈልጋል",
      reason: "የተመዘገበ ካፒታል መረጃ ላይ የማህተም መደራረብ ተገኝቷል።",
      ruleCheck: "የህግ ማረጋገጫ",
      rules: [
        "የTIN ቁጥር ትክክለኛነት ተረጋግጧል",
        "የዝርዝር ክፍያዎች ድምር ከጠቅላላ ድምሩ ጋር ይመሳከራል",
        "በካፒታል መጠን ላይ የማህተም መደራረብ አለ",
      ],
      principles: [
        {
          title: "መዋቅር",
          copy: "ተለይቶ የወጣውን መረጃ ወጥ ወደሆኑ መስኮች (Fields) እና መዝገቦች ማደራጀት።",
        },
        {
          title: "ማረጋገጫ",
          copy: "አስፈላጊ መረጃዎች መሟላታቸውን መፈተሽ እና ለሥራው ተገቢ የሆኑ ህጎችን መተግበር።",
        },
        {
          title: "የባለሙያ ማጣራት",
          copy: "የሰው እይታ ወይም ውሳኔ የሚያስፈልጋቸውን መረጃዎች ለይቶ ማቅረብ።",
        },
      ],
    },
    pilot: {
      eyebrow: "በተጨባጭ የሥራ ሂደት ይጀምሩ",
      headline: "መፍትሔ የሚሻ የሰነድ ሥራዎን ይዘው ይምጡ።",
      body1:
        "ለመጀመር ሙሉ የተቋምዎን የመዝገብ አያያዝ ስርዓት በአንድ ጊዜ መቀየር አይጠበቅብዎትም። በአንድ የሰነድ ዓይነት፣ በአንድ ተደጋጋሚ ተግባር እና ግልጽ በሆነ የውጤት መለኪያ ይጀምሩ።",
      body2:
        "መዝገብ AI ሰነዶቹን ለመረዳት፣ አስፈላጊ የሆኑትን መረጃዎች ለመለየት እና ውጤታማ የሙከራ ትግበራ (Pilot) ለመቅረጽ ከቡድንዎ ጋር በጋራ ይሰራል።",
      supporting:
        "ቡድንዎ ዛሬ የሚያከናውነውን የሰነድ ሥራ ይንገሩን፤ ከዚያ እንጀምራለን።",
      formTitle: "ለሙከራ ትግበራ ያነጋግሩን",
      formNote:
        "ይህ ቅጽ ለማሳያ ነው። መረጃው በአሳሽ ውስጥ ብቻ ይረጋገጣል፤ ወደ መዝገብ AI አይላክም።",
      name: "ስም",
      organization: "ተቋም",
      email: "የሥራ ኢሜይል",
      message: "የሰነድ ሥራ ሂደት",
      messagePlaceholder:
        "ምን ዓይነት ሰነዶችን ያስተናግዳሉ? ጠቃሚ ውጤት ምን መምሰል አለበት?",
      submit: "ለሙከራ ትግበራ ያነጋግሩን",
      validated: "ቅጹ በአካባቢ ተረጋግጧል።",
      validatedNote:
        "መልዕክት አልተላከም። የመገናኛ መንገድ ሲኖር ከዚህ ገጽ መድረስ ይቻላል።",
      reset: "ቅጹን ዳግም አስጀምር",
      steps: [
        {
          num: "01",
          title: "መረዳት",
          copy: "ሰነዶቹን፣ አሁን ያለውን የሥራ ሂደት እና ዋናውን የሥራ ማነቆ መለየት።",
        },
        {
          num: "02",
          title: "መወሰን",
          copy: "ተለይተው መውጣት ያለባቸውን መረጃዎች፣ የማረጋገጫ መስፈርቶችን እና ውጤቱ የሚለካበትን መንገድ በጋራ መወሰን።",
        },
        {
          num: "03",
          title: "መገምገም",
          copy: "የተመረጠውን የሥራ ሂደት በተጨባጭ ናሙና ሰነዶች ላይ በመፈተሽ ውጤቱን በጋራ መገምገም።",
        },
      ],
      errors: {
        name: "እባክዎ ስምዎን ያስገቡ።",
        organization: "እባክዎ ተቋምዎን ያስገቡ።",
        email: "እባክዎ ትክክለኛ ኢሜይል ያስገቡ።",
        message: "እባክዎ የሰነድ ሥራዎን በአጭሩ ይግለጹ።",
      },
    },
    faq: {
      eyebrow: "ተደጋጋሚ ጥያቄዎች",
      headline: "ቀድመው ሊመለሱ የሚገባቸው ጥያቄዎች።",
      subheadline:
        "በተለይም የሰነዶች ባህሪ በሚለያይበት ጊዜ፣ ከተጋነኑ የተስፋ ቃላት ይልቅ ግልጽ የሆነ መግባባት ወሳኝ ነው።",
      items: [
        {
          q: "መዝገብ AI ምንድን ነው?",
          a: "መዝገብ AI የወረቀት ማህደሮችን፣ በስካነር የተነሱ ምስሎችን እና ዲጂታል PDF ፋይሎችን ወደ ተደራጀ፣ በቀላሉ የሚፈለግ እና የተረጋገጠ ዲጂታል ዳታ የሚቀይር የሰነድ መረጃ ማቀናበሪያ ስርዓት ነው።",
        },
        {
          q: "ከምን ዓይነት ሰነዶች ጋር መስራት ይችላል?",
          a: "ቅጾችን፣ ሰንጠረዦችን፣ ደረሰኞችን፣ የደንበኛ ማህደሮችን፣ የሕክምና እና የትምህርት መዝገቦችን ጨምሮ የተለያየ አቀማመጥ ካላቸው ባለአንድ ወይም ባለብዙ ገጽ ሰነዶች ጋር ይሰራል።",
        },
        {
          q: "የአማርኛ ሰነዶችን ይደግፋል?",
          a: "አዎ። ስርዓቱ በአማርኛ፣ በእንግሊዝኛ እንዲሁም ሁለቱም ቋንቋዎች ተቀላቅለው የተጻፉ የኢትዮጵያ ተቋማዊ ሰነዶችን ለማስተናገድ ተደርጎ የተገነባ ነው።",
        },
        {
          q: "በእጅ የተጻፉ (Handwritten) ሰነዶችን ማንበብ ይችላል?",
          a: "የታተሙ (Printed) ሰነዶች ለመጀመሪያ ደረጃ አውቶሜሽን ይበልጥ ምቹ ሲሆኑ፣ የእጅ ጽሑፍ እና ማህተም ያለባቸው ክፍሎች እንደ ጥራታቸው ደረጃ ተለይተው በሲስተሙ ይነበባሉ፤ አጠራጣሪ የሆኑት ደግሞ በቀጥታ ለባለሙያ ማጣራት (Human review) እንዲቀርቡ ይደረጋል።",
        },
        {
          q: "በአንድ የሰነድ ዓይነት ብቻ መጀመር እንችላለን?",
          a: "አዎ፣ የሚመከረውም ይኸው ነው። ሙሉ ስርዓትዎን በአንድ ጊዜ ከመቀየር ይልቅ፣ ከፍተኛ የሥራ ጫና ባለበት አንድ የሰነድ ዓይነት የሙከራ ትግበራ (Pilot) በመጀመር ውጤቱን በተጨባጭ መለካት ይቻላል።",
        },
        {
          q: "እንዴት መጀመር እንችላለን?",
          a: "«ለሙከራ ትግበራ ያነጋግሩን» የሚለውን በመጫን የሚያስተናግዷቸውን የሰነድ ዓይነቶች ያሳውቁን። የምህንድስና ቡድናችን ከእርስዎ ጋር በመሆን ናሙና ሰነዶችን የሚፈትሽበትን የሙከራ ማዕቀፍ ያዘጋጃል።",
        },
      ],
    },
    cta: {
      headline: "ማህደሮችዎ በመረጃ የተሞሉ ናቸው። ለሥራ እንዲውሉ እናድርጋቸው።",
      body: "ቡድንዎ ስለሚሰራባቸው ሰነዶች እና ሊያሻሽሉት ስለሚፈልጉት የሥራ ሂደት ይንገሩን።",
      button: "ለሙከራ ትግበራ ያነጋግሩን",
      tagline: "መዝገብ AI · ከሰነዶች ወደ ተደራጀ መረጃ።",
    },
    footer: {
      tagline: "ከሰነዶች ወደ ተደራጀ መረጃ።",
      navigation: "አሰሳ",
      contact: "ግንኙነት",
      contactBody:
        "በአንድ የሰነድ ሥራ ሂደት ዙሪያ የሙከራ ትግበራ ለመጀመር ዝግጁ ነዎት?",
      copyright: "© 2026 መዝገብ AI. መብቱ በሕግ የተጠበቀ ነው።",
    },
    lang: {
      en: "EN",
      am: "አማ",
      switchTo: "ቋንቋ",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)["en"];
