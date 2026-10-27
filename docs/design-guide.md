# FIVEBBBBBTV — stage 1

## Purpose and scope
This is a local visual foundation for a future self-hosted WordPress theme. It is not a deployed platform. Stage 1 establishes navigation, cover-led hero, brand pillars, proposed membership presentation and footer. The complete homepage remains the first milestone, not a claim of completed production work.

## Design system
- Background #080B10; navy surface #111925; gold #D6B56D; off-white #F5F1E8; muted text #B8BDC5.
- Impact/Arial Narrow/system sans-serif for large headlines; Arial/Helvetica for body; Georgia for selective editorial accents. No external fonts or tracking requests.
- Maximum content width 1240px. Desktop: two-column hero and issue introduction. Mobile: stacked content, collapsible navigation, generous touch targets.
- Fine rules, rectangular buttons, restrained gold, uncropped cover art. Avoid glass effects and unnecessary animation.
- Reusable patterns: wordmark/header, navigation, eyebrow/section heading, issue cover, network card, action link/button, plan panel and footer. These are CSS/HTML patterns, not a component framework.

## Full homepage order
Header → latest issue hero → latest editorial stories → Watch/Podcast → Sports → archive preview → membership → verified social links → footer.

Stage 1 uses brand pillar introductions in place of invented stories and video episodes. Next stage should add real editorial cards, actual YouTube episode links, the archive preview, verified social links and About/Contact destinations. Do not manufacture published issues, testimonials, article titles or publication dates.

## Sitemap and WordPress migration
Home; Magazine (latest, archive, /magazine/october-2026/); Watch/Podcast; Sports; Membership; About; Contact; Account; client-approved legal pages.

Use a theme for presentation and a small site-specific plugin for the magazine content model so changing themes does not delete its registration. Initial prototype HTML can become PHP templates and template parts; CSS tokens remain reusable. Select the final WordPress theme approach in the CMS stage.

Dynamic later: WordPress menus, homepage feature selection, issue number/title/date/cover/description, public preview pages, posts, episode records and topic categories. Protected file references must never be rendered into public previews. Store public cover/preview images separately from protected PDFs. Model billing/access through MemberPress, not custom frontend logic.

## Unresolved decisions
What does $5.99 mean? Individual sales? Archive entitlement? Downloads versus reading only? Preview page count? Version 1 article and Sports scope? Final logos and source assets? Confirm before implementing access rules or checkout. Monthly $9.99 and annual $99 are proposed, equal-access plans only; do not promise archive access.

## Assets and content
Only the three selected branding images are copied to public/assets. Original images/ includes a private receipt and is ignored by Git and never served by the preview server. Do not deploy the workspace root. Supplied cover says October 2026 and coming 2027: show both as artwork context, not a live release claim. Rights clearance remains a client responsibility before publication.

## Next stages
1. Review this typography, cover layout and mobile navigation.
2. Complete the public homepage sections using approved stories, episodes, archive data and social destinations.
3. Build WordPress staging and publishing workflow.
4. Integrate MemberPress and Stripe in test mode after business decisions.
5. Verify protected delivery, emails, billing states and role-based access before launch.

No production DNS, hosting, payment or authentication changes have been made.
