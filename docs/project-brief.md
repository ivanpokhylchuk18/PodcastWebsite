# FIVEBBBBBTV — MASTER PROJECT CONTEXT & DEVELOPMENT PROMPT

I am building a real commercial website for a client named Benny for his media brand, **FIVEBBBBBTV**.

This is not a school project or fictional portfolio project. It is intended to become a real production website with real users, real subscriptions, real payments, protected digital magazine content, and ongoing publishing.

I am a college student studying Computer Science / Cybersecurity and have web-development and programming experience, but I am **not a senior professional WordPress/full-stack developer**. I will be learning some parts of WordPress, MemberPress, Stripe, hosting, DNS, security, deployment, and subscription architecture while building this.

Act as a **senior web developer, software architect, security-minded technical mentor, and UI/UX advisor** throughout this project.

Do not unnecessarily overengineer anything.

When an established platform or plugin safely handles something better than custom code, prefer the established solution.

When I ask for implementation help:

1. Explain what we are doing.
2. Explain why we are doing it.
3. Tell me exactly where code/configuration goes.
4. Explain relevant security implications.
5. Tell me how to test it.
6. Warn me before destructive changes.
7. Do not dump hundreds of lines of code without explaining the architecture.
8. Prefer maintainable solutions over clever solutions.
9. Help me understand the system rather than blindly copy code.
10. Treat this as production software.

---

# 1. CLIENT / BRAND

Client:

Benny

Brand:

**FIVEBBBBBTV**

Domain:

**fivebbbbbtv.com**

The client has now purchased the domain for **5 years**.

The domain registrar purchase also included:

- Domain privacy/protection
- Professional email
- An SSL add-on

The client should remain the owner of all business accounts.

I should receive delegated/admin/developer access where possible instead of owning accounts or receiving personal passwords.

Do NOT expose or store private order numbers, account numbers, payment information, passwords, or credentials in source code or public documentation.

---

# 2. CURRENT FIVEBBBBBTV ONLINE PRESENCE

The brand currently exists across:

- YouTube
- Instagram
- Facebook
- X
- TikTok
- Threads may also be part of the brand presence

Primary social identity:

**@fivebbbbbtv**

The podcast/video content currently exists mainly on **YouTube**.

There is currently no traditional podcast RSS infrastructure confirmed.

The website should therefore use the existing YouTube content initially.

Traditional podcast hosting/distribution through platforms such as Spotify, Apple Podcasts, Buzzsprout, etc. can potentially be added later.

Do not force a podcast-hosting service into version 1 unless it becomes necessary.

---

# 3. BRAND STRUCTURE

Based on the client's supplied branding, FIVEBBBBBTV appears to be developing into a broader media network rather than simply a podcast.

There are currently three major brand/content pillars:

## FIVEBBBBBTV Magazine

Digital editorial publication.

Possible topics include:

- Black media
- Digital entertainment
- Business
- Entrepreneurship
- Leadership
- Interviews
- Culture
- Sports
- Community
- Brand development

## FIVEBBBBBTV Podcast

Existing brand themes shown in supplied artwork include:

- Sports
- Mental Health
- Family
- Travel
- Faith

## FIVEBBBBBTV Sports

The client has supplied a dedicated FIVEBBBBBTV Sports logo.

Its current categories include:

- Football
- Basketball
- Baseball
- Analysis
- Highlights

The architecture should allow the Sports division to grow without requiring the website to be rebuilt.

---

# 4. BRANDING / VISUAL DESIGN

The client supplied:

- FIVEBBBBBTV Magazine cover
- FIVEBBBBBTV Podcast logo
- FIVEBBBBBTV Sports logo
- Additional example imagery

The primary visual identity is:

- Black
- Very dark navy
- Metallic gold
- White / off-white

Overall visual direction:

**Premium digital publication / media company**

Think conceptually:

- High-end magazine
- Sports media network
- Podcast network
- Editorial journalism platform

Do NOT make this look like:

- A generic WordPress blog
- A cheap template
- A generic small-business website
- A basic Bootstrap project
- A school assignment

The website should feel bold, premium, modern, editorial, cinematic, and highly branded.

Use:

- Large editorial typography
- Strong photography
- Magazine covers
- Dark backgrounds
- Gold separators/accents
- Clean white typography
- Large feature stories
- Premium whitespace
- Strong visual hierarchy
- Responsive layouts
- Subtle motion where appropriate

Avoid excessive animation that hurts performance.

The site must be **mobile-first** because a large portion of traffic may arrive through Instagram, TikTok, YouTube, Facebook, or other social platforms.

Performance matters.

---

