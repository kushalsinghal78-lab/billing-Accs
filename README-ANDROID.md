# Mom's Pride Billing — Android APK Project

This project is prepared to package the Mom's Pride web app as an Android APK using Capacitor.

## Requirements
- Node.js 20+
- Android Studio
- Android SDK / platform tools
- Java 17

## Build
From this project directory:

```bash
npm install
npx cap add android
npx cap sync android
npx cap open android
```

In Android Studio:
- Build > Build Bundle(s) / APK(s) > Build APK(s)

The APK will be under:
`android/app/build/outputs/apk/debug/`

For a release APK, configure a signing key in Android Studio and choose Generate Signed Bundle / APK.

## App ID
`com.momspride.billing`

## Current V1 functionality
- Mobile dashboard
- Product/inventory records
- POS sales
- Purchase entry
- Bill upload queue
- Customers/suppliers
- Payments/expenses
- Review queue
- Local browser storage

## Important production work
TallyPrime integration and production-grade OCR are NOT faked. They require:
1. A secure backend/database.
2. TallyPrime Bridge/API integration with the computer running Tally.
3. OCR/document extraction service.
4. Authentication and role permissions.
5. Proper accounting/GST ledger implementation.
6. Backup/sync and audit logging.

## Android enhancements planned
- Native camera capture for supplier bills
- File/PDF picker
- Share invoice
- Offline-first data
- Push/sync status
- Tally connection status
