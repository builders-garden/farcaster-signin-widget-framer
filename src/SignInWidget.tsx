import { SignInButton } from "@farcaster/auth-kit";

const SignInWidget = () => {
  const nonce = "your_nonce_here"; // You may want to make this dynamic
  return (
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
  );
};

export default SignInWidget;