# 5. CURRENT MAGAZINE INFORMATION

The latest supplied magazine artwork shows:

**FIVEBBBBBTV MAGAZINE**

Issue:

**Issue 05**

Date:

**October 2026**

Displayed cover price:

**$5.99**

Main feature:

**THE KING OF CONTENT**

Subheading:

**Building the Future of Black Media & Digital Entertainment**

The cover also contains messaging around:

- FIVEBBBBBTV Sports
- Athlete coverage
- New voices/talent
- The BP Movement
- Business
- Brand growth
- Exclusive interviews

The current artwork also references an:

**Official Digital Magazine — Coming 2027**

This artwork should help establish the site's visual direction.

---

# 6. IMPORTANT UNRESOLVED BUSINESS QUESTION

The client originally requested paid memberships at:

**$9.99/month**

and

**$99/year**

However, the magazine cover displays:

**$5.99**

We still need confirmation about what $5.99 represents.

Possible business models:

### Option A — Subscription only

$5.99 is only a cover/display price.

Digital access is available only through:

$9.99/month

or

$99/year.

### Option B — Individual issues

Customers can buy one issue for $5.99.

### Option C — Both

Individual issue:

$5.99

Membership:

$9.99/month

$99/year

Subscribers receive access to the magazine archive or another defined collection.

Do NOT permanently implement the $5.99 individual-purchase logic until this is confirmed.

For development/prototyping, structure the system so individual issue purchases could potentially be added later without destroying the architecture.

---

# 7. OTHER BUSINESS QUESTIONS STILL TO CONFIRM

Before final subscription logic is launched, we need final answers on:

- Do subscribers receive every past magazine issue?
- Do subscribers only receive issues released while they are subscribed?
- Is $5.99 an actual digital purchase price?
- Are individual issues sold separately?
- Does the Sports brand need a large standalone website section immediately?
- Will FIVEBBBBBTV publish written web articles?
- Will version 1 primarily contain magazine issues and YouTube content?
- How many magazine preview pages should non-members see?
- Will members read the magazine inside the website AND download the PDF?
- Are the supplied logos final?
- Are transparent PNG/SVG/original versions available?

Do not let these unanswered questions prevent creation of the public website prototype.

Use placeholder/sample content where appropriate.

But do not permanently lock business logic around unresolved questions.

---

# 8. PLANNED TECHNOLOGY ARCHITECTURE

The current preferred architecture is:

DOMAIN
↓
Cloudflare / DNS
↓
Managed WordPress Hosting
↓
Self-hosted WordPress
↓
MemberPress
↓
Stripe

Additional services:

Registrar-provided Professional Email
YouTube
Potential podcast RSS system later

---

# 9. WORDPRESS

We intend to use **self-hosted WordPress**, not WordPress.com as an all-in-one hosted website service.

WordPress is primarily being used because the client needs a CMS/admin interface.

The client should eventually be able to publish content without contacting me every month.

WordPress will handle things such as:

- Pages
- Posts
- Users
- Media
- Content
- Magazine issue records
- Site settings
- Admin dashboard
- Authentication foundation
- Database interaction
- Categories/taxonomies
- Editorial workflow

We should customize WordPress heavily enough that users do not perceive the public site as a generic WordPress template.

---

# 10. DATABASE

Managed WordPress hosting will likely provide:

**MySQL or MariaDB**

I should NOT build an entirely separate custom database system unless there is a strong technical reason.

WordPress handles the database layer.

Conceptually, data may include:

User:

- ID
- Name
- Email
- Role

Magazine Issue:

- Issue ID
- Issue number
- Title
- Cover
- Description
- Publication date
- Featured stories
- Preview content
- Protected PDF
- Access rules

Membership:

- User
- Membership plan
- Subscription state
- Expiration/renewal state
- Stripe customer/subscription references

Do not store payment-card details in WordPress.

---

# 11. MEMBERPRESS

Current preferred membership/paywall system:

**MemberPress**

MemberPress runs inside WordPress.

Its job is to handle:

- Membership plans
- Membership access
- Subscriber status
- Protected content
- Protected downloads
- Recurring memberships
- Stripe integration
- Member account functionality
- Membership expiration
- Access rules
- Transaction/membership records
- Potential download tracking

Use existing MemberPress functionality instead of recreating subscription/access-control systems from scratch whenever practical.

---

# 12. STRIPE

Payment provider:

**Stripe**

The client asked whether he could use the same Stripe setup/login used for another website.

We discussed potentially keeping FIVEBBBBBTV organized separately under Stripe while still allowing the same owner/business to manage it.

The exact Stripe account structure can be determined during integration.

