import { SignInButton, AuthKitProvider } from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";
import { JsonRpcProvider } from "ethers";

const config = {
  domain: "https://spinning-sphere-788554.framer.app/",
  siweUri: "https://spinning-sphere-788554.framer.app/",
  provider: new JsonRpcProvider(undefined, 10),
};

const SignInWidget = () => {
  const nonce = "your_nonce_here"; // You may want to make this dynamic
  return (
    <AuthKitProvider config={config}>
      <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <SignInButton
        nonce={nonce}
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
