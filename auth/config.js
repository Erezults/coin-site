/* Coin auth-callback config — the ONLY file to edit at the Supabase cut-over.
 *
 * SUPABASE_URL / SUPABASE_ANON_KEY: the NEW (Erezults-owned) project's URL and
 *   public anon key — the same public key that ships in the app bundle (not a
 *   secret; access is enforced by RLS). Left empty until the cut-over: today's
 *   Lovable-Cloud project sends 6-digit codes, not links, so nothing points here
 *   yet. While empty, the page still confirms sign-up links and explains how to
 *   reset with the in-app code instead of offering a web password form.
 *
 * APP_SCHEME: custom URL scheme of the iOS app, WITHOUT "://". The app
 *   (com.erezcohen.cointracklover) registers NO scheme today (no
 *   CFBundleURLTypes in ios/App/App/Info.plist, nothing in capacitor.config.ts),
 *   so "Open Coin" buttons stay hidden and an App Store link is shown instead.
 *   If the app later registers e.g. "cointracklover", set it here.
 */
window.COIN_AUTH_CONFIG = {
  SUPABASE_URL: '',
  SUPABASE_ANON_KEY: '',
  APP_SCHEME: 'cointracklover',
  APP_STORE_URL: 'https://apps.apple.com/app/id6759471186'
};