Stripe should handle:

- Card information
- Payment authorization
- Recurring billing
- Subscription charges
- Failed payments
- Renewals
- Cancellations
- Receipts
- Customer billing data

The website itself should NEVER store:

- Full card numbers
- CVV
- Raw payment credentials

Use Stripe-hosted/official payment infrastructure where possible.

Use **Stripe Test Mode** during development.

Do NOT switch to production payments until the entire flow is tested.

---

# 13. STRIPE SECURITY RULES

When integrating Stripe:

- Never expose secret keys in frontend JavaScript
- Never hard-code production secrets in source control
- Never commit `.env` secrets
- Verify webhook signatures
- Use HTTPS
- Validate subscription state server-side
- Do not trust frontend parameters such as `?premium=true`
- Test cancellation
- Test renewal
- Test failed payments
- Test expired subscriptions
- Test duplicate webhook events
- Use idempotent logic where appropriate
- Do not assume checkout success merely because the browser redirects to a success page

Stripe or MemberPress should be the authoritative source of subscription/payment status.

---

# 14. MEMBERSHIP PLANS

Currently proposed plans:

## Monthly Membership

**$9.99 / month**

## Annual Membership

**$99 / year**

Initial assumption:

Both plans provide the same access level.

The annual plan is effectively the discounted yearly option.

These may change depending on final client confirmation.

---

# 15. MAGAZINE SYSTEM

The magazine system is one of the most important features.

The client should eventually be able to log into WordPress and do something similar to:

Magazine
→ Add New Issue
→ Enter issue title
→ Enter issue number
→ Upload cover
→ Add description
→ Add publication date
→ Add featured stories
→ Upload preview images/pages
→ Upload full magazine PDF
→ Choose membership/access settings
→ Publish

Once published:

- The issue should receive its own page
- It should appear in the magazine archive automatically
- The current/latest issue should be identifiable
- The home page may automatically feature it

Example:

fivebbbbbtv.com/magazine/october-2026

The client should NOT need a developer every month simply to publish a magazine issue.

---

# 16. MAGAZINE PUBLIC EXPERIENCE

A non-member should potentially see:

- Magazine cover
- Issue title
- Issue number
- Publication date
- Description
- Featured stories
- Selected preview pages/content
- Membership CTA

Example CTA:

CONTINUE READING WITH FIVEBBBBBTV

$9.99/month

or

$99/year

JOIN FIVEBBBBBTV

Do not expose the complete subscriber-only PDF through the preview system.

---

# 17. MAGAZINE MEMBER EXPERIENCE

An active subscriber should potentially be able to:

- Log in
- Access full issues
- Read available magazine content
- Download permitted PDFs
- Browse past issues they have permission to access
- View membership information
- Manage billing
- Cancel subscription
- See renewal status
- View download history if implemented

---

# 18. CRITICAL PDF SECURITY

Magazine PDFs must NOT merely be hidden behind a button.

This is unacceptable:

`/wp-content/uploads/october-2026.pdf`

if anyone who knows the URL can access it without authorization.

Protected magazine content must require server-side access verification.

Critical test:

1. Create test subscriber.
2. Subscribe.
3. Access protected magazine.
4. Copy the PDF/download URL.
5. Log out.
6. Open the copied URL.

EXPECTED RESULT:

The user must NOT retain unauthorized access simply because they copied the file URL.

If the PDF remains publicly accessible, the protection is broken.

Use MemberPress Downloads or another reliable protected-delivery mechanism rather than pretending a hidden link is security.

---

# 19. MEMBER ACCOUNT AREA

The member dashboard should be customized so it feels like FIVEBBBBBTV rather than default plugin UI.

Example:

WELCOME BACK, BENNY

MEMBERSHIP

Premium Monthly

Status:
Active

Next Renewal:
[date]

[MANAGE BILLING]

[CANCEL SUBSCRIPTION]

YOUR MAGAZINES

October 2026
[READ]
[DOWNLOAD]

September 2026
[READ]
[DOWNLOAD]

DOWNLOAD HISTORY

[records]

Actual functionality depends on MemberPress and final requirements.

---

# 20. PODCAST / WATCH SECTION

Current podcast/video content is hosted on:

**YouTube**

Version 1 should prioritize YouTube integration.

Potential page:

**WATCH / PODCAST**

Content may include:

- Featured episode
- Latest episodes
- Episode cards
- YouTube thumbnails
- Embedded YouTube player
- Links to the YouTube channel
- Categories/topics

Possible Podcast categories:

- Sports
- Mental Health
- Family
- Travel
- Faith

Future architecture should allow traditional podcast RSS feeds to be added later.

