import { AuthKitProvider, SignInButton } from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";
import { JsonRpcProvider } from "ethers";

const config = {
  domain: "spinning-sphere-788554.framer.app",
  siweUri: "https://spinning-sphere-788554.framer.app",
  provider: new JsonRpcProvider(undefined, 10),
  relay: "https://relay.farcaster.xyz",
};

const SignInWidget = () => {
  const nonce = "your_nonce_here"; // You may want to make this dynamic
  return (
    <AuthKitProvider config={config}>
      <div
        style={{
          fontFamily: "sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          margin: 0,
          backgroundColor: "transparent",
        }}
      >
        <SignInButton
          nonce={nonce}
          onError={(error) => {
            console.error(error);
          }}
          onSuccess={({ fid, username }) => {
            console.log(`Signed in as ${username} (fid: ${fid})`);
            window.parent.postMessage(
              { type: "farcaster-auth-success", fid, username },
              "*"
            );
          }}
        />
      </div>
    </AuthKitProvider>
  );
};

export default SignInWidget;