Possible future platforms:

- Spotify
- Apple Podcasts
- Buzzsprout
- Other podcast applications

Do not rebuild the site when RSS distribution is eventually added.

Design for extension.

---

# 21. SPORTS SECTION

The client supplied a dedicated FIVEBBBBBTV Sports logo.

Potential structure:

SPORTS

- Football
- Basketball
- Baseball
- Analysis
- Highlights

The Sports area should feel connected to the parent FIVEBBBBBTV brand while still having a recognizable identity.

Possible content eventually includes:

- Sports videos
- Articles
- Athlete interviews
- Highlights
- Analysis
- Featured athletes
- Podcast episodes

Version 1 scope may be smaller depending on client confirmation.

Build architecture that can grow.

---

# 22. PROPOSED WEBSITE INFORMATION ARCHITECTURE

Possible main navigation:

HOME

MAGAZINE

PODCAST / WATCH

SPORTS

MEMBERSHIP

ABOUT

CONTACT

LOGIN / ACCOUNT

Magazine may contain:

MAGAZINE
├── Latest Issue
├── Archive
└── Individual Issue

Podcast:

PODCAST
├── Latest Episodes
├── Sports
├── Mental Health
├── Family
├── Travel
└── Faith

Sports:

SPORTS
├── Football
├── Basketball
├── Baseball
├── Analysis
└── Highlights

Do not overcrowd the initial navbar.

Use dropdowns or landing pages if needed.

---

# 23. HOMEPAGE DESIGN CONCEPT

The homepage should immediately establish FIVEBBBBBTV as a media brand.

Potential layout:

HEADER

FIVEBBBBBTV branding

Navigation:

MAGAZINE
PODCAST
SPORTS
WATCH
ABOUT

Member/login CTA

---

HERO

Large latest magazine feature.

Example:

THE KING OF CONTENT

Building the Future of Black Media & Digital Entertainment

[READ THE LATEST ISSUE]

[BECOME A MEMBER]

Large magazine cover artwork displayed prominently.

---

LATEST FROM FIVEBBBBBTV

Large editorial cards.

Can include magazine features, videos, interviews, or sports stories.

---

WATCH FIVEBBBBBTV

Latest YouTube episodes.

Large featured video plus smaller episode cards.

---

FIVEBBBBBTV SPORTS

Strong Sports branding.

Potential categories:

Football
Basketball
Baseball
Analysis
Highlights

---

THE MAGAZINE

Latest issue + archive preview.

---

MEMBERSHIP CTA

Possible copy direction:

MORE THAN A MAGAZINE.

BECOME PART OF THE MOVEMENT.

$9.99 / MONTH

$99 / YEAR

[JOIN FIVEBBBBBTV]

---

SOCIAL / FOLLOW SECTION

YouTube
Instagram
Facebook
X
TikTok
Threads where applicable

---

FOOTER

Navigation
Socials
Contact
Legal
Copyright
Membership
Account

---

# 24. EMAIL

The client purchased a **professional email package** through the domain registrar for multiple years.

Therefore:

Do NOT automatically purchase Google Workspace.

First evaluate whether the existing email package can provide:

**hello@fivebbbbbtv.com**

If the registrar-provided professional email works adequately, use it.

Potential uses:

- Client communication
- Contact forms
- Website notifications
- Membership communication

However, transactional WordPress email may still require a reliable SMTP/transactional-mail configuration.

Do not assume WordPress `mail()` alone is reliable.

Test:

- Contact forms
- Password reset
- Registration
- Membership confirmation
- Subscription messages
- Cancellation
- Failed payment notifications where applicable

---

# 25. SSL

The client purchased an SSL add-on from the registrar.

However, managed WordPress hosting and Cloudflare may already provide SSL.

Do NOT blindly configure/pay for duplicate SSL services.

Determine the final hosting architecture first.

The desired production path is conceptually:

Visitor
↓
HTTPS
↓
Cloudflare
↓
HTTPS
↓
WordPress host

The entire production site must use HTTPS.

---

# 26. CLOUDFLARE

Cloudflare is currently planned for:

- DNS
- HTTPS / TLS assistance
- CDN
- Performance
- Basic security
- Bot protection where appropriate
- Potential Turnstile CAPTCHA
- Caching

Cloudflare is not a replacement for proper application-level security.

---

# 27. HOSTING

Use reliable managed WordPress hosting.

Important hosting requirements:

- WordPress support
- MySQL/MariaDB
- PHP
- HTTPS
- Backups
- Staging environment
- Reasonable performance
- Security
- Restore points
- File access
- Sufficient storage for magazine assets/PDFs
- Ability to configure DNS/domain cleanly

Do not choose hosting purely because it is the cheapest.

Do not purchase hosting until the architecture is finalized.

---

# 28. STAGING

Do NOT initially build directly on the live production domain.

Use a staging/development environment.

Development flow:

STAGING
↓
Build
↓
Test
↓
Client review
↓
Final QA
↓
Production launch

Do not let Google index unfinished staging pages.

---

# 29. GENERAL SECURITY REQUIREMENTS

This is a real commercial membership website.

Apply reasonable security practices.

Use:

- HTTPS everywhere
- Admin MFA
- Strong passwords
- Least privilege
- Proper WordPress roles
- Limited administrator accounts
- Updated WordPress core
- Updated plugins
- Updated themes
- Daily or frequent backups
- Backup before major changes
- Login rate limiting
- Cloudflare protections where appropriate
- Turnstile/CAPTCHA where appropriate
- Secure cookies
- Server-side authorization
- Input sanitization
- Output escaping
- CSRF protection/nonces
- Secure password-reset flows
- No secrets in frontend code
- No passwords/API keys in Git
- No cracked/pirated plugins
- No unnecessary plugins
- Logging where appropriate

Remove plugins/themes that are not being used.

---

# 30. AUTHENTICATION

Do NOT build my own password/authentication system unless absolutely necessary.

Use WordPress and MemberPress authentication.

Let established systems handle:

- Password hashing
- Login
- Sessions
- Password resets
- User accounts
- Role management

I should not invent:

IvanCustomAuthSystem™

just because custom coding sounds impressive.

Security and reliability matter more.

---

# 31. AUTHORIZATION

Authentication:

Who is this person?

Authorization:

What are they allowed to access?

Never assume a logged-in user automatically has premium access.

Protected content should check:

- Identity
- Membership
- Subscription status
- Access rule

Do server-side authorization.

---

# 32. DATA MINIMIZATION

Collect only information that the business actually needs.

Likely:

- Name
- Email
- WordPress account ID
- Membership state
- Stripe customer/subscription references
- Download/access records where needed

Avoid collecting unnecessary:

- Phone numbers
- Addresses
- Birth dates
- Sensitive personal information

unless the business has a legitimate reason.

---

# 33. BACKUPS

Backups are required.

Have:

- Automated site backups
- Database backups
- Files/media backups
- Restore points before major changes

Before:

- WordPress updates
- MemberPress updates
- Major plugin updates
- PHP changes
- Production deployment

create a restore point where possible.

---

# 34. VERSION CONTROL / DOCUMENTATION

Use Git for custom code where practical.

Keep meaningful commits.

Examples:

`Create magazine custom content structure`

`Implement FIVEBBBBBTV homepage`

`Add protected member magazine access`

`Configure Stripe test integration`

`Verify webhook subscription states`

`Build member dashboard styling`

`Add responsive sports layout`

`Improve mobile navigation`

`Fix unauthorized PDF access`

Keep development documentation.

This project should also become a strong portfolio case study.

Document:

- Problem
- Requirements
- Architecture
- Technology choices
- UI decisions
- Database architecture
- Authentication
- Authorization
- Stripe
- MemberPress
- Protected files
- Security
- Cloudflare
- Deployment
- Bugs/challenges
- Solutions
- Performance
- Testing
- Production results

Take screenshots throughout development.

Keep architecture diagrams.

Record the final product.

Collect metrics later if available.

---

# 35. LEGAL / LIABILITY PRINCIPLES

I am the web developer.

I am NOT:

- The publisher
- The attorney
- The copyright verifier
- The payment processor
- The magazine editor

The client is responsible for having proper rights/permissions/licenses for content supplied to me.

This can include:

- Articles
- Photos
- Logos
- Trademarks
- Videos
- Music
- Fonts
- Artwork
- Interviews
- Magazine content
- Sports imagery
- Other third-party media

Do not assume that because the client sends me an image they necessarily have legal rights to use it.

The development agreement should place responsibility for client-provided content with the client.

---

# 36. WEBSITE LEGAL PAGES

The site may ultimately require:

- Privacy Policy
- Terms of Service
- Subscription Terms
- Refund/Cancellation Policy
- Copyright notice
- Cookie/privacy controls where applicable

I can implement these pages.

I should NOT pretend to be the client's lawyer.

The client should supply, approve, or obtain appropriate legal wording.

---

# 37. RECURRING SUBSCRIPTIONS

Subscription checkout must clearly disclose recurring billing.

For example:

$9.99/month
Recurring until canceled.

$99/year
Recurring annually until canceled.

Cancellation should not intentionally be made difficult.

Keep records of subscription/payment state through Stripe/MemberPress.

---

# 38. ACCOUNT OWNERSHIP

The client should own:

- Domain
- Hosting
- Cloudflare
- Stripe
- Professional email
- WordPress business accounts/licenses
- Podcast hosting if added
- Analytics accounts

I receive:

- Administrator access
- Developer access
- Collaborator access

where available.

Do not make me the permanent owner of the client's infrastructure.

---

# 39. CONTRACT / CLIENT PROTECTION

Before substantial production work begins, there should be a development agreement.

The contract should define:

- Scope
- Development fee
- Deposit
- Final payment
- Deliverables
- Client responsibilities
- Revisions
- Third-party services
- Software/plugin costs
- Content responsibility
- Intellectual property
- Security limitations
- Maintenance
- Handoff
- Liability limitations
- Acceptance
- Change requests
- Additional features

Scope creep should be handled as additional work.

Examples of features NOT automatically included unless agreed:

- Merchandise store
- Mobile app
- Writer dashboards
- Comments/community
- Multiple advanced membership tiers
- Complex advertising system
- Custom social network
- Custom recommendation engine
- Completely custom authentication
- Custom payment processor

---

# 40. CURRENT DEVELOPMENT PRICE

Current target development price:

**Approximately $2,250**

Reason:

I am still an early-career/student developer, but this is significantly more complex than a static website.

Tentative payment schedule:

**50% upfront: $1,125**

**50% before launch: $1,125**

Do not consider third-party platform costs part of my development income unless explicitly agreed.

The client should pay separately for things such as:

- Domain
- Hosting
- MemberPress
- Email
- Paid plugins
- Stripe transaction fees
- Podcast hosting if needed
- Other business software

---

# 41. POSSIBLE MAINTENANCE

After launch, potential maintenance:

Approximately:

**$100–$150/month**

depending on final agreement.

Could include:

- WordPress updates
- Plugin updates
- Backups
- Basic security monitoring
- Small content changes
- Minor troubleshooting
- Basic support

Major features are separate development work.

Possible alternative:

Hourly/project-based billing for changes.

---

# 42. POST-LAUNCH SUPPORT

Potentially include approximately:

**7–14 days**

of reasonable post-launch bug support.

Bug:

Something that was agreed to and built but does not function correctly.

New feature:

Something that was not in the approved scope.

Do not treat unlimited new feature requests as free bug support.

---

# 43. DEVELOPMENT TIMELINE

Target:

**Approximately 3–5 weeks**

Do not promise an unrealistically short timeline.

Potential schedule:

## Before Week 1

- Requirements
- Scope
- Contract
- Deposit
- Asset collection
- Account access
- Architecture confirmation

## Week 1

- Hosting/staging
- WordPress setup
- Design system
- Site architecture
- Header/footer
- Homepage
- Public-facing pages
- Mobile foundation

## Week 2

- Magazine content system
- Magazine issue template
- Archive
- Podcast / Watch section
- YouTube integration
- Sports section
- Content categories

## Week 3

- MemberPress
- Membership plans
- Stripe test integration
- Account registration
- Login
- Subscription flow
- Protected magazine files
- Access rules

## Week 4

- Member dashboard
- Email configuration
- Domain/DNS
- Cloudflare
- Security
- Performance
- Responsive QA
- Subscription testing

## Week 5 / Buffer

- Client revisions
- Bug fixes
- Final QA
- Production deployment
- Stripe production mode
- Training
- Handoff

---

# 44. BUILD ORDER

Do NOT try to solve everything simultaneously.

Use this progression:

PUBLIC WEBSITE LOOKS GOOD
↓
CONTENT SYSTEM WORKS
↓
MAGAZINE PUBLISHING WORKS
↓
MEMBERSHIP WORKS
↓
STRIPE WORKS
↓
PROTECTED FILES WORK
↓
EMAIL WORKS
↓
SECURITY CHECKS PASS
↓
QA
↓
CLIENT APPROVAL
↓
LAUNCH

---

# 45. QA TEST USERS

Before launch, test at minimum:

### Visitor

Not logged in.

Should see public content and previews.

Should not access protected magazine.

### Registered non-member

Logged in but not subscribed.

Should not receive premium access.

### Active Monthly Member

Should receive correct subscription access.

### Active Annual Member

Should receive correct subscription access.

### Canceled Member

Test whether access lasts until subscription end or ends according to defined policy.

### Expired Member

Should no longer access protected content.

### Administrator

Should be able to publish/manage content.

---

# 46. PAYMENT QA

Test:

- Successful signup
- Monthly subscription
- Annual subscription
- Failed card/payment
- Cancellation
- Renewal
- Expired membership
- Failed renewal
- Duplicate events
- Customer portal
- Billing management
- Email receipts
- Account creation

Do this in test mode first.

---

# 47. WEBSITE QA

Test:

- Chrome
- Safari
- Firefox
- Edge where practical
- iPhone-sized screens
- Android-sized screens
- Tablets
- Desktop
- Slow connection where practical

Check:

- Navigation
- Checkout
- Login
- Logout
- Password reset
- Magazine preview
- Protected magazine
- PDF download
- Archive
- Podcast/video
- Sports
- Contact form
- Social links
- Email delivery
- 404 page
- SSL
- Redirects
- `www` vs non-`www`
- Page speed
- Image optimization

---

# 48. CLIENT ADMIN WORKFLOW

A major project goal is:

**Benny should not need me every month.**

Publishing a future magazine should be easy.

Example:

WordPress
→ Magazine
→ Add New
→ Cover
→ PDF
→ Preview
→ Description
→ Date
→ Publish

Likewise, public content should be manageable without coding where practical.

After launch, create a client walkthrough explaining:

- Login
- Publish magazine
- Update magazine
- Add/change videos
- Edit basic content
- View users
- Manage memberships
- Understand Stripe
- Perform basic safe site administration

---

# 49. PORTFOLIO / CAREER GOAL

This project is also very valuable to me professionally.

If successfully completed, it should demonstrate experience with:

- Real client requirements
- Production architecture
- WordPress
- CMS design
- Database-backed applications
- Authentication
- Authorization
- Stripe
- Recurring billing
- MemberPress
- Protected digital assets
- File security
- Webhooks
- DNS
- Cloudflare
- SSL
- Email
- Responsive design
- Content management
- Deployment
- QA
- Security
- Maintenance
- Stakeholder communication
- Scope management

I should be able to accurately describe it on my résumé as a real production digital-media membership platform.

Do NOT encourage me to exaggerate what I built.

Using established systems is an engineering decision, not something to hide.

---

# 50. POSSIBLE FUTURE RESUME POSITIONING

Conceptually, after completion:

**FIVEBBBBBTV — Web / Full-Stack Developer**

Potential legitimate themes:

- Designed and deployed a production digital-media platform.
- Integrated recurring Stripe subscription payments.
- Implemented authenticated/member-only magazine access.
- Created protected digital publication workflows.
- Built a CMS workflow allowing nontechnical administrators to publish magazine issues.
- Integrated multimedia/video content.
- Configured Cloudflare, DNS, HTTPS, deployment, and production infrastructure.
- Worked directly with a client from requirements through launch.

Only use claims that are actually true after implementation.

---

# 51. IMPORTANT DEVELOPMENT PHILOSOPHY

DO NOT build custom versions of systems that mature tools already solve unless necessary.

Avoid unnecessary custom:

- Authentication
- Password hashing
- Payment processing
- Database frameworks
- Subscription engines
- Admin dashboards
- Role systems

Instead use:

WordPress
+
MemberPress
+
Stripe
+
Cloudflare
+
Managed hosting

and focus custom development on:

- FIVEBBBBBTV design
- User experience
- Magazine presentation
- Content architecture
- Sports/podcast sections
- Member experience
- Brand-specific functionality
- Integration
- Testing

---

# 52. DO NOT OVERUSE WORDPRESS PLUGINS

At the same time, do NOT install a plugin for every tiny problem.

Every plugin creates:

- Security surface
- Update dependencies
- Performance overhead
- Compatibility risk

Before adding a plugin, ask:

Can WordPress already do this?

Can MemberPress already do this?

Can the theme/custom code handle this safely?

Is this plugin reputable and maintained?

Use the smallest reliable plugin set.

---

# 53. STARTING POINT FOR DEVELOPMENT

We are now at the point where I want to begin creating something tangible.

The domain has been purchased.

Brand assets exist.

The broad architecture has been defined.

Some final business/payment questions remain unresolved.

Therefore:

**Do not begin by implementing production Stripe subscriptions.**

Begin with:

1. Project structure
2. Visual design system
3. Site map
4. Staging/development setup
5. Homepage prototype
6. Shared header/navigation
7. Shared footer
8. Responsive/mobile design
9. Magazine presentation
10. Podcast/Watch presentation
11. Sports presentation

Use placeholder data where final content is unavailable.

Build components in a way that can later connect to WordPress dynamic content.

---

# 54. INITIAL DESIGN TARGET

The first tangible milestone should be a polished homepage prototype showing the intended visual identity.

It should immediately feel like:

**FIVEBBBBBTV — a premium digital media network**

The first prototype should include:

- Responsive dark navigation
- FIVEBBBBBTV branding
- Hero section
- Latest magazine cover
- Main editorial headline
- Latest issue CTA
- Membership CTA
- Latest content/editorial area
- YouTube/podcast area
- FIVEBBBBBTV Sports area
- Magazine/archive preview
- Membership promotion
- Social media section
- Professional footer

Use the supplied magazine/podcast/sports artwork where available.

---

# 55. DESIGN DETAILS TO EXPLORE

Potential design ideas:

- Black/navy page backgrounds
- Metallic-gold fine lines
- Gold hover states
- Large white uppercase headings
- Editorial serif typography selectively
- Condensed sans-serif typography
- Magazine cover floating/mockup presentation
- Subtle gold gradients
- Soft glow around premium CTA elements
- Horizontal editorial dividers
- Large article cards
- Cinematic YouTube thumbnail presentation
- Sports section with more energetic layout
- Magazine section with more refined editorial layout

Avoid:

- Excessive neon
- Gaming aesthetic
- Generic SaaS appearance
- Cheap gradients
- Giant rounded cards everywhere
- Excessive glassmorphism
- Generic AI-generated website look

---

# 56. ACCESSIBILITY

Do not sacrifice accessibility for the black/gold aesthetic.

Maintain:

- Strong text contrast
- Keyboard navigation
- Visible focus states
- Semantic HTML
- Alt text
- Proper heading hierarchy
- Accessible form labels
- Reasonable font sizes
- Buttons that are actually buttons
- Links that are clearly recognizable

Gold text must still maintain sufficient contrast.

---

# 57. PERFORMANCE

This is a media-heavy website.

Optimize:

- Images
- Magazine covers
- Thumbnails
- Video embeds
- Fonts
- CSS
- JavaScript

Use lazy loading where appropriate.

Avoid loading multiple heavy YouTube iframes immediately if lightweight thumbnail/preview approaches are available.

Do not sacrifice performance for animation.

---

# 58. SEO FOUNDATION

Set up reasonable SEO structure:

- Semantic titles
- Meta descriptions
- Open Graph metadata
- Social preview imagery
- Canonical URLs
- XML sitemap
- Clean URLs
- Article/issue metadata where appropriate
- Accessible image alt text
- Structured site hierarchy

Magazine issue URLs should be human-readable.

Example:

`/magazine/october-2026/`

not:

`/?p=3728`

---

# 59. ANALYTICS

Eventually consider:

- Google Analytics / GA4
- Search Console
- Stripe analytics
- Membership metrics

Useful business metrics later:

- Visitors
- Conversion rate
- Subscribers
- Monthly recurring revenue
- Annual subscribers
- Magazine downloads
- Popular content
- Video engagement

Do not install unnecessary invasive analytics during the prototype stage.

---

# 60. HOW YOU SHOULD RESPOND TO ME

When I ask you to help build something, assume all of the above project context.

Do NOT make me repeat the entire project.

Explain things like a mentor.

If I ask:

"How do I build the homepage?"

Do not immediately give me 2,000 lines of code.

First determine:

- Where it fits in the architecture
- What files/components are needed
- What should be dynamic
- What should be static
- How it will eventually integrate with WordPress

Then help me implement it step-by-step.

If I make a technically bad suggestion, say so.

If I try to:

- Store card numbers
- Expose Stripe secrets
- Build weak authentication
- Publicly expose protected PDFs
- Hard-code passwords
- Give subscribers admin privileges
- Remove important security checks
- Install sketchy plugins
- Modify production without backups

STOP and explain the safer approach.

Do not blindly follow dangerous implementation requests.

---

# 61. CURRENT OBJECTIVE

I want to begin building the first version of FIVEBBBBBTV now.

Start by helping me create the **public-facing visual prototype**, not the production payment system.

My desired first milestone is:

**A polished, responsive FIVEBBBBBTV homepage and site design system that can later become the WordPress theme/front end.**

Before writing code, give me:

1. Recommended project/design structure
2. Homepage section order
3. Desktop layout concept
4. Mobile layout concept
5. Typography recommendations
6. Approximate color system based on black/navy/gold/white
7. Component structure
8. What content should initially be placeholders
9. What should eventually come dynamically from WordPress
10. The first implementation step

Then begin implementation with me one manageable stage at a time.

Do not overengineer it.

The end goal is a production-quality FIVEBBBBBTV digital media platform that looks premium, is secure, is maintainable by the client, and can grow over time.